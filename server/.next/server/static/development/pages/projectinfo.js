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

/***/ "./components/projectDetails/ImageSlider.js":
/*!**************************************************!*\
  !*** ./components/projectDetails/ImageSlider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageSlider; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cloudinary-react */ "cloudinary-react");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/projectDetails/ImageSlider.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var ImageSlider =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageSlider, _Component);

  function ImageSlider(props) {
    var _this;

    _classCallCheck(this, ImageSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageSlider).call(this, props));
    _this.state = {
      mainImageId: '',
      mainImageIndex: 0,
      allIds: ''
    };
    _this.setAllImageIds = _this.setAllImageIds.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateMainImageId = _this.updateMainImageId.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.moveBack = _this.moveBack.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.moveForward = _this.moveForward.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ImageSlider, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var imageIds, id, displayIds;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                imageIds = this.props.imageIds;

                if (imageIds.length === 0) {
                  console.log('No images');
                }

                if (imageIds.length === 1) {
                  id = imageIds[0];
                  this.updateMainImageId(id);
                }

                if (!(imageIds.length > 1)) {
                  _context.next = 9;
                  break;
                }

                displayIds = imageIds.slice(1); // Set ids in state

                _context.next = 7;
                return this.setAllImageIds(displayIds);

              case 7:
                _context.next = 9;
                return this.updateMainImageId(0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "setAllImageIds",
    value: function setAllImageIds(idArray) {
      this.setState({
        allIds: idArray
      });
    }
  }, {
    key: "updateMainImageId",
    value: function updateMainImageId(index) {
      // Get id from array
      var id = this.state.allIds[index]; // Set id and index

      this.setState({
        mainImageId: id
      });
      this.setState({
        mainImageIndex: index
      });
    }
  }, {
    key: "moveBack",
    value: function moveBack() {
      console.log('back clicked');
    }
  }, {
    key: "moveForward",
    value: function moveForward() {
      console.log('forward clicked');
    }
  }, {
    key: "render",
    value: function render() {
      var mainImageId = this.state.mainImageId;
      var moveIcon = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: "slider__image__icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        className: "slider__image__icon__primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        className: "slider__image__icon__secondary",
        d: "M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })));
      if (mainImageId === '') return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Loading ...");
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "project-page__slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "slider__image__controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        value: "back",
        onClick: this.moveBack,
        className: "slider__image__control slider__image__control__left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, moveIcon), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        value: "next",
        onClick: this.moveForward,
        className: "slider__image__control slider__image__control__right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, moveIcon)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "slider__images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        className: "slider__image",
        cloudName: "jwalkercreations-com",
        publicId: mainImageId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_2__["Transformation"], {
        height: "740",
        weight: "975",
        crop: "limit",
        fetchFormat: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }))));
    }
  }]);

  return ImageSlider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./pages/projectinfo.js":
/*!******************************!*\
  !*** ./pages/projectinfo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxState_actions_homePageActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reduxState/actions/homePageActions */ "./reduxState/actions/homePageActions.js");
/* harmony import */ var _components_projectDetails_ImageSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/projectDetails/ImageSlider */ "./components/projectDetails/ImageSlider.js");
/* harmony import */ var _scss_projectinfo_projectinfo_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/projectinfo/projectinfo.scss */ "./scss/projectinfo/projectinfo.scss");
/* harmony import */ var _scss_projectinfo_projectinfo_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_projectinfo_projectinfo_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/pages/projectinfo.js";

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

 // Style



var projectinfo =
/*#__PURE__*/
function (_Component) {
  _inherits(projectinfo, _Component);

  function projectinfo(props) {
    var _this;

    _classCallCheck(this, projectinfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(projectinfo).call(this, props));
    _this.state = {
      selectedProject: 0
    };
    _this.updateSelectedProject = _this.updateSelectedProject.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(projectinfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Get all projects data for future features
      this.props.getProjectData(); // Get url

      var url = window.location.href;
      var query = url.split('?')[1];
      var selectedProject = query.split('=')[1]; // Update selectedProject

      this.updateSelectedProject(selectedProject);
    } // Update state with this project name so we can determine which data to display.

  }, {
    key: "updateSelectedProject",
    value: function updateSelectedProject(projectName) {
      this.setState({
        selectedProject: projectName
      });
    }
  }, {
    key: "render",
    value: function render() {
      var techIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: "tech__icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "icon__primary",
        d: "M2.6 6.09l9-4a1 1 0 0 1 .8 0l9 4a1 1 0 0 1 0 1.82l-9 4a1 1 0 0 1-.8 0l-9-4a1 1 0 0 1 0-1.82z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "icon__secondary",
        d: "M3.91 10.5l7.68 3.41a1 1 0 0 0 .82 0l7.68-3.41 1.32.59a1 1 0 0 1 0 1.82l-9 4a1 1 0 0 1-.82 0l-9-4a1 1 0 0 1 0-1.82l1.32-.59zm0 5l7.68 3.41a1 1 0 0 0 .82 0l7.68-3.41 1.32.59a1 1 0 0 1 0 1.82l-9 4a1 1 0 0 1-.82 0l-9-4a1 1 0 0 1 0-1.82l1.32-.59z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })));
      var projectData = this.props.projectData;
      var selectedProject = this.state.selectedProject;
      if (projectData === null) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "project-page__loading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Loading .... ");
      var _projectData$selected = projectData[selectedProject],
          title = _projectData$selected.title,
          type = _projectData$selected.type,
          description = _projectData$selected.description,
          tech = _projectData$selected.tech,
          link = _projectData$selected.link,
          imageIds = _projectData$selected.imageIds;
      var frontend = tech.frontend,
          backend = tech.backend,
          tools = tech.tools;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "project-page__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projectDetails_ImageSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
        imageIds: imageIds,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "project-page__details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "details__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "details__type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "details__description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "details__tech",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, techIcon, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "tech__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Tech"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "tech__list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, frontend.map(function (techName) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: techName,
          className: "tech__list__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, techName);
      }), backend.map(function (techName) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: techName,
          className: "tech__list__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, techName);
      }), tools.map(function (techName) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: techName,
          className: "tech__list__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, techName);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: link,
        className: "details__link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Live Site")));
    }
  }]);

  return projectinfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    projectData: state.homePageData.projectData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getProjectData: _reduxState_actions_homePageActions__WEBPACK_IMPORTED_MODULE_2__["getProjectData"]
})(projectinfo));

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

/***/ "./scss/projectinfo/projectinfo.scss":
/*!*******************************************!*\
  !*** ./scss/projectinfo/projectinfo.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/projectinfo.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/projectinfo.js */"./pages/projectinfo.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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
//# sourceMappingURL=projectinfo.js.map