import React from 'react';
import { MusicRecommender } from './MusicRecommender';
import { CoronavirusUpdate } from './CoronavirusUpdate';
import { FilePathConverter } from './FilePathConverter';

function App(): JSX.Element {
  return (
    <div className="app">
      <MusicRecommender />
      <FilePathConverter />
      <CoronavirusUpdate />
    </div>
  );
}

export default App;
