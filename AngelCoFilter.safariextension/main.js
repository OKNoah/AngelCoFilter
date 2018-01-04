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
/***/ (function(module, exports) {

// import { autobind } from 'core-decorators'
let filter = undefined;
const defaultProps = {
  filters: ['blockchain']
};
let AngelCoFilter = class AngelCoFilter {
  constructor(props = defaultProps) {
    this.props = props;
  }

  run() {
    setInterval(() => {
      this.filter();
    }, 1000);
  }

  filter() {
    let jobs = [];
    jobs = document.querySelectorAll('.job_listings.browse_startups_table_row');
    this.props.filters.map(filter => {
      [...jobs].map(job => {
        if (job.innerText.includes(filter)) {
          job.style.backgroundColor = 'red';
          const className = job.className.replace(' ', '.');
          safari.extension.setContentBlocker([{
            "trigger": {
              "url-filter": "angel.co"
            },
            "action": {
              "selector": className,
              "type": "css-display-none"
            }
          }]);
        }
      });
    });
  }

};

function initialize(...mess) {
  console.log('mess', mess); // const props = {
  //   ...defaultProps,
  //   ...JSON.parse(mess[0].message)
  // }
  // filter = new AngelCoFilter(props)
  // filter.eventHandler()
}

window.onload = () => {
  filter = new AngelCoFilter(defaultProps);
  filter.run();
};

safari.self.addEventListener("message", initialize, false);

/***/ })
/******/ ]);