"use client";

import React from "react";
import { motion } from "framer-motion";

export function SoloAdultos() {
  return (
    <div className="relative w-full bg-transparent overflow-hidden">
      <section className="relative py-8 px-4 md:px-10 flex flex-col items-center w-full">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-[radial-gradient(circle_at_center,rgba(251,238,222,0.04)_0%,transparent_70%)] rounded-full blur-2xl pointer-events-none z-0" />

        {/* Transition fade to Countdown background (#fbeede) */}
        <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-[#fbeede] via-[#fbeede]/50 via-30% to-transparent pointer-events-none z-0" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-6 md:py-6 md:px-10 rounded-3xl relative overflow-hidden w-full max-w-[460px] md:max-w-[560px] mx-auto z-10"
        >
          {/* Elegant Gold Top Border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fbeede] to-transparent" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
            {/* Left / Top Side: Title & Description */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-grow">
              <span className="font-sans text-[8px] md:text-[9px] text-[#FAF4EA]/60 uppercase tracking-[0.3em] font-bold mb-1">
                TIPO DE EVENTO
              </span>
              <h4 className="font-serif text-2xl md:text-2xl text-[#FAF4EA] font-extrabold uppercase tracking-widest mb-1.5">
                Solo Adultos
              </h4>
              <p className="font-sans text-[10px] md:text-xs text-[#FAF4EA]/80 leading-relaxed tracking-wider max-w-[320px]">
                Para garantizar una noche de gala y tranquilidad, hemos preparado un evento exclusivo para adultos.
              </p>
            </div>
            
            {/* Right / Bottom Side: Icon & Tag */}
            <div className="flex flex-col items-center gap-2.5 shrink-0">
              <div className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#fbeede] shadow-lg bg-[#fbeede]/5">
                <span className="font-serif text-[11px] text-[#fbeede] font-black tracking-widest">18+</span>
              </div>
              <div className="px-3.5 py-1.5 border border-[#fbeede]/30 bg-[#fbeede]/5 text-[#fbeede] rounded-full text-[8px] uppercase tracking-[0.2em] font-black">
                Evento exclusivo
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
