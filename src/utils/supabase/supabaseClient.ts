import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // Ensure this is securely managed and not exposed

export const supabase = createClient(supabaseUrl!, supabaseServiceRoleKey!)

