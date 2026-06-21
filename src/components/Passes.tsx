"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";

export function Passes() {
  return (
    <section className="relative w-full py-12 px-4 bg-transparent overflow-hidden flex flex-col items-center">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-2 md:px-4 flex flex-col items-center gap-1 relative z-10 w-full">

        {/* Section Header */}
        <SectionHeader
          title={siteConfig.passes.mainTitle}
          subtitle={siteConfig.passes.topLabel}
          titleClassName="font-pinyon text-5xl md:text-6xl text-[#FAF4EA]"
          subtitleClassName="text-[#FAF4EA]/80 tracking-[0.4em] font-sans font-medium text-xs mb-1"
        />

        {/* Boarding Pass Safari Card Wrapper */}
        <AnimatedSection once className="w-full">
          <div className="relative w-full pt-1 md:pt-5">
            {/* Lying Leopard sitting on top of the boarding pass (Position adjusted by User) */}
            <div className="absolute bottom-[100px] sm:top-2 md:top-2 left-[-30] -translate-x-2 w-25 sm:w-64 md:w-80 h-56 sm:h-24 md:h-65 z-0 pointer-events-none select-none rotate-12 scale-x-[-1]">
              <Image
                src="/images/decorativas_v2/perlas.png"
                alt="Flor blanca dorada"
                fill
                sizes="(max-width: 768px) 192px, 320px"
                className="object-contain"
                priority
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.01, translateY: -2 }}
              className="w-full flex rounded-xl md:rounded-2xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-[#2D0205] via-[#160002] to-[#250103] text-[#FAF4EA] border border-[#fbeede]/30 max-w-[95vw] md:max-w-none mx-auto transition-all duration-300 group"
            >
              {/* Double border gold foil effect */}
              <div className="absolute inset-1 sm:inset-1.5 border border-[#fbeede]/10 rounded-[8px] md:rounded-[14px] pointer-events-none z-20" />

              {/* Texture overlays */}
              <div className="absolute inset-0 bg-[url('/images/decorativas_v2/flor_blanca_dorada.png')] bg-cover bg-center mix-blend-overlay opacity-[0.04] pointer-events-none z-0" />
              
              {/* Fine watermark grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(251,238,222,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,238,222,0.02)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none z-0" />

              {/* Left Main Body */}
              <div className="flex-1 flex flex-col p-4 sm:p-4.5 md:p-6 relative justify-between gap-2.5 sm:gap-3 z-10 overflow-hidden">
             

                {/* Header: VIP PASS + Passenger Info (Merged for compact height) */}
                <div className="flex justify-between items-end w-full relative z-10 pb-1.5 border-b border-[#fbeede]/10">
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[5.5px] sm:text-[6.5px] text-[#fbeede]/50 uppercase tracking-[0.25em] font-semibold">
                      BOARDING PASS / PASE DE ABORDO
                    </span>
                    <h2 className="text-xs sm:text-base md:text-lg font-serif font-black uppercase tracking-widest text-[#fbeede] leading-none mt-0.5">
                      VIP ACCESS
                    </h2>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="font-sans text-[5.5px] sm:text-[6.5px] text-[#fbeede]/50 uppercase tracking-[0.25em] font-semibold">
                      PASAJERO / PASSENGER
                    </span>
                    <span className="font-serif italic font-bold text-[9px] sm:text-xs md:text-sm text-[#FAF4EA] tracking-wide mt-0.5 whitespace-nowrap">
                      {siteConfig.passes.quantity} {siteConfig.passes.unitText}
                    </span>
                  </div>
                </div>

                {/* Airport Codes Section (SCS -> VM) */}
                <div className="flex items-center justify-between my-0.5 sm:my-1 relative z-10 w-full gap-2">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-sans text-[5px] sm:text-[6.5px] text-[#FAF4EA]/40 uppercase tracking-widest">DEPARTURE / SALIDA</span>
                    <h3 className="font-serif text-lg sm:text-2xl md:text-3.5xl font-extrabold text-[#FAF4EA] tracking-wider leading-none my-0.5">SCZ</h3>
                    <span className="font-sans text-[5px] sm:text-[6px] text-[#FAF4EA]/60 tracking-wider uppercase font-semibold">SANTA CRUZ</span>
                  </div>

                  {/* Flight Plane Icon Path */}
                  <div className="flex-1 flex items-center justify-center px-1.5 relative max-w-[65px] sm:max-w-none">
                    <div className="w-full h-px border-t border-dashed border-[#fbeede]/20" />
                    <div className="absolute mx-auto bg-[#1b0002] px-1.5 py-0.5 rounded-full border border-[#fbeede]/10 flex items-center justify-center z-10">
                      <Compass className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#fbeede] rotate-45 animate-pulse" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="flex flex-col items-end text-right">
                    <span className="font-sans text-[5px] sm:text-[6.5px] text-[#FAF4EA]/40 uppercase tracking-widest">ARRIVAL / LLEGADA</span>
                    <h3 className="font-serif text-lg sm:text-2xl md:text-3.5xl font-extrabold text-[#FAF4EA] tracking-wider leading-none my-0.5">VM</h3>
                    <span className="font-sans text-[5px] sm:text-[6.5px] text-[#FAF4EA]/60 tracking-wider uppercase font-semibold">VERDE MANZANA</span>
                  </div>
                </div>

                {/* Flight details grid */}
                <div className="grid grid-cols-5 gap-x-1 sm:gap-2 mt-0.5 pt-1.5 sm:pt-2 border-t border-[#fbeede]/10 relative z-10 w-full text-left">
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[5px] sm:text-[6.5px] uppercase tracking-widest text-[#fbeede]/45">VUELO / FLT</span>
                    <span className="font-mono font-bold text-[8px] sm:text-[9.5px] md:text-[10px] mt-0.5 text-[#FAF4EA] tracking-wider">IL-60</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[5px] sm:text-[6.5px] uppercase tracking-widest text-[#fbeede]/45">FECHA / DATE</span>
                    <span className="font-mono font-bold text-[8px] sm:text-[9.5px] md:text-[10px] mt-0.5 text-[#FAF4EA] whitespace-nowrap tracking-wider">
                      {siteConfig.event.date.day} {siteConfig.event.date.month.substring(0,3).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[5px] sm:text-[6.5px] uppercase tracking-widest text-[#fbeede]/45">HORA / BOARD</span>
                    <span className="font-mono font-bold text-[8px] sm:text-[9.5px] md:text-[10px] mt-0.5 text-[#FAF4EA] tracking-wider">19:30</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[5px] sm:text-[6.5px] uppercase tracking-widest text-[#fbeede]/45">ASIENTO / SEAT</span>
                    <span className="font-mono font-bold text-[8px] sm:text-[9.5px] md:text-[10px] mt-0.5 text-[#FAF4EA] tracking-wider">60</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[5px] sm:text-[6.5px] uppercase tracking-widest text-[#fbeede]/45">CLASE / CLS</span>
                    <span className="font-mono font-bold text-[8px] sm:text-[9.5px] md:text-[10px] mt-0.5 text-[#FAF4EA] tracking-wider">VIP</span>
                  </div>
                </div>
              </div>

              {/* Perforated Separator */}
              <div className="relative w-2 sm:w-4 flex flex-col items-center justify-between bg-transparent shrink-0">
                <div className="absolute top-[-6px] md:top-[-8px] w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#380104] border-b border-[#fbeede]/20 z-10" />
                <div className="h-full w-0 border-l border-dashed border-[#fbeede]/20 my-2" />
                <div className="absolute bottom-[-6px] md:bottom-[-8px] w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#380104] border-t border-[#fbeede]/20 z-10" />
              </div>

              {/* Stub (Right Side) */}
              <div className="w-18 sm:w-24 md:w-40 relative bg-white/2flex flex-col items-center justify-between p-1.5 sm:p-3 overflow-hidden shrink-0 border-l border-[#fbeede]/15 z-10 text-center">
              

                {/* Inner border line for stub */}
                <div className="absolute inset-0.5 border border-[#fbeede]/10 rounded-[6px] md:rounded-[12px] pointer-events-none z-20" />

                {/* Top: Stub code */}
                <div className="flex flex-col items-center z-10">
                  <span className="font-sans text-[5px] sm:text-[6px] text-[#fbeede]/45 uppercase tracking-widest font-semibold">STUB / TALÓN</span>
                  <span className="font-mono font-black text-[8px] sm:text-[9.5px] text-[#fbeede] tracking-widest uppercase mt-0.5">IL60-VIP</span>
                </div>

                {/* Middle: Barcode */}
                <div className="w-full flex flex-col items-center z-10 px-0.5">
                  <div 
                    className="w-full h-5 sm:h-7 opacity-60 pointer-events-none select-none"
                    style={{
                      background: "repeating-linear-gradient(90deg, #fbeede, #fbeede 1.5px, transparent 1.5px, transparent 3.5px, #fbeede 3.5px, #fbeede 4.5px, transparent 4.5px, transparent 5.5px, #fbeede 5.5px, #fbeede 6.5px, transparent 6.5px, transparent 8.5px, #fbeede 8.5px, #fbeede 9px, transparent 9px, transparent 11px)",
                      backgroundSize: "11px 100%"
                    }}
                  />
                  <div className="text-[4px] sm:text-[5.5px] text-[#fbeede]/50 tracking-[0.15em] font-mono mt-0.5 uppercase">
                    * INEZ-60-VIP *
                  </div>
                </div>

                {/* Bottom: Seat / Number "60" */}
                <div className="flex flex-col items-center z-10">
                  <span className="font-sans text-[5px] sm:text-[6px] text-[#fbeede]/45 uppercase tracking-widest font-semibold">ASIENTO / SEAT</span>
                  <span className="font-serif font-black text-xs sm:text-base text-[#FAF4EA] tracking-wide leading-none mt-0.5">60</span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0.5 left-0.5 right-0.5 h-0.5 bg-[#fbeede]/20" />
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
