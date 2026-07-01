import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Zap, Wind, ShieldCheck, Activity } from "lucide-react";
import Image from "next/image";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";

export function TechnologyOverview() {
  const features = [
    {
      icon: <Wind className="h-6 w-6 text-emerald-500" />,
      title: "Ultra-Low Wind Speeds",
      desc: "World's lowest starting speed of just 1.4 m/s and cut-in speed of 1.9 m/s."
    },
    {
      icon: <Zap className="h-6 w-6 text-emerald-500" />,
      title: "Direct Drive, Gearless",
      desc: "Multi-phase, multi-voltage, air-core and brushless axial flux HAWT."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
      title: "Extreme Durability",
      desc: "Survival speed of 60 m/s (cyclonic winds). Works in harsh marine, desert & snow conditions."
    },
    {
      icon: <Activity className="h-6 w-6 text-emerald-500" />,
      title: "Whisper Quiet",
      desc: "Noiseless operation—produces less than 10% of the sound of the wind itself."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-emerald-500 rounded-full blur-[150px] absolute -top-40 -right-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-3">The Technology</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 font-heading leading-tight">
              Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Maximum Efficiency</span>
            </h3>
            <p className="text-lg text-slate-300 font-light">
              Avatar™ features a revolutionary Super Efficient Axial Flux Horizontal Axis Wind Turbine (HAWT) design, scaling seamlessly from 1kW to 10kW and beyond.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors h-full">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-4 border border-emerald-500/30">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-heading">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="left" className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 p-1">
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 group bg-white/5 shadow-2xl">
                <Image 
                  src="/avatar/tech-diagram.jpg"
                  alt="Technical Diagram of Avatar-I Axial Flux HAWT Turbine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -left-6 -bottom-6 bg-white text-slate-900 px-6 py-4 rounded-2xl shadow-2xl font-bold flex flex-col gap-1 items-center animate-bounce duration-[3000ms]">
              <span className="text-xs uppercase tracking-widest text-slate-500">Starts At</span>
              <span className="text-2xl text-emerald-600">1.4 m/s</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
