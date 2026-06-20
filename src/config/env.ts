export const env = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  googleSheetsWebhook: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL || "",
};

// Validación en consola durante desarrollo
if (typeof window === "undefined") {
  if (!env.supabaseUrl || !env.supabaseAnonKey) {
    console.warn("ALERTA: Las claves de Supabase no están configuradas en .env.local");
  }
  if (!env.googleSheetsWebhook) {
    console.warn("ADVERTENCIA: El Webhook de Google Sheets no está configurado.");
  }
}
