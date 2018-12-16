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

/***/ "./components/DashboardAbout.js":
/*!**************************************!*\
  !*** ./components/DashboardAbout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_dashboard_about_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/dashboard-about.scss */ "./scss/dashboard-about.scss");
/* harmony import */ var _scss_dashboard_about_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_dashboard_about_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/DashboardAbout.js";

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



var DashboardAbout =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardAbout, _Component);

  function DashboardAbout() {
    _classCallCheck(this, DashboardAbout);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardAbout).apply(this, arguments));
  }

  _createClass(DashboardAbout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Current about info"));
    }
  }]);

  return DashboardAbout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DashboardAbout);

/***/ }),

/***/ "./components/DashboardController.js":
/*!*******************************************!*\
  !*** ./components/DashboardController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxState_actions_homePageActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reduxState/actions/homePageActions */ "./reduxState/actions/homePageActions.js");
/* harmony import */ var _LogoutButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LogoutButton */ "./components/LogoutButton.js");
/* harmony import */ var _DashboardAbout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashboardAbout */ "./components/DashboardAbout.js");
/* harmony import */ var _DashboardSkills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashboardSkills */ "./components/DashboardSkills.js");
/* harmony import */ var _DashboardProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DashboardProjects */ "./components/DashboardProjects.js");
/* harmony import */ var _scss_dashboard_controller_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/dashboard-controller.scss */ "./scss/dashboard-controller.scss");
/* harmony import */ var _scss_dashboard_controller_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_dashboard_controller_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/DashboardController.js";

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



var DashboardController =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardController, _Component);

  function DashboardController(props) {
    var _this;

    _classCallCheck(this, DashboardController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashboardController).call(this, props));
    _this.handleEvent = _this.handleEvent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      sectionToRender: 'skills'
    };
    return _this;
  } // Fetch data from server


  _createClass(DashboardController, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProfileData();
      this.props.getProjectData();
    } // Determine which section to render

  }, {
    key: "handleEvent",
    value: function handleEvent(section) {
      this.setState({
        sectionToRender: section
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var sectionToRender = this.state.sectionToRender;
      var dashBoardSection;

      switch (sectionToRender) {
        case 'skills':
          dashBoardSection = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardSkills__WEBPACK_IMPORTED_MODULE_5__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          });
          break;

        case 'about':
          dashBoardSection = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardAbout__WEBPACK_IMPORTED_MODULE_4__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          });
          break;

        case 'projects':
          dashBoardSection = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardProjects__WEBPACK_IMPORTED_MODULE_6__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          });
          break;

        default:
          dashBoardSection = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardSkills__WEBPACK_IMPORTED_MODULE_5__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "dashboard__nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav__buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.handleEvent('skills');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Skills"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.handleEvent('about');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.handleEvent('projects');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogoutButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "dashboard__section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, dashBoardSection));
    }
  }]);

  return DashboardController;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors,
    profileData: state.homePageData.profileData,
    projectData: state.homePageData.projectData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getProfileData: _reduxState_actions_homePageActions__WEBPACK_IMPORTED_MODULE_2__["getProfileData"],
  getProjectData: _reduxState_actions_homePageActions__WEBPACK_IMPORTED_MODULE_2__["getProjectData"]
})(DashboardController));

/***/ }),

/***/ "./components/DashboardProjects.js":
/*!*****************************************!*\
  !*** ./components/DashboardProjects.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_dashboard_projects_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/dashboard-projects.scss */ "./scss/dashboard-projects.scss");
/* harmony import */ var _scss_dashboard_projects_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_dashboard_projects_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/DashboardProjects.js";

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



var DashboardProjects =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardProjects, _Component);

  function DashboardProjects() {
    _classCallCheck(this, DashboardProjects);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardProjects).apply(this, arguments));
  }

  _createClass(DashboardProjects, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Current Projects"));
    }
  }]);

  return DashboardProjects;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DashboardProjects);

/***/ }),

/***/ "./components/DashboardSkills.js":
/*!***************************************!*\
  !*** ./components/DashboardSkills.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_dashboard_skills_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/dashboard-skills.scss */ "./scss/dashboard-skills.scss");
/* harmony import */ var _scss_dashboard_skills_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_dashboard_skills_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/DashboardSkills.js";

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



var DashboardSkills =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardSkills, _Component);

  function DashboardSkills() {
    _classCallCheck(this, DashboardSkills);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardSkills).apply(this, arguments));
  }

  _createClass(DashboardSkills, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Current Skills"));
    }
  }]);

  return DashboardSkills;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DashboardSkills);

/***/ }),

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

/***/ "./components/LogoutButton.js":
/*!************************************!*\
  !*** ./components/LogoutButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxState_actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reduxState/actions/authActions */ "./reduxState/actions/authActions.js");
/* harmony import */ var _scss_buttons_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/buttons.scss */ "./scss/buttons.scss");
/* harmony import */ var _scss_buttons_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_buttons_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/LogoutButton.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var LogoutButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LogoutButton, _React$Component);

  function LogoutButton() {
    _classCallCheck(this, LogoutButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(LogoutButton).apply(this, arguments));
  }

  _createClass(LogoutButton, [{
    key: "handleClick",
    value: function handleClick() {
      // Use redux action
      this.props.logout();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.handleClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Logout");
    }
  }]);

  return LogoutButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  logout: _reduxState_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["logout"]
})(LogoutButton));

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
/* harmony import */ var _components_DashboardController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DashboardController */ "./components/DashboardController.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Login */ "./components/Login.js");
/* harmony import */ var _scss_dashboard_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/dashboard.scss */ "./scss/dashboard.scss");
/* harmony import */ var _scss_dashboard_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_dashboard_scss__WEBPACK_IMPORTED_MODULE_8__);
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
      // Check if token is in local storage
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
      // Check for login or logout event
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
          console.log('Nope !!!!');
          this.logInOut();
        }
      } // Check for devtool hack


      if (this.state.isLoggedIn && this.props.auth.isAuth) {
        if (lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default()(this.props.auth.user)) {
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
            lineNumber: 95
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DashboardController__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard__login__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
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
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["default"].GET_ERRORS,
        payload: err.response.data
      });
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
var actions = {
  GET_ERRORS: 'GET_ERRORS',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  GET_PROFILE: 'GET_PROFILE',
  GET_PROJECTS: 'GET_PROJECTS'
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./scss/buttons.scss":
/*!***************************!*\
  !*** ./scss/buttons.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/dashboard-about.scss":
/*!***********************************!*\
  !*** ./scss/dashboard-about.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/dashboard-controller.scss":
/*!****************************************!*\
  !*** ./scss/dashboard-controller.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/dashboard-projects.scss":
/*!**************************************!*\
  !*** ./scss/dashboard-projects.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/dashboard-skills.scss":
/*!************************************!*\
  !*** ./scss/dashboard-skills.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/dashboard.scss":
/*!*****************************!*\
  !*** ./scss/dashboard.scss ***!
  \*****************************/
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