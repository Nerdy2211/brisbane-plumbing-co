import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
  icon?: LucideIcon;
}

export default function ImagePlaceholder({
  alt,
  className,
  icon: Icon = ImageIcon,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "w-full h-full bg-[#e4e2dd] flex items-center justify-center relative overflow-hidden",
        className
      )}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8c3b4]/20 to-transparent" />
      <Icon className="w-12 h-12 text-[#79542e]/20" strokeWidth={1} />
    </div>
  );
}
