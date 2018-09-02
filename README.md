# react-no-sleep

> headless component to keep browser awake

[![NPM](https://img.shields.io/npm/v/react-no-sleep.svg)](https://www.npmjs.com/package/react-no-sleep) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-no-sleep
```

## Usage

```tsx
import * as React from 'react';

import ReactNoSleep from 'react-no-sleep';

class Example extends React.Component {
  render() {
    return (
      <ReactNoSleep>
        {({ isOn, enable, disable }) => (
          <button onClick={isOn ? disable : enable}>
            {isOn ? 'on' : 'off'}
          </button>
        )}
      </ReactNoSleep>
    );
  }
}
```

## License

MIT © [malcolm-kee](https://github.com/malcolm-kee)
