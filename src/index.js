import React from 'react';
import ReactDOM from 'react-dom';

function onClickOutside(ComposedComponent) {
  // Use a parallel array because we can't use
  // objects as keys, they get toString-coerced
  var registeredComponents = [];
  var handlers = [];

  var IGNORE_CLASS = 'ignore-react-onclickoutside';

  return class OnClickOutside extends React.Component {
    componentDidMount() {
      let fn = this.__outsideClickHandler = (function(localNode, eventHandler) {
        return function(evt) {
          var source = evt.target;
          var found = false;
          // If source=local then this event came from "somewhere"
          // inside and should be ignored. We could handle this with
          // a layered approach, too, but that requires going back to
          // thinking in terms of Dom node nesting, running counter
          // to React's "you shouldn't care about the DOM" philosophy.
          while(source.parentNode) {
            found = (source === localNode || source.classList.contains(IGNORE_CLASS));
            if(found) return;
            source = source.parentNode;
          }
          eventHandler(evt);
        }
      }(ReactDOM.findDOMNode(this), (this.props.onClickOutside || () => {})));

      var pos = registeredComponents.length;
      registeredComponents.push(this);
      handlers[pos] = fn;

      // If there is a truthy disableOnClickOutside property for this
      // component, don't immediately start listening for outside events.
      if (!this.props.disableOnClickOutside) {
        this.enableOnClickOutside();
      }
    }

    componentWillUnmount() {
      this.disableOnClickOutside();
      this.__outsideClickHandler = false;
      var pos = registeredComponents.indexOf(this);
      if(pos > -1) {
        if (handlers[pos]) {
          // clean up so we don't leak memory
          handlers.splice(pos, 1);
          registeredComponents.splice(pos, 1);
        }
      }
    }

    componentWillReceiveProps(props) {
      if (!props.disableOnClickOutside && this.props.disableOnClickOutside) {
        this.enableOnClickOutside();
      }
      else if (props.disableOnClickOutside  && !this.props.disableOnClickOutside) {
        this.disableOnClickOutside();
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props}/>
      );
    }

    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */
    enableOnClickOutside() {
      var fn = this.__outsideClickHandler;
      document.addEventListener("mousedown", fn);
      document.addEventListener("touchstart", fn);
    }

    /**
     * Can be called to explicitly disable event listening
     * for clicks and touches outside of this element.
     */
    disableOnClickOutside(fn) {
      var fn = this.__outsideClickHandler;
      document.removeEventListener("mousedown", fn);
      document.removeEventListener("touchstart", fn);
    }
  }
}

export default onClickOutside;
