const base_url = process.env.NEXT_PUBLIC_API_DOMAIN as string
const api_key = process.env.NEXT_PUBLIC_API_KEY as string


export const API_REQUEST = {
    trending: `${base_url}/trending/all/week?api_key=${api_key}&language=en-US`,
    top_rated: `${base_url}/movie/top_rated?api_key=${api_key}&language=en-US`,
    tv_top_rated: `${base_url}/tv/top_rated?api_key=${api_key}&language=en-US`,
    popular: `${base_url}/movie/popular?api_key=${api_key}&language=en-US`,
    playing: `${base_url}/movie/now_playing?api_key=${api_key}&language=en-US&page=1`,
    fantasy: `${base_url}/trending/all/day?api_key=${api_key}`,
}
