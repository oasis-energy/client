import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";

export function AvatarHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Placeholder for Cinematic Image */}
      <div className="absolute inset-0 z-0">
        {/* <AssetPlaceholder 
          source="Avant Garde Innovations.pdf" 
          page={1} 
          description="Full-width cinematic background of Avatar Wind Turbine against blue sky" 
          className="w-full h-full object-cover opacity-60 rounded-none border-none border-0"
        /> */}
        <Image 
          src="/avatar/hero-turbine.jpg"
          alt="Avatar Wind Turbine Cinematic Background"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <FadeIn
          direction="up"
          delay={0.2}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-white uppercase tracking-wider">
            Top 20 Cleantech Innovations - UN
          </span>
        </FadeIn>

        <FadeIn direction="up" delay={0.4} className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-heading tracking-tight leading-tight">
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A859] to-emerald-400">
              Avatar™
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            The world&apos;s most advanced Small Wind Turbine. Designed to
            decentralize and democratize wind energy for common people.
          </p>
        </FadeIn>

        <FadeIn
          direction="up"
          delay={0.6}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 h-14 text-lg w-full sm:w-auto border-none shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:scale-105"
          >
            <Link href="/contact?subject=avatar-quote">Get a Quote</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-full px-8 h-14 text-lg w-full sm:w-auto backdrop-blur-sm transition-all hover:scale-105"
          >
            <Link href="#specs">View Specs</Link>
          </Button>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:flex">
        <ArrowDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
