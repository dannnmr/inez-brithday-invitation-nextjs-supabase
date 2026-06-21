"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparkleField } from "./ui/SparkleField";
import Image from "next/image";
import { siteConfig } from "../config/invitation";

export function Hero() {
  return (
    <section className="relative min-h-svh w-full flex flex-col items-center justify-center overflow-hidden bg-background py-16 px-4">
      {/* Background Image covering the entire section - adjusted brightness for visibility */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/images/inez-hero.png"
          alt="Inez Lorine"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.98] contrast-[1.02]"
          priority
        />
        {/* Soft Vignette that fades to solid Guindo at the bottom for smooth page transition, keeping top/center clear */}
        <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-[#380104] via-[#380104]/30 via-35% to-transparent" />
      </div>

      {/* Elegant Hanging Pearls across the top edge - perfectly proportioned to avoid vertical cropping */}
      <div className="absolute top-0 left-0 right-0 mx-auto w-full max-w-[650px] aspect-[720/892] z-10 pointer-events-none opacity-45">
        <Image
          src="/images/decorativas_v2/perlas_colgando2.png"
          alt="Perlas Colgando"
          fill
          sizes="(max-width: 650px) 100vw, 650px"
          className="object-contain object-top"
          priority
        />
      </div>


      {/* Ambient Sparkles */}
      <SparkleField mobileCount={12} desktopCount={28} />

      {/* Happy Birthday Title (Absolute Positioned at the top to align with hanging pearls) */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-16 md:top-18 left-0 right-0 z-20 font-serif text-4xl min-[380px]:text-5xl md:text-5xl lg:text-6xl text-[#FAF4EA] tracking-[0.2em] uppercase leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] font-light text-center px-6"
      >
        Happy Birthday
      </motion.h2>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center justify-center text-center px-3">
        
        {/* Cumpleañera Name (Elegant Graphic Image - Enlarged and Adjusted) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full max-w-[320px] min-[380px]:max-w-[400px] md:max-w-[540px] lg:max-w-[620px] aspect-square mx-auto mt-[40px] mb-[-35px] md:mt-[60px] md:mb-[-70px] filter drop-shadow-[0_4px_15px_rgba(0,0,0,0.85)] z-10"
        >
          <Image
            src="/images/decorativas_v2/Inez_Lorine_texto.png"
            alt="Inez Lorine"
            fill
            sizes="(max-width: 768px) 400px, 580px"
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Welcome Phrase (inside glass card, text color in crema) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="liquid-glass-card w-full max-w-[90%] md:max-w-md px-4 py-3.5 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden mt-2 bg-[#380104]/50 backdrop-blur-md border border-[#FAF4EA]/15"
        >
          <div className="absolute top-0 left-0 right-0 h-[38%] rounded-t-[20px] rounded-b-[10px] bg-gradient-to-b from-[rgba(255,255,255,0.08)] to-transparent pointer-events-none z-10" />
          <p className="relative font-sans text-xs md:text-sm font-light italic text-center leading-relaxed text-[#FAF4EA] tracking-wide z-20">
            "{siteConfig.client.finalPhrase}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
