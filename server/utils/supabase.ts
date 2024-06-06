import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = process.env.NUXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL as string
const supabaseKey: string = process.env.NUXT_PUBLIC_SUPABASE_KEY || process.env.SUPABASE_KEY as string

export default createClient(supabaseUrl, supabaseKey)