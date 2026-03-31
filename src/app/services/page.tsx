import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplets,
  Flame,
  Search,
  Gauge,
  Wrench,
  Bath,
  CloudRain,
  Building2,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { services } from "@/data/services";
import TextReveal from "@/components/animations/TextReveal";
import StaggerReveal from "@/components/animations/StaggerReveal";

export const metadata: Metadata = {
  title:
    "Plumbing Services Brisbane | Residential & Commercial | Brisbane Plumbing Co.",
  description:
    "Complete plumbing services across Brisbane — blocked drains, hot water, gas fitting, leak detection, renovations, and commercial plumbing. Get a quote today.",
  openGraph: {
    title: "Plumbing Services Brisbane | Brisbane Plumbing Co.",
    description:
      "Complete plumbing services across Brisbane — blocked drains, hot water, gas fitting, leak detection, renovations, and commercial plumbing.",
  },
};

const iconMap: Record<string, React.ElementType> = {
  Droplets,
  Flame,
  Search,
  Gauge,
  Wrench,
  Bath,
  CloudRain,
  Building2,
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="text-xs font-label tracking-[0.2em] text-primary uppercase mb-6 block font-bold">
                OUR EXPERTISE
              </span>
              <TextReveal
                as="h1"
                className="font-headline text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-on-surface mb-8"
              >
                Plumbing Services Across Brisbane.
              </TextReveal>
              <p className="text-lg text-secondary leading-relaxed max-w-xl font-body">
                Comprehensive plumbing solutions delivered with precision and
                care. From a dripping tap to a full renovation — we cover it
                all.
              </p>
            </div>
          </div>
        </section>

        {/* Service Directory Grid */}
        <section className="px-6 lg:px-8 mb-16 md:mb-32 max-w-7xl mx-auto">
          <div className="mb-12 pb-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Service Directory
            </h2>
          </div>
          <StaggerReveal
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-surface-container-low"
            selector=":scope > div"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.slug}
                  className="group p-10 border-r border-b border-surface-container-low hover:bg-surface-container-low transition-colors duration-500 cursor-pointer"
                >
                  <div className="mb-8 w-12 h-12 bg-surface-container-low flex items-center justify-center">
                    {Icon && (
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="text-primary"
                      />
                    )}
                  </div>
                  <h3 className="font-headline text-lg font-bold mb-3 text-on-surface">
                    {service.title}
                  </h3>
                  <p className="font-body text-secondary text-sm mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="w-8 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                </div>
              );
            })}
          </StaggerReveal>
        </section>

        {/* Expanded Service Sections */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 md:space-y-32">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="relative"
              >
                {/* Decorative number — background watermark */}
                <span className="absolute -top-4 right-0 text-[12rem] font-headline font-extrabold text-on-surface/[0.06] leading-none select-none z-0 hidden lg:block pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    {Icon && (
                      <Icon
                        size={28}
                        strokeWidth={1}
                        className="text-primary"
                      />
                    )}
                    <h2 className="text-3xl font-headline font-bold">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-secondary leading-relaxed font-body mb-8 max-w-3xl">
                    {service.fullDescription}
                  </p>
                  <div className="mb-8">
                    <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-4 text-on-surface-variant">
                      Common issues we fix
                    </h4>
                    <ul className="space-y-3">
                      {service.commonProblems.map((problem) => (
                        <li
                          key={problem}
                          className="flex items-center gap-3 text-secondary font-body text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-sm shrink-0" />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-3 text-primary font-headline font-bold uppercase tracking-widest text-sm hover:gap-5 transition-all group"
                  >
                    Get a Quote
                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* Contact CTA */}
        <section className="max-w-4xl mx-auto px-8 mt-32 text-center" id="contact">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-secondary mb-10 font-body leading-relaxed">
            Give us a call or send through the details and we&apos;ll get back
            to you with a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="tel:0400000000"
              className="bronze-gradient text-white px-10 py-4 rounded-sm font-headline font-bold tracking-tight transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
            >
              Call 0400 000 000
            </Link>
            <Link
              href="/"
              className="text-primary px-10 py-4 font-headline font-bold tracking-tight border-b-2 border-transparent hover:border-primary hover:bg-on-surface/5 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
