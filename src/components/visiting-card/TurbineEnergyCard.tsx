import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { VisitingCardProps } from "./types";

export function TurbineEnergyCard({ side, className, id, data }: VisitingCardProps) {
  if (side === "front") {
    return (
      <div id={id} className={`w-[1050px] h-[600px] bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col items-center justify-center shadow-lg border border-slate-200 ${className || ""}`}>
        {/* Turbine Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/technology_turbine.png" 
            alt="Turbine Background" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-20 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/90 via-slate-50/50 to-emerald-50/80" />
        </div>
        
        <div className="z-10 flex flex-col items-center bg-white/70 p-12 rounded-[2rem] backdrop-blur-xl shadow-xl border border-white">
          <Image 
            src="/brand-icon-5.svg" 
            alt="Oasis Energy Icon" 
            width={120}
            height={120} 
            className="w-28 h-28 mb-8 object-contain"
          />
          <div className="text-center bg-white px-8 py-4 rounded-full shadow-sm border border-slate-100">
            <span className="text-5xl font-extrabold tracking-tight whitespace-nowrap font-heading">
              <span className="text-[#1e3a8a]">Oasis</span> <span className="text-emerald-600">Energy</span>
            </span>
          </div>
          <span className="block text-sm font-bold text-slate-500 mt-6 tracking-[0.4em] uppercase">
            Let&apos;s grab the free energy
          </span>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`w-[1050px] h-[600px] bg-white text-slate-900 relative overflow-hidden flex shadow-lg border border-slate-200 ${className || ""}`}>
      {/* Subtle Turbine Background on Right Side */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-0 opacity-15 overflow-hidden">
        <Image 
          src="/technology_turbine.png" 
          alt="Turbine Background" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="right center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>
      
      {/* Emerald Top Accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600" />
      
      {/* Content Container */}
      <div className="flex-1 flex px-20 py-16 z-10 relative">
        {/* Left Side: Personal Info */}
        <div className="flex flex-col justify-center w-[55%]">
          <h1 className="text-5xl font-extrabold text-[#1e3a8a] mb-2 tracking-tight font-heading">{data.name}</h1>
          <h2 className="text-xl font-bold text-emerald-600 mb-12 tracking-[0.2em] uppercase">{data.role}</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-600">
              <div className="bg-slate-50 p-2.5 rounded-full border border-slate-200 shadow-sm">
                <Phone className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-xl font-medium tracking-wide">{data.phone}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600">
              <div className="bg-slate-50 p-2.5 rounded-full border border-slate-200 shadow-sm">
                <Mail className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-xl font-medium tracking-wide">{data.email}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600">
              <div className="bg-slate-50 p-2.5 rounded-full border border-slate-200 shadow-sm">
                <Globe className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-xl font-medium tracking-wide">{data.website}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-12 pt-8 border-t border-slate-100 w-max">
            <LinkedinIcon className="w-6 h-6 text-slate-400" />
            <InstagramIcon className="w-6 h-6 text-slate-400" />
            <FacebookIcon className="w-6 h-6 text-slate-400" />
            <span className="text-lg font-bold text-[#1e3a8a] ml-4 bg-slate-100 px-4 py-1.5 rounded-full">{data.socialHandle}</span>
          </div>
        </div>

        {/* Right Side: QR & Logo */}
        <div className="w-[45%] flex flex-col items-end justify-between pl-8 py-4">
          <div className="flex items-center gap-3 bg-white/90 p-4 rounded-xl shadow-sm border border-slate-100 backdrop-blur-md">
            <Image src="/brand-icon-5.svg" alt="Oasis Energy" width={48} height={48} className="w-10 h-10" />
            <div>
              <span className="text-2xl font-extrabold tracking-tight block leading-none font-heading">
                <span className="text-[#1e3a8a]">Oasis</span> <span className="text-emerald-600">Energy</span>
              </span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-[2rem] shadow-xl border border-emerald-50 flex flex-col items-center">
            <QRCodeSVG 
              value={data.website.startsWith("http") ? data.website : "https://" + data.website} 
              size={170} 
              level="H"
              fgColor="#1e3a8a"
              imageSettings={{
                src: "/brand-icon-5.svg",
                x: undefined,
                y: undefined,
                height: 42,
                width: 42,
                excavate: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
