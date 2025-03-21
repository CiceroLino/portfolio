import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { ParticlesBackground } from "./ParticlesBackground";

export function Layout() {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Sidebar />
      <ThemeToggle />
      <main className="p-4 sm:p-6 md:p-8 pt-20">
        <Outlet />
      </main>
    </div>
  );
}
