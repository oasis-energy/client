import { Badge } from "@/components/ui/badge"
import {
  Award,
  Wrench,
  MapPin,
  HeadphonesIcon,
  Leaf,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in"

const reasons = [
  {
    icon: Award,
    title: "Authorized Franchise Partner",
    desc: "Official Avant Garde Energy franchise for Rajasthan — backed by a trusted national brand with proven technology and quality assurance.",
  },
  {
    icon: Wrench,
    title: "End-to-End Execution",
    desc: "We handle everything from site survey, wind assessment, design, installation, grid synchronization, to commissioning. No third-party hassle.",
  },
  {
    icon: MapPin,
    title: "Local Presence, Pan-Rajasthan",
    desc: "Deep roots in Rajasthan mean faster response times, regional expertise, and a service network that covers all 33 districts.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated After-Sales Support",
    desc: "Our technical team provides responsive post-installation support, preventive maintenance, and spare parts availability.",
  },
  {
    icon: Leaf,
    title: "Clean Energy Commitment",
    desc: "We are genuinely committed to advancing Rajasthan's renewable energy goals — not just selling turbines, but building a greener future.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Performance Guarantee",
    desc: "All Avatar series turbines come with manufacturer warranties and performance guarantees, giving you peace of mind for decades.",
  },
  {
    icon: TrendingUp,
    title: "Flexible Business Models",
    desc: "Whether you want to buy outright, become a sub-distributor, or partner as an EPC contractor — we have a model that works for you.",
  },
  {
    icon: Users,
    title: "Expert Advisory Team",
    desc: "Our engineers and energy consultants help you calculate ROI, select the right system, and navigate subsidies and incentives.",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-24 bg-[#0A1128] container mx-auto px-4 rounded-[3rem] my-12 shadow-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <Badge
            className="mb-6 bg-white/10 text-white border-white/20 font-semibold px-4 py-1.5 hover:bg-white/20 transition-colors"
            variant="outline"
          >
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 font-heading">
            The Oasis Energy <span className="text-gradient-brand">Advantage</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            We combine the credibility of a national brand with the agility and expertise
            of a local specialist. Here's what sets us apart.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <StaggerItem key={reason.title}>
                <div className="group flex flex-col gap-4 p-8 rounded-[2rem] border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default card-lift h-full">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/80 to-emerald-600 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
                      <Icon className="size-6 text-white" />
                    </div>
                    <span className="text-sm font-bold text-white/20 tabular-nums font-heading">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-3 leading-snug font-heading">{reason.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-light">{reason.desc}</p>
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
