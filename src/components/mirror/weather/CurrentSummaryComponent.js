'use strict';

import React from 'react';

require('styles/mirror/weather/CurrentSummary.sass');

const conditionsIcon = icon => {
  // for "Forecast Font"

  switch (icon) {
    case 'clear-day':
      return <span><i className="icon-sun" /></span>;
    case 'clear-night':
      return <span><i className="icon-moon" /></span>;
    case 'rain':
      return (<span>
        <i className="basecloud" />
        <i className="icon-rain" />
      </span>);
    case 'snow':
      return (<span>
        <i className="basecloud" />
        <i className="icon-snow" />
      </span>);
    case 'sleet':
      return (<span>
        <i className="basecloud" />
        <i className="icon-sleet" />
      </span>);
    case 'wind':
      return <span><i className="icon-wind" /></span>;
    case 'fog':
      return <span><i className="icon-mist" /></span>;
    case 'cloudy':
      return <span><i className="basecloud" /></span>;
    case 'partly-cloudy-day':
      return (<span>
        <i className="basecloud" />
        <i className="icon-day" />
      </span>);
    case 'partly-cloudy-night':
      return (<span>
        <i className="basecloud" />
        <i className="icon-night" />
      </span>);
    default:
      return <span>{icon}</span>;
  }
};

const CurrentSummaryComponent = props => {
  const data = props.data;

  return (
    <div className="weather-current-summary-component">
      <div className="conditions">
        {conditionsIcon(data.icon)}
      </div>
      <div className="temp">
        {data.temperature}
        <span className="unit">&deg;F</span>
      </div>
    </div>
  );
}

CurrentSummaryComponent.displayName = 'MirrorWeatherCurrentSummaryComponent';

export default CurrentSummaryComponent;
