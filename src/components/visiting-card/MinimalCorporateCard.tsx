import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Mail, Phone, Globe } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { VisitingCardProps } from "./types";

export function MinimalCorporateCard({ side, className, id }: VisitingCardProps) {
  if (side === "front") {
    return (
      <div id={id} className={`w-[1050px] h-[600px] bg-[#f8fafc] text-slate-900 relative overflow-hidden flex flex-col items-center justify-center border shadow-sm ${className || ""}`}>
        {/* Very subtle architectural lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }} />
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-slate-200/50 to-transparent rounded-bl-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-100/30 to-transparent rounded-tr-full -ml-20 -mb-20" />
        
        <div className="z-10 flex flex-col items-center bg-white/60 p-12 rounded-3xl backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80">
          <Image 
            src="/brand-icon-5.svg" 
            alt="Oasis Energy Icon" 
            width={120}
            height={120} 
            className="w-24 h-24 mb-6 object-contain drop-shadow-sm"
          />
          <div className="text-center">
            <span className="text-5xl font-extrabold tracking-tight whitespace-nowrap font-heading">
              <span className="text-[#1e3a8a]">Oasis</span> <span className="text-emerald-600">Energy</span>
            </span>
            <span className="block text-sm font-semibold text-slate-400 mt-3 tracking-[0.25em] uppercase">
              Let&apos;s grab the free energy
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`w-[1050px] h-[600px] bg-[#f8fafc] text-slate-900 relative overflow-hidden flex shadow-sm border ${className || ""}`}>
      {/* Left Accent Bar */}
      <div className="w-3 h-full bg-gradient-to-b from-[#1e3a8a] to-emerald-600 absolute left-0 top-0" />
      
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }} />

      {/* Content Container */}
      <div className="flex-1 flex px-24 py-16 z-10">
        {/* Left Side: Personal Info */}
        <div className="flex flex-col justify-center w-3/5">
          <h1 className="text-5xl font-bold text-[#1e3a8a] mb-2 font-heading tracking-tight">Vinay Pratap Singh</h1>
          <h2 className="text-lg font-bold text-emerald-600 mb-12 tracking-[0.2em] uppercase">Co-Founder</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-5 text-slate-700">
              <Phone className="w-5 h-5 text-[#1e3a8a]" />
              <span className="text-xl font-medium tracking-wide">+91 6376301828</span>
            </div>
            <div className="flex items-center gap-5 text-slate-700">
              <Mail className="w-5 h-5 text-[#1e3a8a]" />
              <span className="text-xl font-medium tracking-wide">vinay@oasis.energy</span>
            </div>
            <div className="flex items-center gap-5 text-slate-700">
              <Globe className="w-5 h-5 text-[#1e3a8a]" />
              <span className="text-xl font-medium tracking-wide">www.oasis.energy</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-slate-200/60 w-max">
            <div className="flex gap-4">
              <LinkedinIcon className="w-5 h-5 text-slate-400" />
              <InstagramIcon className="w-5 h-5 text-slate-400" />
              <FacebookIcon className="w-5 h-5 text-slate-400" />
            </div>
            <span className="text-lg font-semibold text-slate-500 tracking-wide">@oasisenergy</span>
          </div>
        </div>

        {/* Right Side: QR & Logo */}
        <div className="w-2/5 flex flex-col items-end justify-between pl-12 py-4">
          <div className="flex items-center gap-4">
            <Image src="/brand-icon-5.svg" alt="Oasis Energy" width={48} height={48} className="w-12 h-12" />
            <div>
              <span className="text-2xl font-extrabold tracking-tight block leading-none font-heading">
                <span className="text-[#1e3a8a]">Oasis</span> <span className="text-emerald-600">Energy</span>
              </span>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center">
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
        </div>
      </div>
    </div>
  );
}
