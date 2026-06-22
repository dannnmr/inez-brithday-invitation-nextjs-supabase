"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparkleField } from "./ui/SparkleField";
import Image from "next/image";
import { siteConfig } from "../config/invitation";

export function Hero() {
  return (
    <section className="relative min-h-svh w-full flex flex-col items-center justify-center overflow-hidden bg-background py-16 px-4">
      {/* Background Image - Only active on mobile */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none md:hidden">
        <Image
          src="/images/inez-hero.png"
          alt="Inez Lorine"
          fill
          sizes="100vw"
          className="object-cover object-top brightness-[0.98] contrast-[1.02]"
          priority
        />
        {/* Soft Vignette that fades to solid Guindo at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-[#380104] via-[#380104] via-25% to-[#380104]/0 z-10" />
        {/* Solid mask bar to eliminate any subpixel gaps at the edge */}
        <div className="absolute bottom-[-1px] left-0 right-0 h-[4px] bg-[#380104] z-20" />
      </div>

      {/* Decorative ambient background for desktop */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none hidden md:block bg-gradient-to-b from-[#250103] via-[#380104] to-[#250103]">
        {/* Soft radial gold spotlight in the center behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(251,238,222,0.04)_0%,transparent_70%)] rounded-full blur-3xl" />
      </div>
      {/* Elegant Hanging Pearls - Left side drape (fully visible height, responsive width 55vw) */}
      <div className="absolute top-0 left-0 w-[55vw] h-[68vw] max-w-[396px] max-h-[490px] z-10 pointer-events-none opacity-45">
        <Image
          src="/images/decorativas_v2/perlas_colgando2.png"
          alt="Perlas Colgando Izquierda"
          fill
          sizes="(max-width: 768px) 55vw, 396px"
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Elegant Hanging Pearls - Right side drape (fully visible height, responsive width 50vw) */}
      <div className="absolute top-0 right-0 w-[50vw] h-[62vw] max-w-[360px] max-h-[446px] z-10 pointer-events-none opacity-45 scale-x-[-1]">
        <Image
          src="/images/decorativas_v2/perlas_colgando2.png"
          alt="Perlas Colgando Derecha"
          fill
          sizes="(max-width: 768px) 50vw, 360px"
          className="object-cover object-top"
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
        
        {/* Shared layout container for overlapping name and portrait on desktop */}
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Centered Portrait Card for Desktop View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="hidden md:block relative w-[350px] lg:w-[400px] aspect-[3/4] mx-auto my-6 rounded-2xl overflow-hidden shadow-2xl border border-[#FAF4EA]/20 bg-[#2D0205] z-10"
          >
            {/* Double border gold foil effect */}
            <div className="absolute inset-1.5 border border-[#fbeede]/15 rounded-xl pointer-events-none z-20" />
            
            <Image
              src="/images/inez-hero.png"
              alt="Inez Lorine Retrato"
              fill
              sizes="(max-width: 1024px) 320px, 380px"
              className="object-cover object-center brightness-[0.98] contrast-[1.02]"
              priority
            />
            {/* Soft vignette at the bottom of the card */}
            <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-[#2D0205] to-[#2D0205]/0 pointer-events-none z-10" />
          </motion.div>

          {/* Cumpleañera Name (Elegant Graphic Image - Enlarged and Adjusted) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-full max-w-[270px] min-[380px]:max-w-[320px] md:max-w-[540px] lg:max-w-[620px] aspect-square mx-auto mt-[40px] mb-[-35px] md:absolute md:inset-0 md:m-auto md:w-[540px] lg:w-[620px] md:h-[540px] lg:h-[620px] filter drop-shadow-[0_4px_15px_rgba(0,0,0,0.85)] z-20 pointer-events-none"
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
        </div>

        {/* Welcome Phrase (inside glass card, text color in crema) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="liquid-glass-card w-full max-w-[90%] md:max-w-md px-4 py-3.5 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden mt-2 bg-[#380104]/3 backdrop-blur-[2px] border border-[#FAF4EA]/8"
        >
          <div className="absolute top-0 left-0 right-0 h-[38%] rounded-t-[20px] rounded-b-[10px] bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-transparent pointer-events-none z-10" />
          <p className="relative font-sans text-xs md:text-sm font-light italic text-center leading-relaxed text-[#FAF4EA] tracking-wide z-20">
            "{siteConfig.client.finalPhrase}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
