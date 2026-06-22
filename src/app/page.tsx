import { Intro } from "@/components/Intro";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { SaveTheDate } from "@/components/SaveTheDate";
import { DressCode } from "@/components/DressCode";
import { SoloAdultos } from "@/components/SoloAdultos";
import { Gifts } from "@/components/Gifts";
import { RSVP } from "@/components/RSVP";
import { Music } from "@/components/Music";
import { Passes } from "@/components/Passes";
import { Gallery } from "@/components/Gallery";
// import { Wishes } from "@/components/Wishes";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Countdown } from "@/components/Countdown";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      <Intro />

      {/* Jungle Leaves decorativas flotando sobre el fondo global */}
      <div className="absolute top-[20%] -left-10 w-48 h-48 md:w-80 md:h-80 z-0 pointer-events-none opacity-[0.04]">
        <Image src="/images/decorativas_v2/flor_roja.png" alt="Selva" fill sizes="(max-width: 768px) 192px, 320px" className="object-contain" />
      </div>
      <div className="absolute top-[50%] -right-10 w-48 h-48 md:w-80 md:h-80 z-0 pointer-events-none opacity-[0.04]">
        <Image src="/images/decorativas_v2/flor_dorada.png" alt="Flor" fill sizes="(max-width: 768px) 192px, 320px" className="object-contain" />
      </div>


      {/* Contenido interactivo secundario revelado tras abrir el sobre */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <DressCode />
        <SoloAdultos />
        <Countdown />
        <SaveTheDate />
        <Gifts />
        <RSVP />
        <Music />
        <Location />
        <Passes />
        {/* <Wishes /> */}
        <Gallery />
        <Footer />
      </div>
    </main>
  );
}

