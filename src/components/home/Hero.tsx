import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/data/constants";
import { IMAGES } from "@/data/images";

export default function Hero() {
  const words = "Quality Plumbing You Can Count On.".split(" ");

  return (
    <header className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Mobile background image */}
      <div className="lg:hidden absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          className="object-cover brightness-[0.4]"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/70 to-on-surface/45" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7">
          <span
            data-hero="label"
            className="text-xs tracking-[0.2em] text-primary font-bold mb-6 block uppercase font-label"
          >
            BRISBANE&apos;S LOCAL PLUMBER
          </span>
          <div data-hero="heading">
            <h1 className="text-[clamp(2.2rem,6vw,3.5rem)] font-headline font-extrabold leading-[1.1] text-white lg:text-on-surface mb-8 tracking-tight">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden mr-[0.25em]"
                >
                  <span className="word-inner inline-block">{word}</span>
                </span>
              ))}
            </h1>
          </div>
          <p
            data-hero="subtext"
            className="text-base lg:text-xl text-white/80 lg:text-secondary max-w-xl mb-10 leading-relaxed font-body"
          >
            From blocked drains to full renovations — licensed, insured, and
            built on doing the job right the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              data-hero="button"
              className="bronze-gradient text-white px-8 py-4 rounded-sm font-headline font-bold text-center tracking-wide transition-transform hover:scale-[1.02]"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              data-hero="button"
              className="text-white/90 lg:text-primary font-headline font-bold text-center px-8 py-4 border-b-2 border-transparent hover:border-primary transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Desktop-only side image */}
        <div
          data-hero="image"
          className="hidden lg:block lg:col-span-5 relative h-[700px]"
        >
          <Image
            src={IMAGES.hero}
            alt="Polished copper pipes and brass fittings"
            fill
            className="object-cover rounded-sm"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-12 left-8 hidden lg:block">
        <div className="flex items-center gap-4 text-secondary/40">
          <span className="text-sm font-headline font-bold tracking-tighter">
            {BUSINESS.established.toUpperCase()}
          </span>
          <div className="w-24 h-[1px] bg-outline-variant/30" />
          <span className="text-sm font-headline font-bold tracking-tighter uppercase">
            South East QLD
          </span>
        </div>
      </div>
    </header>
  );
}
