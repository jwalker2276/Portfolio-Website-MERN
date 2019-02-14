module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Meta.js":
/*!***********************************!*\
  !*** ./components/common/Meta.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/common/Meta.js";



var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "JWalker Creations"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Raleway:300,400,500,600,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/aos@next/dist/aos.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/home/About.js":
/*!**********************************!*\
  !*** ./components/home/About.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cloudinary-react */ "cloudinary-react");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./components/home/Title.js");
/* harmony import */ var _AboutBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutBanner */ "./components/home/AboutBanner.js");
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/About.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // Components



var About =
/*#__PURE__*/
function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, _getPrototypeOf(About).apply(this, arguments));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "about__wrapper",
        id: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "me",
        accent: "about",
        color: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about__content__top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        className: "about__profileImg",
        cloudName: "jwalkercreations-com",
        publicId: this.props.imageId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_1__["Transformation"], {
        height: "150",
        quality: "auto",
        crop: "limit",
        fetchFormat: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AboutBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
        contactInfo: this.props.contact,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about__content__bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "about__bio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.props.bio)));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/home/AboutBanner.js":
/*!****************************************!*\
  !*** ./components/home/AboutBanner.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/AboutBanner.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AboutBanner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AboutBanner, _React$Component);

  function AboutBanner() {
    _classCallCheck(this, AboutBanner);

    return _possibleConstructorReturn(this, _getPrototypeOf(AboutBanner).apply(this, arguments));
  }

  _createClass(AboutBanner, [{
    key: "render",
    value: function render() {
      if (this.props.contactInfo === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "banner__loading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          },
          __self: this
        }, "Loading...");
      }

      var gitHubIconPath = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "banner__icon__path",
        d: "M12.5 2.08333C18.2437 2.08333 22.9167 6.75625 22.9167 12.5C22.9167 18.2437 18.2437 22.9167 12.5 22.9167C6.75625 22.9167 2.08333 18.2437 2.08333 12.5C2.08333 6.75625 6.75625 2.08333 12.5 2.08333ZM12.5 0C5.59687 0 0 5.59687 0 12.5C0 19.4031 5.59687 25 12.5 25C19.4031 25 25 19.4031 25 12.5C25 5.59687 19.4031 0 12.5 0ZM12.5 6.25C9.04896 6.25 6.25 9.04792 6.25 12.5C6.25 15.2615 8.04062 17.6042 10.525 18.4302C10.8375 18.4885 10.9375 18.2948 10.9375 18.1292V16.9656C9.19896 17.3438 8.83646 16.2292 8.83646 16.2292C8.55312 15.5073 8.14271 15.3146 8.14271 15.3146C7.57604 14.926 8.18542 14.9344 8.18542 14.9344C8.81354 14.9781 9.14375 15.5792 9.14375 15.5792C9.70104 16.5344 10.6052 16.2583 10.9625 16.099C11.0188 15.6948 11.1802 15.4198 11.3594 15.2635C9.97083 15.1052 8.5125 14.5687 8.5125 12.175C8.5125 11.4927 8.75625 10.9354 9.15625 10.4979C9.09167 10.3385 8.87708 9.70208 9.21667 8.84167C9.21667 8.84167 9.74167 8.67396 10.9354 9.48229C11.4344 9.34375 11.9688 9.275 12.5 9.27187C13.0312 9.27396 13.5656 9.34375 14.0656 9.48229C15.2594 8.67396 15.7823 8.84167 15.7823 8.84167C16.1229 9.70208 15.9083 10.3385 15.8448 10.4958C16.2458 10.9333 16.4875 11.4906 16.4875 12.1729C16.4875 14.574 15.025 15.1021 13.6333 15.2562C13.8583 15.45 14.0625 15.8302 14.0625 16.4135V18.1281C14.0625 18.2948 14.1625 18.4896 14.4792 18.4281C16.9615 17.6021 18.75 15.2604 18.75 12.5C18.75 9.04792 15.951 6.25 12.5 6.25Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      });
      var linkedInIconPath = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "banner__icon__path",
        d: "M12.5 2.08333C18.2437 2.08333 22.9167 6.75625 22.9167 12.5C22.9167 18.2437 18.2437 22.9167 12.5 22.9167C6.75625 22.9167 2.08333 18.2437 2.08333 12.5C2.08333 6.75625 6.75625 2.08333 12.5 2.08333ZM12.5 0C5.59688 0 0 5.59688 0 12.5C0 19.4031 5.59688 25 12.5 25C19.4031 25 25 19.4031 25 12.5C25 5.59688 19.4031 0 12.5 0ZM10.4167 8.33333C10.4167 8.91354 9.95104 9.38333 9.375 9.38333C8.79896 9.38333 8.33333 8.91458 8.33333 8.33333C8.33333 7.75312 8.79896 7.28333 9.375 7.28333C9.95104 7.28333 10.4167 7.75417 10.4167 8.33333ZM10.4167 10.4167H8.33333V16.6667H10.4167V10.4167ZM13.5417 10.4167H11.4583V16.6667H13.5417V13.6865C13.5417 11.8927 15.6271 11.7271 15.6271 13.6865V16.6667H17.7083V13.1677C17.7083 9.74687 14.45 9.87188 13.5417 11.5552V10.4167Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      });
      var _this$props$contactIn = this.props.contactInfo,
          email = _this$props$contactIn.email,
          github = _this$props$contactIn.github,
          linkedin = _this$props$contactIn.linkedin;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about__banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "banner__first",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "banner__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Find Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "banner__icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "banner__link",
        href: github,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "banner__icon__svg",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, gitHubIconPath)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "banner__link",
        href: linkedin,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "banner__icon__svg",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, linkedInIconPath)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "banner__second",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "banner__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Email Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "banner__email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, email)));
    }
  }]);

  return AboutBanner;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AboutBanner);

/***/ }),

