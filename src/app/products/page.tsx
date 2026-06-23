"use client";

import Image from "next/image";
import { Wind, Sun, Battery, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ProductsSection } from "@/components/sections/ProductsSection";

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-primary text-primary-foreground overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[15s] hover:scale-105"
          style={{ backgroundImage: "url('/products_bg.png')" }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/95 via-primary/80 to-[#0A1128]/70" />
        
        <div className="container relative z-10 mx-auto px-4 text-left">
          <FadeIn className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-heading tracking-tight drop-shadow-2xl">
              Premium Renewable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-accent">
                Hardware
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed font-light drop-shadow-md">
              Explore our curated portfolio of world-class energy generation and storage systems. Built for maximum efficiency, engineered to endure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* AVATAR PRODUCTS FROM BOLT */}
      <ProductsSection />

      {/* FUTURE PORTFOLIO TEASERS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">The Roadmap</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary font-heading">
              Expanding the Ecosystem
            </h3>
            <p className="text-lg text-muted-foreground mt-4">
              True energy independence requires a hybrid approach. Oasis Energy is actively curating premium solar and storage hardware to compliment our wind foundations.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {/* Solar Teaser */}
            <StaggerItem>
              <div className="bg-slate-50 border border-gray-100 p-8 md:p-12 rounded-3xl h-full relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                  <Sun className="w-64 h-64 text-primary" />
                </div>
                <div className="relative z-10">
                  <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                    <Sun className="h-7 w-7 text-accent" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-3 font-heading">Advanced Solar PV</h4>
                  <p className="text-muted-foreground mb-6">
                    High-efficiency monocrystalline panels and smart inverters. Perfect for hybrid setups when combined with Avatar wind turbines.
                  </p>
                  <div className="inline-flex items-center text-sm font-semibold text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full">
                    Launching Q4
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Storage Teaser */}
            <StaggerItem>
              <div className="bg-primary border border-primary-foreground/10 p-8 md:p-12 rounded-3xl h-full relative overflow-hidden group text-primary-foreground">
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 group-hover:-translate-y-4 transition-all duration-700">
                  <Battery className="w-64 h-64" />
                </div>
                <div className="relative z-10">
                  <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-6 border border-white/10">
                    <Battery className="h-7 w-7 text-accent" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3 font-heading text-white">Smart Storage</h4>
                  <p className="text-primary-foreground/80 mb-6">
                    Commercial and residential battery systems designed to store excess generation and provide seamless backup during grid outages.
                  </p>
                  <div className="inline-flex items-center text-sm font-semibold text-accent uppercase tracking-widest bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5">
                    In Development
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary mb-6 font-heading">Not sure which product is right for you?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our engineering team can perform a site feasibility analysis to recommend the perfect hardware configuration for your energy needs.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-8 text-lg" asChild>
              <Link href="/contact">Request an Assessment</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
