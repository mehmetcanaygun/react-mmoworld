import { TAppState, TActions } from './types'
import { actionTypes } from './helper'

const NbaReducer = (state: TAppState, action: TActions) => {
  switch (action.type) {
    case actionTypes.GET_GAMES:
      return {
        ...state,
        games: action.games,
      }
    case actionTypes.GET_SINGLE_GAME:
      return {
        ...state,
        game: action.game,
      }
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    default:
      return state
  }
}

export default NbaReducer