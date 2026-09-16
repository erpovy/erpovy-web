"use client";

import { SECTORS_DATA } from "@/content/sectorsData";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import {
  Factory,
  Store,
  Truck,
  Wrench,
  Utensils,
  Tractor,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const sectorIconMap: Record<string, LucideIcon> = {
  uretim: Factory,
  ticaret: Store,
  lojistik: Truck,
  otomotiv: Wrench,
  restoran: Utensils,
  tarim: Tractor,
};

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>["className"];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectorRows() {
  const handleSelectSector = (sectorTitle: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("erpovy:select-sector", {
          detail: { sector: sectorTitle },
        })
      );
      const demoEl = document.getElementById("demo");
      if (demoEl) {
        demoEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="sektorler" className="py-20 lg:py-28 bg-[#e2f1f9] text-[#070d1c] border-b border-[#1992d1]/15">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer className="max-w-3xl mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#1992d1] uppercase mb-3 inline-block">
            Sektörel Yaklaşım
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#070d1c] mb-4">
            Sizin sektörünüz. Sizin öncelikleriniz.
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Önce çözmek istediğiniz işi konuşalım. Sonra ilgili modülleri birlikte inceleyelim.
          </p>
        </AnimatedContainer>

        {/* Dashed grid container matching user's component */}
        <AnimatedContainer
          delay={0.3}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-[#1992d1]/30 bg-white/60 backdrop-blur-xs rounded-2xl overflow-hidden sm:grid-cols-2 md:grid-cols-3 shadow-sm"
        >
          {SECTORS_DATA.map((sector) => {
            const IconComponent = sectorIconMap[sector.id] || Factory;
            return (
              <div
                key={sector.id}
                onClick={() => {
                  if (!sector.isComingSoon) {
                    handleSelectSector(sector.title);
                  }
                }}
                className={`relative flex flex-col justify-between group ${
                  sector.isComingSoon ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <FeatureCard
                  feature={{
                    title: sector.title,
                    icon: IconComponent,
                    description: sector.description,
                  }}
                  className={`h-full transition-all duration-300 ${
                    sector.isComingSoon
                      ? "bg-slate-900/[0.02] hover:bg-slate-900/[0.04]"
                      : "bg-transparent hover:bg-white/90"
                  }`}
                />

                {sector.isComingSoon ? (
                  <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-100/90 border border-sky-200 text-xs font-bold text-[#1992d1] shadow-xs">
                    <span className="material-symbols-outlined text-xs">hourglass_top</span>
                    <span>ÇOK YAKINDA</span>
                  </div>
                ) : (
                  <div className="absolute top-6 right-6 p-1.5 rounded-full text-slate-400 group-hover:text-[#1992d1] group-hover:bg-[#1992d1]/10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                )}
              </div>
            );
          })}
        </AnimatedContainer>
      </div>
    </section>
  );
}
