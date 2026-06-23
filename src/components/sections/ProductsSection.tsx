import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Wind, ArrowRight, Check } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in"

const products = [
  {
    name: "Avatar 1 kW",
    subtitle: "Residential & Small Farm",
    power: "1 kW",
    voltage: "12V / 24V / 48V DC",
    windSpeed: "2.5 m/s cut-in",
    blades: "3-blade HAWT",
    features: [
      "Ideal for homes & small farms",
      "Battery charging system",
      "Low maintenance design",
      "Silent operation",
      "Corrosion-resistant materials",
    ],
    badge: "Entry Level",
    badgeColor: "bg-slate-100 text-slate-600",
    highlight: false,
  },
  {
    name: "Avatar 3 kW",
    subtitle: "Commercial & Agricultural",
    power: "3 kW",
    voltage: "48V / 96V DC",
    windSpeed: "3.0 m/s cut-in",
    blades: "3-blade HAWT",
    features: [
      "Perfect for farms & small businesses",
      "Grid-tie or off-grid options",
      "Auto-furling protection",
      "High energy yield",
      "Smart monitoring system",
    ],
    badge: "Most Popular",
    badgeColor: "bg-accent text-accent-foreground",
    highlight: true,
  },
  {
    name: "Avatar 5 kW",
    subtitle: "Industrial & Institutional",
    power: "5 kW",
    voltage: "96V / 240V AC",
    windSpeed: "3.0 m/s cut-in",
    blades: "3-blade HAWT",
    features: [
      "Hotels, factories, campuses",
      "Grid-tie with export option",
      "Advanced storm protection",
      "Remote monitoring",
      "10-year performance warranty",
    ],
    badge: "High Performance",
    badgeColor: "bg-slate-100 text-slate-600",
    highlight: false,
  },
  {
    name: "Avatar 10 kW+",
    subtitle: "Large Scale & Custom",
    power: "10–100 kW",
    voltage: "Three-phase AC",
    windSpeed: "Custom",
    blades: "Custom HAWT",
    features: [
      "Industrial parks & wind farms",
      "SCADA monitoring system",
      "Custom tower heights",
      "Turnkey EPC delivery",
      "Project financing support",
    ],
    badge: "Enterprise",
    badgeColor: "bg-slate-100 text-slate-600",
    highlight: false,
  },
]

export function ProductsSection() {
  return (
    <section className="py-24 bg-white container mx-auto px-4" id="products">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 text-primary border-primary/30 bg-primary/5 font-semibold px-4 py-1.5"
          >
            Avatar Series
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-6 font-heading">
            Wind Turbines for <span className="text-gradient-brand">Every Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-light">
            The Avatar series by Avant Garde Energy is engineered for Indian wind conditions.
            Choose the right capacity for your application, from 1 kW residential
            systems to large industrial installations.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <StaggerItem key={product.name}>
              <Card
                className={`card-lift relative flex flex-col h-full overflow-hidden border-2 transition-all rounded-[2rem] ${
                  product.highlight
                    ? "border-accent shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
                    : "border-gray-100 shadow-sm hover:border-primary/20"
                }`}
              >
                {product.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-300 to-accent" />
                )}
                <CardHeader className="pb-4 pt-8 px-8">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                        product.highlight ? "bg-accent shadow-md shadow-accent/20" : "bg-primary/5 text-primary"
                      }`}
                    >
                      <Wind
                        className={`size-6 ${product.highlight ? "text-white" : "text-primary"}`}
                      />
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-primary font-heading">{product.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{product.subtitle}</p>
                </CardHeader>

                <CardContent className="px-8 pb-8 flex flex-col flex-1">
                  {/* Specs */}
                  <div className="grid grid-cols-1 gap-2 mb-6 p-5 rounded-2xl bg-slate-50 border border-gray-100">
                    {[
                      { label: "Rated Power", value: product.power },
                      { label: "Voltage", value: product.voltage },
                      { label: "Wind Speed", value: product.windSpeed },
                      { label: "Type", value: product.blades },
                    ].map((spec) => (
                      <div key={spec.label} className="flex items-center justify-between gap-2">
                        <span className="text-xs text-muted-foreground">{spec.label}</span>
                        <span className="text-xs font-bold text-slate-700 text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="size-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-600 leading-relaxed font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={product.highlight ? "default" : "outline"}
                    className={`w-full font-bold h-12 rounded-xl ${
                      product.highlight
                        ? "bg-primary hover:bg-primary/90 text-white shadow-lg"
                        : "border-gray-200 text-primary hover:bg-slate-50"
                    }`}
                  >
                    <a href="/contact">
                      Request Quote <ArrowRight className="size-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <FadeIn className="mt-16 text-center">
          <p className="text-base text-muted-foreground bg-slate-50 inline-block px-6 py-3 rounded-2xl border border-gray-100">
            All products are available with full EPC deployment, financing, and lifetime maintenance.{" "}
            <a href="/contact" className="text-accent font-bold hover:underline ml-1">
              Contact us for custom requirements →
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
