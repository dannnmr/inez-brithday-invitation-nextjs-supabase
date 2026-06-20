"use client";

import React from "react";
import { SparkleField } from "./ui/SparkleField";
import { motion } from "framer-motion";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { FloatingDecoration } from "./ui/FloatingDecoration";

export function DressCode() {
  return (
    <div className="relative w-full bg-transparent overflow-hidden">
      <section className="relative py-12 md:py-16 px-6 md:px-10 flex flex-col items-center overflow-hidden w-full">

        {/* Ambient Glow */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none z-0" />

        {/* Decorative jungle elements */}
        <FloatingDecoration
          src="/images/decorativas_v2/hojas.png"
          alt="Hojas Selva"
          className="top-[5%] left-[-5%] w-40 h-40 md:w-60 md:h-60 opacity-15 pointer-events-none z-0"
          animationStyle="float"
        />

        <SparkleField mobileCount={4} desktopCount={12} />

        <div className="relative z-10 max-w-4xl text-center w-full flex flex-col items-center pt-4">
          <SectionHeader
            title={siteConfig.dressCode.mainTitle}
            subtitle={siteConfig.dressCode.topLabel}
            titleClassName="font-pinyon text-5xl md:text-6xl text-[#FAF4EA]"
            subtitleClassName="text-[#FAF4EA]/80 tracking-[0.5em] font-sans font-bold text-[10px] md:text-xs mb-2"
            className="mb-4"
          />

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mt-2">
            
            {/* Card 1: Dress Code (All Black & No Red) */}
            <div className="flex flex-col items-center justify-between text-center card-glass p-6 md:p-8 rounded-3xl relative overflow-hidden">
              {/* Elegant Gold Top Border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              
              <div className="flex flex-col items-center w-full">
                <span className="font-sans text-[8px] md:text-[9px] text-[#FAF4EA]/60 uppercase tracking-[0.3em] font-bold mb-2">
                  CÓDIGO DE VESTIMENTA
                </span>
                
                {/* Visual Circle Representation */}
                <div className="flex items-center justify-center gap-5 my-4">
                  {/* Black Circle (All Black) */}
                  <div className="relative w-12 h-12 rounded-full bg-neutral-900 border-2 border-[#D4AF37] flex items-center justify-center shadow-lg group">
                    <div className="w-8 h-8 rounded-full bg-neutral-950 border border-neutral-800" />
                  </div>
                  <div className="w-px h-8 bg-[#D4AF37]/20" />
                  {/* Crossed Red Circle */}
                  <div className="relative w-12 h-12 rounded-full bg-rose-950/30 border-2 border-rose-500/50 flex items-center justify-center shadow-lg">
                    <div className="absolute w-10 h-0.5 bg-rose-500 rotate-45" />
                    <div className="w-8 h-8 rounded-full bg-rose-600/30 border border-rose-500" />
                  </div>
                </div>

                <h4 className="font-serif text-2xl md:text-3xl text-[#FAF4EA] font-extrabold uppercase tracking-widest mb-2">
                  {siteConfig.dressCode.type}
                </h4>
                
                <p className="font-sans text-[10px] md:text-xs text-[#FAF4EA]/80 leading-relaxed tracking-wider mb-4 max-w-[240px]">
                  Agradecemos tu presencia vistiendo totalmente de negro para mantener la elegancia de la noche.
                </p>
              </div>

              {/* Warning tag */}
              <div className="w-full mt-2 px-4 py-2 border border-rose-500/30 bg-rose-950/20 text-rose-300 rounded-full text-[9px] uppercase tracking-[0.2em] font-black">
                Prohibido ir de rojo
              </div>
            </div>

            {/* Card 2: Solo Adultos */}
            <div className="flex flex-col items-center justify-between text-center card-glass p-6 md:p-8 rounded-3xl relative overflow-hidden">
              {/* Elegant Gold Top Border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              
              <div className="flex flex-col items-center w-full">
                <span className="font-sans text-[8px] md:text-[9px] text-[#FAF4EA]/60 uppercase tracking-[0.3em] font-bold mb-2">
                  TIPO DE EVENTO
                </span>

                {/* Elegant Glass Crown or Logo */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#D4AF37] my-4 shadow-lg bg-[#D4AF37]/5">
                  <span className="font-serif text-xs text-[#D4AF37] font-black tracking-widest">18+</span>
                </div>

                <h4 className="font-serif text-2xl md:text-3xl text-[#FAF4EA] font-extrabold uppercase tracking-widest mb-2">
                  Solo Adultos
                </h4>
                
                <p className="font-sans text-[10px] md:text-xs text-[#FAF4EA]/80 leading-relaxed tracking-wider mb-4 max-w-[240px]">
                  Para garantizar una noche de gala y tranquilidad, hemos preparado un evento exclusivo para adultos.
                </p>
              </div>

              {/* Gala Tag */}
              <div className="w-full mt-2 px-4 py-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] rounded-full text-[9px] uppercase tracking-[0.2em] font-black">
                Evento exclusivo
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
