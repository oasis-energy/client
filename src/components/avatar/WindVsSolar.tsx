import { FadeIn } from "@/components/ui/fade-in";
import { Check, X } from "lucide-react";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import Image from "next/image";

export function WindVsSolar() {
  const comparisons = [
    { feature: "Power Generation", wind: "Day & Night (24/7)", solar: "Daytime Only" },
    { feature: "Space Utilization", wind: "Lower (Vertical Area)", solar: "Higher (Rooftop Area)" },
    { feature: "Annual Generation", wind: "Higher", solar: "Lower" },
    { feature: "Efficiency", wind: "Higher", solar: "Lower" },
    { feature: "Battery Life", wind: "Longer (Continuous Charge)", solar: "Shorter (Deep Cycles)" },
    { feature: "Water Consumption", wind: "Zero", solar: "Requires Cleaning" },
    { feature: "Impact of Air/Dust", wind: "Zero Impact", solar: "Reduces Efficiency" },
    { feature: "Weather Reliance", wind: "Unaffected by Clouds/Rain", solar: "Stops in Rain/Snow/Clouds" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading leading-tight">
              Wind vs <span className="text-amber-500">Solar</span>
            </h2>
            <p className="text-lg text-slate-600 font-light">
              While solar is a great supplementary source, Avatar™ Wind Turbines offer unparalleled advantages for true 24/7 energy independence, generating more kW per SqFt.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-lg">
              <div className="space-y-4">
                {comparisons.map((item, i) => (
                  <div key={i} className="grid grid-cols-12 gap-4 items-center py-3 border-b border-slate-200 last:border-0">
                    <div className="col-span-12 sm:col-span-5 font-semibold text-slate-700">
                      {item.feature}
                    </div>
                    <div className="col-span-6 sm:col-span-4 flex items-center gap-2 text-emerald-600 font-medium">
                      <Check className="w-4 h-4 shrink-0" />
                      <span className="text-sm">{item.wind}</span>
                    </div>
                    <div className="col-span-6 sm:col-span-3 flex items-center gap-2 text-slate-500 text-sm">
                      <X className="w-4 h-4 shrink-0 opacity-50" />
                      <span>{item.solar}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="order-1 lg:order-2">
            <div className="relative min-h-[500px] lg:min-h-[700px]">
              <div className="absolute inset-0 right-1/4 bottom-1/4 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10 hidden md:block bg-slate-100">
                <Image 
                  src="/avatar/solar-panels.png"
                  alt="Cluttered solar panels taking up entire rooftop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 left-1/4 top-1/4 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-20 bg-slate-100">
                <Image 
                  src="/avatar/hero-turbine.jpg"
                  alt="Sleek Avatar Turbine taking up minimal space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
