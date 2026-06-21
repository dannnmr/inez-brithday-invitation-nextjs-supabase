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

      {/* Decorative Fountain in the background */}
      <div className="absolute bottom-[-5%] right-[-5%] w-40 h-[240px] md:w-60 md:h-[360px] z-0 pointer-events-none opacity-20">
        <Image
          src="/images/decorativas_v2/fuente.png"
          alt="Fuente de Agua"
          fill
          sizes="(max-width: 768px) 160px, 240px"
          className="object-contain object-right-bottom"
        />
      </div>

      {/* Floating Jungle Ornaments */}
      <FloatingDecoration
        src="/images/decorativas_v2/hojas.png"
        alt="Hojas Selva"
        className="top-[15%] -left-13 w-52 h-52 md:w-72 md:h-72 opacity-15 rotate-[-9deg] pointer-events-none z-0"
        animationStyle="float"
      />

      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center">

        <AnimatedSection once className="text-center w-full">
          <SectionHeader
            title="El Mejor Regalo"
            subtitle="SUGERENCIA"
            titleClassName="font-pinyon text-5xl md:text-6xl lg:text-7xl text-[#FAF4EA]"
            subtitleClassName="text-[#FAF4EA]/80 tracking-[0.4em] font-sans font-medium text-xs mb-4"
            className="mb-6"
          />

          {/* Centered Lluvia de Sobres Card */}
          <div className="flex flex-col items-center justify-center text-center card-glass p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden w-full max-w-xl mx-auto">
            {/* Elegant Gold Top Border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fbeede] to-transparent" />

            {/* Floating Envelope Icon */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-24 h-24 md:w-32 md:h-32 mb-6 cursor-pointer z-10"
            >
              <Image
                src="/images/decorativas_v2/lluvia_sobre2.png"
                alt="Lluvia de Sobres"
                fill
                sizes="(max-width: 768px) 96px, 128px"
                className="object-contain"
              />
            </motion.div>

            <h4 className="font-serif text-xl md:text-2xl text-[#FAF4EA] font-black uppercase tracking-widest mb-4">
              Lluvia de Sobres
            </h4>

            <p className="font-sans text-xs md:text-sm text-[#FAF4EA]/90 leading-relaxed tracking-wide text-center">
              Tu presencia es mi mayor regalo. Si deseas tener un detalle conmigo, contaremos con un buzón en el salón para lluvia de sobres.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
