"use client";

import React from "react";
import { SparkleField } from "./ui/SparkleField";
import { motion } from "framer-motion";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { FloatingDecoration } from "./ui/FloatingDecoration";
import Image from "next/image";

export function DressCode() {
  return (
    <div className="relative w-full bg-transparent overflow-hidden">
      <section className="relative py-12 md:py-16 px-4 md:px-10 flex flex-col items-center overflow-hidden w-full">

        {/* Ambient Glow */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-[radial-gradient(circle_at_center,rgba(251, 238, 222,0.06)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none z-0" />

        {/* Decorative Pearl Strings on the sides */}
        <div className="absolute left-[-2%] top-[0%] w-58 h-[270px] md:w-44 md:h-[266px] z-0 pointer-events-none opacity-80">
          <Image
            src="/images/decorativas_v2/perlas.png"
            alt="Perlas"
            fill
            sizes="(max-width: 768px) 112px, 176px"
            className="object-contain object-left"
          />
        </div>
  
        <SparkleField mobileCount={4} desktopCount={12} />

        <div className="relative z-10 max-w-5xl text-center w-full flex flex-col items-center pt-1">
          <SectionHeader
            title={siteConfig.dressCode.mainTitle}
            subtitle={siteConfig.dressCode.topLabel}
            titleClassName="font-pinyon text-5xl md:text-6xl text-[#FAF4EA]"
            subtitleClassName="text-[#FAF4EA]/80 tracking-[0.5em] font-sans font-bold text-[10px] md:text-xs mb-2"
            className="mb-0"
          />

          {/* Card: Dress Code (All Black & No Red) */}
          <div className="flex flex-col items-center justify-center text-center pt-[20%] pb-[22%] px-[5%] md:px-[6%] relative overflow-hidden w-full max-w-[540px] md:max-w-[660px] mx-auto aspect-square mt-[-50px] md:mt-[-95px]">
            {/* Decorative Frame Background */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
              <Image
                src="/images/decorativas_v2/cuadrado_decorativo.png"
                alt="Marco Decorativo"
                fill
                sizes="(max-width: 768px) 540px, 660px"
                className="object-fill opacity-100"
                priority
              />
            </div>

            {/* Central Content Container */}
            <div className="flex flex-col items-center justify-center relative z-10 gap-1 md:gap-1.5 w-full">
              <span className="font-sans text-[9px] md:text-[11px] text-neutral-800/60 uppercase tracking-[0.25em] font-bold">
                CÓDIGO DE VESTIMENTA
              </span>
              
              {/* Visual Circle Representation */}
              <div className="flex items-center justify-center gap-4 my-0.5">
                {/* Black Circle (All Black) */}
                <div className="relative w-[28px] h-[28px] rounded-full bg-neutral-950 border-[1.5px] border-black flex items-center justify-center shadow-md">
                  <div className="w-[16px] h-[16px] rounded-full bg-neutral-900 border border-neutral-800" />
                </div>
                <div className="w-px h-5 bg-[#fbeede]/35" />
                {/* Crossed Red Circle */}
                <div className="relative w-[28px] h-[28px] rounded-full bg-white border-[1.5px] border-red-600 flex items-center justify-center shadow-md">
                  <div className="absolute w-[20px] h-[2.5px] bg-red-600 rotate-45 z-20 shadow-[0_0_0_1.5px_#fff]" />
                  <div className="w-[16px] h-[16px] rounded-full bg-red-600 border border-red-700 z-10" />
                </div>
              </div>

              <h4 className="font-serif text-xl md:text-2xl text-neutral-950 font-extrabold uppercase tracking-[0.12em] leading-none">
                {siteConfig.dressCode.type}
              </h4>
              
              <p className="font-sans text-[9px] md:text-[9px] text-neutral-800 leading-normal tracking-wide max-w-[80%] md:max-w-[82%] font-normal">
                Agradecemos tu presencia vistiendo totalmente de negro para mantener la elegancia de la noche.
              </p>

              {/* Warning tag */}
              <div className="w-full max-w-[150px] md:max-w-[160px] mt-1 py-1 px-2 border border-red-700 bg-red-60 text-red-700 rounded-full text-[7.5px] md:text-[8px] uppercase tracking-[0.15em] font-black shadow-sm">
                Prohibido ir de rojo
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