/***/ "./components/home/Contact.js":
/*!************************************!*\
  !*** ./components/home/Contact.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slice */ "./components/home/Slice.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ "./components/home/Title.js");
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/Contact.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact(props) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Contact).call(this, props));
    _this.state = {
      email: '',
      name: '',
      message: '',
      emailSuccessful: false
    };
    _this.handleInput = _this.handleInput.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSend = _this.handleSend.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Contact, [{
    key: "handleInput",
    value: function handleInput(event) {
      var name = event.currentTarget.name;
      var value = event.currentTarget.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "handleSend",
    value: function handleSend(event) {
      var _this2 = this;

      event.preventDefault();
      var _this$state = this.state,
          email = _this$state.email,
          name = _this$state.name,
          message = _this$state.message;
      var payload = {
        email: email,
        name: name,
        message: message
      }; // Send contact request and check response

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/contact', payload).then(function (res) {
        if (res.status === 200) {
          _this2.setState({
            emailSuccessful: true
          });
        }
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "contact__wrapper",
        id: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slice__WEBPACK_IMPORTED_MODULE_2__["default"], {
        postion: "bottom",
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Contact",
        accent: "",
        color: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSend,
        className: "contact__form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "contact__label",
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Name", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "contact__input",
        required: true,
        type: "text",
        name: "name",
        value: this.state.name,
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "contact__label",
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Email", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "contact__input",
        required: true,
        type: "email",
        name: "email",
        value: this.state.email,
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "contact__label",
        htmlFor: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Message", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "contact__input",
        required: true,
        cols: "33",
        rows: "15",
        type: "text",
        name: "message",
        value: this.state.message,
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "contact__form__button",
        type: "submit",
        value: "Send",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "contact__or",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "contact__email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "jwalkercreations@gmail.com"));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/home/Footer.js":
/*!***********************************!*\
  !*** ./components/home/Footer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/Footer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "footer__span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, "designed and developed by "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "footer__link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Jordan")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "footer__span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, " Walker"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/home/Hero.js":
/*!*********************************!*\
  !*** ./components/home/Hero.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jump.js */ "jump.js");
/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jump_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SpecialButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpecialButtons */ "./components/home/SpecialButtons.js");
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/Hero.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



 // Components



var Hero =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero(props) {
    var _this;

    _classCallCheck(this, Hero);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hero).call(this, props));
    _this.state = {
      verb: 'building',
      index: 0
    };
    _this.changeWord = _this.changeWord.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Hero, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Change ever 3 seconds
      setInterval(this.changeWord, 3000); // Set up smooth scrolling for hero buttons.

      document.querySelector('.hero__cta__button--primary').addEventListener('click', function () {
        jump_js__WEBPACK_IMPORTED_MODULE_2___default()('#contact');
      });
      document.querySelector('.hero__cta__button--secondary').addEventListener('click', function () {
        jump_js__WEBPACK_IMPORTED_MODULE_2___default()('#contact');
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Stop the timer
      clearInterval();
    }
  }, {
    key: "changeWord",
    value: function changeWord() {
      // List of words to cycle through
      var verbs = [' building ', ' learning ', ' designing ']; // This current index in state

      var index = this.state.index; // The next word to use based on index

      var nextVerb = verbs[index]; // Update state with next word to use

      this.setState({
        verb: nextVerb
      }); // Get max index

      var maxIndex = verbs.length - 1; // Next index to use

      var nextIndex = 0; // Check if counter is at the end of the words array

      if (index < maxIndex) {
        // Not at end, add one to index
        nextIndex = index + 1;
      } else {
        // At the end, start over
        nextIndex = 0;
      } // Update index for next time


      this.setState({
        index: nextIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var verb = this.state.verb;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero__text__wrapper",
        "data-aos": "zoom-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "hero__text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "I'm ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hero__text__name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Jordan"), " , a", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hero__text__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Web Developer"), " who loves", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["TransitionGroup"], {
        component: "span",
        className: "hero__text__verb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["CSSTransition"], {
        classNames: "hero__text__verb",
        key: verb,
        timeout: {
          enter: 3000,
          exit: 3000
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hero__text__verb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, verb))), ' ', "things."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero__cta__buttons",
        "data-aos": "fade-up",
        "data-aos-duration": "1000",
        "data-aos-delay": "1000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SpecialButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        buttonType: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SpecialButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        buttonType: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/home/Icons.js":
/*!**********************************!*\
  !*** ./components/home/Icons.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/Icons.js";


var Icons = function Icons(props) {
  // Icons
  var iconFrontEnd = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    className: "skill__icon__primary",
    rx: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "skill__icon__seondary",
    d: "M8.7 13.3a1 1 0 0 1-1.4 1.4l-2-2a1 1 0 0 1 0-1.4l2-2a1 1 0 1 1 1.4 1.4L7.42 12l1.3 1.3zm6.6 0l1.29-1.3-1.3-1.3a1 1 0 1 1 1.42-1.4l2 2a1 1 0 0 1 0 1.4l-2 2a1 1 0 0 1-1.42-1.4zm-3.32 3.9a1 1 0 0 1-1.96-.4l2-10a1 1 0 0 1 1.96.4l-2 10z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
  var iconBackEnd = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "skill__icon__primary",
    d: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm8.12 7.47A5 5 0 1 0 17 14V9a1 1 0 0 0-1.7-.7l-1.18 1.17z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "skill__icon__secondary",
    d: "M12 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6-11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm12 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM6 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM8 6h4a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
  var iconTools = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "skill__icon__primary",
    d: "M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "skill__icon__secondary",
    cx: "12",
    cy: "12",
    r: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
  var iconKnowledge = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "skill__icon__primary",
    d: "M5 8a7 7 0 1 1 10.62 6l-.64 3.2a1 1 0 0 1-.98.8h-4a1 1 0 0 1-.98-.8L8.38 14A7 7 0 0 1 5 8zm12 0a5 5 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3 1 1 0 0 0 2 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "skill__icon__secondary",
    d: "M15 21a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })); // Determine icon to display

  var iconName = props.iconName;
  var iconToDisplay = iconKnowledge;

  switch (iconName) {
    case 'Front-end':
      iconToDisplay = iconFrontEnd;
      break;

    case 'Back-end':
      iconToDisplay = iconBackEnd;
      break;

    case 'Tools':
      iconToDisplay = iconTools;
      break;

    case 'Knowledge':
      iconToDisplay = iconKnowledge;
      break;

    default:
      iconToDisplay = iconFrontEnd;
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "skill__icon__svg",
    "data-aos": "pop-and-spin",
    "data-aos-delay": "1000",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, iconToDisplay);
};

/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ }),

/***/ "./components/home/Logo.js":
/*!*********************************!*\
  !*** ./components/home/Logo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/Logo.js";


var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "nav__logo",
    width: "100%",
    height: "100%",
    viewBox: "0 0 400 400",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "nav__logo__path",
    d: "M326,21L276,72L276,175L224,175L224,124L173,174L173,276L122,276L122,225L71,277L71,379L122,328L173,327L224,276L224,226L275,226L326,277L326,21Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/home/Navbar.js":
/*!***********************************!*\
  !*** ./components/home/Navbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jump.js */ "jump.js");
/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jump_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ "./components/home/Logo.js");
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/Navbar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // Smooth scroll lib

 // Components



var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));
    _this.state = {
      menuIconClass: '',
      sidebarClass: ''
    };
    _this.toggleSideBar = _this.toggleSideBar.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setUpSmoothScrolling = _this.setUpSmoothScrolling.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setUpSmoothScrolling();
    }
  }, {
    key: "setUpSmoothScrolling",
    value: function setUpSmoothScrolling() {
      // Set up smooth scrolling
      document.querySelector('.nav__button--skills').addEventListener('click', function () {
        jump_js__WEBPACK_IMPORTED_MODULE_1___default()('#skills');
      });
      document.querySelector('.nav__button--work').addEventListener('click', function () {
        jump_js__WEBPACK_IMPORTED_MODULE_1___default()('#work');
      });
      document.querySelector('.nav__button--about').addEventListener('click', function () {
        jump_js__WEBPACK_IMPORTED_MODULE_1___default()('#about');
      });
      document.querySelector('.nav__button--contact').addEventListener('click', function () {
        jump_js__WEBPACK_IMPORTED_MODULE_1___default()('#contact');
      });
    }
  }, {
    key: "toggleSideBar",
    value: function toggleSideBar() {
      var _this$state = this.state,
          menuIconClass = _this$state.menuIconClass,
          sidebarClass = _this$state.sidebarClass; // Set class to open/close for sidebar

      if (sidebarClass === '') {
        this.setState({
          sidebarClass: 'show'
        });
      } else {
        this.setState({
          sidebarClass: ''
        });
      } // Set class for menu icon change


      if (menuIconClass === '') {
        this.setState({
          menuIconClass: 'rotate'
        });
      } else {
        this.setState({
          menuIconClass: ''
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          menuIconClass = _this$state2.menuIconClass,
          sidebarClass = _this$state2.sidebarClass;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav__menu__icon",
        onClick: this.toggleSideBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav__menu__line ".concat(menuIconClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav__menu__line ".concat(menuIconClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "nav__sidebar ".concat(sidebarClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav__items ".concat(sidebarClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav__item nav__item--one ".concat(sidebarClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "nav__button nav__button--skills",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Skills")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav__item nav__item--two ".concat(sidebarClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "nav__button nav__button--work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Work")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav__item nav__item--three ".concat(sidebarClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "nav__button nav__button--about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav__item  nav__item--four ".concat(sidebarClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "nav__button nav__button--contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav__item--primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Contact"))))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/home/Project.js":
/*!************************************!*\
  !*** ./components/home/Project.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cloudinary-react */ "cloudinary-react");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/Project.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Project =
/*#__PURE__*/
function (_Component) {
  _inherits(Project, _Component);

  function Project() {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, _getPrototypeOf(Project).apply(this, arguments));
  }

  _createClass(Project, [{
    key: "render",
    value: function render() {
      var _this$props$data = this.props.data,
          imageIds = _this$props$data.imageIds,
          title = _this$props$data.title,
          type = _this$props$data.type,
          id = _this$props$data.id,
          link = _this$props$data.link;
      var projectIndex = this.props.index;
      var image = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image__project",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "No image found")); // If cloudinary id is found

      if (imageIds.length > 0) {
        var mainImageid = imageIds[0];
        image = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "project__image__container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          cloudName: "jwalkercreations-com",
          publicId: mainImageid,
          className: "project__image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_1__["Transformation"], {
          width: "700",
          height: "400",
          quality: "auto",
          fetchFormat: "auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "project",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, image, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "project__details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "project__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "project__type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "project__buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: link,
        className: "work__primary__link",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Live Site"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: '/projectinfo',
          query: {
            index: projectIndex
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "work__secondary__link",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Learn More")))));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/home/Skill.js":
/*!**********************************!*\
  !*** ./components/home/Skill.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons */ "./components/home/Icons.js");
/* harmony import */ var _SkillList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SkillList */ "./components/home/SkillList.js");
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/Skill.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // Components




var Skill =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Skill, _React$Component);

  function Skill() {
    _classCallCheck(this, Skill);

    return _possibleConstructorReturn(this, _getPrototypeOf(Skill).apply(this, arguments));
  }

  _createClass(Skill, [{
    key: "render",
    value: function render() {
      // Determine skill type from props
      var _this$props = this.props,
          type = _this$props.type,
          skills = _this$props.skills;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "skill__group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
        iconName: type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "skill__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "skill__svg",
        viewBox: "0 0 100 150",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
        className: "skill__path",
        x1: "50",
        y1: "0",
        x2: "50",
        y2: "150",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SkillList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        list: skills,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    }
  }]);

  return Skill;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Skill);

/***/ }),

/***/ "./components/home/SkillList.js":
/*!**************************************!*\
  !*** ./components/home/SkillList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/SkillList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SkillList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SkillList, _React$Component);

  function SkillList() {
    _classCallCheck(this, SkillList);

    return _possibleConstructorReturn(this, _getPrototypeOf(SkillList).apply(this, arguments));
  }

  _createClass(SkillList, [{
    key: "render",
    value: function render() {
      var list = this.props.list;

      if (list === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }, "loading....");
      }

      var listItems = list.map(function (listItem) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: listItem,
          className: "skill__listitem",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, listItem);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "skill__list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, listItems);
    }
  }]);

  return SkillList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SkillList);

/***/ }),

/***/ "./components/home/Skills.js":
/*!***********************************!*\
  !*** ./components/home/Skills.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title */ "./components/home/Title.js");
/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Skill */ "./components/home/Skill.js");
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/Skills.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // Components




var Skills =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Skills, _React$Component);

  function Skills() {
    _classCallCheck(this, Skills);

    return _possibleConstructorReturn(this, _getPrototypeOf(Skills).apply(this, arguments));
  }

  _createClass(Skills, [{
    key: "render",
    value: function render() {
      var frontEndList;
      var backEndList;
      var knowledgeList;
      var toolsList;

      if (this.props.skills !== undefined) {
        frontEndList = this.props.skills.frontend;
        backEndList = this.props.skills.backend;
        knowledgeList = this.props.skills.knowledge;
        toolsList = this.props.skills.tools;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "skills__wrapper animation__target",
        id: "skills",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "skills__content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "skills",
        accent: "my",
        color: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "skills",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Skill__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "Front-end",
        skills: frontEndList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Skill__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "Back-end",
        skills: backEndList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Skill__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "Tools",
        skills: knowledgeList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Skill__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "Knowledge",
        skills: toolsList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }))));
    }
  }]);

  return Skills;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./components/home/Slice.js":
