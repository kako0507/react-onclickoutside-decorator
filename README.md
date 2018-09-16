# An onClickOutside decorator for React components

This is a React decorator(high-order component) that you can add to your React components if you want to have them listen for clicks that occur somewhere in the document, outside of the element itself (for instance, if you need to hide a menu when people click anywhere else on your page).

Note that this decorator relies on the .classList property, which is supported by all modern browsers, but not by no longer supported browsers like IE8 or even older. For setups that need to support deprecated browsers, using something like the MDN classlist-polyfill will be necessary.

Forked from [react-onclickoutside](https://github.com/Pomax/react-onclickoutside)

## Installation

```
npm install react-onclickoutside-decorator
```

## Usage

```js
import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside-decorator';

class App extends Component {
  render() {
    return <Child onClickOutside={this.handleClickOutside} />;
  }
  handleClickOutside() {
    // ...
  }
}

@onClickOutside
class Child extends Component {
  render() {
    return <div />;
  }
}
```

## Regulate whether or not to listen for outside clicks

When using this decorator, a component has two functions that can be used to explicitly listen for, or do nothing with, outside clicks

- `enableOnClickOutside()` - Enables outside click listening by setting up the event listening bindings.
- `disableOnClickOutside()` - Disables outside click listening by explicitly removing the event listening bindings.
 
In addition, you can create a component that uses this decorator such that it has the code set up and ready to go, but not listening for outside click events until you explicitly issue its `enableOnClickOutside()`, by passing in a properly called `disableOnClickOutside`:

```js
import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside-decorator';

class App extends Component {
  render() {
    return (
      <Child
        onClickOutside={this.handleClickOutside}
        disableOnClickOutside
      />
    );
  }
  handleClickOutside() {
    // ...
  }
}

@onClickOutside
class Child extends Component {
  render() {
    return <div />;
  }
}
```

Marking elements as "skip over this one" during the event loop

If you want the decorator to ignore certain elements, then add the class ignore-react-onclickoutside to that element and the callback won't be invoked when the click happens inside elements with that class.
