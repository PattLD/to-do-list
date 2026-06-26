import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pndznrjmgwqhyfwypcwg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuZHpucmptZ3dxaHlmd3lwY3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzOTYyMjEsImV4cCI6MjA5Nzk3MjIyMX0.mO-_jIjLrMIqM4nLLZj2K_K3XIsugbBXJkincOE5-4Q"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)