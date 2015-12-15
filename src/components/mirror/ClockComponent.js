'use strict';

import React from 'react';

require('styles/mirror/Clock.sass');

class ClockComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      pm: false
    };
  }

  componentDidMount() {
    this.tick();
    setInterval(this.tick.bind(this), 100);
  }

  render() {
    return (
      <div className="clock-component">
        {this.state.hours}:{this.state.minutes}{/*:{this.state.seconds}*/}
        <span className="diem">{this.state.pm ? 'am' : 'pm'}</span>
      </div>
    );
  }

  tick() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let pm = false;

    if (hours > 12) {
      hours -= 12;
      pm = true;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      pm: pm
    });
  }
}

ClockComponent.displayName = 'MirrorClockComponent';

export default ClockComponent;
