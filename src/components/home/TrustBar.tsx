import {
  ShieldCheck,
  FileCheck2,
  Clock,
  Hammer,
  Star,
  Users,
} from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "QBCC Licensed" },
  { icon: FileCheck2, label: "Fully Insured" },
  { icon: Clock, label: "Same-Day Service" },
  { icon: Hammer, label: "Workmanship Guaranteed" },
  { icon: Star, label: "4.9\u2605 Google Rating" },
  { icon: Users, label: "Family Owned" },
];

export default function TrustBar() {
  return (
    <section className="bg-surface-container-low py-16 border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-80">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-2"
            >
              <item.icon size={28} strokeWidth={1} className="text-primary" />
              <span className="text-[10px] font-label font-bold tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
