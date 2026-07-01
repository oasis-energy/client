import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { VisitingCardProps } from "./types";

export function AvatarWindCard({ side, className, id }: VisitingCardProps) {
  if (side === "front") {
    return (
      <div id={id} className={`w-[1050px] h-[600px] bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col items-center justify-center shadow-lg border border-slate-200 ${className || ""}`}>
        {/* Avatar Turbine Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/avatar-turbine.webp" 
            alt="Avatar Turbine Background" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-20 mix-blend-luminosity grayscale-[50%]" 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-slate-50/80 to-emerald-50/40" />
        </div>
        
        {/* Beautiful Emerald Arch */}
        <div className="absolute bottom-0 w-[600px] h-[300px] bg-emerald-600 rounded-t-full opacity-10 blur-2xl" />
        
        <div className="z-10 flex flex-col items-center bg-white p-16 rounded-full shadow-[0_30px_60px_-15px_rgba(30,58,138,0.15)] border-4 border-white/50 bg-clip-padding backdrop-blur-xl">
          <Image 
            src="/brand-icon-5.svg" 
            alt="Oasis Energy Icon" 
            width={130}
            height={130} 
            className="w-28 h-28 mb-6 object-contain"
          />
          <div className="text-center">
            <span className="text-6xl font-black tracking-tight whitespace-nowrap font-heading drop-shadow-sm">
              <span className="text-[#1e3a8a]">Oasis</span> <span className="text-emerald-600">Energy</span>
            </span>
            <span className="block text-sm font-bold text-slate-400 mt-4 tracking-[0.3em] uppercase">
              Let&apos;s grab the free energy
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`w-[1050px] h-[600px] bg-white text-slate-900 relative overflow-hidden flex shadow-lg border border-slate-200 ${className || ""}`}>
      {/* Subtle Avatar Image on Left */}
      <div className="absolute left-0 top-0 w-1/3 h-full z-0 opacity-15 overflow-hidden mix-blend-luminosity">
        <Image 
          src="/avatar-turbine.webp" 
          alt="Avatar Turbine Background" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="left center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-white" />
      </div>
      
      {/* Content Container */}
      <div className="flex-1 flex px-20 py-16 z-10 relative">
        {/* Left Side: Personal Info */}
        <div className="flex flex-col justify-center w-3/5 pl-12 border-l-4 border-emerald-600">
          <div className="mb-10">
            <h1 className="text-6xl font-black text-[#1e3a8a] mb-2 tracking-tight font-heading">Vinay Pratap<br/>Singh</h1>
            <h2 className="text-2xl font-bold text-emerald-600 tracking-widest uppercase mt-4">Co-Founder</h2>
          </div>
          
          <div className="space-y-7">
            <div className="flex items-center gap-5 text-slate-700">
              <Phone className="w-5 h-5 text-slate-400" />
              <span className="text-xl font-bold tracking-wide">+91 6376301828</span>
            </div>
            <div className="flex items-center gap-5 text-slate-700">
              <Mail className="w-5 h-5 text-slate-400" />
              <span className="text-xl font-bold tracking-wide">vinay@oasis.energy</span>
            </div>
            <div className="flex items-center gap-5 text-slate-700">
              <Globe className="w-5 h-5 text-slate-400" />
              <span className="text-xl font-bold tracking-wide">www.oasis.energy</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-12 bg-slate-50 border border-slate-100 p-4 rounded-xl w-max shadow-sm">
            <div className="flex gap-4 border-r border-slate-200 pr-4">
              <LinkedinIcon className="w-5 h-5 text-slate-400 hover:text-[#1e3a8a] transition-colors" />
              <InstagramIcon className="w-5 h-5 text-slate-400 hover:text-[#1e3a8a] transition-colors" />
              <FacebookIcon className="w-5 h-5 text-slate-400 hover:text-[#1e3a8a] transition-colors" />
            </div>
            <span className="text-base font-bold text-[#1e3a8a] tracking-wider">@oasisenergy</span>
          </div>
        </div>

        {/* Right Side: QR & Logo */}
        <div className="w-2/5 flex flex-col items-center justify-center pl-10 border-l border-slate-100">
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl mb-12">
            <Image src="/brand-icon-5.svg" alt="Oasis Energy" width={48} height={48} className="w-12 h-12" />
            <div>
              <span className="text-3xl font-black tracking-tight block leading-none font-heading">
                <span className="text-[#1e3a8a]">Oasis</span> <span className="text-emerald-600">Energy</span>
              </span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-200 flex flex-col items-center">
            <QRCodeSVG 
              value="https://www.oasis.energy" 
              size={180} 
              level="H"
              fgColor="#1e3a8a"
              imageSettings={{
                src: "/brand-icon-5.svg",
                x: undefined,
                y: undefined,
                height: 44,
                width: 44,
                excavate: true,
              }}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 mt-8 tracking-widest uppercase text-center w-full">Digital Profile</span>
        </div>
      </div>
    </div>
  );
}
