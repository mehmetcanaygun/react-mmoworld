import axios from 'axios'

const HEADERS = {
  'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
  'X-RapidAPI-Key': 'YOUR_RAPID_API_KEY'
}

/**
 * @name fetchGames
 * @description Fetches games by platform
 * @param {string} platform 
 * 
 * @returns {Array} games
 */
export const fetchGames = async (platform: string) => {
  const URL = 'https://mmo-games.p.rapidapi.com/games'
  const PARAMS = platform !== 'all' ? { platform } : null
  const OPTIONS = {
    method: 'GET',
    url: URL,
    params: PARAMS,
    headers: HEADERS
  };

  try {
    const { data } = await axios.request(OPTIONS)
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}

/**
 * @name fetchSingleGame
 * @description Fetches single game by id
 * @param {string} id 
 * 
 * @returns {Object} game
 */
export const fetchSingleGame = async (id: string) => {
  const URL = 'https://mmo-games.p.rapidapi.com/game'
  const PARAMS = { id }
  const OPTIONS = {
    method: 'GET',
    url: URL,
    params: PARAMS,
    headers: HEADERS
  };

  try {
    const { data } = await axios.request(OPTIONS)
    return data
  } catch (error) {
    console.error(error)
    return {}
  }
}

/**
 * @name searchGames
 * @description Searches games by platform, genre, and sort-by value
 * @param {string} platform 
 * @param {string} genre 
 * @param {string} sortBy 
 * 
 * @returns {Array} games
 */
export const searchGames = async (platform: string, genre: string, sortBy: string) => {
  const URL = 'https://mmo-games.p.rapidapi.com/games'
  const PARAM_PLATFORM = platform !== 'all' ? platform : null
  const PARAM_SORT_BY = sortBy !== 'none' ? sortBy : null
  const PARAMS = { platform: PARAM_PLATFORM, category: genre, 'sort-by': PARAM_SORT_BY }
  const OPTIONS = {
    method: 'GET',
    url: URL,
    params: PARAMS,
    headers: HEADERS
  };

  try {
    const { data } = await axios.request(OPTIONS)
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}