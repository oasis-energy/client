"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Wind, ShieldCheck, Zap, Cog, Maximize, Droplets, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { useRef } from "react";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { StatsSection } from "@/components/sections/StatsSection";

// Dynamic Wind Stream Background Component
const WindStreams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
          style={{
            top: `${15 + i * 15}%`,
            left: "-100%",
            width: "200%",
            filter: "blur(2px)",
          }}
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityY = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="flex flex-col w-full bg-slate-50 overflow-hidden" ref={containerRef}>
      {/* DYNAMIC HERO SECTION */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-primary overflow-hidden perspective-[1000px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/90 via-primary/70 to-[#0A1128] opacity-95" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-60 mix-blend-screen" />
        
        <WindStreams />
        
        <motion.div 
          className="container relative z-10 mx-auto px-4 text-center mt-16"
          style={{ y: heroY, opacity: opacityY }}
        >
          <FadeIn className="max-w-4xl mx-auto" delay={0.2}>
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase">Rajasthan's Premier Wind Energy Company</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight font-heading tracking-tight drop-shadow-2xl">
              Harness the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-accent to-emerald-400">
                Power of Wind.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              Oasis Energy delivers world-class turbine solutions. As the authorized <strong className="text-white font-medium">Avant Garde</strong> partner, we bring the Avatar™ series directly to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-lg w-full sm:w-auto shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-all duration-300 group" asChild>
                <Link href="#technology">
                  Discover Avatar™ <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm" asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
          </FadeIn>
        </motion.div>


      </section>

      <TrustBar />

      <StatsSection />

      {/* WHY CHOOSE US - FROM BOLT */}
      <WhyUsSection />

      {/* CORE TECHNOLOGY - DEEP DIVE */}
      <section className="py-32 bg-white relative" id="technology">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-slate-100 border border-gray-100 shadow-2xl shadow-primary/5 group">
                <Image 
                  src="/technology_turbine.png" 
                  alt="Avatar Axial Flux Turbine" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/60 to-transparent" />
                
                {/* Floating Stat Card */}
                <motion.div 
                  className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-[#0A1128] p-6 rounded-3xl shadow-2xl border border-white/10 max-w-[200px]"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-emerald-400 mb-3"><Cog className="h-8 w-8 animate-spin-slow" /></div>
                  <h4 className="text-4xl font-bold text-white font-heading">0%</h4>
                  <p className="text-sm text-white/70">Gear Wear & Tear</p>
                </motion.div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">The Technology</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading leading-tight">
                Axial Flux <br/> Gearless Generator.
              </h3>
              <p className="text-muted-foreground text-xl mb-10 leading-relaxed font-light">
                Traditional wind turbines rely on heavy, friction-inducing gearboxes. The Avatar series eliminates this entirely. Our direct-drive axial flux technology means less maintenance, higher efficiency, and continuous power generation.
              </p>
              
              <StaggerContainer className="space-y-6">
                {[
                  { title: "Ultra-Low Starting Speed", desc: "Begins generating power at just 1.4 m/s—capturing even the lightest Rajasthan breezes." },
                  { title: "Omni-Directional Tracking", desc: "Automatically aligns with the wind direction without complex electronic yaw mechanisms." },
                  { title: "Silent Operation", desc: "Operates with less than 10% vibration, making it completely noiseless and bird-friendly." }
                ].map((feature, i) => (
                  <StaggerItem key={i}>
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <CheckCheckIcon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-primary">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* EXTREME RESILIENCE SECTION */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <WindStreams />
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-accent font-bold tracking-widest uppercase mb-3">Built for Extremes</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Unstoppable Generation
            </h3>
            <p className="text-xl text-primary-foreground/80 font-light leading-relaxed">
              From the harsh Thar Desert to remote industrial sites, Avatar turbines are engineered to survive and thrive where traditional grids fail.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wind className="h-10 w-10 text-white" />,
                title: "60 m/s Survival",
                desc: "Engineered to withstand cyclonic wind speeds without structural compromise."
              },
              {
                icon: <Droplets className="h-10 w-10 text-white" />,
                title: "Marine & Desert Proof",
                desc: "Specialized coatings prevent sand erosion and marine corrosion."
              },
              {
                icon: <Zap className="h-10 w-10 text-white" />,
                title: "Zero Cleaning",
                desc: "Unlike solar panels, rain washes the blades naturally. No dust accumulation losses."
              }
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors h-full">
                  <div className="h-16 w-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-accent/20">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 font-heading">{item.title}</h4>
                  <p className="text-primary-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FLAGSHIP PRODUCTS - INTERACTIVE */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-heading">
              Choose Your Avatar
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* On Grid Card */}
            <FadeIn direction="up" delay={0.1}>
              <Card className="relative overflow-hidden border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 group rounded-[2rem]">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700">
                  <Zap className="w-48 h-48 text-primary" />
                </div>
                <div className="p-10 md:p-14 relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-widest mb-6">
                    Grid-Tied
                  </div>
                  <h3 className="text-4xl font-bold text-primary mb-4 font-heading">Avatar™-I</h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-sm">
                    Offset massive utility costs. Connect directly to your existing facility grid. 
                    Available in 1kW to 5kW scalable modules.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12" asChild>
                    <Link href="/products">View Specs</Link>
                  </Button>
                </div>
              </Card>
            </FadeIn>

            {/* Off Grid Card */}
            <FadeIn direction="up" delay={0.2}>
              <Card className="relative overflow-hidden border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 group rounded-[2rem] bg-primary text-white">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                  <ShieldCheck className="w-48 h-48 text-white" />
                </div>
                <div className="p-10 md:p-14 relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm uppercase tracking-widest mb-6">
                    Stand-Alone
                  </div>
                  <h3 className="text-4xl font-bold mb-4 font-heading">Avatar™-I Remote</h3>
                  <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed max-w-sm">
                    Total energy independence. Engineered for telecom towers, remote agricultural zones, and off-grid estates.
                  </p>
                  <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-12" asChild>
                    <Link href="/products">View Specs</Link>
                  </Button>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - FROM BOLT */}
      <FAQSection />

      {/* CALL TO ACTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 rounded-[3rem] p-10 md:p-20 border border-gray-100 shadow-sm text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
                  Power Your Business with Wind
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
                  Join Oasis Energy's network. Whether you want to install an Avatar™ turbine or distribute them across Rajasthan, let's build the future.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all" asChild>
                    <Link href="/contact">Get a Free Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-primary/20 text-primary hover:bg-primary/5 transition-all group" asChild>
                    <Link href="/partners">Become a Partner <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// Quick helper icon component since CheckCheck isn't exported directly in the previous import list
function CheckCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 7 17l-5-5" />
      <path d="m22 10-7.5 7.5L13 16" />
    </svg>
  )
}
