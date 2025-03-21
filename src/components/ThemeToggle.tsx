import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
    </motion.button>
  );
}
