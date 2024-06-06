import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = process.env.NUXT_PUBLIC_SUPABASE_URL as string
const supabaseKey: string = process.env.NUXT_PUBLIC_SUPABASE_KEY as string

export default createClient(supabaseUrl, supabaseKey)