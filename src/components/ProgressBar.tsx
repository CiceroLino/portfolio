import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
  label: string;
  className?: string;
}

export function ProgressBar({
  percentage,
  label,
  className = "",
}: ProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2 bg-[var(--manjaro-card)] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[var(--manjaro-green)]"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
