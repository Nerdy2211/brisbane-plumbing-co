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
          <section key={num} className="mb-48 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 relative">
              {/* Decorative number — background watermark */}
              <span className="absolute -top-8 right-0 text-[12rem] font-headline font-extrabold text-on-surface/[0.06] select-none leading-none z-0 hidden md:block pointer-events-none">
                {num}
              </span>

              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10 ${
                  imageLeft ? "" : ""
                }`}
              >
                {/* Text — always first on odd, second on even */}
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

                {/* Image */}
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
