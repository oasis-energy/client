import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";
import { VisitingCardProps } from "./types";

export function PremiumGlassCard({ side, className, id }: VisitingCardProps) {
  if (side === "front") {
    return (
      <div id={id} className={`w-[1050px] h-[600px] bg-slate-900 text-white relative overflow-hidden flex flex-col items-center justify-center shadow-lg border-0 ${className || ""}`}>
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 opacity-80" style={{ 
          background: 'radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.4) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(30, 58, 138, 0.6) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
          backgroundSize: '100% 100%'
        }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        
        <div className="z-10 flex flex-col items-center bg-white/5 p-16 rounded-[2.5rem] backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
          <Image 
            src="/brand-icon-5.svg" 
            alt="Oasis Energy Icon" 
            width={140}
            height={140} 
            className="w-32 h-32 mb-8 object-contain drop-shadow-2xl"
          />
          <div className="text-center">
            <span className="text-6xl font-black tracking-tight whitespace-nowrap font-heading drop-shadow-md">
              <span className="text-white">Oasis</span> <span className="text-emerald-400">Energy</span>
            </span>
            <span className="block text-sm font-semibold text-emerald-200/80 mt-5 tracking-[0.4em] uppercase">
              Let&apos;s grab the free energy
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`w-[1050px] h-[600px] bg-slate-900 text-white relative overflow-hidden flex shadow-lg border-0 ${className || ""}`}>
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-60" style={{ 
        background: 'radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(30, 58, 138, 0.4) 0%, transparent 50%)',
        backgroundSize: '100% 100%'
      }} />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      
      {/* Glass Container */}
      <div className="m-8 flex-1 flex rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden z-10">
        
        {/* Left Side: Personal Info */}
        <div className="flex flex-col justify-center w-3/5 px-16 py-12 relative">
          <div className="absolute right-0 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight font-heading drop-shadow-sm">Vinay Pratap<br/>Singh</h1>
            <h2 className="text-lg font-bold text-emerald-400 tracking-[0.2em] uppercase">Co-Founder</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-5 text-emerald-50">
              <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
                <Phone className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xl font-medium tracking-wide drop-shadow-sm">+91 6376301828</span>
            </div>
            
            <div className="flex items-center gap-5 text-emerald-50">
              <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
                <Mail className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xl font-medium tracking-wide drop-shadow-sm">vinay@oasis.energy</span>
            </div>
            
            <div className="flex items-center gap-5 text-emerald-50">
              <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
                <Globe className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xl font-medium tracking-wide drop-shadow-sm">www.oasis.energy</span>
            </div>
            
            <div className="flex items-center gap-5 text-emerald-50 pt-2">
              <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <LinkedinIcon className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
                  <InstagramIcon className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
                  <FacebookIcon className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-bold text-emerald-100 bg-white/10 px-3 py-1 rounded-full border border-white/10">@oasisenergy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: QR Code */}
        <div className="w-2/5 flex flex-col items-center justify-center p-12 relative bg-black/10">
          <div className="flex items-center gap-3 mb-8">
            <Image src="/brand-icon-5.svg" alt="Oasis Energy" width={40} height={40} className="w-10 h-10 drop-shadow-lg" />
            <span className="text-2xl font-bold tracking-tight block leading-none font-heading drop-shadow-md">
              <span className="text-white">Oasis</span> <span className="text-emerald-400">Energy</span>
            </span>
          </div>
          
          <div className="bg-white/90 p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col items-center backdrop-blur-md">
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
          <div className="text-xs font-bold text-emerald-300/80 mt-6 tracking-[0.3em] uppercase">
            Scan to Connect
          </div>
        </div>
      </div>
    </div>
  );
}
