import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart, Handshake, Network, CreditCard } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in"
import Link from "next/link"

const models = [
  {
    icon: ShoppingCart,
    title: "Direct Purchase",
    subtitle: "For end users",
    desc: "Buy and own your wind turbine outright. We handle survey, supply, installation, grid tie-up, and commissioning. Best for customers who want full ownership and maximum long-term savings.",
    cta: "Get a Quotation",
    link: "/contact?model=direct",
    highlight: false,
    benefits: ["Full ownership", "Maximum ROI", "Tax benefits eligible", "Govt. subsidy compatible"],
  },
  {
    icon: Handshake,
    title: "EPC Partnership",
    subtitle: "For contractors & project companies",
    desc: "Partner with us as an EPC (Engineering, Procurement & Construction) contractor. We provide products, technical drawings, and support — you deliver projects in your region.",
    cta: "Become EPC Partner",
    link: "/contact?model=epc",
    highlight: true,
    benefits: ["Revenue sharing model", "Technical training provided", "Marketing support", "Co-branded projects"],
  },
  {
    icon: Network,
    title: "Distributor / Franchise",
    subtitle: "For entrepreneurs & businesses",
    desc: "Become a sub-distributor for Oasis Energy in your district or region. We provide products at wholesale pricing, sales training, marketing collateral, and brand support.",
    cta: "Apply for Distributorship",
    link: "/contact?model=distributor",
    highlight: false,
    benefits: ["Wholesale pricing", "Defined territory", "Brand & sales support", "Growing market opportunity"],
  },
  {
    icon: CreditCard,
    title: "Financing Options",
    subtitle: "For budget-conscious buyers",
    desc: "We work with banks and NBFCs to provide flexible financing options for wind turbine purchases — including term loans, lease-to-own, and bundled schemes.",
    cta: "Explore Financing",
    link: "/contact?model=financing",
    highlight: false,
    benefits: ["Low down payment", "EMI options", "Bank loan assistance", "ROI within 3–5 years"],
  },
]

export function BusinessModelsSection() {
  return (
    <section className="py-24 bg-slate-50 container mx-auto px-4" id="models">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 text-accent border-accent/30 bg-accent/5 font-semibold px-4 py-1.5"
          >
            Business Models
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-6 font-heading">
            Multiple Ways to <span className="text-gradient-brand">Work With Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Whether you're an end customer, a contractor, an entrepreneur, or an
            institution — we have a business model designed for you.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model) => {
            const Icon = model.icon
            return (
              <StaggerItem key={model.title}>
                <div
                  className={`card-lift relative flex flex-col gap-6 p-8 rounded-[2rem] border-2 h-full transition-all duration-300 ${
                    model.highlight
                      ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                      : "border-gray-100 bg-white hover:border-primary/30"
                  }`}
                >
                  {model.highlight && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-br from-accent to-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-[1.5rem] rounded-tr-[1.8rem]">
                        Recommended
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl shrink-0 ${
                        model.highlight ? "bg-gradient-to-br from-primary to-blue-900 shadow-md" : "bg-primary/10"
                      }`}
                    >
                      <Icon className={`size-7 ${model.highlight ? "text-white" : "text-primary"}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-primary leading-tight font-heading">{model.title}</h3>
                      <p className="text-sm font-semibold text-muted-foreground mt-1">{model.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed font-light">{model.desc}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 flex-grow">
                    {model.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    variant={model.highlight ? "default" : "outline"}
                    className={`mt-4 w-full font-semibold rounded-full h-12 ${
                      model.highlight
                        ? "bg-gradient-to-r from-primary to-blue-900 text-white border-0 hover:opacity-90 shadow-md"
                        : "border-primary/30 text-primary hover:bg-primary/5"
                    }`}
                  >
                    <Link href={model.link}>
                      {model.cta} <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
