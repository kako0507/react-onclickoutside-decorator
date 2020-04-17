/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 115);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(26);
} else {}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = whitespace;
var fromCode = String.fromCharCode;
var re = /\s/; // Check if the given character code, or the character code at the first
// character, is a whitespace character.

function whitespace(character) {
  return re.test(typeof character === 'number' ? fromCode(character) : character.charAt(0));
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

exports = module.exports = trim;

function trim(str) {
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function (str) {
  return str.replace(/^\s*/, '');
};

exports.right = function (str) {
  return str.replace(/\s*$/, '');
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = decimal; // Check if the given character code, or the character code at the first
// character, is decimal.

function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character;
  return code >= 48 && code <= 57;
  /* 0-9 */
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit;

var visitParents = __webpack_require__(63);

var CONTINUE = visitParents.CONTINUE;
var SKIP = visitParents.SKIP;
var EXIT = visitParents.EXIT;
visit.CONTINUE = CONTINUE;
visit.SKIP = SKIP;
visit.EXIT = EXIT;

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  visitParents(tree, test, overload, reverse);

  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    var index = parent ? parent.children.indexOf(node) : null;
    return visitor(node, index, parent);
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(100)();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var legacy = __webpack_require__(52);

var invalid = __webpack_require__(53);

var decimal = __webpack_require__(4);

var hexadecimal = __webpack_require__(54);

var alphanumerical = __webpack_require__(55);

var decodeEntity = __webpack_require__(56);

module.exports = parseEntities;
var own = {}.hasOwnProperty;
var fromCharCode = String.fromCharCode;
var noop = Function.prototype; // Default settings.

var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}; // Characters.

var tab = 9; // '\t'

var lineFeed = 10; // '\n'

var formFeed = 12; //  '\f'

var space = 32; // ' '

var ampersand = 38; //  '&'

var semicolon = 59; //  ';'

var lessThan = 60; //  '<'

var equalsTo = 61; //  '='

var numberSign = 35; //  '#'

var uppercaseX = 88; //  'X'

var lowercaseX = 120; //  'x'

var replacementCharacter = 65533; // '�'
// Reference types.

var name = 'named';
var hexa = 'hexadecimal';
var deci = 'decimal'; // Map of bases.

var bases = {};
bases[hexa] = 16;
bases[deci] = 10; // Map of types to tests.
// Each type of character reference accepts different characters.
// This test is used to detect whether a reference has ended (as the semicolon
// is not strictly needed).

var tests = {};
tests[name] = alphanumerical;
tests[deci] = decimal;
tests[hexa] = hexadecimal; // Warning types.

var namedNotTerminated = 1;
var numericNotTerminated = 2;
var namedEmpty = 3;
var numericEmpty = 4;
var namedUnknown = 5;
var numericDisallowed = 6;
var numericProhibited = 7; // Warning messages.

var messages = {};
messages[namedNotTerminated] = 'Named character references must be terminated by a semicolon';
messages[numericNotTerminated] = 'Numeric character references must be terminated by a semicolon';
messages[namedEmpty] = 'Named character references cannot be empty';
messages[numericEmpty] = 'Numeric character references cannot be empty';
messages[namedUnknown] = 'Named character references must be known';
messages[numericDisallowed] = 'Numeric character references cannot be disallowed';
messages[numericProhibited] = 'Numeric character references cannot be outside the permissible Unicode range'; // Wrap to ensure clean parameters are given to `parse`.

function parseEntities(value, options) {
  var settings = {};
  var option;
  var key;

  if (!options) {
    options = {};
  }

  for (key in defaults) {
    option = options[key];
    settings[key] = option === null || option === undefined ? defaults[key] : option;
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || [];
    settings.position = settings.position.start;
  }

  return parse(value, settings);
} // Parse entities.
// eslint-disable-next-line complexity


function parse(value, settings) {
  var additional = settings.additional;
  var nonTerminated = settings.nonTerminated;
  var handleText = settings.text;
  var handleReference = settings.reference;
  var handleWarning = settings.warning;
  var textContext = settings.textContext;
  var referenceContext = settings.referenceContext;
  var warningContext = settings.warningContext;
  var pos = settings.position;
  var indent = settings.indent || [];
  var length = value.length;
  var index = 0;
  var lines = -1;
  var column = pos.column || 1;
  var line = pos.line || 1;
  var queue = '';
  var result = [];
  var entityCharacters;
  var namedEntity;
  var terminated;
  var characters;
  var character;
  var reference;
  var following;
  var warning;
  var reason;
  var output;
  var entity;
  var begin;
  var start;
  var type;
  var test;
  var prev;
  var next;
  var diff;
  var end;

  if (typeof additional === 'string') {
    additional = additional.charCodeAt(0);
  } // Cache the current point.


  prev = now(); // Wrap `handleWarning`.

  warning = handleWarning ? parseError : noop; // Ensure the algorithm walks over the first character and the end (inclusive).

  index--;
  length++;

  while (++index < length) {
    // If the previous character was a newline.
    if (character === lineFeed) {
      column = indent[lines] || 1;
    }

    character = value.charCodeAt(index);

    if (character === ampersand) {
      following = value.charCodeAt(index + 1); // The behaviour depends on the identity of the next character.

      if (following === tab || following === lineFeed || following === formFeed || following === space || following === ampersand || following === lessThan || following !== following || additional && following === additional) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character);
        column++;
        continue;
      }

      start = index + 1;
      begin = start;
      end = start;

      if (following === numberSign) {
        // Numerical entity.
        end = ++begin; // The behaviour further depends on the next character.

        following = value.charCodeAt(end);

        if (following === uppercaseX || following === lowercaseX) {
          // ASCII hex digits.
          type = hexa;
          end = ++begin;
        } else {
          // ASCII digits.
          type = deci;
        }
      } else {
        // Named entity.
        type = name;
      }

      entityCharacters = '';
      entity = '';
      characters = '';
      test = tests[type];
      end--;

      while (++end < length) {
        following = value.charCodeAt(end);

        if (!test(following)) {
          break;
        }

        characters += fromCharCode(following); // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.

        if (type === name && own.call(legacy, characters)) {
          entityCharacters = characters;
          entity = legacy[characters];
        }
      }

      terminated = value.charCodeAt(end) === semicolon;

      if (terminated) {
        end++;
        namedEntity = type === name ? decodeEntity(characters) : false;

        if (namedEntity) {
          entityCharacters = characters;
          entity = namedEntity;
        }
      }

      diff = 1 + end - start;

      if (!terminated && !nonTerminated) {// Empty.
      } else if (!characters) {
        // An empty (possible) entity is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== name) {
          warning(numericEmpty, diff);
        }
      } else if (type === name) {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !entity) {
          warning(namedUnknown, 1);
        } else {
          // If theres something after an entity name which is not known, cap
          // the reference.
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length;
            diff = 1 + end - begin;
            terminated = false;
          } // If the reference is not terminated, warn.


          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty;

            if (settings.attribute) {
              following = value.charCodeAt(end);

              if (following === equalsTo) {
                warning(reason, diff);
                entity = null;
              } else if (alphanumerical(following)) {
                entity = null;
              } else {
                warning(reason, diff);
              }
            } else {
              warning(reason, diff);
            }
          }
        }

        reference = entity;
      } else {
        if (!terminated) {
          // All non-terminated numeric entities are not rendered, and trigger a
          // warning.
          warning(numericNotTerminated, diff);
        } // When terminated and number, parse as either hexadecimal or decimal.


        reference = parseInt(characters, bases[type]); // Trigger a warning when the parsed number is prohibited, and replace
        // with replacement character.

        if (prohibited(reference)) {
          warning(numericProhibited, diff);
          reference = fromCharCode(replacementCharacter);
        } else if (reference in invalid) {
          // Trigger a warning when the parsed number is disallowed, and replace
          // by an alternative.
          warning(numericDisallowed, diff);
          reference = invalid[reference];
        } else {
          // Parse the number.
          output = ''; // Trigger a warning when the parsed number should not be used.

          if (disallowed(reference)) {
            warning(numericDisallowed, diff);
          } // Stringify the number.


          if (reference > 0xffff) {
            reference -= 0x10000;
            output += fromCharCode(reference >>> (10 & 0x3ff) | 0xd800);
            reference = 0xdc00 | reference & 0x3ff;
          }

          reference = output + fromCharCode(reference);
        }
      } // Found it!
      // First eat the queued characters as normal text, then eat an entity.


      if (reference) {
        flush();
        prev = now();
        index = end - 1;
        column += end - start + 1;
        result.push(reference);
        next = now();
        next.offset++;

        if (handleReference) {
          handleReference.call(referenceContext, reference, {
            start: prev,
            end: next
          }, value.slice(start - 1, end));
        }

        prev = next;
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end);
        queue += characters;
        column += characters.length;
        index = end - 1;
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (character === 10 // Line feed
      ) {
          line++;
          lines++;
          column = 0;
        }

      if (character === character) {
        queue += fromCharCode(character);
        column++;
      } else {
        flush();
      }
    }
  } // Return the reduced nodes, and any possible warnings.


  return result.join(''); // Get current position.

  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    };
  } // “Throw” a parse-error: a warning.


  function parseError(code, offset) {
    var position = now();
    position.column += offset;
    position.offset += offset;
    handleWarning.call(warningContext, messages[code], position, code);
  } // Flush `queue` (normal text).
  // Macro invoked before each entity and at the end of `value`.
  // Does nothing when `queue` is empty.


  function flush() {
    if (queue) {
      result.push(queue);

      if (handleText) {
        handleText.call(textContext, queue, {
          start: prev,
          end: now()
        });
      }

      queue = '';
    }
  }
} // Check if `character` is outside the permissible unicode range.


function prohibited(code) {
  return code >= 0xd800 && code <= 0xdfff || code > 0x10ffff;
} // Check if `character` is disallowed.


function disallowed(code) {
  return code >= 0x0001 && code <= 0x0008 || code === 0x000b || code >= 0x000d && code <= 0x001f || code >= 0x007f && code <= 0x009f || code >= 0xfdd0 && code <= 0xfdef || (code & 0xffff) === 0xffff || (code & 0xffff) === 0xfffe;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

/**
 * Results cache
 */

var res = '';
var cache;
/**
 * Expose `repeat`
 */

module.exports = repeat;
/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  } // cover common, quick use cases


  if (num === 1) return str;
  if (num === 2) return str + str;
  var max = str.length * num;

  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trimTrailingLines;
var line = '\n'; // Remove final newline characters from `value`.

function trimTrailingLines(value) {
  var val = String(value);
  var index = val.length;

  while (val.charAt(--index) === line) {// Empty
  }

  return val.slice(0, index + 1);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = interrupt;

function interrupt(interruptors, tokenizers, ctx, params) {
  var bools = ['pedantic', 'commonmark'];
  var count = bools.length;
  var length = interruptors.length;
  var index = -1;
  var interruptor;
  var config;
  var fn;
  var offset;
  var bool;
  var ignore;

  while (++index < length) {
    interruptor = interruptors[index];
    config = interruptor[1] || {};
    fn = interruptor[0];
    offset = -1;
    ignore = false;

    while (++offset < count) {
      bool = bools[offset];

      if (config[bool] !== undefined && config[bool] !== ctx.options[bool]) {
        ignore = true;
        break;
      }
    }

    if (ignore) {
      continue;
    }

    if (tokenizers[fn].apply(ctx, params)) {
      return true;
    }
  }

  return false;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var collapseWhiteSpace = __webpack_require__(76);

module.exports = normalize;
/* Normalize an identifier.  Collapses multiple white space
 * characters into a single space, and removes casing. */

function normalize(value) {
  return collapseWhiteSpace(value).toLowerCase();
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;

  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];

    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
} // path.resolve([from ...], to)
// posix version


exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd(); // Skip empty and invalid entries

    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  } // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)
  // Normalize the path


  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}; // path.normalize(path)
// posix version


exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/'; // Normalize the path

  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }

  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
}; // posix version


exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
}; // posix version


exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }

    return p;
  }).join('/'));
}; // path.relative(from, to)
// posix version


exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;

    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;

    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;

  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];

  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47
  /*/*/
  ;
  var end = -1;
  var matchedSlash = true;

  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';

  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }

  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';
  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47
    /*/*/
    ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
} // Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here


exports.basename = function (path, ext) {
  var f = basename(path);

  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }

  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find

  var preDotState = 0;

  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }

    if (code === 46
    /*.*/
    ) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
      } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }

  return path.slice(startDot, end);
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }

  return res;
} // String.prototype.substr - negative index don't work in IE8


var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = alphabetical; // Check if the given character code, or the character code at the first
// character, is alphabetical.

function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character;
  return code >= 97 && code <= 122 ||
  /* a-z */
  code >= 65 && code <= 90
  /* A-Z */
  ;
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  position: true,
  gfm: true,
  commonmark: false,
  footnotes: false,
  pedantic: false,
  blocks: __webpack_require__(60)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = indentation;
/* Map of characters, and their column length,
 * which can be used as indentation. */

var characters = {
  ' ': 1,
  '\t': 4
};
/* Gets indentation information for a line. */

function indentation(value) {
  var index = 0;
  var indent = 0;
  var character = value.charAt(index);
  var stops = {};
  var size;

  while (character in characters) {
    size = characters[character];
    indent += size;

    if (size > 1) {
      indent = Math.floor(indent / size) * size;
    }

    stops[indent] = index;
    character = value.charAt(++index);
  }

  return {
    indent: indent,
    stops: stops
  };
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var unquoted = '[^"\'=<>`\\u0000-\\u0020]+';
var singleQuoted = '\'[^\']*\'';
var doubleQuoted = '"[^"]*"';
var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')';
var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing = '<[?].*?[?]>';
var declaration = '<![A-Za-z]+\\s+[^>]*>';
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');
exports.tag = new RegExp('^(?:' + openTag + '|' + closeTag + '|' + comment + '|' + processing + '|' + declaration + '|' + cdata + ')');

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('<', fromIndex);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var link = value.indexOf('[', fromIndex);
  var image = value.indexOf('![', fromIndex);

  if (image === -1) {
    return link;
  }
  /* Link can never be `-1` if an image is found, so we don’t need
   * to check for that :) */


  return link < image ? link : image;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if (false) {}

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(27);
} else {}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getGithubCornerStyles = __webpack_require__(30);

var _getGithubCornerStyles2 = _interopRequireDefault(_getGithubCornerStyles);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var githubCornerStyleId = '____GITHUB_CORNER_SUPER_SECRET___';
var githubCornerStyles = (0, _getGithubCornerStyles2.default)();
/**
 * A react component based off of:
 *   https://github.com/tholman/github-corners
 *
 * @class GithubCorner
 * @extends React.Component
 * @example
 * <GithubCorner href="http://skratchdot.com/" />
 */

var GithubCorner = function (_Component) {
  _inherits(GithubCorner, _Component);

  function GithubCorner() {
    _classCallCheck(this, GithubCorner);

    return _possibleConstructorReturn(this, (GithubCorner.__proto__ || Object.getPrototypeOf(GithubCorner)).apply(this, arguments));
  }

  _createClass(GithubCorner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!document.getElementById(githubCornerStyleId)) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        style.id = githubCornerStyleId;

        if (style.styleSheet) {
          style.styleSheet.cssText = githubCornerStyles;
        } else {
          style.appendChild(document.createTextNode(githubCornerStyles));
        }

        head.appendChild(style);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          href = _props.href,
          size = _props.size,
          direction = _props.direction,
          octoColor = _props.octoColor,
          bannerColor = _props.bannerColor,
          ariaLabel = _props.ariaLabel,
          className = _props.className,
          svgStyle = _props.svgStyle,
          otherProps = _objectWithoutProperties(_props, ['href', 'size', 'direction', 'octoColor', 'bannerColor', 'ariaLabel', 'className', 'svgStyle']);

      var mainStyle = {
        position: 'absolute',
        top: 0,
        fill: octoColor
      };
      var armStyle = {};
      var pathBanner = '';
      var pathArm = '';
      var pathBody = '';

      if (direction === 'left') {
        pathBanner = 'M250 0L135 115h-15l-12 27L0 250V0z';
        pathArm = 'M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16';
        pathBody = 'M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z';
        mainStyle.left = 0;
        armStyle.WebkitTransformOrigin = '120px 144px';
        armStyle.transformOrigin = '120px 144px';
      } else {
        pathBanner = 'M0 0l115 115h15l12 27 108 108V0z';
        pathArm = 'M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16';
        pathBody = 'M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z';
        mainStyle.right = 0;
        armStyle.WebkitTransformOrigin = '130px 106px';
        armStyle.transformOrigin = '130px 106px';
      }

      var additionalClass = typeof className === 'string' ? ' ' + className : '';
      return _react2.default.createElement('a', _extends({}, otherProps, {
        href: href,
        className: 'github-corner' + additionalClass,
        'aria-label': ariaLabel
      }), _react2.default.createElement('svg', {
        width: size,
        height: size,
        viewBox: '0 0 250 250',
        style: _extends({}, mainStyle, svgStyle)
      }, _react2.default.createElement('path', {
        className: 'octo-banner',
        d: pathBanner,
        fill: bannerColor
      }), _react2.default.createElement('path', {
        className: 'octo-arm',
        d: pathArm,
        style: armStyle
      }), _react2.default.createElement('path', {
        className: 'octo-body',
        d: pathBody
      })));
    }
  }]);

  return GithubCorner;
}(_react.Component);

GithubCorner.defaultProps = {
  href: '/',
  size: 80,
  direction: 'right',
  octoColor: '#fff',
  bannerColor: '#151513',
  ariaLabel: 'Open GitHub project'
};
exports.default = GithubCorner;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var xtend = __webpack_require__(2);

var unified = __webpack_require__(31);

var parse = __webpack_require__(44);

var PropTypes = __webpack_require__(6);

var addListMetadata = __webpack_require__(102);

var naiveHtml = __webpack_require__(104);

var disallowNode = __webpack_require__(105);

var astToReact = __webpack_require__(106);

var wrapTableRows = __webpack_require__(109);

var getDefinitions = __webpack_require__(110);

var uriTransformer = __webpack_require__(111);

var defaultRenderers = __webpack_require__(112);

var symbols = __webpack_require__(113);

var allTypes = Object.keys(defaultRenderers);

var ReactMarkdown = function ReactMarkdown(props) {
  var src = props.source || props.children || '';
  var parserOptions = props.parserOptions;

  if (props.allowedTypes && props.disallowedTypes) {
    throw new Error('Only one of `allowedTypes` and `disallowedTypes` should be defined');
  }

  var renderers = xtend(defaultRenderers, props.renderers);
  var plugins = [[parse, parserOptions]].concat(props.plugins || []);
  var parser = plugins.reduce(applyParserPlugin, unified());
  var rawAst = parser.parse(src);
  var renderProps = xtend(props, {
    renderers: renderers,
    definitions: getDefinitions(rawAst)
  });
  var astPlugins = determineAstPlugins(props); // eslint-disable-next-line no-sync

  var transformedAst = parser.runSync(rawAst);
  var ast = astPlugins.reduce(function (node, plugin) {
    return plugin(node, renderProps);
  }, transformedAst);
  return astToReact(ast, renderProps);
};

function applyParserPlugin(parser, plugin) {
  return Array.isArray(plugin) ? parser.use.apply(parser, _toConsumableArray(plugin)) : parser.use(plugin);
}

function determineAstPlugins(props) {
  var plugins = [wrapTableRows, addListMetadata()];
  var disallowedTypes = props.disallowedTypes;

  if (props.allowedTypes) {
    disallowedTypes = allTypes.filter(function (type) {
      return type !== 'root' && props.allowedTypes.indexOf(type) === -1;
    });
  }

  var removalMethod = props.unwrapDisallowed ? 'unwrap' : 'remove';

  if (disallowedTypes && disallowedTypes.length > 0) {
    plugins.push(disallowNode.ofType(disallowedTypes, removalMethod));
  }

  if (props.allowNode) {
    plugins.push(disallowNode.ifNotMatch(props.allowNode, removalMethod));
  }

  var renderHtml = !props.escapeHtml && !props.skipHtml;
  var hasHtmlParser = (props.astPlugins || []).some(function (item) {
    var plugin = Array.isArray(item) ? item[0] : item;
    return plugin.identity === symbols.HtmlParser;
  });

  if (renderHtml && !hasHtmlParser) {
    plugins.push(naiveHtml);
  }

  return props.astPlugins ? plugins.concat(props.astPlugins) : plugins;
}

ReactMarkdown.defaultProps = {
  renderers: {},
  escapeHtml: true,
  skipHtml: false,
  sourcePos: false,
  rawSourcePos: false,
  transformLinkUri: uriTransformer,
  astPlugins: [],
  plugins: [],
  parserOptions: {}
};
ReactMarkdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  children: PropTypes.string,
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  escapeHtml: PropTypes.bool,
  skipHtml: PropTypes.bool,
  allowNode: PropTypes.func,
  allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transformImageUri: PropTypes.func,
  astPlugins: PropTypes.arrayOf(PropTypes.func),
  unwrapDisallowed: PropTypes.bool,
  renderers: PropTypes.object,
  plugins: PropTypes.array,
  parserOptions: PropTypes.object
};
ReactMarkdown.types = allTypes;
ReactMarkdown.renderers = defaultRenderers;
ReactMarkdown.uriTransformer = uriTransformer;
module.exports = ReactMarkdown;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function nop() {}

