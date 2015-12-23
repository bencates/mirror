'use strict';

import React from 'react';

import ConditionsIconComponent from './ConditionsIconComponent';

const CurrentSummaryComponent = props => {
  const data = props.data;

  return (
    <div className="current-summary">
      <div className="conditions">
        <ConditionsIconComponent icon={data.icon} />
      </div>
      <div className="temp">
        {Math.round(data.temperature)}
        <span className="unit">&deg;F</span>
        <br />
        {Math.round(data.humidity * 100)}
        <span className="unit">%H</span>
      </div>
    </div>
  );
}

CurrentSummaryComponent.displayName = 'MirrorWeatherCurrentSummaryComponent';

export default CurrentSummaryComponent;
