import Image from "next/image";
import { featuredServices } from "@/data/services";
import { IMAGES } from "@/data/images";

const featuredImages = [
  {
    src: IMAGES.featuredDrains,
    alt: "Linear black drain installation in matte grey stone tiles",
  },
  {
    src: IMAGES.featuredHotWater,
    alt: "Modern copper water heating unit with polished pipes and gauges",
  },
  {
    src: IMAGES.featuredBathroom,
    alt: "Luxury minimalist bathroom with brushed bronze faucet and travertine sink",
  },
];

export default function FeaturedServices() {
  return (
    <div>
      {featuredServices.map((service, idx) => {
        const num = String(idx + 1).padStart(2, "0");
        const imageLeft = idx === 1;

        return (
          <section key={num} className="mb-16 md:mb-48 overflow-hidden">
            {/* === MOBILE: image-as-background === */}
            <div className="md:hidden relative min-h-[480px] flex items-end">
              <Image
                src={featuredImages[idx].src}
                alt={featuredImages[idx].alt}
                fill
                className="object-cover brightness-[0.4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c19]/95 via-[#1b1c19]/80 to-[#1b1c19]/60" />
              <span className="absolute top-4 right-4 text-[8rem] font-headline font-extrabold text-white/10 select-none leading-none pointer-events-none">
                {num}
              </span>
              <div className="relative z-10 px-6 py-12">
                <span className="font-label text-primary font-bold tracking-[0.15em] uppercase text-xs mb-3 block">
                  {service.label}
                </span>
                <h2 className="text-3xl font-headline font-bold mb-4 leading-tight text-white">
                  {service.title}
                </h2>
                <p className="font-body text-white/80 text-base mb-6 leading-relaxed">
                  {service.body}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.chips.map((chip) => (
                    <span
                      key={chip}
                      className="bg-white/10 backdrop-blur-sm px-3 py-1.5 text-[0.6rem] uppercase tracking-wider font-bold text-white/90"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* === DESKTOP: side-by-side === */}
            <div className="hidden md:block max-w-7xl mx-auto px-8 relative">
              <span className="absolute -top-8 right-0 text-[12rem] font-headline font-extrabold text-on-surface/[0.06] select-none leading-none z-0 pointer-events-none">
                {num}
              </span>
              <div className="grid grid-cols-2 gap-16 items-center relative z-10">
                <div className={imageLeft ? "order-2" : "order-1"}>
                  <span className="font-label text-primary font-bold tracking-[0.15em] uppercase text-xs mb-4 block">
                    {service.label}
                  </span>
                  <h2 className="text-4xl font-headline font-bold mb-8 leading-tight text-on-surface">
                    {service.title}
                  </h2>
                  <p className="font-body text-secondary text-lg mb-8 leading-relaxed">
                    {service.body}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {service.chips.map((chip) => (
                      <span
                        key={chip}
                        className="bg-surface-container-low px-4 py-2 text-[0.65rem] uppercase tracking-wider font-bold text-secondary"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={imageLeft ? "order-1" : "order-2"}>
                  <div className="aspect-[16/10] editorial-image-mask overflow-hidden relative">
                    <Image
                      src={featuredImages[idx].src}
                      alt={featuredImages[idx].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
