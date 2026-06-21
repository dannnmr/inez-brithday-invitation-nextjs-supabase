"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
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

      {/* Cinta de Encaje Divider spanning the full width of the screen */}
      <div className="absolute top-0 left-0 right-0 w-full h-10 md:h-10 pointer-events-none select-none z-20">
        <Image
          src="/images/decorativas_v2/cinta_encaje.png"
          alt="Cinta de Encaje"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
          priority
        />
      </div>

   

      <AnimatedSection once className="relative z-10 max-w-md w-full mx-auto px-1">
        {/* transparent container */}
        <div className="p-6 md:p-10 relative overflow-hidden text-center flex flex-col items-center w-full">

          <SectionHeader
            subtitle="Confirmación de Asistencia"
            title="RSVP"
            className="mb-2 w-full overflow-visible"
            titleClassName="text-5xl md:text-7xl leading-normal py-2 mb-1 w-full text-[#FAF4EA] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-script"
            subtitleClassName="text-[#FAF4EA]/80 font-bold text-[10px] min-[380px]:text-[12px] tracking-[0.5em] mb-2"
          />

          <div className="text-center mb-6 w-full -mt-2">
            <p className="font-sans text-[10px] md:text-xs text-[#FAF4EA]/85 tracking-widest font-light max-w-sm mx-auto uppercase leading-relaxed px-2">
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
            className="w-full flex items-center justify-center gap-3 px-6 py-4.5 bg-[#FAF4EA] hover:bg-[#FAF4EA]/90 text-[#380104] border border-white/5 rounded-full font-sans tracking-[0.25em] uppercase text-[10px] md:text-xs font-black transition-all duration-300 shadow-[0_8px_25px_rgba(251, 238, 222,0.15)] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#380104] shrink-0" fill="currentColor" strokeWidth={1} />
            <span>Confirmar Asistencia</span>
          </motion.a>

          {/* Help note */}
          <p className="font-sans text-[8px] tracking-widest text-[#fbeede] uppercase font-bold mt-4">
            Envía un mensaje directo a WhatsApp
          </p>

        </div>
      </AnimatedSection>

      {/* Cinta de Encaje Divider spanning the full width of the screen at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-10 md:h-10 pointer-events-none select-none z-20">
        <Image
          src="/images/decorativas_v2/cinta_encaje.png"
          alt="Cinta de Encaje Inferior"
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />
      </div>
    </section>
  );
}
