import { siteConfig } from "@/config/invitation";

export function getCalendarLinks() {
  const startDate = new Date(`${siteConfig.event.isoDate}-04:00`); // UTC-4 (Bolivia)
  const endDate = new Date(startDate.getTime() + 8 * 60 * 60 * 1000); // 8 horas de duración

  const formatUTC = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const start = formatUTC(startDate);
  const end = formatUTC(endDate);
  
  const title = encodeURIComponent(`${siteConfig.client.eventType} — ${siteConfig.client.name}`);
  const location = encodeURIComponent(siteConfig.location.address);
  const details = encodeURIComponent(`¡Estás invitado/a! ${siteConfig.client.eventType} de ${siteConfig.client.name}. Lugar: ${siteConfig.location.venueName}.`);

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Invitation//ES",
    "BEGIN:VEVENT",
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${siteConfig.client.eventType} — ${siteConfig.client.name}`,
    `LOCATION:${siteConfig.location.address} - ${siteConfig.location.venueName}`,
    `DESCRIPTION:¡Estás invitado/a! ${siteConfig.client.eventType} de ${siteConfig.client.name}.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  
  const icsUrl = `data:text/calendar;charset=utf8,${encodeURIComponent(ics)}`;

  return { googleUrl, icsUrl };
}
