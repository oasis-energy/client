import Image from "next/image";
import { Zap, Target, Shield, Users, Leaf, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "About Us | Oasis Energy",
  description: "Learn about Oasis Energy's mission to transform Rajasthan's energy landscape with premium renewable solutions.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/30 via-primary to-primary opacity-80" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Powering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300">Rajasthan</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl font-light">
              We bridge the gap between world-class sustainable technologies and the industries, communities, and businesses that need them most.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-gray-100 shadow-xl shadow-primary/5 group">
                <img 
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Wind Turbines at Sunset" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply" />
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Our Mission</h2>
              <h3 className="text-3xl font-bold text-primary mb-6 font-heading">
                To accelerate the adoption of clean, scalable, and decentralized energy.
              </h3>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Oasis Energy was born from a simple realization: Rajasthan holds immense potential for renewable energy generation, yet many industries and communities still rely on fragile, carbon-heavy grids.
                </p>
                <p>
                  We started by partnering with <strong>Avant Garde Energy</strong> to bring their revolutionary <strong>Avatar™</strong> wind turbines to the region. These turbines, capable of generating power day and night across any wind direction, represent the pinnacle of decentralized energy.
                </p>
                <p>
                  But wind is just our foundation. Our vision is to build a comprehensive, multi-category energy portfolio—integrating solar, advanced storage, and microgrid management—to provide 100% energy independence.
                </p>

                <ul className="space-y-4 mt-8">
                  {[
                    "Authorized Avant Garde Energy franchise for Rajasthan",
                    "End-to-end project execution — site survey to commissioning",
                    "Post-installation maintenance and technical support",
                    "Flexible financing and EPC partnership models",
                    "Local expertise with pan-India brand backing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="size-6 text-accent mt-0.5 shrink-0" />
                      <span className="text-base text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* THE OASIS ADVANTAGE */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading">
              The Oasis Advantage
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't just sell products; we engineer holistic energy solutions backed by premium support and deep technical expertise.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-accent" />,
                title: "Precision Engineering",
                desc: "We deploy only the highest-tier technologies, like the Axial Flux Avatar turbines, ensuring maximum efficiency and zero gear wear."
              },
              {
                icon: <Shield className="h-8 w-8 text-accent" />,
                title: "Premium Support",
                desc: "From initial site feasibility analysis to lifetime maintenance, our dedicated technical team ensures uninterrupted power generation."
              },
              {
                icon: <Leaf className="h-8 w-8 text-accent" />,
                title: "Scalable Ecosystem",
                desc: "Whether you need a 1kW residential setup or a multi-megawatt industrial microgrid, our solutions grow with your energy demands."
              }
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-16 w-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3 font-heading">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* TIMELINE / MILESTONES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">Our Journey</h2>
          </FadeIn>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-accent/50 before:to-transparent">
            {[
              {
                year: "Inception",
                title: "The Franchise Agreement",
                desc: "Secured the exclusive distributorship for Avant Garde Energy's revolutionary Avatar wind turbines across Rajasthan."
              },
              {
                year: "Foundation",
                title: "Birth of Oasis Energy",
                desc: "Established the Oasis Energy brand, laying the groundwork for a broader, multi-technology renewable portfolio."
              },
              {
                year: "Expansion",
                title: "Industrial & Residential Scaling",
                desc: "Deploying the first waves of 1kW to 5kW systems across commercial and agricultural sites."
              },
              {
                year: "The Future",
                title: "The Multi-Category Energy Ecosystem",
                desc: "Integrating Solar PV and smart battery storage to create true hybrid microgrids for total energy independence."
              }
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <span className="text-accent font-bold tracking-wider text-sm uppercase mb-1 block">{item.year}</span>
                    <h4 className="text-xl font-bold text-primary mb-2 font-heading">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-center px-4">
        <FadeIn className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">Ready to join the energy revolution?</h2>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14" asChild>
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </FadeIn>
      </section>
    </div>
  );
}
