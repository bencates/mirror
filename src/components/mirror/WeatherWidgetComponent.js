'use strict';

import React from 'react';
import jsonp from 'jsonp';

require('styles/mirror/WeatherWidget.sass');

class WeatherWidgetComponent extends React.Component {
  constructor() {
    super();

    this.state = { forecast: {} };
  }

  componentDidMount() {
    this.interval = setInterval(this.getForecast.bind(this), (5 * 60 * 1000))
    this.getForecast();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="weather-widget-component">
        <code><pre>{JSON.stringify(this.state.forecast, null, 2)}</pre></code>
      </div>
    );
  }

  getForecast() {
    const apiKey = 'ef3403aaef2ffb7dee4cd2788975ee9f';

    const url = `https://api.forecast.io/forecast/${apiKey}/${this.props.latitude},${this.props.longitude}`;

    jsonp(url, (err, forecast) => {
      if (!err) {
        this.setState({ forecast: forecast })
      }
    });
  }
}

WeatherWidgetComponent.displayName = 'MirrorWeatherWidgetComponent';

WeatherWidgetComponent.defaultProps = {
  latitude: 39.763322,
  longitude: -105.004191
};

export default WeatherWidgetComponent;