/*!**********************************!*\
  !*** ./components/home/Slice.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/Slice.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Slice =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slice, _React$Component);

  function Slice() {
    _classCallCheck(this, Slice);

    return _possibleConstructorReturn(this, _getPrototypeOf(Slice).apply(this, arguments));
  }

  _createClass(Slice, [{
    key: "render",
    value: function render() {
      var color = this.props.color; // Slice css class

      var sliceClass = "slice__path--".concat(color); // Paths

      var topSlice = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: sliceClass,
        d: "M1100,0L0,126L1100,126L1100,0Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      });
      var topLeftSlice = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: sliceClass,
        d: "M0 0L1100 126H0V0Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      });
      var bottomSlice = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: sliceClass,
        d: "M1100,126L0,0L1100,0L1100,126Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }); // Slice variable

      var slice = topSlice; // Determine path

      if (this.props.position === 'top') {
        slice = topSlice;
      } else if (this.props.position === 'top-left') {
        slice = topLeftSlice;
      } else {
        slice = bottomSlice;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slice__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "slice__svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 1100 126",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, slice));
    }
  }]);

  return Slice;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Slice);

/***/ }),

/***/ "./components/home/SpecialButtons.js":
/*!*******************************************!*\
  !*** ./components/home/SpecialButtons.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpecialButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/SpecialButtons.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var SpecialButtons =
/*#__PURE__*/
function (_Component) {
  _inherits(SpecialButtons, _Component);

  function SpecialButtons(props) {
    var _this;

    _classCallCheck(this, SpecialButtons);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SpecialButtons).call(this, props));
    _this.state = {
      primaryWords: ['Hire me!', 'Lets do this', 'Ahhh...'],
      seondaryWords: ['I need a website', 'Tell me more', 'Ahhh...'],
      btnState: 'default',
      btnText: 'Hire me'
    };
    _this.onMouseEnter = _this.onMouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMouseLeave = _this.onMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.determineState = _this.determineState.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SpecialButtons, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.determineState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.btnState !== this.state.btnState) {
        this.determineState();
      }
    } // Event for hovering over the button

  }, {
    key: "onMouseEnter",
    value: function onMouseEnter() {
      this.setState({
        btnState: 'hover'
      });
    } // Event for exiting after hovering over the button

  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      var _this2 = this;

      var time = 2000; // 2 seconds
      // Start the timer

      setTimeout(function () {
        return _this2.setState({
          btnState: 'default'
        });
      }, time); // Set this state until timer runs out

      this.setState({
        btnState: 'exit'
      });
    } // The method determines what words to display within the button

  }, {
    key: "determineState",
    value: function determineState() {
      var _this$state = this.state,
          primaryWords = _this$state.primaryWords,
          seondaryWords = _this$state.seondaryWords,
          btnState = _this$state.btnState;
      var buttonType = this.props.buttonType; // Default words

      var wordsArr = primaryWords; // Check if not default words

      if (buttonType === 'secondary') {
        wordsArr = seondaryWords;
      } // Determine word to use


      if (btnState === 'hover') {
        // Set to the second word in the array
        this.setState({
          btnText: wordsArr[1]
        });
      } else if (btnState === 'exit') {
        // Set to the second word in the array
        this.setState({
          btnText: wordsArr[2]
        });
      } else {
        // Default state
        // Set to the first word in the array
        this.setState({
          btnText: wordsArr[0]
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var buttonType = this.props.buttonType;
      var _this$state2 = this.state,
          btnText = _this$state2.btnText,
          btnState = _this$state2.btnState; // Default css class

      var btnClass = "hero__cta__button--".concat(buttonType); // Determine if exit needs to be added
      // exit is needed after hover for a few seconds

      if (btnState === 'exit') {
        btnClass = "hero__cta__button--".concat(buttonType, "--exit");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: btnClass,
        type: "button",
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, btnText);
    }
  }]);

  return SpecialButtons;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/home/Title.js":
/*!**********************************!*\
  !*** ./components/home/Title.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/Title.js";


var Title = function Title(props) {
  // Define the title word, accent word and font color
  var title = props.title,
      accent = props.accent,
      color = props.color; // Determine font color class

  var colorClass = 'title__dark'; // Determine stroke color class

  var strokeClass = 'title__accent--dark';

  if (color === 'dark') {
    colorClass = 'title__font--dark';
    strokeClass = 'title__accent--dark';
  } else {
    colorClass = 'title__font--light';
    strokeClass = 'title__accent--light';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title__wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title__top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "title__accent--clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, accent), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "title__svg",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "title__svg__path ".concat(strokeClass),
    x1: "50",
    y1: "0",
    x2: "50",
    y2: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "title__accent ".concat(strokeClass),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, accent)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title__bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title__main ".concat(colorClass),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, title)));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./components/home/Work.js":
/*!*********************************!*\
  !*** ./components/home/Work.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Work; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./components/home/Title.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project */ "./components/home/Project.js");
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/home/Work.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Components




