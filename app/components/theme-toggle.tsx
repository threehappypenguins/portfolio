"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Sun, Moon, Monitor, Check } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!mounted) return null;

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-foreground/10 transition-colors"
        aria-label="Toggle theme menu"
      >
        {theme === "light" ? (
          <Sun size={20} />
        ) : theme === "dark" ? (
          <Moon size={20} />
        ) : (
          <Monitor size={20} />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-background border border-foreground/20 rounded-md shadow-lg z-50">
          <div className="px-3 py-2 border-b border-foreground/10">
            <p className="text-sm font-semibold">Theme</p>
          </div>
          <div className="py-1">
            <button
              onClick={() => handleThemeChange("light")}
              className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-foreground/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Sun size={16} />
                <span>Light</span>
              </div>
              {theme === "light" && <Check size={16} />}
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-foreground/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Moon size={16} />
                <span>Dark</span>
              </div>
              {theme === "dark" && <Check size={16} />}
            </button>
            <button
              onClick={() => handleThemeChange("system")}
              className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-foreground/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Monitor size={16} />
                <span>System</span>
              </div>
              {theme === "system" && <Check size={16} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
