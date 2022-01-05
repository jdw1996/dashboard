import React from 'react';
import { MusicRecommender } from './MusicRecommender';
import { Covid19Update } from './Covid19Update';
import { FilePathConverter } from './FilePathConverter';
import { SportsSchedule } from './SportsSchedule';
import { TimeWasters } from './TimeWasters';

function App(): JSX.Element {
  return (
    <div className="app">
      <MusicRecommender />
      <Covid19Update />
      <SportsSchedule />
      <TimeWasters />
      <FilePathConverter />
    </div>
  );
}

export default App;
