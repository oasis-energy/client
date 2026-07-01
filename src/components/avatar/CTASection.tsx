import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-slate-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-emerald-100/40 to-cyan-100/40 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-heading tracking-tight leading-tight">
            Embrace True <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Energy Independence</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 font-light leading-relaxed">
            Ready to deploy the world&apos;s most awarded small wind turbine for your home or business? Get in touch with our experts today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 h-14 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/contact?subject=avatar-inquiry">
                Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg w-full sm:w-auto border-slate-200 text-slate-700 hover:bg-slate-100" asChild>
              <Link href="#">
                <Download className="mr-2 w-5 h-5" /> Download Brochure
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
