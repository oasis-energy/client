import { FadeIn } from "@/components/ui/fade-in";
import { Check } from "lucide-react";

export function ProductSpecs() {
  const models = [
    { name: "Avatar 1", power: "1 kW", daily: "5 kWh", annual: "1780 kWh", height: "20 - 30 ft", weight: "72 kg", export: "110 - 240 V" },
    { name: "Avatar 3", power: "3 kW", daily: "15 kWh", annual: "5365 kWh", height: "30 - 40 ft", weight: "90 kg", export: "110 - 240 V" },
    { name: "Avatar 5", power: "5 kW", daily: "25 kWh", annual: "8942 kWh", height: "40 - 50 ft", weight: "100 kg", export: "110 - 240 V" },
  ];

  return (
    <section id="specs" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading leading-tight">
            Scalable Power for <span className="text-emerald-500">Every Need</span>
          </h2>
          <p className="text-lg text-slate-600 font-light">
            Designed for residential, commercial, and industrial scales. Operating safely between -40°C and +70°C, supporting both on-grid and off-grid setups.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-6 font-semibold text-lg">Specification</th>
                    {models.map(m => (
                      <th key={m.name} className="p-6 font-bold text-emerald-400 text-xl">{m.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-medium text-slate-900">Rated Power</td>
                    {models.map(m => <td key={m.name} className="p-6">{m.power}</td>)}
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-medium text-slate-900">Annual Power (@ 5.5 m/s)</td>
                    {models.map(m => <td key={m.name} className="p-6 font-semibold text-emerald-600">{m.annual}</td>)}
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-medium text-slate-900">Installation Height</td>
                    {models.map(m => <td key={m.name} className="p-6">{m.height}</td>)}
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-medium text-slate-900">Turbine Weight</td>
                    {models.map(m => <td key={m.name} className="p-6">{m.weight}</td>)}
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-medium text-slate-900">Power Export</td>
                    {models.map(m => <td key={m.name} className="p-6">{m.export}</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-emerald-50 p-6 flex flex-wrap gap-4 items-center justify-center text-sm font-medium text-emerald-800">
              <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Battery Storage 24/48V</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4" /> 2 Year Warranty</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Bird Friendly Design</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4" /> On-Grid / Off-Grid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
