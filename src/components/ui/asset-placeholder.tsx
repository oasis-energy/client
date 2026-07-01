import { FileText } from "lucide-react";

interface AssetPlaceholderProps {
  source: string;
  page?: number;
  description: string;
  className?: string;
}

export function AssetPlaceholder({ source, page, description, className = "" }: AssetPlaceholderProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 bg-secondary/50 border border-dashed border-primary/20 rounded-xl text-center overflow-hidden min-h-[200px] ${className}`}>
      <FileText className="w-12 h-12 text-primary/40 mb-4" />
      <h3 className="font-semibold text-lg mb-1">Asset Placeholder</h3>
      <p className="text-sm font-medium text-foreground/80">{description}</p>
      <div className="mt-4 inline-flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-muted-foreground bg-background px-4 py-2 rounded-md shadow-sm">
        <span><span className="font-semibold text-foreground/60">Source:</span> {source}</span>
        {page && <span><span className="font-semibold text-foreground/60">Page:</span> {page}</span>}
      </div>
    </div>
  );
}
