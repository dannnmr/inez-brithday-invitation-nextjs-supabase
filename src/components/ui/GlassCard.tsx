import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative z-10 w-full bg-[#1B2A22]/90 rounded-[2.5rem] min-[380px]:rounded-[3.5rem] shadow-[0_20px_50px_rgba(44,74,62,0.15)] border border-[#fbeede]/40 backdrop-blur-md overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
