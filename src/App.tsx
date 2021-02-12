import React from 'react';
import { MusicRecommender } from './MusicRecommender';
import { CoronavirusUpdate } from './CoronavirusUpdate';
import { FilePathConverter } from './FilePathConverter';
import { SportsSchedule } from './SportsSchedule';

function App(): JSX.Element {
  return (
    <div className="app">
      <MusicRecommender />
      <CoronavirusUpdate />
      <SportsSchedule />
      <FilePathConverter />
    </div>
  );
}

export default App;
