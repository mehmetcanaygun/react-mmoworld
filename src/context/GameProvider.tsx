import React, { useReducer, Reducer } from 'react';
import GameContext from './GameContext';
import GameReducer from './GameReducer';
import { fetchGames, fetchSingleGame, searchGames } from '../services';
import { TActions, TAppState } from './types';
import { actionTypes } from './helper';

type TProps = {
  children: React.ReactNode;
};

const GameProvider: React.FC<TProps> = ({ children }) => {
  const initialState: TAppState = {
    games: [],
    gameDetail: {
      id: 0,
      title: '',
      thumbnail: '',
      short_description: '',
      game_url: '',
      genre: '',
      platform: '',
      publisher: '',
      developer: '',
      release_date: '',
      profile_url: '',
      status: '',
      description: '',
      minimum_system_requirements: {
        os: '',
        processor: '',
        memory: '',
        graphics: '',
        storage: '',
      },
      screenshots: [],
    },
    loading: false,
  };

  const [state, dispatch] = useReducer<Reducer<TAppState, TActions>>(
    GameReducer,
    initialState
  );

  const getGames = async (platform: string) => {
    setLoading();

    const games = await fetchGames(platform);

    dispatch({
      type: actionTypes.GET_GAMES,
      games,
    });
  };

  const getSingleGame = async (id: string) => {
    setLoading();

    const gameDetail = await fetchSingleGame(id);

    dispatch({
      type: actionTypes.GET_SINGLE_GAME,
      gameDetail,
    });
  };

  const filterGames = async (
    platform: string,
    genre: string,
    sortBy: string
  ) => {
    setLoading();

    const games = await searchGames(platform, genre, sortBy);

    dispatch({
      type: actionTypes.SEARCH_GAMES,
      games,
    });
  };

  const setLoading = (): void => {
    dispatch({ type: actionTypes.SET_LOADING, loading: true });
  };

  return (
    <GameContext.Provider
      value={{
        games: state.games,
        gameDetail: state.gameDetail,
        loading: state.loading,
        getGames,
        getSingleGame,
        filterGames,
        setLoading,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
