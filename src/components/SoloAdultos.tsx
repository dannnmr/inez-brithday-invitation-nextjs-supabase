"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function SoloAdultos() {
  return (
    <div className="relative w-full bg-transparent overflow-hidden">
      <section className="relative pt-0 pb-0 px-4 md:px-10 flex flex-col items-center w-full">
        {/* Ambient Glow removed to avoid any stain effect */}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass p-8 md:p-10 rounded-3xl relative overflow-hidden w-full max-w-[320px] md:max-w-[360px] min-h-[300px] md:min-h-[340px] flex flex-col justify-between items-center text-center mx-auto z-10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] mt-1 md:mt-[10px]"
        >
          {/* Elegant Gold/Cream Top Border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#fbeede] to-transparent" />
          
          {/* Background Illustration (mano_copa) covering the entire card background */}
          <div className="absolute inset-0 w-full h-full opacity-25 pointer-events-none z-0">
            <Image
              src="/images/decorativas_v2/mano_copa.png"
              alt="Copa de vino fondo"
              fill
              sizes="(max-width: 768px) 320px, 360px"
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="flex flex-col items-center justify-between gap-6 w-full h-full relative z-10 flex-1">
            {/* Top Side: Title */}
            <div className="flex flex-col items-center w-full">
              <span className="font-sans text-[8px] md:text-[9px] text-[#FAF4EA]/60 uppercase tracking-[0.3em] font-bold mb-2">
                TIPO DE EVENTO
              </span>
              <h4 className="font-serif text-2xl md:text-2xl text-[#FAF4EA] font-extrabold uppercase tracking-widest mb-2">
                Solo Adultos
              </h4>
              <div className="w-8 h-px bg-[#fbeede]/20 my-1" />
            </div>
            
            {/* Middle Side: Description */}
            <div className="flex-1 flex items-center justify-center py-4">
              <p className="font-sans text-[10px] md:text-xs text-[#FAF4EA]/85 leading-relaxed tracking-wider max-w-[240px]">
                Para garantizar una noche de gala y tranquilidad, hemos preparado un evento exclusivo para adultos.
              </p>
            </div>
            
            {/* Bottom Side: Round badge & Tag */}
            <div className="flex flex-col items-center gap-2 mt-2 w-full">
              <div className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#fbeede] shadow-lg bg-[#fbeede]/5">
                <span className="font-serif text-[11px] text-[#fbeede] font-black tracking-widest">18+</span>
              </div>
              <div className="px-3.5 py-1.5 border border-[#fbeede]/30 bg-[#fbeede]/5 text-[#fbeede] rounded-full text-[8.5px] uppercase tracking-[0.2em] font-black shadow-xs">
                Evento exclusivo
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