function onClickOutside(ComposedComponent) {
  var _temp; // Use a parallel array because we can't use
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

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.10.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var h = __webpack_require__(12),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    aa = n ? Symbol.for("react.suspense_list") : 60120,
    ba = n ? Symbol.for("react.memo") : 60115,
    ca = n ? Symbol.for("react.lazy") : 60116;

n && Symbol.for("react.fundamental");
n && Symbol.for("react.responder");
n && Symbol.for("react.scope");
var z = "function" === typeof Symbol && Symbol.iterator;

function A(a) {
  for (var b = a.message, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, d = 1; d < arguments.length; d++) c += "&args[]=" + encodeURIComponent(arguments[d]);

  a.message = "Minified React error #" + b + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";
  return a;
}

var B = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    C = {};

function D(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = C;
  this.updater = c || B;
}

D.prototype.isReactComponent = {};

D.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw A(Error(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

D.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function E() {}

E.prototype = D.prototype;

function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = C;
  this.updater = c || B;
}

var G = F.prototype = new E();
G.constructor = F;
h(G, D.prototype);
G.isPureReactComponent = !0;
var H = {
  current: null
},
    I = {
  suspense: null
},
    J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, c) {
  var d,
      e = {},
      g = null,
      l = null;
  if (null != b) for (d in void 0 !== b.ref && (l = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, d) && !L.hasOwnProperty(d) && (e[d] = b[d]);
  var f = arguments.length - 2;
  if (1 === f) e.children = c;else if (1 < f) {
    for (var k = Array(f), m = 0; m < f; m++) k[m] = arguments[m + 2];

    e.children = k;
  }
  if (a && a.defaultProps) for (d in f = a.defaultProps, f) void 0 === e[d] && (e[d] = f[d]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: l,
    props: e,
    _owner: J.current
  };
}

function da(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function N(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var O = /\/+/g,
    P = [];

function Q(a, b, c, d) {
  if (P.length) {
    var e = P.pop();
    e.result = a;
    e.keyPrefix = b;
    e.func = c;
    e.context = d;
    e.count = 0;
    return e;
  }

  return {
    result: a,
    keyPrefix: b,
    func: c,
    context: d,
    count: 0
  };
}

function R(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > P.length && P.push(a);
}

function S(a, b, c, d) {
  var e = typeof a;
  if ("undefined" === e || "boolean" === e) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (e) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return c(d, a, "" === b ? "." + T(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var l = 0; l < a.length; l++) {
    e = a[l];
    var f = b + T(e, l);
    g += S(e, f, c, d);
  } else if (null === a || "object" !== typeof a ? f = null : (f = z && a[z] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), l = 0; !(e = a.next()).done;) e = e.value, f = b + T(e, l++), g += S(e, f, c, d);else if ("object" === e) throw c = "" + a, A(Error(31), "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, "");
  return g;
}

function U(a, b, c) {
  return null == a ? 0 : S(a, "", b, c);
}

function T(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ea(a, b) {
  a.func.call(a.context, b, a.count++);
}

function fa(a, b, c) {
  var d = a.result,
      e = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? V(a, d, c, function (a) {
    return a;
  }) : null != a && (N(a) && (a = da(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + c)), d.push(a));
}

function V(a, b, c, d, e) {
  var g = "";
  null != c && (g = ("" + c).replace(O, "$&/") + "/");
  b = Q(b, g, d, e);
  U(a, fa, b);
  R(b);
}

function W() {
  var a = H.current;
  if (null === a) throw A(Error(321));
  return a;
}

var X = {
  Children: {
    map: function (a, b, c) {
      if (null == a) return a;
      var d = [];
      V(a, d, null, b, c);
      return d;
    },
    forEach: function (a, b, c) {
      if (null == a) return a;
      b = Q(null, null, b, c);
      U(a, ea, b);
      R(b);
    },
    count: function (a) {
      return U(a, function () {
        return null;
      }, null);
    },
    toArray: function (a) {
      var b = [];
      V(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function (a) {
      if (!N(a)) throw A(Error(143));
      return a;
    }
  },
  createRef: function () {
    return {
      current: null
    };
  },
  Component: D,
  PureComponent: F,
  createContext: function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function (a) {
    return {
      $$typeof: x,
      render: a
    };
  },
  lazy: function (a) {
    return {
      $$typeof: ca,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function (a, b) {
    return {
      $$typeof: ba,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  useCallback: function (a, b) {
    return W().useCallback(a, b);
  },
  useContext: function (a, b) {
    return W().useContext(a, b);
  },
  useEffect: function (a, b) {
    return W().useEffect(a, b);
  },
  useImperativeHandle: function (a, b, c) {
    return W().useImperativeHandle(a, b, c);
  },
  useDebugValue: function () {},
  useLayoutEffect: function (a, b) {
    return W().useLayoutEffect(a, b);
  },
  useMemo: function (a, b) {
    return W().useMemo(a, b);
  },
  useReducer: function (a, b, c) {
    return W().useReducer(a, b, c);
  },
  useRef: function (a) {
    return W().useRef(a);
  },
  useState: function (a) {
    return W().useState(a);
  },
  Fragment: r,
  Profiler: u,
  StrictMode: t,
  Suspense: y,
  unstable_SuspenseList: aa,
  createElement: M,
  cloneElement: function (a, b, c) {
    if (null === a || void 0 === a) throw A(Error(267), a);
    var d = h({}, a.props),
        e = a.key,
        g = a.ref,
        l = a._owner;

    if (null != b) {
      void 0 !== b.ref && (g = b.ref, l = J.current);
      void 0 !== b.key && (e = "" + b.key);
      if (a.type && a.type.defaultProps) var f = a.type.defaultProps;

      for (k in b) K.call(b, k) && !L.hasOwnProperty(k) && (d[k] = void 0 === b[k] && void 0 !== f ? f[k] : b[k]);
    }

    var k = arguments.length - 2;
    if (1 === k) d.children = c;else if (1 < k) {
      f = Array(k);

      for (var m = 0; m < k; m++) f[m] = arguments[m + 2];

      d.children = f;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: e,
      ref: g,
      props: d,
      _owner: l
    };
  },
  createFactory: function (a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: N,
  version: "16.10.2",
  unstable_withSuspenseConfig: function (a, b) {
    var c = I.suspense;
    I.suspense = void 0 === b ? null : b;

    try {
      a();
    } finally {
      I.suspense = c;
    }
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher: H,
    ReactCurrentBatchConfig: I,
    ReactCurrentOwner: J,
    IsSomeRendererActing: {
      current: !1
    },
    assign: h
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
module.exports = Z.default || Z;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.10.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/


var aa = __webpack_require__(0),
    n = __webpack_require__(12),
    r = __webpack_require__(28);

function t(a) {
  for (var b = a.message, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, d = 1; d < arguments.length; d++) c += "&args[]=" + encodeURIComponent(arguments[d]);

  a.message = "Minified React error #" + b + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";
  return a;
}

if (!aa) throw t(Error(227));
var ba = null,
    ca = {};

function da() {
  if (ba) for (var a in ca) {
    var b = ca[a],
        c = ba.indexOf(a);
    if (!(-1 < c)) throw t(Error(96), a);

    if (!ea[c]) {
      if (!b.extractEvents) throw t(Error(97), a);
      ea[c] = b;
      c = b.eventTypes;

      for (var d in c) {
        var e = void 0;
        var f = c[d],
            g = b,
            h = d;
        if (fa.hasOwnProperty(h)) throw t(Error(99), h);
        fa[h] = f;
        var k = f.phasedRegistrationNames;

        if (k) {
          for (e in k) k.hasOwnProperty(e) && ha(k[e], g, h);

          e = !0;
        } else f.registrationName ? (ha(f.registrationName, g, h), e = !0) : e = !1;

        if (!e) throw t(Error(98), d, a);
      }
    }
  }
}

function ha(a, b, c) {
  if (ia[a]) throw t(Error(100), a);
  ia[a] = b;
  ja[a] = b.eventTypes[c].dependencies;
}

var ea = [],
    fa = {},
    ia = {},
    ja = {};

function ka(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);

  try {
    b.apply(c, l);
  } catch (m) {
    this.onError(m);
  }
}

var la = !1,
    ma = null,
    na = !1,
    oa = null,
    pa = {
  onError: function (a) {
    la = !0;
    ma = a;
  }
};

function qa(a, b, c, d, e, f, g, h, k) {
  la = !1;
  ma = null;
  ka.apply(pa, arguments);
}

function ra(a, b, c, d, e, f, g, h, k) {
  qa.apply(this, arguments);

  if (la) {
    if (la) {
      var l = ma;
      la = !1;
      ma = null;
    } else throw t(Error(198));

    na || (na = !0, oa = l);
  }
}

var sa = null,
    ta = null,
    ua = null;

function va(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = ua(c);
  ra(d, b, void 0, a);
  a.currentTarget = null;
}

function wa(a, b) {
  if (null == b) throw t(Error(30));
  if (null == a) return b;

  if (Array.isArray(a)) {
    if (Array.isArray(b)) return a.push.apply(a, b), a;
    a.push(b);
    return a;
  }

  return Array.isArray(b) ? [a].concat(b) : [a, b];
}

function xa(a, b, c) {
  Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
}

var ya = null;

function za(a) {
  if (a) {
    var b = a._dispatchListeners,
        c = a._dispatchInstances;
    if (Array.isArray(b)) for (var d = 0; d < b.length && !a.isPropagationStopped(); d++) va(a, b[d], c[d]);else b && va(a, b, c);
    a._dispatchListeners = null;
    a._dispatchInstances = null;
    a.isPersistent() || a.constructor.release(a);
  }
}

function Aa(a) {
  null !== a && (ya = wa(ya, a));
  a = ya;
  ya = null;

  if (a) {
    xa(a, za);
    if (ya) throw t(Error(95));
    if (na) throw a = oa, na = !1, oa = null, a;
  }
}

var Ba = {
  injectEventPluginOrder: function (a) {
    if (ba) throw t(Error(101));
    ba = Array.prototype.slice.call(a);
    da();
  },
  injectEventPluginsByName: function (a) {
    var b = !1,
        c;

    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];

      if (!ca.hasOwnProperty(c) || ca[c] !== d) {
        if (ca[c]) throw t(Error(102), c);
        ca[c] = d;
        b = !0;
      }
    }

    b && da();
  }
};

function Ca(a, b) {
  var c = a.stateNode;
  if (!c) return null;
  var d = sa(c);
  if (!d) return null;
  c = d[b];

  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;

    default:
      a = !1;
  }

  if (a) return null;
  if (c && "function" !== typeof c) throw t(Error(231), b, typeof c);
  return c;
}

var Da = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
Da.hasOwnProperty("ReactCurrentDispatcher") || (Da.ReactCurrentDispatcher = {
  current: null
});
Da.hasOwnProperty("ReactCurrentBatchConfig") || (Da.ReactCurrentBatchConfig = {
  suspense: null
});
var Ea = /^(.*)[\\\/]/,
    x = "function" === typeof Symbol && Symbol.for,
    Fa = x ? Symbol.for("react.element") : 60103,
    Ga = x ? Symbol.for("react.portal") : 60106,
    Ha = x ? Symbol.for("react.fragment") : 60107,
    Ia = x ? Symbol.for("react.strict_mode") : 60108,
    Ja = x ? Symbol.for("react.profiler") : 60114,
    Ka = x ? Symbol.for("react.provider") : 60109,
    La = x ? Symbol.for("react.context") : 60110,
    Ma = x ? Symbol.for("react.concurrent_mode") : 60111,
    Na = x ? Symbol.for("react.forward_ref") : 60112,
    Oa = x ? Symbol.for("react.suspense") : 60113,
    Pa = x ? Symbol.for("react.suspense_list") : 60120,
    Qa = x ? Symbol.for("react.memo") : 60115,
    Ra = x ? Symbol.for("react.lazy") : 60116;
x && Symbol.for("react.fundamental");
x && Symbol.for("react.responder");
x && Symbol.for("react.scope");
var Sa = "function" === typeof Symbol && Symbol.iterator;

function Ta(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Sa && a[Sa] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

function Ua(a) {
  if (-1 === a._status) {
    a._status = 0;
    var b = a._ctor;
    b = b();
    a._result = b;
    b.then(function (b) {
      0 === a._status && (b = b.default, a._status = 1, a._result = b);
    }, function (b) {
      0 === a._status && (a._status = 2, a._result = b);
    });
  }
}

function Va(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;

  switch (a) {
    case Ha:
      return "Fragment";

    case Ga:
      return "Portal";

    case Ja:
      return "Profiler";

    case Ia:
      return "StrictMode";

    case Oa:
      return "Suspense";

    case Pa:
      return "SuspenseList";
  }

  if ("object" === typeof a) switch (a.$$typeof) {
    case La:
      return "Context.Consumer";

    case Ka:
      return "Context.Provider";

    case Na:
      var b = a.render;
      b = b.displayName || b.name || "";
      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

    case Qa:
      return Va(a.type);

    case Ra:
      if (a = 1 === a._status ? a._result : null) return Va(a);
  }
  return null;
}

function Wa(a) {
  var b = "";

  do {
    a: switch (a.tag) {
      case 3:
      case 4:
      case 6:
      case 7:
      case 10:
      case 9:
        var c = "";
        break a;

      default:
        var d = a._debugOwner,
            e = a._debugSource,
            f = Va(a.type);
        c = null;
        d && (c = Va(d.type));
        d = f;
        f = "";
        e ? f = " (at " + e.fileName.replace(Ea, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
        c = "\n    in " + (d || "Unknown") + f;
    }

    b += c;
    a = a.return;
  } while (a);

  return b;
}

var Xa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
    Ya = null,
    Za = null,
    $a = null;

function ab(a) {
  if (a = ta(a)) {
    if ("function" !== typeof Ya) throw t(Error(280));
    var b = sa(a.stateNode);
    Ya(a.stateNode, a.type, b);
  }
}

function bb(a) {
  Za ? $a ? $a.push(a) : $a = [a] : Za = a;
}

function cb() {
  if (Za) {
    var a = Za,
        b = $a;
    $a = Za = null;
    ab(a);
    if (b) for (a = 0; a < b.length; a++) ab(b[a]);
  }
}

function db(a, b) {
  return a(b);
}

function eb(a, b, c, d) {
  return a(b, c, d);
}

function fb() {}

var gb = db,
    hb = !1,
    ib = !1;

function jb() {
  if (null !== Za || null !== $a) fb(), cb();
}

new Map();
new Map();
new Map();
var kb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    lb = Object.prototype.hasOwnProperty,
    mb = {},
    nb = {};

function ob(a) {
  if (lb.call(nb, a)) return !0;
  if (lb.call(mb, a)) return !1;
  if (kb.test(a)) return nb[a] = !0;
  mb[a] = !0;
  return !1;
}

function pb(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;

  switch (typeof b) {
    case "function":
    case "symbol":
      return !0;

    case "boolean":
      if (d) return !1;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;

    default:
      return !1;
  }
}

function qb(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pb(a, b, c, d)) return !0;
  if (d) return !1;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;

    case 4:
      return !1 === b;

    case 5:
      return isNaN(b);

    case 6:
      return isNaN(b) || 1 > b;
  }
  return !1;
}

function B(a, b, c, d, e, f) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
}

var C = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
  C[a] = new B(a, 0, !1, a, null, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
  var b = a[0];
  C[b] = new B(b, 1, !1, a[1], null, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  C[a] = new B(a, 2, !1, a.toLowerCase(), null, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  C[a] = new B(a, 2, !1, a, null, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
  C[a] = new B(a, 3, !1, a.toLowerCase(), null, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  C[a] = new B(a, 3, !0, a, null, !1);
});
["capture", "download"].forEach(function (a) {
  C[a] = new B(a, 4, !1, a, null, !1);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  C[a] = new B(a, 6, !1, a, null, !1);
});
["rowSpan", "start"].forEach(function (a) {
  C[a] = new B(a, 5, !1, a.toLowerCase(), null, !1);
});
var rb = /[\-:]([a-z])/g;

function sb(a) {
  return a[1].toUpperCase();
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
  var b = a.replace(rb, sb);
  C[b] = new B(b, 1, !1, a, null, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
  var b = a.replace(rb, sb);
  C[b] = new B(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b = a.replace(rb, sb);
  C[b] = new B(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1);
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  C[a] = new B(a, 1, !1, a.toLowerCase(), null, !1);
});
C.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0);
["src", "href", "action", "formAction"].forEach(function (a) {
  C[a] = new B(a, 1, !1, a.toLowerCase(), null, !0);
});

function tb(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;

    default:
      return "";
  }
}

function ub(a, b, c, d) {
  var e = C.hasOwnProperty(b) ? C[b] : null;
  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
  f || (qb(b, c, e, d) && (c = null), d || null === e ? ob(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}

function vb(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}

function xb(a) {
  var b = vb(a) ? "checked" : "value",
      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
      d = "" + a[b];

  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get,
        f = c.set;
    Object.defineProperty(a, b, {
      configurable: !0,
      get: function () {
        return e.call(this);
      },
      set: function (a) {
        d = "" + a;
        f.call(this, a);
      }
    });
    Object.defineProperty(a, b, {
      enumerable: c.enumerable
    });
    return {
      getValue: function () {
        return d;
      },
      setValue: function (a) {
        d = "" + a;
      },
      stopTracking: function () {
        a._valueTracker = null;
        delete a[b];
      }
    };
  }
}

function yb(a) {
  a._valueTracker || (a._valueTracker = xb(a));
}

function zb(a) {
  if (!a) return !1;
  var b = a._valueTracker;
  if (!b) return !0;
  var c = b.getValue();
  var d = "";
  a && (d = vb(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), !0) : !1;
}

function Ab(a, b) {
  var c = b.checked;
  return n({}, b, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != c ? c : a._wrapperState.initialChecked
  });
}

function Bb(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue,
      d = null != b.checked ? b.checked : b.defaultChecked;
  c = tb(null != b.value ? b.value : c);
  a._wrapperState = {
    initialChecked: d,
    initialValue: c,
    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
  };
}

function Cb(a, b) {
  b = b.checked;
  null != b && ub(a, "checked", b, !1);
}

function Db(a, b) {
  Cb(a, b);
  var c = tb(b.value),
      d = b.type;
  if (null != c) {
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? Eb(a, b.type, c) : b.hasOwnProperty("defaultValue") && Eb(a, b.type, tb(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}

function Gb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }

  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !a.defaultChecked;
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}

function Eb(a, b, c) {
  if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}

function Hb(a) {
  var b = "";
  aa.Children.forEach(a, function (a) {
    null != a && (b += a);
  });
  return b;
}

function Ib(a, b) {
  a = n({
    children: void 0
  }, b);
  if (b = Hb(b.children)) a.children = b;
  return a;
}

function Jb(a, b, c, d) {
  a = a.options;

  if (b) {
    b = {};

    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;

    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
  } else {
    c = "" + tb(c);
    b = null;

    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;
        d && (a[e].defaultSelected = !0);
        return;
      }

      null !== b || a[e].disabled || (b = a[e]);
    }

    null !== b && (b.selected = !0);
  }
}

function Kb(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw t(Error(91));
  return n({}, b, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a._wrapperState.initialValue
  });
}

function Lb(a, b) {
  var c = b.value;

  if (null == c) {
    c = b.defaultValue;
    b = b.children;

    if (null != b) {
      if (null != c) throw t(Error(92));

      if (Array.isArray(b)) {
        if (!(1 >= b.length)) throw t(Error(93));
        b = b[0];
      }

      c = b;
    }

    null == c && (c = "");
  }

  a._wrapperState = {
    initialValue: tb(c)
  };
}

function Mb(a, b) {
  var c = tb(b.value),
      d = tb(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}

function Nb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}

var Ob = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg"
};

function Pb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";

    case "math":
      return "http://www.w3.org/1998/Math/MathML";

    default:
      return "http://www.w3.org/1999/xhtml";
  }
}

function Qb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? Pb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}

var Rb,
    Sb = function (a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function () {
      return a(b, c, d, e);
    });
  } : a;
}(function (a, b) {
  if (a.namespaceURI !== Ob.svg || "innerHTML" in a) a.innerHTML = b;else {
    Rb = Rb || document.createElement("div");
    Rb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";

    for (b = Rb.firstChild; a.firstChild;) a.removeChild(a.firstChild);

    for (; b.firstChild;) a.appendChild(b.firstChild);
  }
});

function Tb(a, b) {
  if (b) {
    var c = a.firstChild;

    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }

  a.textContent = b;
}

function Ub(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}

var Vb = {
  animationend: Ub("Animation", "AnimationEnd"),
  animationiteration: Ub("Animation", "AnimationIteration"),
  animationstart: Ub("Animation", "AnimationStart"),
  transitionend: Ub("Transition", "TransitionEnd")
},
    Wb = {},
    Xb = {};
Xa && (Xb = document.createElement("div").style, "AnimationEvent" in window || (delete Vb.animationend.animation, delete Vb.animationiteration.animation, delete Vb.animationstart.animation), "TransitionEvent" in window || delete Vb.transitionend.transition);

function Yb(a) {
  if (Wb[a]) return Wb[a];
  if (!Vb[a]) return a;
  var b = Vb[a],
      c;

  for (c in b) if (b.hasOwnProperty(c) && c in Xb) return Wb[a] = b[c];

  return a;
}

var Zb = Yb("animationend"),
    $b = Yb("animationiteration"),
    ac = Yb("animationstart"),
    bc = Yb("transitionend"),
    dc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    ec = !1,
    fc = [],
    gc = null,
    hc = null,
    ic = null,
    jc = new Map(),
    kc = new Map(),
    lc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
    mc = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

function nc(a) {
  var b = oc(a);
  lc.forEach(function (c) {
    pc(c, a, b);
  });
  mc.forEach(function (c) {
    pc(c, a, b);
  });
}

function qc(a, b, c, d) {
  return {
    blockedOn: a,
    topLevelType: b,
    eventSystemFlags: c | 32,
    nativeEvent: d
  };
}

function rc(a, b) {
  switch (a) {
    case "focus":
    case "blur":
      gc = null;
      break;

    case "dragenter":
    case "dragleave":
      hc = null;
      break;

    case "mouseover":
    case "mouseout":
      ic = null;
      break;

    case "pointerover":
    case "pointerout":
      jc.delete(b.pointerId);
      break;

    case "gotpointercapture":
    case "lostpointercapture":
      kc.delete(b.pointerId);
  }
}

function sc(a, b, c, d, e) {
  if (null === a || a.nativeEvent !== e) return qc(b, c, d, e);
  a.eventSystemFlags |= d;
  return a;
}

function tc(a, b, c, d) {
  switch (b) {
    case "focus":
      return gc = sc(gc, a, b, c, d), !0;

    case "dragenter":
      return hc = sc(hc, a, b, c, d), !0;

    case "mouseover":
      return ic = sc(ic, a, b, c, d), !0;

    case "pointerover":
      var e = d.pointerId;
      jc.set(e, sc(jc.get(e) || null, a, b, c, d));
      return !0;

    case "gotpointercapture":
      return e = d.pointerId, kc.set(e, sc(kc.get(e) || null, a, b, c, d)), !0;
  }

  return !1;
}

function uc(a) {
  if (null !== a.blockedOn) return !1;
  var b = vc(a.topLevelType, a.eventSystemFlags, a.nativeEvent);
  return null !== b ? (a.blockedOn = b, !1) : !0;
}

function wc(a, b, c) {
  uc(a) && c.delete(b);
}

function xc() {
  for (ec = !1; 0 < fc.length;) {
    var a = fc[0];
    if (null !== a.blockedOn) break;
    var b = vc(a.topLevelType, a.eventSystemFlags, a.nativeEvent);
    null !== b ? a.blockedOn = b : fc.shift();
  }

  null !== gc && uc(gc) && (gc = null);
  null !== hc && uc(hc) && (hc = null);
  null !== ic && uc(ic) && (ic = null);
  jc.forEach(wc);
  kc.forEach(wc);
}

function yc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, ec || (ec = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, xc)));
}

function zc(a) {
  function b(b) {
    return yc(b, a);
  }

  if (0 < fc.length) {
    yc(fc[0], a);

    for (var c = 1; c < fc.length; c++) {
      var d = fc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }

  null !== gc && yc(gc, a);
  null !== hc && yc(hc, a);
  null !== ic && yc(ic, a);
  jc.forEach(b);
  kc.forEach(b);
}

var D = 0,
    E = 2,
    Ac = 1024;

function Bc(a) {
  var b = a,
      c = a;
  if (a.alternate) for (; b.return;) b = b.return;else {
    a = b;

    do b = a, (b.effectTag & (E | Ac)) !== D && (c = b.return), a = b.return; while (a);
  }
  return 3 === b.tag ? c : null;
}

function Cc(a) {
  if (Bc(a) !== a) throw t(Error(188));
}

function Dc(a) {
  var b = a.alternate;

  if (!b) {
    b = Bc(a);
    if (null === b) throw t(Error(188));
    return b !== a ? null : a;
  }

  for (var c = a, d = b;;) {
    var e = c.return;
    if (null === e) break;
    var f = e.alternate;

    if (null === f) {
      d = e.return;

      if (null !== d) {
        c = d;
        continue;
      }

      break;
    }

    if (e.child === f.child) {
      for (f = e.child; f;) {
        if (f === c) return Cc(e), a;
        if (f === d) return Cc(e), b;
        f = f.sibling;
      }

      throw t(Error(188));
    }

    if (c.return !== d.return) c = e, d = f;else {
      for (var g = !1, h = e.child; h;) {
        if (h === c) {
          g = !0;
          c = e;
          d = f;
          break;
        }

        if (h === d) {
          g = !0;
          d = e;
          c = f;
          break;
        }

        h = h.sibling;
      }

      if (!g) {
        for (h = f.child; h;) {
          if (h === c) {
            g = !0;
            c = f;
            d = e;
            break;
          }

          if (h === d) {
            g = !0;
            d = f;
            c = e;
            break;
          }

          h = h.sibling;
        }

        if (!g) throw t(Error(189));
      }
    }
    if (c.alternate !== d) throw t(Error(190));
  }

  if (3 !== c.tag) throw t(Error(188));
  return c.stateNode.current === c ? a : b;
}

function Ec(a) {
  a = Dc(a);
  if (!a) return null;

  for (var b = a;;) {
    if (5 === b.tag || 6 === b.tag) return b;
    if (b.child) b.child.return = b, b = b.child;else {
      if (b === a) break;

      for (; !b.sibling;) {
        if (!b.return || b.return === a) return null;
        b = b.return;
      }

      b.sibling.return = b.return;
      b = b.sibling;
    }
  }

  return null;
}

function Fc(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}

function Gc(a) {
  do a = a.return; while (a && 5 !== a.tag);

  return a ? a : null;
}

function Hc(a, b, c) {
  if (b = Ca(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = wa(c._dispatchListeners, b), c._dispatchInstances = wa(c._dispatchInstances, a);
}

function Ic(a) {
  if (a && a.dispatchConfig.phasedRegistrationNames) {
    for (var b = a._targetInst, c = []; b;) c.push(b), b = Gc(b);

    for (b = c.length; 0 < b--;) Hc(c[b], "captured", a);

    for (b = 0; b < c.length; b++) Hc(c[b], "bubbled", a);
  }
}

function Jc(a, b, c) {
  a && c && c.dispatchConfig.registrationName && (b = Ca(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = wa(c._dispatchListeners, b), c._dispatchInstances = wa(c._dispatchInstances, a));
}

function Kc(a) {
  a && a.dispatchConfig.registrationName && Jc(a._targetInst, null, a);
}

function Lc(a) {
  xa(a, Ic);
}

function Mc() {
  return !0;
}

function Nc() {
  return !1;
}

function F(a, b, c, d) {
  this.dispatchConfig = a;
  this._targetInst = b;
  this.nativeEvent = c;
  a = this.constructor.Interface;

  for (var e in a) a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);

  this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? Mc : Nc;
  this.isPropagationStopped = Nc;
  return this;
}

n(F.prototype, {
  preventDefault: function () {
    this.defaultPrevented = !0;
    var a = this.nativeEvent;
    a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = Mc);
  },
  stopPropagation: function () {
    var a = this.nativeEvent;
    a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = Mc);
  },
  persist: function () {
    this.isPersistent = Mc;
  },
  isPersistent: Nc,
  destructor: function () {
    var a = this.constructor.Interface,
        b;

    for (b in a) this[b] = null;

    this.nativeEvent = this._targetInst = this.dispatchConfig = null;
    this.isPropagationStopped = this.isDefaultPrevented = Nc;
    this._dispatchInstances = this._dispatchListeners = null;
  }
});
F.Interface = {
  type: null,
  target: null,
  currentTarget: function () {
    return null;
  },
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function (a) {
    return a.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

F.extend = function (a) {
  function b() {}

  function c() {
    return d.apply(this, arguments);
  }

  var d = this;
  b.prototype = d.prototype;
  var e = new b();
  n(e, c.prototype);
  c.prototype = e;
  c.prototype.constructor = c;
  c.Interface = n({}, d.Interface, a);
  c.extend = d.extend;
  Oc(c);
  return c;
};

Oc(F);

function Pc(a, b, c, d) {
  if (this.eventPool.length) {
    var e = this.eventPool.pop();
    this.call(e, a, b, c, d);
    return e;
  }

  return new this(a, b, c, d);
}

function Qc(a) {
  if (!(a instanceof this)) throw t(Error(279));
  a.destructor();
  10 > this.eventPool.length && this.eventPool.push(a);
}

function Oc(a) {
  a.eventPool = [];
  a.getPooled = Pc;
  a.release = Qc;
}

var Rc = F.extend({
  animationName: null,
  elapsedTime: null,
  pseudoElement: null
}),
    Sc = F.extend({
  clipboardData: function (a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  }
}),
    Tc = F.extend({
  view: null,
  detail: null
}),
    Uc = Tc.extend({
  relatedTarget: null
});

function Vc(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}

var Wc = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
},
    Xc = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
},
    Yc = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};

function Zc(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Yc[a]) ? !!b[a] : !1;
}

function $c() {
  return Zc;
}

var ad = Tc.extend({
  key: function (a) {
    if (a.key) {
      var b = Wc[a.key] || a.key;
      if ("Unidentified" !== b) return b;
    }

    return "keypress" === a.type ? (a = Vc(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Xc[a.keyCode] || "Unidentified" : "";
  },
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: $c,
  charCode: function (a) {
    return "keypress" === a.type ? Vc(a) : 0;
  },
  keyCode: function (a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  },
  which: function (a) {
    return "keypress" === a.type ? Vc(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }
}),
    bd = 0,
    cd = 0,
    dd = !1,
    fd = !1,
    gd = Tc.extend({
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  pageX: null,
  pageY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: $c,
  button: null,
  buttons: null,
  relatedTarget: function (a) {
    return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
  },
  movementX: function (a) {
    if ("movementX" in a) return a.movementX;
    var b = bd;
    bd = a.screenX;
    return dd ? "mousemove" === a.type ? a.screenX - b : 0 : (dd = !0, 0);
  },
  movementY: function (a) {
    if ("movementY" in a) return a.movementY;
    var b = cd;
    cd = a.screenY;
    return fd ? "mousemove" === a.type ? a.screenY - b : 0 : (fd = !0, 0);
  }
}),
    hd = gd.extend({
  pointerId: null,
  width: null,
  height: null,
  pressure: null,
  tangentialPressure: null,
  tiltX: null,
  tiltY: null,
  twist: null,
  pointerType: null,
  isPrimary: null
}),
    id = gd.extend({
  dataTransfer: null
}),
    jd = Tc.extend({
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: $c
}),
    kd = F.extend({
  propertyName: null,
  elapsedTime: null,
  pseudoElement: null
}),
    ld = gd.extend({
  deltaX: function (a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function (a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: null,
  deltaMode: null
}),
    md = [["blur", "blur", 0], ["cancel", "cancel", 0], ["click", "click", 0], ["close", "close", 0], ["contextmenu", "contextMenu", 0], ["copy", "copy", 0], ["cut", "cut", 0], ["auxclick", "auxClick", 0], ["dblclick", "doubleClick", 0], ["dragend", "dragEnd", 0], ["dragstart", "dragStart", 0], ["drop", "drop", 0], ["focus", "focus", 0], ["input", "input", 0], ["invalid", "invalid", 0], ["keydown", "keyDown", 0], ["keypress", "keyPress", 0], ["keyup", "keyUp", 0], ["mousedown", "mouseDown", 0], ["mouseup", "mouseUp", 0], ["paste", "paste", 0], ["pause", "pause", 0], ["play", "play", 0], ["pointercancel", "pointerCancel", 0], ["pointerdown", "pointerDown", 0], ["pointerup", "pointerUp", 0], ["ratechange", "rateChange", 0], ["reset", "reset", 0], ["seeked", "seeked", 0], ["submit", "submit", 0], ["touchcancel", "touchCancel", 0], ["touchend", "touchEnd", 0], ["touchstart", "touchStart", 0], ["volumechange", "volumeChange", 0], ["drag", "drag", 1], ["dragenter", "dragEnter", 1], ["dragexit", "dragExit", 1], ["dragleave", "dragLeave", 1], ["dragover", "dragOver", 1], ["mousemove", "mouseMove", 1], ["mouseout", "mouseOut", 1], ["mouseover", "mouseOver", 1], ["pointermove", "pointerMove", 1], ["pointerout", "pointerOut", 1], ["pointerover", "pointerOver", 1], ["scroll", "scroll", 1], ["toggle", "toggle", 1], ["touchmove", "touchMove", 1], ["wheel", "wheel", 1], ["abort", "abort", 2], [Zb, "animationEnd", 2], [$b, "animationIteration", 2], [ac, "animationStart", 2], ["canplay", "canPlay", 2], ["canplaythrough", "canPlayThrough", 2], ["durationchange", "durationChange", 2], ["emptied", "emptied", 2], ["encrypted", "encrypted", 2], ["ended", "ended", 2], ["error", "error", 2], ["gotpointercapture", "gotPointerCapture", 2], ["load", "load", 2], ["loadeddata", "loadedData", 2], ["loadedmetadata", "loadedMetadata", 2], ["loadstart", "loadStart", 2], ["lostpointercapture", "lostPointerCapture", 2], ["playing", "playing", 2], ["progress", "progress", 2], ["seeking", "seeking", 2], ["stalled", "stalled", 2], ["suspend", "suspend", 2], ["timeupdate", "timeUpdate", 2], [bc, "transitionEnd", 2], ["waiting", "waiting", 2]],
    nd = {},
    od = {},
    pd = 0;

for (; pd < md.length; pd++) {
  var qd = md[pd],
      rd = qd[0],
      sd = qd[1],
      td = qd[2],
      ud = "on" + (sd[0].toUpperCase() + sd.slice(1)),
      vd = {
    phasedRegistrationNames: {
      bubbled: ud,
      captured: ud + "Capture"
    },
    dependencies: [rd],
    eventPriority: td
  };
  nd[sd] = vd;
  od[rd] = vd;
}

var wd = {
  eventTypes: nd,
  getEventPriority: function (a) {
    a = od[a];
    return void 0 !== a ? a.eventPriority : 2;
  },
  extractEvents: function (a, b, c, d) {
    var e = od[a];
    if (!e) return null;

    switch (a) {
      case "keypress":
        if (0 === Vc(c)) return null;

      case "keydown":
      case "keyup":
        a = ad;
        break;

      case "blur":
      case "focus":
        a = Uc;
        break;

      case "click":
        if (2 === c.button) return null;

      case "auxclick":
      case "dblclick":
      case "mousedown":
      case "mousemove":
      case "mouseup":
      case "mouseout":
      case "mouseover":
      case "contextmenu":
        a = gd;
        break;

      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
        a = id;
        break;

      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
        a = jd;
        break;

      case Zb:
      case $b:
      case ac:
        a = Rc;
        break;

      case bc:
        a = kd;
        break;

      case "scroll":
        a = Tc;
        break;

      case "wheel":
        a = ld;
        break;

      case "copy":
      case "cut":
      case "paste":
        a = Sc;
        break;

      case "gotpointercapture":
      case "lostpointercapture":
      case "pointercancel":
      case "pointerdown":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
        a = hd;
        break;

      default:
        a = F;
    }

    b = a.getPooled(e, b, c, d);
    Lc(b);
    return b;
  }
},
    xd = wd.getEventPriority,
    zd = 10,
    Ad = [];

function Bd(a) {
  var b = a.targetInst,
      c = b;

  do {
    if (!c) {
      a.ancestors.push(c);
      break;
    }

    var d = c;
    if (3 === d.tag) d = d.stateNode.containerInfo;else {
      for (; d.return;) d = d.return;

      d = 3 !== d.tag ? null : d.stateNode.containerInfo;
    }
    if (!d) break;
    b = c.tag;
    5 !== b && 6 !== b || a.ancestors.push(c);
    c = Cd(d);
  } while (c);

  for (c = 0; c < a.ancestors.length; c++) {
    b = a.ancestors[c];
    var e = Fc(a.nativeEvent);
    d = a.topLevelType;

    for (var f = a.nativeEvent, g = a.eventSystemFlags, h = null, k = 0; k < ea.length; k++) {
      var l = ea[k];
      l && (l = l.extractEvents(d, b, f, e, g)) && (h = wa(h, l));
    }

    Aa(h);
  }
}

var Dd = !0;

function G(a, b) {
  Ed(b, a, !1);
}

function Ed(a, b, c) {
  switch (xd(b)) {
    case 0:
      var d = Fd.bind(null, b, 1);
      break;

    case 1:
      d = Gd.bind(null, b, 1);
      break;

    default:
      d = Hd.bind(null, b, 1);
  }

  c ? a.addEventListener(b, d, !0) : a.addEventListener(b, d, !1);
}

function Fd(a, b, c) {
  hb || fb();
  var d = Hd,
      e = hb;
  hb = !0;

  try {
    eb(d, a, b, c);
  } finally {
    (hb = e) || jb();
  }
}

function Gd(a, b, c) {
  Hd(a, b, c);
}

function Id(a, b, c, d) {
  if (Ad.length) {
    var e = Ad.pop();
    e.topLevelType = a;
    e.eventSystemFlags = b;
    e.nativeEvent = c;
    e.targetInst = d;
    a = e;
  } else a = {
    topLevelType: a,
    eventSystemFlags: b,
    nativeEvent: c,
    targetInst: d,
    ancestors: []
  };

  try {
    if (b = Bd, c = a, ib) b(c, void 0);else {
      ib = !0;

      try {
        gb(b, c, void 0);
      } finally {
        ib = !1, jb();
      }
    }
  } finally {
    a.topLevelType = null, a.nativeEvent = null, a.targetInst = null, a.ancestors.length = 0, Ad.length < zd && Ad.push(a);
  }
}

function Hd(a, b, c) {
  if (Dd) if (0 < fc.length && -1 < lc.indexOf(a)) a = qc(null, a, b, c), fc.push(a);else {
    var d = vc(a, b, c);
    null === d ? rc(a, c) : -1 < lc.indexOf(a) ? (a = qc(d, a, b, c), fc.push(a)) : tc(d, a, b, c) || (rc(a, c), Id(a, b, c, null));
  }
}

function vc(a, b, c) {
  var d = Fc(c),
      e = Cd(d);
  if (null !== e) if (d = Bc(e), null === d) e = null;else {
    var f = d.tag;

    if (13 === f) {
      a: {
        if (13 === d.tag && (e = d.memoizedState, null === e && (d = d.alternate, null !== d && (e = d.memoizedState)), null !== e)) {
          d = e.dehydrated;
          break a;
        }

        d = null;
      }

      if (null !== d) return d;
      e = null;
    } else if (3 === f) {
      if (d.stateNode.hydrate) return 3 === d.tag ? d.stateNode.containerInfo : null;
      e = null;
    } else d !== e && (e = null);
  }
  Id(a, b, c, e);
  return null;
}

function Jd(a) {
  if (!Xa) return !1;
  a = "on" + a;
  var b = a in document;
  b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);
  return b;
}

var Kd = new ("function" === typeof WeakMap ? WeakMap : Map)();

function oc(a) {
  var b = Kd.get(a);
  void 0 === b && (b = new Set(), Kd.set(a, b));
  return b;
}

function pc(a, b, c) {
  if (!c.has(a)) {
    switch (a) {
      case "scroll":
        Ed(b, "scroll", !0);
        break;

      case "focus":
      case "blur":
        Ed(b, "focus", !0);
        Ed(b, "blur", !0);
        c.add("blur");
        c.add("focus");
        break;

      case "cancel":
      case "close":
        Jd(a) && Ed(b, a, !0);
        break;

      case "invalid":
      case "submit":
      case "reset":
        break;

      default:
        -1 === dc.indexOf(a) && G(a, b);
    }

    c.add(a);
  }
}

var Ld = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
},
    Md = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ld).forEach(function (a) {
  Md.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    Ld[b] = Ld[a];
  });
});

function Nd(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || Ld.hasOwnProperty(a) && Ld[a] ? ("" + b).trim() : b + "px";
}

function Od(a, b) {
  a = a.style;

  for (var c in b) if (b.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"),
        e = Nd(c, b[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}

var Pd = n({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});

function Qd(a, b) {
  if (b) {
    if (Pd[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw t(Error(137), a, "");

    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw t(Error(60));
      if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw t(Error(61));
    }

    if (null != b.style && "object" !== typeof b.style) throw t(Error(62), "");
  }
}

function Rd(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;

  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;

    default:
      return !0;
  }
}

function Sd(a, b) {
  a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
  var c = oc(a);
  b = ja[b];

  for (var d = 0; d < b.length; d++) pc(b[d], a, c);
}

function Td() {}

function Ud(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;

  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}

function Vd(a) {
  for (; a && a.firstChild;) a = a.firstChild;

  return a;
}

function Wd(a, b) {
  var c = Vd(a);
  a = 0;

  for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return {
        node: c,
        offset: b - a
      };
      a = d;
    }

    a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }

        c = c.parentNode;
      }

      c = void 0;
    }

    c = Vd(c);
  }
}

function Xd(a, b) {
  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Xd(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}

function Yd() {
  for (var a = window, b = Ud(); b instanceof a.HTMLIFrameElement;) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = !1;
    }

    if (c) a = b.contentWindow;else break;
    b = Ud(a.document);
  }

  return b;
}

function Zd(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}

var $d = "$",
    ae = "/$",
    be = "$?",
    ce = "$!",
    de = null,
    ee = null;

function fe(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }

  return !1;
}

function ge(a, b) {
  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}

var he = "function" === typeof setTimeout ? setTimeout : void 0,
    ie = "function" === typeof clearTimeout ? clearTimeout : void 0;

function je(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
  }

  return a;
}

function ke(a) {
  a = a.previousSibling;

  for (var b = 0; a;) {
    if (8 === a.nodeType) {
      var c = a.data;

      if (c === $d || c === ce || c === be) {
        if (0 === b) return a;
        b--;
      } else c === ae && b++;
    }

    a = a.previousSibling;
  }

  return null;
}

var le = Math.random().toString(36).slice(2),
    me = "__reactInternalInstance$" + le,
    ne = "__reactEventHandlers$" + le,
    oe = "__reactContainere$" + le;

function Cd(a) {
  var b = a[me];
  if (b) return b;

  for (var c = a.parentNode; c;) {
    if (b = c[oe] || c[me]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child) for (a = ke(a); null !== a;) {
        if (c = a[me]) return c;
        a = ke(a);
      }
      return b;
    }

    a = c;
    c = a.parentNode;
  }

  return null;
}

function pe(a) {
  a = a[me] || a[oe];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}

function qe(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw t(Error(33));
}

function re(a) {
  return a[ne] || null;
}

var se = null,
    te = null,
    ue = null;

function ve() {
  if (ue) return ue;
  var a,
      b = te,
      c = b.length,
      d,
      e = "value" in se ? se.value : se.textContent,
      f = e.length;

  for (a = 0; a < c && b[a] === e[a]; a++);

  var g = c - a;

  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);

  return ue = e.slice(a, 1 < d ? 1 - d : void 0);
}

var we = F.extend({
  data: null
}),
    xe = F.extend({
  data: null
}),
    ye = [9, 13, 27, 32],
    ze = Xa && "CompositionEvent" in window,
    Ae = null;
Xa && "documentMode" in document && (Ae = document.documentMode);
var Be = Xa && "TextEvent" in window && !Ae,
    Ce = Xa && (!ze || Ae && 8 < Ae && 11 >= Ae),
    De = String.fromCharCode(32),
    Ee = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: "onBeforeInput",
      captured: "onBeforeInputCapture"
    },
    dependencies: ["compositionend", "keypress", "textInput", "paste"]
  },
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: "onCompositionEnd",
      captured: "onCompositionEndCapture"
    },
    dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: "onCompositionStart",
      captured: "onCompositionStartCapture"
    },
    dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: "onCompositionUpdate",
      captured: "onCompositionUpdateCapture"
    },
    dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
  }
},
    Fe = !1;

function Ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== ye.indexOf(b.keyCode);

    case "keydown":
      return 229 !== b.keyCode;

    case "keypress":
    case "mousedown":
    case "blur":
      return !0;

    default:
      return !1;
  }
}

function He(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}

var Ie = !1;

function Je(a, b) {
  switch (a) {
    case "compositionend":
      return He(b);

    case "keypress":
      if (32 !== b.which) return null;
      Fe = !0;
      return De;

    case "textInput":
      return a = b.data, a === De && Fe ? null : a;

    default:
      return null;
  }
}

function Ke(a, b) {
  if (Ie) return "compositionend" === a || !ze && Ge(a, b) ? (a = ve(), ue = te = se = null, Ie = !1, a) : null;

  switch (a) {
    case "paste":
      return null;

    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }

      return null;

    case "compositionend":
      return Ce && "ko" !== b.locale ? null : b.data;

    default:
      return null;
  }
}

var Le = {
  eventTypes: Ee,
  extractEvents: function (a, b, c, d) {
    var e;
    if (ze) b: {
      switch (a) {
        case "compositionstart":
          var f = Ee.compositionStart;
          break b;

        case "compositionend":
          f = Ee.compositionEnd;
          break b;

        case "compositionupdate":
          f = Ee.compositionUpdate;
          break b;
      }

      f = void 0;
    } else Ie ? Ge(a, c) && (f = Ee.compositionEnd) : "keydown" === a && 229 === c.keyCode && (f = Ee.compositionStart);
    f ? (Ce && "ko" !== c.locale && (Ie || f !== Ee.compositionStart ? f === Ee.compositionEnd && Ie && (e = ve()) : (se = d, te = "value" in se ? se.value : se.textContent, Ie = !0)), f = we.getPooled(f, b, c, d), e ? f.data = e : (e = He(c), null !== e && (f.data = e)), Lc(f), e = f) : e = null;
    (a = Be ? Je(a, c) : Ke(a, c)) ? (b = xe.getPooled(Ee.beforeInput, b, c, d), b.data = a, Lc(b)) : b = null;
    return null === e ? b : null === b ? e : [e, b];
  }
},
    Me = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};

function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!Me[a.type] : "textarea" === b ? !0 : !1;
}

var Oe = {
  change: {
    phasedRegistrationNames: {
      bubbled: "onChange",
      captured: "onChangeCapture"
    },
    dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
  }
};

function Pe(a, b, c) {
  a = F.getPooled(Oe.change, a, b, c);
  a.type = "change";
  bb(c);
  Lc(a);
  return a;
}

var Qe = null,
    Re = null;

function Se(a) {
  Aa(a);
}

function Te(a) {
  var b = qe(a);
  if (zb(b)) return a;
}

function Ue(a, b) {
  if ("change" === a) return b;
}

var Ve = !1;
Xa && (Ve = Jd("input") && (!document.documentMode || 9 < document.documentMode));

function We() {
  Qe && (Qe.detachEvent("onpropertychange", Xe), Re = Qe = null);
}

function Xe(a) {
  if ("value" === a.propertyName && Te(Re)) if (a = Pe(Re, a, Fc(a)), hb) Aa(a);else {
    hb = !0;

    try {
      db(Se, a);
    } finally {
      hb = !1, jb();
    }
  }
}

function Ye(a, b, c) {
  "focus" === a ? (We(), Qe = b, Re = c, Qe.attachEvent("onpropertychange", Xe)) : "blur" === a && We();
}

function Ze(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return Te(Re);
}

function $e(a, b) {
  if ("click" === a) return Te(b);
}

function af(a, b) {
  if ("input" === a || "change" === a) return Te(b);
}

var bf = {
  eventTypes: Oe,
  _isInputEventSupported: Ve,
  extractEvents: function (a, b, c, d) {
    var e = b ? qe(b) : window,
        f = e.nodeName && e.nodeName.toLowerCase();
    if ("select" === f || "input" === f && "file" === e.type) var g = Ue;else if (Ne(e)) {
      if (Ve) g = af;else {
        g = Ze;
        var h = Ye;
      }
    } else (f = e.nodeName) && "input" === f.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (g = $e);
    if (g && (g = g(a, b))) return Pe(g, c, d);
    h && h(a, e, b);
    "blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && Eb(e, "number", e.value);
  }
},
    cf = {
  mouseEnter: {
    registrationName: "onMouseEnter",
    dependencies: ["mouseout", "mouseover"]
  },
  mouseLeave: {
    registrationName: "onMouseLeave",
    dependencies: ["mouseout", "mouseover"]
  },
  pointerEnter: {
    registrationName: "onPointerEnter",
    dependencies: ["pointerout", "pointerover"]
  },
  pointerLeave: {
    registrationName: "onPointerLeave",
    dependencies: ["pointerout", "pointerover"]
  }
},
    df = {
  eventTypes: cf,
  extractEvents: function (a, b, c, d, e) {
    var f = "mouseover" === a || "pointerover" === a,
        g = "mouseout" === a || "pointerout" === a;
    if (f && 0 === (e & 32) && (c.relatedTarget || c.fromElement) || !g && !f) return null;
    e = d.window === d ? d : (e = d.ownerDocument) ? e.defaultView || e.parentWindow : window;

    if (g) {
      if (g = b, b = (b = c.relatedTarget || c.toElement) ? Cd(b) : null, null !== b && (f = Bc(b), b !== f || 5 !== b.tag && 6 !== b.tag)) b = null;
    } else g = null;

    if (g === b) return null;

    if ("mouseout" === a || "mouseover" === a) {
      var h = gd;
      var k = cf.mouseLeave;
      var l = cf.mouseEnter;
      var m = "mouse";
    } else if ("pointerout" === a || "pointerover" === a) h = hd, k = cf.pointerLeave, l = cf.pointerEnter, m = "pointer";

    a = null == g ? e : qe(g);
    e = null == b ? e : qe(b);
    k = h.getPooled(k, g, c, d);
    k.type = m + "leave";
    k.target = a;
    k.relatedTarget = e;
    c = h.getPooled(l, b, c, d);
    c.type = m + "enter";
    c.target = e;
    c.relatedTarget = a;
    d = g;
    m = b;
    if (d && m) a: {
      h = d;
      l = m;
      a = 0;

      for (g = h; g; g = Gc(g)) a++;

      g = 0;

      for (b = l; b; b = Gc(b)) g++;

      for (; 0 < a - g;) h = Gc(h), a--;

      for (; 0 < g - a;) l = Gc(l), g--;

      for (; a--;) {
        if (h === l || h === l.alternate) break a;
        h = Gc(h);
        l = Gc(l);
      }

      h = null;
    } else h = null;
    l = h;

    for (h = []; d && d !== l;) {
      a = d.alternate;
      if (null !== a && a === l) break;
      h.push(d);
      d = Gc(d);
    }

    for (d = []; m && m !== l;) {
      a = m.alternate;
      if (null !== a && a === l) break;
      d.push(m);
      m = Gc(m);
    }

    for (m = 0; m < h.length; m++) Jc(h[m], "bubbled", k);

    for (m = d.length; 0 < m--;) Jc(d[m], "captured", c);

    return [k, c];
  }
};

function ef(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}

var ff = "function" === typeof Object.is ? Object.is : ef,
    gf = Object.prototype.hasOwnProperty;

function hf(a, b) {
  if (ff(a, b)) return !0;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
  var c = Object.keys(a),
      d = Object.keys(b);
  if (c.length !== d.length) return !1;

  for (d = 0; d < c.length; d++) if (!gf.call(b, c[d]) || !ff(a[c[d]], b[c[d]])) return !1;

  return !0;
}

var jf = Xa && "documentMode" in document && 11 >= document.documentMode,
    kf = {
  select: {
    phasedRegistrationNames: {
      bubbled: "onSelect",
      captured: "onSelectCapture"
    },
    dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
  }
},
    lf = null,
    mf = null,
    nf = null,
    of = !1;

function pf(a, b) {
  var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
  if (of || null == lf || lf !== Ud(c)) return null;
  c = lf;
  "selectionStart" in c && Zd(c) ? c = {
    start: c.selectionStart,
    end: c.selectionEnd
  } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
    anchorNode: c.anchorNode,
    anchorOffset: c.anchorOffset,
    focusNode: c.focusNode,
    focusOffset: c.focusOffset
  });
  return nf && hf(nf, c) ? null : (nf = c, a = F.getPooled(kf.select, mf, a, b), a.type = "select", a.target = lf, Lc(a), a);
}

var qf = {
  eventTypes: kf,
  extractEvents: function (a, b, c, d) {
    var e = d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument,
        f;

    if (!(f = !e)) {
      a: {
        e = oc(e);
        f = ja.onSelect;

        for (var g = 0; g < f.length; g++) if (!e.has(f[g])) {
          e = !1;
          break a;
        }

        e = !0;
      }

      f = !e;
    }

    if (f) return null;
    e = b ? qe(b) : window;

    switch (a) {
      case "focus":
        if (Ne(e) || "true" === e.contentEditable) lf = e, mf = b, nf = null;
        break;

      case "blur":
        nf = mf = lf = null;
        break;

      case "mousedown":
        of = !0;
        break;

      case "contextmenu":
      case "mouseup":
      case "dragend":
        return of = !1, pf(c, d);

      case "selectionchange":
        if (jf) break;

      case "keydown":
      case "keyup":
        return pf(c, d);
    }

    return null;
  }
};
Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
sa = re;
ta = pe;
ua = qe;
Ba.injectEventPluginsByName({
  SimpleEventPlugin: wd,
  EnterLeaveEventPlugin: df,
  ChangeEventPlugin: bf,
  SelectEventPlugin: qf,
  BeforeInputEventPlugin: Le
});
new Set();
var rf = [],
    sf = -1;

function H(a) {
  0 > sf || (a.current = rf[sf], rf[sf] = null, sf--);
}

function I(a, b) {
  sf++;
  rf[sf] = a.current;
  a.current = b;
}

var tf = {},
    J = {
  current: tf
},
    K = {
  current: !1
},
    uf = tf;

function vf(a, b) {
  var c = a.type.contextTypes;
  if (!c) return tf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {},
      f;

  for (f in c) e[f] = b[f];

  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}

function N(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}

function wf(a) {
  H(K, a);
  H(J, a);
}

function xf(a) {
  H(K, a);
  H(J, a);
}

function zf(a, b, c) {
  if (J.current !== tf) throw t(Error(168));
  I(J, b, a);
  I(K, c, a);
}

function Af(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();

  for (var e in d) if (!(e in a)) throw t(Error(108), Va(b) || "Unknown", e);

  return n({}, c, {}, d);
}

function Bf(a) {
  var b = a.stateNode;
  b = b && b.__reactInternalMemoizedMergedChildContext || tf;
  uf = J.current;
  I(J, b, a);
  I(K, K.current, a);
  return !0;
}

function Cf(a, b, c) {
  var d = a.stateNode;
  if (!d) throw t(Error(169));
  c ? (b = Af(a, b, uf), d.__reactInternalMemoizedMergedChildContext = b, H(K, a), H(J, a), I(J, b, a)) : H(K, a);
  I(K, c, a);
}

var Df = r.unstable_runWithPriority,
    Ef = r.unstable_scheduleCallback,
    Ff = r.unstable_cancelCallback,
    Gf = r.unstable_shouldYield,
    Hf = r.unstable_requestPaint,
    If = r.unstable_now,
    Jf = r.unstable_getCurrentPriorityLevel,
    Kf = r.unstable_ImmediatePriority,
    Lf = r.unstable_UserBlockingPriority,
    Mf = r.unstable_NormalPriority,
    Nf = r.unstable_LowPriority,
    Of = r.unstable_IdlePriority,
    Pf = {},
    Qf = void 0 !== Hf ? Hf : function () {},
    Rf = null,
    Sf = null,
    Tf = !1,
    Uf = If(),
    Vf = 1E4 > Uf ? If : function () {
  return If() - Uf;
};

