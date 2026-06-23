const Jimp = require('jimp');

async function run() {
  const imgPath = "C:\\Users\\888vi\\.gemini\\antigravity\\brain\\6d6b029c-feb0-4307-9766-d285f75e78a9\\oasis_energy_logo_generic_1782213511041.png";
  console.log("Reading image...");
  const image = await Jimp.read(imgPath);
  
  console.log("Processing pixels...");
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Calculate difference from pure white (255, 255, 255)
    const diff = Math.sqrt(Math.pow(255-r, 2) + Math.pow(255-g, 2) + Math.pow(255-b, 2));
    
    if (diff < 15) {
      this.bitmap.data[idx + 3] = 0; // Pure transparent for white/near-white
    } else if (diff < 120) {
      // For anti-aliased edges, map alpha based on difference
      let alpha = Math.floor(((diff - 15) / 105) * 255);
      this.bitmap.data[idx + 3] = alpha;
    }
  });
  
  console.log("Writing output...");
  await image.writeAsync("public/brand-icon-transparent.png");
  console.log("Done!");
}
run().catch(console.error);
