"use client";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  start?: string;
  /** If true, animates on page load instead of scroll */
  immediate?: boolean;
}

export default function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.8,
  start = "top 85%",
  immediate = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const from: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") from.y = 30;
    if (direction === "left") from.x = -30;
    if (direction === "right") from.x = 30;

    gsap.set(ref.current, from);

    const to: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
    };

    if (!immediate) {
      to.scrollTrigger = {
        trigger: ref.current,
        start,
        toggleActions: "play none none none",
      };
    }

    gsap.to(ref.current, to);

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === ref.current) t.kill();
      });
    };
  }, [direction, delay, duration, start, immediate]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
