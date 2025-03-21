import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiMail,
  FiMenu,
} from "react-icons/fi";
import { useMenu } from "../hooks/useMenu";

const menuItems = [
  { path: "/", icon: <FiHome size={20} />, label: "Home" },
  { path: "/about", icon: <FiUser size={20} />, label: "About" },
  { path: "/skills", icon: <FiCode size={20} />, label: "Skills" },
  { path: "/projects", icon: <FiBriefcase size={20} />, label: "Projects" },
  { path: "/contact", icon: <FiMail size={20} />, label: "Contact" },
];

const menuVariants = {
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export function Sidebar() {
  const { isOpen, toggleMenu, closeMenu } = useMenu();
  const location = useLocation();

  return (
    <>
      <motion.button
        onClick={toggleMenu}
        className="menu-toggle"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        <FiMenu size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={closeMenu}
            />

            <motion.nav
              className="side-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`menu-item ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
