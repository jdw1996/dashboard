import React from 'react';
import { Widget } from './Widget';

export function SportsSchedule(): JSX.Element {
  return (
    <Widget className="sports-schedule" title="Sports Schedule">
      <a href="https://josephwinters.com/sports-schedule/?MLB_TOR=Royal&NHL_TOR=Navy&NBA_TOR=Purple&MLB_NYM=Orange&NFL_BUF=Red">
        Jays, Leafs, Raptors, Mets, Bills
      </a>
      <br />
      <a href="https://motorsport-events.netlify.app/">Upcoming motorsports events</a>
    </Widget>
  );
}
