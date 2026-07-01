import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { VisitingCardProps } from "./types";

export function HybridFavoriteCard({ side, className, id }: VisitingCardProps) {
  // Front from Eco Modern
  if (side === "front") {
    return (
      <div id={id} className={`w-[1050px] h-[600px] bg-[#fdfdfc] text-slate-900 relative overflow-hidden flex flex-col items-center justify-center shadow-md border-0 rounded-[2rem] ${className || ""}`}>
        {/* Soft Organic Background Elements */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-emerald-100/50 rounded-full mix-blend-multiply filter blur-[80px]" />
        <div className="absolute -bottom-32 -right-32 w-[700px] h-[700px] bg-[#1e3a8a]/5 rounded-full mix-blend-multiply filter blur-[100px]" />
        
        <div className="z-10 flex flex-col items-center">
          <div className="bg-white/80 p-10 rounded-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] mb-10 border border-white backdrop-blur-xl">
            <Image 
              src="/brand-icon-5.svg" 
              alt="Oasis Energy Icon" 
              width={140}
              height={140} 
              className="w-32 h-32 object-contain"
            />
          </div>
          <div className="text-center">
            <span className="text-6xl font-bold tracking-tight whitespace-nowrap font-heading">
              <span className="text-[#1e3a8a]">Oasis</span> <span className="text-emerald-600">Energy</span>
            </span>
            <span className="block text-lg font-medium text-slate-500 mt-4 tracking-[0.3em] uppercase">
              Let&apos;s grab the free energy
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Back from Clean Tech (FuturisticEnergyCard)
  return (
    <div id={id} className={`w-[1050px] h-[600px] bg-white text-slate-900 relative overflow-hidden flex shadow-lg border border-slate-200 rounded-[2rem] ${className || ""}`}>
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400 rounded-full mix-blend-multiply filter blur-[140px] opacity-10 pointer-events-none" />
      
      {/* Tech framing */}
      <div className="absolute left-10 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent" />
      
      {/* Content Container */}
      <div className="flex-1 flex px-24 py-16 z-10">
        {/* Left Side: Personal Info */}
        <div className="flex flex-col justify-center w-3/5 pl-4">
          <div className="inline-block px-4 py-1.5 rounded-sm bg-emerald-50 border-l-4 border-emerald-500 text-emerald-700 font-bold tracking-widest text-xs mb-6 uppercase w-max">
            Co-Founder
          </div>
          <h1 className="text-6xl font-extrabold text-[#1e3a8a] mb-10 tracking-tight font-heading">Vinay Pratap<br/>Singh</h1>
          
          <div className="space-y-6">
            <div className="flex items-center gap-5 text-slate-600">
              <Phone className="w-5 h-5 text-emerald-500" />
              <span className="text-xl font-medium tracking-wide">+91 6376301828</span>
            </div>
            <div className="flex items-center gap-5 text-slate-600">
              <Mail className="w-5 h-5 text-emerald-500" />
              <span className="text-xl font-medium tracking-wide">vinay@oasis.energy</span>
            </div>
            <div className="flex items-center gap-5 text-slate-600">
              <Globe className="w-5 h-5 text-emerald-500" />
              <span className="text-xl font-medium tracking-wide">www.oasis.energy</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-12 bg-slate-50 border border-slate-100 p-4 rounded-xl w-max">
            <div className="flex gap-4 border-r border-slate-200 pr-4">
              <LinkedinIcon className="w-5 h-5 text-slate-400" />
              <InstagramIcon className="w-5 h-5 text-slate-400" />
              <FacebookIcon className="w-5 h-5 text-slate-400" />
            </div>
            <span className="text-base font-bold text-emerald-700 tracking-wider">@oasisenergy</span>
          </div>
        </div>

        {/* Right Side: QR & Logo */}
        <div className="w-2/5 flex flex-col items-end justify-between pl-12 py-4">
          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <Image src="/brand-icon-5.svg" alt="Oasis Energy" width={48} height={48} className="w-10 h-10" />
            <div>
              <span className="text-xl font-extrabold tracking-tight block leading-none font-heading">
                <span className="text-[#1e3a8a]">Oasis</span> <span className="text-emerald-600">Energy</span>
              </span>
            </div>
          </div>
          
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-emerald-100 flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
            <div className="p-4 pt-6">
              <QRCodeSVG 
                value="https://www.oasis.energy" 
                size={150} 
                level="H"
                fgColor="#1e3a8a"
                imageSettings={{
                  src: "/brand-icon-5.svg",
                  x: undefined,
                  y: undefined,
                  height: 36,
                  width: 36,
                  excavate: true,
                }}
              />
            </div>
            <span className="text-[10px] font-bold text-emerald-600 pb-3 tracking-widest uppercase">Digital Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
