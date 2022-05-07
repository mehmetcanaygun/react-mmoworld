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

export interface ISingleGame extends IGame {
  status: string;
  description: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: { id: number; image: string; }[]
}

export type TAppState = {
  games: IGame[];
  game: ISingleGame;
  loading: boolean;
}

export type TAppContext = TAppState & {
  getGames: (platform: string) => void;
  getSingleGame: (id: string) => void;
  setLoading: () => void;
}

export type TActions =
  | { type: actionTypes.GET_GAMES; games: IGame[] }
  | { type: actionTypes.GET_SINGLE_GAME; game: ISingleGame }
  | { type: actionTypes.SET_LOADING; loading: boolean }