import Link from "next/link";
import { BUSINESS } from "@/data/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-2">
          <span className="text-lg font-bold text-on-surface font-headline block mb-4">
            {BUSINESS.name}
          </span>
          <p className="font-body text-sm leading-relaxed text-secondary max-w-sm mb-6">
            Quality plumbing, gas fitting, and drainage services for Brisbane
            homes and businesses.
          </p>
          <div className="text-[10px] text-secondary/60 font-label font-bold tracking-[0.2em] uppercase">
            QBCC LIC: {BUSINESS.qbccLicence} | ABN: {BUSINESS.abn}
          </div>
        </div>

        <div>
          <h4 className="font-headline font-semibold text-on-surface mb-6 uppercase tracking-widest text-xs">
            Explore
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/services"
                className="text-secondary hover:text-primary transition-colors duration-300 font-body text-sm"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/service-areas"
                className="text-secondary hover:text-primary transition-colors duration-300 font-body text-sm"
              >
                Service Areas
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-secondary hover:text-primary transition-colors duration-300 font-body text-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-secondary hover:text-primary transition-colors duration-300 font-body text-sm"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-semibold text-on-surface mb-6 uppercase tracking-widest text-xs">
            Contact
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href={BUSINESS.phoneTel}
                className="text-secondary hover:text-primary transition-colors duration-300 font-body text-sm"
              >
                {BUSINESS.phone}
              </Link>
            </li>
            <li>
              <Link
                href={`mailto:${BUSINESS.email}`}
                className="text-secondary hover:text-primary transition-colors duration-300 font-body text-sm"
              >
                {BUSINESS.email}
              </Link>
            </li>
            <li>
              <span className="text-secondary font-body text-sm">
                {BUSINESS.location}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-6 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-body text-xs text-secondary/60">
          &copy; 2026 {BUSINESS.name} &mdash; QBCC Licence {BUSINESS.qbccLicence}.
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
