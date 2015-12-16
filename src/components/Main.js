require('normalize.css');
require('styles/App.css');

import React from 'react';

import ClockComponent from './mirror/ClockComponent';
import WeatherWidgetComponent from './mirror/WeatherWidgetComponent';

const AppComponent = () => {
  return (
    <div className="index">
      <ClockComponent />
      <hr />
      <WeatherWidgetComponent />
    </div>
  );
};

export default AppComponent;