var Work =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Work, _React$Component);

  function Work() {
    _classCallCheck(this, Work);

    return _possibleConstructorReturn(this, _getPrototypeOf(Work).apply(this, arguments));
  }

  _createClass(Work, [{
    key: "render",
    value: function render() {
      var projects = this.props.projects; // If data is loading from server

      if (projects === null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "work__wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: "work",
          accent: "my",
          color: "light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "work__projects",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, "Loading something awesome")));
      } // Grab the index for the projectInfo Page.


      var projectIndex = projects.length - 1; // Copy projectData without siteData

      var onlyProjects = projects.filter(function (project, idx) {
        if (idx !== projectIndex) {
          return project;
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "work__wrapper",
        id: "work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "work",
        accent: "my",
        color: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "work__projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, onlyProjects.map(function (projectInfo, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Project__WEBPACK_IMPORTED_MODULE_3__["default"], {
          data: projectInfo,
          key: projectInfo.title,
          index: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "work__site",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "work__website__question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Interested in how I built this website?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: {
          pathname: '/projectinfo',
          query: {
            index: projectIndex
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "work__primary__link website__info__button",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Learn More")))));
    }
  }]);

  return Work;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reduxState_actions_homePageActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reduxState/actions/homePageActions */ "./reduxState/actions/homePageActions.js");
/* harmony import */ var _components_common_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/Meta */ "./components/common/Meta.js");
/* harmony import */ var _components_home_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/Navbar */ "./components/home/Navbar.js");
/* harmony import */ var _components_home_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/Hero */ "./components/home/Hero.js");
/* harmony import */ var _components_home_Slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home/Slice */ "./components/home/Slice.js");
/* harmony import */ var _components_home_Skills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/Skills */ "./components/home/Skills.js");
/* harmony import */ var _components_home_Work__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/Work */ "./components/home/Work.js");
/* harmony import */ var _components_home_About__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home/About */ "./components/home/About.js");
/* harmony import */ var _components_home_Contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home/Contact */ "./components/home/Contact.js");
/* harmony import */ var _components_home_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/home/Footer */ "./components/home/Footer.js");
/* harmony import */ var _scss_home_homepage_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../scss/home/homepage.scss */ "./scss/home/homepage.scss");
/* harmony import */ var _scss_home_homepage_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scss_home_homepage_scss__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 // Components









 // Styles



