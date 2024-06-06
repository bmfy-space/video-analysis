import supabase from "../utils/supabase"

export default defineEventHandler(async (event) => {
  try {
    const { data: video_list, error } = await supabase
      .from('video_list')
      .select('*')

    if (error) {
      throw error.message
    }

    return {
      success: true,
      data: video_list
    }

  } catch (error) {
    return {
      success: false
    }
  }
})