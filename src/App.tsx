import React from 'react';
import { MusicRecommender } from './MusicRecommender';
import { CoronavirusUpdate } from './CoronavirusUpdate';

function App(): JSX.Element {
  return (
    <div className="app">
      <MusicRecommender />
      <CoronavirusUpdate />
    </div>
  );
}

export default App;
