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

/***/ "./components/projectDetails/ImageModal.js":
/*!*************************************************!*\
  !*** ./components/projectDetails/ImageModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cloudinary-react */ "cloudinary-react");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/projectDetails/ImageModal.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var ImageModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageModal, _Component);

  function ImageModal(props) {
    var _this;

    _classCallCheck(this, ImageModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageModal).call(this, props));
    _this.state = {
      modalClass: 'modal'
    };
    _this.determineClass = _this.determineClass.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ImageModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.determineClass();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var showModal = this.props.showModal;

      if (showModal !== prevProps.showModal) {
        this.determineClass();
      }
    }
  }, {
    key: "determineClass",
    value: function determineClass() {
      var showModal = this.props.showModal; // Check showModal state

      if (showModal) {
        // Set modal div class to show
        this.setState({
          modalClass: 'modal modal--show'
        });
      } else {
        // Set modal div class to hide
        this.setState({
          modalClass: 'modal'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageId = _this$props.imageId,
          toggleModal = _this$props.toggleModal;
      var modalClass = this.state.modalClass;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(modalClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal__background__blur",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "modal__close",
        onClick: toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        className: "modal__image",
        cloudName: "jwalkercreations-com",
        publicId: imageId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_1__["Transformation"], {
        height: "740",
        width: "975",
        crop: "limit",
        fetchFormat: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })));
    }
  }]);

  return ImageModal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/projectDetails/ImageSlider.js":
/*!**************************************************!*\
  !*** ./components/projectDetails/ImageSlider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cloudinary-react */ "cloudinary-react");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageModal */ "./components/projectDetails/ImageModal.js");
var _jsxFileName = "/Users/jordanwalker/Documents/Github/Portfolio-Website-MERN/server/components/projectDetails/ImageSlider.js";

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



var ImageSlider =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageSlider, _Component);

  function ImageSlider(props) {
    var _this;

    _classCallCheck(this, ImageSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageSlider).call(this, props));
    _this.state = {
      mainImageIndex: 0,
      allIds: '',
      showModal: false
    };
    _this.setAllImageIds = _this.setAllImageIds.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.moveBack = _this.moveBack.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.moveForward = _this.moveForward.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ImageSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var imageIds = this.props.imageIds; // TODO: handle this case

      if (imageIds.length === 0) {
        console.log('No images');
      } // If one than one image


      if (imageIds.length > 1) {
        // Remove the mockup image for the homepage
        var displayIds = imageIds.slice(1); // Set ids in state

        this.setAllImageIds(displayIds);
      }
    } // Add images (cloudinary ids) to state

  }, {
    key: "setAllImageIds",
    value: function setAllImageIds(idArray) {
      this.setState({
        allIds: idArray
      });
    } // Click event for modal

  }, {
    key: "toggleModal",
    value: function toggleModal() {
      this.setState(function (state) {
        return {
          showModal: !state.showModal
        };
      });
    } // Button method for left arrow

  }, {
    key: "moveBack",
    value: function moveBack() {
      var _this$state = this.state,
          mainImageIndex = _this$state.mainImageIndex,
          allIds = _this$state.allIds; // If not at the start

      if (mainImageIndex !== 0) {
        // Subtract one
        var nextIndex = mainImageIndex - 1;
        this.setState({
          mainImageIndex: nextIndex
        });
      } else {
        // Set to end of the array
        var length = allIds.length - 1;
        this.setState({
          mainImageIndex: length
        });
      }
    } // Button method for right arrow

  }, {
    key: "moveForward",
    value: function moveForward() {
      var _this$state2 = this.state,
          mainImageIndex = _this$state2.mainImageIndex,
          allIds = _this$state2.allIds; // If not at the end

      if (mainImageIndex !== allIds.length - 1) {
        // Add one
        var nextIndex = mainImageIndex + 1;
        this.setState({
          mainImageIndex: nextIndex
        });
      } else {
        // Set back to start
        this.setState({
          mainImageIndex: 0
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          allIds = _this$state3.allIds,
          mainImageIndex = _this$state3.mainImageIndex,
          showModal = _this$state3.showModal;
      var moveIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: "slider__image__icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        className: "slider__image__icon__primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        className: "slider__image__icon__secondary",
        d: "M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })));
      if (allIds === '') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Loading ...");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "project-page__slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        imageId: allIds[mainImageIndex],
        showModal: showModal,
        toggleModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider__image__controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        value: "back",
        onClick: this.moveBack,
        className: "slider__image__control slider__image__control__left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, moveIcon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        value: "next",
        onClick: this.moveForward,
        className: "slider__image__control slider__image__control__right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, moveIcon)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider__images",
        style: {
          transform: "translateX(-".concat(mainImageIndex * (100 / allIds.length), "%)")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, allIds.map(function (imageId) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          key: imageId,
          className: "slider__image",
          cloudName: "jwalkercreations-com",
          publicId: imageId,
          onClick: _this2.toggleModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_1__["Transformation"], {
          height: "740",
          width: "975",
          crop: "limit",
          fetchFormat: "auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }));
      }))));
    }
  }]);

  return ImageSlider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



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