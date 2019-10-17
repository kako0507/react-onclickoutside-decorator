// eslint-disable-next-line import/no-unresolved
import React from 'react';

function nop() {}

function onClickOutside(ComposedComponent) {
  // Use a parallel array because we can't use
  // objects as keys, they get toString-coerced
  const registeredComponents = [];
  const handlers = [];

  const IGNORE_CLASS = 'ignore-react-onclickoutside';

  return class OnClickOutside extends React.Component {
    node = React.createRef();

    componentDidMount() {
      this.outsideClickHandler = ((localNode, eventHandler = nop) => (
        (evt) => {
          const source = evt.target;
          if (
            !localNode.contains(source)
         && !source.classList.contains(IGNORE_CLASS)
          ) {
            eventHandler(evt);
          }
        }
      ))(this.node.current, this.props.onClickOutside);

      const pos = registeredComponents.length;
      registeredComponents.push(this);
      handlers[pos] = this.outsideClickHandler;

      // If there is a truthy disableOnClickOutside property for this
      // component, don't immediately start listening for outside events.
      if (!this.props.disableOnClickOutside) {
        this.enableOnClickOutside();
      }
    }

    componentDidUpdate(prevProps) {
      const { disableOnClickOutside } = this.props;
      if (prevProps.disableOnClickOutside && !disableOnClickOutside) {
        this.enableOnClickOutside();
      } else if (!prevProps.disableOnClickOutside && disableOnClickOutside) {
        this.disableOnClickOutside();
      }
    }

    componentWillUnmount() {
      this.disableOnClickOutside();
      this.outsideClickHandler = false;
      const pos = registeredComponents.indexOf(this);
      if (pos > -1) {
        if (handlers[pos]) {
          // clean up so we don't leak memory
          handlers.splice(pos, 1);
          registeredComponents.splice(pos, 1);
        }
      }
    }

    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */
    enableOnClickOutside() {
      const fn = this.outsideClickHandler;
      document.addEventListener('mousedown', fn);
      document.addEventListener('touchstart', fn);
    }

    /**
     * Can be called to explicitly disable event listening
     * for clicks and touches outside of this element.
     */
    disableOnClickOutside() {
      const fn = this.outsideClickHandler;
      document.removeEventListener('mousedown', fn);
      document.removeEventListener('touchstart', fn);
    }

    render() {
      return (
        <div ref={this.node}>
          <ComposedComponent
            {...this.props}
          />
        </div>
      );
    }
  };
}

export default onClickOutside;
