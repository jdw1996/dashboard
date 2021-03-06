import React, { useState } from 'react';
import { Widget } from './Widget';
import { bands, aoty } from './bands';
import { randomInt } from './util';

type MusicNameProps = {
  music: [string, boolean];
};

const listOfBands = bands.split('\n');
const listOfAotY = aoty.split('\n');

function MusicName({ music }: MusicNameProps): JSX.Element {
  const [name, isAlbum] = music;
  if (isAlbum) {
    const starIndex1 = name.search(/\*/u);
    const starIndex2 = name.slice(starIndex1 + 1).search(/\*/u) + starIndex1 + 1;
    if (starIndex1 < 0 || starIndex2 < 0) {
      return <span>{name}</span>;
    }
    return (
      <span className="aoty">
        {name.slice(0, starIndex1)}
        <em>{name.slice(starIndex1 + 1, starIndex2)}</em>
        {name.slice(starIndex2 + 1)}
      </span>
    );
  }
  return <span>{name}</span>;
}

export function MusicRecommender(): JSX.Element {
  function getRandomMusic(): [string, boolean] {
    const idx = randomInt(listOfBands.length + listOfAotY.length);
    if (idx < listOfAotY.length) {
      return [listOfAotY[idx], true];
    }
    return [listOfBands[idx - listOfAotY.length], false];
  }

  const [rec, setRec] = useState<[string, boolean]>(getRandomMusic());

  const handleButtonClick = () => {
    setRec(getRandomMusic());
  };

  return (
    <Widget className="music-recommender" title="You should listen to...">
      <p>
        <MusicName music={rec} />
      </p>
      <button onClick={handleButtonClick}>New Recommendation</button>
    </Widget>
  );
}
