import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function GlobalMedia() {
  const newsItems = [
    {
      source: "news-euronews.png",
      name: "EuroNews / Associated Press",
      alt: "Avant Garde Innovations featured on EuroNews",
      link: "http://www.euronews.com/2016/05/31/george-brothers-say-portable-wind-turbine-can-be-a-game-changer",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      source: "news-cnn.png",
      name: "CNN - Make in India",
      alt: "Make in India Showcase on CNN",
      link: "https://vimeo.com/208797665/4c6f86ed60",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      source: "news-bbc.jpg",
      name: "BBC News",
      alt: "Avatar Turbine on BBC News",
      link: "https://goo.gl/GMM4IO",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      source: "news-times-of-india.jpg",
      name: "Times of India",
      alt: "Times of India Newsmaker",
      link: "#",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      source: "news-the-hindu.jpg",
      name: "The Hindu",
      alt: "Avant Garde Innovations in The Hindu",
      link: "#",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      source: "news-economic-times.png",
      name: "Economic Times",
      alt: "Economic Times Coverage",
      link: "#",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      source: "news-et-energy.jpg",
      name: "ET Energy World",
      alt: "ET Energy World Article",
      link: "#",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-3">Press & Media</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading leading-tight">
            Making Global Headlines
          </h3>
          <p className="text-lg text-slate-600 font-light">
            Recognized by top international media outlets for revolutionizing the decentralized renewable energy space.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-[250px]">
          {newsItems.map((item, i) => (
            <StaggerItem key={i} className={`relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200/50 bg-white ${item.span}`}>
              {item.link !== "#" ? (
                <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={`/avatar/${item.source}`}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between z-10">
                    <h4 className="text-white font-bold text-xl">{item.name}</h4>
                    <div className="bg-emerald-500/20 backdrop-blur-md p-2 rounded-full text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="block w-full h-full">
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={`/avatar/${item.source}`}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h4 className="text-white font-bold text-xl">{item.name}</h4>
                  </div>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
