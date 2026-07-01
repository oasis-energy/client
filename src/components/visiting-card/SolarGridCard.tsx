import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { VisitingCardProps } from "./types";

export function SolarGridCard({ side, className, id }: VisitingCardProps) {
  if (side === "front") {
    return (
      <div id={id} className={`w-[1050px] h-[600px] bg-[#f0f4f8] text-slate-900 relative overflow-hidden flex flex-col items-center justify-center shadow-lg border border-slate-200 ${className || ""}`}>
        {/* Solar Panel Tech Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#1e3a8a 1.5px, transparent 1.5px), linear-gradient(90deg, #1e3a8a 1.5px, transparent 1.5px)', backgroundSize: '60px 40px' }} />
        
        {/* Sun reflection effect */}
        <div className="absolute -top-40 right-20 w-[600px] h-[600px] bg-gradient-to-br from-amber-100 to-transparent rounded-full opacity-60 mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/80 via-white/40 to-transparent" />
        
        <div className="z-10 flex flex-col items-center bg-white/90 p-16 rounded-xl backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(30,58,138,0.2)] border-2 border-white">
          <Image 
            src="/brand-icon-5.svg" 
            alt="Oasis Energy Icon" 
            width={140}
            height={140} 
            className="w-32 h-32 mb-8 object-contain"
          />
          <div className="text-center">
            <span className="text-6xl font-extrabold tracking-tight whitespace-nowrap font-heading">
              <span className="text-[#1e3a8a]">Oasis</span> <span className="text-emerald-600">Energy</span>
            </span>
            <span className="block text-sm font-bold text-[#1e3a8a]/60 mt-5 tracking-[0.35em] uppercase">
              Let&apos;s grab the free energy
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`w-[1050px] h-[600px] bg-[#f0f4f8] text-slate-900 relative overflow-hidden flex shadow-lg border border-slate-200 ${className || ""}`}>
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e3a8a 1.5px, transparent 1.5px), linear-gradient(90deg, #1e3a8a 1.5px, transparent 1.5px)', backgroundSize: '40px 30px' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1e3a8a]/5 to-transparent pointer-events-none" />
      
      {/* Dark blue accent border */}
      <div className="absolute left-0 top-0 w-4 h-full bg-[#1e3a8a]" />
      
      {/* Content Container */}
      <div className="flex-1 flex px-24 py-16 z-10">
        {/* Left Side: Personal Info */}
        <div className="flex flex-col justify-center w-3/5">
          <div className="inline-block px-5 py-2 rounded-lg bg-[#1e3a8a] text-white font-bold tracking-widest text-xs mb-8 uppercase w-max shadow-md">
            Co-Founder
          </div>
          <h1 className="text-6xl font-extrabold text-slate-900 mb-10 tracking-tight font-heading">Vinay Pratap<br/>Singh</h1>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center gap-5 text-slate-700 bg-white/60 p-3 rounded-lg border border-white backdrop-blur-sm w-max pr-8 shadow-sm">
              <Phone className="w-5 h-5 text-emerald-600" />
              <span className="text-xl font-bold tracking-wide">+91 6376301828</span>
            </div>
            <div className="flex items-center gap-5 text-slate-700 bg-white/60 p-3 rounded-lg border border-white backdrop-blur-sm w-max pr-8 shadow-sm">
              <Mail className="w-5 h-5 text-emerald-600" />
              <span className="text-xl font-bold tracking-wide">vinay@oasis.energy</span>
            </div>
            <div className="flex items-center gap-5 text-slate-700 bg-white/60 p-3 rounded-lg border border-white backdrop-blur-sm w-max pr-8 shadow-sm">
              <Globe className="w-5 h-5 text-emerald-600" />
              <span className="text-xl font-bold tracking-wide">www.oasis.energy</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <div className="flex gap-3">
              <LinkedinIcon className="w-10 h-10 p-2.5 bg-white rounded-lg text-slate-500 shadow-sm border border-slate-100 hover:text-[#1e3a8a]" />
              <InstagramIcon className="w-10 h-10 p-2.5 bg-white rounded-lg text-slate-500 shadow-sm border border-slate-100 hover:text-[#1e3a8a]" />
              <FacebookIcon className="w-10 h-10 p-2.5 bg-white rounded-lg text-slate-500 shadow-sm border border-slate-100 hover:text-[#1e3a8a]" />
            </div>
            <span className="text-base font-bold text-[#1e3a8a] ml-2 tracking-wider">@oasisenergy</span>
          </div>
        </div>

        {/* Right Side: QR & Logo */}
        <div className="w-2/5 flex flex-col items-end justify-between pl-12 py-4 relative z-10">
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border border-slate-100">
            <Image src="/brand-icon-5.svg" alt="Oasis Energy" width={48} height={48} className="w-10 h-10" />
            <div>
              <span className="text-xl font-extrabold tracking-tight block leading-none font-heading">
                <span className="text-[#1e3a8a]">Oasis</span> <span className="text-emerald-600">Energy</span>
              </span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center">
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
            <div className="w-full h-1 bg-gradient-to-r from-[#1e3a8a] to-emerald-600 mt-6 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
