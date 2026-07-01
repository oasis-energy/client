import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Fan, ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <FadeIn direction="up" delay={0.1}>
          <div className="flex items-center justify-center text-[150px] md:text-[200px] font-black leading-none font-heading text-white tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-500">4</span>
            <div className="mx-2 md:mx-6 text-emerald-500 flex items-center justify-center">
              <Fan className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] animate-[spin_4s_linear_infinite]" strokeWidth={1.5} />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-bl from-white to-slate-500">4</span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.3} className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lost in the Wind
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-10 font-light">
            We couldn&apos;t find the page you&apos;re looking for. It might have been moved, renamed, or perhaps the wind blew it away.
          </p>
          
          <Button 
            asChild 
            size="lg" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 h-14 text-lg border-none shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] hover:scale-105 group"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Return Home
            </Link>
          </Button>
        </FadeIn>
      </div>

      {/* Decorative floating particles/wind effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[wind_3s_linear_infinite]" style={{ animationName: 'wind' }} />
        <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[wind_5s_linear_infinite_1s]" style={{ animationName: 'wind' }} />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[wind_4s_linear_infinite_2s]" style={{ animationName: 'wind' }} />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wind {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}
