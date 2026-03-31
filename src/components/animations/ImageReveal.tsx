"use client";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ImageReveal({ children, className }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(ref.current, { clipPath: "inset(100% 0 0 0)" });

    gsap.to(ref.current, {
      clipPath: "inset(0% 0 0 0)",
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === ref.current) t.kill();
      });
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
