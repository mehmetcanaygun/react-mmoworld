import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IGame } from '../../context/types';
import { formatDate } from '../../utils';

type TProps = {
  game: IGame;
  platform: string;
};

const GameCard: FC<TProps> = ({ game, platform }) => {
  return (
    <Link
      to={`/games/${platform}/${game.id}`}
      className="h-60 rounded-md bg-cover bg-scroll bg-center bg-no-repeat overflow-hidden transform transition-transform duration-300 hover:-translate-y-1"
      style={{ backgroundImage: `url(${game.thumbnail})` }}
    >
      <div className="h-full p-2 bg-gradient-to-t from-dark flex flex-col justify-end">
        <span className="text-secondary text-lg">{game.title}</span>
        <span className="text-light text-sm">
          {formatDate(game.release_date)}
        </span>
      </div>
    </Link>
  );
};

export default GameCard;