function Wf() {
  switch (Jf()) {
    case Kf:
      return 99;

    case Lf:
      return 98;

    case Mf:
      return 97;

    case Nf:
      return 96;

    case Of:
      return 95;

    default:
      throw t(Error(332));
  }
}

function Xf(a) {
  switch (a) {
    case 99:
      return Kf;

    case 98:
      return Lf;

    case 97:
      return Mf;

    case 96:
      return Nf;

    case 95:
      return Of;

    default:
      throw t(Error(332));
  }
}

function Yf(a, b) {
  a = Xf(a);
  return Df(a, b);
}

function Zf(a, b, c) {
  a = Xf(a);
  return Ef(a, b, c);
}

function $f(a) {
  null === Rf ? (Rf = [a], Sf = Ef(Kf, ag)) : Rf.push(a);
  return Pf;
}

function bg() {
  if (null !== Sf) {
    var a = Sf;
    Sf = null;
    Ff(a);
  }

  ag();
}

function ag() {
  if (!Tf && null !== Rf) {
    Tf = !0;
    var a = 0;

    try {
      var b = Rf;
      Yf(99, function () {
        for (; a < b.length; a++) {
          var c = b[a];

          do c = c(!0); while (null !== c);
        }
      });
      Rf = null;
    } catch (c) {
      throw null !== Rf && (Rf = Rf.slice(a + 1)), Ef(Kf, bg), c;
    } finally {
      Tf = !1;
    }
  }
}

function cg(a, b) {
  if (a && a.defaultProps) {
    b = n({}, b);
    a = a.defaultProps;

    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
  }

  return b;
}

var dg = {
  current: null
},
    eg = null,
    fg = null,
    gg = null;

function hg() {
  gg = fg = eg = null;
}

function ig(a, b) {
  var c = a.type._context;
  I(dg, c._currentValue, a);
  c._currentValue = b;
}

function jg(a) {
  var b = dg.current;
  H(dg, a);
  a.type._context._currentValue = b;
}

function kg(a, b) {
  for (; null !== a;) {
    var c = a.alternate;
    if (a.childExpirationTime < b) a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b;else break;
    a = a.return;
  }
}

function lg(a, b) {
  eg = a;
  gg = fg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (a.expirationTime >= b && (mg = !0), a.firstContext = null);
}

function ng(a, b) {
  if (gg !== a && !1 !== b && 0 !== b) {
    if ("number" !== typeof b || 1073741823 === b) gg = a, b = 1073741823;
    b = {
      context: a,
      observedBits: b,
      next: null
    };

    if (null === fg) {
      if (null === eg) throw t(Error(308));
      fg = b;
      eg.dependencies = {
        expirationTime: 0,
        firstContext: b,
        responders: null
      };
    } else fg = fg.next = b;
  }

  return a._currentValue;
}

var og = !1;

function pg(a) {
  return {
    baseState: a,
    firstUpdate: null,
    lastUpdate: null,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
}

function qg(a) {
  return {
    baseState: a.baseState,
    firstUpdate: a.firstUpdate,
    lastUpdate: a.lastUpdate,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
}

function rg(a, b) {
  return {
    expirationTime: a,
    suspenseConfig: b,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
    nextEffect: null
  };
}

function sg(a, b) {
  null === a.lastUpdate ? a.firstUpdate = a.lastUpdate = b : (a.lastUpdate.next = b, a.lastUpdate = b);
}

function tg(a, b) {
  var c = a.alternate;

  if (null === c) {
    var d = a.updateQueue;
    var e = null;
    null === d && (d = a.updateQueue = pg(a.memoizedState));
  } else d = a.updateQueue, e = c.updateQueue, null === d ? null === e ? (d = a.updateQueue = pg(a.memoizedState), e = c.updateQueue = pg(c.memoizedState)) : d = a.updateQueue = qg(e) : null === e && (e = c.updateQueue = qg(d));

  null === e || d === e ? sg(d, b) : null === d.lastUpdate || null === e.lastUpdate ? (sg(d, b), sg(e, b)) : (sg(d, b), e.lastUpdate = b);
}

function ug(a, b) {
  var c = a.updateQueue;
  c = null === c ? a.updateQueue = pg(a.memoizedState) : vg(a, c);
  null === c.lastCapturedUpdate ? c.firstCapturedUpdate = c.lastCapturedUpdate = b : (c.lastCapturedUpdate.next = b, c.lastCapturedUpdate = b);
}

function vg(a, b) {
  var c = a.alternate;
  null !== c && b === c.updateQueue && (b = a.updateQueue = qg(b));
  return b;
}

function wg(a, b, c, d, e, f) {
  switch (c.tag) {
    case 1:
      return a = c.payload, "function" === typeof a ? a.call(f, d, e) : a;

    case 3:
      a.effectTag = a.effectTag & -4097 | 64;

    case 0:
      a = c.payload;
      e = "function" === typeof a ? a.call(f, d, e) : a;
      if (null === e || void 0 === e) break;
      return n({}, d, e);

    case 2:
      og = !0;
  }

  return d;
}

function xg(a, b, c, d, e) {
  og = !1;
  b = vg(a, b);

  for (var f = b.baseState, g = null, h = 0, k = b.firstUpdate, l = f; null !== k;) {
    var m = k.expirationTime;
    m < e ? (null === g && (g = k, f = l), h < m && (h = m)) : (yg(m, k.suspenseConfig), l = wg(a, b, k, l, c, d), null !== k.callback && (a.effectTag |= 32, k.nextEffect = null, null === b.lastEffect ? b.firstEffect = b.lastEffect = k : (b.lastEffect.nextEffect = k, b.lastEffect = k)));
    k = k.next;
  }

  m = null;

  for (k = b.firstCapturedUpdate; null !== k;) {
    var A = k.expirationTime;
    A < e ? (null === m && (m = k, null === g && (f = l)), h < A && (h = A)) : (l = wg(a, b, k, l, c, d), null !== k.callback && (a.effectTag |= 32, k.nextEffect = null, null === b.lastCapturedEffect ? b.firstCapturedEffect = b.lastCapturedEffect = k : (b.lastCapturedEffect.nextEffect = k, b.lastCapturedEffect = k)));
    k = k.next;
  }

  null === g && (b.lastUpdate = null);
  null === m ? b.lastCapturedUpdate = null : a.effectTag |= 32;
  null === g && null === m && (f = l);
  b.baseState = f;
  b.firstUpdate = g;
  b.firstCapturedUpdate = m;
  zg(h);
  a.expirationTime = h;
  a.memoizedState = l;
}

function Ag(a, b, c) {
  null !== b.firstCapturedUpdate && (null !== b.lastUpdate && (b.lastUpdate.next = b.firstCapturedUpdate, b.lastUpdate = b.lastCapturedUpdate), b.firstCapturedUpdate = b.lastCapturedUpdate = null);
  Bg(b.firstEffect, c);
  b.firstEffect = b.lastEffect = null;
  Bg(b.firstCapturedEffect, c);
  b.firstCapturedEffect = b.lastCapturedEffect = null;
}

function Bg(a, b) {
  for (; null !== a;) {
    var c = a.callback;

    if (null !== c) {
      a.callback = null;
      var d = b;
      if ("function" !== typeof c) throw t(Error(191), c);
      c.call(d);
    }

    a = a.nextEffect;
  }
}

var Cg = Da.ReactCurrentBatchConfig,
    Dg = new aa.Component().refs;

function Eg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : n({}, b, c);
  a.memoizedState = c;
  d = a.updateQueue;
  null !== d && 0 === a.expirationTime && (d.baseState = c);
}

var Ig = {
  isMounted: function (a) {
    return (a = a._reactInternalFiber) ? Bc(a) === a : !1;
  },
  enqueueSetState: function (a, b, c) {
    a = a._reactInternalFiber;
    var d = Fg(),
        e = Cg.suspense;
    d = Gg(d, a, e);
    e = rg(d, e);
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    tg(a, e);
    Hg(a, d);
  },
  enqueueReplaceState: function (a, b, c) {
    a = a._reactInternalFiber;
    var d = Fg(),
        e = Cg.suspense;
    d = Gg(d, a, e);
    e = rg(d, e);
    e.tag = 1;
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    tg(a, e);
    Hg(a, d);
  },
  enqueueForceUpdate: function (a, b) {
    a = a._reactInternalFiber;
    var c = Fg(),
        d = Cg.suspense;
    c = Gg(c, a, d);
    d = rg(c, d);
    d.tag = 2;
    void 0 !== b && null !== b && (d.callback = b);
    tg(a, d);
    Hg(a, c);
  }
};

function Jg(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !hf(c, d) || !hf(e, f) : !0;
}

function Kg(a, b, c) {
  var d = !1,
      e = tf;
  var f = b.contextType;
  "object" === typeof f && null !== f ? f = ng(f) : (e = N(b) ? uf : J.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? vf(a, e) : tf);
  b = new b(c, f);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Ig;
  a.stateNode = b;
  b._reactInternalFiber = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}

function Lg(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Ig.enqueueReplaceState(b, b.state, null);
}

function Mg(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Dg;
  var f = b.contextType;
  "object" === typeof f && null !== f ? e.context = ng(f) : (f = N(b) ? uf : J.current, e.context = vf(a, f));
  f = a.updateQueue;
  null !== f && (xg(a, f, c, e, d), e.state = a.memoizedState);
  f = b.getDerivedStateFromProps;
  "function" === typeof f && (Eg(a, b, f, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ig.enqueueReplaceState(e, e.state, null), f = a.updateQueue, null !== f && (xg(a, f, c, e, d), e.state = a.memoizedState));
  "function" === typeof e.componentDidMount && (a.effectTag |= 4);
}

var Ng = Array.isArray;

function Og(a, b, c) {
  a = c.ref;

  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;

      if (c) {
        if (1 !== c.tag) throw t(Error(309));
        var d = c.stateNode;
      }

      if (!d) throw t(Error(147), a);
      var e = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

      b = function (a) {
        var b = d.refs;
        b === Dg && (b = d.refs = {});
        null === a ? delete b[e] : b[e] = a;
      };

      b._stringRef = e;
      return b;
    }

    if ("string" !== typeof a) throw t(Error(284));
    if (!c._owner) throw t(Error(290), a);
  }

  return a;
}

function Pg(a, b) {
  if ("textarea" !== a.type) throw t(Error(31), "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, "");
}

function Qg(a) {
  function b(b, c) {
    if (a) {
      var d = b.lastEffect;
      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
      c.nextEffect = null;
      c.effectTag = 8;
    }
  }

  function c(c, d) {
    if (!a) return null;

    for (; null !== d;) b(c, d), d = d.sibling;

    return null;
  }

  function d(a, b) {
    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;

    return a;
  }

  function e(a, b, c) {
    a = Rg(a, b, c);
    a.index = 0;
    a.sibling = null;
    return a;
  }

  function f(b, c, d) {
    b.index = d;
    if (!a) return c;
    d = b.alternate;
    if (null !== d) return d = d.index, d < c ? (b.effectTag = E, c) : d;
    b.effectTag = E;
    return c;
  }

  function g(b) {
    a && null === b.alternate && (b.effectTag = E);
    return b;
  }

  function h(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = Sg(c, a.mode, d), b.return = a, b;
    b = e(b, c, d);
    b.return = a;
    return b;
  }

  function k(a, b, c, d) {
    if (null !== b && b.elementType === c.type) return d = e(b, c.props, d), d.ref = Og(a, b, c), d.return = a, d;
    d = Tg(c.type, c.key, c.props, null, a.mode, d);
    d.ref = Og(a, b, c);
    d.return = a;
    return d;
  }

  function l(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Ug(c, a.mode, d), b.return = a, b;
    b = e(b, c.children || [], d);
    b.return = a;
    return b;
  }

  function m(a, b, c, d, f) {
    if (null === b || 7 !== b.tag) return b = Vg(c, a.mode, d, f), b.return = a, b;
    b = e(b, c, d);
    b.return = a;
    return b;
  }

  function A(a, b, c) {
    if ("string" === typeof b || "number" === typeof b) return b = Sg("" + b, a.mode, c), b.return = a, b;

    if ("object" === typeof b && null !== b) {
      switch (b.$$typeof) {
        case Fa:
          return c = Tg(b.type, b.key, b.props, null, a.mode, c), c.ref = Og(a, null, b), c.return = a, c;

        case Ga:
          return b = Ug(b, a.mode, c), b.return = a, b;
      }

      if (Ng(b) || Ta(b)) return b = Vg(b, a.mode, c, null), b.return = a, b;
      Pg(a, b);
    }

    return null;
  }

  function w(a, b, c, d) {
    var e = null !== b ? b.key : null;
    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case Fa:
          return c.key === e ? c.type === Ha ? m(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

        case Ga:
          return c.key === e ? l(a, b, c, d) : null;
      }

      if (Ng(c) || Ta(c)) return null !== e ? null : m(a, b, c, d, null);
      Pg(a, c);
    }

    return null;
  }

  function L(a, b, c, d, e) {
    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

    if ("object" === typeof d && null !== d) {
      switch (d.$$typeof) {
        case Fa:
          return a = a.get(null === d.key ? c : d.key) || null, d.type === Ha ? m(b, a, d.props.children, e, d.key) : k(b, a, d, e);

        case Ga:
          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
      }

      if (Ng(d) || Ta(d)) return a = a.get(c) || null, m(b, a, d, e, null);
      Pg(b, d);
    }

    return null;
  }

  function wb(e, g, h, k) {
    for (var l = null, m = null, q = g, y = g = 0, z = null; null !== q && y < h.length; y++) {
      q.index > y ? (z = q, q = null) : z = q.sibling;
      var p = w(e, q, h[y], k);

      if (null === p) {
        null === q && (q = z);
        break;
      }

      a && q && null === p.alternate && b(e, q);
      g = f(p, g, y);
      null === m ? l = p : m.sibling = p;
      m = p;
      q = z;
    }

    if (y === h.length) return c(e, q), l;

    if (null === q) {
      for (; y < h.length; y++) q = A(e, h[y], k), null !== q && (g = f(q, g, y), null === m ? l = q : m.sibling = q, m = q);

      return l;
    }

    for (q = d(e, q); y < h.length; y++) z = L(q, e, y, h[y], k), null !== z && (a && null !== z.alternate && q.delete(null === z.key ? y : z.key), g = f(z, g, y), null === m ? l = z : m.sibling = z, m = z);

    a && q.forEach(function (a) {
      return b(e, a);
    });
    return l;
  }

  function M(e, g, h, k) {
    var l = Ta(h);
    if ("function" !== typeof l) throw t(Error(150));
    h = l.call(h);
    if (null == h) throw t(Error(151));

    for (var m = l = null, q = g, y = g = 0, z = null, p = h.next(); null !== q && !p.done; y++, p = h.next()) {
      q.index > y ? (z = q, q = null) : z = q.sibling;
      var M = w(e, q, p.value, k);

      if (null === M) {
        null === q && (q = z);
        break;
      }

      a && q && null === M.alternate && b(e, q);
      g = f(M, g, y);
      null === m ? l = M : m.sibling = M;
      m = M;
      q = z;
    }

    if (p.done) return c(e, q), l;

    if (null === q) {
      for (; !p.done; y++, p = h.next()) p = A(e, p.value, k), null !== p && (g = f(p, g, y), null === m ? l = p : m.sibling = p, m = p);

      return l;
    }

    for (q = d(e, q); !p.done; y++, p = h.next()) p = L(q, e, y, p.value, k), null !== p && (a && null !== p.alternate && q.delete(null === p.key ? y : p.key), g = f(p, g, y), null === m ? l = p : m.sibling = p, m = p);

    a && q.forEach(function (a) {
      return b(e, a);
    });
    return l;
  }

  return function (a, d, f, h) {
    var k = "object" === typeof f && null !== f && f.type === Ha && null === f.key;
    k && (f = f.props.children);
    var l = "object" === typeof f && null !== f;
    if (l) switch (f.$$typeof) {
      case Fa:
        a: {
          l = f.key;

          for (k = d; null !== k;) {
            if (k.key === l) {
              if (7 === k.tag ? f.type === Ha : k.elementType === f.type) {
                c(a, k.sibling);
                d = e(k, f.type === Ha ? f.props.children : f.props, h);
                d.ref = Og(a, k, f);
                d.return = a;
                a = d;
                break a;
              }

              c(a, k);
              break;
            } else b(a, k);

            k = k.sibling;
          }

          f.type === Ha ? (d = Vg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Tg(f.type, f.key, f.props, null, a.mode, h), h.ref = Og(a, d, f), h.return = a, a = h);
        }

        return g(a);

      case Ga:
        a: {
          for (k = f.key; null !== d;) {
            if (d.key === k) {
              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                c(a, d.sibling);
                d = e(d, f.children || [], h);
                d.return = a;
                a = d;
                break a;
              }

              c(a, d);
              break;
            } else b(a, d);

            d = d.sibling;
          }

          d = Ug(f, a.mode, h);
          d.return = a;
          a = d;
        }

        return g(a);
    }
    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f, h), d.return = a, a = d) : (c(a, d), d = Sg(f, a.mode, h), d.return = a, a = d), g(a);
    if (Ng(f)) return wb(a, d, f, h);
    if (Ta(f)) return M(a, d, f, h);
    l && Pg(a, f);
    if ("undefined" === typeof f && !k) switch (a.tag) {
      case 1:
      case 0:
        throw a = a.type, t(Error(152), a.displayName || a.name || "Component");
    }
    return c(a, d);
  };
}

var Wg = Qg(!0),
    Xg = Qg(!1),
    Yg = {},
    Zg = {
  current: Yg
},
    $g = {
  current: Yg
},
    ah = {
  current: Yg
};

function bh(a) {
  if (a === Yg) throw t(Error(174));
  return a;
}

function ch(a, b) {
  I(ah, b, a);
  I($g, a, a);
  I(Zg, Yg, a);
  var c = b.nodeType;

  switch (c) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : Qb(null, "");
      break;

    default:
      c = 8 === c ? b.parentNode : b, b = c.namespaceURI || null, c = c.tagName, b = Qb(b, c);
  }

  H(Zg, a);
  I(Zg, b, a);
}

function dh(a) {
  H(Zg, a);
  H($g, a);
  H(ah, a);
}

function eh(a) {
  bh(ah.current);
  var b = bh(Zg.current);
  var c = Qb(b, a.type);
  b !== c && (I($g, a, a), I(Zg, c, a));
}

function fh(a) {
  $g.current === a && (H(Zg, a), H($g, a));
}

var O = {
  current: 0
};

function gh(a) {
  for (var b = a; null !== b;) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || c.data === be || c.data === ce)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if ((b.effectTag & 64) !== D) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }

    if (b === a) break;

    for (; null === b.sibling;) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }

    b.sibling.return = b.return;
    b = b.sibling;
  }

  return null;
}

function hh(a, b) {
  return {
    responder: a,
    props: b
  };
}

var ih = Da.ReactCurrentDispatcher,
    jh = 0,
    kh = null,
    P = null,
    lh = null,
    mh = null,
    Q = null,
    nh = null,
    oh = 0,
    ph = null,
    qh = 0,
    rh = !1,
    sh = null,
    th = 0;

function uh() {
  throw t(Error(321));
}

function vh(a, b) {
  if (null === b) return !1;

  for (var c = 0; c < b.length && c < a.length; c++) if (!ff(a[c], b[c])) return !1;

  return !0;
}

function wh(a, b, c, d, e, f) {
  jh = f;
  kh = b;
  lh = null !== a ? a.memoizedState : null;
  ih.current = null === lh ? xh : yh;
  b = c(d, e);

  if (rh) {
    do rh = !1, th += 1, lh = null !== a ? a.memoizedState : null, nh = mh, ph = Q = P = null, ih.current = yh, b = c(d, e); while (rh);

    sh = null;
    th = 0;
  }

  ih.current = zh;
  a = kh;
  a.memoizedState = mh;
  a.expirationTime = oh;
  a.updateQueue = ph;
  a.effectTag |= qh;
  a = null !== P && null !== P.next;
  jh = 0;
  nh = Q = mh = lh = P = kh = null;
  oh = 0;
  ph = null;
  qh = 0;
  if (a) throw t(Error(300));
  return b;
}

function Ah() {
  ih.current = zh;
  jh = 0;
  nh = Q = mh = lh = P = kh = null;
  oh = 0;
  ph = null;
  qh = 0;
  rh = !1;
  sh = null;
  th = 0;
}

function Eh() {
  var a = {
    memoizedState: null,
    baseState: null,
    queue: null,
    baseUpdate: null,
    next: null
  };
  null === Q ? mh = Q = a : Q = Q.next = a;
  return Q;
}

function Fh() {
  if (null !== nh) Q = nh, nh = Q.next, P = lh, lh = null !== P ? P.next : null;else {
    if (null === lh) throw t(Error(310));
    P = lh;
    var a = {
      memoizedState: P.memoizedState,
      baseState: P.baseState,
      queue: P.queue,
      baseUpdate: P.baseUpdate,
      next: null
    };
    Q = null === Q ? mh = a : Q.next = a;
    lh = P.next;
  }
  return Q;
}

function Gh(a, b) {
  return "function" === typeof b ? b(a) : b;
}

function Hh(a) {
  var b = Fh(),
      c = b.queue;
  if (null === c) throw t(Error(311));
  c.lastRenderedReducer = a;

  if (0 < th) {
    var d = c.dispatch;

    if (null !== sh) {
      var e = sh.get(c);

      if (void 0 !== e) {
        sh.delete(c);
        var f = b.memoizedState;

        do f = a(f, e.action), e = e.next; while (null !== e);

        ff(f, b.memoizedState) || (mg = !0);
        b.memoizedState = f;
        b.baseUpdate === c.last && (b.baseState = f);
        c.lastRenderedState = f;
        return [f, d];
      }
    }

    return [b.memoizedState, d];
  }

  d = c.last;
  var g = b.baseUpdate;
  f = b.baseState;
  null !== g ? (null !== d && (d.next = null), d = g.next) : d = null !== d ? d.next : null;

  if (null !== d) {
    var h = e = null,
        k = d,
        l = !1;

    do {
      var m = k.expirationTime;
      m < jh ? (l || (l = !0, h = g, e = f), m > oh && (oh = m, zg(oh))) : (yg(m, k.suspenseConfig), f = k.eagerReducer === a ? k.eagerState : a(f, k.action));
      g = k;
      k = k.next;
    } while (null !== k && k !== d);

    l || (h = g, e = f);
    ff(f, b.memoizedState) || (mg = !0);
    b.memoizedState = f;
    b.baseUpdate = h;
    b.baseState = e;
    c.lastRenderedState = f;
  }

  return [b.memoizedState, c.dispatch];
}

function Ih(a, b, c, d) {
  a = {
    tag: a,
    create: b,
    destroy: c,
    deps: d,
    next: null
  };
  null === ph ? (ph = {
    lastEffect: null
  }, ph.lastEffect = a.next = a) : (b = ph.lastEffect, null === b ? ph.lastEffect = a.next = a : (c = b.next, b.next = a, a.next = c, ph.lastEffect = a));
  return a;
}

function Jh(a, b, c, d) {
  var e = Eh();
  qh |= a;
  e.memoizedState = Ih(b, c, void 0, void 0 === d ? null : d);
}

function Kh(a, b, c, d) {
  var e = Fh();
  d = void 0 === d ? null : d;
  var f = void 0;

  if (null !== P) {
    var g = P.memoizedState;
    f = g.destroy;

    if (null !== d && vh(d, g.deps)) {
      Ih(0, c, f, d);
      return;
    }
  }

  qh |= a;
  e.memoizedState = Ih(b, c, f, d);
}

function Lh(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function () {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
    b.current = null;
  };
}

function Mh() {}

function Nh(a, b, c) {
  if (!(25 > th)) throw t(Error(301));
  var d = a.alternate;
  if (a === kh || null !== d && d === kh) {
    if (rh = !0, a = {
      expirationTime: jh,
      suspenseConfig: null,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    }, null === sh && (sh = new Map()), c = sh.get(b), void 0 === c) sh.set(b, a);else {
      for (b = c; null !== b.next;) b = b.next;

      b.next = a;
    }
  } else {
    var e = Fg(),
        f = Cg.suspense;
    e = Gg(e, a, f);
    f = {
      expirationTime: e,
      suspenseConfig: f,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    };
    var g = b.last;
    if (null === g) f.next = f;else {
      var h = g.next;
      null !== h && (f.next = h);
      g.next = f;
    }
    b.last = f;
    if (0 === a.expirationTime && (null === d || 0 === d.expirationTime) && (d = b.lastRenderedReducer, null !== d)) try {
      var k = b.lastRenderedState,
          l = d(k, c);
      f.eagerReducer = d;
      f.eagerState = l;
      if (ff(l, k)) return;
    } catch (m) {} finally {}
    Hg(a, e);
  }
}

var zh = {
  readContext: ng,
  useCallback: uh,
  useContext: uh,
  useEffect: uh,
  useImperativeHandle: uh,
  useLayoutEffect: uh,
  useMemo: uh,
  useReducer: uh,
  useRef: uh,
  useState: uh,
  useDebugValue: uh,
  useResponder: uh
},
    xh = {
  readContext: ng,
  useCallback: function (a, b) {
    Eh().memoizedState = [a, void 0 === b ? null : b];
    return a;
  },
  useContext: ng,
  useEffect: function (a, b) {
    return Jh(516, 192, a, b);
  },
  useImperativeHandle: function (a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return Jh(4, 36, Lh.bind(null, b, a), c);
  },
  useLayoutEffect: function (a, b) {
    return Jh(4, 36, a, b);
  },
  useMemo: function (a, b) {
    var c = Eh();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  },
  useReducer: function (a, b, c) {
    var d = Eh();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = d.queue = {
      last: null,
      dispatch: null,
      lastRenderedReducer: a,
      lastRenderedState: b
    };
    a = a.dispatch = Nh.bind(null, kh, a);
    return [d.memoizedState, a];
  },
  useRef: function (a) {
    var b = Eh();
    a = {
      current: a
    };
    return b.memoizedState = a;
  },
  useState: function (a) {
    var b = Eh();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      last: null,
      dispatch: null,
      lastRenderedReducer: Gh,
      lastRenderedState: a
    };
    a = a.dispatch = Nh.bind(null, kh, a);
    return [b.memoizedState, a];
  },
  useDebugValue: Mh,
  useResponder: hh
},
    yh = {
  readContext: ng,
  useCallback: function (a, b) {
    var c = Fh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && vh(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  },
  useContext: ng,
  useEffect: function (a, b) {
    return Kh(516, 192, a, b);
  },
  useImperativeHandle: function (a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return Kh(4, 36, Lh.bind(null, b, a), c);
  },
  useLayoutEffect: function (a, b) {
    return Kh(4, 36, a, b);
  },
  useMemo: function (a, b) {
    var c = Fh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && vh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  },
  useReducer: Hh,
  useRef: function () {
    return Fh().memoizedState;
  },
  useState: function (a) {
    return Hh(Gh, a);
  },
  useDebugValue: Mh,
  useResponder: hh
},
    Oh = null,
    Ph = null,
    Qh = !1;

function Rh(a, b) {
  var c = Sh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.effectTag = 8;
  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}

function Th(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, !0) : !1;

    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;

    case 13:
      return !1;

    default:
      return !1;
  }
}

function Uh(a) {
  if (Qh) {
    var b = Ph;

    if (b) {
      var c = b;

      if (!Th(a, b)) {
        b = je(c.nextSibling);

        if (!b || !Th(a, b)) {
          a.effectTag = a.effectTag & ~Ac | E;
          Qh = !1;
          Oh = a;
          return;
        }

        Rh(Oh, c);
      }

      Oh = a;
      Ph = je(b.firstChild);
    } else a.effectTag = a.effectTag & ~Ac | E, Qh = !1, Oh = a;
  }
}

function Vh(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;

  Oh = a;
}

function Wh(a) {
  if (a !== Oh) return !1;
  if (!Qh) return Vh(a), Qh = !0, !1;
  var b = a.type;
  if (5 !== a.tag || "head" !== b && "body" !== b && !ge(b, a.memoizedProps)) for (b = Ph; b;) Rh(a, b), b = je(b.nextSibling);
  Vh(a);
  if (13 === a.tag) {
    if (a = a.memoizedState, a = null !== a ? a.dehydrated : null, null === a) a = Ph;else a: {
      a = a.nextSibling;

      for (b = 0; a;) {
        if (8 === a.nodeType) {
          var c = a.data;

          if (c === ae) {
            if (0 === b) {
              a = je(a.nextSibling);
              break a;
            }

            b--;
          } else c !== $d && c !== ce && c !== be || b++;
        }

        a = a.nextSibling;
      }

      a = null;
    }
  } else a = Oh ? je(a.stateNode.nextSibling) : null;
  Ph = a;
  return !0;
}

function Xh() {
  Ph = Oh = null;
  Qh = !1;
}

var Yh = Da.ReactCurrentOwner,
    mg = !1;

function R(a, b, c, d) {
  b.child = null === a ? Xg(b, null, c, d) : Wg(b, a.child, c, d);
}

function Zh(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  lg(b, e);
  d = wh(a, b, c, d, f, e);
  if (null !== a && !mg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
  b.effectTag |= 1;
  R(a, b, d, e);
  return b.child;
}

function ai(a, b, c, d, e, f) {
  if (null === a) {
    var g = c.type;
    if ("function" === typeof g && !bi(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ci(a, b, g, d, e, f);
    a = Tg(c.type, null, d, null, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }

  g = a.child;
  if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : hf, c(e, d) && a.ref === b.ref)) return $h(a, b, f);
  b.effectTag |= 1;
  a = Rg(g, d, f);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}

function ci(a, b, c, d, e, f) {
  return null !== a && hf(a.memoizedProps, d) && a.ref === b.ref && (mg = !1, e < f) ? $h(a, b, f) : di(a, b, c, d, f);
}

function ei(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
}

function di(a, b, c, d, e) {
  var f = N(c) ? uf : J.current;
  f = vf(b, f);
  lg(b, e);
  c = wh(a, b, c, d, f, e);
  if (null !== a && !mg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
  b.effectTag |= 1;
  R(a, b, c, e);
  return b.child;
}

function fi(a, b, c, d, e) {
  if (N(c)) {
    var f = !0;
    Bf(b);
  } else f = !1;

  lg(b, e);
  if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= E), Kg(b, c, d, e), Mg(b, c, d, e), d = !0;else if (null === a) {
    var g = b.stateNode,
        h = b.memoizedProps;
    g.props = h;
    var k = g.context,
        l = c.contextType;
    "object" === typeof l && null !== l ? l = ng(l) : (l = N(c) ? uf : J.current, l = vf(b, l));
    var m = c.getDerivedStateFromProps,
        A = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
    A || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Lg(b, g, d, l);
    og = !1;
    var w = b.memoizedState;
    k = g.state = w;
    var L = b.updateQueue;
    null !== L && (xg(b, L, d, g, e), k = b.memoizedState);
    h !== d || w !== k || K.current || og ? ("function" === typeof m && (Eg(b, c, m, d), k = b.memoizedState), (h = og || Jg(b, c, h, d, w, k, l)) ? (A || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
  } else g = b.stateNode, h = b.memoizedProps, g.props = b.type === b.elementType ? h : cg(b.type, h), k = g.context, l = c.contextType, "object" === typeof l && null !== l ? l = ng(l) : (l = N(c) ? uf : J.current, l = vf(b, l)), m = c.getDerivedStateFromProps, (A = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Lg(b, g, d, l), og = !1, k = b.memoizedState, w = g.state = k, L = b.updateQueue, null !== L && (xg(b, L, d, g, e), w = b.memoizedState), h !== d || k !== w || K.current || og ? ("function" === typeof m && (Eg(b, c, m, d), w = b.memoizedState), (m = og || Jg(b, c, h, d, k, w, l)) ? (A || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, w, l), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, w, l)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = w), g.props = d, g.state = w, g.context = l, d = m) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = !1);
  return gi(a, b, c, d, f, e);
}

function gi(a, b, c, d, e, f) {
  ei(a, b);
  var g = (b.effectTag & 64) !== D;
  if (!d && !g) return e && Cf(b, c, !1), $h(a, b, f);
  d = b.stateNode;
  Yh.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.effectTag |= 1;
  null !== a && g ? (b.child = Wg(b, a.child, null, f), b.child = Wg(b, null, h, f)) : R(a, b, h, f);
  b.memoizedState = d.state;
  e && Cf(b, c, !0);
  return b.child;
}

function hi(a) {
  var b = a.stateNode;
  b.pendingContext ? zf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && zf(a, b.context, !1);
  ch(a, b.containerInfo);
}

var ii = {
  dehydrated: null,
  retryTime: 1
};

function ji(a, b, c) {
  var d = b.mode,
      e = b.pendingProps,
      f = O.current,
      g = !1,
      h;
  (h = (b.effectTag & 64) !== D) || (h = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
  h ? (g = !0, b.effectTag &= -65) : null !== a && null === a.memoizedState || void 0 === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= 1);
  I(O, f & 1, b);

  if (null === a) {
    if (g) {
      g = e.fallback;
      e = Vg(null, d, 0, null);
      e.return = b;
      if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) a.return = e, a = a.sibling;
      c = Vg(g, d, c, null);
      c.return = b;
      e.sibling = c;
      b.memoizedState = ii;
      b.child = e;
      return c;
    }

    d = e.children;
    b.memoizedState = null;
    return b.child = Xg(b, null, d, c);
  }

  if (null !== a.memoizedState) {
    a = a.child;
    d = a.sibling;

    if (g) {
      e = e.fallback;
      c = Rg(a, a.pendingProps, 0);
      c.return = b;
      if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== a.child)) for (c.child = g; null !== g;) g.return = c, g = g.sibling;
      d = Rg(d, e, d.expirationTime);
      d.return = b;
      c.sibling = d;
      c.childExpirationTime = 0;
      b.memoizedState = ii;
      b.child = c;
      return d;
    }

    c = Wg(b, a.child, e.children, c);
    b.memoizedState = null;
    return b.child = c;
  }

  a = a.child;

  if (g) {
    g = e.fallback;
    e = Vg(null, d, 0, null);
    e.return = b;
    e.child = a;
    null !== a && (a.return = e);
    if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) a.return = e, a = a.sibling;
    c = Vg(g, d, c, null);
    c.return = b;
    e.sibling = c;
    c.effectTag |= E;
    e.childExpirationTime = 0;
    b.memoizedState = ii;
    b.child = e;
    return c;
  }

  b.memoizedState = null;
  return b.child = Wg(b, a, e.children, c);
}

function ki(a, b, c, d, e) {
  var f = a.memoizedState;
  null === f ? a.memoizedState = {
    isBackwards: b,
    rendering: null,
    last: d,
    tail: c,
    tailExpiration: 0,
    tailMode: e
  } : (f.isBackwards = b, f.rendering = null, f.last = d, f.tail = c, f.tailExpiration = 0, f.tailMode = e);
}

function li(a, b, c) {
  var d = b.pendingProps,
      e = d.revealOrder,
      f = d.tail;
  R(a, b, d.children, c);
  d = O.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b.effectTag |= 64;else {
    if (null !== a && (a.effectTag & 64) !== D) a: for (a = b.child; null !== a;) {
      if (13 === a.tag) {
        if (null !== a.memoizedState) {
          a.expirationTime < c && (a.expirationTime = c);
          var g = a.alternate;
          null !== g && g.expirationTime < c && (g.expirationTime = c);
          kg(a.return, c);
        }
      } else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }

      if (a === b) break a;

      for (; null === a.sibling;) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }

      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  I(O, d, b);
  if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
    case "forwards":
      c = b.child;

      for (e = null; null !== c;) d = c.alternate, null !== d && null === gh(d) && (e = c), c = c.sibling;

      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      ki(b, !1, e, c, f);
      break;

    case "backwards":
      c = null;
      e = b.child;

      for (b.child = null; null !== e;) {
        d = e.alternate;

        if (null !== d && null === gh(d)) {
          b.child = e;
          break;
        }

        d = e.sibling;
        e.sibling = c;
        c = e;
        e = d;
      }

      ki(b, !0, c, null, f);
      break;

    case "together":
      ki(b, !1, null, null, void 0);
      break;

    default:
      b.memoizedState = null;
  }
  return b.child;
}

function $h(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  var d = b.expirationTime;
  0 !== d && zg(d);
  if (b.childExpirationTime < c) return null;
  if (null !== a && b.child !== a.child) throw t(Error(153));

  if (null !== b.child) {
    a = b.child;
    c = Rg(a, a.pendingProps, a.expirationTime);
    b.child = c;

    for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Rg(a, a.pendingProps, a.expirationTime), c.return = b;

    c.sibling = null;
  }

  return b.child;
}

function mi(a) {
  a.effectTag |= 4;
}

var ni, oi, pi, qi;

ni = function (a, b) {
  for (var c = b.child; null !== c;) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;

    for (; null === c.sibling;) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }

    c.sibling.return = c.return;
    c = c.sibling;
  }
};

oi = function () {};

pi = function (a, b, c, d, e) {
  var f = a.memoizedProps;

  if (f !== d) {
    var g = b.stateNode;
    bh(Zg.current);
    a = null;

    switch (c) {
      case "input":
        f = Ab(g, f);
        d = Ab(g, d);
        a = [];
        break;

      case "option":
        f = Ib(g, f);
        d = Ib(g, d);
        a = [];
        break;

      case "select":
        f = n({}, f, {
          value: void 0
        });
        d = n({}, d, {
          value: void 0
        });
        a = [];
        break;

      case "textarea":
        f = Kb(g, f);
        d = Kb(g, d);
        a = [];
        break;

      default:
        "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = Td);
    }

    Qd(c, d);
    var h, k;
    c = null;

    for (h in f) if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && null != f[h]) if ("style" === h) for (k in g = f[h], g) g.hasOwnProperty(k) && (c || (c = {}), c[k] = "");else "dangerouslySetInnerHTML" !== h && "children" !== h && "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (ia.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));

    for (h in d) {
      var l = d[h];
      g = null != f ? f[h] : void 0;
      if (d.hasOwnProperty(h) && l !== g && (null != l || null != g)) if ("style" === h) {
        if (g) {
          for (k in g) !g.hasOwnProperty(k) || l && l.hasOwnProperty(k) || (c || (c = {}), c[k] = "");

          for (k in l) l.hasOwnProperty(k) && g[k] !== l[k] && (c || (c = {}), c[k] = l[k]);
        } else c || (a || (a = []), a.push(h, c)), c = l;
      } else "dangerouslySetInnerHTML" === h ? (l = l ? l.__html : void 0, g = g ? g.__html : void 0, null != l && g !== l && (a = a || []).push(h, "" + l)) : "children" === h ? g === l || "string" !== typeof l && "number" !== typeof l || (a = a || []).push(h, "" + l) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && (ia.hasOwnProperty(h) ? (null != l && Sd(e, h), a || g === l || (a = [])) : (a = a || []).push(h, l));
    }

    c && (a = a || []).push("style", c);
    e = a;
    (b.updateQueue = e) && mi(b);
  }
};

