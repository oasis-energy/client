"use client";

import { ArrowRight, Check } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BusinessModelsSection } from "@/components/sections/BusinessModelsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-primary overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/industrial_bg.png')" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white font-heading tracking-tight drop-shadow-xl">
              Energy Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-accent">Every Scale</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed font-light drop-shadow-md">
              We design, supply, and implement tailored renewable energy ecosystems across Rajasthan. From remote agricultural outposts to massive industrial complexes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 8-GRID INDUSTRIES SECTION (FROM BOLT) */}
      <IndustriesSection />

      {/* METRICS / ROI */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
              The Return on Independence
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Investing in an Oasis Energy solution isn't just about sustainability—it's a massive financial upgrade.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "100%", label: "Tax Depreciation", sub: "Available under Section 32 of IT Act in Year 1" },
              { metric: "2-4 Yrs", label: "Average Payback", sub: "For most industrial and commercial installations" },
              { metric: "20+ Yrs", label: "Lifespan", sub: "Zero-fuel cost generation for decades" }
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="text-center p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
                  <h4 className="text-5xl font-bold text-accent mb-2 font-heading">{item.metric}</h4>
                  <p className="text-xl font-semibold mb-2">{item.label}</p>
                  <p className="text-primary-foreground/60 text-sm">{item.sub}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* BUSINESS MODELS */}
      <BusinessModelsSection />
    </div>
  );
}
