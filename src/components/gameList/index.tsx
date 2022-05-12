import { useContext, useEffect } from 'react';
import GameContext from '../../context/GameContext';
import { Spinner, GameCard } from '../../components';
import { NotFoundPage } from '../../pages';

type TProps = {
  platform: string;
};

const GameList = ({ platform }: TProps) => {
  const gameContext = useContext(GameContext);

  useEffect(() => {
    if (platform) gameContext?.getGames(platform);

    // eslint-disable-next-line
  }, []);

  if (gameContext?.loading) return <Spinner />;

  if (gameContext?.games && gameContext.games.length > 0) {
    return (
      <div className="container mx-auto px-2 py-5 md:px-0 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {gameContext.games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            platform={platform ? platform : 'all'}
          />
        ))}
      </div>
    );
  } else {
    return <NotFoundPage />;
  }
};

export default GameList;