qi = function (a, b, c, d) {
  c !== d && mi(b);
};

function ri(a, b) {
  switch (a.tailMode) {
    case "hidden":
      b = a.tail;

      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;

      null === c ? a.tail = null : c.sibling = null;
      break;

    case "collapsed":
      c = a.tail;

      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;

      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}

function si(a) {
  switch (a.tag) {
    case 1:
      N(a.type) && wf(a);
      var b = a.effectTag;
      return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;

    case 3:
      dh(a);
      xf(a);
      b = a.effectTag;
      if ((b & 64) !== D) throw t(Error(285));
      a.effectTag = b & -4097 | 64;
      return a;

    case 5:
      return fh(a), null;

    case 13:
      return H(O, a), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;

    case 19:
      return H(O, a), null;

    case 4:
      return dh(a), null;

    case 10:
      return jg(a), null;

    default:
      return null;
  }
}

function ti(a, b) {
  return {
    value: a,
    source: b,
    stack: Wa(b)
  };
}

var ui = "function" === typeof WeakSet ? WeakSet : Set;

function vi(a, b) {
  var c = b.source,
      d = b.stack;
  null === d && null !== c && (d = Wa(c));
  null !== c && Va(c.type);
  b = b.value;
  null !== a && 1 === a.tag && Va(a.type);

  try {
    console.error(b);
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}

function wi(a, b) {
  try {
    b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
  } catch (c) {
    xi(a, c);
  }
}

function yi(a) {
  var b = a.ref;
  if (null !== b) if ("function" === typeof b) try {
    b(null);
  } catch (c) {
    xi(a, c);
  } else b.current = null;
}

function Di(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
      Ei(2, 0, b);
      break;

    case 1:
      if (b.effectTag & 256 && null !== a) {
        var c = a.memoizedProps,
            d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : cg(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }

      break;

    case 3:
    case 5:
    case 6:
    case 4:
    case 17:
      break;

    default:
      throw t(Error(163));
  }
}

function Ei(a, b, c) {
  c = c.updateQueue;
  c = null !== c ? c.lastEffect : null;

  if (null !== c) {
    var d = c = c.next;

    do {
      if (0 !== (d.tag & a)) {
        var e = d.destroy;
        d.destroy = void 0;
        void 0 !== e && e();
      }

      0 !== (d.tag & b) && (e = d.create, d.destroy = e());
      d = d.next;
    } while (d !== c);
  }
}

function Fi(a, b, c) {
  "function" === typeof Gi && Gi(b);

  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      a = b.updateQueue;

      if (null !== a && (a = a.lastEffect, null !== a)) {
        var d = a.next;
        Yf(97 < c ? 97 : c, function () {
          var a = d;

          do {
            var c = a.destroy;

            if (void 0 !== c) {
              var g = b;

              try {
                c();
              } catch (h) {
                xi(g, h);
              }
            }

            a = a.next;
          } while (a !== d);
        });
      }

      break;

    case 1:
      yi(b);
      c = b.stateNode;
      "function" === typeof c.componentWillUnmount && wi(b, c);
      break;

    case 5:
      yi(b);
      break;

    case 4:
      Hi(a, b, c);
  }
}

function Ii(a) {
  var b = a.alternate;
  a.return = null;
  a.child = null;
  a.memoizedState = null;
  a.updateQueue = null;
  a.dependencies = null;
  a.alternate = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.pendingProps = null;
  a.memoizedProps = null;
  null !== b && Ii(b);
}

function Ji(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}

function Ki(a) {
  a: {
    for (var b = a.return; null !== b;) {
      if (Ji(b)) {
        var c = b;
        break a;
      }

      b = b.return;
    }

    throw t(Error(160));
  }

  b = c.stateNode;

  switch (c.tag) {
    case 5:
      var d = !1;
      break;

    case 3:
      b = b.containerInfo;
      d = !0;
      break;

    case 4:
      b = b.containerInfo;
      d = !0;
      break;

    default:
      throw t(Error(161));
  }

  c.effectTag & 16 && (Tb(b, ""), c.effectTag &= -17);

  a: b: for (c = a;;) {
    for (; null === c.sibling;) {
      if (null === c.return || Ji(c.return)) {
        c = null;
        break a;
      }

      c = c.return;
    }

    c.sibling.return = c.return;

    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
      if (c.effectTag & E) continue b;
      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
    }

    if (!(c.effectTag & E)) {
      c = c.stateNode;
      break a;
    }
  }

  for (var e = a;;) {
    var f = 5 === e.tag || 6 === e.tag;

    if (f) {
      var g = f ? e.stateNode : e.stateNode.instance;
      if (c) {
        if (d) {
          f = b;
          var h = g;
          g = c;
          8 === f.nodeType ? f.parentNode.insertBefore(h, g) : f.insertBefore(h, g);
        } else b.insertBefore(g, c);
      } else d ? (h = b, 8 === h.nodeType ? (f = h.parentNode, f.insertBefore(g, h)) : (f = h, f.appendChild(g)), h = h._reactRootContainer, null !== h && void 0 !== h || null !== f.onclick || (f.onclick = Td)) : b.appendChild(g);
    } else if (4 !== e.tag && null !== e.child) {
      e.child.return = e;
      e = e.child;
      continue;
    }

    if (e === a) break;

    for (; null === e.sibling;) {
      if (null === e.return || e.return === a) return;
      e = e.return;
    }

    e.sibling.return = e.return;
    e = e.sibling;
  }
}

function Hi(a, b, c) {
  for (var d = b, e = !1, f, g;;) {
    if (!e) {
      e = d.return;

      a: for (;;) {
        if (null === e) throw t(Error(160));
        f = e.stateNode;

        switch (e.tag) {
          case 5:
            g = !1;
            break a;

          case 3:
            f = f.containerInfo;
            g = !0;
            break a;

          case 4:
            f = f.containerInfo;
            g = !0;
            break a;
        }

        e = e.return;
      }

      e = !0;
    }

    if (5 === d.tag || 6 === d.tag) {
      a: for (var h = a, k = d, l = c, m = k;;) if (Fi(h, m, l), null !== m.child && 4 !== m.tag) m.child.return = m, m = m.child;else {
        if (m === k) break;

        for (; null === m.sibling;) {
          if (null === m.return || m.return === k) break a;
          m = m.return;
        }

        m.sibling.return = m.return;
        m = m.sibling;
      }

      g ? (h = f, k = d.stateNode, 8 === h.nodeType ? h.parentNode.removeChild(k) : h.removeChild(k)) : f.removeChild(d.stateNode);
    } else if (4 === d.tag) {
      if (null !== d.child) {
        f = d.stateNode.containerInfo;
        g = !0;
        d.child.return = d;
        d = d.child;
        continue;
      }
    } else if (Fi(a, d, c), null !== d.child) {
      d.child.return = d;
      d = d.child;
      continue;
    }

    if (d === b) break;

    for (; null === d.sibling;) {
      if (null === d.return || d.return === b) return;
      d = d.return;
      4 === d.tag && (e = !1);
    }

    d.sibling.return = d.return;
    d = d.sibling;
  }
}

function Li(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      Ei(4, 8, b);
      break;

    case 1:
      break;

    case 5:
      var c = b.stateNode;

      if (null != c) {
        var d = b.memoizedProps,
            e = null !== a ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;

        if (null !== f) {
          c[ne] = d;
          "input" === a && "radio" === d.type && null != d.name && Cb(c, d);
          Rd(a, e);
          b = Rd(a, d);

          for (e = 0; e < f.length; e += 2) {
            var g = f[e],
                h = f[e + 1];
            "style" === g ? Od(c, h) : "dangerouslySetInnerHTML" === g ? Sb(c, h) : "children" === g ? Tb(c, h) : ub(c, g, h, b);
          }

          switch (a) {
            case "input":
              Db(c, d);
              break;

            case "textarea":
              Mb(c, d);
              break;

            case "select":
              b = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, a = d.value, null != a ? Jb(c, !!d.multiple, a, !1) : b !== !!d.multiple && (null != d.defaultValue ? Jb(c, !!d.multiple, d.defaultValue, !0) : Jb(c, !!d.multiple, d.multiple ? [] : "", !1));
          }
        }
      }

      break;

    case 6:
      if (null === b.stateNode) throw t(Error(162));
      b.stateNode.nodeValue = b.memoizedProps;
      break;

    case 3:
      b = b.stateNode;
      b.hydrate && (b.hydrate = !1, zc(b.containerInfo));
      break;

    case 12:
      break;

    case 13:
      c = b;
      null === b.memoizedState ? d = !1 : (d = !0, c = b.child, Mi = Vf());
      if (null !== c) a: for (a = c;;) {
        if (5 === a.tag) f = a.stateNode, d ? (f = f.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (f = a.stateNode, e = a.memoizedProps.style, e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null, f.style.display = Nd("display", e));else if (6 === a.tag) a.stateNode.nodeValue = d ? "" : a.memoizedProps;else if (13 === a.tag && null !== a.memoizedState && null === a.memoizedState.dehydrated) {
          f = a.child.sibling;
          f.return = a;
          a = f;
          continue;
        } else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === c) break a;

        for (; null === a.sibling;) {
          if (null === a.return || a.return === c) break a;
          a = a.return;
        }

        a.sibling.return = a.return;
        a = a.sibling;
      }
      Ni(b);
      break;

    case 19:
      Ni(b);
      break;

    case 17:
      break;

    case 20:
      break;

    case 21:
      break;

    default:
      throw t(Error(163));
  }
}

function Ni(a) {
  var b = a.updateQueue;

  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new ui());
    b.forEach(function (b) {
      var d = Oi.bind(null, a, b);
      c.has(b) || (c.add(b), b.then(d, d));
    });
  }
}

var Pi = "function" === typeof WeakMap ? WeakMap : Map;

function Qi(a, b, c) {
  c = rg(c, null);
  c.tag = 3;
  c.payload = {
    element: null
  };
  var d = b.value;

  c.callback = function () {
    Ri || (Ri = !0, Si = d);
    vi(a, b);
  };

  return c;
}

function Ti(a, b, c) {
  c = rg(c, null);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;

  if ("function" === typeof d) {
    var e = b.value;

    c.payload = function () {
      vi(a, b);
      return d(e);
    };
  }

  var f = a.stateNode;
  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
    "function" !== typeof d && (null === Ui ? Ui = new Set([this]) : Ui.add(this), vi(a, b));
    var c = b.stack;
    this.componentDidCatch(b.value, {
      componentStack: null !== c ? c : ""
    });
  });
  return c;
}

var Vi = Math.ceil,
    Wi = Da.ReactCurrentDispatcher,
    Xi = Da.ReactCurrentOwner,
    S = 0,
    Yi = 8,
    Zi = 16,
    $i = 32,
    aj = 0,
    bj = 1,
    cj = 2,
    dj = 3,
    ej = 4,
    fj = 5,
    gj = 6,
    T = S,
    U = null,
    V = null,
    W = 0,
    X = aj,
    hj = null,
    ij = 1073741823,
    jj = 1073741823,
    kj = null,
    lj = 0,
    mj = !1,
    Mi = 0,
    nj = 500,
    Y = null,
    Ri = !1,
    Si = null,
    Ui = null,
    oj = !1,
    pj = null,
    qj = 90,
    rj = null,
    sj = 0,
    tj = null,
    uj = 0;

function Fg() {
  return (T & (Zi | $i)) !== S ? 1073741821 - (Vf() / 10 | 0) : 0 !== uj ? uj : uj = 1073741821 - (Vf() / 10 | 0);
}

function Gg(a, b, c) {
  b = b.mode;
  if (0 === (b & 2)) return 1073741823;
  var d = Wf();
  if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
  if ((T & Zi) !== S) return W;
  if (null !== c) a = 1073741821 - 25 * (((1073741821 - a + (c.timeoutMs | 0 || 5E3) / 10) / 25 | 0) + 1);else switch (d) {
    case 99:
      a = 1073741823;
      break;

    case 98:
      a = 1073741821 - 10 * (((1073741821 - a + 15) / 10 | 0) + 1);
      break;

    case 97:
    case 96:
      a = 1073741821 - 25 * (((1073741821 - a + 500) / 25 | 0) + 1);
      break;

    case 95:
      a = 2;
      break;

    default:
      throw t(Error(326));
  }
  null !== U && a === W && --a;
  return a;
}

var vj = 0;

function Hg(a, b) {
  if (50 < sj) throw sj = 0, tj = null, t(Error(185));
  a = wj(a, b);

  if (null !== a) {
    var c = Wf();
    1073741823 === b ? (T & Yi) !== S && (T & (Zi | $i)) === S ? xj(a) : (Z(a), T === S && bg()) : Z(a);
    (T & 4) === S || 98 !== c && 99 !== c || (null === rj ? rj = new Map([[a, b]]) : (c = rj.get(a), (void 0 === c || c > b) && rj.set(a, b)));
  }
}

function wj(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c = a.alternate;
  null !== c && c.expirationTime < b && (c.expirationTime = b);
  var d = a.return,
      e = null;
  if (null === d && 3 === a.tag) e = a.stateNode;else for (; null !== d;) {
    c = d.alternate;
    d.childExpirationTime < b && (d.childExpirationTime = b);
    null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);

    if (null === d.return && 3 === d.tag) {
      e = d.stateNode;
      break;
    }

    d = d.return;
  }
  null !== e && (U === e && (zg(b), X === ej && yj(e, W)), zj(e, b));
  return e;
}

function Aj(a) {
  var b = a.lastExpiredTime;
  if (0 !== b) return b;
  b = a.firstPendingTime;
  if (!Bj(a, b)) return b;
  b = a.lastPingedTime;
  a = a.nextKnownPendingLevel;
  return b > a ? b : a;
}

function Z(a) {
  if (0 !== a.lastExpiredTime) a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = $f(xj.bind(null, a));else {
    var b = Aj(a),
        c = a.callbackNode;
    if (0 === b) null !== c && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);else {
      var d = Fg();
      1073741823 === b ? d = 99 : 1 === b || 2 === b ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);

      if (null !== c) {
        var e = a.callbackPriority;
        if (a.callbackExpirationTime === b && e >= d) return;
        c !== Pf && Ff(c);
      }

      a.callbackExpirationTime = b;
      a.callbackPriority = d;
      b = 1073741823 === b ? $f(xj.bind(null, a)) : Zf(d, Cj.bind(null, a), {
        timeout: 10 * (1073741821 - b) - Vf()
      });
      a.callbackNode = b;
    }
  }
}

function Cj(a, b) {
  uj = 0;
  if (b) return b = Fg(), Dj(a, b), Z(a), null;
  var c = Aj(a);

  if (0 !== c) {
    b = a.callbackNode;
    if ((T & (Zi | $i)) !== S) throw t(Error(327));
    Ej();
    a === U && c === W || Fj(a, c);

    if (null !== V) {
      var d = T;
      T |= Zi;
      var e = Gj(a);

      do try {
        Hj();
        break;
      } catch (h) {
        Ij(a, h);
      } while (1);

      hg();
      T = d;
      Wi.current = e;
      if (X === bj) throw b = hj, Fj(a, c), yj(a, c), Z(a), b;
      if (null === V) switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, Jj(a, c), d = X, U = null, d) {
        case aj:
        case bj:
          throw t(Error(345));

        case cj:
          if (2 !== c) {
            Dj(a, 2);
            break;
          }

          Kj(a);
          break;

        case dj:
          yj(a, c);
          d = a.lastSuspendedTime;
          c === d && (a.nextKnownPendingLevel = Lj(e));

          if (1073741823 === ij && (e = Mi + nj - Vf(), 10 < e)) {
            if (mj) {
              var f = a.lastPingedTime;

              if (0 === f || f >= c) {
                a.lastPingedTime = c;
                Fj(a, c);
                break;
              }
            }

            f = Aj(a);
            if (0 !== f && f !== c) break;

            if (0 !== d && d !== c) {
              a.lastPingedTime = d;
              break;
            }

            a.timeoutHandle = he(Kj.bind(null, a), e);
            break;
          }

          Kj(a);
          break;

        case ej:
          yj(a, c);
          d = a.lastSuspendedTime;
          c === d && (a.nextKnownPendingLevel = Lj(e));

          if (mj && (e = a.lastPingedTime, 0 === e || e >= c)) {
            a.lastPingedTime = c;
            Fj(a, c);
            break;
          }

          e = Aj(a);
          if (0 !== e && e !== c) break;

          if (0 !== d && d !== c) {
            a.lastPingedTime = d;
            break;
          }

          1073741823 !== jj ? d = 10 * (1073741821 - jj) - Vf() : 1073741823 === ij ? d = 0 : (d = 10 * (1073741821 - ij) - 5E3, e = Vf(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * Vi(d / 1960)) - d, c < d && (d = c));

          if (10 < d) {
            a.timeoutHandle = he(Kj.bind(null, a), d);
            break;
          }

          Kj(a);
          break;

        case fj:
          if (1073741823 !== ij && null !== kj) {
            f = ij;
            var g = kj;
            d = g.busyMinDurationMs | 0;
            0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = Vf() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5E3)), d = f <= e ? 0 : e + d - f);

            if (10 < d) {
              yj(a, c);
              a.timeoutHandle = he(Kj.bind(null, a), d);
              break;
            }
          }

          Kj(a);
          break;

        case gj:
          yj(a, c);
          break;

        default:
          throw t(Error(329));
      }
      Z(a);
      if (a.callbackNode === b) return Cj.bind(null, a);
    }
  }

  return null;
}

function xj(a) {
  var b = a.lastExpiredTime;
  b = 0 !== b ? b : 1073741823;
  if (a.finishedExpirationTime === b) Kj(a);else {
    if ((T & (Zi | $i)) !== S) throw t(Error(327));
    Ej();
    a === U && b === W || Fj(a, b);

    if (null !== V) {
      var c = T;
      T |= Zi;
      var d = Gj(a);

      do try {
        Mj();
        break;
      } catch (e) {
        Ij(a, e);
      } while (1);

      hg();
      T = c;
      Wi.current = d;
      if (X === bj) throw c = hj, Fj(a, b), yj(a, b), Z(a), c;
      if (null !== V) throw t(Error(261));
      a.finishedWork = a.current.alternate;
      a.finishedExpirationTime = b;
      Jj(a, b);
      X === gj ? yj(a, b) : (U = null, Kj(a));
      Z(a);
    }
  }
  return null;
}

function Nj() {
  (T & (1 | Zi | $i)) === S && (Oj(), Ej());
}

function Jj(a, b) {
  var c = a.firstBatch;
  null !== c && c._defer && c._expirationTime >= b && (Zf(97, function () {
    c._onComplete();

    return null;
  }), X = gj);
}

function Oj() {
  if (null !== rj) {
    var a = rj;
    rj = null;
    a.forEach(function (a, c) {
      Dj(c, a);
      Z(c);
    });
    bg();
  }
}

function Pj(a, b) {
  var c = T;
  T |= 1;

  try {
    return a(b);
  } finally {
    T = c, T === S && bg();
  }
}

function Qj(a, b, c, d) {
  var e = T;
  T |= 4;

  try {
    return Yf(98, a.bind(null, b, c, d));
  } finally {
    T = e, T === S && bg();
  }
}

function Rj(a, b) {
  var c = T;
  T &= -2;
  T |= Yi;

  try {
    return a(b);
  } finally {
    T = c, T === S && bg();
  }
}

function Fj(a, b) {
  a.finishedWork = null;
  a.finishedExpirationTime = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, ie(c));
  if (null !== V) for (c = V.return; null !== c;) {
    var d = c;

    switch (d.tag) {
      case 1:
        var e = d.type.childContextTypes;
        null !== e && void 0 !== e && wf(d);
        break;

      case 3:
        dh(d);
        xf(d);
        break;

      case 5:
        fh(d);
        break;

      case 4:
        dh(d);
        break;

      case 13:
        H(O, d);
        break;

      case 19:
        H(O, d);
        break;

      case 10:
        jg(d);
    }

    c = c.return;
  }
  U = a;
  V = Rg(a.current, null, b);
  W = b;
  X = aj;
  hj = null;
  jj = ij = 1073741823;
  kj = null;
  lj = 0;
  mj = !1;
}

function Ij(a, b) {
  do {
    try {
      hg();
      Ah();
      if (null === V || null === V.return) return X = bj, hj = b, null;

      a: {
        var c = a,
            d = V.return,
            e = V,
            f = b;
        b = W;
        e.effectTag |= 2048;
        e.firstEffect = e.lastEffect = null;

        if (null !== f && "object" === typeof f && "function" === typeof f.then) {
          var g = f,
              h = 0 !== (O.current & 1),
              k = d;

          do {
            var l;

            if (l = 13 === k.tag) {
              var m = k.memoizedState;
              if (null !== m) l = null !== m.dehydrated ? !0 : !1;else {
                var A = k.memoizedProps;
                l = void 0 === A.fallback ? !1 : !0 !== A.unstable_avoidThisFallback ? !0 : h ? !1 : !0;
              }
            }

            if (l) {
              var w = k.updateQueue;

              if (null === w) {
                var L = new Set();
                L.add(g);
                k.updateQueue = L;
              } else w.add(g);

              if (0 === (k.mode & 2)) {
                k.effectTag |= 64;
                e.effectTag &= -2981;
                if (1 === e.tag) if (null === e.alternate) e.tag = 17;else {
                  var wb = rg(1073741823, null);
                  wb.tag = 2;
                  tg(e, wb);
                }
                e.expirationTime = 1073741823;
                break a;
              }

              f = void 0;
              e = b;
              var M = c.pingCache;
              null === M ? (M = c.pingCache = new Pi(), f = new Set(), M.set(g, f)) : (f = M.get(g), void 0 === f && (f = new Set(), M.set(g, f)));

              if (!f.has(e)) {
                f.add(e);
                var q = Sj.bind(null, c, g, e);
                g.then(q, q);
              }

              k.effectTag |= 4096;
              k.expirationTime = b;
              break a;
            }

            k = k.return;
          } while (null !== k);

          f = Error((Va(e.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + Wa(e));
        }

        X !== fj && (X = cj);
        f = ti(f, e);
        k = d;

        do {
          switch (k.tag) {
            case 3:
              g = f;
              k.effectTag |= 4096;
              k.expirationTime = b;
              var y = Qi(k, g, b);
              ug(k, y);
              break a;

            case 1:
              g = f;
              var z = k.type,
                  p = k.stateNode;

              if ((k.effectTag & 64) === D && ("function" === typeof z.getDerivedStateFromError || null !== p && "function" === typeof p.componentDidCatch && (null === Ui || !Ui.has(p)))) {
                k.effectTag |= 4096;
                k.expirationTime = b;
                var u = Ti(k, g, b);
                ug(k, u);
                break a;
              }

          }

          k = k.return;
        } while (null !== k);
      }

      V = Tj(V);
    } catch (v) {
      b = v;
      continue;
    }

    break;
  } while (1);
}

function Gj() {
  var a = Wi.current;
  Wi.current = zh;
  return null === a ? zh : a;
}

function yg(a, b) {
  a < ij && 2 < a && (ij = a);
  null !== b && a < jj && 2 < a && (jj = a, kj = b);
}

function zg(a) {
  a > lj && (lj = a);
}

function Mj() {
  for (; null !== V;) V = Uj(V);
}

function Hj() {
  for (; null !== V && !Gf();) V = Uj(V);
}

function Uj(a) {
  var b = Vj(a.alternate, a, W);
  a.memoizedProps = a.pendingProps;
  null === b && (b = Tj(a));
  Xi.current = null;
  return b;
}

function Tj(a) {
  V = a;

  do {
    var b = V.alternate;
    a = V.return;

    if ((V.effectTag & 2048) === D) {
      a: {
        var c = b;
        b = V;
        var d = W,
            e = b.pendingProps;

        switch (b.tag) {
          case 2:
            break;

          case 16:
            break;

          case 15:
          case 0:
            break;

          case 1:
            N(b.type) && wf(b);
            break;

          case 3:
            dh(b);
            xf(b);
            d = b.stateNode;
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            (null === c || null === c.child) && Wh(b) && mi(b);
            oi(b);
            break;

          case 5:
            fh(b);
            d = bh(ah.current);
            var f = b.type;
            if (null !== c && null != b.stateNode) pi(c, b, f, e, d), c.ref !== b.ref && (b.effectTag |= 128);else if (e) {
              var g = bh(Zg.current);

              if (Wh(b)) {
                e = b;
                f = void 0;
                c = e.stateNode;
                var h = e.type,
                    k = e.memoizedProps;
                c[me] = e;
                c[ne] = k;

                switch (h) {
                  case "iframe":
                  case "object":
                  case "embed":
                    G("load", c);
                    break;

                  case "video":
                  case "audio":
                    for (var l = 0; l < dc.length; l++) G(dc[l], c);

                    break;

                  case "source":
                    G("error", c);
                    break;

                  case "img":
                  case "image":
                  case "link":
                    G("error", c);
                    G("load", c);
                    break;

                  case "form":
                    G("reset", c);
                    G("submit", c);
                    break;

                  case "details":
                    G("toggle", c);
                    break;

                  case "input":
                    Bb(c, k);
                    G("invalid", c);
                    Sd(d, "onChange");
                    break;

                  case "select":
                    c._wrapperState = {
                      wasMultiple: !!k.multiple
                    };
                    G("invalid", c);
                    Sd(d, "onChange");
                    break;

                  case "textarea":
                    Lb(c, k), G("invalid", c), Sd(d, "onChange");
                }

                Qd(h, k);
                l = null;

                for (f in k) k.hasOwnProperty(f) && (g = k[f], "children" === f ? "string" === typeof g ? c.textContent !== g && (l = ["children", g]) : "number" === typeof g && c.textContent !== "" + g && (l = ["children", "" + g]) : ia.hasOwnProperty(f) && null != g && Sd(d, f));

                switch (h) {
                  case "input":
                    yb(c);
                    Gb(c, k, !0);
                    break;

                  case "textarea":
                    yb(c);
                    Nb(c, k);
                    break;

                  case "select":
                  case "option":
                    break;

                  default:
                    "function" === typeof k.onClick && (c.onclick = Td);
                }

                d = l;
                e.updateQueue = d;
                null !== d && mi(b);
              } else {
                k = f;
                c = e;
                h = b;
                l = 9 === d.nodeType ? d : d.ownerDocument;
                g === Ob.html && (g = Pb(k));
                g === Ob.html ? "script" === k ? (k = l.createElement("div"), k.innerHTML = "<script>\x3c/script>", l = k.removeChild(k.firstChild)) : "string" === typeof c.is ? l = l.createElement(k, {
                  is: c.is
                }) : (l = l.createElement(k), "select" === k && (k = l, c.multiple ? k.multiple = !0 : c.size && (k.size = c.size))) : l = l.createElementNS(g, k);
                k = l;
                k[me] = h;
                k[ne] = c;
                c = k;
                ni(c, b, !1, !1);
                b.stateNode = c;
                g = d;
                var m = Rd(f, e);

                switch (f) {
                  case "iframe":
                  case "object":
                  case "embed":
                    G("load", c);
                    d = e;
                    break;

                  case "video":
                  case "audio":
                    for (d = 0; d < dc.length; d++) G(dc[d], c);

                    d = e;
                    break;

                  case "source":
                    G("error", c);
                    d = e;
                    break;

                  case "img":
                  case "image":
                  case "link":
                    G("error", c);
                    G("load", c);
                    d = e;
                    break;

                  case "form":
                    G("reset", c);
                    G("submit", c);
                    d = e;
                    break;

                  case "details":
                    G("toggle", c);
                    d = e;
                    break;

                  case "input":
                    Bb(c, e);
                    d = Ab(c, e);
                    G("invalid", c);
                    Sd(g, "onChange");
                    break;

                  case "option":
                    d = Ib(c, e);
                    break;

                  case "select":
                    c._wrapperState = {
                      wasMultiple: !!e.multiple
                    };
                    d = n({}, e, {
                      value: void 0
                    });
                    G("invalid", c);
                    Sd(g, "onChange");
                    break;

                  case "textarea":
                    Lb(c, e);
                    d = Kb(c, e);
                    G("invalid", c);
                    Sd(g, "onChange");
                    break;

                  default:
                    d = e;
                }

                Qd(f, d);
                h = void 0;
                k = f;
                l = c;
                var A = d;

                for (h in A) if (A.hasOwnProperty(h)) {
                  var w = A[h];
                  "style" === h ? Od(l, w) : "dangerouslySetInnerHTML" === h ? (w = w ? w.__html : void 0, null != w && Sb(l, w)) : "children" === h ? "string" === typeof w ? ("textarea" !== k || "" !== w) && Tb(l, w) : "number" === typeof w && Tb(l, "" + w) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (ia.hasOwnProperty(h) ? null != w && Sd(g, h) : null != w && ub(l, h, w, m));
                }

                switch (f) {
                  case "input":
                    yb(c);
                    Gb(c, e, !1);
                    break;

                  case "textarea":
                    yb(c);
                    Nb(c, e);
                    break;

                  case "option":
                    null != e.value && c.setAttribute("value", "" + tb(e.value));
                    break;

                  case "select":
                    d = c;
                    c = e;
                    d.multiple = !!c.multiple;
                    h = c.value;
                    null != h ? Jb(d, !!c.multiple, h, !1) : null != c.defaultValue && Jb(d, !!c.multiple, c.defaultValue, !0);
                    break;

                  default:
                    "function" === typeof d.onClick && (c.onclick = Td);
                }

                fe(f, e) && mi(b);
              }

              null !== b.ref && (b.effectTag |= 128);
            } else if (null === b.stateNode) throw t(Error(166));
            break;

          case 6:
            if (c && null != b.stateNode) qi(c, b, c.memoizedProps, e);else {
              if ("string" !== typeof e && null === b.stateNode) throw t(Error(166));
              f = bh(ah.current);
              bh(Zg.current);
              Wh(b) ? (d = b.stateNode, e = b.memoizedProps, d[me] = b, d.nodeValue !== e && mi(b)) : (d = b, e = (9 === f.nodeType ? f : f.ownerDocument).createTextNode(e), e[me] = b, d.stateNode = e);
            }
            break;

          case 11:
            break;

          case 13:
            H(O, b);
            e = b.memoizedState;

            if ((b.effectTag & 64) !== D) {
              b.expirationTime = d;
              break a;
            }

            d = null !== e;
            e = !1;
            null === c ? Wh(b) : (f = c.memoizedState, e = null !== f, d || null === f || (f = c.child.sibling, null !== f && (h = b.firstEffect, null !== h ? (b.firstEffect = f, f.nextEffect = h) : (b.firstEffect = b.lastEffect = f, f.nextEffect = null), f.effectTag = 8)));
            if (d && !e && 0 !== (b.mode & 2)) if (null === c && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (O.current & 1)) X === aj && (X = dj);else {
              if (X === aj || X === dj) X = ej;
              0 !== lj && null !== U && (yj(U, W), zj(U, lj));
            }
            if (d || e) b.effectTag |= 4;
            break;

          case 7:
            break;

          case 8:
            break;

          case 12:
            break;

          case 4:
            dh(b);
            oi(b);
            break;

          case 10:
            jg(b);
            break;

          case 9:
            break;

          case 14:
            break;

          case 17:
            N(b.type) && wf(b);
            break;

          case 19:
            H(O, b);
            e = b.memoizedState;
            if (null === e) break;
            f = (b.effectTag & 64) !== D;
            h = e.rendering;
            if (null === h) {
              if (f) ri(e, !1);else {
                if (X !== aj || null !== c && (c.effectTag & 64) !== D) for (c = b.child; null !== c;) {
                  h = gh(c);

                  if (null !== h) {
                    b.effectTag |= 64;
                    ri(e, !1);
                    e = h.updateQueue;
                    null !== e && (b.updateQueue = e, b.effectTag |= 4);
                    b.firstEffect = b.lastEffect = null;

                    for (e = b.child; null !== e;) f = e, c = d, f.effectTag &= E, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, h = f.alternate, null === h ? (f.childExpirationTime = 0, f.expirationTime = c, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null) : (f.childExpirationTime = h.childExpirationTime, f.expirationTime = h.expirationTime, f.child = h.child, f.memoizedProps = h.memoizedProps, f.memoizedState = h.memoizedState, f.updateQueue = h.updateQueue, c = h.dependencies, f.dependencies = null === c ? null : {
                      expirationTime: c.expirationTime,
                      firstContext: c.firstContext,
                      responders: c.responders
                    }), e = e.sibling;

                    I(O, O.current & 1 | 2, b);
                    b = b.child;
                    break a;
                  }

                  c = c.sibling;
                }
              }
            } else {
              if (!f) if (c = gh(h), null !== c) {
                if (b.effectTag |= 64, f = !0, ri(e, !0), null === e.tail && "hidden" === e.tailMode) {
                  d = c.updateQueue;
                  null !== d && (b.updateQueue = d, b.effectTag |= 4);
                  b = b.lastEffect = e.lastEffect;
                  null !== b && (b.nextEffect = null);
                  break;
                }
              } else Vf() > e.tailExpiration && 1 < d && (b.effectTag |= 64, f = !0, ri(e, !1), b.expirationTime = b.childExpirationTime = d - 1);
              e.isBackwards ? (h.sibling = b.child, b.child = h) : (d = e.last, null !== d ? d.sibling = h : b.child = h, e.last = h);
            }

            if (null !== e.tail) {
              0 === e.tailExpiration && (e.tailExpiration = Vf() + 500);
              d = e.tail;
              e.rendering = d;
              e.tail = d.sibling;
              e.lastEffect = b.lastEffect;
              d.sibling = null;
              e = O.current;
              e = f ? e & 1 | 2 : e & 1;
              I(O, e, b);
              b = d;
              break a;
            }

            break;

          case 20:
            break;

          case 21:
            break;

          default:
            throw t(Error(156), b.tag);
        }

        b = null;
      }

      d = V;

      if (1 === W || 1 !== d.childExpirationTime) {
        e = 0;

        for (f = d.child; null !== f;) c = f.expirationTime, h = f.childExpirationTime, c > e && (e = c), h > e && (e = h), f = f.sibling;

        d.childExpirationTime = e;
      }

      if (null !== b) return b;
      null !== a && (a.effectTag & 2048) === D && (null === a.firstEffect && (a.firstEffect = V.firstEffect), null !== V.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = V.firstEffect), a.lastEffect = V.lastEffect), 1 < V.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = V : a.firstEffect = V, a.lastEffect = V));
    } else {
      b = si(V, W);
      if (null !== b) return b.effectTag &= 2047, b;
      null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
    }

    b = V.sibling;
    if (null !== b) return b;
    V = a;
  } while (null !== V);

  X === aj && (X = fj);
  return null;
}

function Lj(a) {
  var b = a.expirationTime;
  a = a.childExpirationTime;
  return b > a ? b : a;
}

function Kj(a) {
  var b = Wf();
  Yf(99, Wj.bind(null, a, b));
  return null;
}

