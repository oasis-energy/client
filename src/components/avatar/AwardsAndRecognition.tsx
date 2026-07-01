import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import Image from "next/image";

export function AwardsAndRecognition() {
  const logos = [
    { source: "logo-unilever.jpg", name: "UNILEVER" },
    { source: "logo-indian-army.png", name: "INDIAN ARMY" },
    { source: "logo-usaid.jpg", name: "USAID" },
    { source: "logo-indian-navy.jpg", name: "INDIAN NAVY" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-3">Global Trust</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading leading-tight">
            Recognized by the World&apos;s Best
          </h3>
          <p className="text-lg text-slate-600 font-light">
            Chosen by international organizations, governments, and Fortune 500 companies.
          </p>
        </FadeIn>

        {/* Global Clients */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto">
          {logos.map((logo, i) => (
            <StaggerItem key={i}>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center justify-center h-32 hover:bg-slate-100 transition-colors">
                {/* <AssetPlaceholder 
                  source={logo.source} 
                  page={logo.page} 
                  description={`${logo.name} Logo`} 
                  className="w-full h-full text-xs opacity-70"
                /> */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden p-4">
                  <Image 
                    src={`/avatar/${logo.source}`}
                    alt={`${logo.name} Logo`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Major Showcases */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <FadeIn direction="right">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
              <div className="absolute inset-0 bg-slate-900/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-emerald-400 font-bold mb-2">Presidential Palace</span>
                <h4 className="text-white text-xl font-bold">Rashtrapathi Bhavan Showcase</h4>
                <p className="text-white/80 text-sm mt-2">Selected for the annual Festival of Innovations inaugurated by the President of India.</p>
              </div>
              {/* <AssetPlaceholder 
                source="Avant Garde PPT.pdf" 
                page={4} 
                description="Showcased at the Indian Presidential Palace" 
                className="w-full aspect-[4/3]"
              /> */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image 
                  src="/avatar/showcase-rashtrapathi.jpg"
                  alt="Avatar Turbine showcased at Indian Presidential Palace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
              <div className="absolute inset-0 bg-slate-900/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-emerald-400 font-bold mb-2">Government of India</span>
                <h4 className="text-white text-xl font-bold">Make in India Campaign</h4>
                <p className="text-white/80 text-sm mt-2">Officially showcased by the Ministry of Commerce & Industry in global campaigns.</p>
              </div>
              {/* <AssetPlaceholder 
                source="Avant Garde PPT.pdf" 
                page={3} 
                description="Officially Showcased by Govt of India on Make in India" 
                className="w-full aspect-[4/3]"
              /> */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image 
                  src="/avatar/showcase-makeinindia.jpg"
                  alt="Make In India showcase for Avatar Turbine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