var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.setUpAnimations = _this.setUpAnimations.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Run actions on mount
      this.props.getProfileData();
      this.props.getProjectData();
      this.setUpAnimations();
    }
  }, {
    key: "setUpAnimations",
    value: function setUpAnimations() {
      // Initialize AOS
      aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          profileData = _this$props.profileData,
          projectsData = _this$props.projectsData;
      var skillData;
      var contactData;
      var bioData;
      var imageId; // Make sure data has loaded

      if (profileData !== null) {
        // Destructure data
        skillData = profileData.skills;
        contactData = profileData.contactInfo;
        bioData = profileData.bio;
        imageId = profileData.profileImageId;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_Meta__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "landing__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "hero__section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Hero__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Slice__WEBPACK_IMPORTED_MODULE_7__["default"], {
        position: "top",
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Skills__WEBPACK_IMPORTED_MODULE_8__["default"], {
        skills: skillData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Slice__WEBPACK_IMPORTED_MODULE_7__["default"], {
        position: "bottom",
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Work__WEBPACK_IMPORTED_MODULE_9__["default"], {
        projects: projectsData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Slice__WEBPACK_IMPORTED_MODULE_7__["default"], {
        position: "top",
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_About__WEBPACK_IMPORTED_MODULE_10__["default"], {
        contact: contactData,
        bio: bioData,
        imageId: imageId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Contact__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    profileData: state.homePageData.profileData,
    projectsData: state.homePageData.projectData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getProfileData: _reduxState_actions_homePageActions__WEBPACK_IMPORTED_MODULE_3__["getProfileData"],
  getProjectData: _reduxState_actions_homePageActions__WEBPACK_IMPORTED_MODULE_3__["getProjectData"]
})(Home));

/***/ }),

/***/ "./reduxState/actions/homePageActions.js":
/*!***********************************************!*\
  !*** ./reduxState/actions/homePageActions.js ***!
  \***********************************************/
/*! exports provided: clearErrors, getProfileData, getProjectData, setProfileData, setProjectData, deleteProjectData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearErrors", function() { return clearErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileData", function() { return getProfileData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectData", function() { return getProjectData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfileData", function() { return setProfileData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProjectData", function() { return setProjectData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProjectData", function() { return deleteProjectData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./reduxState/actions/types.js");

 // Clear errors

var clearErrors = function clearErrors() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].CLEAR_ERRORS
  };
}; // Get project data

var getProfileData = function getProfileData() {
  return function (dispatch) {
    // Fetch profile data
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/profile').then(function (res) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PROFILE,
        payload: res.data
      });
    }).catch(function (err) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ERRORS,
        payload: {
          getError: err
        }
      });
    });
  };
}; // Get project data

var getProjectData = function getProjectData() {
  return function (dispatch) {
    dispatch(clearErrors()); // Fetch project data

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/project/all').then(function (res) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PROJECTS,
        payload: res.data
      });
    }).catch(function (err) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ERRORS,
        payload: {
          getError: err
        }
      });
    });
  };
}; // Send profile data to server

var setProfileData = function setProfileData(profileData) {
  return function (dispatch) {
    // Post profile data
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/profile', profileData).then(function (res) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ERRORS,
        payload: {
          update: res.status
        }
      });
    }).catch(function (err) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ERRORS,
        payload: {
          postError: err
        }
      });
    });
  };
}; // Send project data to server

var setProjectData = function setProjectData(projectData) {
  return function (dispatch) {
    // Post project data
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/project', projectData).then(function (res) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ERRORS,
        payload: {
          update: res.data.message
        }
      });
    }).catch(function (err) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ERRORS,
        payload: {
          postError: err
        }
      });
    });
  };
}; // Delete project from the server

var deleteProjectData = function deleteProjectData(projectId) {
  return function (dispatch) {
    // Send delete request
    var config = {
      data: {
        id: projectId
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete('/project', config).then(function (res) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ERRORS,
        payload: {
          update: res.data.message
        }
      });
    }).catch(function (err) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ERRORS,
        payload: {
          deleteError: err
        }
      });
    });
  };
};

/***/ }),

/***/ "./reduxState/actions/types.js":
/*!*************************************!*\
  !*** ./reduxState/actions/types.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Actions send payloads of data to the store
// they describe how data will change
var actions = {
  GET_ERRORS: 'GET_ERRORS',
  CLEAR_ERRORS: 'CLEAR_ERRORS',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  GET_PROFILE: 'GET_PROFILE',
  GET_PROJECTS: 'GET_PROJECTS'
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./scss/home/homepage.scss":
/*!*********************************!*\
  !*** ./scss/home/homepage.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cloudinary-react":
/*!***********************************!*\
  !*** external "cloudinary-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cloudinary-react");

/***/ }),

/***/ "jump.js":
/*!**************************!*\
  !*** external "jump.js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jump.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map