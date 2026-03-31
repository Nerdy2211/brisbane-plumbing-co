import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Hammer } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/data/constants";
import { IMAGES } from "@/data/images";
import TextReveal from "@/components/animations/TextReveal";

export const metadata: Metadata = {
  title: "About Brisbane Plumbing Co. | QBCC Licensed Brisbane Plumber",
  description:
    "Family-owned Brisbane plumbing business. QBCC licensed, fully insured. Quality workmanship on every job — from simple repairs to full renovations.",
  openGraph: {
    title: "About Brisbane Plumbing Co.",
    description:
      "Family-owned Brisbane plumbing business. QBCC licensed, fully insured. Quality workmanship on every job.",
  },
};

const credentials = [
  {
    icon: ShieldCheck,
    title: "QBCC Licensed",
    text: "We operate with full accountability and transparency, adhering to Queensland's most rigorous building standards.",
  },
  {
    icon: Award,
    title: "Fully Insured",
    text: "Comprehensive public liability and professional indemnity insurance on every job we undertake.",
  },
  {
    icon: Hammer,
    title: "Master Plumber",
    text: "Combined decades of experience in residential and commercial plumbing, drainage, and gas fitting.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-32">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 lg:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 relative z-10">
            <span className="text-primary font-label text-[0.75rem] uppercase tracking-[0.15em] font-semibold mb-6 block">
              ABOUT US
            </span>
            <TextReveal
              as="h1"
              className="text-[3.5rem] md:text-[4.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-on-surface mb-8 font-headline"
            >
              Built on Doing the Job Right.
            </TextReveal>
            <p className="text-lg text-secondary leading-relaxed max-w-xl font-body">
              We started this business with a simple idea — be the kind of
              plumber you&apos;d actually recommend to your mates. That means
              showing up on time, being upfront about costs, doing quality work,
              and leaving your place clean when we&apos;re done.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="max-h-[250px] lg:max-h-none aspect-auto lg:aspect-[4/5] overflow-hidden relative">
              <Image
                src={IMAGES.aboutHero}
                alt="Precision plumbing fixtures"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </section>

        {/* Quality Over Shortcuts */}
        {/* Mobile: image-as-background */}
        <section className="md:hidden relative min-h-[420px] flex items-end">
          <Image
            src={IMAGES.aboutTools}
            alt="Professional plumbing tools and materials"
            fill
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/70 to-on-surface/45" />
          <div className="relative z-10 px-6 py-12">
            <h2 className="text-3xl font-bold tracking-tight font-headline text-white mb-6">
              Quality Over Shortcuts
            </h2>
            <p className="text-white/80 leading-relaxed text-base font-body">
              We&apos;d rather take the time to fix something properly than
              rush through and have you calling us back next month. Every
              connection, every seal, and every fitting is done to last.
              That&apos;s not a sales pitch — it&apos;s just how we work.
            </p>
          </div>
        </section>

        {/* Desktop: side-by-side */}
        <section className="hidden md:block bg-surface-container-low py-40">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <h2 className="text-3xl font-bold tracking-tight font-headline">
                  Quality Over Shortcuts
                </h2>
                <p className="text-secondary leading-relaxed text-lg font-body">
                  We&apos;d rather take the time to fix something properly than
                  rush through and have you calling us back next month. Every
                  connection, every seal, and every fitting is done to last.
                  That&apos;s not a sales pitch — it&apos;s just how we work.
                </p>
              </div>
              <div className="aspect-square bg-surface-container-highest overflow-hidden relative">
                <Image
                  src={IMAGES.aboutTools}
                  alt="Professional plumbing tools and materials"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Licensed & Insured */}
        <section className="py-12 md:py-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-24 max-w-3xl mx-auto">
              <h2 className="text-[2.5rem] font-bold tracking-tight mb-6 font-headline">
                Licensed &amp; Insured
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-8" />
              <p className="text-secondary text-lg font-body">
                We&apos;re fully QBCC licensed, insured, and qualified as
                plumbers, drainers, and gas fitters. We keep our training up to
                date and our standards high.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {credentials.map((cred) => (
                <div
                  key={cred.title}
                  className="group p-10 border-l-2 border-transparent hover:border-primary hover:bg-surface-container-low transition-all duration-500"
                >
                  <cred.icon
                    size={36}
                    strokeWidth={1}
                    className="text-primary mb-8 group-hover:scale-110 transition-transform block"
                  />
                  <h3 className="text-xl font-bold mb-4 font-headline">
                    {cred.title}
                  </h3>
                  <p className="text-secondary text-base leading-relaxed font-body">
                    {cred.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-Width Image Section */}
        <section className="h-[700px] relative overflow-hidden group">
          <Image
            src={IMAGES.aboutFullWidth}
            alt="Clean architectural detail"
            fill
            className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-on-surface/30 flex items-center justify-center p-8">
            <div className="bg-surface/95 backdrop-blur-xl p-16 max-w-2xl text-center">
              <h2 className="text-3xl font-bold mb-8 font-headline tracking-tight">
                Built for Brisbane
              </h2>
              <div className="h-0.5 w-12 bg-primary mx-auto mb-8" />
              <p className="text-secondary italic text-lg leading-relaxed font-body">
                Whether it&apos;s a straightforward tap repair or a complete new
                build, we bring the same level of care to every job. Brisbane
                homeowners and businesses trust us because we deliver — and
                we&apos;ve got the reviews to prove it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-48 bg-surface">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-[3rem] md:text-[4rem] font-bold tracking-tight mb-10 leading-[1.1] font-headline">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-secondary mb-16 font-body leading-relaxed">
              Whether it&apos;s a simple repair or a major renovation, give us a
              call and let&apos;s chat about what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="/#contact"
                className="bronze-gradient text-on-primary px-10 py-5 rounded-sm font-bold tracking-tight transition-all duration-300 hover:brightness-110 hover:scale-[1.03] text-lg font-headline"
              >
                Get a Quote
              </Link>
              <Link
                href={BUSINESS.phoneTel}
                className="text-primary px-10 py-5 font-bold tracking-tight border-b-2 border-transparent hover:border-primary hover:bg-on-surface/5 transition-all duration-300 text-lg font-headline"
              >
                Call {BUSINESS.phone}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
