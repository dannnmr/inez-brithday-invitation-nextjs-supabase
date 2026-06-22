"use client";

import React from "react";
import { motion } from "framer-motion";
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
            subtitle="CONFIRMA TU ASISTENCIA"
            title="Te Espero"
            className="mb-2 w-full overflow-visible"
            titleClassName="text-5xl md:text-6xl lg:text-7xl leading-normal py-2 mb-1 w-full text-[#FAF4EA] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-serif italic"
            subtitleClassName="text-[#FAF4EA]/80 font-sans font-bold text-[10px] min-[380px]:text-[11px] md:text-xs tracking-[0.4em] mb-2 uppercase"
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
            <svg
              className="w-4 h-4 text-[#380104] shrink-0 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
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