function Wj(a, b) {
  Ej();
  if ((T & (Zi | $i)) !== S) throw t(Error(327));
  var c = a.finishedWork,
      d = a.finishedExpirationTime;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedExpirationTime = 0;
  if (c === a.current) throw t(Error(177));
  a.callbackNode = null;
  a.callbackExpirationTime = 0;
  a.callbackPriority = 90;
  a.nextKnownPendingLevel = 0;
  var e = Lj(c);
  a.firstPendingTime = e;
  d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
  d <= a.lastPingedTime && (a.lastPingedTime = 0);
  d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
  a === U && (V = U = null, W = 0);
  1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;

  if (null !== e) {
    var f = T;
    T |= $i;
    Xi.current = null;
    de = Dd;
    var g = Yd();

    if (Zd(g)) {
      if ("selectionStart" in g) var h = {
        start: g.selectionStart,
        end: g.selectionEnd
      };else a: {
        h = (h = g.ownerDocument) && h.defaultView || window;
        var k = h.getSelection && h.getSelection();

        if (k && 0 !== k.rangeCount) {
          h = k.anchorNode;
          var l = k.anchorOffset,
              m = k.focusNode;
          k = k.focusOffset;

          try {
            h.nodeType, m.nodeType;
          } catch (Fb) {
            h = null;
            break a;
          }

          var A = 0,
              w = -1,
              L = -1,
              wb = 0,
              M = 0,
              q = g,
              y = null;

          b: for (;;) {
            for (var z;;) {
              q !== h || 0 !== l && 3 !== q.nodeType || (w = A + l);
              q !== m || 0 !== k && 3 !== q.nodeType || (L = A + k);
              3 === q.nodeType && (A += q.nodeValue.length);
              if (null === (z = q.firstChild)) break;
              y = q;
              q = z;
            }

            for (;;) {
              if (q === g) break b;
              y === h && ++wb === l && (w = A);
              y === m && ++M === k && (L = A);
              if (null !== (z = q.nextSibling)) break;
              q = y;
              y = q.parentNode;
            }

            q = z;
          }

          h = -1 === w || -1 === L ? null : {
            start: w,
            end: L
          };
        } else h = null;
      }
      h = h || {
        start: 0,
        end: 0
      };
    } else h = null;

    ee = {
      focusedElem: g,
      selectionRange: h
    };
    Dd = !1;
    Y = e;

    do try {
      Xj();
    } catch (Fb) {
      if (null === Y) throw t(Error(330));
      xi(Y, Fb);
      Y = Y.nextEffect;
    } while (null !== Y);

    Y = e;

    do try {
      for (g = a, h = b; null !== Y;) {
        var p = Y.effectTag;
        p & 16 && Tb(Y.stateNode, "");

        if (p & 128) {
          var u = Y.alternate;

          if (null !== u) {
            var v = u.ref;
            null !== v && ("function" === typeof v ? v(null) : v.current = null);
          }
        }

        switch (p & (E | 12 | Ac)) {
          case E:
            Ki(Y);
            Y.effectTag &= ~E;
            break;

          case 6:
            Ki(Y);
            Y.effectTag &= ~E;
            Li(Y.alternate, Y);
            break;

          case Ac:
            Y.effectTag &= ~Ac;
            break;

          case 1028:
            Y.effectTag &= ~Ac;
            Li(Y.alternate, Y);
            break;

          case 4:
            Li(Y.alternate, Y);
            break;

          case 8:
            l = Y, Hi(g, l, h), Ii(l);
        }

        Y = Y.nextEffect;
      }
    } catch (Fb) {
      if (null === Y) throw t(Error(330));
      xi(Y, Fb);
      Y = Y.nextEffect;
    } while (null !== Y);

    v = ee;
    u = Yd();
    p = v.focusedElem;
    h = v.selectionRange;

    if (u !== p && p && p.ownerDocument && Xd(p.ownerDocument.documentElement, p)) {
      null !== h && Zd(p) && (u = h.start, v = h.end, void 0 === v && (v = u), "selectionStart" in p ? (p.selectionStart = u, p.selectionEnd = Math.min(v, p.value.length)) : (v = (u = p.ownerDocument || document) && u.defaultView || window, v.getSelection && (v = v.getSelection(), l = p.textContent.length, g = Math.min(h.start, l), h = void 0 === h.end ? g : Math.min(h.end, l), !v.extend && g > h && (l = h, h = g, g = l), l = Wd(p, g), m = Wd(p, h), l && m && (1 !== v.rangeCount || v.anchorNode !== l.node || v.anchorOffset !== l.offset || v.focusNode !== m.node || v.focusOffset !== m.offset) && (u = u.createRange(), u.setStart(l.node, l.offset), v.removeAllRanges(), g > h ? (v.addRange(u), v.extend(m.node, m.offset)) : (u.setEnd(m.node, m.offset), v.addRange(u))))));
      u = [];

      for (v = p; v = v.parentNode;) 1 === v.nodeType && u.push({
        element: v,
        left: v.scrollLeft,
        top: v.scrollTop
      });

      "function" === typeof p.focus && p.focus();

      for (p = 0; p < u.length; p++) v = u[p], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
    }

    ee = null;
    Dd = !!de;
    de = null;
    a.current = c;
    Y = e;

    do try {
      for (p = d; null !== Y;) {
        var Bh = Y.effectTag;

        if (Bh & 36) {
          var cc = Y.alternate;
          u = Y;
          v = p;

          switch (u.tag) {
            case 0:
            case 11:
            case 15:
              Ei(16, 32, u);
              break;

            case 1:
              var ed = u.stateNode;
              if (u.effectTag & 4) if (null === cc) ed.componentDidMount();else {
                var Zj = u.elementType === u.type ? cc.memoizedProps : cg(u.type, cc.memoizedProps);
                ed.componentDidUpdate(Zj, cc.memoizedState, ed.__reactInternalSnapshotBeforeUpdate);
              }
              var Ch = u.updateQueue;
              null !== Ch && Ag(u, Ch, ed, v);
              break;

            case 3:
              var Dh = u.updateQueue;

              if (null !== Dh) {
                g = null;
                if (null !== u.child) switch (u.child.tag) {
                  case 5:
                    g = u.child.stateNode;
                    break;

                  case 1:
                    g = u.child.stateNode;
                }
                Ag(u, Dh, g, v);
              }

              break;

            case 5:
              var pk = u.stateNode;
              null === cc && u.effectTag & 4 && (v = pk, fe(u.type, u.memoizedProps) && v.focus());
              break;

            case 6:
              break;

            case 4:
              break;

            case 12:
              break;

            case 13:
              if (null === u.memoizedState) {
                var zi = u.alternate;

                if (null !== zi) {
                  var Ai = zi.memoizedState;

                  if (null !== Ai) {
                    var Bi = Ai.dehydrated;
                    null !== Bi && zc(Bi);
                  }
                }
              }

              break;

            case 19:
            case 17:
            case 20:
            case 21:
              break;

            default:
              throw t(Error(163));
          }
        }

        if (Bh & 128) {
          u = Y;
          var yd = u.ref;

          if (null !== yd) {
            var Ci = u.stateNode;

            switch (u.tag) {
              case 5:
                var yf = Ci;
                break;

              default:
                yf = Ci;
            }

            "function" === typeof yd ? yd(yf) : yd.current = yf;
          }
        }

        Y = Y.nextEffect;
      }
    } catch (Fb) {
      if (null === Y) throw t(Error(330));
      xi(Y, Fb);
      Y = Y.nextEffect;
    } while (null !== Y);

    Y = null;
    Qf();
    T = f;
  } else a.current = c;

  if (oj) oj = !1, pj = a, qj = b;else for (Y = e; null !== Y;) b = Y.nextEffect, Y.nextEffect = null, Y = b;
  b = a.firstPendingTime;
  0 === b && (Ui = null);
  1073741823 === b ? a === tj ? sj++ : (sj = 0, tj = a) : sj = 0;
  "function" === typeof Yj && Yj(c.stateNode, d);
  Z(a);
  if (Ri) throw Ri = !1, a = Si, Si = null, a;
  if ((T & Yi) !== S) return null;
  bg();
  return null;
}

function Xj() {
  for (; null !== Y;) {
    var a = Y.effectTag;
    (a & 256) !== D && Di(Y.alternate, Y);
    (a & 512) === D || oj || (oj = !0, Zf(97, function () {
      Ej();
      return null;
    }));
    Y = Y.nextEffect;
  }
}

function Ej() {
  if (90 !== qj) {
    var a = 97 < qj ? 97 : qj;
    qj = 90;
    return Yf(a, ak);
  }
}

function ak() {
  if (null === pj) return !1;
  var a = pj;
  pj = null;
  if ((T & (Zi | $i)) !== S) throw t(Error(331));
  var b = T;
  T |= $i;

  for (a = a.current.firstEffect; null !== a;) {
    try {
      var c = a;
      if ((c.effectTag & 512) !== D) switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Ei(128, 0, c), Ei(0, 64, c);
      }
    } catch (d) {
      if (null === a) throw t(Error(330));
      xi(a, d);
    }

    c = a.nextEffect;
    a.nextEffect = null;
    a = c;
  }

  T = b;
  bg();
  return !0;
}

function bk(a, b, c) {
  b = ti(c, b);
  b = Qi(a, b, 1073741823);
  tg(a, b);
  a = wj(a, 1073741823);
  null !== a && Z(a);
}

function xi(a, b) {
  if (3 === a.tag) bk(a, a, b);else for (var c = a.return; null !== c;) {
    if (3 === c.tag) {
      bk(c, a, b);
      break;
    } else if (1 === c.tag) {
      var d = c.stateNode;

      if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ui || !Ui.has(d))) {
        a = ti(b, a);
        a = Ti(c, a, 1073741823);
        tg(c, a);
        c = wj(c, 1073741823);
        null !== c && Z(c);
        break;
      }
    }

    c = c.return;
  }
}

function Sj(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  U === a && W === c ? X === ej || X === dj && 1073741823 === ij && Vf() - Mi < nj ? Fj(a, W) : mj = !0 : Bj(a, c) && (b = a.lastPingedTime, 0 !== b && b < c || (a.lastPingedTime = c, a.finishedExpirationTime === c && (a.finishedExpirationTime = 0, a.finishedWork = null), Z(a)));
}

function Oi(a, b) {
  var c = a.stateNode;
  null !== c && c.delete(b);
  b = 1;
  1 === b && (b = Fg(), b = Gg(b, a, null));
  a = wj(a, b);
  null !== a && Z(a);
}

var Vj;

Vj = function (a, b, c) {
  var d = b.expirationTime;

  if (null !== a) {
    var e = b.pendingProps;
    if (a.memoizedProps !== e || K.current) mg = !0;else {
      if (d < c) {
        mg = !1;

        switch (b.tag) {
          case 3:
            hi(b);
            Xh();
            break;

          case 5:
            eh(b);
            if (b.mode & 4 && 1 !== c && e.hidden) return b.expirationTime = b.childExpirationTime = 1, null;
            break;

          case 1:
            N(b.type) && Bf(b);
            break;

          case 4:
            ch(b, b.stateNode.containerInfo);
            break;

          case 10:
            ig(b, b.memoizedProps.value);
            break;

          case 13:
            if (null !== b.memoizedState) {
              d = b.child.childExpirationTime;
              if (0 !== d && d >= c) return ji(a, b, c);
              I(O, O.current & 1, b);
              b = $h(a, b, c);
              return null !== b ? b.sibling : null;
            }

            I(O, O.current & 1, b);
            break;

          case 19:
            d = b.childExpirationTime >= c;

            if ((a.effectTag & 64) !== D) {
              if (d) return li(a, b, c);
              b.effectTag |= 64;
            }

            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null);
            I(O, O.current, b);
            if (!d) return null;
        }

        return $h(a, b, c);
      }

      mg = !1;
    }
  } else mg = !1;

  b.expirationTime = 0;

  switch (b.tag) {
    case 2:
      d = b.type;
      null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= E);
      a = b.pendingProps;
      e = vf(b, J.current);
      lg(b, c);
      e = wh(null, b, d, a, e, c);
      b.effectTag |= 1;

      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
        b.tag = 1;
        Ah();

        if (N(d)) {
          var f = !0;
          Bf(b);
        } else f = !1;

        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
        var g = d.getDerivedStateFromProps;
        "function" === typeof g && Eg(b, d, g, a);
        e.updater = Ig;
        b.stateNode = e;
        e._reactInternalFiber = b;
        Mg(b, d, a, c);
        b = gi(null, b, d, !0, f, c);
      } else b.tag = 0, R(null, b, e, c), b = b.child;

      return b;

    case 16:
      e = b.elementType;
      null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= E);
      a = b.pendingProps;
      Ua(e);
      if (1 !== e._status) throw e._result;
      e = e._result;
      b.type = e;
      f = b.tag = ck(e);
      a = cg(e, a);

      switch (f) {
        case 0:
          b = di(null, b, e, a, c);
          break;

        case 1:
          b = fi(null, b, e, a, c);
          break;

        case 11:
          b = Zh(null, b, e, a, c);
          break;

        case 14:
          b = ai(null, b, e, cg(e.type, a), d, c);
          break;

        default:
          throw t(Error(306), e, "");
      }

      return b;

    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : cg(d, e), di(a, b, d, e, c);

    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : cg(d, e), fi(a, b, d, e, c);

    case 3:
      hi(b);
      d = b.updateQueue;
      if (null === d) throw t(Error(282));
      e = b.memoizedState;
      e = null !== e ? e.element : null;
      xg(b, d, b.pendingProps, null, c);
      d = b.memoizedState.element;
      if (d === e) Xh(), b = $h(a, b, c);else {
        if (e = b.stateNode.hydrate) Ph = je(b.stateNode.containerInfo.firstChild), Oh = b, e = Qh = !0;
        if (e) for (c = Xg(b, null, d, c), b.child = c; c;) c.effectTag = c.effectTag & ~E | Ac, c = c.sibling;else R(a, b, d, c), Xh();
        b = b.child;
      }
      return b;

    case 5:
      return eh(b), null === a && Uh(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, ge(d, e) ? g = null : null !== f && ge(d, f) && (b.effectTag |= 16), ei(a, b), b.mode & 4 && 1 !== c && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (R(a, b, g, c), b = b.child), b;

    case 6:
      return null === a && Uh(b), null;

    case 13:
      return ji(a, b, c);

    case 4:
      return ch(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Wg(b, null, d, c) : R(a, b, d, c), b.child;

    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : cg(d, e), Zh(a, b, d, e, c);

    case 7:
      return R(a, b, b.pendingProps, c), b.child;

    case 8:
      return R(a, b, b.pendingProps.children, c), b.child;

    case 12:
      return R(a, b, b.pendingProps.children, c), b.child;

    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        ig(b, f);

        if (null !== g) {
          var h = g.value;
          f = ff(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;

          if (0 === f) {
            if (g.children === e.children && !K.current) {
              b = $h(a, b, c);
              break a;
            }
          } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
            var k = h.dependencies;

            if (null !== k) {
              g = h.child;

              for (var l = k.firstContext; null !== l;) {
                if (l.context === d && 0 !== (l.observedBits & f)) {
                  1 === h.tag && (l = rg(c, null), l.tag = 2, tg(h, l));
                  h.expirationTime < c && (h.expirationTime = c);
                  l = h.alternate;
                  null !== l && l.expirationTime < c && (l.expirationTime = c);
                  kg(h.return, c);
                  k.expirationTime < c && (k.expirationTime = c);
                  break;
                }

                l = l.next;
              }
            } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

            if (null !== g) g.return = h;else for (g = h; null !== g;) {
              if (g === b) {
                g = null;
                break;
              }

              h = g.sibling;

              if (null !== h) {
                h.return = g.return;
                g = h;
                break;
              }

              g = g.return;
            }
            h = g;
          }
        }

        R(a, b, e.children, c);
        b = b.child;
      }

      return b;

    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, lg(b, c), e = ng(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, R(a, b, d, c), b.child;

    case 14:
      return e = b.type, f = cg(e, b.pendingProps), f = cg(e.type, f), ai(a, b, e, f, d, c);

    case 15:
      return ci(a, b, b.type, b.pendingProps, d, c);

    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : cg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= E), b.tag = 1, N(d) ? (a = !0, Bf(b)) : a = !1, lg(b, c), Kg(b, d, e, c), Mg(b, d, e, c), gi(null, b, d, !0, a, c);

    case 19:
      return li(a, b, c);
  }

  throw t(Error(156), b.tag);
};

var Yj = null,
    Gi = null;

function dk(a) {
  if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
  var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (b.isDisabled || !b.supportsFiber) return !0;

  try {
    var c = b.inject(a);

    Yj = function (a) {
      try {
        b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64));
      } catch (e) {}
    };

    Gi = function (a) {
      try {
        b.onCommitFiberUnmount(c, a);
      } catch (e) {}
    };
  } catch (d) {}

  return !0;
}

function ek(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.effectTag = D;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childExpirationTime = this.expirationTime = 0;
  this.alternate = null;
}

function Sh(a, b, c, d) {
  return new ek(a, b, c, d);
}

function bi(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}

function ck(a) {
  if ("function" === typeof a) return bi(a) ? 1 : 0;

  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Na) return 11;
    if (a === Qa) return 14;
  }

  return 2;
}

function Rg(a, b) {
  var c = a.alternate;
  null === c ? (c = Sh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = D, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childExpirationTime = a.childExpirationTime;
  c.expirationTime = a.expirationTime;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : {
    expirationTime: b.expirationTime,
    firstContext: b.firstContext,
    responders: b.responders
  };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}

function Tg(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if ("function" === typeof a) bi(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
    case Ha:
      return Vg(c.children, e, f, b);

    case Ma:
      g = 8;
      e |= 7;
      break;

    case Ia:
      g = 8;
      e |= 1;
      break;

    case Ja:
      return a = Sh(12, c, b, e | 8), a.elementType = Ja, a.type = Ja, a.expirationTime = f, a;

    case Oa:
      return a = Sh(13, c, b, e), a.type = Oa, a.elementType = Oa, a.expirationTime = f, a;

    case Pa:
      return a = Sh(19, c, b, e), a.elementType = Pa, a.expirationTime = f, a;

    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ka:
          g = 10;
          break a;

        case La:
          g = 9;
          break a;

        case Na:
          g = 11;
          break a;

        case Qa:
          g = 14;
          break a;

        case Ra:
          g = 16;
          d = null;
          break a;
      }
      throw t(Error(130), null == a ? a : typeof a, "");
  }
  b = Sh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.expirationTime = f;
  return b;
}

function Vg(a, b, c, d) {
  a = Sh(7, a, d, b);
  a.expirationTime = c;
  return a;
}

function Sg(a, b, c) {
  a = Sh(6, a, null, b);
  a.expirationTime = c;
  return a;
}

function Ug(a, b, c) {
  b = Sh(4, null !== a.children ? a.children : [], a.key, b);
  b.expirationTime = c;
  b.stateNode = {
    containerInfo: a.containerInfo,
    pendingChildren: null,
    implementation: a.implementation
  };
  return b;
}

function fk(a, b, c) {
  this.tag = b;
  this.current = null;
  this.containerInfo = a;
  this.pingCache = this.pendingChildren = null;
  this.finishedExpirationTime = 0;
  this.finishedWork = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = this.firstBatch = null;
  this.callbackPriority = 90;
  this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
}

function Bj(a, b) {
  var c = a.firstSuspendedTime;
  a = a.lastSuspendedTime;
  return 0 !== c && c >= b && a <= b;
}

function yj(a, b) {
  var c = a.firstSuspendedTime,
      d = a.lastSuspendedTime;
  c < b && (a.firstSuspendedTime = b);
  if (d > b || 0 === c) a.lastSuspendedTime = b;
  b <= a.lastPingedTime && (a.lastPingedTime = 0);
  b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
}

function zj(a, b) {
  b > a.firstPendingTime && (a.firstPendingTime = b);
  var c = a.firstSuspendedTime;
  0 !== c && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
}

function Dj(a, b) {
  var c = a.lastExpiredTime;
  if (0 === c || c > b) a.lastExpiredTime = b;
}

function gk(a, b, c, d, e, f) {
  var g = b.current;

  a: if (c) {
    c = c._reactInternalFiber;

    b: {
      if (Bc(c) !== c || 1 !== c.tag) throw t(Error(170));
      var h = c;

      do {
        switch (h.tag) {
          case 3:
            h = h.stateNode.context;
            break b;

          case 1:
            if (N(h.type)) {
              h = h.stateNode.__reactInternalMemoizedMergedChildContext;
              break b;
            }

        }

        h = h.return;
      } while (null !== h);

      throw t(Error(171));
    }

    if (1 === c.tag) {
      var k = c.type;

      if (N(k)) {
        c = Af(c, k, h);
        break a;
      }
    }

    c = h;
  } else c = tf;

  null === b.context ? b.context = c : b.pendingContext = c;
  b = f;
  e = rg(d, e);
  e.payload = {
    element: a
  };
  b = void 0 === b ? null : b;
  null !== b && (e.callback = b);
  tg(g, e);
  Hg(g, d);
  return d;
}

function hk(a, b, c, d) {
  var e = b.current,
      f = Fg(),
      g = Cg.suspense;
  e = Gg(f, e, g);
  return gk(a, b, c, e, g, d);
}

function ik(a) {
  a = a.current;
  if (!a.child) return null;

  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;

    default:
      return a.child.stateNode;
  }
}

function jk(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: Ga,
    key: null == d ? null : "" + d,
    children: a,
    containerInfo: b,
    implementation: c
  };
}

Ya = function (a, b, c) {
  switch (b) {
    case "input":
      Db(a, c);
      b = c.name;

      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode;) c = c.parentNode;

        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');

        for (b = 0; b < c.length; b++) {
          var d = c[b];

          if (d !== a && d.form === a.form) {
            var e = re(d);
            if (!e) throw t(Error(90));
            zb(d);
            Db(d, e);
          }
        }
      }

      break;

    case "textarea":
      Mb(a, c);
      break;

    case "select":
      b = c.value, null != b && Jb(a, !!c.multiple, b, !1);
  }
};

function kk(a) {
  var b = 1073741821 - 25 * (((1073741821 - Fg() + 500) / 25 | 0) + 1);
  b <= vj && --b;
  this._expirationTime = vj = b;
  this._root = a;
  this._callbacks = this._next = null;
  this._hasChildren = this._didComplete = !1;
  this._children = null;
  this._defer = !0;
}

kk.prototype.render = function (a) {
  if (!this._defer) throw t(Error(250));
  this._hasChildren = !0;
  this._children = a;
  var b = this._root._internalRoot,
      c = this._expirationTime,
      d = new lk();
  gk(a, b, null, c, null, d._onCommit);
  return d;
};

kk.prototype.then = function (a) {
  if (this._didComplete) a();else {
    var b = this._callbacks;
    null === b && (b = this._callbacks = []);
    b.push(a);
  }
};

kk.prototype.commit = function () {
  var a = this._root._internalRoot,
      b = a.firstBatch;
  if (!this._defer || null === b) throw t(Error(251));

  if (this._hasChildren) {
    var c = this._expirationTime;

    if (b !== this) {
      this._hasChildren && (c = this._expirationTime = b._expirationTime, this.render(this._children));

      for (var d = null, e = b; e !== this;) d = e, e = e._next;

      if (null === d) throw t(Error(251));
      d._next = e._next;
      this._next = b;
      a.firstBatch = this;
    }

    this._defer = !1;
    b = c;
    if ((T & (Zi | $i)) !== S) throw t(Error(253));
    Dj(a, b);
    Z(a);
    bg();
    b = this._next;
    this._next = null;
    b = a.firstBatch = b;
    null !== b && b._hasChildren && b.render(b._children);
  } else this._next = null, this._defer = !1;
};

kk.prototype._onComplete = function () {
  if (!this._didComplete) {
    this._didComplete = !0;
    var a = this._callbacks;
    if (null !== a) for (var b = 0; b < a.length; b++) (0, a[b])();
  }
};

function lk() {
  this._callbacks = null;
  this._didCommit = !1;
  this._onCommit = this._onCommit.bind(this);
}

lk.prototype.then = function (a) {
  if (this._didCommit) a();else {
    var b = this._callbacks;
    null === b && (b = this._callbacks = []);
    b.push(a);
  }
};

lk.prototype._onCommit = function () {
  if (!this._didCommit) {
    this._didCommit = !0;
    var a = this._callbacks;
    if (null !== a) for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if ("function" !== typeof c) throw t(Error(191), c);
      c();
    }
  }
};

function mk(a, b, c) {
  c = null != c && !0 === c.hydrate;
  var d = new fk(a, b, c),
      e = Sh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
  d.current = e;
  e.stateNode = d;
  a[oe] = d.current;
  c && 0 !== b && nc(9 === a.nodeType ? a : a.ownerDocument);
  return d;
}

function nk(a, b, c) {
  this._internalRoot = mk(a, b, c);
}

function ok(a, b) {
  this._internalRoot = mk(a, 2, b);
}

ok.prototype.render = nk.prototype.render = function (a, b) {
  var c = this._internalRoot,
      d = new lk();
  b = void 0 === b ? null : b;
  null !== b && d.then(b);
  hk(a, c, null, d._onCommit);
  return d;
};

ok.prototype.unmount = nk.prototype.unmount = function (a) {
  var b = this._internalRoot,
      c = new lk();
  a = void 0 === a ? null : a;
  null !== a && c.then(a);
  hk(null, b, null, c._onCommit);
  return c;
};

ok.prototype.createBatch = function () {
  var a = new kk(this),
      b = a._expirationTime,
      c = this._internalRoot,
      d = c.firstBatch;
  if (null === d) c.firstBatch = a, a._next = null;else {
    for (c = null; null !== d && d._expirationTime >= b;) c = d, d = d._next;

    a._next = d;
    null !== c && (c._next = a);
  }
  return a;
};

function qk(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}

db = Pj;
eb = Qj;
fb = Nj;

gb = function (a, b) {
  var c = T;
  T |= 2;

  try {
    return a(b);
  } finally {
    T = c, T === S && bg();
  }
};

function rk(a, b) {
  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
  if (!b) for (var c; c = a.lastChild;) a.removeChild(c);
  return new nk(a, 0, b ? {
    hydrate: !0
  } : void 0);
}

function sk(a, b, c, d, e) {
  var f = c._reactRootContainer;

  if (f) {
    var g = f._internalRoot;

    if ("function" === typeof e) {
      var h = e;

      e = function () {
        var a = ik(g);
        h.call(a);
      };
    }

    hk(b, g, a, e);
  } else {
    f = c._reactRootContainer = rk(c, d);
    g = f._internalRoot;

    if ("function" === typeof e) {
      var k = e;

      e = function () {
        var a = ik(g);
        k.call(a);
      };
    }

    Rj(function () {
      hk(b, g, a, e);
    });
  }

  return ik(g);
}

function tk(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!qk(b)) throw t(Error(200));
  return jk(a, b, null, c);
}

var wk = {
  createPortal: tk,
  findDOMNode: function (a) {
    if (null == a) a = null;else if (1 !== a.nodeType) {
      var b = a._reactInternalFiber;

      if (void 0 === b) {
        if ("function" === typeof a.render) throw t(Error(188));
        throw t(Error(268), Object.keys(a));
      }

      a = Ec(b);
      a = null === a ? null : a.stateNode;
    }
    return a;
  },
  hydrate: function (a, b, c) {
    if (!qk(b)) throw t(Error(200));
    return sk(null, a, b, !0, c);
  },
  render: function (a, b, c) {
    if (!qk(b)) throw t(Error(200));
    return sk(null, a, b, !1, c);
  },
  unstable_renderSubtreeIntoContainer: function (a, b, c, d) {
    if (!qk(c)) throw t(Error(200));
    if (null == a || void 0 === a._reactInternalFiber) throw t(Error(38));
    return sk(a, b, c, !1, d);
  },
  unmountComponentAtNode: function (a) {
    if (!qk(a)) throw t(Error(40));
    return a._reactRootContainer ? (Rj(function () {
      sk(null, null, a, !1, function () {
        a._reactRootContainer = null;
      });
    }), !0) : !1;
  },
  unstable_createPortal: function () {
    return tk.apply(void 0, arguments);
  },
  unstable_batchedUpdates: Pj,
  unstable_interactiveUpdates: function (a, b, c, d) {
    Nj();
    return Qj(a, b, c, d);
  },
  unstable_discreteUpdates: Qj,
  unstable_flushDiscreteUpdates: Nj,
  flushSync: function (a, b) {
    if ((T & (Zi | $i)) !== S) throw t(Error(187));
    var c = T;
    T |= 1;

    try {
      return Yf(99, a.bind(null, b));
    } finally {
      T = c, bg();
    }
  },
  unstable_createRoot: uk,
  unstable_createSyncRoot: vk,
  unstable_flushControlled: function (a) {
    var b = T;
    T |= 1;

    try {
      Yf(99, a);
    } finally {
      T = b, T === S && bg();
    }
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    Events: [pe, qe, re, Ba.injectEventPluginsByName, fa, Lc, function (a) {
      xa(a, Kc);
    }, bb, cb, Hd, Aa, Ej, {
      current: !1
    }]
  }
};

function uk(a, b) {
  if (!qk(a)) throw t(Error(299), "unstable_createRoot");
  return new ok(a, b);
}

function vk(a, b) {
  if (!qk(a)) throw t(Error(299), "unstable_createRoot");
  return new nk(a, 1, b);
}

(function (a) {
  var b = a.findFiberByHostInstance;
  return dk(n({}, a, {
    overrideHookState: null,
    overrideProps: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Da.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (a) {
      a = Ec(a);
      return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: function (a) {
      return b ? b(a) : null;
    },
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null
  }));
})({
  findFiberByHostInstance: Cd,
  bundleType: 0,
  version: "16.10.2",
  rendererPackageName: "react-dom"
});

var xk = {
  default: wk
},
    yk = xk && wk || xk;
module.exports = yk.default || yk;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(29);
} else {}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.16.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


Object.defineProperty(exports, "__esModule", {
  value: !0
});
var f, g, h, k, l;

if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var p = null,
      q = null,
      t = function () {
    if (null !== p) try {
      var a = exports.unstable_now();
      p(!0, a);
      p = null;
    } catch (b) {
      throw setTimeout(t, 0), b;
    }
  },
      u = Date.now();

  exports.unstable_now = function () {
    return Date.now() - u;
  };

  f = function (a) {
    null !== p ? setTimeout(f, 0, a) : (p = a, setTimeout(t, 0));
  };

  g = function (a, b) {
    q = setTimeout(a, b);
  };

  h = function () {
    clearTimeout(q);
  };

  k = function () {
    return !1;
  };

  l = exports.unstable_forceFrameRate = function () {};
} else {
  var w = window.performance,
      x = window.Date,
      y = window.setTimeout,
      z = window.clearTimeout,
      A = window.requestAnimationFrame,
      B = window.cancelAnimationFrame;
  "undefined" !== typeof console && ("function" !== typeof A && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof B && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
  if ("object" === typeof w && "function" === typeof w.now) exports.unstable_now = function () {
    return w.now();
  };else {
    var C = x.now();

    exports.unstable_now = function () {
      return x.now() - C;
    };
  }
  var D = !1,
      E = null,
      F = -1,
      G = 5,
      H = 0;

  k = function () {
    return exports.unstable_now() >= H;
  };

  l = function () {};

  exports.unstable_forceFrameRate = function (a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : G = 0 < a ? Math.floor(1E3 / a) : 33.33;
  };

  var I = new MessageChannel(),
      J = I.port2;

  I.port1.onmessage = function () {
    if (null !== E) {
      var a = exports.unstable_now();
      H = a + G;

      try {
        E(!0, a) ? J.postMessage(null) : (D = !1, E = null);
      } catch (b) {
        throw J.postMessage(null), b;
      }
    } else D = !1;
  };

  f = function (a) {
    E = a;
    D || (D = !0, J.postMessage(null));
  };

  g = function (a, b) {
    F = y(function () {
      a(exports.unstable_now());
    }, b);
  };

  h = function () {
    z(F);
    F = -1;
  };
}

function K(a, b) {
  var c = a.length;
  a.push(b);

  a: for (;;) {
    var d = Math.floor((c - 1) / 2),
        e = a[d];
    if (void 0 !== e && 0 < L(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}

function M(a) {
  a = a[0];
  return void 0 === a ? null : a;
}

function N(a) {
  var b = a[0];

  if (void 0 !== b) {
    var c = a.pop();

    if (c !== b) {
      a[0] = c;

      a: for (var d = 0, e = a.length; d < e;) {
        var m = 2 * (d + 1) - 1,
            n = a[m],
            v = m + 1,
            r = a[v];
        if (void 0 !== n && 0 > L(n, c)) void 0 !== r && 0 > L(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > L(r, c)) a[d] = r, a[v] = c, d = v;else break a;
      }
    }

    return b;
  }

  return null;
}

function L(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}

var O = [],
    P = [],
    Q = 1,
    R = null,
    S = 3,
    T = !1,
    U = !1,
    V = !1;

function W(a) {
  for (var b = M(P); null !== b;) {
    if (null === b.callback) N(P);else if (b.startTime <= a) N(P), b.sortIndex = b.expirationTime, K(O, b);else break;
    b = M(P);
  }
}

function X(a) {
  V = !1;
  W(a);
  if (!U) if (null !== M(O)) U = !0, f(Y);else {
    var b = M(P);
    null !== b && g(X, b.startTime - a);
  }
}

function Y(a, b) {
  U = !1;
  V && (V = !1, h());
  T = !0;
  var c = S;

  try {
    W(b);

    for (R = M(O); null !== R && (!(R.expirationTime > b) || a && !k());) {
      var d = R.callback;

      if (null !== d) {
        R.callback = null;
        S = R.priorityLevel;
        var e = d(R.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? R.callback = e : R === M(O) && N(O);
        W(b);
      } else N(O);

      R = M(O);
    }

    if (null !== R) var m = !0;else {
      var n = M(P);
      null !== n && g(X, n.startTime - b);
      m = !1;
    }
    return m;
  } finally {
    R = null, S = c, T = !1;
  }
}

function Z(a) {
  switch (a) {
    case 1:
      return -1;

    case 2:
      return 250;

    case 5:
      return 1073741823;

    case 4:
      return 1E4;

    default:
      return 5E3;
  }
}

var aa = l;
exports.unstable_ImmediatePriority = 1;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_NormalPriority = 3;
exports.unstable_IdlePriority = 5;
exports.unstable_LowPriority = 4;

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = S;
  S = a;

  try {
    return b();
  } finally {
    S = c;
  }
};

exports.unstable_next = function (a) {
  switch (S) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;

    default:
      b = S;
  }

  var c = S;
  S = b;

  try {
    return a();
  } finally {
    S = c;
  }
};

exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();

  if ("object" === typeof c && null !== c) {
    var e = c.delay;
    e = "number" === typeof e && 0 < e ? d + e : d;
    c = "number" === typeof c.timeout ? c.timeout : Z(a);
  } else c = Z(a), e = d;

  c = e + c;
  a = {
    id: Q++,
    callback: b,
    priorityLevel: a,
    startTime: e,
    expirationTime: c,
    sortIndex: -1
  };
  e > d ? (a.sortIndex = e, K(P, a), null === M(O) && a === M(P) && (V ? h() : V = !0, g(X, e - d))) : (a.sortIndex = c, K(O, a), U || T || (U = !0, f(Y)));
  return a;
};

exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};

exports.unstable_wrapCallback = function (a) {
  var b = S;
  return function () {
    var c = S;
    S = b;

    try {
      return a.apply(this, arguments);
    } finally {
      S = c;
    }
  };
};

exports.unstable_getCurrentPriorityLevel = function () {
  return S;
};

exports.unstable_shouldYield = function () {
  var a = exports.unstable_now();
  W(a);
  var b = M(O);
  return b !== R && null !== R && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < R.expirationTime || k();
};

exports.unstable_requestPaint = aa;

exports.unstable_continueExecution = function () {
  U || T || (U = !0, f(Y));
};

exports.unstable_pauseExecution = function () {};

exports.unstable_getFirstCallbackNode = function () {
  return M(O);
};

exports.unstable_Profiling = null;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return "\n.github-corner:hover .octo-arm {\n  animation: octocat-wave 560ms ease-in-out;\n}\n\n@keyframes octocat-wave {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n\n  20%, 60% {\n    transform: rotate(-25deg);\n  }\n\n  40%, 80% {\n    transform: rotate(10deg);\n  }\n}\n\n@media (max-width: 500px) {\n    .github-corner:hover .octo-arm {\n        animation: none;\n    }\n\n    .github-corner .octo-arm {\n        animation: octocat-wave 560ms ease-in-out;\n    }\n}\n";
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* Dependencies. */

var extend = __webpack_require__(32);

var bail = __webpack_require__(33);

var vfile = __webpack_require__(34);

var trough = __webpack_require__(40);

var string = __webpack_require__(42);

var plain = __webpack_require__(43);
/* Expose a frozen processor. */


module.exports = unified().freeze();
var slice = [].slice;
var own = {}.hasOwnProperty;
/* Process pipeline. */

var pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file);
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done);

  function done(err, tree, file) {
    if (err) {
      next(err);
    } else {
      ctx.tree = tree;
      ctx.file = file;
      next();
    }
  }
}

function pipelineStringify(p, ctx) {
  ctx.file.contents = p.stringify(ctx.tree, ctx.file);
}
/* Function to create the first processor. */


