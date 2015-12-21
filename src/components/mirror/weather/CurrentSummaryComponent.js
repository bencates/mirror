'use strict';

import React from 'react';

import ConditionsIconComponent from './ConditionsIconComponent';

require('styles/mirror/weather/CurrentSummary.sass');

const CurrentSummaryComponent = props => {
  const data = props.data;

  return (
    <div className="weather-current-summary-component">
      <div className="conditions">
        <ConditionsIconComponent icon={data.icon} />
      </div>
      <div className="temp">
        {Math.round(data.temperature)}
        <span className="unit">&deg;F</span>
      </div>
    </div>
  );
}

CurrentSummaryComponent.displayName = 'MirrorWeatherCurrentSummaryComponent';

export default CurrentSummaryComponent;
