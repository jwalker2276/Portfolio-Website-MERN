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

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reduxState_actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reduxState/actions/authActions */ "./reduxState/actions/authActions.js");
/* harmony import */ var _scss_login_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/login.scss */ "./scss/login.scss");
/* harmony import */ var _scss_login_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_login_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/Login.js";

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







var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props)); // Login state

    _this.state = {
      username: '',
      password: '',
      errors: {}
    }; // Bind these methods to this instance

    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Check if login is needed
      if (this.props.auth.isAuth) {
        // Move to dashboard page
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/dashboard');
      }
    } // Check for new props

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var errors = this.props.errors; // Check for new errors

      if (prevProps.errors !== errors) {
        this.setState({
          errors: errors
        });
      } // Current props state


      var currentIsAuth = this.props.auth.isAuth; // Check for change in auth

      if (currentIsAuth !== prevProps.auth.isAuth) {
        // Check if user logged in.
        if (currentIsAuth) {
          // Redirect to dashboard
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/dashboard');
        }
      }
    } // Form submission

  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      event.preventDefault(); // User data

      var _this$state = this.state,
          username = _this$state.username,
          password = _this$state.password;
      var user = {
        username: username,
        password: password
      }; // Redux Action

      this.props.login(user);
    } // Changed state when input is detected

  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          username = _this$state2.username,
          password = _this$state2.password,
          errors = _this$state2.errors;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form",
        method: "POST",
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "form__heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
        className: "form__set",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "username",
        className: "form__label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Username", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "form__error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, errors.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "username",
        value: username,
        onChange: this.handleChange,
        className: "form__input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password",
        className: "form__label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Password", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "form__error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, errors.password || errors.error), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        name: "password",
        value: password,
        onChange: this.handleChange,
        className: "form__input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        value: "Submit",
        className: " form__button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Sign in")));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // Add to props from redux state


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  login: _reduxState_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["login"]
})(Login));

/***/ }),

/***/ "./components/dashboard/BioCard.js":
/*!*****************************************!*\
  !*** ./components/dashboard/BioCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_dashboard_dashboard_skills_card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/dashboard/dashboard-skills-card.scss */ "./scss/dashboard/dashboard-skills-card.scss");
/* harmony import */ var _scss_dashboard_dashboard_skills_card_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_dashboard_dashboard_skills_card_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/dashboard/BioCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // Styles



var BioCard =
/*#__PURE__*/
function (_Component) {
  _inherits(BioCard, _Component);

  function BioCard(props) {
    var _this;

    _classCallCheck(this, BioCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BioCard).call(this, props));
    _this.state = {
      bio: ''
    };
    _this.updateChange = _this.updateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BioCard, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.bioData !== this.state.bio) {
        // Only update if not currently editing input
        if (!this.props.isEditable) {
          // Set inital value
          this.setState({
            bio: this.props.bioData
          });
        }
      }
    } // Update state

  }, {
    key: "updateChange",
    value: function updateChange(event) {
      var value = event.currentTarget.value; // Update state to new string value

      this.setState({
        bio: value
      });
    } // Handle submit of form

  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault(); // Update profile component state

      this.props.updateProfileState('bio', this.state.bio);
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.props.title;
      var isEditable = this.props.isEditable;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, title), isEditable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        rows: "5",
        cols: "33",
        className: "editForm__input",
        type: "text",
        name: "link",
        value: this.state.bio,
        onChange: this.updateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "Update Changes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.state.bio)));
    }
  }]);

  return BioCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BioCard);

/***/ }),

/***/ "./components/dashboard/Controller.js":
/*!********************************************!*\
  !*** ./components/dashboard/Controller.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxState_actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reduxState/actions/authActions */ "./reduxState/actions/authActions.js");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profile */ "./components/dashboard/Profile.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projects */ "./components/dashboard/Projects.js");
/* harmony import */ var _scss_dashboard_dashboard_controller_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../scss/dashboard/dashboard-controller.scss */ "./scss/dashboard/dashboard-controller.scss");
/* harmony import */ var _scss_dashboard_dashboard_controller_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_dashboard_dashboard_controller_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/dashboard/Controller.js";

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



