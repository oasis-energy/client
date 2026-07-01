import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { VisitingCardProps } from "./types";

export function EcoModernCard({ side, className, id }: VisitingCardProps) {
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
              <span className="text-slate-800">Oasis</span> <span className="text-emerald-600">Energy</span>
            </span>
            <span className="block text-lg font-medium text-slate-500 mt-4 tracking-[0.3em] uppercase">
              Let&apos;s grab the free energy
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`w-[1050px] h-[600px] bg-[#fdfdfc] text-slate-900 relative overflow-hidden flex shadow-md border border-slate-100 rounded-[2rem] ${className || ""}`}>
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/50 rounded-full -mt-[400px] -mr-[400px]" />
      
      {/* Left green accent line */}
      <div className="absolute left-10 top-20 bottom-20 w-1 bg-emerald-500 rounded-full" />
      
      {/* Content Container */}
      <div className="flex-1 flex px-24 pt-20 pb-20 z-10 w-full">
        {/* Left Side: Personal Info */}
        <div className="flex flex-col justify-between w-2/3 pr-16">
          <div>
            <h1 className="text-6xl font-bold text-slate-900 mb-3 tracking-tight font-heading">Vinay Pratap<br/>Singh</h1>
            <h2 className="text-xl font-semibold text-emerald-600 tracking-widest uppercase">Co-Founder</h2>
          </div>
          
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex items-center gap-5 text-slate-600 border-b border-slate-100 pb-4">
              <Phone className="w-5 h-5 text-emerald-500" />
              <span className="text-xl font-medium">+91 6376301828</span>
            </div>
            
            <div className="flex items-center gap-5 text-slate-600 border-b border-slate-100 pb-4">
              <Mail className="w-5 h-5 text-emerald-500" />
              <span className="text-xl font-medium">vinay@oasis.energy</span>
            </div>
            
            <div className="flex items-center gap-5 text-slate-600 border-b border-slate-100 pb-4">
              <Globe className="w-5 h-5 text-emerald-500" />
              <span className="text-xl font-medium">www.oasis.energy</span>
            </div>
            
            <div className="flex items-center gap-5 pt-2">
              <MapPin className="w-5 h-5 text-slate-400" />
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <LinkedinIcon className="w-5 h-5 text-slate-500 hover:text-emerald-600 transition-colors" />
                  <InstagramIcon className="w-5 h-5 text-slate-500 hover:text-emerald-600 transition-colors" />
                  <FacebookIcon className="w-5 h-5 text-slate-500 hover:text-emerald-600 transition-colors" />
                </div>
                <span className="text-lg font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">@oasisenergy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: QR Code */}
        <div className="w-1/3 flex flex-col items-center justify-center">
          <div className="flex items-center gap-3 mb-10">
            <Image src="/brand-icon-5.svg" alt="Oasis Energy" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl font-bold tracking-tight block leading-none font-heading">
              <span className="text-slate-900">Oasis</span> <span className="text-emerald-600">Energy</span>
            </span>
          </div>
          <div className="bg-white p-6 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col items-center border border-slate-50 relative">
            <QRCodeSVG 
              value="https://www.oasis.energy" 
              size={180} 
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
          <div className="text-xs font-bold text-slate-400 mt-6 tracking-widest uppercase">
            Digital Profile
          </div>
        </div>
      </div>
    </div>
  );
}
