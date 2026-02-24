"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Adjust scroll multiplier to control rotation speed
const SCROLL_MULTIPLIER = 0.25;

// Gear radii based on rendered Tailwind sizes (w/h / 2)
const GEAR1_RADIUS = 32; // w-32 → 64px, radius = 32
const GEAR2_RADIUS = 56; // w-56 → 112px, radius = 56
const GEAR_2_SPEED_RATIO = GEAR1_RADIUS / GEAR2_RADIUS; // 0.5714

export default function ScrollGears() {
  const gear1Ref = useRef<HTMLDivElement>(null);
  const gear2Ref = useRef<HTMLDivElement>(null);

  const lastScrollY = useRef(0);
  const rotation = useRef(0);

  useEffect(() => {
    // Respect prefers-reduced-motion setting
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lastScrollY.current = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          let delta = currentScrollY - lastScrollY.current;

          // Prevent jumps caused by sudden scroll changes (e.g., mobile menu)
          if (Math.abs(delta) > 100) delta = 0;

          rotation.current += delta * SCROLL_MULTIPLIER;

          if (gear1Ref.current)
            gear1Ref.current.style.transform = `rotate(${rotation.current}deg)`;
          if (gear2Ref.current)
            gear2Ref.current.style.transform = `rotate(${
              -rotation.current * GEAR_2_SPEED_RATIO
            }deg)`;

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="gear-group relative w-52 h-44 sm:w-64 sm:h-64 mx-auto my-12 sm:my-24">
      <div
        ref={gear1Ref}
        className="absolute -left-1 top-3/4 w-24 h-24 sm:-left-10 sm:top-3/4 sm:w-40 sm:h-40 -translate-y-1/2 origin-center transform-gpu"
      >
        <Image
          src="/gear1.svg"
          alt="Gear 1"
          width={160}
          height={160}
          className="w-full h-full"
        />
      </div>
      <div
        ref={gear2Ref}
        className="absolute left-12 top-1/4 w-42 h-42 sm:left-15 sm:top-1/4 sm:w-64 sm:h-64 -translate-y-1/2 origin-center transform-gpu"
      >
        <Image
          src="/gear2.svg"
          alt="Gear 2"
          width={256}
          height={256}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
