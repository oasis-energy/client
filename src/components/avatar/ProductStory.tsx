import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import Image from "next/image";

export function ProductStory() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-[2rem] transform -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl p-2">
              {/* <AssetPlaceholder 
                source="Avant Garde Innovations Profile.pdf" 
                page={1} 
                description="Photo of Founder Arun George at UN Headquarters" 
                className="w-full aspect-[4/5] object-cover rounded-2xl"
              /> */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                <Image 
                  src="/avatar/founder-un.png"
                  alt="Founder Arun George at UN Headquarters"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <h2 className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-3">Our Story</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading leading-tight">
              A Mission to End <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Energy Poverty</span>
            </h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                Avant Garde Innovations™ is a pioneering cleantech company established with a singular vision: to eliminate energy poverty in carbon-intensive economies through green, sustainable, and innovative solutions.
              </p>
              <p>
                In 2015, the prototype of the Small Wind Turbine was developed to decentralize and democratize wind energy for the common people. 
              </p>
              <p>
                The same year, Avant Garde Innovations™ was honored to be the only Indian private company invited to the UN headquarters in New York to attend the watershed announcement of the new <strong>Sustainable Development Goals (SDGs)</strong>.
              </p>
            </div>
            
            <StaggerContainer className="grid grid-cols-2 gap-6 mt-10">
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <h4 className="font-bold text-3xl text-emerald-600 mb-1">Top 20</h4>
                  <p className="text-sm text-emerald-800 font-medium">Cleantech Innovations in India (UNIDO)</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-100">
                  <h4 className="font-bold text-3xl text-cyan-600 mb-1">Make in India</h4>
                  <p className="text-sm text-cyan-800 font-medium">Officially Recognized by GOI</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
