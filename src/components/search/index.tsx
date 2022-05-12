import { useContext, useState } from 'react';
import GameContext from '../../context/GameContext';

type TProps = {
  platform: string;
};

const Search = ({ platform }: TProps) => {
  const [genre, setGenre] = useState('mmorpg');
  const [sortBy, setSortBy] = useState('none');
  const [isClearVisible, setIsClearVisible] = useState(false);

  const gameContext = useContext(GameContext);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (gameContext?.filterGames) {
      gameContext.filterGames(platform, genre, sortBy);
      setIsClearVisible(true);
    }
  };

  const cleanSearch = () => {
    setGenre('mmorpg');
    setSortBy('release-date');

    if (gameContext?.getGames) {
      gameContext.getGames(platform);
      setIsClearVisible(false);
    }
  };

  return (
    <div className="container mx-auto px-2 mt-8 mb-4 md:px-0 flex justify-end">
      <form
        className="flex flex-col flex-1 gap-2 md:flex-row md:flex-grow-0"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        {/* Genre Select */}
        <div className="flex flex-col w-full md:w-52">
          <label htmlFor="genre-category" className="text-light text-sm mb-1">
            Genre
          </label>
          <select
            id="genre-category"
            defaultValue={genre}
            className="p-2 border-0 rounded-md bg-light text-dark"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="mmorpg">MMORPG</option>
            <option value="shooter">Shooter</option>
            <option value="mmo">MMO</option>
            <option value="social">Social</option>
            <option value="card-game">Card Game</option>
            <option value="moba">Moba</option>
            <option value="fighting">Fighting</option>
            <option value="strategy">Strategy</option>
            <option value="racing">Racing</option>
            <option value="sports">Sports</option>
            <option value="fantasy">Fantasy</option>
            <option value="battle-royale">Battle Royale</option>
            <option value="action-rpg">Action RPG</option>
            <option value="card">Card</option>
            <option value="arpg">ARPG</option>
          </select>
        </div>

        {/* Sort Select */}
        <div className="flex flex-col w-full md:w-52">
          <label htmlFor="select-category" className="text-light text-sm mb-1">
            Sort by
          </label>
          <select
            id="select-category"
            defaultValue={sortBy}
            className="p-2 border-0 rounded-md bg-light text-dark"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="none">None</option>
            <option value="release-date">Release Date</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="relevance">Relevance</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-secondary text-dark self-end rounded-md h-[37px] py-2 px-4 hover:bg-gray w-full md:w-20"
        >
          Search
        </button>

        {/* Clean Button */}
        {isClearVisible && (
          <button
            type="button"
            className="border-light text-secondary self-end rounded-md h-[37px] py-2 hover:border-secondary w-full md:w-auto"
            onClick={cleanSearch}
          >
            Clean
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
