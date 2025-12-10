import React from "react";
import { cn } from "@/lib/utils";

export interface AuroraTextEffectProps {
  text: string;
  className?: string;
  textClassName?: string;
  colors?: {
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
  };
  blurAmount?:
    | "blur-none"
    | "blur-sm"
    | "blur-md"
    | "blur-lg"
    | "blur-xl"
    | "blur-2xl"
    | "blur-3xl"
    | string;
  animationSpeed?: {
    border?: number;
    first?: number;
    second?: number;
    third?: number;
    fourth?: number;
  };
}

export function AuroraTextEffect({
  text,
  className,
  textClassName,
  colors = {
    first: "bg-cyan-400",
    second: "bg-yellow-400",
    third: "bg-green-400",
    fourth: "bg-purple-500",
  },
  blurAmount = "blur-lg",
  animationSpeed = {
    border: 6,
    first: 5,
    second: 5,
    third: 3,
    fourth: 13,
  },
}: AuroraTextEffectProps) {
  const keyframes = `
    @keyframes aurora-1 { 0% { top: 0; right: 0; } 50% { top: 100%; right: 75%; } 75% { top: 100%; right: 25%; } 100% { top: 0; right: 0; } }
    @keyframes aurora-2 { 0% { top: -50%; left: 0%; } 60% { top: 100%; left: 75%; } 85% { top: 100%; left: 25%; } 100% { top: -50%; left: 0%; } }
    @keyframes aurora-3 { 0% { bottom: 0; left: 0; } 40% { bottom: 100%; left: 75%; } 65% { bottom: 40%; left: 50%; } 100% { bottom: 0; left: 0; } }
    @keyframes aurora-4 { 0% { bottom: -50%; right: 0; } 50% { bottom: 0%; right: 40%; } 90% { bottom: 50%; right: 25%; } 100% { bottom: -50%; right: 0; } }
    @keyframes aurora-border { 0% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; } 25% { border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%; } 50% { border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%; } 75% { border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%; } 100% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; } }
  `;

  return (
    <span className={cn("relative", className)}>
      <style>{keyframes}</style>
      <span
        className={cn(
          "font-bold tracking-tight relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400",
          textClassName
        )}
      >
        {text}
      </span>
      <div
        className="absolute inset-0 z-10 mix-blend-overlay pointer-events-none"
      >
        <div
          className={cn("absolute w-full h-full rounded-[37%_29%_27%_27%/28%_25%_41%_37%] filter", colors.first, blurAmount)}
          style={{ animation: `aurora-border ${animationSpeed.border}s ease-in-out infinite, aurora-1 ${animationSpeed.first}s ease-in-out infinite alternate` }}
        />
        <div
          className={cn("absolute w-full h-full rounded-[37%_29%_27%_27%/28%_25%_41%_37%] filter", colors.second, blurAmount)}
          style={{ animation: `aurora-border ${animationSpeed.border}s ease-in-out infinite, aurora-2 ${animationSpeed.second}s ease-in-out infinite alternate` }}
        />
        <div
          className={cn("absolute w-full h-full rounded-[37%_29%_27%_27%/28%_25%_41%_37%] filter", colors.third, blurAmount)}
          style={{ animation: `aurora-border ${animationSpeed.border}s ease-in-out infinite, aurora-3 ${animationSpeed.third}s ease-in-out infinite alternate` }}
        />
        <div
          className={cn("absolute w-full h-full rounded-[37%_29%_27%_27%/28%_25%_41%_37%] filter", colors.fourth, blurAmount)}
          style={{ animation: `aurora-border ${animationSpeed.border}s ease-in-out infinite, aurora-4 ${animationSpeed.fourth}s ease-in-out infinite alternate` }}
        />
      </div>
    </span>
  );
}