import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { VisitingCardProps } from "./types";

export function BoldBrandCard({ side, className, id, data }: VisitingCardProps) {
  if (side === "front") {
    return (
      <div id={id} className={`w-[1050px] h-[600px] bg-emerald-600 text-white relative overflow-hidden flex flex-col items-center justify-center shadow-md border-0 ${className || ""}`}>
        {/* Dynamic Angles Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[1200px] bg-[#1e3a8a]/20 transform rotate-45 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[800px] bg-emerald-800/40 transform -rotate-12 -translate-x-1/2 translate-y-1/4" />
        
        {/* Clean Line Accents */}
        <div className="absolute inset-x-0 bottom-10 h-px bg-white/20 w-3/4 mx-auto" />
        
        <div className="z-10 flex flex-col items-center">
          <div className="bg-white p-8 rounded-[2rem] shadow-2xl mb-10 border-4 border-white/20 bg-clip-padding">
            <Image 
              src="/brand-icon-5.svg" 
              alt="Oasis Energy Icon" 
              width={160}
              height={160} 
              className="w-36 h-36 object-contain"
            />
          </div>
          <div className="text-center">
            <span className="text-7xl font-extrabold tracking-tighter whitespace-nowrap drop-shadow-lg font-heading">
              <span className="text-white">Oasis</span> <span className="text-emerald-200">Energy</span>
            </span>
            <span className="block text-xl font-bold text-emerald-50 mt-5 tracking-[0.4em] uppercase drop-shadow-sm">
              Let&apos;s grab the free energy
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`w-[1050px] h-[600px] bg-slate-50 text-slate-900 relative overflow-hidden flex shadow-md border-0 ${className || ""}`}>
      {/* Top Emerald Header */}
      <div className="absolute top-0 left-0 w-full h-40 bg-[#1e3a8a] flex items-center px-16 justify-between overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-emerald-600/30 rounded-full mix-blend-screen filter blur-[80px]" />
        <div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-2xl backdrop-blur-md border border-white/20 z-10">
          <Image src="/brand-icon-5.svg" alt="Oasis Energy" width={48} height={48} className="w-12 h-12 brightness-0 invert" />
          <span className="text-4xl font-extrabold tracking-tight block leading-none font-heading">
            <span className="text-white">Oasis</span> <span className="text-emerald-400">Energy</span>
          </span>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="flex-1 flex px-16 pt-48 pb-16 z-10 w-full">
        {/* Left Side: Personal Info */}
        <div className="flex flex-col justify-between w-2/3 pr-10">
          <div>
            <h1 className="text-6xl font-black text-[#1e3a8a] mb-2 tracking-tight font-heading">{data.name}</h1>
            <h2 className="text-2xl font-bold text-emerald-600 tracking-widest uppercase">{data.role}</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-y-10 gap-x-12 mt-12">
            <div className="flex items-start gap-5 text-slate-700">
              <div className="bg-emerald-100 p-3.5 rounded-xl text-emerald-600 shrink-0 shadow-sm border border-emerald-200">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</span>
                <span className="text-xl font-bold text-slate-800">{data.phone}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-5 text-slate-700">
              <div className="bg-emerald-100 p-3.5 rounded-xl text-emerald-600 shrink-0 shadow-sm border border-emerald-200">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</span>
                <span className="text-xl font-bold text-slate-800">{data.email}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-5 text-slate-700">
              <div className="bg-emerald-100 p-3.5 rounded-xl text-emerald-600 shrink-0 shadow-sm border border-emerald-200">
                <Globe className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Website</span>
                <span className="text-xl font-bold text-slate-800">{data.website}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-5 text-slate-700">
              <div className="bg-[#1e3a8a]/10 p-3.5 rounded-xl text-[#1e3a8a] shrink-0 shadow-sm border border-[#1e3a8a]/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Connect</span>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <LinkedinIcon className="w-5 h-5 text-slate-700 hover:text-[#1e3a8a]" />
                    <InstagramIcon className="w-5 h-5 text-slate-700 hover:text-[#1e3a8a]" />
                    <FacebookIcon className="w-5 h-5 text-slate-700 hover:text-[#1e3a8a]" />
                  </div>
                  <span className="text-sm font-bold text-slate-800">{data.socialHandle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: QR Code */}
        <div className="w-1/3 flex flex-col items-center justify-center border-l-2 border-slate-200 pl-10">
          <div className="bg-white p-7 rounded-[2rem] shadow-xl flex flex-col items-center border border-slate-100 relative">
            <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-50 rounded-bl-[2rem] rounded-tr-[2rem]" />
            <QRCodeSVG 
              value={data.website.startsWith("http") ? data.website : "https://" + data.website} 
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
          <div className="bg-gradient-to-r from-[#1e3a8a] to-emerald-700 text-white px-8 py-3 rounded-full mt-8 text-sm font-bold tracking-widest uppercase shadow-lg shadow-emerald-900/20">
            Scan to Connect
          </div>
        </div>
      </div>
    </div>
  );
}
