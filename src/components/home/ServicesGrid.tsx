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
} from "lucide-react";
import { services } from "@/data/services";

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

export default function ServicesGrid() {
  return (
    <section className="py-32 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-label font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
              WHAT WE DO
            </span>
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-6 tracking-tight">
              Plumbing Services Across Brisbane
            </h2>
            <p className="text-lg text-secondary font-body leading-relaxed">
              A comprehensive suite of plumbing services delivered with
              technical precision and architectural consideration.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-[2px] w-32 bg-primary mb-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group bg-surface-container-low p-8 h-[280px] flex flex-col gap-4 hover:bg-surface-container-highest transition-colors"
              >
                <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center mb-1">
                  {Icon && (
                    <Icon size={24} strokeWidth={1.5} className="text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed font-body">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
