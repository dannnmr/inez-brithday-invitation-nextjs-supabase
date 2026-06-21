"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../config/invitation";

const TARGET_DATE = new Date(siteConfig.event.isoDate).getTime();

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  const items = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 px-4 flex flex-col items-center text-center overflow-hidden bg-[#fbeede]">
      
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        <div className="mb-6">
          <p className="font-sans text-[8px] md:text-[10px] uppercase tracking-[0.6em] text-[#3f020a] mb-1 font-black">
            El Gran Día
          </p>
          <h3 className="font-pinyon text-4xl md:text-5xl text-[#3f020a]">Falta muy poco...</h3>
        </div>

        <div className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-6 px-1">
          {items.map((item, index) => (
            <React.Fragment key={item.label}>
              <div className="flex flex-col items-center">
                <div className="liquid-glass-card relative w-14 h-15 sm:w-20 sm:h-22 md:w-24 md:h-26 flex flex-col items-center justify-center mb-2 overflow-hidden bg-[#380104]/40 border border-[#3f020a]/35">
                  <div className="absolute top-0 left-0 right-0 h-[38%] rounded-t-[20px] rounded-b-[10px] bg-linear-to-b from-[rgba(255,255,255,0.06)] to-transparent pointer-events-none z-10" />
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-black/45 z-20 shadow-[0_1px_0_rgba(255,255,255,0.05)]" />
                  
                  <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "400px" }}>
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={item.value}
                        initial={{ rotateX: 85, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        exit={{ rotateX: -85, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute text-2xl sm:text-4xl md:text-5xl font-serif font-black text-[#3f020a] leading-none tracking-tighter"
                      >
                        {item.value.toString().padStart(2, '0')}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
                <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#3f020a]">{item.label}</span>
              </div>
              {index < 3 && (
                <div className="flex items-center justify-center h-15 sm:h-22 md:h-26 mb-2">
                  <span className="text-sm md:text-xl text-[#3f020a]/60 animate-pulse font-bold">•</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
