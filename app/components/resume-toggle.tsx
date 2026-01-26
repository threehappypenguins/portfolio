"use client";

import { useEffect, useState, useRef } from "react";
import { FileText, Eye, Download } from "lucide-react";

export function ResumeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleView = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/Sarah Poulin Resume (ATS).pdf";
    link.download = "Sarah Poulin Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-md border border-foreground/20 hover:bg-foreground/10 hover:border-foreground/40 transition-colors"
        aria-label="Resume menu"
      >
        <FileText size={20} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background border border-foreground/20 rounded-md shadow-lg z-50">
          <div className="px-3 py-2 border-b border-foreground/10">
            <p className="text-sm font-semibold">Resume</p>
          </div>
          <div className="py-1">
            <button
              type="button"
              onClick={handleView}
              className="w-full px-3 py-2 text-left flex items-center gap-3 hover:bg-foreground/10 transition-colors"
            >
              <Eye size={16} />
              <span>View Resume</span>
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="w-full px-3 py-2 text-left flex items-center gap-3 hover:bg-foreground/10 transition-colors"
            >
              <Download size={16} />
              <span>Download ATS-Friendly Resume</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
