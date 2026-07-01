"use client";

import { useState, useRef } from "react";
import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";
import { Download, Monitor, Check, Image as ImageIcon, FileText } from "lucide-react";
import { MinimalCorporateCard } from "./MinimalCorporateCard";
import { FuturisticEnergyCard } from "./FuturisticEnergyCard";
import { BoldBrandCard } from "./BoldBrandCard";
import { EcoModernCard } from "./EcoModernCard";
import { PremiumGlassCard } from "./PremiumGlassCard";
import { HybridFavoriteCard } from "./HybridFavoriteCard";
import { TurbineEnergyCard } from "./TurbineEnergyCard";
import { IndustrialPowerCard } from "./IndustrialPowerCard";
import { SolarGridCard } from "./SolarGridCard";
import { AvatarWindCard } from "./AvatarWindCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardData } from "./types";

type CardStyle = "hybrid" | "minimal" | "eco" | "futuristic" | "glass" | "bold" | "turbine" | "industrial" | "solar" | "avatar";
type CardSide = "front" | "back";

export function CardDisplay() {
  const [activeStyle, setActiveStyle] = useState<CardStyle>("hybrid");
  const [activeSide, setActiveSide] = useState<CardSide>("front");
  const [isExporting, setIsExporting] = useState(false);
  
  const [cardData, setCardData] = useState<CardData>({
    name: "Vinay Pratap Singh",
    role: "Co-Founder",
    phone: "+91 6376301828",
    email: "vinay@oasis.energy",
    website: "www.oasis.energy",
    socialHandle: "@oasisenergy"
  });
  
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = async (format: "png" | "jpeg" | "webp" | "pdf") => {
    if (!cardRef.current) return;
    
    try {
      setIsExporting(true);
      const element = cardRef.current;
      // Find the inner card div to export directly (it has the fixed dimensions)
      const targetElement = element.querySelector('[id^="card-"]') as HTMLElement;
      
      if (!targetElement) throw new Error("Card element not found");

      // Set scale for high quality
      const scale = 3;
      const options = {
        quality: 1,
        pixelRatio: scale,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
        }
      };

      let dataUrl = "";
      
      if (format === "png" || format === "pdf") {
        dataUrl = await htmlToImage.toPng(targetElement, options);
      } else if (format === "jpeg") {
        dataUrl = await htmlToImage.toJpeg(targetElement, options);
      } else if (format === "webp") {
        dataUrl = await htmlToImage.toCanvas(targetElement, options).then(canvas => canvas.toDataURL('image/webp', 1.0));
      }

      if (format === "pdf") {
        // Standard visiting card size: 85mm x 55mm
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "mm",
          format: [85, 55]
        });
        
        pdf.addImage(dataUrl, "PNG", 0, 0, 85, 55);
        pdf.save(`oasis-energy-card-${activeStyle}-${activeSide}.pdf`);
      } else {
        // Download image
        const link = document.createElement("a");
        link.download = `oasis-energy-card-${activeStyle}-${activeSide}.${format}`;
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error("Export failed", error);
      alert("Failed to export the card. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  const renderActiveCard = () => {
    const id = `card-${activeStyle}-${activeSide}`;
    switch (activeStyle) {
      case "hybrid":
        return <HybridFavoriteCard side={activeSide} id={id} data={cardData} />;
      case "minimal":
        return <MinimalCorporateCard side={activeSide} id={id} data={cardData} />;
      case "eco":
        return <EcoModernCard side={activeSide} id={id} data={cardData} />;
      case "futuristic":
        return <FuturisticEnergyCard side={activeSide} id={id} data={cardData} />;
      case "glass":
        return <PremiumGlassCard side={activeSide} id={id} data={cardData} />;
      case "bold":
        return <BoldBrandCard side={activeSide} id={id} data={cardData} />;
      case "turbine":
        return <TurbineEnergyCard side={activeSide} id={id} data={cardData} />;
      case "industrial":
        return <IndustrialPowerCard side={activeSide} id={id} data={cardData} />;
      case "solar":
        return <SolarGridCard side={activeSide} id={id} data={cardData} />;
      case "avatar":
        return <AvatarWindCard side={activeSide} id={id} data={cardData} />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8">
      {/* Controls Sidebar */}
      <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0 h-max lg:sticky lg:top-24">
        <div className="bg-card border rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Card Side</h3>
          <div className="flex bg-slate-100 dark:bg-slate-900 rounded-xl p-1">
            <button
              onClick={() => setActiveSide("front")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeSide === "front" 
                  ? "bg-white dark:bg-slate-800 shadow text-emerald-600 dark:text-emerald-400" 
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              Front (Brand)
            </button>
            <button
              onClick={() => setActiveSide("back")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeSide === "back" 
                  ? "bg-white dark:bg-slate-800 shadow text-emerald-600 dark:text-emerald-400" 
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              Back (Details)
            </button>
          </div>
        </div>

        <div className="bg-card border rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Personal Details</h3>
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1 block">Name</label>
              <Input 
                value={cardData.name} 
                onChange={e => setCardData({...cardData, name: e.target.value})} 
                className="h-8 text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1 block">Role</label>
              <Input 
                value={cardData.role} 
                onChange={e => setCardData({...cardData, role: e.target.value})} 
                className="h-8 text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1 block">Phone</label>
              <Input 
                value={cardData.phone} 
                onChange={e => setCardData({...cardData, phone: e.target.value})} 
                className="h-8 text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1 block">Email</label>
              <Input 
                value={cardData.email} 
                onChange={e => setCardData({...cardData, email: e.target.value})} 
                className="h-8 text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1 block">Website (QR Target)</label>
              <Input 
                value={cardData.website} 
                onChange={e => setCardData({...cardData, website: e.target.value})} 
                className="h-8 text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1 block">Social Handle</label>
              <Input 
                value={cardData.socialHandle} 
                onChange={e => setCardData({...cardData, socialHandle: e.target.value})} 
                className="h-8 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col gap-4">
          <h3 className="text-lg font-bold">Export Options</h3>
          
          <Button 
            onClick={() => handleExport("pdf")} 
            disabled={isExporting}
            className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white gap-2"
          >
            <FileText className="w-4 h-4" />
            Download PDF (Print)
          </Button>
          
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Button 
              variant="outline" 
              onClick={() => handleExport("png")} 
              disabled={isExporting}
              className="gap-2"
            >
              <ImageIcon className="w-4 h-4" />
              PNG
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleExport("jpeg")} 
              disabled={isExporting}
              className="gap-2"
            >
              <ImageIcon className="w-4 h-4" />
              JPEG
            </Button>
          </div>
        </div>
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        
        {/* Design Selector horizontally stacked above the card */}
        <div className="bg-card border rounded-2xl p-4 shadow-sm overflow-x-auto whitespace-nowrap hide-scrollbar flex gap-2">
          {[
            { id: "hybrid", label: "Hybrid Favorite" },
            { id: "avatar", label: "Avatar Wind" },
            { id: "eco", label: "Eco Modern" },
            { id: "glass", label: "Premium Glass" },
            { id: "futuristic", label: "Clean Tech" },
            { id: "industrial", label: "Industrial Power" },
            { id: "solar", label: "Solar Grid" },
            { id: "turbine", label: "Turbine Tech" },
            { id: "minimal", label: "Minimal Corporate" },
            { id: "bold", label: "Bold Brand" },
          ].map((style) => (
            <button
              key={style.id}
              onClick={() => setActiveStyle(style.id as CardStyle)}
              className={`flex items-center justify-between px-4 py-2 text-sm rounded-xl border transition-all shrink-0 ${
                activeStyle === style.id 
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 font-bold" 
                  : "border-border hover:border-emerald-200 hover:bg-slate-50 dark:hover:bg-slate-900 font-medium"
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-8 overflow-hidden min-h-[500px]">
          {/* We use scale to fit the 1050x600 card into the container nicely */}
          <div 
            className="relative w-full max-w-[1050px] aspect-[1050/600] flex items-center justify-center"
          >
            <div 
              ref={cardRef}
              className={`transition-all duration-500 ease-in-out w-[1050px] h-[600px] origin-center ${isExporting ? 'scale-100 absolute top-0 left-0 -z-50 opacity-0' : 'scale-[0.3] sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.7] xl:scale-[0.8] 2xl:scale-[0.9]'}`}
            >
              {renderActiveCard()}
            </div>
          </div>
          
          <div className="mt-8 text-sm text-slate-500 flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            Live Preview. Exported files are full 1050x600 resolution (3.5" x 2" print size).
          </div>
        </div>

      </div>
    </div>
  );
}
