import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { IMAGES } from "@/data/images";

export default function ServiceAreaPreview() {
  return (
    <section className="bg-surface-container py-32" id="areas">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-xs font-label font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
            WHERE WE WORK
          </span>
          <h2 className="text-3xl font-headline font-bold mb-4 tracking-tight">
            Servicing All of South East Queensland
          </h2>
          <p className="text-secondary font-body max-w-xl mx-auto">
            We service all of Brisbane — from the inner city to the outer
            suburbs. If you&apos;re in South East QLD, we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { name: "Brisbane City", sub: "CBD & Inner Suburbs" },
              { name: "Northside", sub: "Chermside to North Lakes" },
              { name: "Southside", sub: "Sunnybank to Logan" },
              { name: "Western Suburbs", sub: "Indooroopilly to Ipswich" },
              { name: "Moreton Bay", sub: "Redcliffe to Caboolture" },
              { name: "Redlands", sub: "Cleveland to Victoria Pt" },
              { name: "Logan", sub: "Springwood to Beenleigh" },
            ].map((area) => (
              <div key={area.name} className="space-y-2">
                <h4 className="font-headline font-bold text-primary uppercase text-sm">
                  {area.name}
                </h4>
                <p className="text-xs text-secondary uppercase tracking-widest font-body">
                  {area.sub}
                </p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-4 aspect-square bg-surface-container-high relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              <Image
                src={IMAGES.serviceAreaMap}
                alt="Abstract map pattern"
                fill
                className="object-cover"
              />
            </div>
            <div className="z-10 text-center">
              <MapPin
                size={48}
                strokeWidth={1}
                className="text-primary mx-auto mb-4"
              />
              <Link
                href="/service-areas"
                className="font-headline font-bold uppercase tracking-[0.2em] text-sm text-on-surface hover:text-primary transition-colors"
              >
                View All Areas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
