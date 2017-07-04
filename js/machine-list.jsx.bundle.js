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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var MachinePannel = function (_React$Component) {
  _inherits(MachinePannel, _React$Component);

  function MachinePannel() {
    _classCallCheck(this, MachinePannel);

    return _possibleConstructorReturn(this, (MachinePannel.__proto__ || Object.getPrototypeOf(MachinePannel)).apply(this, arguments));
  }

  _createClass(MachinePannel, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "panel-footer" },
        React.createElement(
          "a",
          { className: "btn btn-default pull-right", href: "https://fabmanager.xinfab.com/#!/machines/" + this.props.machineId + "/reserve" },
          "Book"
        ),
        React.createElement("div", { className: "clearfix" })
      );
    }
  }]);

  return MachinePannel;
}(React.Component);

var MachineItem = function (_React$Component2) {
  _inherits(MachineItem, _React$Component2);

  function MachineItem() {
    _classCallCheck(this, MachineItem);

    return _possibleConstructorReturn(this, (MachineItem.__proto__ || Object.getPrototypeOf(MachineItem)).apply(this, arguments));
  }

  _createClass(MachineItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "item panel panel-default" },
        React.createElement(
          "div",
          { className: "panel-heading" },
          React.createElement(
            "h3",
            { "class": "panel-title" },
            this.props.title
          )
        ),
        React.createElement(
          "div",
          { className: "panel-body" },
          this.props.img ? React.createElement("img", { className: "img-responsive", src: this.props.img }) : React.createElement("img", { className: "img-responsive", src: "holder.js/400x" + getRandomInt(2, 4) * 100 + "?theme=gray&text=\uF03E&font=FontAwesome&size=100" }),
          React.createElement(
            "p",
            { className: "content" },
            this.props.content
          )
        ),
        React.createElement(MachinePannel, { machineId: this.props.machineId })
      );
    }
  }]);

  return MachineItem;
}(React.Component);

var MachineList = function (_React$Component3) {
  _inherits(MachineList, _React$Component3);

  function MachineList(props) {
    _classCallCheck(this, MachineList);

    var _this3 = _possibleConstructorReturn(this, (MachineList.__proto__ || Object.getPrototypeOf(MachineList)).call(this, props));

    _this3.state = {};
    return _this3;
  }

  _createClass(MachineList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // init Masonry
      var $grid = $('.machine-list').masonry({
        itemSelector: '.item'
      });

      // layout Masonry after each image loads
      $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
      });

      Holder.run({
        images: ".machine-list .item img"
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this4 = this;

      fetch(this.props.api).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        _this4.setState({
          machines: responseJson
        });
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.machines) {
        return React.createElement(
          "div",
          null,
          "loading..."
        );
      }

      if (this.state.machines.length === 0) {
        return React.createElement(
          "div",
          null,
          "no machines"
        );
      }

      return React.createElement(
        "div",
        { className: "machine-list" },
        this.state.machines.map(function (m) {
          return React.createElement(MachineItem, { machineId: m.id, title: m.name, img: m.machine_image ? "https://fabmanager.xinfab.com/" + m.machine_image : null, content: m.spec });
        })
      );
    }
  }]);

  return MachineList;
}(React.Component);

ReactDOM.render(React.createElement(MachineList, { api: "https://fabmanager.xinfab.com/api/machines.json" }), document.getElementById("root"));

/***/ })
/******/ ]);