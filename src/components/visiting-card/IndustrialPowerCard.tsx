import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { VisitingCardProps } from "./types";

export function IndustrialPowerCard({ side, className, id }: VisitingCardProps) {
  if (side === "front") {
    return (
      <div id={id} className={`w-[1050px] h-[600px] bg-slate-900 text-white relative overflow-hidden flex flex-col items-center justify-center shadow-lg border-0 ${className || ""}`}>
        {/* Industrial Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/industrial_bg.png" 
            alt="Industrial Background" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-20 grayscale mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/80 to-[#1e3a8a]/40" />
        </div>
        
        {/* Orange/Yellow power accents to contrast */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-amber-500/20 rounded-full filter blur-[100px]" />
        
        <div className="z-10 flex flex-col items-center bg-white p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-200">
          <Image 
            src="/brand-icon-5.svg" 
            alt="Oasis Energy Icon" 
            width={140}
            height={140} 
            className="w-32 h-32 mb-8 object-contain"
          />
          <div className="text-center">
            <span className="text-6xl font-black tracking-tight whitespace-nowrap font-heading">
              <span className="text-[#1e3a8a]">Oasis</span> <span className="text-emerald-600">Energy</span>
            </span>
            <span className="block text-sm font-bold text-slate-500 mt-5 tracking-[0.4em] uppercase">
              Powering the future of industry
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`w-[1050px] h-[600px] bg-slate-900 text-white relative overflow-hidden flex shadow-lg border-0 ${className || ""}`}>
      {/* Industrial Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="/industrial_bg.png" 
          alt="Industrial Background" 
          layout="fill" 
          objectFit="cover" 
          className="grayscale mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-transparent" />
      </div>
      
      {/* Yellow/Amber power accent line */}
      <div className="absolute left-0 top-0 h-full w-2 bg-amber-500" />
      
      {/* Content Container */}
      <div className="flex-1 flex px-20 py-16 z-10">
        {/* Left Side: Personal Info */}
        <div className="flex flex-col justify-center w-3/5">
          <div className="inline-block px-4 py-1 rounded-sm bg-amber-500 text-slate-900 font-black tracking-widest text-xs mb-6 uppercase w-max">
            Co-Founder
          </div>
          <h1 className="text-6xl font-black text-white mb-12 tracking-tight font-heading">Vinay Pratap<br/>Singh</h1>
          
          <div className="space-y-6">
            <div className="flex items-center gap-5 text-slate-300">
              <Phone className="w-5 h-5 text-amber-500" />
              <span className="text-xl font-medium tracking-wide">+91 6376301828</span>
            </div>
            <div className="flex items-center gap-5 text-slate-300">
              <Mail className="w-5 h-5 text-amber-500" />
              <span className="text-xl font-medium tracking-wide">vinay@oasis.energy</span>
            </div>
            <div className="flex items-center gap-5 text-slate-300">
              <Globe className="w-5 h-5 text-amber-500" />
              <span className="text-xl font-medium tracking-wide">www.oasis.energy</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-12 bg-white/5 p-4 rounded-xl border border-white/10 w-max backdrop-blur-sm">
            <div className="flex gap-4 border-r border-white/10 pr-4">
              <LinkedinIcon className="w-5 h-5 text-slate-400 hover:text-amber-500 transition-colors" />
              <InstagramIcon className="w-5 h-5 text-slate-400 hover:text-amber-500 transition-colors" />
              <FacebookIcon className="w-5 h-5 text-slate-400 hover:text-amber-500 transition-colors" />
            </div>
            <span className="text-base font-bold text-amber-500 tracking-wider">@oasisenergy</span>
          </div>
        </div>

        {/* Right Side: QR & Logo */}
        <div className="w-2/5 flex flex-col items-end justify-between pl-12 py-4">
          <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-2xl shadow-xl">
            <Image src="/brand-icon-5.svg" alt="Oasis Energy" width={48} height={48} className="w-12 h-12" />
            <div>
              <span className="text-2xl font-black tracking-tight block leading-none font-heading">
                <span className="text-[#1e3a8a]">Oasis</span> <span className="text-emerald-600">Energy</span>
              </span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center">
            <QRCodeSVG 
              value="https://www.oasis.energy" 
              size={160} 
              level="H"
              fgColor="#1e3a8a"
              imageSettings={{
                src: "/brand-icon-5.svg",
                x: undefined,
                y: undefined,
                height: 40,
                width: 40,
                excavate: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
