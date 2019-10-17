"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function nop() {}

function onClickOutside(ComposedComponent) {
  var _temp;

  // Use a parallel array because we can't use
  // objects as keys, they get toString-coerced
  var registeredComponents = [];
  var handlers = [];
  var IGNORE_CLASS = 'ignore-react-onclickoutside';
  return _temp =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(OnClickOutside, _React$Component);

    function OnClickOutside() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, OnClickOutside);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OnClickOutside)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "node", _react["default"].createRef());

      return _this;
    }

    _createClass(OnClickOutside, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.outsideClickHandler = function (localNode) {
          var eventHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nop;
          return function (evt) {
            var source = evt.target;

            if (!localNode.contains(source) && !source.classList.contains(IGNORE_CLASS)) {
              eventHandler(evt);
            }
          };
        }(this.node.current, this.props.onClickOutside);

        var pos = registeredComponents.length;
        registeredComponents.push(this);
        handlers[pos] = this.outsideClickHandler; // If there is a truthy disableOnClickOutside property for this
        // component, don't immediately start listening for outside events.

        if (!this.props.disableOnClickOutside) {
          this.enableOnClickOutside();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var disableOnClickOutside = this.props.disableOnClickOutside;

        if (prevProps.disableOnClickOutside && !disableOnClickOutside) {
          this.enableOnClickOutside();
        } else if (!prevProps.disableOnClickOutside && disableOnClickOutside) {
          this.disableOnClickOutside();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.disableOnClickOutside();
        this.outsideClickHandler = false;
        var pos = registeredComponents.indexOf(this);

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

    }, {
      key: "enableOnClickOutside",
      value: function enableOnClickOutside() {
        var fn = this.outsideClickHandler;
        document.addEventListener('mousedown', fn);
        document.addEventListener('touchstart', fn);
      }
      /**
       * Can be called to explicitly disable event listening
       * for clicks and touches outside of this element.
       */

    }, {
      key: "disableOnClickOutside",
      value: function disableOnClickOutside() {
        var fn = this.outsideClickHandler;
        document.removeEventListener('mousedown', fn);
        document.removeEventListener('touchstart', fn);
      }
    }, {
      key: "render",
      value: function render() {
        return _react["default"].createElement("div", {
          ref: this.node
        }, _react["default"].createElement(ComposedComponent, this.props));
      }
    }]);

    return OnClickOutside;
  }(_react["default"].Component), _temp;
}

var _default = onClickOutside;
exports["default"] = _default;