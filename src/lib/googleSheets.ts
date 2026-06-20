import { env } from "@/config/env";

export type GuestData = { nombre: string; creado_en?: string };
export type SongData = { cancion: string; creado_en?: string };
export type PhotoData = { foto_url: string; nombre?: string; creado_en?: string };

type SubmissionType = "guest" | "song" | "foto";

export async function submitToGoogleSheets(
  type: SubmissionType,
  data: GuestData | SongData | PhotoData
) {
  const webhookUrl = env.googleSheetsWebhook;
  
  if (!webhookUrl) {
    console.warn("Google Sheets Webhook URL no está configurada.");
    return { success: false, error: "No webhook URL" };
  }

  let payload: any = {
    type,
    creado_en: data.creado_en || new Date().toISOString(),
  };

  if (type === "guest") {
    payload.nombre = (data as GuestData).nombre;
  } else if (type === "song") {
    payload.cancion = (data as SongData).cancion;
  } else if (type === "foto") {
    payload.foto_url = (data as PhotoData).foto_url;
    payload.nombre = (data as PhotoData).nombre || "Invitado";
  }

  try {
    await fetch(webhookUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return { success: true };
  } catch (error) {
    console.error(`Error enviando ${type} a Google Sheets:`, error);
    return { success: false, error };
  }
}
