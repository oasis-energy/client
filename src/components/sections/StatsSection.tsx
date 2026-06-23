import { Badge } from "@/components/ui/badge"
import { Wind, Zap, Award, Users } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in"

const stats = [
  {
    icon: Wind,
    value: "1 kW",
    suffix: " to 100 kW+",
    label: "Product Range",
    desc: "Scalable solutions for every need",
  },
  {
    icon: Zap,
    value: "30%",
    suffix: "+",
    label: "Avg. Energy Savings",
    desc: "Vs. grid electricity costs",
  },
  {
    icon: Award,
    value: "ISO",
    suffix: " Certified",
    label: "Quality Assurance",
    desc: "Avant Garde Energy certified products",
  },
  {
    icon: Users,
    value: "33",
    suffix: " Districts",
    label: "Rajasthan Coverage",
    desc: "Pan-Rajasthan service network",
  },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-white container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-14">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/5 font-semibold px-4 py-1.5">
            By The Numbers
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-4 font-heading">
            Trusted Energy Partner for <span className="text-gradient-brand">Rajasthan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            From small farms to large industrial complexes, Oasis Energy provides
            reliable wind energy infrastructure backed by proven technology.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <StaggerItem key={stat.label}>
                <div className="card-lift relative flex flex-col gap-5 p-8 rounded-[2rem] border border-gray-100 bg-slate-50 hover:border-primary/30 group h-full transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-900 group-hover:text-white transition-all shadow-sm">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-sm font-bold text-slate-300 uppercase tracking-wider font-heading">
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-5xl font-extrabold text-primary font-heading tracking-tight">{stat.value}</span>
                      <span className="text-xl font-bold text-accent">{stat.suffix}</span>
                    </div>
                    <p className="font-bold text-slate-800 text-base mb-1">{stat.label}</p>
                    <p className="text-muted-foreground text-sm font-light">{stat.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
