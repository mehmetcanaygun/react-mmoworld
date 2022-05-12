import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GameContext from '../../context/GameContext';
import { Header, Search, GameList } from '../../components';
import { capitalizeFirst, scrollTop } from '../../utils';

const GamesPage = () => {
  const gameContext = useContext(GameContext);
  const { platform } = useParams();

  useEffect(() => {
    if (platform) gameContext?.getGames(platform);

    scrollTop();

    // eslint-disable-next-line
  }, [platform]);

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
      <GameList platform={platform ?? ''} />
    </div>
  );
};

export default GamesPage;
