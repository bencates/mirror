'use strict';

import React from 'react';

import ConditionsIconComponent from './ConditionsIconComponent';

function dayLetter(timestamp) {
  const date = new Date(timestamp * 1000);

  switch (date.getDay()) {
    case 0: return 'Su';
    case 1: return 'Mo';
    case 2: return 'Tu';
    case 3: return 'We';
    case 4: return 'Th';
    case 5: return 'Fr';
    case 6: return 'Sa';
  }
}

const ForecastComponent = (props) => {
  const data = props.data.slice(1, 6);

  return (
    <div className="forecast">
      {data.map(day => {
        return (
          <div className="day">
            <div className="day-name">{dayLetter(day.time)}</div>
            <div className="conditions">
              <ConditionsIconComponent icon={day.icon} />
            </div>
            <div className="temp">
              <span className="lo">{Math.round(day.temperatureMin)}&deg;</span>
              &#8202;/&#8202;
              <span className="hi">{Math.round(day.temperatureMax)}&deg;</span>
            </div>
          </div>
        )
      })}
    </div>
  );
}

ForecastComponent.displayName = 'MirrorWeatherForecastComponent';

ForecastComponent.defaultProps = { data: [] };

export default ForecastComponent;