var Controller =
/*#__PURE__*/
function (_Component) {
  _inherits(Controller, _Component);

  function Controller(props) {
    var _this;

    _classCallCheck(this, Controller);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Controller).call(this, props));
    _this.changeSection = _this.changeSection.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.logout = _this.logout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.edit = _this.edit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      sectionToRender: 'profile',
      editData: false
    };
    return _this;
  } // Determine which section to render


  _createClass(Controller, [{
    key: "changeSection",
    value: function changeSection(section) {
      this.setState({
        sectionToRender: section
      });
    } // Toggle edit flag

  }, {
    key: "edit",
    value: function edit() {
      this.setState(function (prevState) {
        return {
          editData: !prevState.editData
        };
      });
    } // Logout

  }, {
    key: "logout",
    value: function logout() {
      // Use redux action to logout user.
      this.props.logout();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var sectionToRender = this.state.sectionToRender;
      var dashBoardSection;

      switch (sectionToRender) {
        case 'profile':
          dashBoardSection = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
            isEditable: this.state.editData,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          });
          break;

        case 'projects':
          dashBoardSection = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_4__["default"], {
            isEditable: this.state.editData,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          });
          break;

        default:
          dashBoardSection = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
            isEditable: this.state.editData,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "dashboard__nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav__buttons__left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "nav__button",
        type: "button",
        onClick: function onClick() {
          return _this2.changeSection('profile');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "nav__button",
        type: "button",
        onClick: function onClick() {
          return _this2.changeSection('projects');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav__buttons__center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "nav__button",
        type: "button",
        onClick: function onClick() {
          return _this2.edit();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "nav__button",
        type: "button",
        onClick: function onClick() {
          return _this2.edit();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Save")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav__buttons__right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "nav__button nav__button--right",
        type: "button",
        onClick: function onClick() {
          return _this2.logout();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Logout"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "dashboard__section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, dashBoardSection));
    }
  }]);

  return Controller;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  logout: _reduxState_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["logout"]
})(Controller));

/***/ }),

/***/ "./components/dashboard/LinksCard.js":
/*!*******************************************!*\
  !*** ./components/dashboard/LinksCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_dashboard_dashboard_skills_card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/dashboard/dashboard-skills-card.scss */ "./scss/dashboard/dashboard-skills-card.scss");
/* harmony import */ var _scss_dashboard_dashboard_skills_card_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_dashboard_dashboard_skills_card_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/dashboard/LinksCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // Styles



var LinksCard =
/*#__PURE__*/
function (_Component) {
  _inherits(LinksCard, _Component);

  function LinksCard(props) {
    var _this;

    _classCallCheck(this, LinksCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LinksCard).call(this, props));
    _this.state = {
      link: ''
    };
    _this.updateChange = _this.updateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LinksCard, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.linkData !== this.state.link) {
        // Only update if not currently editing input
        if (!this.props.isEditable) {
          // Set inital value
          this.setState({
            link: this.props.linkData
          });
        }
      }
    } // Update state

  }, {
    key: "updateChange",
    value: function updateChange(event) {
      var value = event.currentTarget.value; // Update state to new string value

      this.setState({
        link: value
      });
    } // Handle submit of form

  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault(); // Update profile component state

      this.props.updateProfileState(this.props.linkType, this.state.link);
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.props.title;
      var isEditable = this.props.isEditable;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, title), isEditable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "editForm__input",
        type: "text",
        name: "link",
        value: this.state.link,
        onChange: this.updateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "Update Changes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, this.state.link)));
    }
  }]);

  return LinksCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LinksCard);

/***/ }),

/***/ "./components/dashboard/Profile.js":
/*!*****************************************!*\
  !*** ./components/dashboard/Profile.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxState_actions_homePageActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reduxState/actions/homePageActions */ "./reduxState/actions/homePageActions.js");
/* harmony import */ var _SkillsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SkillsCard */ "./components/dashboard/SkillsCard.js");
/* harmony import */ var _LinksCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinksCard */ "./components/dashboard/LinksCard.js");
/* harmony import */ var _BioCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BioCard */ "./components/dashboard/BioCard.js");
/* harmony import */ var _scss_dashboard_dashboard_profile_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../scss/dashboard/dashboard-profile.scss */ "./scss/dashboard/dashboard-profile.scss");
/* harmony import */ var _scss_dashboard_dashboard_profile_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_dashboard_dashboard_profile_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/dashboard/Profile.js";

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



 // Components



 // Styles



