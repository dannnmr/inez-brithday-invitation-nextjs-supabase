"use client";

import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";
import { FloatingDecoration } from "./ui/FloatingDecoration";

export function Location() {
  return (
    <section className="relative py-12 bg-transparent w-full flex flex-col items-center overflow-hidden">

      {/* Safari Theme Corner Ornaments */}
      <FloatingDecoration
        src="/images/decorativas_v2/leopardo_acostado2.png"
        alt="Hojas Selva Izquierda"
        className="bottom-[-5%] left-0 w-full h-80 md:h-72 opacity-50"
        imgClassName="object-cover object-bottom"
        animationStyle="float"
      />
      <FloatingDecoration
        src="/images/decorativas_v2/leopardo_mirando_alfrente.png"
        alt="Leopardo"
        className="top-[10%] -right-18 md:right-[5%] w-60 h-60 md:w-80 md:h-80 opacity-80"
        animationStyle="float"
      />

      <div className="relative z-10 max-w-6xl w-full px-5 flex flex-col items-center">
        <AnimatedSection
          once
          delay={0.2}
          className="w-full flex flex-col items-center"
        >
          {/* Verde Manzana Detail card */}
          <div className="flex flex-col items-center text-center px-4 w-full max-w-3xl mb-4">
            <SectionHeader
              title={
                <span style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.4)" }}>
                  {siteConfig.location.venueName}
                </span>
              }
              subtitle={
                <span style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}>
                  {siteConfig.location.topLabel}
                </span>
              }
              className="mb-4 mt-4 overflow-visible"
              titleClassName="leading-normal py-1 text-[#FAF4EA]"
              subtitleClassName="text-[#FAF4EA]/80 font-bold mb-1"
            />

            <p
              className="font-sans text-sm md:text-base tracking-[0.2em] text-[#FAF4EA]/80 uppercase leading-relaxed max-w-md"
              style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}
            >
              {siteConfig.location.address}
            </p>

            <div className="w-16 h-px bg-[#fbeede]/30 mt-6" />
          </div>

          {/* Interactive Button */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 w-full max-w-2xl justify-center mb-6 mt-2">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span
                className="font-sans text-lg md:text-xl font-bold uppercase tracking-widest text-[#FAF4EA]"
                style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)" }}
              >
                {siteConfig.location.buttonText}
              </span>
            </div>

            <a
              href={siteConfig.location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-30 h-30 md:w-32 md:h-32 group cursor-pointer shrink-0"
            >
              <div className="absolute inset-0 rounded-full border border-[#fbeede]/30 scale-90 group-hover:scale-100 transition-transform duration-700" />

              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{
                  willChange: "transform",
                  filter: "drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.4))"
                }}
                className="absolute inset-0 w-full h-full text-[#FAF4EA]/80 opacity-80 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 100 100"
              >
                <path
                  id="textPathOut"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="transparent"
                />
                <text
                  fontSize="8.5"
                  letterSpacing="2.5"
                  className="font-sans uppercase font-bold tracking-widest fill-current"
                >
                  <textPath href="#textPathOut" startOffset="0%">
                    MAPA • RUTA AL EVENTO • GPS UBICACIÓN •
                  </textPath>
                </text>
              </motion.svg>

              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FAF4EA] shadow-md border border-[#fbeede]/20 flex items-center justify-center group-hover:bg-[#fbeede] transition-colors duration-500 relative z-10">
                <Navigation className="w-5 h-5 md:w-6 md:h-6 text-[#380104] group-hover:-rotate-45 transition-all duration-500" />
              </div>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
