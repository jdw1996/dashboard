import React, { useState } from 'react';
import { Widget } from './Widget';
import { bands } from './bands';
import { randomInt } from './util';

export function MusicRecommender(): JSX.Element {
  const listOfBands = bands.split('\n');
  function getRandomBand(): string {
    return listOfBands[randomInt(listOfBands.length)];
  }

  const [band, setBand] = useState(getRandomBand());

  const handleButtonClick = () => {
    setBand(getRandomBand());
  };

  return (
    <Widget title="You should listen to...">
      <p>{band}</p>
      <button onClick={handleButtonClick}>New Recommendation</button>
    </Widget>
  );
}
