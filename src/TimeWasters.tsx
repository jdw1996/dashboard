import React from 'react';
import { Widget } from './Widget';

export function TimeWasters(): JSX.Element {
  return (
    <Widget className="time-wasters" title="Time Wasters">
      <p>
        <a href="https://josephwinters.com/jothello/">Jothello</a>
        <br />
        <a href="https://www.coolmathgames.com/0-merge-rings">Merge Rings</a>
        <br />
        <a href="https://www.coolmathgames.com/0-same-game">Same Game</a>
        <br />
        <a href="https://www.coolmathgames.com/0-treasure-slide">Treasure Slide</a>
        <br />
        <a href="https://suika.gg/">Watermelon Game</a>
      </p>
    </Widget>
  );
}
