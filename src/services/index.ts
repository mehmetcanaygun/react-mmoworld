import axios from 'axios'

const HEADERS = {
  'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
  'X-RapidAPI-Key': '40a97b82afmsh0a4c48f7a9f1d0ep13edc5jsn510b6bbfd7ab'
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