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

type CardStyle = "hybrid" | "minimal" | "eco" | "futuristic" | "glass" | "bold" | "turbine" | "industrial" | "solar" | "avatar";
type CardSide = "front" | "back";

export function CardDisplay() {
  const [activeStyle, setActiveStyle] = useState<CardStyle>("hybrid");
  const [activeSide, setActiveSide] = useState<CardSide>("front");
  const [isExporting, setIsExporting] = useState(false);
  
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
        // Fallback to png options for html-to-image as webp might not be supported well in some browsers with scaling, but let's try
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
        return <HybridFavoriteCard side={activeSide} id={id} />;
      case "minimal":
        return <MinimalCorporateCard side={activeSide} id={id} />;
      case "eco":
        return <EcoModernCard side={activeSide} id={id} />;
      case "futuristic":
        return <FuturisticEnergyCard side={activeSide} id={id} />;
      case "glass":
        return <PremiumGlassCard side={activeSide} id={id} />;
      case "bold":
        return <BoldBrandCard side={activeSide} id={id} />;
      case "turbine":
        return <TurbineEnergyCard side={activeSide} id={id} />;
      case "industrial":
        return <IndustrialPowerCard side={activeSide} id={id} />;
      case "solar":
        return <SolarGridCard side={activeSide} id={id} />;
      case "avatar":
        return <AvatarWindCard side={activeSide} id={id} />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Controls Sidebar */}
      <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
        <div className="bg-card border rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Design Style</h3>
          <div className="flex flex-col gap-3">
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
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  activeStyle === style.id 
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400" 
                    : "border-border hover:border-emerald-200 hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                <span className="font-medium">{style.label}</span>
                {activeStyle === style.id && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>

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

        <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col gap-4">
          <h3 className="text-lg font-bold">Export Options</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Download high-resolution print-ready files or web-optimized images.
          </p>
          
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
          <Button 
            variant="outline" 
            onClick={() => handleExport("webp")} 
            disabled={isExporting}
            className="w-full gap-2"
          >
            <Monitor className="w-4 h-4" />
            Download WebP (Digital)
          </Button>
        </div>
      </div>

      {/* Card Preview Area */}
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 overflow-hidden min-h-[500px]">
        {/* We use scale to fit the 1050x600 card into the container nicely */}
        <div 
          className="relative w-full max-w-[1050px] aspect-[1050/600] flex items-center justify-center"
        >
          <div 
            ref={cardRef}
            className={`transition-all duration-500 ease-in-out w-[1050px] h-[600px] origin-center ${isExporting ? 'scale-100 absolute top-0 left-0 -z-50 opacity-0' : 'scale-[0.35] sm:scale-[0.5] md:scale-[0.7] lg:scale-[0.6] xl:scale-[0.8] 2xl:scale-[0.9]'}`}
          >
            {renderActiveCard()}
          </div>
        </div>
        
        <div className="mt-8 text-sm text-slate-500 flex items-center gap-2">
          <Monitor className="w-4 h-4" />
          Preview scaled for display. Exported files are full 1050x600 resolution (3.5" x 2" print size).
        </div>
      </div>
    </div>
  );
}
