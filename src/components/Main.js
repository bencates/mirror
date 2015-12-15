require('normalize.css');
require('styles/App.css');

import React from 'react';

import ClockComponent from './mirror/ClockComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ClockComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