function unified() {
  var attachers = [];
  var transformers = trough();
  var namespace = {};
  var frozen = false;
  var freezeIndex = -1;
  /* Data management. */

  processor.data = data;
  /* Lock. */

  processor.freeze = freeze;
  /* Plug-ins. */

  processor.attachers = attachers;
  processor.use = use;
  /* API. */

  processor.parse = parse;
  processor.stringify = stringify;
  processor.run = run;
  processor.runSync = runSync;
  processor.process = process;
  processor.processSync = processSync;
  /* Expose. */

  return processor;
  /* Create a new processor based on the processor
   * in the current scope. */

  function processor() {
    var destination = unified();
    var length = attachers.length;
    var index = -1;

    while (++index < length) {
      destination.use.apply(null, attachers[index]);
    }

    destination.data(extend(true, {}, namespace));
    return destination;
  }
  /* Freeze: used to signal a processor that has finished
   * configuration.
   *
   * For example, take unified itself.  It’s frozen.
   * Plug-ins should not be added to it.  Rather, it should
   * be extended, by invoking it, before modifying it.
   *
   * In essence, always invoke this when exporting a
   * processor. */


  function freeze() {
    var values;
    var plugin;
    var options;
    var transformer;

    if (frozen) {
      return processor;
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex];
      plugin = values[0];
      options = values[1];
      transformer = null;

      if (options === false) {
        continue;
      }

      if (options === true) {
        values[1] = undefined;
      }

      transformer = plugin.apply(processor, values.slice(1));

      if (typeof transformer === 'function') {
        transformers.use(transformer);
      }
    }

    frozen = true;
    freezeIndex = Infinity;
    return processor;
  }
  /* Data management.
   * Getter / setter for processor-specific informtion. */


  function data(key, value) {
    if (string(key)) {
      /* Set `key`. */
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen);
        namespace[key] = value;
        return processor;
      }
      /* Get `key`. */


      return own.call(namespace, key) && namespace[key] || null;
    }
    /* Set space. */


    if (key) {
      assertUnfrozen('data', frozen);
      namespace = key;
      return processor;
    }
    /* Get space. */


    return namespace;
  }
  /* Plug-in management.
   *
   * Pass it:
   * *   an attacher and options,
   * *   a preset,
   * *   a list of presets, attachers, and arguments (list
   *     of attachers and options). */


  function use(value) {
    var settings;
    assertUnfrozen('use', frozen);

    if (value === null || value === undefined) {
      /* Empty */
    } else if (typeof value === 'function') {
      addPlugin.apply(null, arguments);
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`');
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings);
    }

    return processor;

    function addPreset(result) {
      addList(result.plugins);

      if (result.settings) {
        settings = extend(settings || {}, result.settings);
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value);
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value);
        } else {
          addPreset(value);
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`');
      }
    }

    function addList(plugins) {
      var length;
      var index;

      if (plugins === null || plugins === undefined) {
        /* Empty */
      } else if (typeof plugins === 'object' && 'length' in plugins) {
        length = plugins.length;
        index = -1;

        while (++index < length) {
          add(plugins[index]);
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`');
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin);

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(entry[1], value);
        }

        entry[1] = value;
      } else {
        attachers.push(slice.call(arguments));
      }
    }
  }

  function find(plugin) {
    var length = attachers.length;
    var index = -1;
    var entry;

    while (++index < length) {
      entry = attachers[index];

      if (entry[0] === plugin) {
        return entry;
      }
    }
  }
  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the
   * processor. */


  function parse(doc) {
    var file = vfile(doc);
    var Parser;
    freeze();
    Parser = processor.Parser;
    assertParser('parse', Parser);

    if (newable(Parser)) {
      return new Parser(String(file), file).parse();
    }

    return Parser(String(file), file); // eslint-disable-line new-cap
  }
  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), async. */


  function run(node, file, cb) {
    assertNode(node);
    freeze();

    if (!cb && typeof file === 'function') {
      cb = file;
      file = null;
    }

    if (!cb) {
      return new Promise(executor);
    }

    executor(null, cb);

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done);

      function done(err, tree, file) {
        tree = tree || node;

        if (err) {
          reject(err);
        } else if (resolve) {
          resolve(tree);
        } else {
          cb(null, tree, file);
        }
      }
    }
  }
  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), sync. */


  function runSync(node, file) {
    var complete = false;
    var result;
    run(node, file, done);
    assertDone('runSync', 'run', complete);
    return result;

    function done(err, tree) {
      complete = true;
      bail(err);
      result = tree;
    }
  }
  /* Stringify a Unist node representation of a file
   * (in string or VFile representation) into a string
   * using the `Compiler` on the processor. */


  function stringify(node, doc) {
    var file = vfile(doc);
    var Compiler;
    freeze();
    Compiler = processor.Compiler;
    assertCompiler('stringify', Compiler);
    assertNode(node);

    if (newable(Compiler)) {
      return new Compiler(node, file).compile();
    }

    return Compiler(node, file); // eslint-disable-line new-cap
  }
  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the processor,
   * then run transforms on that node, and compile the
   * resulting node using the `Compiler` on the processor,
   * and store that result on the VFile. */


  function process(doc, cb) {
    freeze();
    assertParser('process', processor.Parser);
    assertCompiler('process', processor.Compiler);

    if (!cb) {
      return new Promise(executor);
    }

    executor(null, cb);

    function executor(resolve, reject) {
      var file = vfile(doc);
      pipeline.run(processor, {
        file: file
      }, done);

      function done(err) {
        if (err) {
          reject(err);
        } else if (resolve) {
          resolve(file);
        } else {
          cb(null, file);
        }
      }
    }
  }
  /* Process the given document (in string or VFile
   * representation), sync. */


  function processSync(doc) {
    var complete = false;
    var file;
    freeze();
    assertParser('processSync', processor.Parser);
    assertCompiler('processSync', processor.Compiler);
    file = vfile(doc);
    process(file, done);
    assertDone('processSync', 'process', complete);
    return file;

    function done(err) {
      complete = true;
      bail(err);
    }
  }
}
/* Check if `func` is a constructor. */


function newable(value) {
  return typeof value === 'function' && keys(value.prototype);
}
/* Check if `value` is an object with keys. */


function keys(value) {
  var key;

  for (key in value) {
    return true;
  }

  return false;
}
/* Assert a parser is available. */


function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`');
  }
}
/* Assert a compiler is available. */


function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`');
  }
}
/* Assert the processor is not frozen. */


function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(['Cannot invoke `' + name + '` on a frozen processor.\nCreate a new ', 'processor first, by invoking it: use `processor()` instead of ', '`processor`.'].join(''));
  }
}
/* Assert `node` is a Unist node. */


function assertNode(node) {
  if (!node || !string(node.type)) {
    throw new Error('Expected node, got `' + node + '`');
  }
}
/* Assert that `complete` is `true`. */


function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(arr);
  }

  return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
  if (!obj || toStr.call(obj) !== '[object Object]') {
    return false;
  }

  var hasOwnConstructor = hasOwn.call(obj, 'constructor');
  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf'); // Not own constructor property must be Object

  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  } // Own properties are enumerated firstly, so to speed up,
  // if last one is own, then all properties are own.


  var key;

  for (key in obj) {
    /**/
  }

  return typeof key === 'undefined' || hasOwn.call(obj, key);
}; // If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target


var setProperty = function setProperty(target, options) {
  if (defineProperty && options.name === '__proto__') {
    defineProperty(target, options.name, {
      enumerable: true,
      configurable: true,
      value: options.newValue,
      writable: true
    });
  } else {
    target[options.name] = options.newValue;
  }
}; // Return undefined instead of __proto__ if '__proto__' is not an own property


var getProperty = function getProperty(obj, name) {
  if (name === '__proto__') {
    if (!hasOwn.call(obj, name)) {
      return void 0;
    } else if (gOPD) {
      // In early versions of node, obj['__proto__'] is buggy when obj has
      // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
      return gOPD(obj, name).value;
    }
  }

  return obj[name];
};

module.exports = function extend() {
  var options, name, src, copy, copyIsArray, clone;
  var target = arguments[0];
  var i = 1;
  var length = arguments.length;
  var deep = false; // Handle a deep copy situation

  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {}; // skip the boolean and the target

    i = 2;
  }

  if (target == null || typeof target !== 'object' && typeof target !== 'function') {
    target = {};
  }

  for (; i < length; ++i) {
    options = arguments[i]; // Only deal with non-null/undefined values

    if (options != null) {
      // Extend the base object
      for (name in options) {
        src = getProperty(target, name);
        copy = getProperty(options, name); // Prevent never-ending loop

        if (target !== copy) {
          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isPlainObject(src) ? src : {};
            } // Never move original objects, clone them


            setProperty(target, {
              name: name,
              newValue: extend(deep, clone, copy)
            }); // Don't bring in undefined values
          } else if (typeof copy !== 'undefined') {
            setProperty(target, {
              name: name,
              newValue: copy
            });
          }
        }
      }
    }
  } // Return the modified object


  return target;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bail;

function bail(err) {
  if (err) {
    throw err;
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VMessage = __webpack_require__(35);

var VFile = __webpack_require__(37);

module.exports = VFile;
var proto = VFile.prototype;
proto.message = message;
proto.info = info;
proto.fail = fail;
/* Slight backwards compatibility.  Remove in the future. */

proto.warn = message;
/* Create a message with `reason` at `position`.
 * When an error is passed in as `reason`, copies the stack. */

function message(reason, position, origin) {
  var filePath = this.path;
  var message = new VMessage(reason, position, origin);

  if (filePath) {
    message.name = filePath + ':' + message.name;
    message.file = filePath;
  }

  message.fatal = false;
  this.messages.push(message);
  return message;
}
/* Fail. Creates a vmessage, associates it with the file,
 * and throws it. */


function fail() {
  var message = this.message.apply(this, arguments);
  message.fatal = true;
  throw message;
}
/* Info. Creates a vmessage, associates it with the file,
 * and marks the fatality as null. */


function info() {
  var message = this.message.apply(this, arguments);
  message.fatal = null;
  return message;
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(36);

module.exports = VMessage; // Inherit from `Error#`.

function VMessagePrototype() {}

VMessagePrototype.prototype = Error.prototype;
VMessage.prototype = new VMessagePrototype(); // Message properties.

var proto = VMessage.prototype;
proto.file = '';
proto.name = '';
proto.reason = '';
proto.message = '';
proto.stack = '';
proto.fatal = null;
proto.column = null;
proto.line = null; // Construct a new VMessage.
//
// Note: We cannot invoke `Error` on the created context, as that adds readonly
// `line` and `column` attributes on Safari 9, thus throwing and failing the
// data.

function VMessage(reason, position, origin) {
  var parts;
  var range;
  var location;

  if (typeof position === 'string') {
    origin = position;
    position = null;
  }

  parts = parseOrigin(origin);
  range = stringify(position) || '1:1';
  location = {
    start: {
      line: null,
      column: null
    },
    end: {
      line: null,
      column: null
    }
  }; // Node.

  if (position && position.position) {
    position = position.position;
  }

  if (position) {
    // Position.
    if (position.start) {
      location = position;
      position = position.start;
    } else {
      // Point.
      location.start = position;
    }
  }

  if (reason.stack) {
    this.stack = reason.stack;
    reason = reason.message;
  }

  this.message = reason;
  this.name = range;
  this.reason = reason;
  this.line = position ? position.line : null;
  this.column = position ? position.column : null;
  this.location = location;
  this.source = parts[0];
  this.ruleId = parts[1];
}

function parseOrigin(origin) {
  var result = [null, null];
  var index;

  if (typeof origin === 'string') {
    index = origin.indexOf(':');

    if (index === -1) {
      result[1] = origin;
    } else {
      result[0] = origin.slice(0, index);
      result[1] = origin.slice(index + 1);
    }
  }

  return result;
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty;
module.exports = stringify;

function stringify(value) {
  /* Nothing. */
  if (!value || typeof value !== 'object') {
    return null;
  }
  /* Node. */


  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position);
  }
  /* Position. */


  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value);
  }
  /* Point. */


  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value);
  }
  /* ? */


  return null;
}

function point(point) {
  if (!point || typeof point !== 'object') {
    point = {};
  }

  return index(point.line) + ':' + index(point.column);
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {};
  }

  return point(pos.start) + '-' + point(pos.end);
}

function index(value) {
  return value && typeof value === 'number' ? value : 1;
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var path = __webpack_require__(14);

var replace = __webpack_require__(38);

var buffer = __webpack_require__(39);

module.exports = VFile;
var own = {}.hasOwnProperty;
var proto = VFile.prototype;
proto.toString = toString;
/* Order of setting (least specific to most), we need this because
 * otherwise `{stem: 'a', path: '~/b.js'}` would throw, as a path
 * is needed before a stem can be set. */

var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
/* Construct a new file. */

function VFile(options) {
  var prop;
  var index;
  var length;

  if (!options) {
    options = {};
  } else if (typeof options === 'string' || buffer(options)) {
    options = {
      contents: options
    };
  } else if ('message' in options && 'messages' in options) {
    return options;
  }

  if (!(this instanceof VFile)) {
    return new VFile(options);
  }

  this.data = {};
  this.messages = [];
  this.history = [];
  this.cwd = process.cwd();
  /* Set path related properties in the correct order. */

  index = -1;
  length = order.length;

  while (++index < length) {
    prop = order[index];

    if (own.call(options, prop)) {
      this[prop] = options[prop];
    }
  }
  /* Set non-path related properties. */


  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop];
    }
  }
}
/* Access full path (`~/index.min.js`). */


Object.defineProperty(proto, 'path', {
  get: function () {
    return this.history[this.history.length - 1];
  },
  set: function (path) {
    assertNonEmpty(path, 'path');

    if (path !== this.path) {
      this.history.push(path);
    }
  }
});
/* Access parent path (`~`). */

Object.defineProperty(proto, 'dirname', {
  get: function () {
    return typeof this.path === 'string' ? path.dirname(this.path) : undefined;
  },
  set: function (dirname) {
    assertPath(this.path, 'dirname');
    this.path = path.join(dirname || '', this.basename);
  }
});
/* Access basename (`index.min.js`). */

Object.defineProperty(proto, 'basename', {
  get: function () {
    return typeof this.path === 'string' ? path.basename(this.path) : undefined;
  },
  set: function (basename) {
    assertNonEmpty(basename, 'basename');
    assertPart(basename, 'basename');
    this.path = path.join(this.dirname || '', basename);
  }
});
/* Access extname (`.js`). */

Object.defineProperty(proto, 'extname', {
  get: function () {
    return typeof this.path === 'string' ? path.extname(this.path) : undefined;
  },
  set: function (extname) {
    var ext = extname || '';
    assertPart(ext, 'extname');
    assertPath(this.path, 'extname');

    if (ext) {
      if (ext.charAt(0) !== '.') {
        throw new Error('`extname` must start with `.`');
      }

      if (ext.indexOf('.', 1) !== -1) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }

    this.path = replace(this.path, ext);
  }
});
/* Access stem (`index.min`). */

Object.defineProperty(proto, 'stem', {
  get: function () {
    return typeof this.path === 'string' ? path.basename(this.path, this.extname) : undefined;
  },
  set: function (stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
  }
});
/* Get the value of the file. */

function toString(encoding) {
  var value = this.contents || '';
  return buffer(value) ? value.toString(encoding) : String(value);
}
/* Assert that `part` is not a path (i.e., does
 * not contain `path.sep`). */


function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + path.sep + '`');
  }
}
/* Assert that `part` is not empty. */


function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}
/* Assert `path` exists. */


function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(14);

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = replaceExt;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
} // For Node v0.10 support. Remove this eventually.


function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wrap = __webpack_require__(41);

module.exports = trough;
trough.wrap = wrap;
var slice = [].slice; // Create new middleware.

function trough() {
  var fns = [];
  var middleware = {};
  middleware.run = run;
  middleware.use = use;
  return middleware; // Run `fns`.  Last argument must be a completion handler.

  function run() {
    var index = -1;
    var input = slice.call(arguments, 0, -1);
    var done = arguments[arguments.length - 1];

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done);
    }

    next.apply(null, [null].concat(input)); // Run the next `fn`, if any.

    function next(err) {
      var fn = fns[++index];
      var params = slice.call(arguments, 0);
      var values = params.slice(1);
      var length = input.length;
      var pos = -1;

      if (err) {
        done(err);
        return;
      } // Copy non-nully input into values.


      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos];
        }
      }

      input = values; // Next or done.

      if (fn) {
        wrap(fn, next).apply(null, input);
      } else {
        done.apply(null, [null].concat(input));
      }
    }
  } // Add `fn` to the list.


  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn);
    }

    fns.push(fn);
    return middleware;
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = [].slice;
module.exports = wrap; // Wrap `fn`.
// Can be sync or async; return a promise, receive a completion handler, return
// new values and errors.

function wrap(fn, callback) {
  var invoked;
  return wrapped;

  function wrapped() {
    var params = slice.call(arguments, 0);
    var callback = fn.length > params.length;
    var result;

    if (callback) {
      params.push(done);
    }

    try {
      result = fn.apply(null, params);
    } catch (error) {
      // Well, this is quite the pickle.
      // `fn` received a callback and invoked it (thus continuing the pipeline),
      // but later also threw an error.
      // We’re not about to restart the pipeline again, so the only thing left
      // to do is to throw the thing instead.
      if (callback && invoked) {
        throw error;
      }

      return done(error);
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  } // Invoke `next`, only once.


  function done() {
    if (!invoked) {
      invoked = true;
      callback.apply(null, arguments);
    }
  } // Invoke `done` with one value.
  // Tracks if an error is passed, too.


  function then(value) {
    done(null, value);
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;
module.exports = isString;

function isString(obj) {
  return toString.call(obj) === "[object String]";
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = Object.prototype.toString;

module.exports = function (x) {
  var prototype;
  return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(45);

var xtend = __webpack_require__(2);

var Parser = __webpack_require__(47);

module.exports = parse;
parse.Parser = Parser;

function parse(options) {
  var Local = unherit(Parser);
  Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
  this.Parser = Local;
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(2);

var inherits = __webpack_require__(46);

module.exports = unherit; // Create a custom constructor which can be modified without affecting the
// original class.

function unherit(Super) {
  var result;
  var key;
  var value;
  inherits(Of, Super);
  inherits(From, Of); // Clone values.

  result = Of.prototype;

  for (key in result) {
    value = result[key];

    if (value && typeof value === 'object') {
      result[key] = 'concat' in value ? value.concat() : xtend(value);
    }
  }

  return Of; // Constructor accepting a single argument, which itself is an `arguments`
  // object.

  function From(parameters) {
    return Super.apply(this, parameters);
  } // Constructor accepting variadic arguments.


  function Of() {
    if (!(this instanceof Of)) {
      return new From(arguments);
    }

    return Super.apply(this, arguments);
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;

    var TempCtor = function () {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(2);

var toggle = __webpack_require__(48);

var vfileLocation = __webpack_require__(49);

var unescape = __webpack_require__(50);

var decode = __webpack_require__(51);

var tokenizer = __webpack_require__(57);

module.exports = Parser;

function Parser(doc, file) {
  this.file = file;
  this.offset = {};
  this.options = xtend(this.options);
  this.setOptions({});
  this.inList = false;
  this.inBlock = false;
  this.inLink = false;
  this.atStart = true;
  this.toOffset = vfileLocation(file).toOffset;
  this.unescape = unescape(this, 'escape');
  this.decode = decode(this);
}

var proto = Parser.prototype;
/* Expose core. */

proto.setOptions = __webpack_require__(58);
proto.parse = __webpack_require__(61);
/* Expose `defaults`. */

proto.options = __webpack_require__(16);
/* Enter and exit helpers. */

proto.exitStart = toggle('atStart', true);
proto.enterList = toggle('inList', false);
proto.enterLink = toggle('inLink', false);
proto.enterBlock = toggle('inBlock', false);
/* Nodes that can interupt a paragraph:
 *
 * ```markdown
 * A paragraph, followed by a thematic break.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the paragraph. */

proto.interruptParagraph = [['thematicBreak'], ['atxHeading'], ['fencedCode'], ['blockquote'], ['html'], ['setextHeading', {
  commonmark: false
}], ['definition', {
  commonmark: false
}], ['footnote', {
  commonmark: false
}]];
/* Nodes that can interupt a list:
 *
 * ```markdown
 * - One
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the list. */

proto.interruptList = [['atxHeading', {
  pedantic: false
}], ['fencedCode', {
  pedantic: false
}], ['thematicBreak', {
  pedantic: false
}], ['definition', {
  commonmark: false
}], ['footnote', {
  commonmark: false
}]];
/* Nodes that can interupt a blockquote:
 *
 * ```markdown
 * > A paragraph.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the blockquote. */

proto.interruptBlockquote = [['indentedCode', {
  commonmark: true
}], ['fencedCode', {
  commonmark: true
}], ['atxHeading', {
  commonmark: true
}], ['setextHeading', {
  commonmark: true
}], ['thematicBreak', {
  commonmark: true
}], ['html', {
  commonmark: true
}], ['list', {
  commonmark: true
}], ['definition', {
  commonmark: false
}], ['footnote', {
  commonmark: false
}]];
/* Handlers. */

proto.blockTokenizers = {
  newline: __webpack_require__(65),
  indentedCode: __webpack_require__(66),
  fencedCode: __webpack_require__(67),
  blockquote: __webpack_require__(68),
  atxHeading: __webpack_require__(69),
  thematicBreak: __webpack_require__(70),
  list: __webpack_require__(71),
  setextHeading: __webpack_require__(73),
  html: __webpack_require__(74),
  footnote: __webpack_require__(75),
  definition: __webpack_require__(77),
  table: __webpack_require__(78),
  paragraph: __webpack_require__(79)
};
proto.inlineTokenizers = {
  escape: __webpack_require__(80),
  autoLink: __webpack_require__(82),
  url: __webpack_require__(83),
  html: __webpack_require__(85),
  link: __webpack_require__(86),
  reference: __webpack_require__(87),
  strong: __webpack_require__(88),
  emphasis: __webpack_require__(90),
  deletion: __webpack_require__(93),
  code: __webpack_require__(95),
  break: __webpack_require__(97),
  text: __webpack_require__(99)
};
/* Expose precedence. */

proto.blockMethods = keys(proto.blockTokenizers);
proto.inlineMethods = keys(proto.inlineTokenizers);
/* Tokenizers. */

proto.tokenizeBlock = tokenizer('block');
proto.tokenizeInline = tokenizer('inline');
proto.tokenizeFactory = tokenizer;
/* Get all keys in `value`. */

function keys(value) {
  var result = [];
  var key;

  for (key in value) {
    result.push(key);
  }

  return result;
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory; // Construct a state `toggler`: a function which inverses `property` in context
// based on its current value.
// The by `toggler` returned function restores that value.

function factory(key, state, ctx) {
  return enter;

  function enter() {
    var context = ctx || this;
    var current = context[key];
    context[key] = !state;
    return exit;

    function exit() {
      context[key] = current;
    }
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

function factory(file) {
  var contents = indices(String(file));
  return {
    toPosition: offsetToPositionFactory(contents),
    toOffset: positionToOffsetFactory(contents)
  };
} // Factory to get the line and column-based `position` for `offset` in the bound
// indices.


function offsetToPositionFactory(indices) {
  return offsetToPosition; // Get the line and column-based `position` for `offset` in the bound indices.

  function offsetToPosition(offset) {
    var index = -1;
    var length = indices.length;

    if (offset < 0) {
      return {};
    }

    while (++index < length) {
      if (indices[index] > offset) {
        return {
          line: index + 1,
          column: offset - (indices[index - 1] || 0) + 1,
          offset: offset
        };
      }
    }

    return {};
  }
} // Factory to get the `offset` for a line and column-based `position` in the
// bound indices.


function positionToOffsetFactory(indices) {
  return positionToOffset; // Get the `offset` for a line and column-based `position` in the bound
  // indices.

  function positionToOffset(position) {
    var line = position && position.line;
    var column = position && position.column;

    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
      return (indices[line - 2] || 0) + column - 1 || 0;
    }

    return -1;
  }
} // Get indices of line-breaks in `value`.


function indices(value) {
  var result = [];
  var index = value.indexOf('\n');

  while (index !== -1) {
    result.push(index + 1);
    index = value.indexOf('\n', index + 1);
  }

  result.push(value.length + 1);
  return result;
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;
/* Factory to de-escape a value, based on a list at `key`
 * in `ctx`. */

function factory(ctx, key) {
  return unescape;
  /* De-escape a string using the expression at `key`
   * in `ctx`. */

  function unescape(value) {
    var prev = 0;
    var index = value.indexOf('\\');
    var escape = ctx[key];
    var queue = [];
    var character;

    while (index !== -1) {
      queue.push(value.slice(prev, index));
      prev = index + 1;
      character = value.charAt(prev);
      /* If the following character is not a valid escape,
       * add the slash. */

      if (!character || escape.indexOf(character) === -1) {
        queue.push('\\');
      }

      index = value.indexOf('\\', prev);
    }

    queue.push(value.slice(prev));
    return queue.join('');
  }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(2);

var entities = __webpack_require__(7);

module.exports = factory;
/* Factory to create an entity decoder. */

function factory(ctx) {
  decoder.raw = decodeRaw;
  return decoder;
  /* Normalize `position` to add an `indent`. */

  function normalize(position) {
    var offsets = ctx.offset;
    var line = position.line;
    var result = [];

    while (++line) {
      if (!(line in offsets)) {
        break;
      }

      result.push((offsets[line] || 0) + 1);
    }

    return {
      start: position,
      indent: result
    };
  }
  /* Handle a warning.
   * See https://github.com/wooorm/parse-entities
   * for the warnings. */


  function handleWarning(reason, position, code) {
    if (code === 3) {
      return;
    }

    ctx.file.message(reason, position);
  }
  /* Decode `value` (at `position`) into text-nodes. */


  function decoder(value, position, handler) {
    entities(value, {
      position: normalize(position),
      warning: handleWarning,
      text: handler,
      reference: handler,
      textContext: ctx,
      referenceContext: ctx
    });
  }
  /* Decode `value` (at `position`) into a string. */


  function decodeRaw(value, position, options) {
    return entities(value, xtend(options, {
      position: normalize(position),
      warning: handleWarning
    }));
  }
}

/***/ }),
/* 52 */
/***/ (function(module) {

module.exports = JSON.parse("{\"AElig\":\"Æ\",\"AMP\":\"&\",\"Aacute\":\"Á\",\"Acirc\":\"Â\",\"Agrave\":\"À\",\"Aring\":\"Å\",\"Atilde\":\"Ã\",\"Auml\":\"Ä\",\"COPY\":\"©\",\"Ccedil\":\"Ç\",\"ETH\":\"Ð\",\"Eacute\":\"É\",\"Ecirc\":\"Ê\",\"Egrave\":\"È\",\"Euml\":\"Ë\",\"GT\":\">\",\"Iacute\":\"Í\",\"Icirc\":\"Î\",\"Igrave\":\"Ì\",\"Iuml\":\"Ï\",\"LT\":\"<\",\"Ntilde\":\"Ñ\",\"Oacute\":\"Ó\",\"Ocirc\":\"Ô\",\"Ograve\":\"Ò\",\"Oslash\":\"Ø\",\"Otilde\":\"Õ\",\"Ouml\":\"Ö\",\"QUOT\":\"\\\"\",\"REG\":\"®\",\"THORN\":\"Þ\",\"Uacute\":\"Ú\",\"Ucirc\":\"Û\",\"Ugrave\":\"Ù\",\"Uuml\":\"Ü\",\"Yacute\":\"Ý\",\"aacute\":\"á\",\"acirc\":\"â\",\"acute\":\"´\",\"aelig\":\"æ\",\"agrave\":\"à\",\"amp\":\"&\",\"aring\":\"å\",\"atilde\":\"ã\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"eacute\":\"é\",\"ecirc\":\"ê\",\"egrave\":\"è\",\"eth\":\"ð\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"iacute\":\"í\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"ntilde\":\"ñ\",\"oacute\":\"ó\",\"ocirc\":\"ô\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"oslash\":\"ø\",\"otilde\":\"õ\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"thorn\":\"þ\",\"times\":\"×\",\"uacute\":\"ú\",\"ucirc\":\"û\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"uuml\":\"ü\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

/***/ }),
/* 53 */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":\"�\",\"128\":\"€\",\"130\":\"‚\",\"131\":\"ƒ\",\"132\":\"„\",\"133\":\"…\",\"134\":\"†\",\"135\":\"‡\",\"136\":\"ˆ\",\"137\":\"‰\",\"138\":\"Š\",\"139\":\"‹\",\"140\":\"Œ\",\"142\":\"Ž\",\"145\":\"‘\",\"146\":\"’\",\"147\":\"“\",\"148\":\"”\",\"149\":\"•\",\"150\":\"–\",\"151\":\"—\",\"152\":\"˜\",\"153\":\"™\",\"154\":\"š\",\"155\":\"›\",\"156\":\"œ\",\"158\":\"ž\",\"159\":\"Ÿ\"}");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hexadecimal; // Check if the given character code, or the character code at the first
// character, is hexadecimal.

function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character;
  return code >= 97
  /* a */
  && code <= 102 ||
  /* z */
  code >= 65
  /* A */
  && code <= 70
  /* Z */
  || code >= 48
  /* A */
  && code <= 57
  /* Z */
  ;
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(15);

var decimal = __webpack_require__(4);

module.exports = alphanumerical; // Check if the given character code, or the character code at the first
// character, is alphanumerical.

function alphanumerical(character) {
  return alphabetical(character) || decimal(character);
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-env browser */

var el;
var semicolon = 59; //  ';'

module.exports = decodeEntity;

function decodeEntity(characters) {
  var entity = '&' + characters + ';';
  var char;
  el = el || document.createElement('i');
  el.innerHTML = entity;
  char = el.textContent; // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete

  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false;
  } // If the decoded string is equal to the input, the entity was not valid


  return char === entity ? false : char;
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;
var MERGEABLE_NODES = {
  text: mergeText,
  blockquote: mergeBlockquote
};
/* Check whether a node is mergeable with adjacent nodes. */

function mergeable(node) {
  var start;
  var end;

  if (node.type !== 'text' || !node.position) {
    return true;
  }

  start = node.position.start;
  end = node.position.end;
  /* Only merge nodes which occupy the same size as their
   * `value`. */

  return start.line !== end.line || end.column - start.column === node.value.length;
}
/* Merge two text nodes: `node` into `prev`. */


function mergeText(prev, node) {
  prev.value += node.value;
  return prev;
}
/* Merge two blockquotes: `node` into `prev`, unless in
 * CommonMark mode. */


function mergeBlockquote(prev, node) {
  if (this.options.commonmark) {
    return node;
  }

  prev.children = prev.children.concat(node.children);
  return prev;
}
/* Construct a tokenizer.  This creates both
 * `tokenizeInline` and `tokenizeBlock`. */


function factory(type) {
  return tokenize;
  /* Tokenizer for a bound `type`. */

  function tokenize(value, location) {
    var self = this;
    var offset = self.offset;
    var tokens = [];
    var methods = self[type + 'Methods'];
    var tokenizers = self[type + 'Tokenizers'];
    var line = location.line;
    var column = location.column;
    var index;
    var length;
    var method;
    var name;
    var matched;
    var valueLength;
    /* Trim white space only lines. */

    if (!value) {
      return tokens;
    }
    /* Expose on `eat`. */


    eat.now = now;
    eat.file = self.file;
    /* Sync initial offset. */

    updatePosition('');
    /* Iterate over `value`, and iterate over all
     * tokenizers.  When one eats something, re-iterate
     * with the remaining value.  If no tokenizer eats,
     * something failed (should not happen) and an
     * exception is thrown. */

    while (value) {
      index = -1;
      length = methods.length;
      matched = false;

      while (++index < length) {
        name = methods[index];
        method = tokenizers[name];

        if (method && (
        /* istanbul ignore next */
        !method.onlyAtStart || self.atStart) && (!method.notInList || !self.inList) && (!method.notInBlock || !self.inBlock) && (!method.notInLink || !self.inLink)) {
          valueLength = value.length;
          method.apply(self, [eat, value]);
          matched = valueLength !== value.length;

          if (matched) {
            break;
          }
        }
      }
      /* istanbul ignore if */


      if (!matched) {
        self.file.fail(new Error('Infinite loop'), eat.now());
      }
    }

    self.eof = now();
    return tokens;
    /* Update line, column, and offset based on
     * `value`. */

    function updatePosition(subvalue) {
      var lastIndex = -1;
      var index = subvalue.indexOf('\n');

      while (index !== -1) {
        line++;
        lastIndex = index;
        index = subvalue.indexOf('\n', index + 1);
      }

      if (lastIndex === -1) {
        column += subvalue.length;
      } else {
        column = subvalue.length - lastIndex;
      }

      if (line in offset) {
        if (lastIndex !== -1) {
          column += offset[line];
        } else if (column <= offset[line]) {
          column = offset[line] + 1;
        }
      }
    }
    /* Get offset.  Called before the first character is
     * eaten to retrieve the range's offsets. */


    function getOffset() {
      var indentation = [];
      var pos = line + 1;
      /* Done.  Called when the last character is
       * eaten to retrieve the range’s offsets. */

      return function () {
        var last = line + 1;

        while (pos < last) {
          indentation.push((offset[pos] || 0) + 1);
          pos++;
        }

        return indentation;
      };
    }
    /* Get the current position. */


    function now() {
      var pos = {
        line: line,
        column: column
      };
      pos.offset = self.toOffset(pos);
      return pos;
    }
    /* Store position information for a node. */


    function Position(start) {
      this.start = start;
      this.end = now();
    }
    /* Throw when a value is incorrectly eaten.
     * This shouldn’t happen but will throw on new,
     * incorrect rules. */


    function validateEat(subvalue) {
      /* istanbul ignore if */
      if (value.substring(0, subvalue.length) !== subvalue) {
        /* Capture stack-trace. */
        self.file.fail(new Error('Incorrectly eaten value: please report this ' + 'warning on http://git.io/vg5Ft'), now());
      }
    }
    /* Mark position and patch `node.position`. */


    function position() {
      var before = now();
      return update;
      /* Add the position to a node. */

      function update(node, indent) {
        var prev = node.position;
        var start = prev ? prev.start : before;
        var combined = [];
        var n = prev && prev.end.line;
        var l = before.line;
        node.position = new Position(start);
        /* If there was already a `position`, this
         * node was merged.  Fixing `start` wasn’t
         * hard, but the indent is different.
         * Especially because some information, the
         * indent between `n` and `l` wasn’t
         * tracked.  Luckily, that space is
         * (should be?) empty, so we can safely
         * check for it now. */

        if (prev && indent && prev.indent) {
          combined = prev.indent;

          if (n < l) {
            while (++n < l) {
              combined.push((offset[n] || 0) + 1);
            }

            combined.push(before.column);
          }

          indent = combined.concat(indent);
        }

        node.position.indent = indent || [];
        return node;
      }
    }
    /* Add `node` to `parent`s children or to `tokens`.
     * Performs merges where possible. */


    function add(node, parent) {
      var children = parent ? parent.children : tokens;
      var prev = children[children.length - 1];

      if (prev && node.type === prev.type && node.type in MERGEABLE_NODES && mergeable(prev) && mergeable(node)) {
        node = MERGEABLE_NODES[node.type].call(self, prev, node);
      }

      if (node !== prev) {
        children.push(node);
      }

      if (self.atStart && tokens.length !== 0) {
        self.exitStart();
      }

      return node;
    }
    /* Remove `subvalue` from `value`.
     * `subvalue` must be at the start of `value`. */


    function eat(subvalue) {
      var indent = getOffset();
      var pos = position();
      var current = now();
      validateEat(subvalue);
      apply.reset = reset;
      reset.test = test;
      apply.test = test;
      value = value.substring(subvalue.length);
      updatePosition(subvalue);
      indent = indent();
      return apply;
      /* Add the given arguments, add `position` to
       * the returned node, and return the node. */

      function apply(node, parent) {
        return pos(add(pos(node), parent), indent);
      }
      /* Functions just like apply, but resets the
       * content:  the line and column are reversed,
       * and the eaten value is re-added.
       * This is useful for nodes with a single
       * type of content, such as lists and tables.
       * See `apply` above for what parameters are
       * expected. */


      function reset() {
        var node = apply.apply(null, arguments);
        line = current.line;
        column = current.column;
        value = subvalue + value;
        return node;
      }
      /* Test the position, after eating, and reverse
       * to a not-eaten state. */


      function test() {
        var result = pos({});
        line = current.line;
        column = current.column;
        value = subvalue + value;
        return result.position;
      }
    }
  }
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(2);

var escapes = __webpack_require__(59);

var defaults = __webpack_require__(16);

module.exports = setOptions;

function setOptions(options) {
  var self = this;
  var current = self.options;
  var key;
  var value;

  if (options == null) {
    options = {};
  } else if (typeof options === 'object') {
    options = xtend(options);
  } else {
    throw new Error('Invalid value `' + options + '` ' + 'for setting `options`');
  }

  for (key in defaults) {
    value = options[key];

    if (value == null) {
      value = current[key];
    }

    if (key !== 'blocks' && typeof value !== 'boolean' || key === 'blocks' && typeof value !== 'object') {
      throw new Error('Invalid value `' + value + '` for setting `options.' + key + '`');
    }

    options[key] = value;
  }

  self.options = options;
  self.escape = escapes(options);
  return self;
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = escapes;
var defaults = ['\\', '`', '*', '{', '}', '[', ']', '(', ')', '#', '+', '-', '.', '!', '_', '>'];
var gfm = defaults.concat(['~', '|']);
var commonmark = gfm.concat(['\n', '"', '$', '%', '&', "'", ',', '/', ':', ';', '<', '=', '?', '@', '^']);
escapes.default = defaults;
escapes.gfm = gfm;
escapes.commonmark = commonmark; // Get markdown escapes.

function escapes(options) {
  var settings = options || {};

  if (settings.commonmark) {
    return commonmark;
  }

  return settings.gfm ? gfm : defaults;
}

/***/ }),
/* 60 */
/***/ (function(module) {

module.exports = JSON.parse("[\"address\",\"article\",\"aside\",\"base\",\"basefont\",\"blockquote\",\"body\",\"caption\",\"center\",\"col\",\"colgroup\",\"dd\",\"details\",\"dialog\",\"dir\",\"div\",\"dl\",\"dt\",\"fieldset\",\"figcaption\",\"figure\",\"footer\",\"form\",\"frame\",\"frameset\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"head\",\"header\",\"hgroup\",\"hr\",\"html\",\"iframe\",\"legend\",\"li\",\"link\",\"main\",\"menu\",\"menuitem\",\"meta\",\"nav\",\"noframes\",\"ol\",\"optgroup\",\"option\",\"p\",\"param\",\"pre\",\"section\",\"source\",\"title\",\"summary\",\"table\",\"tbody\",\"td\",\"tfoot\",\"th\",\"thead\",\"title\",\"tr\",\"track\",\"ul\"]");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(2);

var removePosition = __webpack_require__(62);

module.exports = parse;
var C_NEWLINE = '\n';
var EXPRESSION_LINE_BREAKS = /\r\n|\r/g;
/* Parse the bound file. */

function parse() {
  var self = this;
  var value = String(self.file);
  var start = {
    line: 1,
    column: 1,
    offset: 0
  };
  var content = xtend(start);
  var node;
  /* Clean non-unix newlines: `\r\n` and `\r` are all
   * changed to `\n`.  This should not affect positional
   * information. */

  value = value.replace(EXPRESSION_LINE_BREAKS, C_NEWLINE);

  if (value.charCodeAt(0) === 0xFEFF) {
    value = value.slice(1);
    content.column++;
    content.offset++;
  }

  node = {
    type: 'root',
    children: self.tokenizeBlock(value, content),
    position: {
      start: start,
      end: self.eof || xtend(start)
    }
  };

  if (!self.options.position) {
    removePosition(node, true);
  }

  return node;
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(5);

module.exports = removePosition;

function removePosition(node, force) {
  visit(node, force ? hard : soft);
  return node;
}

function hard(node) {
  delete node.position;
}

function soft(node) {
  node.position = undefined;
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents;

var convert = __webpack_require__(64);

var CONTINUE = true;
var SKIP = 'skip';
var EXIT = false;
visitParents.CONTINUE = CONTINUE;
visitParents.SKIP = SKIP;
visitParents.EXIT = EXIT;

function visitParents(tree, test, visitor, reverse) {
  var is;

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  is = convert(test);
  one(tree, null, []); // Visit a single node.

  function one(node, index, parents) {
    var result = [];
    var subresult;

    if (!test || is(node, index, parents[parents.length - 1] || null)) {
      result = toResult(visitor(node, parents));

      if (result[0] === EXIT) {
        return result;
      }
    }

    if (node.children && result[0] !== SKIP) {
      subresult = toResult(all(node.children, parents.concat(node)));
      return subresult[0] === EXIT ? subresult : result;
    }

    return result;
  } // Visit children in `parent`.


  function all(children, parents) {
    var min = -1;
    var step = reverse ? -1 : 1;
    var index = (reverse ? children.length : min) + step;
    var result;

    while (index > min && index < children.length) {
      result = one(children[index], index, parents);

      if (result[0] === EXIT) {
        return result;
      }

      index = typeof result[1] === 'number' ? result[1] : index + step;
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value;
  }

  if (typeof value === 'number') {
    return [CONTINUE, value];
  }

  return [value];
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert;

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test);
  }

  if (test === null || test === undefined) {
    return ok;
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test);
  }

  if (typeof test === 'function') {
    return test;
  }

  throw new Error('Expected function, string, or object as test');
}

function convertAll(tests) {
  var results = [];
  var length = tests.length;
  var index = -1;

  while (++index < length) {
    results[index] = convert(tests[index]);
  }

  return results;
} // Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.


function matchesFactory(test) {
  return matches;

  function matches(node) {
    var key;

    for (key in test) {
      if (node[key] !== test[key]) {
        return false;
      }
    }

    return true;
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests);
  var length = checks.length;
  return matches;

  function matches() {
    var index = -1;

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true;
      }
    }

    return false;
  }
} // Utility to convert a string into a function which checks a given node’s type
// for said string.


function typeFactory(test) {
  return type;

  function type(node) {
    return Boolean(node && node.type === test);
  }
} // Utility to return true.


function ok() {
  return true;
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(1);

module.exports = newline;
/* Tokenise newline. */

function newline(eat, value, silent) {
  var character = value.charAt(0);
  var length;
  var subvalue;
  var queue;
  var index;

  if (character !== '\n') {
    return;
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  index = 1;
  length = value.length;
  subvalue = character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;

    if (character === '\n') {
      subvalue += queue;
      queue = '';
    }

    index++;
  }

  eat(subvalue);
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(8);

var trim = __webpack_require__(9);

module.exports = indentedCode;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var CODE_INDENT_COUNT = 4;
var CODE_INDENT = repeat(C_SPACE, CODE_INDENT_COUNT);
/* Tokenise indented code. */

function indentedCode(eat, value, silent) {
  var index = -1;
  var length = value.length;
  var subvalue = '';
  var content = '';
  var subvalueQueue = '';
  var contentQueue = '';
  var character;
  var blankQueue;
  var indent;

  while (++index < length) {
    character = value.charAt(index);

    if (indent) {
      indent = false;
      subvalue += subvalueQueue;
      content += contentQueue;
      subvalueQueue = '';
      contentQueue = '';

      if (character === C_NEWLINE) {
        subvalueQueue = character;
        contentQueue = character;
      } else {
        subvalue += character;
        content += character;

        while (++index < length) {
          character = value.charAt(index);

          if (!character || character === C_NEWLINE) {
            contentQueue = character;
            subvalueQueue = character;
            break;
          }

          subvalue += character;
          content += character;
        }
      }
    } else if (character === C_SPACE && value.charAt(index + 1) === character && value.charAt(index + 2) === character && value.charAt(index + 3) === character) {
      subvalueQueue += CODE_INDENT;
      index += 3;
      indent = true;
    } else if (character === C_TAB) {
      subvalueQueue += character;
      indent = true;
    } else {
      blankQueue = '';

      while (character === C_TAB || character === C_SPACE) {
        blankQueue += character;
        character = value.charAt(++index);
      }

      if (character !== C_NEWLINE) {
        break;
      }

      subvalueQueue += blankQueue + character;
      contentQueue += character;
    }
  }

  if (content) {
    if (silent) {
      return true;
    }

    return eat(subvalue)({
      type: 'code',
      lang: null,
      value: trim(content)
    });
  }
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(9);

module.exports = fencedCode;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_TILDE = '~';
var C_TICK = '`';
var MIN_FENCE_COUNT = 3;
var CODE_INDENT_COUNT = 4;

function fencedCode(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = 0;
  var subvalue = '';
  var fenceCount;
  var marker;
  var character;
  var flag;
  var queue;
  var content;
  var exdentedContent;
  var closing;
  var exdentedClosing;
  var indent;
  var now;

  if (!settings.gfm) {
    return;
  }
  /* Eat initial spacing. */


  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  indent = index;
  /* Eat the fence. */

  character = value.charAt(index);

  if (character !== C_TILDE && character !== C_TICK) {
    return;
  }

  index++;
  marker = character;
  fenceCount = 1;
  subvalue += character;

  while (index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      break;
    }

    subvalue += character;
    fenceCount++;
    index++;
  }

  if (fenceCount < MIN_FENCE_COUNT) {
    return;
  }
  /* Eat spacing before flag. */


  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }
  /* Eat flag. */


  flag = '';
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE || character === C_TILDE || character === C_TICK) {
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      flag += queue + character;
      queue = '';
    }

    index++;
  }

  character = value.charAt(index);

  if (character && character !== C_NEWLINE) {
    return;
  }

  if (silent) {
    return true;
  }

  now = eat.now();
  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += flag;
  flag = self.decode.raw(self.unescape(flag), now);

  if (queue) {
    subvalue += queue;
  }

  queue = '';
  closing = '';
  exdentedClosing = '';
  content = '';
  exdentedContent = '';
  /* Eat content. */

  while (index < length) {
    character = value.charAt(index);
    content += closing;
    exdentedContent += exdentedClosing;
    closing = '';
    exdentedClosing = '';

    if (character !== C_NEWLINE) {
      content += character;
      exdentedClosing += character;
      index++;
      continue;
    }
    /* Add the newline to `subvalue` if its the first
     * character.  Otherwise, add it to the `closing`
     * queue. */


    if (content) {
      closing += character;
      exdentedClosing += character;
    } else {
      subvalue += character;
    }

    queue = '';
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue.slice(indent);

    if (queue.length >= CODE_INDENT_COUNT) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== marker) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue;

    if (queue.length < fenceCount) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      closing += character;
      exdentedClosing += character;
      index++;
    }

    if (!character || character === C_NEWLINE) {
      break;
    }
  }

  subvalue += content + closing;
  return eat(subvalue)({
    type: 'code',
    lang: flag || null,
    value: trim(exdentedContent)
  });
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(3);

var interrupt = __webpack_require__(10);

module.exports = blockquote;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_GT = '>';
/* Tokenise a blockquote. */

function blockquote(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptBlockquote;
  var now = eat.now();
  var currentLine = now.line;
  var length = value.length;
  var values = [];
  var contents = [];
  var indents = [];
  var add;
  var index = 0;
  var character;
  var rest;
  var nextIndex;
  var content;
  var line;
  var startIndex;
  var prefixed;
  var exit;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_GT) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      index++;
    }

    if (value.charAt(index) === C_GT) {
      index++;
      prefixed = true;

      if (value.charAt(index) === C_SPACE) {
        index++;
      }
    } else {
      index = startIndex;
    }

    content = value.slice(index, nextIndex);

    if (!prefixed && !trim(content)) {
      index = startIndex;
      break;
    }

    if (!prefixed) {
      rest = value.slice(index);
      /* Check if the following code contains a possible
       * block. */

      if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
        break;
      }
    }

    line = startIndex === index ? content : value.slice(startIndex, nextIndex);
    indents.push(index - startIndex);
    values.push(line);
    contents.push(content);
    index = nextIndex + 1;
  }

  index = -1;
  length = indents.length;
  add = eat(values.join(C_NEWLINE));

  while (++index < length) {
    offsets[currentLine] = (offsets[currentLine] || 0) + indents[index];
    currentLine++;
  }

  exit = self.enterBlock();
  contents = self.tokenizeBlock(contents.join(C_NEWLINE), now);
  exit();
  return add({
    type: 'blockquote',
    children: contents
  });
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = atxHeading;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_HASH = '#';
var MAX_ATX_COUNT = 6;

function atxHeading(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = -1;
  var now = eat.now();
  var subvalue = '';
  var content = '';
  var character;
  var queue;
  var depth;
  /* Eat initial spacing. */

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    subvalue += character;
  }
  /* Eat hashes. */


  depth = 0;

  while (++index <= length) {
    character = value.charAt(index);

    if (character !== C_HASH) {
      index--;
      break;
    }

    subvalue += character;
    depth++;
  }

  if (depth > MAX_ATX_COUNT) {
    return;
  }

  if (!depth || !settings.pedantic && value.charAt(index + 1) === C_HASH) {
    return;
  }

  length = value.length + 1;
  /* Eat intermediate white-space. */

  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    queue += character;
  }
  /* Exit when not in pedantic mode without spacing. */


  if (!settings.pedantic && queue.length === 0 && character && character !== C_NEWLINE) {
    return;
  }

  if (silent) {
    return true;
  }
  /* Eat content. */


  subvalue += queue;
  queue = '';
  content = '';

  while (++index < length) {
    character = value.charAt(index);

    if (!character || character === C_NEWLINE) {
      break;
    }

    if (character !== C_SPACE && character !== C_TAB && character !== C_HASH) {
      content += queue + character;
      queue = '';
      continue;
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_HASH) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    index--;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;
  return eat(subvalue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_DASH = '-';
var THEMATIC_BREAK_MARKER_COUNT = 3;

function thematicBreak(eat, value, silent) {
  var index = -1;
  var length = value.length + 1;
  var subvalue = '';
  var character;
  var marker;
  var markerCount;
  var queue;

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
  }

  if (character !== C_ASTERISK && character !== C_DASH && character !== C_UNDERSCORE) {
    return;
  }

  marker = character;
  subvalue += character;
  markerCount = 1;
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === marker) {
      markerCount++;
      subvalue += queue + marker;
      queue = '';
    } else if (character === C_SPACE) {
      queue += character;
    } else if (markerCount >= THEMATIC_BREAK_MARKER_COUNT && (!character || character === C_NEWLINE)) {
      subvalue += queue;

      if (silent) {
        return true;
      }

      return eat(subvalue)({
        type: 'thematicBreak'
      });
    } else {
      return;
    }
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable max-params */

var trim = __webpack_require__(3);

var repeat = __webpack_require__(8);

var decimal = __webpack_require__(4);

var getIndent = __webpack_require__(17);

var removeIndent = __webpack_require__(72);

var interrupt = __webpack_require__(10);

module.exports = list;
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_PLUS = '+';
var C_DASH = '-';
var C_DOT = '.';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_PAREN_CLOSE = ')';
var C_X_LOWER = 'x';
var TAB_SIZE = 4;
var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
var EXPRESSION_TASK_ITEM = /^\[([ \t]|x|X)][ \t]/;
var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;
/* Map of characters which can be used to mark
 * list-items. */

var LIST_UNORDERED_MARKERS = {};
LIST_UNORDERED_MARKERS[C_ASTERISK] = true;
LIST_UNORDERED_MARKERS[C_PLUS] = true;
LIST_UNORDERED_MARKERS[C_DASH] = true;
/* Map of characters which can be used to mark
 * list-items after a digit. */

var LIST_ORDERED_MARKERS = {};
LIST_ORDERED_MARKERS[C_DOT] = true;
/* Map of characters which can be used to mark
 * list-items after a digit. */

var LIST_ORDERED_COMMONMARK_MARKERS = {};
LIST_ORDERED_COMMONMARK_MARKERS[C_DOT] = true;
LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE] = true;

function list(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var pedantic = self.options.pedantic;
  var tokenizers = self.blockTokenizers;
  var interuptors = self.interruptList;
  var markers;
  var index = 0;
  var length = value.length;
  var start = null;
  var size = 0;
  var queue;
  var ordered;
  var character;
  var marker;
  var nextIndex;
  var startIndex;
  var prefixed;
  var currentMarker;
  var content;
  var line;
  var prevEmpty;
  var empty;
  var items;
  var allLines;
  var emptyLines;
  var item;
  var enterTop;
  var exitBlockquote;
  var isLoose;
  var node;
  var now;
  var end;
  var indented;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_TAB) {
      size += TAB_SIZE - size % TAB_SIZE;
    } else if (character === C_SPACE) {
      size++;
    } else {
      break;
    }

    index++;
  }

  if (size >= TAB_SIZE) {
    return;
  }

  character = value.charAt(index);
  markers = commonmark ? LIST_ORDERED_COMMONMARK_MARKERS : LIST_ORDERED_MARKERS;

  if (LIST_UNORDERED_MARKERS[character] === true) {
    marker = character;
    ordered = false;
  } else {
    ordered = true;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (!decimal(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (!queue || markers[character] !== true) {
      return;
    }

    start = parseInt(queue, 10);
    marker = character;
  }

  character = value.charAt(++index);

  if (character !== C_SPACE && character !== C_TAB) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;
  items = [];
  allLines = [];
  emptyLines = [];

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;
    indented = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    end = index + TAB_SIZE;
    size = 0;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_TAB) {
        size += TAB_SIZE - size % TAB_SIZE;
      } else if (character === C_SPACE) {
        size++;
      } else {
        break;
      }

      index++;
    }

    if (size >= TAB_SIZE) {
      indented = true;
    }

    if (item && size >= item.indent) {
      indented = true;
    }

    character = value.charAt(index);
    currentMarker = null;

    if (!indented) {
      if (LIST_UNORDERED_MARKERS[character] === true) {
        currentMarker = character;
        index++;
        size++;
      } else {
        queue = '';

        while (index < length) {
          character = value.charAt(index);

          if (!decimal(character)) {
            break;
          }

          queue += character;
          index++;
        }

        character = value.charAt(index);
        index++;

        if (queue && markers[character] === true) {
          currentMarker = character;
          size += queue.length + 1;
        }
      }

      if (currentMarker) {
        character = value.charAt(index);

        if (character === C_TAB) {
          size += TAB_SIZE - size % TAB_SIZE;
          index++;
        } else if (character === C_SPACE) {
          end = index + TAB_SIZE;

          while (index < end) {
            if (value.charAt(index) !== C_SPACE) {
              break;
            }

            index++;
            size++;
          }

          if (index === end && value.charAt(index) === C_SPACE) {
            index -= TAB_SIZE - 1;
            size -= TAB_SIZE - 1;
          }
        } else if (character !== C_NEWLINE && character !== '') {
          currentMarker = null;
        }
      }
    }

    if (currentMarker) {
      if (!pedantic && marker !== currentMarker) {
        break;
      }

      prefixed = true;
    } else {
      if (!commonmark && !indented && value.charAt(startIndex) === C_SPACE) {
        indented = true;
      } else if (commonmark && item) {
        indented = size >= item.indent || size > TAB_SIZE;
      }

      prefixed = false;
      index = startIndex;
    }

    line = value.slice(startIndex, nextIndex);
    content = startIndex === index ? line : value.slice(index, nextIndex);

    if (currentMarker === C_ASTERISK || currentMarker === C_UNDERSCORE || currentMarker === C_DASH) {
      if (tokenizers.thematicBreak.call(self, eat, line, true)) {
        break;
      }
    }

    prevEmpty = empty;
    empty = !trim(content).length;

    if (indented && item) {
      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (prefixed) {
      if (emptyLines.length !== 0) {
        item.value.push('');
        item.trail = emptyLines.concat();
      }

      item = {
        value: [line],
        indent: size,
        trail: []
      };
      items.push(item);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (empty) {
      if (prevEmpty) {
        break;
      }

      emptyLines.push(line);
    } else {
      if (prevEmpty) {
        break;
      }

      if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
        break;
      }

      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    }

    index = nextIndex + 1;
  }

  node = eat(allLines.join(C_NEWLINE)).reset({
    type: 'list',
    ordered: ordered,
    start: start,
    loose: null,
    children: []
  });
  enterTop = self.enterList();
  exitBlockquote = self.enterBlock();
  isLoose = false;
  index = -1;
  length = items.length;

  while (++index < length) {
    item = items[index].value.join(C_NEWLINE);
    now = eat.now();
    item = eat(item)(listItem(self, item, now), node);

    if (item.loose) {
      isLoose = true;
    }

    item = items[index].trail.join(C_NEWLINE);

    if (index !== length - 1) {
      item += C_NEWLINE;
    }

    eat(item);
  }

  enterTop();
  exitBlockquote();
  node.loose = isLoose;
  return node;
}

function listItem(ctx, value, position) {
  var offsets = ctx.offset;
  var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
  var checked = null;
  var task;
  var indent;
  value = fn.apply(null, arguments);

  if (ctx.options.gfm) {
    task = value.match(EXPRESSION_TASK_ITEM);

    if (task) {
      indent = task[0].length;
      checked = task[1].toLowerCase() === C_X_LOWER;
      offsets[position.line] += indent;
      value = value.slice(indent);
    }
  }

  return {
    type: 'listItem',
    loose: EXPRESSION_LOOSE_LIST_ITEM.test(value) || value.charAt(value.length - 1) === C_NEWLINE,
    checked: checked,
    children: ctx.tokenizeBlock(value, position)
  };
}
/* Create a list-item using overly simple mechanics. */


function pedanticListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;
  /* Remove the list-item’s bullet. */

  value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);
  /* The initial line was also matched by the below, so
   * we reset the `line`. */

  line = position.line;
  return value.replace(EXPRESSION_INITIAL_INDENT, replacer);
  /* A simple replacer which removed all matches,
   * and adds their length to `offset`. */

  function replacer($0) {
    offsets[line] = (offsets[line] || 0) + $0.length;
    line++;
    return '';
  }
}
/* Create a list-item using sane mechanics. */


function normalListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;
  var max;
  var bullet;
  var rest;
  var lines;
  var trimmedLines;
  var index;
  var length;
  /* Remove the list-item’s bullet. */

  value = value.replace(EXPRESSION_BULLET, replacer);
  lines = value.split(C_NEWLINE);
  trimmedLines = removeIndent(value, getIndent(max).indent).split(C_NEWLINE);
  /* We replaced the initial bullet with something
   * else above, which was used to trick
   * `removeIndentation` into removing some more
   * characters when possible.  However, that could
   * result in the initial line to be stripped more
   * than it should be. */

  trimmedLines[0] = rest;
  offsets[line] = (offsets[line] || 0) + bullet.length;
  line++;
  index = 0;
  length = lines.length;

  while (++index < length) {
    offsets[line] = (offsets[line] || 0) + lines[index].length - trimmedLines[index].length;
    line++;
  }

  return trimmedLines.join(C_NEWLINE);

  function replacer($0, $1, $2, $3, $4) {
    bullet = $1 + $2 + $3;
    rest = $4;
    /* Make sure that the first nine numbered list items
     * can indent with an extra space.  That is, when
     * the bullet did not receive an extra final space. */

    if (Number($2) < 10 && bullet.length % 2 === 1) {
      $2 = C_SPACE + $2;
    }

    max = $1 + repeat(C_SPACE, $2.length) + $3;
    return max + rest;
  }
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(3);

var repeat = __webpack_require__(8);

var getIndent = __webpack_require__(17);

module.exports = indentation;
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
/* Remove the minimum indent from every line in `value`.
 * Supports both tab, spaced, and mixed indentation (as
 * well as possible). */

function indentation(value, maximum) {
  var values = value.split(C_NEWLINE);
  var position = values.length + 1;
  var minIndent = Infinity;
  var matrix = [];
  var index;
  var indentation;
  var stops;
  var padding;
  values.unshift(repeat(C_SPACE, maximum) + '!');

  while (position--) {
    indentation = getIndent(values[position]);
    matrix[position] = indentation.stops;

    if (trim(values[position]).length === 0) {
      continue;
    }

    if (indentation.indent) {
      if (indentation.indent > 0 && indentation.indent < minIndent) {
        minIndent = indentation.indent;
      }
    } else {
      minIndent = Infinity;
      break;
    }
  }

  if (minIndent !== Infinity) {
    position = values.length;

    while (position--) {
      stops = matrix[position];
      index = minIndent;

      while (index && !(index in stops)) {
        index--;
      }

      if (trim(values[position]).length !== 0 && minIndent && index !== minIndent) {
        padding = C_TAB;
      } else {
        padding = '';
      }

      values[position] = padding + values[position].slice(index in stops ? stops[index] + 1 : 0);
    }
  }

  values.shift();
  return values.join(C_NEWLINE);
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = setextHeading;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_EQUALS = '=';
var C_DASH = '-';
var MAX_HEADING_INDENT = 3;
/* Map of characters which can be used to mark setext
 * headers, mapping to their corresponding depth. */

var SETEXT_MARKERS = {};
SETEXT_MARKERS[C_EQUALS] = 1;
SETEXT_MARKERS[C_DASH] = 2;

function setextHeading(eat, value, silent) {
  var self = this;
  var now = eat.now();
  var length = value.length;
  var index = -1;
  var subvalue = '';
  var content;
  var queue;
  var character;
  var marker;
  var depth;
  /* Eat initial indentation. */

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE || index >= MAX_HEADING_INDENT) {
      index--;
      break;
    }

    subvalue += character;
  }
  /* Eat content. */


  content = '';
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      index--;
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      content += queue + character;
      queue = '';
    }
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;
  /* Ensure the content is followed by a newline and a
   * valid marker. */

  character = value.charAt(++index);
  marker = value.charAt(++index);

  if (character !== C_NEWLINE || !SETEXT_MARKERS[marker]) {
    return;
  }

  subvalue += character;
  /* Eat Setext-line. */

  queue = marker;
  depth = SETEXT_MARKERS[marker];

  while (++index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      if (character !== C_NEWLINE) {
        return;
      }

      index--;
      break;
    }

    queue += character;
  }

  if (silent) {
    return true;
  }

  return eat(subvalue + queue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var openCloseTag = __webpack_require__(18).openCloseTag;

module.exports = blockHTML;
var C_TAB = '\t';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_LT = '<';

function blockHTML(eat, value, silent) {
  var self = this;
  var blocks = self.options.blocks;
  var length = value.length;
  var index = 0;
  var next;
  var line;
  var offset;
  var character;
  var count;
  var sequence;
  var subvalue;
  var sequences = [[/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Za-z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp('^</?(' + blocks.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true], [new RegExp(openCloseTag.source + '\\s*$'), /^$/, false]];
  /* Eat initial spacing. */

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_LT) {
    return;
  }

  next = value.indexOf(C_NEWLINE, index + 1);
  next = next === -1 ? length : next;
  line = value.slice(index, next);
  offset = -1;
  count = sequences.length;

  while (++offset < count) {
    if (sequences[offset][0].test(line)) {
      sequence = sequences[offset];
      break;
    }
  }

  if (!sequence) {
    return;
  }

  if (silent) {
    return sequence[2];
  }

  index = next;

  if (!sequence[1].test(line)) {
    while (index < length) {
      next = value.indexOf(C_NEWLINE, index + 1);
      next = next === -1 ? length : next;
      line = value.slice(index + 1, next);

      if (sequence[1].test(line)) {
        if (line) {
          index = next;
        }

        break;
      }

      index = next;
    }
  }

  subvalue = value.slice(0, index);
  return eat(subvalue)({
    type: 'html',
    value: subvalue
  });
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(1);

var normalize = __webpack_require__(11);

module.exports = footnoteDefinition;
footnoteDefinition.notInList = true;
footnoteDefinition.notInBlock = true;
var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_CARET = '^';
var C_COLON = ':';
var EXPRESSION_INITIAL_TAB = /^( {4}|\t)?/gm;

function footnoteDefinition(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var index;
  var length;
  var subvalue;
  var now;
  var currentLine;
  var content;
  var queue;
  var subqueue;
  var character;
  var identifier;
  var add;
  var exit;

  if (!self.options.footnotes) {
    return;
  }

  index = 0;
  length = value.length;
  subvalue = '';
  now = eat.now();
  currentLine = now.line;

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  if (value.charAt(index) !== C_BRACKET_OPEN || value.charAt(index + 1) !== C_CARET) {
    return;
  }

  subvalue += C_BRACKET_OPEN + C_CARET;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (!queue || value.charAt(index) !== C_BRACKET_CLOSE || value.charAt(index + 1) !== C_COLON) {
    return;
  }

  if (silent) {
    return true;
  }

  identifier = normalize(queue);
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  queue = '';
  content = '';
  subqueue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      subqueue = character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_NEWLINE) {
          break;
        }

        subqueue += character;
        index++;
      }

      queue += subqueue;
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE) {
          break;
        }

        subqueue += character;
        index++;
      }

      if (subqueue.length === 0) {
        break;
      }

      queue += subqueue;
    }

    if (queue) {
      content += queue;
      queue = '';
    }

    content += character;
    index++;
  }

  subvalue += content;
  content = content.replace(EXPRESSION_INITIAL_TAB, function (line) {
    offsets[currentLine] = (offsets[currentLine] || 0) + line.length;
    currentLine++;
    return '';
  });
  add = eat(subvalue);
  exit = self.enterBlock();
  content = self.tokenizeBlock(content, now);
  exit();
  return add({
    type: 'footnoteDefinition',
    identifier: identifier,
    children: content
  });
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = collapse; // `collapse(' \t\nbar \nbaz\t') // ' bar baz '`

