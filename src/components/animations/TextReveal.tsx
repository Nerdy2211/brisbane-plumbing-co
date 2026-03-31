"use client";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  className?: string;
  delay?: number;
  /** If true, animates on page load instead of scroll */
  immediate?: boolean;
}

export default function TextReveal({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
  immediate = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = containerRef.current.querySelectorAll(".word-inner");

    gsap.set(words, { y: 30, opacity: 0 });

    if (immediate) {
      gsap.to(words, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.06,
        ease: "power2.out",
        delay,
      });
    } else {
      gsap.to(words, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === containerRef.current) t.kill();
      });
    };
  }, [delay, immediate]);

  const words = children.split(" ");

  return (
    <div ref={containerRef}>
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <span className="word-inner inline-block">{word}</span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
