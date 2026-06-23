import { ShieldCheck, Leaf, Zap, Globe2, Award } from "lucide-react"

const trustItems = [
  { icon: Award, text: "Avant Garde Energy", sub: "Authorized Franchise" },
  { icon: ShieldCheck, text: "ISO Certified", sub: "Quality Products" },
  { icon: Leaf, text: "Rajasthan RREC", sub: "Registered Partner" },
  { icon: Zap, text: "MNRE Compliant", sub: "Ministry Registered" },
  { icon: Globe2, text: "Pan-Rajasthan", sub: "All 33 Districts" },
]

export function TrustBar() {
  return (
    <div className="bg-primary border-y border-white/10 py-6 overflow-hidden relative z-20 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.text} className="flex items-center gap-4 shrink-0 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 group-hover:bg-accent/20 transition-colors border border-white/10 group-hover:border-accent/50">
                  <Icon className="size-6 text-accent" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold text-white tracking-wide">{item.text}</span>
                  <span className="text-xs text-primary-foreground/70">{item.sub}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
