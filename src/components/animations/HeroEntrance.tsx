"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function HeroEntrance({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);

    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    const label = el.querySelector("[data-hero='label']");
    const headingWords = el.querySelectorAll(
      "[data-hero='heading'] .word-inner"
    );
    const subtext = el.querySelector("[data-hero='subtext']");
    const buttons = el.querySelectorAll("[data-hero='button']");
    const image = el.querySelector("[data-hero='image']");
    const trustItems = el.querySelectorAll("[data-hero='trust-item']");

    // Only animate if we found elements
    const hasElements =
      label || headingWords.length || subtext || buttons.length;
    if (!hasElements) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (label) {
      gsap.set(label, { opacity: 0 });
      tl.to(label, { opacity: 1, duration: 0.6 }, 0.2);
    }

    if (headingWords.length) {
      gsap.set(headingWords, { y: 50, opacity: 0 });
      tl.to(
        headingWords,
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.06 },
        0.4
      );
    }

    if (subtext) {
      gsap.set(subtext, { opacity: 0 });
      tl.to(subtext, { opacity: 1, duration: 0.6 }, 0.8);
    }

    if (buttons.length) {
      gsap.set(buttons, { opacity: 0, y: 20 });
      tl.to(
        buttons,
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        1.0
      );
    }

    if (image) {
      gsap.set(image, { opacity: 0, scale: 1.05 });
      tl.to(image, { opacity: 1, scale: 1, duration: 1.2 }, 0.3);
    }

    if (trustItems.length) {
      gsap.set(trustItems, { opacity: 0, y: 10 });
      tl.to(
        trustItems,
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
        1.2
      );
    }

    // Safety: ensure everything is visible after timeline completes
    tl.eventCallback("onComplete", () => {
      [label, subtext, image].forEach((el) => {
        if (el) gsap.set(el, { clearProps: "all" });
      });
      [headingWords, buttons, trustItems].forEach((nodeList) => {
        nodeList.forEach((el) => gsap.set(el, { clearProps: "all" }));
      });
    });
  }, []);

  return (
    <div ref={ref} style={ready ? undefined : { opacity: 1 }}>
      {children}
    </div>
  );
}
