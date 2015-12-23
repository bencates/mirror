'use strict';

import React from 'react';

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
    this.interval = setInterval(this.tick.bind(this), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        {this.state.hours}:{this.state.minutes}
        <span className="diem">{this.state.pm ? 'pm' : 'am'}</span>
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
