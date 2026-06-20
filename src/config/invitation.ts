import { SiteConfig } from "@/types/invitation";

export const siteConfig: SiteConfig = {
  client: {
    name: "Inez Lorine",
    eventType: "Mis 60 Años",
    finalPhrase: "Hay momentos que se vuelven inolvidables cuando los compartimos con las personas que queremos. Te invito a acompañarme a celebrar mi cumpleaños y ser parte de un día lleno de alegría y gratitud.",
  },
  parents: {
    topLabel: "Junto a mis padres y padrinos",
    fatherName: "Enrique Dominguez",
    motherName: "Ericka Ayma",
    godparents: [
      "Oliver Morón y Brandy Siles",
      "Roberto Alvarez y Mariana Cardozo"
    ],
    invitationText: "Acompáñame a celebrar una noche mágica e inolvidable al cumplir mis 60 años.",
  },
  event: {
    date: {
      day: "4",
      month: "Julio",
      year: "2026",
    },
    time: "19:30 hrs",
    isoDate: "2026-07-04T19:30:00",
    rsvpDeadline: "2 de Julio",
    topLabel: "Agenda la fecha",
  },
  location: {
    topLabel: "El Lugar",
    venueName: "Verde Manzana Parque Urbano",
    address: "Santa Cruz de la Sierra",
    mapLink: "https://maps.apple/p/RyYWbXIFUEQYM",
    buttonText: "¿Cómo llegar?",
  },
  itinerary: {
    topLabel: "Nuestra Noche",
    mainTitle: "Itinerario",
    schedule: [
      {
        time: "19:30",
        title: "Recepción",
        description: "Inicio oficial de nuestra noche de gala.",
        image: "/images/decorativas_v2/champagne.png",
      },
      {
        time: "22:00",
        title: "Ceremonia",
        description: "El momento especial: brindis.",
        image: "/images/decorativas_v2/martini_ericka.png",
      },
      {
        time: "22:30",
        title: "Fiesta a bailar",
        description: "Apertura oficial de la pista de baile.",
        image: "/images/decorativas_v2/bola_disco_dorada.png",
      },
      {
        time: "00:00",
        title: "Hora Loca",
        description: "¡Máxima energía y sorpresas en la pista!",
        image: "/images/decorativas_v2/leopardo_rugiendo.png",
      },
    ],
  },
  dressCode: {
    topLabel: "Sugerencia de Estilo",
    mainTitle: "Dress Code",
    type: "All Black",
    highlight: {
      line1: "Código",
      line2: "De",
      line3: "Gala",
    },
    reservedColorsText: {
      prefix: "COLOR RESERVADO",
      color1: "ROJO",
      color2: "ROJO",
      suffix: "ESTÁ COMPLETAMENTE PROHIBIDO IR DE ESTE COLOR.",
    },
    extraNotes: {
      prefix: "¡PREPÁRATE PARA UNA",
      highlight: "NOCHE INOLVIDABLE",
      suffix: "!",
    },
  },
  passes: {
    topLabel: "Control de Asistencia",
    mainTitle: "Boarding Pass",
    ticketLabel: "VIP Flight",
    admitText: "Pasajero",
    quantity: "1",
    unitText: "Persona",
  },
  googleSheets: {
    webhookUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL || "",
  },
  theme: {
    colors: {
      primary: "#D4AF37",
      secondary: "#FAF4EA",
      accent: "#D4AF37",
      background: "#380104",
      foreground: "#FAF4EA",
      card: "rgba(56, 1, 4, 0.93)",
      textMuted: "#E3D5CA",
    },
  },
  music: {
    youtubeLink: "https://youtube.com/playlist?list=PLPM2",
  },
};