function collapse(value) {
  return String(value).replace(/\s+/g, ' ');
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(1);

var normalize = __webpack_require__(11);

module.exports = definition;
definition.notInList = true;
definition.notInBlock = true;
var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';
var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_COLON = ':';
var C_LT = '<';
var C_GT = '>';

function definition(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var beforeURL;
  var beforeTitle;
  var queue;
  var character;
  var test;
  var identifier;
  var url;
  var title;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (!queue || value.charAt(index) !== C_BRACKET_CLOSE || value.charAt(index + 1) !== C_COLON) {
    return;
  }

  identifier = queue;
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE && character !== C_NEWLINE) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (!isEnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character === isEnclosedURLCharacter.delimiter) {
      subvalue += C_LT + queue + character;
      index++;
    } else {
      if (commonmark) {
        return;
      }

      index -= queue.length + 1;
      queue = '';
    }
  }

  if (!queue) {
    while (index < length) {
      character = value.charAt(index);

      if (!isUnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    subvalue += queue;
  }

  if (!queue) {
    return;
  }

  url = queue;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE && character !== C_NEWLINE) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  test = null;

  if (character === C_DOUBLE_QUOTE) {
    test = C_DOUBLE_QUOTE;
  } else if (character === C_SINGLE_QUOTE) {
    test = C_SINGLE_QUOTE;
  } else if (character === C_PAREN_OPEN) {
    test = C_PAREN_CLOSE;
  }

  if (!test) {
    queue = '';
    index = subvalue.length;
  } else if (queue) {
    subvalue += queue + character;
    index = subvalue.length;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character === test) {
        break;
      }

      if (character === C_NEWLINE) {
        index++;
        character = value.charAt(index);

        if (character === C_NEWLINE || character === test) {
          return;
        }

        queue += C_NEWLINE;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character !== test) {
      return;
    }

    beforeTitle = subvalue;
    subvalue += queue + character;
    index++;
    title = queue;
    queue = '';
  } else {
    return;
  }

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (!character || character === C_NEWLINE) {
    if (silent) {
      return true;
    }

    beforeURL = eat(beforeURL).test().end;
    url = self.decode.raw(self.unescape(url), beforeURL, {
      nonTerminated: false
    });

    if (title) {
      beforeTitle = eat(beforeTitle).test().end;
      title = self.decode.raw(self.unescape(title), beforeTitle);
    }

    return eat(subvalue)({
      type: 'definition',
      identifier: normalize(identifier),
      title: title || null,
      url: url
    });
  }
}
/* Check if `character` can be inside an enclosed URI. */


function isEnclosedURLCharacter(character) {
  return character !== C_GT && character !== C_BRACKET_OPEN && character !== C_BRACKET_CLOSE;
}

isEnclosedURLCharacter.delimiter = C_GT;
/* Check if `character` can be inside an unclosed URI. */

function isUnclosedURLCharacter(character) {
  return character !== C_BRACKET_OPEN && character !== C_BRACKET_CLOSE && !whitespace(character);
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(1);

module.exports = table;
var C_BACKSLASH = '\\';
var C_TICK = '`';
var C_DASH = '-';
var C_PIPE = '|';
var C_COLON = ':';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var MIN_TABLE_COLUMNS = 1;
var MIN_TABLE_ROWS = 2;
var TABLE_ALIGN_LEFT = 'left';
var TABLE_ALIGN_CENTER = 'center';
var TABLE_ALIGN_RIGHT = 'right';
var TABLE_ALIGN_NONE = null;

function table(eat, value, silent) {
  var self = this;
  var index;
  var alignments;
  var alignment;
  var subvalue;
  var row;
  var length;
  var lines;
  var queue;
  var character;
  var hasDash;
  var align;
  var cell;
  var preamble;
  var count;
  var opening;
  var now;
  var position;
  var lineCount;
  var line;
  var rows;
  var table;
  var lineIndex;
  var pipeIndex;
  var first;
  /* Exit when not in gfm-mode. */

  if (!self.options.gfm) {
    return;
  }
  /* Get the rows.
   * Detecting tables soon is hard, so there are some
   * checks for performance here, such as the minimum
   * number of rows, and allowed characters in the
   * alignment row. */


  index = 0;
  lineCount = 0;
  length = value.length + 1;
  lines = [];

  while (index < length) {
    lineIndex = value.indexOf(C_NEWLINE, index);
    pipeIndex = value.indexOf(C_PIPE, index + 1);

    if (lineIndex === -1) {
      lineIndex = value.length;
    }

    if (pipeIndex === -1 || pipeIndex > lineIndex) {
      if (lineCount < MIN_TABLE_ROWS) {
        return;
      }

      break;
    }

    lines.push(value.slice(index, lineIndex));
    lineCount++;
    index = lineIndex + 1;
  }
  /* Parse the alignment row. */


  subvalue = lines.join(C_NEWLINE);
  alignments = lines.splice(1, 1)[0] || [];
  index = 0;
  length = alignments.length;
  lineCount--;
  alignment = false;
  align = [];

  while (index < length) {
    character = alignments.charAt(index);

    if (character === C_PIPE) {
      hasDash = null;

      if (alignment === false) {
        if (first === false) {
          return;
        }
      } else {
        align.push(alignment);
        alignment = false;
      }

      first = false;
    } else if (character === C_DASH) {
      hasDash = true;
      alignment = alignment || TABLE_ALIGN_NONE;
    } else if (character === C_COLON) {
      if (alignment === TABLE_ALIGN_LEFT) {
        alignment = TABLE_ALIGN_CENTER;
      } else if (hasDash && alignment === TABLE_ALIGN_NONE) {
        alignment = TABLE_ALIGN_RIGHT;
      } else {
        alignment = TABLE_ALIGN_LEFT;
      }
    } else if (!whitespace(character)) {
      return;
    }

    index++;
  }

  if (alignment !== false) {
    align.push(alignment);
  }
  /* Exit when without enough columns. */


  if (align.length < MIN_TABLE_COLUMNS) {
    return;
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }
  /* Parse the rows. */


  position = -1;
  rows = [];
  table = eat(subvalue).reset({
    type: 'table',
    align: align,
    children: rows
  });

  while (++position < lineCount) {
    line = lines[position];
    row = {
      type: 'tableRow',
      children: []
    };
    /* Eat a newline character when this is not the
     * first row. */

    if (position) {
      eat(C_NEWLINE);
    }
    /* Eat the row. */


    eat(line).reset(row, table);
    length = line.length + 1;
    index = 0;
    queue = '';
    cell = '';
    preamble = true;
    count = null;
    opening = null;

    while (index < length) {
      character = line.charAt(index);

      if (character === C_TAB || character === C_SPACE) {
        if (cell) {
          queue += character;
        } else {
          eat(character);
        }

        index++;
        continue;
      }

      if (character === '' || character === C_PIPE) {
        if (preamble) {
          eat(character);
        } else {
          if (character && opening) {
            queue += character;
            index++;
            continue;
          }

          if ((cell || character) && !preamble) {
            subvalue = cell;

            if (queue.length > 1) {
              if (character) {
                subvalue += queue.slice(0, queue.length - 1);
                queue = queue.charAt(queue.length - 1);
              } else {
                subvalue += queue;
                queue = '';
              }
            }

            now = eat.now();
            eat(subvalue)({
              type: 'tableCell',
              children: self.tokenizeInline(cell, now)
            }, row);
          }

          eat(queue + character);
          queue = '';
          cell = '';
        }
      } else {
        if (queue) {
          cell += queue;
          queue = '';
        }

        cell += character;

        if (character === C_BACKSLASH && index !== length - 2) {
          cell += line.charAt(index + 1);
          index++;
        }

        if (character === C_TICK) {
          count = 1;

          while (line.charAt(index + 1) === character) {
            cell += character;
            index++;
            count++;
          }

          if (!opening) {
            opening = count;
          } else if (count >= opening) {
            opening = 0;
          }
        }
      }

      preamble = false;
      index++;
    }
    /* Eat the alignment row. */


    if (!position) {
      eat(C_NEWLINE + alignments);
    }
  }

  return table;
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(3);

var decimal = __webpack_require__(4);

var trimTrailingLines = __webpack_require__(9);

var interrupt = __webpack_require__(10);

module.exports = paragraph;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var TAB_SIZE = 4;
/* Tokenise paragraph. */

function paragraph(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var commonmark = settings.commonmark;
  var gfm = settings.gfm;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptParagraph;
  var index = value.indexOf(C_NEWLINE);
  var length = value.length;
  var position;
  var subvalue;
  var character;
  var size;
  var now;

  while (index < length) {
    /* Eat everything if there’s no following newline. */
    if (index === -1) {
      index = length;
      break;
    }
    /* Stop if the next character is NEWLINE. */


    if (value.charAt(index + 1) === C_NEWLINE) {
      break;
    }
    /* In commonmark-mode, following indented lines
     * are part of the paragraph. */


    if (commonmark) {
      size = 0;
      position = index + 1;

      while (position < length) {
        character = value.charAt(position);

        if (character === C_TAB) {
          size = TAB_SIZE;
          break;
        } else if (character === C_SPACE) {
          size++;
        } else {
          break;
        }

        position++;
      }

      if (size >= TAB_SIZE) {
        index = value.indexOf(C_NEWLINE, index + 1);
        continue;
      }
    }

    subvalue = value.slice(index + 1);
    /* Check if the following code contains a possible
     * block. */

    if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
      break;
    }
    /* Break if the following line starts a list, when
     * already in a list, or when in commonmark, or when
     * in gfm mode and the bullet is *not* numeric. */


    if (tokenizers.list.call(self, eat, subvalue, true) && (self.inList || commonmark || gfm && !decimal(trim.left(subvalue).charAt(0)))) {
      break;
    }

    position = index;
    index = value.indexOf(C_NEWLINE, index + 1);

    if (index !== -1 && trim(value.slice(position, index)) === '') {
      index = position;
      break;
    }
  }

  subvalue = value.slice(0, index);

  if (trim(subvalue) === '') {
    eat(subvalue);
    return null;
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  now = eat.now();
  subvalue = trimTrailingLines(subvalue);
  return eat(subvalue)({
    type: 'paragraph',
    children: self.tokenizeInline(subvalue, now)
  });
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(81);

module.exports = escape;
escape.locator = locate;

function escape(eat, value, silent) {
  var self = this;
  var character;
  var node;

  if (value.charAt(0) === '\\') {
    character = value.charAt(1);

    if (self.escape.indexOf(character) !== -1) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      if (character === '\n') {
        node = {
          type: 'break'
        };
      } else {
        node = {
          type: 'text',
          value: character
        };
      }

      return eat('\\' + character)(node);
    }
  }
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('\\', fromIndex);
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(1);

var decode = __webpack_require__(7);

var locate = __webpack_require__(19);

module.exports = autoLink;
autoLink.locator = locate;
autoLink.notInLink = true;
var C_LT = '<';
var C_GT = '>';
var C_AT_SIGN = '@';
var C_SLASH = '/';
var MAILTO = 'mailto:';
var MAILTO_LENGTH = MAILTO.length;
/* Tokenise a link. */

function autoLink(eat, value, silent) {
  var self;
  var subvalue;
  var length;
  var index;
  var queue;
  var character;
  var hasAtCharacter;
  var link;
  var now;
  var content;
  var tokenizers;
  var exit;

  if (value.charAt(0) !== C_LT) {
    return;
  }

  self = this;
  subvalue = '';
  length = value.length;
  index = 0;
  queue = '';
  hasAtCharacter = false;
  link = '';
  index++;
  subvalue = C_LT;

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_GT || character === C_AT_SIGN || character === ':' && value.charAt(index + 1) === C_SLASH) {
      break;
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  link += queue;
  queue = '';
  character = value.charAt(index);
  link += character;
  index++;

  if (character === C_AT_SIGN) {
    hasAtCharacter = true;
  } else {
    if (character !== ':' || value.charAt(index + 1) !== C_SLASH) {
      return;
    }

    link += C_SLASH;
    index++;
  }

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_GT) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  if (!queue || character !== C_GT) {
    return;
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  link += queue;
  content = link;
  subvalue += link + character;
  now = eat.now();
  now.column++;
  now.offset++;

  if (hasAtCharacter) {
    if (link.slice(0, MAILTO_LENGTH).toLowerCase() === MAILTO) {
      content = content.substr(MAILTO_LENGTH);
      now.column += MAILTO_LENGTH;
      now.offset += MAILTO_LENGTH;
    } else {
      link = MAILTO + link;
    }
  }
  /* Temporarily remove all tokenizers except text in autolinks. */


  tokenizers = self.inlineTokenizers;
  self.inlineTokenizers = {
    text: tokenizers.text
  };
  exit = self.enterLink();
  content = self.tokenizeInline(content, now);
  self.inlineTokenizers = tokenizers;
  exit();
  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(link, {
      nonTerminated: false
    }),
    children: content
  });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decode = __webpack_require__(7);

var whitespace = __webpack_require__(1);

var locate = __webpack_require__(84);

module.exports = url;
url.locator = locate;
url.notInLink = true;
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_AT_SIGN = '@';
var HTTP_PROTOCOL = 'http://';
var HTTPS_PROTOCOL = 'https://';
var MAILTO_PROTOCOL = 'mailto:';
var PROTOCOLS = [HTTP_PROTOCOL, HTTPS_PROTOCOL, MAILTO_PROTOCOL];
var PROTOCOLS_LENGTH = PROTOCOLS.length;

function url(eat, value, silent) {
  var self = this;
  var subvalue;
  var content;
  var character;
  var index;
  var position;
  var protocol;
  var match;
  var length;
  var queue;
  var parenCount;
  var nextCharacter;
  var exit;

  if (!self.options.gfm) {
    return;
  }

  subvalue = '';
  index = -1;
  length = PROTOCOLS_LENGTH;

  while (++index < length) {
    protocol = PROTOCOLS[index];
    match = value.slice(0, protocol.length);

    if (match.toLowerCase() === protocol) {
      subvalue = match;
      break;
    }
  }

  if (!subvalue) {
    return;
  }

  index = subvalue.length;
  length = value.length;
  queue = '';
  parenCount = 0;

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_LT) {
      break;
    }

    if (character === '.' || character === ',' || character === ':' || character === ';' || character === '"' || character === '\'' || character === ')' || character === ']') {
      nextCharacter = value.charAt(index + 1);

      if (!nextCharacter || whitespace(nextCharacter)) {
        break;
      }
    }

    if (character === C_PAREN_OPEN || character === C_BRACKET_OPEN) {
      parenCount++;
    }

    if (character === C_PAREN_CLOSE || character === C_BRACKET_CLOSE) {
      parenCount--;

      if (parenCount < 0) {
        break;
      }
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue += queue;
  content = subvalue;

  if (protocol === MAILTO_PROTOCOL) {
    position = queue.indexOf(C_AT_SIGN);

    if (position === -1 || position === length - 1) {
      return;
    }

    content = content.substr(MAILTO_PROTOCOL.length);
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  exit = self.enterLink();
  content = self.tokenizeInline(content, eat.now());
  exit();
  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(subvalue, {
      nonTerminated: false
    }),
    children: content
  });
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;
var PROTOCOLS = ['https://', 'http://', 'mailto:'];

function locate(value, fromIndex) {
  var length = PROTOCOLS.length;
  var index = -1;
  var min = -1;
  var position;

  if (!this.options.gfm) {
    return -1;
  }

  while (++index < length) {
    position = value.indexOf(PROTOCOLS[index], fromIndex);

    if (position !== -1 && (position < min || min === -1)) {
      min = position;
    }
  }

  return min;
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(15);

var locate = __webpack_require__(19);

var tag = __webpack_require__(18).tag;

module.exports = inlineHTML;
inlineHTML.locator = locate;
var EXPRESSION_HTML_LINK_OPEN = /^<a /i;
var EXPRESSION_HTML_LINK_CLOSE = /^<\/a>/i;

function inlineHTML(eat, value, silent) {
  var self = this;
  var length = value.length;
  var character;
  var subvalue;

  if (value.charAt(0) !== '<' || length < 3) {
    return;
  }

  character = value.charAt(1);

  if (!alphabetical(character) && character !== '?' && character !== '!' && character !== '/') {
    return;
  }

  subvalue = value.match(tag);

  if (!subvalue) {
    return;
  }
  /* istanbul ignore if - not used yet. */


  if (silent) {
    return true;
  }

  subvalue = subvalue[0];

  if (!self.inLink && EXPRESSION_HTML_LINK_OPEN.test(subvalue)) {
    self.inLink = true;
  } else if (self.inLink && EXPRESSION_HTML_LINK_CLOSE.test(subvalue)) {
    self.inLink = false;
  }

  return eat(subvalue)({
    type: 'html',
    value: subvalue
  });
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(1);

var locate = __webpack_require__(20);

module.exports = link;
link.locator = locate;
var own = {}.hasOwnProperty;
var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_GT = '>';
var C_TICK = '`';
var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';
/* Map of characters, which can be used to mark link
 * and image titles. */

var LINK_MARKERS = {};
LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
/* Map of characters, which can be used to mark link
 * and image titles in commonmark-mode. */

var COMMONMARK_LINK_MARKERS = {};
COMMONMARK_LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_PAREN_OPEN] = C_PAREN_CLOSE;

function link(eat, value, silent) {
  var self = this;
  var subvalue = '';
  var index = 0;
  var character = value.charAt(0);
  var pedantic = self.options.pedantic;
  var commonmark = self.options.commonmark;
  var gfm = self.options.gfm;
  var closed;
  var count;
  var opening;
  var beforeURL;
  var beforeTitle;
  var subqueue;
  var hasMarker;
  var markers;
  var isImage;
  var content;
  var marker;
  var length;
  var title;
  var depth;
  var queue;
  var url;
  var now;
  var exit;
  var node;
  /* Detect whether this is an image. */

  if (character === '!') {
    isImage = true;
    subvalue = character;
    character = value.charAt(++index);
  }
  /* Eat the opening. */


  if (character !== C_BRACKET_OPEN) {
    return;
  }
  /* Exit when this is a link and we’re already inside
   * a link. */


  if (!isImage && self.inLink) {
    return;
  }

  subvalue += character;
  queue = '';
  index++;
  /* Eat the content. */

  length = value.length;
  now = eat.now();
  depth = 0;
  now.column += index;
  now.offset += index;

  while (index < length) {
    character = value.charAt(index);
    subqueue = character;

    if (character === C_TICK) {
      /* Inline-code in link content. */
      count = 1;

      while (value.charAt(index + 1) === C_TICK) {
        subqueue += character;
        index++;
        count++;
      }

      if (!opening) {
        opening = count;
      } else if (count >= opening) {
        opening = 0;
      }
    } else if (character === C_BACKSLASH) {
      /* Allow brackets to be escaped. */
      index++;
      subqueue += value.charAt(index);
      /* In GFM mode, brackets in code still count.
       * In all other modes, they don’t.  This empty
       * block prevents the next statements are
       * entered. */
    } else if ((!opening || gfm) && character === C_BRACKET_OPEN) {
      depth++;
    } else if ((!opening || gfm) && character === C_BRACKET_CLOSE) {
      if (depth) {
        depth--;
      } else {
        /* Allow white-space between content and
         * url in GFM mode. */
        if (!pedantic) {
          while (index < length) {
            character = value.charAt(index + 1);

            if (!whitespace(character)) {
              break;
            }

            subqueue += character;
            index++;
          }
        }

        if (value.charAt(index + 1) !== C_PAREN_OPEN) {
          return;
        }

        subqueue += C_PAREN_OPEN;
        closed = true;
        index++;
        break;
      }
    }

    queue += subqueue;
    subqueue = '';
    index++;
  }
  /* Eat the content closing. */


  if (!closed) {
    return;
  }

  content = queue;
  subvalue += queue + subqueue;
  index++;
  /* Eat white-space. */

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }
  /* Eat the URL. */


  character = value.charAt(index);
  markers = commonmark ? COMMONMARK_LINK_MARKERS : LINK_MARKERS;
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;
    beforeURL += C_LT;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_GT) {
        break;
      }

      if (commonmark && character === '\n') {
        return;
      }

      queue += character;
      index++;
    }

    if (value.charAt(index) !== C_GT) {
      return;
    }

    subvalue += C_LT + queue + C_GT;
    url = queue;
    index++;
  } else {
    character = null;
    subqueue = '';

    while (index < length) {
      character = value.charAt(index);

      if (subqueue && own.call(markers, character)) {
        break;
      }

      if (whitespace(character)) {
        if (!pedantic) {
          break;
        }

        subqueue += character;
      } else {
        if (character === C_PAREN_OPEN) {
          depth++;
        } else if (character === C_PAREN_CLOSE) {
          if (depth === 0) {
            break;
          }

          depth--;
        }

        queue += subqueue;
        subqueue = '';

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        queue += character;
      }

      index++;
    }

    subvalue += queue;
    url = queue;
    index = subvalue.length;
  }
  /* Eat white-space. */


  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  subvalue += queue;
  /* Eat the title. */

  if (queue && own.call(markers, character)) {
    index++;
    subvalue += character;
    queue = '';
    marker = markers[character];
    beforeTitle = subvalue;
    /* In commonmark-mode, things are pretty easy: the
     * marker cannot occur inside the title.
     *
     * Non-commonmark does, however, support nested
     * delimiters. */

    if (commonmark) {
      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          break;
        }

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        index++;
        queue += character;
      }

      character = value.charAt(index);

      if (character !== marker) {
        return;
      }

      title = queue;
      subvalue += queue + character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
          break;
        }

        subvalue += character;
        index++;
      }
    } else {
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          if (hasMarker) {
            queue += marker + subqueue;
            subqueue = '';
          }

          hasMarker = true;
        } else if (!hasMarker) {
          queue += character;
        } else if (character === C_PAREN_CLOSE) {
          subvalue += queue + marker + subqueue;
          title = queue;
          break;
        } else if (whitespace(character)) {
          subqueue += character;
        } else {
          queue += marker + subqueue + character;
          subqueue = '';
          hasMarker = false;
        }

        index++;
      }
    }
  }

  if (value.charAt(index) !== C_PAREN_CLOSE) {
    return;
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  subvalue += C_PAREN_CLOSE;
  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end, {
    nonTerminated: false
  });

  if (title) {
    beforeTitle = eat(beforeTitle).test().end;
    title = self.decode.raw(self.unescape(title), beforeTitle);
  }

  node = {
    type: isImage ? 'image' : 'link',
    title: title || null,
    url: url
  };

  if (isImage) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  } else {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  }

  return eat(subvalue)(node);
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(1);

