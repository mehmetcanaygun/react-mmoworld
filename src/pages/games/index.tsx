import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GameContext from '../../context/GameContext';
import { GameCard } from '../../components';

const GamesPage = () => {
  const gameContext = useContext(GameContext);
  const { platform } = useParams();

  useEffect(() => {
    if (platform) gameContext?.getGames(platform);
  }, [gameContext, platform]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-2 py-5 md:px-0 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {gameContext?.games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            platform={platform ? platform : 'all'}
          />
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
