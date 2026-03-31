import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/data/constants";
import { IMAGES } from "@/data/images";
import TextReveal from "@/components/animations/TextReveal";

export const metadata: Metadata = {
  title:
    "Plumbing FAQ | Pricing, Process & Licensing Info | Brisbane Plumbing Co.",
  description:
    "Common questions about our plumbing services, quoting process, business hours, and licensing. Straightforward answers for Brisbane homeowners.",
  openGraph: {
    title: "FAQ | Brisbane Plumbing Co.",
    description:
      "Common questions about our plumbing services, quoting process, business hours, and licensing.",
  },
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <span className="font-label text-xs tracking-[0.2em] uppercase text-primary font-bold mb-4 block">
              COMMON QUESTIONS
            </span>
            <TextReveal
              as="h1"
              className="font-headline text-[3.5rem] leading-[1.1] tracking-tight text-on-surface font-extrabold mb-8"
            >
              Frequently Asked Questions
            </TextReveal>
            <p className="font-body text-lg text-secondary max-w-xl leading-relaxed">
              Everything you need to know about our services, pricing, and how
              we work. If your question isn&apos;t answered here, give us a
              call.
            </p>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="aspect-[4/3] bg-surface-container overflow-hidden relative">
              <Image
                src={IMAGES.faqHero}
                alt="Close-up of high-quality copper piping and brass valves"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* Bento FAQ Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8 md:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Licensing */}
            <div className="md:col-span-2 bg-surface-container-lowest p-10 border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck
                  size={28}
                  strokeWidth={1}
                  className="text-primary"
                />
                <h2 className="font-headline text-xl font-bold">
                  Licensing &amp; Qualifications
                </h2>
              </div>
              <div className="space-y-6">
                <p className="font-body text-on-surface-variant leading-relaxed">
                  We&apos;re fully licensed with the Queensland Building and
                  Construction Commission (QBCC). All our plumbers are qualified
                  and insured, and we carry public liability cover on every job.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-surface-container-low px-4 py-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-sm bg-primary" />
                    <span className="text-xs font-label uppercase tracking-wider text-secondary">
                      QBCC {BUSINESS.qbccLicence}
                    </span>
                  </div>
                  <div className="bg-surface-container-low px-4 py-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-sm bg-primary" />
                    <span className="text-xs font-label uppercase tracking-wider text-secondary">
                      Fully Insured
                    </span>
                  </div>
                  <div className="bg-surface-container-low px-4 py-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-sm bg-primary" />
                    <span className="text-xs font-label uppercase tracking-wider text-secondary">
                      Public Liability
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-surface-container-low p-10 flex flex-col justify-between">
              <div>
                <Clock
                  size={24}
                  strokeWidth={1}
                  className="text-primary mb-4 block"
                />
                <h3 className="font-headline text-xl font-bold mb-4 leading-tight">
                  Business Hours
                </h3>
                <ul className="space-y-3 font-body text-sm">
                  <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span>Mon — Fri</span>
                    <span className="font-bold">7:00am — 5:00pm</span>
                  </li>
                  <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span>Saturday</span>
                    <span className="font-bold">9:00am — 12:00pm</span>
                  </li>
                  <li className="flex justify-between text-secondary/60">
                    <span>Sunday</span>
                    <span className="font-bold">Closed</span>
                  </li>
                </ul>
                <p className="text-xs text-secondary mt-4 italic leading-relaxed">
                  For urgent issues during business hours, we&apos;ll do our
                  best to get to you the same day.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Coverage */}
            <div className="md:col-span-5 bg-surface-container p-10">
              <h3 className="font-headline text-xl font-bold mb-6">
                What Areas Do You Cover?
              </h3>
              <p className="text-sm text-secondary mb-8 leading-relaxed font-body">
                We service all of greater Brisbane, Logan, Moreton Bay, and the
                Redlands. If you&apos;re unsure whether you&apos;re in our area,
                just give us a call.
              </p>
              <div className="grid grid-cols-2 gap-4 font-body text-sm">
                {[
                  "Brisbane CBD",
                  "Paddington",
                  "Indooroopilly",
                  "New Farm",
                  "Logan",
                  "Redlands",
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-outline rotate-45" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="mt-10 h-48 bg-surface-variant relative overflow-hidden">
                <Image
                  src={IMAGES.faqMap}
                  alt="Map of Brisbane service area"
                  fill
                  className="object-cover opacity-40 grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-surface/90 backdrop-blur-sm px-4 py-2 text-[10px] font-label uppercase tracking-widest border border-outline-variant/30">
                    Region Focus
                  </span>
                </div>
              </div>
            </div>

            {/* Quoting + Types of Work */}
            <div className="md:col-span-7 flex flex-col gap-8">
              {/* Quoting Process */}
              <div className="bg-surface-container-lowest p-10 flex-1 border border-outline-variant/10">
                <h3 className="font-headline text-xl font-bold mb-6">
                  How Quoting Works
                </h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <span className="font-headline text-[2.5rem] text-surface-variant font-extrabold leading-none">
                      01
                    </span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">
                        Give Us a Call or Fill In the Form
                      </h4>
                      <p className="text-sm text-on-surface-variant font-body">
                        Tell us what&apos;s going on and we&apos;ll ask a few
                        questions to understand the issue.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="font-headline text-[2.5rem] text-surface-variant font-extrabold leading-none">
                      02
                    </span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">
                        We&apos;ll Come Take a Look
                      </h4>
                      <p className="text-sm text-on-surface-variant font-body">
                        For most jobs, we need to see it in person to give you
                        an accurate quote. No charge for the assessment on
                        standard jobs.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="font-headline text-[2.5rem] text-surface-variant font-extrabold leading-none">
                      03
                    </span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">
                        Clear Written Quote
                      </h4>
                      <p className="text-sm text-on-surface-variant font-body">
                        You&apos;ll get a straightforward quote that breaks down
                        what needs doing and what it&apos;ll cost. No surprises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Types of Work */}
              <div className="bg-primary p-10 text-on-primary">
                <h3 className="font-headline text-xl font-bold mb-6">
                  What Types of Work Do You Do?
                </h3>
                <p className="text-sm font-medium leading-relaxed opacity-90 font-body">
                  Everything from a dripping tap to a full house replumb.
                  Blocked drains, hot water systems, gas fitting, renovations,
                  new builds, commercial maintenance — we cover it all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-7xl mx-auto px-8 mt-24">
          <div className="bg-surface-container-low p-12 text-center border-y border-outline-variant/20">
            <h2 className="font-headline text-2xl font-bold mb-4">
              Still have a question? We&apos;re happy to help.
            </h2>
            <p className="font-body text-secondary mb-8">
              Give us a call or send us a message and we&apos;ll get back to you
              quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={BUSINESS.phoneTel}
                className="bronze-gradient text-white px-8 py-3 rounded-sm font-headline font-bold tracking-tight brightness-100 transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
              >
                Call {BUSINESS.phone}
              </Link>
              <Link
                href="/#contact"
                className="text-primary font-headline font-bold tracking-tight border-b-2 border-transparent hover:border-primary hover:bg-on-surface/5 transition-all duration-300 px-8 py-3"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
