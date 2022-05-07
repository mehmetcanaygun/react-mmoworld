import { actionTypes } from './helper'

export interface IGame {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
}

export type TAppState = {
  games: IGame[];
  game: IGame;
  loading: boolean;
}

export type TAppContext = TAppState & {
  getGames: () => void;
  getSingleGame: () => void;
  setLoading: () => void;
}

export type TActions =
  | { type: actionTypes.GET_GAMES; games: IGame[] }
  | { type: actionTypes.GET_SINGLE_GAME; game: IGame }
  | { type: actionTypes.SET_LOADING; loading: boolean }