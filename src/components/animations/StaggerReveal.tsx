"use client";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  /** CSS selector for child items to stagger */
  selector?: string;
  stagger?: number;
  start?: string;
}

export default function StaggerReveal({
  children,
  className,
  selector = ":scope > *",
  stagger = 0.1,
  start = "top 80%",
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = ref.current.querySelectorAll(selector);
    gsap.set(items, { opacity: 0, y: 40, scale: 0.95 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === ref.current) t.kill();
      });
    };
  }, [selector, stagger, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
