import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { IMAGES } from "@/data/images";

const portraitImages: (string | null)[] = [
  IMAGES.testimonialPortrait1,
  IMAGES.testimonialPortrait2,
  null,
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-xs font-label font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="text-3xl font-headline font-bold tracking-tight">
            Trusted by Brisbane Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={t.name} className="border-t border-outline-variant pt-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>
              <p className="text-lg font-body italic text-on-surface mb-8 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-sm overflow-hidden flex items-center justify-center">
                  {portraitImages[idx] ? (
                    <Image
                      src={portraitImages[idx]}
                      alt={`Portrait of ${t.name}`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-headline font-bold text-primary text-lg">
                      {t.initial}
                    </span>
                  )}
                </div>
                <div>
                  <span className="block font-headline font-bold text-sm">
                    {t.name}
                  </span>
                  <span className="text-xs text-secondary uppercase tracking-widest font-body">
                    {t.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
