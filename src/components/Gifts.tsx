"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";
import { FloatingDecoration } from "./ui/FloatingDecoration";

export function Gifts() {
  return (
    <section className="relative py-12 md:py-16 px-6 bg-transparent flex flex-col items-center overflow-hidden w-full">
 
      {/* Ambient Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#fbeede]/5 rounded-full blur-[100px] pointer-events-none z-0" />




      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center">

        <AnimatedSection once className="text-center w-full">
          <SectionHeader
            title="El Mejor Regalo"
            subtitle="SUGERENCIA"
            titleClassName="font-pinyon text-5xl md:text-6xl lg:text-7xl text-[#FAF4EA]"
            subtitleClassName="text-[#FAF4EA]/80 tracking-[0.4em] font-sans font-medium text-xs mb-4"
            className="mb-6"
          />

          {/* Sleek Minimalist Horizontal Capsule Card */}
          <div className="card-glass relative w-full max-w-[340px] sm:max-w-[380px] mx-auto p-4 rounded-2xl flex items-center justify-between gap-4 overflow-hidden border border-[#fbeede]/30 shadow-lg text-left">
            {/* Elegant Top Border line inside card */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-[#fbeede] to-transparent z-10" />

            {/* Left: Stamp card container with inez_carta.png */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-white/5 rounded-xl border border-[#fbeede]/15 flex items-center justify-center overflow-hidden z-10">
              <div className="absolute inset-1.5 rounded-full bg-[#fbeede]/5 scale-90" />
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-12 h-12 sm:w-14 sm:h-14 z-10"
              >
                <Image
                  src="/images/decorativas_v2/inez_carta.png"
                  alt="Sobre"
                  fill
                  sizes="56px"
                  className="object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
                  priority
                />
              </motion.div>
            </div>

            {/* Right: Clean typography */}
            <div className="flex flex-col justify-center flex-1 z-10">
              <span className="font-sans text-[8px] sm:text-[9px] text-[#fbeede]/60 uppercase tracking-[0.25em] font-bold mb-0.5">
                Regalos
              </span>
              <h4 className="font-serif text-sm sm:text-base text-[#FAF4EA] font-extrabold uppercase tracking-widest mb-1.5">
                Lluvia de Sobres
              </h4>
              <p className="font-sans text-[9.5px] sm:text-[10px] leading-relaxed text-[#FAF4EA]/85 font-light tracking-wide max-w-[190px] sm:max-w-[210px]">
                Compartir este día contigo será el mejor regalo. Cualquier muestra de afecto será recibida con gratitud.              </p>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