var Profile =
/*#__PURE__*/
function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    var _this;

    _classCallCheck(this, Profile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Profile).call(this, props));
    _this.state = {
      frontend: [],
      backend: [],
      tools: [],
      knowledge: [],
      github: '',
      linkedin: '',
      email: '',
      bio: '',
      profileImage: ''
    };
    _this.updateProfileState = _this.updateProfileState.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateServer = _this.updateServer.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Get data from server
      this.props.getProfileData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.profileData !== prevProps.profileData) {
        var _this$props$profileDa = this.props.profileData.skills,
            frontend = _this$props$profileDa.frontend,
            backend = _this$props$profileDa.backend,
            tools = _this$props$profileDa.tools,
            knowledge = _this$props$profileDa.knowledge;
        var _this$props$profileDa2 = this.props.profileData.contactInfo,
            email = _this$props$profileDa2.email,
            github = _this$props$profileDa2.github,
            linkedin = _this$props$profileDa2.linkedin;
        var bio = this.props.profileData.bio; // Update skills from redux store

        this.updateProfileState('frontend', frontend);
        this.updateProfileState('backend', backend);
        this.updateProfileState('tools', tools);
        this.updateProfileState('knowledge', knowledge);
        this.updateProfileState('github', github);
        this.updateProfileState('linkedin', linkedin);
        this.updateProfileState('email', email);
        this.updateProfileState('bio', bio);
      }
    } // This method is passed to children to update this component's state

  }, {
    key: "updateProfileState",
    value: function updateProfileState(key, value) {
      this.setState(_defineProperty({}, key, value));
    } // This method takes the latest copy of state and submits a post request with it.

  }, {
    key: "updateServer",
    value: function updateServer() {
      // Create payload for action
      var payload = {}; // Call action to submit a post request.

      console.log('update server with new profile data');
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.profileData === null) {
        return null;
      } // Skills


      var _this$state = this.state,
          frontend = _this$state.frontend,
          backend = _this$state.backend,
          tools = _this$state.tools,
          knowledge = _this$state.knowledge,
          github = _this$state.github,
          linkedin = _this$state.linkedin,
          email = _this$state.email,
          bio = _this$state.bio,
          profileImage = _this$state.profileImage;
      var isEditable = this.props.isEditable;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section__skills",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SkillsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        skillData: frontend,
        skillsType: "frontend",
        title: "Front End Skills",
        isEditable: isEditable,
        updateProfileState: this.updateProfileState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SkillsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        skillData: backend,
        skillsType: "backend",
        title: "Back End Skills",
        isEditable: isEditable,
        updateProfileState: this.updateProfileState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SkillsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        skillData: tools,
        skillsType: "tools",
        title: "Tools",
        isEditable: isEditable,
        updateProfileState: this.updateProfileState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SkillsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        skillData: knowledge,
        skillsType: "knowledge",
        title: "Knowledge",
        isEditable: isEditable,
        updateProfileState: this.updateProfileState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section__links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinksCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        linkData: linkedin,
        linkType: "linkedin",
        title: "Linkedin",
        isEditable: isEditable,
        updateProfileState: this.updateProfileState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinksCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        linkData: github,
        linkType: "github",
        title: "Github",
        isEditable: isEditable,
        updateProfileState: this.updateProfileState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinksCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        linkData: email,
        linkType: "email",
        title: "Email",
        isEditable: isEditable,
        updateProfileState: this.updateProfileState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section__bio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BioCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        bioData: bio,
        title: "Bio",
        isEditable: isEditable,
        updateProfileState: this.updateProfileState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    profileData: state.homePageData.profileData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getProfileData: _reduxState_actions_homePageActions__WEBPACK_IMPORTED_MODULE_2__["getProfileData"]
})(Profile));

/***/ }),

/***/ "./components/dashboard/Projects.js":
/*!******************************************!*\
  !*** ./components/dashboard/Projects.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_dashboard_dashboard_projects_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/dashboard/dashboard-projects.scss */ "./scss/dashboard/dashboard-projects.scss");
/* harmony import */ var _scss_dashboard_dashboard_projects_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_dashboard_dashboard_projects_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/dashboard/Projects.js";

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
// Styles



var Projects =
/*#__PURE__*/
function (_Component) {
  _inherits(Projects, _Component);

  function Projects() {
    _classCallCheck(this, Projects);

    return _possibleConstructorReturn(this, _getPrototypeOf(Projects).apply(this, arguments));
  }

  _createClass(Projects, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "info"));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/dashboard/SkillsCard.js":
