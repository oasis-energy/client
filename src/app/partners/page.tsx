"use client";

import { Handshake, TrendingUp, Presentation, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PartnersPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/30 opacity-90" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <FadeIn className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300">Oasis Energy</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed font-light">
              We are actively expanding our distribution and EPC network across Rajasthan. Join us in powering the region's renewable future.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* WHY PARTNER SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Value Proposition</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary font-heading">
              Why become an Oasis Partner?
            </h3>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Handshake className="h-6 w-6 text-accent" />,
                title: "Exclusive Territories",
                desc: "We protect our channel partners by assigning dedicated regions within Rajasthan to ensure high margins."
              },
              {
                icon: <Wrench className="h-6 w-6 text-accent" />,
                title: "Technical Training",
                desc: "Comprehensive onboarding covering installation, maintenance, and system sizing for the Avatar series."
              },
              {
                icon: <Presentation className="h-6 w-6 text-accent" />,
                title: "Marketing Support",
                desc: "Access to premium co-branded marketing collateral, lead generation support, and sales presentations."
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-accent" />,
                title: "Growing Portfolio",
                desc: "As we expand into solar and storage, our partners get first access to distribute these new technologies."
              }
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow">
                  <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-50">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-primary text-xl mb-3 font-heading">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* EPC CONTRACTORS SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl shadow-primary/20">
            <div className="absolute -right-20 -top-20 opacity-10">
              <ShieldCheck className="w-96 h-96 text-accent" />
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="right">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                  Attention EPC Contractors
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-6 leading-relaxed">
                  Are you executing large-scale engineering or construction projects? Integrate Oasis Energy's wind and hybrid solutions into your bids to increase your win rate and project margins.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span>Special EPC project pricing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span>Direct engineering support for system design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span>Priority hardware allocation</span>
                  </li>
                </ul>
              </FadeIn>
              <FadeIn direction="left" className="flex justify-center md:justify-end">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl max-w-sm w-full">
                  <h3 className="text-xl font-bold mb-4 font-heading text-white">Register as an EPC Partner</h3>
                  <p className="text-primary-foreground/70 text-sm mb-6">
                    Submit your company profile to get access to our technical documentation and pricing tiers.
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" asChild>
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-white" id="apply">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center bg-slate-50 border border-gray-100 rounded-[2.5rem] p-12 md:p-16 shadow-sm">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-heading tracking-tight">
              Ready to <span className="text-gradient-brand">Partner?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Click below to fill out our comprehensive inquiry form. Select "Distributor / Franchise Inquiry" or "EPC Partnership" and our channel development team will reach out to schedule an introductory call.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-xl font-bold shadow-lg shadow-primary/20" asChild>
              <Link href="/contact">Go to Application Form <ArrowRight className="ml-2 size-5" /></Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
