'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function onClickOutside(ComposedComponent) {
  // Use a parallel array because we can't use
  // objects as keys, they get toString-coerced
  var registeredComponents = [];
  var handlers = [];

  var IGNORE_CLASS = 'ignore-react-onclickoutside';

  return (function (_React$Component) {
    _inherits(OnClickOutside, _React$Component);

    function OnClickOutside() {
      _classCallCheck(this, OnClickOutside);

      _get(Object.getPrototypeOf(OnClickOutside.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(OnClickOutside, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var fn = this.__outsideClickHandler = (function (localNode, eventHandler) {
          return function (evt) {
            var source = evt.target;
            var found = false;
            // If source=local then this event came from "somewhere"
            // inside and should be ignored. We could handle this with
            // a layered approach, too, but that requires going back to
            // thinking in terms of Dom node nesting, running counter
            // to React's "you shouldn't care about the DOM" philosophy.
            while (source.parentNode) {
              found = source === localNode || source.classList.contains(IGNORE_CLASS);
              if (found) return;
              source = source.parentNode;
            }
            eventHandler(evt);
          };
        })(_reactDom2['default'].findDOMNode(this), this.props.onClickOutside || function () {});

        var pos = registeredComponents.length;
        registeredComponents.push(this);
        handlers[pos] = fn;

        // If there is a truthy disableOnClickOutside property for this
        // component, don't immediately start listening for outside events.
        if (!this.props.disableOnClickOutside) {
          this.enableOnClickOutside();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.disableOnClickOutside();
        this.__outsideClickHandler = false;
        var pos = registeredComponents.indexOf(this);
        if (pos > -1) {
          if (handlers[pos]) {
            // clean up so we don't leak memory
            handlers.splice(pos, 1);
            registeredComponents.splice(pos, 1);
          }
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        if (!props.disableOnClickOutside && this.props.disableOnClickOutside) {
          this.enableOnClickOutside();
        } else if (props.disableOnClickOutside && !this.props.disableOnClickOutside) {
          this.disableOnClickOutside();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(ComposedComponent, this.props);
      }

      /**
       * Can be called to explicitly enable event listening
       * for clicks and touches outside of this element.
       */
    }, {
      key: 'enableOnClickOutside',
      value: function enableOnClickOutside() {
        var fn = this.__outsideClickHandler;
        document.addEventListener("mousedown", fn);
        document.addEventListener("touchstart", fn);
      }

      /**
       * Can be called to explicitly disable event listening
       * for clicks and touches outside of this element.
       */
    }, {
      key: 'disableOnClickOutside',
      value: function disableOnClickOutside(fn) {
        var fn = this.__outsideClickHandler;
        document.removeEventListener("mousedown", fn);
        document.removeEventListener("touchstart", fn);
      }
    }]);

    return OnClickOutside;
  })(_react2['default'].Component);
}

exports['default'] = onClickOutside;
module.exports = exports['default'];