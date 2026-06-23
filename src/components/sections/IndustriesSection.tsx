import { Badge } from "@/components/ui/badge"
import {
  Tractor,
  Factory,
  Building2,
  Wifi,
  Hotel,
  HomeIcon,
  GraduationCap,
  Landmark,
} from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in"

const industries = [
  {
    icon: Tractor,
    name: "Agriculture & Farming",
    desc: "Power irrigation systems, grain mills, and cold storage with clean wind energy. Reduce diesel dependency and cut operating costs for farms across Rajasthan.",
    tags: ["Irrigation", "Cold Storage", "Rural Electrification"],
  },
  {
    icon: Factory,
    name: "Industrial Manufacturing",
    desc: "Supplement grid power for factories, processing units, and warehouses. Achieve energy independence and meet CSR sustainability targets.",
    tags: ["Factories", "Warehouses", "Processing Units"],
  },
  {
    icon: Hotel,
    name: "Hospitality & Tourism",
    desc: "Hotels, resorts, and eco-lodges in Rajasthan can dramatically reduce electricity bills and market themselves as sustainable destinations.",
    tags: ["Hotels", "Resorts", "Eco-Lodges"],
  },
  {
    icon: Building2,
    name: "Commercial Establishments",
    desc: "Shopping complexes, malls, offices, and retail chains can offset grid consumption significantly with rooftop or ground-mounted turbines.",
    tags: ["Offices", "Malls", "Retail"],
  },
  {
    icon: Wifi,
    name: "Telecom Infrastructure",
    desc: "Power remote telecom towers and BTS stations with reliable wind energy — eliminating diesel generators and reducing OPEX in remote areas.",
    tags: ["BTS Towers", "Data Centers", "Remote Sites"],
  },
  {
    icon: HomeIcon,
    name: "Residential & Villas",
    desc: "Premium homes, farmhouses, and residential complexes can achieve partial or full energy independence with our 1–5 kW systems.",
    tags: ["Homes", "Farmhouses", "Villas"],
  },
  {
    icon: GraduationCap,
    name: "Educational Institutions",
    desc: "Schools, colleges, and universities can power campuses sustainably while educating the next generation about clean energy.",
    tags: ["Schools", "Colleges", "Universities"],
  },
  {
    icon: Landmark,
    name: "Government & PSUs",
    desc: "Government buildings, panchayat offices, and public sector units can meet renewable energy mandates and reduce public utility bills.",
    tags: ["Govt. Buildings", "PSUs", "Panchayats"],
  },
]

export function IndustriesSection() {
  return (
    <section className="py-24 bg-white container mx-auto px-4" id="industries">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 text-accent border-accent/30 bg-accent/5 font-semibold px-4 py-1.5"
          >
            Industries We Serve
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-6 font-heading">
            Wind Energy for <span className="text-gradient-brand">Every Sector</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Oasis Energy delivers customized wind turbine solutions across a wide range
            of industries — each with tailored configurations, financing, and support.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <StaggerItem key={industry.name}>
                <div className="card-lift group flex flex-col gap-5 p-8 rounded-[2rem] bg-slate-50 border border-gray-100 hover:border-primary/30 transition-all h-full">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm text-primary group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-emerald-600 group-hover:text-white transition-all duration-300">
                    <Icon className="size-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3 leading-snug font-heading">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {industry.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-gray-200 text-slate-600 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
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
