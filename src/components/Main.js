require('normalize.css');
require('styles/App.scss');

import React from 'react';

import ClockComponent from './mirror/ClockComponent';
import WeatherWidgetComponent from './mirror/WeatherWidgetComponent';

const AppComponent = () => {
  return (
    <div className="index">
      <ClockComponent />
      <WeatherWidgetComponent />
    </div>
  );
};

export default AppComponent;
