import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameContext from '../../context/GameContext';
import { Spinner, Icon, Header } from '../../components';
import { formatDate, toggleScroll, capitalizeFirst } from '../../utils';
import {
  IconApartment,
  IconCalendar,
  IconCategory,
  IconCog,
  IconComputer,
  IconStar,
  IconTimes,
} from '../../assets';

const GameDetailPage = () => {
  const gameContext = useContext(GameContext);
  const [image, setImage] = useState('');
  const [windowTop, setWindowTop] = useState(0);
  const { platform: platformParam, id } = useParams();

  const onImageClick = (path: string): void => {
    // Set modal top
    const top = window.scrollY;
    setWindowTop(top);

    // Set image
    setImage(path);

    // Prevent scroll
    toggleScroll(true);
  };

  const onCloseClick = (): void => {
    // Clean image
    setImage('');

    // Keep scroll
    toggleScroll(false);
  };

  useEffect(() => {
    if (id) gameContext?.getSingleGame(id);

    // eslint-disable-next-line
  }, [id]);

  if (gameContext?.loading) return <Spinner />;

  if (gameContext?.gameDetail) {
    const {
      id,
      developer,
      genre,
      minimum_system_requirements,
      platform,
      publisher,
      release_date,
      screenshots,
      short_description,
      thumbnail,
      title,
    } = gameContext.gameDetail;

    return (
      <div className="min-h-screen">
        {/* Fullscreen Image */}
        {image.length > 0 && (
          <div
            className="absolute left-0 w-screen h-screen bg-dark bg-opacity-75 z-50 flex justify-center items-center px-2"
            style={{ top: windowTop }}
          >
            <button
              onClick={onCloseClick}
              className="absolute top-8 right-8 bg-secondary rounded"
            >
              <Icon path={IconTimes} size="30" />
            </button>
            <div className="w-full md:w-auto">
              <img src={image} alt="Fullscreen" />
            </div>
          </div>
        )}

        <Header
          title={title}
          breadcrumbs={[
            { text: 'Home', path: '/' },
            {
              text: `${platformParam && capitalizeFirst(platformParam)} Games`,
              path: `/games/${platformParam}`,
            },
            { text: title, path: `/games/${platformParam}/${id}` },
          ]}
        />

        <div className="container mx-auto px-2 py-5 md:px-0 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            {/* Thumbnail */}
            <img
              src={thumbnail}
              alt="Game Thumbnail"
              className="rounded-xl shadow-2xl border-4 border-l-secondary border-t-secondary border-r-primary border-b-primary mb-4"
            />

            {/* Description */}
            <p className="text-light text-justify leading-relaxed mb-4">
              {short_description}
            </p>

            {/* Information */}
            <div>
              <h2 className="text-xl text-secondary mb-4">Game Info</h2>
              <ul>
                <li>
                  <Icon path={IconComputer} size="20" />
                  <span className="ml-1">Developer: </span>
                  <span className="text-secondary">{developer}</span>
                </li>
                <li>
                  <Icon path={IconApartment} size="20" />
                  <span className="ml-1">Publisher: </span>
                  <span className="text-secondary">{publisher}</span>
                </li>
                <li>
                  <Icon path={IconStar} size="20" />
                  <span className="ml-1">Genre: </span>
                  <span className="text-secondary">{genre}</span>
                </li>
                <li>
                  <Icon path={IconCategory} size="20" />
                  <span className="ml-1">Platform: </span>
                  <span className="text-secondary">{platform}</span>
                </li>
                <li>
                  <Icon path={IconCalendar} size="20" />
                  <span className="ml-1">Release Date: </span>
                  <span className="text-secondary">
                    {formatDate(release_date)}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            {/* System Requirements */}
            <div className="bg-light rounded-lg shadow-xl p-2 mb-4">
              <h2 className="text-xl text-primary mb-4">
                Minimum System Requirements
              </h2>
              <ul>
                <li>
                  <Icon path={IconCog} size="20" />
                  <span className="ml-1">Operating System: </span>
                  <span className="text-primary">
                    {minimum_system_requirements?.os ?? '-'}
                  </span>
                </li>
                <li>
                  <Icon path={IconCog} size="20" />
                  <span className="ml-1">Processor: </span>
                  <span className="text-primary">
                    {minimum_system_requirements?.processor ?? '-'}
                  </span>
                </li>
                <li>
                  <Icon path={IconCog} size="20" />
                  <span className="ml-1">Graphic Card: </span>
                  <span className="text-primary">
                    {minimum_system_requirements?.graphics ?? '-'}
                  </span>
                </li>
                <li>
                  <Icon path={IconCog} size="20" />
                  <span className="ml-1">RAM: </span>
                  <span className="text-primary">
                    {minimum_system_requirements?.memory ?? '-'}
                  </span>
                </li>
                <li>
                  <Icon path={IconCog} size="20" />
                  <span className="ml-1">Storage: </span>
                  <span className="text-primary">
                    {minimum_system_requirements?.storage ?? '-'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Screenshots */}
            <div className="bg-light rounded-lg shadow-xl p-2 mb-4">
              <h2 className="text-xl text-primary mb-4">Screenshots</h2>
              <div className="flex gap-2 flex-wrap md:flex-no-wrap">
                {screenshots.map((ss, index) => (
                  <img
                    key={ss.id}
                    src={ss.image}
                    alt="Screenshot"
                    onClick={() => onImageClick(ss.image)}
                    className="w-24 h-24 rounded-lg shadow-lg cursor-pointer border-2 border-l-secondary border-t-secondary border-r-primary border-b-primary transform transition-transform hover:-translate-y-2"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default GameDetailPage;
