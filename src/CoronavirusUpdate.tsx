import React from 'react';
import { Widget } from './Widget';

export function CoronavirusUpdate(): JSX.Element {
  const today = new Date();
  const todayString = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  return (
    <Widget className="coronavirus-update" title="Ontario Coronavirus Update">
      <p>
        <a href="https://globalnews.ca/news/6649164/canada-coronavirus-cases/#ontario">Global News</a>
      </p>
      <p>
        <a href="https://www.ctvnews.ca/health/coronavirus/tracking-every-case-of-covid-19-in-canada-1.4852102#ontario">
          CTV News
        </a>
      </p>
      <p>
        <a href={`https://files.ontario.ca/moh-covid-19-report-en-${todayString}.pdf`}>Government of Ontario</a>
      </p>
    </Widget>
  );
}
