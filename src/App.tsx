import React from 'react';
import { MusicRecommender } from './MusicRecommender';
import { CoronavirusUpdate } from './CoronavirusUpdate';
import { FilePathConverter } from './FilePathConverter';
import { SportsSchedule } from './SportsSchedule';
import { TimeWasters } from './TimeWasters';

function App(): JSX.Element {
  return (
    <div className="app">
      <MusicRecommender />
      <CoronavirusUpdate />
      <SportsSchedule />
      <TimeWasters />
      <FilePathConverter />
    </div>
  );
}

export default App;
