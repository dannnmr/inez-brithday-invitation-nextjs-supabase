"use client";

import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";
import { FloatingDecoration } from "./ui/FloatingDecoration";
import Image from "next/image";

export function Location() {
  return (
    <div className="relative w-full bg-[#fbeede] mt-[60vw] md:mt-[280px] mb-[48vw] md:mb-[340px]">
      {/* Top curve bulging upwards into Music */}
      <div className="absolute top-0 left-0 right-0 h-[50vw] md:h-[280px] bg-[#fbeede] rounded-t-[70%_100%] pointer-events-none -translate-y-full z-0" />

      {/* Bottom curve bulging downwards into Passes */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vw] md:h-[280px] bg-[#fbeede] rounded-b-[70%_100%] pointer-events-none translate-y-full z-0" />

      {/* Background Ornament: Montón de Copas spanning the entire component height, overlaying the curves */}
      <div className="absolute top-[-50vw] md:top-[-280px] bottom-[-50vw] md:bottom-[-280px] left-0 right-0 z-5 opacity-18 pointer-events-none">
        <Image
          src="/images/decorativas_v2/monton_copas.png"
          alt="Montón de Copas"
          fill
          sizes="100vw"
          className="object-cover object-bottom mix-blend-multiply"
          priority
        />
      </div>

      <section className="relative z-10 pt-8 pb-4 bg-transparent w-full flex flex-col items-center">
        <div className="relative z-10 max-w-6xl w-full px-5 flex flex-col items-center">
        <AnimatedSection
          once
          delay={0.2}
          className="w-full flex flex-col items-center mt-[-28vw] md:mt-[-140px] mb-[-42vw] md:mb-[-230px]"
        >
          {/* Verde Manzana Detail card */}
          <div className="flex flex-col items-center text-center px-4 w-full max-w-3xl mb-2">
            <SectionHeader
              title={siteConfig.location.venueName}
              subtitle={siteConfig.location.topLabel}
              className="mb-2 mt-2 overflow-visible"
              titleClassName="leading-normal py-1 text-[#3f020a]"
              subtitleClassName="text-[#3f020a]/80 font-bold mb-1"
            />

            <p className="font-sans text-sm md:text-base tracking-[0.2em] text-[#3f020a]/80 uppercase leading-relaxed max-w-md">
              {siteConfig.location.address}
            </p>

            <div className="w-16 h-px bg-[#3f020a]/20 mt-4" />
          </div>

          {/* Interactive Button */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full max-w-2xl justify-center mb-2 mt-1">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-sans text-lg md:text-xl font-bold uppercase tracking-widest text-[#3f020a]">
                {siteConfig.location.buttonText}
              </span>
            </div>

            <a
              href={siteConfig.location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-30 h-30 md:w-32 md:h-32 group cursor-pointer shrink-0"
            >
              <div className="absolute inset-0 rounded-full border border-[#3f020a]/20 scale-90 group-hover:scale-100 transition-transform duration-700" />

              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{
                  willChange: "transform",
                }}
                className="absolute inset-0 w-full h-full text-[#3f020a]/80 opacity-80 group-hover:opacity-100 transition-opacity"
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

              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#3f020a] shadow-md border border-[#3f020a]/20 flex items-center justify-center group-hover:bg-[#3f020a]/90 transition-colors duration-500 relative z-10">
                <Navigation className="w-5 h-5 md:w-6 md:h-6 text-[#fbeede] group-hover:-rotate-45 transition-all duration-500" />
              </div>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
  );
}
