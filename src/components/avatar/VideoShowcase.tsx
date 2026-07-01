import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export function VideoShowcase() {
  const videos = [
    {
      title: "BBC News Interview",
      src: "https://www.youtube.com/embed/7zgdotiStKE",
      description: "BBC coverage featuring the Avant Garde Innovations founders discussing their mission to make wind energy accessible.",
      span: "lg:col-span-3 md:col-span-1",
    },
    {
      title: "CNN - Make in India",
      src: "https://player.vimeo.com/video/208797665?h=4c6f86ed60",
      description: "The official 'Make in India' showcase broadcasted globally on CNN, featuring the Avatar Wind Turbine.",
      span: "lg:col-span-3 md:col-span-1",
    },
    {
      title: "Avatar Turbine in Action",
      src: "https://www.youtube.com/embed/A89Wi1tUY0s",
      description: "Witness the Avatar Wind Turbine generating clean, decentralized power efficiently in real-world conditions.",
      span: "lg:col-span-2 md:col-span-1",
    },
    {
      title: "Clean Energy Innovation",
      src: "https://www.youtube.com/embed/Kh0kRgyNjrI",
      description: "A closer look at the revolutionary gearless, direct-drive technology behind the Avatar turbine.",
      span: "lg:col-span-2 md:col-span-1",
    },
    {
      title: "Powering the Future",
      src: "https://www.youtube.com/embed/vm9yXyQVYwE",
      description: "How Avant Garde Innovations is bringing carbon-neutral power to urban and remote communities.",
      span: "lg:col-span-2 md:col-span-1 md:col-start-auto lg:col-start-auto",
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-3">Watch & Learn</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading leading-tight">
            See Avatar™ In Action
          </h3>
          <p className="text-lg text-slate-600 font-light">
            Watch global coverage and interviews detailing our mission to eradicate energy poverty.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {videos.map((video, i) => (
            <StaggerItem key={i} className={`flex flex-col ${video.span}`}>
              <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-900 mb-4" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  src={video.src} 
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{video.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{video.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
