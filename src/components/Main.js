require('normalize.css');
require('styles/App.css');

import React from 'react';

import ClockComponent from './mirror/ClockComponent';

const AppComponent = () => {
  return (
    <div className="index">
      <ClockComponent />
      <hr />
    </div>
  );
};

export default AppComponent;
