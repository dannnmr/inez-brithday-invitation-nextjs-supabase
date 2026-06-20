"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";
import { FloatingDecoration } from "./ui/FloatingDecoration";

export function RSVP() {
  const whatsappNumber = "59176010543";
  const message = encodeURIComponent("¡Hola! Quiero confirmar mi asistencia al cumpleaños de Inez Lorine.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="relative py-8 px-6 bg-transparent flex flex-col items-center overflow-hidden w-full">

      {/* Decorative Jungle Leaves */}
      <FloatingDecoration
        src="/images/decorativas_v2/hojas.png"
        alt="Selva"
        className="top-[10%] left-[-15%] w-72 h-72 md:w-[450px] md:h-[450px] opacity-15"
        animationStyle="slideLeft"
      />

      <FloatingDecoration
        src="/images/decorativas_v2/flor_dorada.png"
        alt="Flor"
        className="bottom-[-5%] right-[-10%] w-60 h-60 md:w-[350px] md:h-[350px] opacity-25"
        animationStyle="slideRight"
      />

      <AnimatedSection once className="relative z-10 max-w-md w-full mx-auto px-1">
        {/* card-glass container */}
        <div className="card-glass p-6 md:p-10 rounded-3xl relative overflow-hidden text-center flex flex-col items-center">
          {/* Elegant Gold Top Border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <SectionHeader
            subtitle="Confirmación de Asistencia"
            title="RSVP"
            className="mb-2 w-full overflow-visible"
            titleClassName="text-5xl md:text-7xl leading-normal py-2 mb-1 w-full text-[#FAF4EA] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-script"
            subtitleClassName="text-[#FAF4EA]/80 font-bold text-[10px] min-[380px]:text-[12px] tracking-[0.5em] mb-2"
          />

          <div className="text-center mb-6 w-full -mt-2">
            <p className="font-sans text-[10px] md:text-xs text-[#FAF4EA]/85 tracking-widest font-light max-w-sm mx-auto uppercase leading-relaxed px-4">
              Por favor, confírmanos tu presencia en este día tan especial pulsando el botón a continuación.
            </p>
          </div>

          {/* Call to Action Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 px-6 py-4.5 bg-[#FAF4EA] hover:bg-[#FAF4EA]/90 text-[#380104] border border-white/5 rounded-full font-sans tracking-[0.25em] uppercase text-[10px] md:text-xs font-black transition-all duration-300 shadow-[0_8px_25px_rgba(212,175,55,0.15)] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#380104] shrink-0" fill="currentColor" strokeWidth={1} />
            <span>Confirmar Asistencia</span>
          </motion.a>

          {/* Help note */}
          <p className="font-sans text-[8px] tracking-widest text-[#D4AF37] uppercase font-bold mt-4">
            Envía un mensaje directo a WhatsApp
          </p>

        </div>
      </AnimatedSection>
    </section>
  );
}
