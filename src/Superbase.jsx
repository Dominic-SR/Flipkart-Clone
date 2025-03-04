import { createClient } from "@supabase/supabase-js";
const supabase = createClient('https://xcxdynjnoxmxzgxqgysp.supabase.co', import.meta.env.VITE_SUBABASE_KEY)
export default supabase;