import React, { useReducer, Reducer } from 'react'
import GameContext from './GameContext'
import GameReducer from './GameReducer'
import { TActions, TAppState } from './types'
import { actionTypes } from './helper'

type TProps = {
  children: React.ReactNode
}

const GameProvider: React.FC<TProps> = ({ children }) => {
  const initialState: TAppState = {
    games: [],
    game: {
      id: 0,
      title: '',
      thumbnail: '',
      short_description: '',
      genre: '',
      platform: '',
      publisher: '',
      developer: '',
      release_date: '',
    },
    loading: false,
  }

  const [state, dispatch] = useReducer<Reducer<TAppState, TActions>>(
    GameReducer,
    initialState
  )

  const getGames = (platform: string): void => {
    console.log('get ', platform, ' games')
  }

  const getSingleGame = (id: number): void => {
    console.log('get single game with the id of: ', id)
  }

  const setLoading = (): void => {
    console.log('set loading')
  }

  return (
    <GameContext.Provider
      value={{
        games: state.games,
        game: state.game,
        loading: state.loading,
        getGames,
        getSingleGame,
        setLoading,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
