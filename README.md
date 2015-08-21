# An onClickOutside decorator for React components

This is a React decorator(high-order component) that you can add to your React components if you want to have them listen for clicks that occur somewhere in the document, outside of the element itself (for instance, if you need to hide a menu when people click anywhere else on your page).

Note that this decorator relies on the .classList property, which is supported by all modern browsers, but not by no longer supported browsers like IE8 or even older. For setups that need to support deprecated browsers, using something like the MDN classlist-polyfill will be necessary.

Forked from [react-onclickoutside](https://github.com/Pomax/react-onclickoutside)

## Usage

```js
import React, {Component} from 'react';
import onClickOutside from 'react-onclickoutside-decorator';

class App extends Component {
  render() {
    return <Child onClickOutside={this.handleClickOutside}/>;
  }
  handleClickOutside() {
    console.log('onClickOutside');
  }
}

@onClickOutside
class Child extends Component {
  render() {
    return <div/>;
  }
}
```
