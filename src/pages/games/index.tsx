import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GameContext from '../../context/GameContext';
import { Spinner, GameCard, Header, Search } from '../../components';
import { capitalizeFirst, scrollTop } from '../../utils';

const GamesPage = () => {
  const gameContext = useContext(GameContext);
  const { platform } = useParams();

  useEffect(() => {
    if (platform) gameContext?.getGames(platform);

    scrollTop();

    // eslint-disable-next-line
  }, [platform]);

  if (gameContext?.loading) return <Spinner />;

  if (gameContext?.games) {
    return (
      <div className="min-h-screen">
        <Header
          title={`${platform} Games`}
          breadcrumbs={[
            { text: 'Home', path: '/' },
            {
              text: `${platform && capitalizeFirst(platform)} Games`,
              path: `/games/${platform}`,
            },
          ]}
        />

        <Search platform={platform ?? ''} />

        <div className="container mx-auto px-2 py-5 md:px-0 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gameContext.games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              platform={platform ? platform : 'all'}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default GamesPage;
