import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2, Waves, Factory } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { IMAGES } from "@/data/images";

export const metadata: Metadata = {
  title:
    "Plumber Brisbane, Logan, Moreton Bay & Redlands | Brisbane Plumbing Co.",
  description:
    "Servicing all of South East QLD — Brisbane CBD, Northside, Southside, Logan, Moreton Bay, and Redlands. Local plumber who knows your area. QBCC licensed.",
  openGraph: {
    title: "Service Areas | Brisbane Plumbing Co.",
    description:
      "Servicing all of South East QLD — Brisbane CBD, Northside, Southside, Logan, Moreton Bay, and Redlands.",
  },
};

const regions = [
  {
    name: "Brisbane",
    icon: Building2,
    areas: [
      "Inner City & CBD",
      "Paddington & West End",
      "New Farm & Teneriffe",
      "Southside suburbs",
    ],
    primary: true,
  },
  {
    name: "Moreton Bay",
    icon: Waves,
    areas: [
      "Redcliffe Peninsula",
      "North Lakes & Mango Hill",
      "Pine Rivers & Strathpine",
    ],
    primary: false,
  },
  {
    name: "Logan & Redlands",
    icon: Factory,
    areas: [
      "Logan Central & Springwood",
      "Underwood & Sunnybank",
      "Capalaba & Cleveland",
    ],
    primary: false,
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 mb-24 lg:mb-32">
          <div className="relative">
            {/* Decorative number — background watermark */}
            <span className="absolute -top-8 right-0 text-[12rem] font-headline font-extrabold text-on-surface/[0.06] leading-none select-none z-0 hidden lg:block pointer-events-none">
              01
            </span>
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-label tracking-[0.2em] text-primary uppercase mb-6 block font-bold">
                WHERE WE WORK
              </span>
              <h1 className="font-headline text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-on-surface mb-8">
                Servicing All of South East Queensland.
              </h1>
              <p className="text-lg text-secondary leading-relaxed max-w-xl font-body">
                From Brisbane&apos;s inner suburbs to Logan, Moreton Bay, and
                the Redlands — we&apos;re local, we know the area, and
                we&apos;re ready to help.
              </p>
            </div>
          </div>
        </section>

        {/* Region Cards */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 md:mb-24">
          <div className="relative bg-surface-container-low p-6 md:p-12 lg:p-24 overflow-hidden min-h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 pointer-events-none opacity-20 grayscale contrast-110 hover:grayscale-0 hover:opacity-30 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226364.67803943682!2d152.85!3d-27.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brisbane service area map"
              />
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className={`bg-surface-container-lowest p-8 border-l-2 ${
                    region.primary
                      ? "border-primary"
                      : "border-outline-variant hover:border-primary"
                  } transition-all cursor-default`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-headline text-xl font-bold">
                      {region.name}
                    </h3>
                    <region.icon
                      size={24}
                      strokeWidth={1}
                      className={
                        region.primary ? "text-primary" : "text-secondary"
                      }
                    />
                  </div>
                  <ul className="space-y-3 text-sm text-secondary font-body">
                    {region.areas.map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <span
                          className={`w-1 h-1 rounded-sm ${
                            region.primary
                              ? "bg-primary"
                              : "bg-outline-variant"
                          }`}
                        />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Commitment Banner */}
              <div className="bg-primary p-8 flex flex-col justify-between text-on-primary md:col-span-2 lg:col-span-3">
                <div>
                  <span className="text-[0.65rem] font-label tracking-widest uppercase opacity-70 mb-2 block font-body">
                    OUR COMMITMENT
                  </span>
                  <h4 className="font-headline text-2xl font-bold leading-tight mb-4">
                    We Show Up When We Say We Will
                  </h4>
                  <p className="text-sm opacity-90 leading-relaxed max-w-3xl font-body">
                    Our jobs are planned properly from the start — no shortcuts,
                    no surprises. Every job is carried out by a licensed plumber
                    who takes the time to do it right.
                  </p>
                </div>
                <div className="flex gap-4 mt-8">
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-sm">
                    <div className="w-2 h-2 rounded-sm bg-green-400" />
                    <span className="text-[10px] font-label tracking-wider uppercase font-body">
                      Workmanship Guaranteed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Local Matters */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <Image
                src={IMAGES.serviceAreasIndustrialPipes}
                alt="Industrial pipes and fittings"
                width={600}
                height={750}
                className="w-full max-h-[300px] lg:max-h-none aspect-auto lg:aspect-[4/5] object-cover grayscale brightness-90 contrast-110"
              />
              <div className="absolute -bottom-8 -right-8 bg-surface-container p-12 hidden md:block">
                <span className="text-primary text-5xl font-headline font-extrabold">
                  24h
                </span>
                <p className="text-xs font-label tracking-widest text-secondary mt-2 font-body">
                  RESPONSE TIME
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs font-label tracking-[0.2em] text-primary uppercase mb-6 block font-bold">
              LOCAL EXPERTISE
            </span>
            <h2 className="font-headline text-[2.5rem] font-bold leading-tight mb-8">
              Why Local Knowledge Matters
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="text-outline-variant font-headline text-2xl font-bold opacity-30">
                  01
                </span>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-3">
                    We Know Brisbane&apos;s Plumbing
                  </h4>
                  <p className="text-secondary leading-relaxed font-body">
                    Brisbane&apos;s mix of older Queenslanders, modern builds,
                    and subtropical conditions means every home is different.
                    We&apos;ve worked on thousands of Brisbane properties and
                    understand the common issues.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-outline-variant font-headline text-2xl font-bold opacity-30">
                  02
                </span>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-3">
                    Council Compliant
                  </h4>
                  <p className="text-secondary leading-relaxed font-body">
                    Different councils have different rules. We make sure all our
                    work meets the specific requirements for your area — whether
                    that&apos;s Brisbane City, Logan, or Moreton Bay.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-outline-variant font-headline text-2xl font-bold opacity-30">
                  03
                </span>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-3">
                    Right Materials for Your Area
                  </h4>
                  <p className="text-secondary leading-relaxed font-body">
                    Water quality and soil conditions vary across Brisbane. We
                    recommend materials and systems that are suited to your
                    specific location for longer-lasting results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
