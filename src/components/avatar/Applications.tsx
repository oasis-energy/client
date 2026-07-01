import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Building2, Building, Home, Factory, Sprout, Network } from "lucide-react";

export function Applications() {
  const applications = [
    { icon: <Building2 className="w-8 h-8 text-white" />, title: "Smart Cities", desc: "Enables localized, self-sufficient sustainable energy for urban planning." },
    { icon: <Home className="w-8 h-8 text-white" />, title: "Residential", desc: "Safe rooftop installations contributing to Green Building LEED points." },
    { icon: <Building className="w-8 h-8 text-white" />, title: "Commercial", desc: "Tall rise buildings benefit greatly from higher wind speeds at elevation." },
    { icon: <Network className="w-8 h-8 text-white" />, title: "Micro-Grids", desc: "Deployable as decentralized micro-grids for remote or island locations." },
    { icon: <Factory className="w-8 h-8 text-white" />, title: "Industrial", desc: "Support for Net-Metering and Virtual Net Metering to offset massive loads." },
    { icon: <Sprout className="w-8 h-8 text-white" />, title: "Agriculture", desc: "Powering remote irrigation pumps and farming equipment off-grid." },
  ];

  return (
    <section className="py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading leading-tight">
            Versatile Applications
          </h2>
          <p className="text-lg text-slate-600 font-light">
            From smart cities to high-altitude military camps, Avatar™ adapts to the environment.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {applications.map((app, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-slate-100 h-full group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform shadow-lg">
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">{app.title}</h3>
                <p className="text-slate-600 leading-relaxed">{app.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
