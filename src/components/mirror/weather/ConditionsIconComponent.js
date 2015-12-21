'use strict';

import React from 'react';

const ConditionsIconComponent = (props) => {
  switch (props.icon) {
    case 'clear-day':
      return <span><i className="icon-sun" /></span>;
    case 'clear-night':
      return <span><i className="icon-moon" /></span>;
    case 'rain':
      return (<span>
        <i className="icon-basecloud" />
        <i className="icon-rain" />
      </span>);
    case 'snow':
      return (<span>
        <i className="icon-basecloud" />
        <i className="icon-snow" />
      </span>);
    case 'sleet':
      return (<span>
        <i className="icon-basecloud" />
        <i className="icon-sleet" />
      </span>);
    case 'wind':
      return (<span>
        <i className="icon-basecloud" />
        <i className="icon-wind" />
      </span>);
    case 'fog':
      return <span><i className="icon-mist" /></span>;
    case 'cloudy':
      return <span><i className="icon-cloud" /></span>;
    case 'partly-cloudy-day':
      return (<span>
        <i className="icon-cloud" />
        <i className="icon-day" />
      </span>);
    case 'partly-cloudy-night':
      return (<span>
        <i className="icon-cloud" />
        <i className="icon-night" />
      </span>);
    default:
      return <span>{props.icon}</span>;
  }
};

ConditionsIconComponent.displayName = 'MirrorWeatherConditionsIconComponent';

export default ConditionsIconComponent;
