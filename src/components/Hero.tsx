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
          className="object-cover object-center brightness-[0.72] contrast-[1.02]"
          priority
        />
        {/* Soft Vignette that fades to solid Guindo at the bottom for smooth page transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#380104] via-transparent to-[#380104]/30" />
      </div>

      {/* Elegant Sparkles */}
      <SparkleField mobileCount={12} desktopCount={28} />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center justify-center text-center px-4">
        
        {/* Event Badge / Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-block bg-[#380104]/60 backdrop-blur-md border border-[#FAF4EA]/25 px-6 py-2 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
        >
          <span className="relative text-[#FAF4EA] tracking-[0.4em] font-sans font-bold text-[10px] md:text-xs uppercase">
            {siteConfig.client.eventType}
          </span>
        </motion.div>

        {/* Happy Birthday Title (Elegant Serif in Crema) */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif text-3xl min-[380px]:text-4xl md:text-6xl lg:text-7xl text-[#FAF4EA] tracking-[0.2em] uppercase leading-none mb-1 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] font-light"
        >
          Happy Birthday
        </motion.h2>

        {/* Cumpleañera Name (Elegant Curved Script in Crema) */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-script text-7xl min-[380px]:text-8xl md:text-9xl lg:text-[10rem] text-[#FAF4EA] leading-normal py-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] font-normal tracking-wide"
        >
          {siteConfig.client.name}
        </motion.h1>

        {/* Welcome Phrase (inside glass card, text color in crema) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="liquid-glass-card w-full max-w-[90%] md:max-w-md px-6 py-4.5 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden mt-2 bg-[#380104]/50 backdrop-blur-md border border-[#FAF4EA]/15"
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
