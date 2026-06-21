export interface ClientConfig {
  name: string;
  eventType: string;
  finalPhrase: string;
}

export interface ParentsConfig {
  topLabel: string;
  fatherName: string;
  motherName: string;
  godparents?: string | string[];
  invitationText: string;
}

export interface EventConfig {
  date: {
    day: string;
    month: string;
    year: string;
  };
  time: string;
  isoDate: string;
  rsvpDeadline: string;
  topLabel: string;
}

export interface LocationConfig {
  topLabel: string;
  venueName: string;
  address: string;
  mapLink: string;
  mapLink2: string;
  buttonText: string;
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  image: string;
}

export interface ItineraryConfig {
  topLabel: string;
  mainTitle: string;
  schedule: ItineraryItem[];
}

export interface DressCodeConfig {
  topLabel: string;
  mainTitle: string;
  type: string;
  highlight: {
    line1: string;
    line2: string;
    line3: string;
  };
  reservedColorsText: {
    prefix: string;
    color1: string;
    color2: string;
    suffix: string;
  };
  extraNotes: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
}

export interface PassesConfig {
  topLabel: string;
  mainTitle: string;
  ticketLabel: string;
  admitText: string;
  quantity: string;
  unitText: string;
}

export interface GoogleSheetsConfig {
  webhookUrl: string;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    card: string;
    textMuted: string;
  };
}

export interface SiteConfig {
  client: ClientConfig;
  parents: ParentsConfig;
  event: EventConfig;
  location: LocationConfig;
  itinerary: ItineraryConfig;
  dressCode: DressCodeConfig;
  passes: PassesConfig;
  googleSheets?: GoogleSheetsConfig;
  theme: ThemeConfig;
  music?: {
    youtubeLink: string;
  };
}

