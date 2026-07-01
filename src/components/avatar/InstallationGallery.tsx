import { FadeIn } from "@/components/ui/fade-in";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import Image from "next/image";

export function InstallationGallery() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading leading-tight">
            Extreme Environments. <br/><span className="text-emerald-400">Proven Performance.</span>
          </h2>
          <p className="text-lg text-slate-300 font-light">
            Tested and proven in some of the most unforgiving climates on Earth.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-6 max-w-7xl w-full mx-auto">
          {/* Top Full Width Image (Truck) */}
          <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-800">
            <img 
              src="/avatar/installation-leh-1.jpg"
              alt="Avatar Turbine mounted for Indian Army"
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex flex-col justify-end p-8 pointer-events-none">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading">The Himalayas: Leh, Ladakh</h3>
              <p className="text-slate-200 font-medium">Indian Army Camp at 11,000 ft above sea level. Surviving -30°C temperatures.</p>
            </div>
          </div>
          
          {/* Bottom Row: 2 Images Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-800">
              <img 
                src="/avatar/installation-leh-2.jpg"
                alt="Indian Army installing the Avatar turbine in Leh, Ladakh"
                className="w-full h-auto block"
              />
            </div>
            <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-800">
              <img 
                src="/avatar/installation-leh-certificate.jpg"
                alt="Indian Army soldiers securing the turbine"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
