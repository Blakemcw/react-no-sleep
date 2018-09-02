import React, { Component } from 'react';

import ReactNoSleep from 'react-no-sleep';

export default class App extends Component {
  render() {
    return (
      <div>
        <ReactNoSleep>
          {({ isOn, enable, disable }) => (
            <button onClick={isOn ? disable : enable}>
              {isOn ? 'on' : 'off'}
            </button>
          )}
        </ReactNoSleep>
      </div>
    );
  }
}