/*!********************************************!*\
  !*** ./components/dashboard/SkillsCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.isempty */ "lodash.isempty");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_dashboard_dashboard_skills_card_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/dashboard/dashboard-skills-card.scss */ "./scss/dashboard/dashboard-skills-card.scss");
/* harmony import */ var _scss_dashboard_dashboard_skills_card_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_dashboard_dashboard_skills_card_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/dashboard/SkillsCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 // Styles



var SkillsCard =
/*#__PURE__*/
function (_Component) {
  _inherits(SkillsCard, _Component);

  function SkillsCard(props) {
    var _this;

    _classCallCheck(this, SkillsCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SkillsCard).call(this, props));
    _this.state = {
      skills: ''
    };
    _this.updateChange = _this.updateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SkillsCard, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.skillData !== this.props.skillData) {
        if (!lodash_isempty__WEBPACK_IMPORTED_MODULE_1___default()(this.props.skillData)) {
          var skillData = this.props.skillData; // Reduce array to string

          var skillString = skillData.reduce(function (accumulator, skill) {
            return "".concat(accumulator, ",").concat(skill);
          }); // Set this string to state for input

          this.setState({
            skills: skillString
          });
        }
      }
    } // Update state

  }, {
    key: "updateChange",
    value: function updateChange(event) {
      var value = event.currentTarget.value; // Update state to new string value

      this.setState({
        skills: value
      });
    } // Handle submit of form

  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault(); // Split skills string into array

      var skillsString = this.state.skills;
      var skillsArray = skillsString.split(','); // Update profile component state

      this.props.updateProfileState(this.props.skillsType, skillsArray);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          skillData = _this$props.skillData,
          title = _this$props.title;
      var isEditable = this.props.isEditable;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, title), isEditable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "editForm__input",
        type: "text",
        name: "skills",
        value: this.state.skills,
        onChange: this.updateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "Update Changes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, skillData.map(function (skill) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          key: skill,
          className: "card__skill",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, skill);
      })));
    }
  }]);

  return SkillsCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SkillsCard);

/***/ }),

/***/ "./helpers/setAuthToken.js":
/*!*********************************!*\
  !*** ./helpers/setAuthToken.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var setAuthToken = function setAuthToken(token) {
  // Check for token to attach
  if (token) {
    // Apply to every request
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.isempty */ "lodash.isempty");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_setAuthToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/setAuthToken */ "./helpers/setAuthToken.js");
/* harmony import */ var _reduxState_actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reduxState/actions/authActions */ "./reduxState/actions/authActions.js");
/* harmony import */ var _components_dashboard_Controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/dashboard/Controller */ "./components/dashboard/Controller.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Login */ "./components/Login.js");
/* harmony import */ var _scss_dashboard_dashboard_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/dashboard/dashboard.scss */ "./scss/dashboard/dashboard.scss");
/* harmony import */ var _scss_dashboard_dashboard_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_dashboard_dashboard_scss__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/pages/dashboard.js";

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


 // Styles



