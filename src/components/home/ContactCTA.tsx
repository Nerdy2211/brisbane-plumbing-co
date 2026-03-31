import Link from "next/link";
import { BUSINESS } from "@/data/constants";
import TextReveal from "@/components/animations/TextReveal";

export default function ContactCTA() {
  return (
    <section className="py-12 md:py-32 bg-on-surface text-surface" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <span className="text-xs font-label font-bold tracking-[0.2em] uppercase text-primary mb-6 block">
              GET IN TOUCH
            </span>
            <TextReveal
              as="h2"
              className="text-3xl md:text-4xl font-headline font-bold mb-8"
            >
              {"Let's Talk About Your Plumbing."}
            </TextReveal>
            <p className="text-surface/60 mb-12 text-lg font-body leading-relaxed">
              Whether it&apos;s an urgent repair or a planned renovation, give
              us a call or fill in the form and we&apos;ll get back to you
              quickly.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div>
                  <h4 className="font-headline font-bold uppercase tracking-widest text-xs mb-1 text-surface/60">
                    Phone
                  </h4>
                  <Link
                    href={BUSINESS.phoneTel}
                    className="text-xl font-headline font-bold hover:text-primary transition-colors"
                  >
                    {BUSINESS.phone}
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <h4 className="font-headline font-bold uppercase tracking-widest text-xs mb-1 text-surface/60">
                    Email
                  </h4>
                  <Link
                    href={`mailto:${BUSINESS.email}`}
                    className="text-xl font-headline font-bold hover:text-primary transition-colors"
                  >
                    {BUSINESS.email}
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="font-headline font-bold uppercase tracking-widest text-xs mb-1 text-surface/60">
                  Hours
                </h4>
                <p className="text-surface/80 font-body">
                  Monday — Friday: 7:00am — 5:00pm
                </p>
                <p className="text-surface/80 font-body">
                  Saturday: 9:00am — 12:00pm
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface p-12 text-on-surface rounded-sm">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-label font-bold uppercase tracking-widest opacity-60">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border-0 border-b border-outline-variant bg-transparent py-4 focus:ring-0 focus:border-primary transition-colors placeholder:text-secondary/30 font-body"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-label font-bold uppercase tracking-widest opacity-60">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="0400 000 000"
                    className="w-full border-0 border-b border-outline-variant bg-transparent py-4 focus:ring-0 focus:border-primary transition-colors placeholder:text-secondary/30 font-body"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-label font-bold uppercase tracking-widest opacity-60">
                  Service Address
                </label>
                <input
                  type="text"
                  placeholder="Street name, Suburb"
                  className="w-full border-0 border-b border-outline-variant bg-transparent py-4 focus:ring-0 focus:border-primary transition-colors placeholder:text-secondary/30 font-body"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-label font-bold uppercase tracking-widest opacity-60">
                  Service Needed
                </label>
                <select className="w-full border-0 border-b border-outline-variant bg-transparent py-4 focus:ring-0 focus:border-primary transition-colors font-body text-sm">
                  <option value="">Select a service...</option>
                  <option>Blocked Drains</option>
                  <option>Hot Water Systems</option>
                  <option>Leak Detection</option>
                  <option>Gas Fitting</option>
                  <option>General Maintenance</option>
                  <option>Kitchen &amp; Bathroom</option>
                  <option>Stormwater &amp; Drainage</option>
                  <option>Commercial Plumbing</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-label font-bold uppercase tracking-widest opacity-60">
                  Details
                </label>
                <textarea
                  placeholder="Tell us about the problem or project..."
                  rows={4}
                  className="w-full border-0 border-b border-outline-variant bg-transparent py-4 focus:ring-0 focus:border-primary transition-colors placeholder:text-secondary/30 resize-none font-body"
                />
              </div>
              <button
                type="submit"
                className="w-full bronze-gradient text-white font-headline font-bold py-5 uppercase tracking-widest text-sm brightness-100 transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
