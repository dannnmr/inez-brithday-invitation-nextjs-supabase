import { createClient } from "@supabase/supabase-js";
import { env } from "@/config/env";

if (!env.supabaseUrl || !env.supabaseAnonKey) {
  console.error("Supabase URL o Anon Key faltante. Por favor revisa tu archivo .env.local");
}

export const supabase = createClient(env.supabaseUrl, env.supabaseAnonKey);