var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).call(this, props));
    _this.state = {
      isLoggedIn: false
    };
    return _this;
  } // Check if user is authenticated client side


  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('MOUNTED'); // Check if token is in local storage

      if (localStorage.jwtToken) {
        // Set token to header for requests
        Object(_helpers_setAuthToken__WEBPACK_IMPORTED_MODULE_4__["default"])(localStorage.jwtDecode); // Decode the token for user info

        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(localStorage.jwtToken); // Set user

        this.props.setCurrentUser(decoded);
      } else {
        // User should not be here, login should render.
        this.setState({
          isLoggedIn: false
        });
      }
    } // Check if user clicked logout

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log('UPDATED'); // Check for login or logout event

      if (this.props.auth.isAuth !== prevProps.auth.isAuth) {
        // Change loggedin state
        if (this.props.auth.isAuth) {
          this.logInOut();
        } else {
          this.logInOut();
        } // Check for devtool hack


        if (lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default()(this.props.auth.user)) {
          // eslint-disable-next-line no-console
          console.log('Dont do that!!!!');
          this.logInOut();
        }
      } // Check for devtool hack


      if (this.state.isLoggedIn && !this.props.auth.isAuth) {
        if (lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default()(this.props.auth.user)) {
          // eslint-disable-next-line no-console
          console.log('Nope !!!!');
          this.logInOut();
        }
      } // Check for devtool hack


      if (this.state.isLoggedIn && this.props.auth.isAuth) {
        if (lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default()(this.props.auth.user)) {
          // eslint-disable-next-line no-console
          console.log('Really !!!!');
          this.logInOut();
        }
      } // Check token times
      //! Todo: causes loop
      // if (localStorage.jwtToken) {
      //   const token = jwtDecode(localStorage.jwtToken);
      //   const currentTime = Date.now() / 1000;
      //   const expireTime = token.exp;
      //   if (currentTime > expireTime) {
      //     console.log('Time expired');
      //     this.logInOut();
      //   }
      // }

    } // Switch state for rendering

  }, {
    key: "logInOut",
    value: function logInOut() {
      this.setState(function (prevState) {
        return {
          isLoggedIn: !prevState.isLoggedIn
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isLoggedIn = this.state.isLoggedIn;

      if (isLoggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dashboard-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_Controller__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard__login__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setCurrentUser: _reduxState_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["setCurrentUser"]
})(Dashboard));

/***/ }),

/***/ "./reduxState/actions/authActions.js":
/*!*******************************************!*\
  !*** ./reduxState/actions/authActions.js ***!
  \*******************************************/
/*! exports provided: setCurrentUser, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./reduxState/actions/types.js");
/* harmony import */ var _helpers_setAuthToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/setAuthToken */ "./helpers/setAuthToken.js");



 // Set the current user data

var setCurrentUser = function setCurrentUser(tokenData) {
  // Send data to the store
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["default"].SET_CURRENT_USER,
    payload: tokenData
  };
}; // Login in user and store token

var login = function login(userData) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/login', userData).then(function (res) {
      // Save token to localStorage
      var token = res.data.token;
      localStorage.setItem('jwtToken', token); // Set token to auth header

      Object(_helpers_setAuthToken__WEBPACK_IMPORTED_MODULE_3__["default"])(token); // Decode jwt for user data

      var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token); // Set user data

      dispatch(setCurrentUser(decoded));
    }).catch(function (err) {
      return (// Send data to the store
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_2__["default"].GET_ERRORS,
          payload: err.response.data
        })
      );
    });
  };
}; // Log out the user

var logout = function logout() {
  return function (dispatch) {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken'); // Remove auth header from requests

    Object(_helpers_setAuthToken__WEBPACK_IMPORTED_MODULE_3__["default"])(false); // Set current user to {}

    dispatch(setCurrentUser({}));
  };
};

/***/ }),

/***/ "./reduxState/actions/homePageActions.js":
/*!***********************************************!*\
  !*** ./reduxState/actions/homePageActions.js ***!
  \***********************************************/
/*! exports provided: getProfileData, getProjectData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileData", function() { return getProfileData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectData", function() { return getProjectData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./reduxState/actions/types.js");

 // Get project data

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
          error: err
        }
      });
    });
  };
}; // Get project data

var getProjectData = function getProjectData() {
  return function (dispatch) {
    // Fetch project data
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/project/all').then(function (res) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PROJECTS,
        payload: res.data
      });
    }).catch(function (err) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ERRORS,
        payload: {
          error: err
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
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  GET_PROFILE: 'GET_PROFILE',
  GET_PROJECTS: 'GET_PROJECTS',
  SET_PROFILE: 'SET_PROFILE'
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./scss/dashboard/dashboard-controller.scss":
/*!**************************************************!*\
  !*** ./scss/dashboard/dashboard-controller.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/dashboard/dashboard-profile.scss":
/*!***********************************************!*\
  !*** ./scss/dashboard/dashboard-profile.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/dashboard/dashboard-projects.scss":
/*!************************************************!*\
  !*** ./scss/dashboard/dashboard-projects.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/dashboard/dashboard-skills-card.scss":
/*!***************************************************!*\
  !*** ./scss/dashboard/dashboard-skills-card.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/dashboard/dashboard.scss":
/*!***************************************!*\
  !*** ./scss/dashboard/dashboard.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/login.scss":
/*!*************************!*\
  !*** ./scss/login.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/dashboard.js */"./pages/dashboard.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "lodash.isempty":
/*!*********************************!*\
  !*** external "lodash.isempty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.isempty");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map