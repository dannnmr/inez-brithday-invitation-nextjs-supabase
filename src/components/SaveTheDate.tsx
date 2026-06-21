"use client";

import { motion } from "framer-motion";
import { CalendarPlus } from "lucide-react";
import { siteConfig } from "../config/invitation";
import { AnimatedSection } from "./ui/AnimatedSection";
import { getCalendarLinks } from "../lib/calendar";
import { FloatingDecoration } from "./ui/FloatingDecoration";

export function SaveTheDate() {
  const handleAddToCalendar = () => {
    const isApple =
      /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const { googleUrl, icsUrl } = getCalendarLinks();

    if (isApple) {
      const link = document.createElement("a");
      link.href = icsUrl;
      link.download = `invitacion-${siteConfig.client.name.toLowerCase().replace(/\s+/g, "-")}.ics`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(googleUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative w-full bg-[#fbeede] mb-[48vw] md:mb-[260px]">
      {/* Bottom curve bulging downwards into Gifts */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vw] md:h-[280px] bg-[#fbeede] rounded-b-[70%_100%] pointer-events-none translate-y-full z-0" />

      {/* Floral decorations overlaying the bottom curve */}

      <FloatingDecoration
        src="/images/decorativas_v2/flor_blanca_dorada.png"
        alt="Flor Roja"
        className="bottom-[-40vw] md:bottom-[-180px] right-[10%] w-24 h-24 min-[380px]:w-32 min-[380px]:h-32 md:w-44 md:h-44 opacity-80 z-10"
        animationStyle="float"
      />

      <section className="relative z-10 pt-8 pb-2 bg-transparent w-full flex flex-col items-center">
        <div className="relative z-10 max-w-6xl px-6 w-full flex flex-col items-center">
          {/* Save The Date Event Card */}
        <AnimatedSection
          once
          className="flex flex-col items-center justify-center text-center w-full mb-[-25vw] md:mb-[-140px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl mx-auto relative px-0"
          >
            {/* Soft Ambient Glows */}
            <div className="absolute -top-10 left-1/4 w-40 h-40 bg-[#fbeede]/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-6 right-1/4 w-32 h-32 bg-[#FAF4EA]/3 rounded-full blur-[50px] pointer-events-none" />

            {/* Main Date Card */}
            <div className="relative rounded-3xl overflow-hidden card-glass p-0 shadow-sm border border-[#fbeede]/25">

              {/* Elegant Gold Top Border */}
              <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#fbeede] to-transparent relative z-10" />

              <div className="relative flex flex-col px-0 pt-0 pb-0 overflow-hidden z-10">

                {/* Day Watermark + Layout */}
                <div className="relative flex items-center justify-between px-2 min-[350px]:px-6 md:px-10 pt-4 min-[350px]:pt-5 md:pt-6 pb-2">

                  {/* Watermark Big Number */}
                  <span
                    className="absolute -right-2 md:right-4 top-1/2 -translate-y-1/2 font-serif font-black select-none pointer-events-none leading-none opacity-20"
                    style={{
                      fontSize: "clamp(6rem, 20vw, 12rem)",
                      color: "transparent",
                      WebkitTextStroke: "1.5px rgba(251, 238, 222, 0.18)",
                    }}
                  >
                    {siteConfig.event.date.day}
                  </span>

                  {/* Left Side: Save the Date Badge + Real Date */}
                  <div className="flex flex-col gap-1 md:gap-2 z-10 text-left">
                    <span className="font-sans text-[7.5px] min-[350px]:text-[9px] md:text-[10px] text-[#fbeede] tracking-[0.5em] uppercase font-bold">
                      {siteConfig.event.topLabel || "Save the Date"}
                    </span>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.7 }}
                      className="flex items-end gap-1.5 md:gap-3"
                    >
                      <span className="font-serif font-black text-5xl min-[350px]:text-6xl md:text-7xl lg:text-[6.5rem] text-[#FAF4EA] leading-none tracking-tighter">
                        {siteConfig.event.date.day}
                      </span>
                      <div className="flex flex-col items-start pb-0.5 md:pb-3">
                        <span className="font-sans text-base min-[350px]:text-xl md:text-3xl text-[#FAF4EA]/90 uppercase tracking-[0.08em] font-extrabold leading-tight">
                          {siteConfig.event.date.month}
                        </span>
                        <span className="font-sans text-[8px] min-[350px]:text-[9px] md:text-xs text-[#fbeede] tracking-[0.5em] font-medium mt-0.5">
                          {siteConfig.event.date.year}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Side: Hour script */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="flex flex-col items-end gap-0.5 md:gap-1 z-10 pr-1 min-[350px]:pr-2 md:pr-4"
                  >
                    <span className="font-sans text-[7px] min-[350px]:text-[8px] md:text-[9px] text-[#fbeede] tracking-[0.5em] uppercase font-bold">
                      Hora
                    </span>
                    <span className="font-pinyon text-2xl min-[350px]:text-3xl min-[380px]:text-4xl md:text-[4rem] text-[#FAF4EA] leading-none text-right">
                      {siteConfig.event.time}
                    </span>
                    <span className="font-sans text-[7px] min-[350px]:text-[8px] md:text-[9px] text-[#fbeede] tracking-[0.4em] uppercase font-bold mt-1">
                      Inez Lorine
                    </span>
                  </motion.div>
                </div>

                {/* Subtitle Divider line */}
                <div className="relative mx-4 min-[350px]:mx-6 md:mx-10 mb-3 md:mb-4">
                  <div className="w-full h-px bg-[#fbeede]/20" />
                </div>

                {/* Add to Calendar Section */}
                <div className="flex flex-col items-center gap-2.5 px-4 min-[350px]:px-6 md:px-10 pb-4 min-[350px]:pb-6 md:pb-8">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ willChange: "opacity" }}
                      className="w-1.5 h-1.5 rounded-full bg-[#fbeede]"
                    />
                    <span className="font-sans text-[8px] min-[350px]:text-[9px] md:text-[10px] text-[#FAF4EA]/80 tracking-[0.45em] uppercase font-bold">
                      Sábado
                    </span>
                  </div>

                  <motion.button
                    onClick={handleAddToCalendar}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3 md:py-3.5 px-4 min-[350px]:px-6 rounded-2xl bg-[#FAF4EA] text-[#380104] hover:bg-[#FAF4EA]/90 transition-all duration-300 group cursor-pointer shadow-xs"
                  >
                    <CalendarPlus
                      className="w-3.5 h-3.5 min-[350px]:w-4 min-[350px]:h-4 text-[#380104] shrink-0"
                      strokeWidth={2}
                    />
                    <span className="font-sans text-[8.5px] min-[350px]:text-[10px] md:text-xs text-[#380104] tracking-[0.25em] uppercase font-bold transition-colors">
                      Añadir al Calendario
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  </div>
  );
}
