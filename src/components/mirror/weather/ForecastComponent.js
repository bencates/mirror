'use strict';

import React from 'react';

import ConditionsIconComponent from './ConditionsIconComponent';

require('styles/mirror/weather/Forecast.sass');

/*
"daily": {
  "summary": "No precipitation throughout the week, with temperatures falling to 38°F on Wednesday.",
  "icon": "clear-day",
  "data": [
    {
      "time": 1450422000,
      "summary": "Partly cloudy throughout the day.",
      "icon": "partly-cloudy-day",
      "sunriseTime": 1450448233,
      "sunsetTime": 1450481914,
      "moonPhase": 0.26,
      "precipIntensity": 0,
      "precipIntensityMax": 0,
      "precipProbability": 0,
      "temperatureMin": 11.72,
      "temperatureMinTime": 1450422000,
      "temperatureMax": 47.63,
      "temperatureMaxTime": 1450476000,
      "apparentTemperatureMin": 4.34,
      "apparentTemperatureMinTime": 1450422000,
      "apparentTemperatureMax": 47.63,
      "apparentTemperatureMaxTime": 1450476000,
      "dewPoint": 16.61,
      "humidity": 0.61,
      "windSpeed": 3.31,
      "windBearing": 224,
      "visibility": 5.71,
      "cloudCover": 0.34,
      "pressure": 1020.83,
      "ozone": 284.28
    }
  }
}
*/

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
    <div className="weather-forecast-component">
      {data.map(day => {
        return (
          <div className="weather-forecast-component-day">
            <span>{dayLetter(day.time)}</span>
            <div className="conditions">
              <ConditionsIconComponent icon={day.icon} />
            </div>
            <div>
              <span className="temp-lo">{Math.round(day.temperatureMin)}&deg;</span>
              /
              <span className="temp-hi">{Math.round(day.temperatureMax)}&deg;</span>
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