var locate = __webpack_require__(20);

var normalize = __webpack_require__(11);

module.exports = reference;
reference.locator = locate;
var T_LINK = 'link';
var T_IMAGE = 'image';
var T_FOOTNOTE = 'footnote';
var REFERENCE_TYPE_SHORTCUT = 'shortcut';
var REFERENCE_TYPE_COLLAPSED = 'collapsed';
var REFERENCE_TYPE_FULL = 'full';
var C_CARET = '^';
var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';

function reference(eat, value, silent) {
  var self = this;
  var character = value.charAt(0);
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var intro = '';
  var type = T_LINK;
  var referenceType = REFERENCE_TYPE_SHORTCUT;
  var content;
  var identifier;
  var now;
  var node;
  var exit;
  var queue;
  var bracketed;
  var depth;
  /* Check whether we’re eating an image. */

  if (character === '!') {
    type = T_IMAGE;
    intro = character;
    character = value.charAt(++index);
  }

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  intro += character;
  queue = '';
  /* Check whether we’re eating a footnote. */

  if (self.options.footnotes && value.charAt(index) === C_CARET) {
    /* Exit if `![^` is found, so the `!` will be seen as text after this,
     * and we’ll enter this function again when `[^` is found. */
    if (type === T_IMAGE) {
      return;
    }

    intro += C_CARET;
    index++;
    type = T_FOOTNOTE;
  }
  /* Eat the text. */


  depth = 0;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_OPEN) {
      bracketed = true;
      depth++;
    } else if (character === C_BRACKET_CLOSE) {
      if (!depth) {
        break;
      }

      depth--;
    }

    if (character === C_BACKSLASH) {
      queue += C_BACKSLASH;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }

  subvalue = queue;
  content = queue;
  character = value.charAt(index);

  if (character !== C_BRACKET_CLOSE) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  /* Inline footnotes cannot have an identifier. */

  if (type !== T_FOOTNOTE && character === C_BRACKET_OPEN) {
    identifier = '';
    queue += character;
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_BRACKET_OPEN || character === C_BRACKET_CLOSE) {
        break;
      }

      if (character === C_BACKSLASH) {
        identifier += C_BACKSLASH;
        character = value.charAt(++index);
      }

      identifier += character;
      index++;
    }

    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      referenceType = identifier ? REFERENCE_TYPE_FULL : REFERENCE_TYPE_COLLAPSED;
      queue += identifier + character;
      index++;
    } else {
      identifier = '';
    }

    subvalue += queue;
    queue = '';
  } else {
    if (!content) {
      return;
    }

    identifier = content;
  }
  /* Brackets cannot be inside the identifier. */


  if (referenceType !== REFERENCE_TYPE_FULL && bracketed) {
    return;
  }

  subvalue = intro + subvalue;

  if (type === T_LINK && self.inLink) {
    return null;
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  if (type === T_FOOTNOTE && content.indexOf(' ') !== -1) {
    return eat(subvalue)({
      type: 'footnote',
      children: this.tokenizeInline(content, eat.now())
    });
  }

  now = eat.now();
  now.column += intro.length;
  now.offset += intro.length;
  identifier = referenceType === REFERENCE_TYPE_FULL ? identifier : content;
  node = {
    type: type + 'Reference',
    identifier: normalize(identifier)
  };

  if (type === T_LINK || type === T_IMAGE) {
    node.referenceType = referenceType;
  }

  if (type === T_LINK) {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  } else if (type === T_IMAGE) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  }

  return eat(subvalue)(node);
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(3);

var whitespace = __webpack_require__(1);

var locate = __webpack_require__(89);

module.exports = strong;
strong.locator = locate;
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function strong(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (character !== C_ASTERISK && character !== C_UNDERSCORE || value.charAt(++index) !== character) {
    return;
  }

  pedantic = self.options.pedantic;
  marker = character;
  subvalue = marker + marker;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (character === marker && value.charAt(index + 1) === marker && (!pedantic || !whitespace(prev))) {
      character = value.charAt(index + 2);

      if (character !== marker) {
        if (!trim(queue)) {
          return;
        }
        /* istanbul ignore if - never used (yet) */


        if (silent) {
          return true;
        }

        now = eat.now();
        now.column += 2;
        now.offset += 2;
        return eat(subvalue + queue + subvalue)({
          type: 'strong',
          children: self.tokenizeInline(queue, now)
        });
      }
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('**', fromIndex);
  var underscore = value.indexOf('__', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(3);

var word = __webpack_require__(91);

var whitespace = __webpack_require__(1);

var locate = __webpack_require__(92);

module.exports = emphasis;
emphasis.locator = locate;
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function emphasis(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (character !== C_ASTERISK && character !== C_UNDERSCORE) {
    return;
  }

  pedantic = self.options.pedantic;
  subvalue = character;
  marker = character;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (character === marker && (!pedantic || !whitespace(prev))) {
      character = value.charAt(++index);

      if (character !== marker) {
        if (!trim(queue) || prev === marker) {
          return;
        }

        if (!pedantic && marker === C_UNDERSCORE && word(character)) {
          queue += marker;
          continue;
        }
        /* istanbul ignore if - never used (yet) */


        if (silent) {
          return true;
        }

        now = eat.now();
        now.column++;
        now.offset++;
        return eat(subvalue + queue + marker)({
          type: 'emphasis',
          children: self.tokenizeInline(queue, now)
        });
      }

      queue += marker;
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wordCharacter;
var fromCode = String.fromCharCode;
var re = /\w/; // Check if the given character code, or the character code at the first
// character, is a word character.

function wordCharacter(character) {
  return re.test(typeof character === 'number' ? fromCode(character) : character.charAt(0));
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('*', fromIndex);
  var underscore = value.indexOf('_', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(1);

var locate = __webpack_require__(94);

module.exports = strikethrough;
strikethrough.locator = locate;
var C_TILDE = '~';
var DOUBLE = '~~';

function strikethrough(eat, value, silent) {
  var self = this;
  var character = '';
  var previous = '';
  var preceding = '';
  var subvalue = '';
  var index;
  var length;
  var now;

  if (!self.options.gfm || value.charAt(0) !== C_TILDE || value.charAt(1) !== C_TILDE || whitespace(value.charAt(2))) {
    return;
  }

  index = 1;
  length = value.length;
  now = eat.now();
  now.column += 2;
  now.offset += 2;

  while (++index < length) {
    character = value.charAt(index);

    if (character === C_TILDE && previous === C_TILDE && (!preceding || !whitespace(preceding))) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      return eat(DOUBLE + subvalue + DOUBLE)({
        type: 'delete',
        children: self.tokenizeInline(subvalue, now)
      });
    }

    subvalue += previous;
    preceding = previous;
    previous = character;
  }
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('~~', fromIndex);
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(1);

var locate = __webpack_require__(96);

module.exports = inlineCode;
inlineCode.locator = locate;
var C_TICK = '`';
/* Tokenise inline code. */

function inlineCode(eat, value, silent) {
  var length = value.length;
  var index = 0;
  var queue = '';
  var tickQueue = '';
  var contentQueue;
  var subqueue;
  var count;
  var openingCount;
  var subvalue;
  var character;
  var found;
  var next;

  while (index < length) {
    if (value.charAt(index) !== C_TICK) {
      break;
    }

    queue += C_TICK;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue = queue;
  openingCount = index;
  queue = '';
  next = value.charAt(index);
  count = 0;

  while (index < length) {
    character = next;
    next = value.charAt(index + 1);

    if (character === C_TICK) {
      count++;
      tickQueue += character;
    } else {
      count = 0;
      queue += character;
    }

    if (count && next !== C_TICK) {
      if (count === openingCount) {
        subvalue += queue + tickQueue;
        found = true;
        break;
      }

      queue += tickQueue;
      tickQueue = '';
    }

    index++;
  }

  if (!found) {
    if (openingCount % 2 !== 0) {
      return;
    }

    queue = '';
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  contentQueue = '';
  subqueue = '';
  length = queue.length;
  index = -1;

  while (++index < length) {
    character = queue.charAt(index);

    if (whitespace(character)) {
      subqueue += character;
      continue;
    }

    if (subqueue) {
      if (contentQueue) {
        contentQueue += subqueue;
      }

      subqueue = '';
    }

    contentQueue += character;
  }

  return eat(subvalue)({
    type: 'inlineCode',
    value: contentQueue
  });
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('`', fromIndex);
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(98);

module.exports = hardBreak;
hardBreak.locator = locate;
var MIN_BREAK_LENGTH = 2;

function hardBreak(eat, value, silent) {
  var length = value.length;
  var index = -1;
  var queue = '';
  var character;

  while (++index < length) {
    character = value.charAt(index);

    if (character === '\n') {
      if (index < MIN_BREAK_LENGTH) {
        return;
      }
      /* istanbul ignore if - never used (yet) */


      if (silent) {
        return true;
      }

      queue += character;
      return eat(queue)({
        type: 'break'
      });
    }

    if (character !== ' ') {
      return;
    }

    queue += character;
  }
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var index = value.indexOf('\n', fromIndex);

  while (index > fromIndex) {
    if (value.charAt(index - 1) !== ' ') {
      break;
    }

    index--;
  }

  return index;
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text;

function text(eat, value, silent) {
  var self = this;
  var methods;
  var tokenizers;
  var index;
  var length;
  var subvalue;
  var position;
  var tokenizer;
  var name;
  var min;
  var now;
  /* istanbul ignore if - never used (yet) */

  if (silent) {
    return true;
  }

  methods = self.inlineMethods;
  length = methods.length;
  tokenizers = self.inlineTokenizers;
  index = -1;
  min = value.length;

  while (++index < length) {
    name = methods[index];

    if (name === 'text' || !tokenizers[name]) {
      continue;
    }

    tokenizer = tokenizers[name].locator;

    if (!tokenizer) {
      eat.file.fail('Missing locator: `' + name + '`');
    }

    position = tokenizer.call(self, value, 1);

    if (position !== -1 && position < min) {
      min = position;
    }
  }

  subvalue = value.slice(0, min);
  now = eat.now();
  self.decode(subvalue, now, function (content, position, source) {
    eat(source || content)({
      type: 'text',
      value: content
    });
  });
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = __webpack_require__(101);

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  ;
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  ; // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var visitWithParents = __webpack_require__(103);

function addListMetadata() {
  return function (ast) {
    visitWithParents(ast, 'list', function (listNode, parents) {
      var depth = 0,
          i,
          n;

      for (i = 0, n = parents.length; i < n; i++) {
        if (parents[i].type === 'list') depth += 1;
      }

      for (i = 0, n = listNode.children.length; i < n; i++) {
        var child = listNode.children[i];
        child.index = i;
        child.ordered = listNode.ordered;
      }

      listNode.depth = depth;
    });
    return ast;
  };
}

module.exports = addListMetadata;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* Expose. */

module.exports = visitParents;
/* Visit. */

function visitParents(tree, type, visitor) {
  var stack = [];

  if (typeof type === 'function') {
    visitor = type;
    type = null;
  }

  one(tree);
  /* Visit a single node. */

  function one(node) {
    var result;

    if (!type || node.type === type) {
      result = visitor(node, stack.concat());
    }

    if (node.children && result !== false) {
      return all(node.children, node);
    }

    return result;
  }
  /* Visit children in `parent`. */


  function all(children, parent) {
    var length = children.length;
    var index = -1;
    var child;
    stack.push(parent);

    while (++index < length) {
      child = children[index];

      if (child && one(child) === false) {
        return false;
      }
    }

    stack.pop();
    return true;
  }
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Naive, simple plugin to match inline nodes without attributes
 * This allows say <strong>foo</strong>, but not <strong class="very">foo</strong>
 * For proper HTML support, you'll want a different plugin
 **/

var visit = __webpack_require__(5);

var type = 'virtualHtml';
var selfClosingRe = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;

module.exports = function (tree) {
  var open;
  var currentParent;
  visit(tree, 'html', function (node, index, parent) {
    if (currentParent !== parent) {
      open = [];
      currentParent = parent;
    }

    var selfClosing = getSelfClosing(node);

    if (selfClosing) {
      parent.children.splice(index, 1, {
        type: type,
        tag: selfClosing,
        position: node.position
      });
      return true;
    }

    var current = getSimpleTag(node, parent);

    if (!current) {
      return true;
    }

    var matching = findAndPull(open, current.tag);

    if (matching) {
      parent.children.splice(index, 0, virtual(current, matching, parent));
    } else if (!current.opening) {
      open.push(current);
    }

    return true;
  }, true // Iterate in reverse
  );
  return tree;
};

function findAndPull(open, matchingTag) {
  var i = open.length;

  while (i--) {
    if (open[i].tag === matchingTag) {
      return open.splice(i, 1)[0];
    }
  }

  return false;
}

function getSimpleTag(node, parent) {
  var match = node.value.match(simpleTagRe);
  return match ? {
    tag: match[2],
    opening: !match[1],
    node: node
  } : false;
}

function getSelfClosing(node) {
  var match = node.value.match(selfClosingRe);
  return match ? match[1] : false;
}

function virtual(fromNode, toNode, parent) {
  var fromIndex = parent.children.indexOf(fromNode.node);
  var toIndex = parent.children.indexOf(toNode.node);
  var extracted = parent.children.splice(fromIndex, toIndex - fromIndex + 1);
  var children = extracted.slice(1, -1);
  return {
    type: type,
    children: children,
    tag: fromNode.tag,
    position: {
      start: fromNode.node.position.start,
      end: toNode.node.position.end,
      indent: []
    }
  };
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(5);

exports.ofType = function (types, mode) {
  return function (node) {
    types.forEach(function (type) {
      return visit(node, type, disallow, true);
    });
    return node;
  };

  function disallow(node, index, parent) {
    if (parent) {
      untangle(node, index, parent, mode);
    }
  }
};

exports.ifNotMatch = function (allowNode, mode) {
  return function (node) {
    visit(node, disallow, true);
    return node;
  };

  function disallow(node, index, parent) {
    if (parent && !allowNode(node, index, parent)) {
      untangle(node, index, parent, mode);
    }
  }
};

function untangle(node, index, parent, mode) {
  if (mode === 'remove') {
    parent.children.splice(index, 1);
  } else if (mode === 'unwrap') {
    var args = [index, 1];

    if (node.children) {
      args = args.concat(node.children);
    }

    Array.prototype.splice.apply(parent.children, args);
  }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

var xtend = __webpack_require__(2);

var ReactIs = __webpack_require__(107);

var defaultNodePosition = {
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};

function astToReact(node, options) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var renderer = options.renderers[node.type]; // nodes generated by plugins may not have position data
  // much of the code after this point will attempt to access properties of the node.position
  // this will set the node position to the parent node's position to prevent errors

  if (node.position === undefined) {
    node.position = parent.node && parent.node.position || defaultNodePosition;
  }

  var pos = node.position.start;
  var key = [node.type, pos.line, pos.column, index].join('-');

  if (!ReactIs.isValidElementType(renderer)) {
    throw new Error("Renderer for type `".concat(node.type, "` not defined or is not renderable"));
  }

  var nodeProps = getNodeProps(node, key, options, renderer, parent, index);
  return React.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || undefined);

  function resolveChildren() {
    return node.children && node.children.map(function (childNode, i) {
      return astToReact(childNode, options, {
        node: node,
        props: nodeProps
      }, i);
    });
  }
} // eslint-disable-next-line max-params, complexity


function getNodeProps(node, key, opts, renderer, parent, index) {
  var props = {
    key: key
  };
  var isTagRenderer = typeof renderer === 'string'; // `sourcePos` is true if the user wants source information (line/column info from markdown source)

  if (opts.sourcePos && node.position) {
    props['data-sourcepos'] = flattenPosition(node.position);
  }

  if (opts.rawSourcePos && !isTagRenderer) {
    props.sourcePosition = node.position;
  } // If `includeNodeIndex` is true, pass node index info to all non-tag renderers


  if (opts.includeNodeIndex && parent.node && parent.node.children && !isTagRenderer) {
    props.index = parent.node.children.indexOf(node);
    props.parentChildCount = parent.node.children.length;
  }

  var ref = node.identifier !== null && node.identifier !== undefined ? opts.definitions[node.identifier] || {} : null;

  switch (node.type) {
    case 'root':
      assignDefined(props, {
        className: opts.className
      });
      break;

    case 'text':
      props.nodeKey = key;
      props.children = node.value;
      break;

    case 'heading':
      props.level = node.depth;
      break;

    case 'list':
      props.start = node.start;
      props.ordered = node.ordered;
      props.tight = !node.loose;
      props.depth = node.depth;
      break;

    case 'listItem':
      props.checked = node.checked;
      props.tight = !node.loose;
      props.ordered = node.ordered;
      props.index = node.index;
      props.children = getListItemChildren(node, parent).map(function (childNode, i) {
        return astToReact(childNode, opts, {
          node: node,
          props: props
        }, i);
      });
      break;

    case 'definition':
      assignDefined(props, {
        identifier: node.identifier,
        title: node.title,
        url: node.url
      });
      break;

    case 'code':
      assignDefined(props, {
        language: node.lang && node.lang.split(/\s/, 1)[0]
      });
      break;

    case 'inlineCode':
      props.children = node.value;
      props.inline = true;
      break;

    case 'link':
      assignDefined(props, {
        title: node.title || undefined,
        target: typeof opts.linkTarget === 'function' ? opts.linkTarget(node.url, node.children, node.title) : opts.linkTarget,
        href: opts.transformLinkUri ? opts.transformLinkUri(node.url, node.children, node.title) : node.url
      });
      break;

    case 'image':
      assignDefined(props, {
        alt: node.alt || undefined,
        title: node.title || undefined,
        src: opts.transformImageUri ? opts.transformImageUri(node.url, node.children, node.title, node.alt) : node.url
      });
      break;

    case 'linkReference':
      assignDefined(props, xtend(ref, {
        href: opts.transformLinkUri ? opts.transformLinkUri(ref.href) : ref.href
      }));
      break;

    case 'imageReference':
      assignDefined(props, {
        src: opts.transformImageUri && ref.href ? opts.transformImageUri(ref.href, node.children, ref.title, node.alt) : ref.href,
        title: ref.title || undefined,
        alt: node.alt || undefined
      });
      break;

    case 'table':
    case 'tableHead':
    case 'tableBody':
      props.columnAlignment = node.align;
      break;

    case 'tableRow':
      props.isHeader = parent.node.type === 'tableHead';
      props.columnAlignment = parent.props.columnAlignment;
      break;

    case 'tableCell':
      assignDefined(props, {
        isHeader: parent.props.isHeader,
        align: parent.props.columnAlignment[index]
      });
      break;

    case 'virtualHtml':
      props.tag = node.tag;
      break;

    case 'html':
      // @todo find a better way than this
      props.isBlock = node.position.start.line !== node.position.end.line;
      props.escapeHtml = opts.escapeHtml;
      props.skipHtml = opts.skipHtml;
      break;

    case 'parsedHtml':
      {
        var parsedChildren;

        if (node.children) {
          parsedChildren = node.children.map(function (child, i) {
            return astToReact(child, opts, {
              node: node,
              props: props
            }, i);
          });
        }

        props.escapeHtml = opts.escapeHtml;
        props.skipHtml = opts.skipHtml;
        props.element = mergeNodeChildren(node, parsedChildren);
        break;
      }

    default:
      assignDefined(props, xtend(node, {
        type: undefined,
        position: undefined,
        children: undefined
      }));
  }

  if (!isTagRenderer && node.value) {
    props.value = node.value;
  }

  return props;
}

function assignDefined(target, attrs) {
  for (var key in attrs) {
    if (typeof attrs[key] !== 'undefined') {
      target[key] = attrs[key];
    }
  }
}

function mergeNodeChildren(node, parsedChildren) {
  var el = node.element;

  if (Array.isArray(el)) {
    var Fragment = React.Fragment || 'div';
    return React.createElement(Fragment, null, el);
  }

  if (el.props.children || parsedChildren) {
    var children = React.Children.toArray(el.props.children).concat(parsedChildren);
    return React.cloneElement(el, null, children);
  }

  return React.cloneElement(el, null);
}

function flattenPosition(pos) {
  return [pos.start.line, ':', pos.start.column, '-', pos.end.line, ':', pos.end.column].map(String).join('');
}

function getListItemChildren(node, parent) {
  if (node.loose) {
    return node.children;
  }

  if (parent.node && node.index > 0 && parent.node.children[node.index - 1].loose) {
    return node.children;
  }

  return unwrapParagraphs(node);
}

function unwrapParagraphs(node) {
  return node.children.reduce(function (array, child) {
    return array.concat(child.type === 'paragraph' ? child.children || [] : [child]);
  }, []);
}

module.exports = astToReact;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(108);
} else {}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.10.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


Object.defineProperty(exports, "__esModule", {
  value: !0
});
var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.fundamental") : 60117,
    w = b ? Symbol.for("react.responder") : 60118,
    x = b ? Symbol.for("react.scope") : 60119;

function y(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case h:
                return a;

              default:
                return u;
            }

        }

      case t:
      case r:
      case d:
        return u;
    }
  }
}

function z(a) {
  return y(a) === m;
}

exports.typeOf = y;
exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === v || a.$$typeof === w || a.$$typeof === x);
};

exports.isAsyncMode = function (a) {
  return z(a) || y(a) === l;
};

exports.isConcurrentMode = z;

exports.isContextConsumer = function (a) {
  return y(a) === k;
};

exports.isContextProvider = function (a) {
  return y(a) === h;
};

exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

exports.isForwardRef = function (a) {
  return y(a) === n;
};

exports.isFragment = function (a) {
  return y(a) === e;
};

exports.isLazy = function (a) {
  return y(a) === t;
};

exports.isMemo = function (a) {
  return y(a) === r;
};

exports.isPortal = function (a) {
  return y(a) === d;
};

exports.isProfiler = function (a) {
  return y(a) === g;
};

exports.isStrictMode = function (a) {
  return y(a) === f;
};

exports.isSuspense = function (a) {
  return y(a) === p;
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(5);

module.exports = function (node) {
  visit(node, 'table', wrap);
  return node;
};

function wrap(table) {
  var children = table.children;
  table.children = [{
    type: 'tableHead',
    align: table.align,
    children: [children[0]],
    position: children[0].position
  }];

  if (children.length > 1) {
    table.children.push({
      type: 'tableBody',
      align: table.align,
      children: children.slice(1),
      position: {
        start: children[1].position.start,
        end: children[children.length - 1].position.end
      }
    });
  }
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getDefinitions(node) {
  var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (node.children || []).reduce(function (definitions, child) {
    if (child.type === 'definition') {
      definitions[child.identifier] = {
        href: child.url,
        title: child.title
      };
    }

    return getDefinitions(child, definitions);
  }, defs);
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocols = ['http', 'https', 'mailto', 'tel'];

module.exports = function uriTransformer(uri) {
  var url = (uri || '').trim();
  var first = url.charAt(0);

  if (first === '#' || first === '/') {
    return url;
  }

  var colon = url.indexOf(':');

  if (colon === -1) {
    return url;
  }

  var length = protocols.length;
  var index = -1;

  while (++index < length) {
    var protocol = protocols[index];

    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }

  index = url.indexOf('?');

  if (index !== -1 && colon > index) {
    return url;
  }

  index = url.indexOf('#');

  if (index !== -1 && colon > index) {
    return url;
  } // eslint-disable-next-line no-script-url


  return 'javascript:void(0)';
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable react/prop-types, react/no-multi-comp */


var xtend = __webpack_require__(2);

var React = __webpack_require__(0);

var supportsStringRender = parseInt((React.version || '16').slice(0, 2), 10) >= 16;
var createElement = React.createElement;
module.exports = {
  break: 'br',
  paragraph: 'p',
  emphasis: 'em',
  strong: 'strong',
  thematicBreak: 'hr',
  blockquote: 'blockquote',
  delete: 'del',
  link: 'a',
  image: 'img',
  linkReference: 'a',
  imageReference: 'img',
  table: SimpleRenderer.bind(null, 'table'),
  tableHead: SimpleRenderer.bind(null, 'thead'),
  tableBody: SimpleRenderer.bind(null, 'tbody'),
  tableRow: SimpleRenderer.bind(null, 'tr'),
  tableCell: TableCell,
  root: Root,
  text: TextRenderer,
  list: List,
  listItem: ListItem,
  definition: NullRenderer,
  heading: Heading,
  inlineCode: InlineCode,
  code: CodeBlock,
  html: Html,
  virtualHtml: VirtualHtml,
  parsedHtml: ParsedHtml
};

function TextRenderer(props) {
  return supportsStringRender ? props.children : createElement('span', null, props.children);
}

function Root(props) {
  var useFragment = !props.className;
  var root = useFragment ? React.Fragment || 'div' : 'div';
  return createElement(root, useFragment ? null : props, props.children);
}

function SimpleRenderer(tag, props) {
  return createElement(tag, getCoreProps(props), props.children);
}

function TableCell(props) {
  var style = props.align ? {
    textAlign: props.align
  } : undefined;
  var coreProps = getCoreProps(props);
  return createElement(props.isHeader ? 'th' : 'td', style ? xtend({
    style: style
  }, coreProps) : coreProps, props.children);
}

function Heading(props) {
  return createElement("h".concat(props.level), getCoreProps(props), props.children);
}

function List(props) {
  var attrs = getCoreProps(props);

  if (props.start !== null && props.start !== 1 && props.start !== undefined) {
    attrs.start = props.start.toString();
  }

  return createElement(props.ordered ? 'ol' : 'ul', attrs, props.children);
}

function ListItem(props) {
  var checkbox = null;

  if (props.checked !== null && props.checked !== undefined) {
    var checked = props.checked;
    checkbox = createElement('input', {
      type: 'checkbox',
      checked: checked,
      readOnly: true
    });
  }

  return createElement('li', getCoreProps(props), checkbox, props.children);
}

function CodeBlock(props) {
  var className = props.language && "language-".concat(props.language);
  var code = createElement('code', className ? {
    className: className
  } : null, props.value);
  return createElement('pre', getCoreProps(props), code);
}

function InlineCode(props) {
  return createElement('code', getCoreProps(props), props.children);
}

function Html(props) {
  if (props.skipHtml) {
    return null;
  }

  var tag = props.isBlock ? 'div' : 'span';

  if (props.escapeHtml) {
    var comp = React.Fragment || tag;
    return createElement(comp, null, props.value);
  }

  var nodeProps = {
    dangerouslySetInnerHTML: {
      __html: props.value
    }
  };
  return createElement(tag, nodeProps);
}

function ParsedHtml(props) {
  return props['data-sourcepos'] ? React.cloneElement(props.element, {
    'data-sourcepos': props['data-sourcepos']
  }) : props.element;
}

function VirtualHtml(props) {
  return createElement(props.tag, getCoreProps(props), props.children);
}

function NullRenderer() {
  return null;
}

function getCoreProps(props) {
  return props['data-sourcepos'] ? {
    'data-sourcepos': props['data-sourcepos']
  } : {};
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var HtmlParser = '__RMD_HTML_PARSER__';
exports.HtmlParser = typeof Symbol === 'undefined' ? HtmlParser : Symbol(HtmlParser);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(21);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-github-corner/lib/GithubCorner.js
var GithubCorner = __webpack_require__(22);
var GithubCorner_default = /*#__PURE__*/__webpack_require__.n(GithubCorner);

// EXTERNAL MODULE: ./node_modules/react-markdown/lib/react-markdown.js
var react_markdown = __webpack_require__(23);
var react_markdown_default = /*#__PURE__*/__webpack_require__.n(react_markdown);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(24);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./lib/index.js
var lib = __webpack_require__(25);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./example/modal-content.jsx
var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var modal_content_ModalContent = lib_default()(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalContent, _Component);

  function ModalContent() {
    _classCallCheck(this, ModalContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalContent).apply(this, arguments));
  }

  _createClass(ModalContent, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", null, react_default.a.createElement("header", {
        className: "modal-card-head"
      }, react_default.a.createElement("p", {
        className: "modal-card-title"
      }, "Modal")), react_default.a.createElement("section", {
        className: "modal-card-body"
      }, "Try clicking outside the modal."), react_default.a.createElement("footer", {
        className: "modal-card-foot"
      }));
    }
  }]);

  return ModalContent;
}(react["Component"])) || _class;

/* harmony default export */ var modal_content = (modal_content_ModalContent);
// CONCATENATED MODULE: ./example/modal.jsx





function Modal(_ref) {
  var show = _ref.show,
      onClickOutside = _ref.onClickOutside;
  return react_default.a.createElement("div", {
    className: classnames_default()('modal', {
      'is-active': show
    })
  }, react_default.a.createElement("div", {
    className: "modal-background"
  }), react_default.a.createElement("div", {
    className: "modal-card"
  }, react_default.a.createElement(modal_content, {
    onClickOutside: onClickOutside,
    disableOnClickOutside: !show
  })));
}

Modal.propTypes = {
  show: prop_types_default.a.bool,
  onClickOutside: prop_types_default.a.func.isRequired
};
Modal.defaultProps = {
  show: false
};
/* harmony default export */ var modal = (Modal);
// CONCATENATED MODULE: ./README.md
/* harmony default export */ var README = ("This is a React decorator(high-order component) that you can add to your React components if you want to have them listen for clicks that occur somewhere in the document, outside of the element itself (for instance, if you need to hide a menu when people click anywhere else on your page).\n\nNote that this decorator relies on the .classList property, which is supported by all modern browsers, but not by no longer supported browsers like IE8 or even older. For setups that need to support deprecated browsers, using something like the MDN classlist-polyfill will be necessary.\n\nForked from [react-onclickoutside](https://github.com/Pomax/react-onclickoutside)\n\n## Installation\n\n```\nnpm install react-onclickoutside-decorator\n```\n\n## Usage\n\n```js\nimport React, { Component } from 'react';\nimport onClickOutside from 'react-onclickoutside-decorator';\n\nclass App extends Component {\n  render() {\n    return <Child onClickOutside={this.handleClickOutside} />;\n  }\n  handleClickOutside() {\n    // ...\n  }\n}\n\n@onClickOutside\nclass Child extends Component {\n  render() {\n    return <div />;\n  }\n}\n```\n\n## Regulate whether or not to listen for outside clicks\n\nWhen using this decorator, a component has two functions that can be used to explicitly listen for, or do nothing with, outside clicks\n\n- `enableOnClickOutside()` - Enables outside click listening by setting up the event listening bindings.\n- `disableOnClickOutside()` - Disables outside click listening by explicitly removing the event listening bindings.\n \nIn addition, you can create a component that uses this decorator such that it has the code set up and ready to go, but not listening for outside click events until you explicitly issue its `enableOnClickOutside()`, by passing in a properly called `disableOnClickOutside`:\n\n\n```js\n// modal.js\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\nimport ModalContent from './modal-content';\n\nfunction Modal({ show, onClickOutside }) {\n  return (\n    <div\n      className={classNames(\n        'modal',\n        { 'is-active': show },\n      )}\n    >\n      <div className=\"modal-background\" />\n      <div className=\"modal-card\">\n        <ModalContent\n          onClickOutside={onClickOutside}\n          disableOnClickOutside={!show}\n        />\n      </div>\n    </div>\n  );\n}\n\nModal.propTypes = {\n  show: PropTypes.bool,\n  onClickOutside: PropTypes.func.isRequired,\n};\n\nModal.defaultProps = {\n  show: false,\n};\n\nexport default Modal;\n```\n\n```js\n// modal-content.js\nimport React, { Component } from 'react';\nimport onClickOutside from 'react-onclickoutside-decorator';\n\n@onClickOutside\nclass ModalContent extends Component {\n  render() {\n    return (\n      <div>\n        <header className=\"modal-card-head\">\n          <p className=\"modal-card-title\">Modal</p>\n        </header>\n        <section className=\"modal-card-body\">\n          Try clicking outside the modal.\n        </section>\n        <footer className=\"modal-card-foot\" />\n      </div>\n    );\n  }\n}\n\nexport default ModalContent;\n\n```\n\n### Marking elements as \"skip over this one\" during the event loop\n\nIf you want the decorator to ignore certain elements, then add the class **ignore-react-onclickoutside** to that element and the callback won't be invoked when the click happens inside elements with that class.\n");
// EXTERNAL MODULE: ./example/app.scss
var app = __webpack_require__(114);

// CONCATENATED MODULE: ./example/index.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable max-classes-per-file */








var example_App = function App() {
  var _useState = Object(react["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var openModal = function openModal() {
    setShow(true);
  };

  var closeModal = function closeModal() {
    setShow(false);
    alert('onClickOutside event has been triggered');
  };

  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(GithubCorner_default.a, {
    href: "https://github.com/kako0507/react-onclickoutside-decorator",
    octoColor: "#64ceaa",
    bannerColor: "#257459"
  }), react_default.a.createElement("section", {
    className: "hero is-medium is-primary is-bold"
  }, react_default.a.createElement("div", {
    className: "hero-body"
  }, react_default.a.createElement("div", {
    className: "container"
  }, react_default.a.createElement("h1", {
    className: "title is-size-1"
  }, "React OnClickOutside Decorator"), react_default.a.createElement("h2", {
    className: "subtitle"
  }, "An onClickOutside decorator for React components")))), react_default.a.createElement("section", {
    className: "section has-background-white is-small"
  }, react_default.a.createElement("div", {
    className: "container is-small"
  }, react_default.a.createElement("div", {
    className: "columns is-mobile is-centered"
  }, react_default.a.createElement("button", {
    type: "button",
    className: "button is-large",
    onClick: openModal
  }, "Demo")), react_default.a.createElement(react_markdown_default.a, {
    className: "content",
    source: README
  }))), react_default.a.createElement(modal, {
    onClickOutside: closeModal,
    show: show
  }));
};

react_dom_default.a.render(react_default.a.createElement(example_App, null), document.getElementById('main'));

/***/ })
/******/ ]);