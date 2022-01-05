import React from 'react';
import { Widget } from './Widget';

export const Covid19Update = (): JSX.Element => (
  <Widget className="covid19-update" title="Ontario COVID-19 Update">
    <p>
      <a href="https://globalnews.ca/news/6649164/canada-coronavirus-cases/#ontario">Global News</a>
      <br />
      <a href="https://www.ctvnews.ca/health/coronavirus/tracking-every-case-of-covid-19-in-canada-1.4852102#ontario">
        CTV News
      </a>
      <br />
      <a href="https://covid-19.ontario.ca/data">Government of Ontario</a>
    </p>
  </Widget>
);
