import React from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <div className={`glitch-effect ${className}`} data-text={text}>
      {text}
    </div>
  );
}
