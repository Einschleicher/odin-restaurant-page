/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/init.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n(0,_init__WEBPACK_IMPORTED_MODULE_0__.initPage)();\n(0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initPage: () => (/* binding */ initPage)\n/* harmony export */ });\nfunction initPage() {\n\n    let content = document.querySelector(\"#content\");\n\n    content.innerHTML = \n\n    `\n    <div id=\"header\">\n    <ul>\n        <li><button>HOME</button></li>\n        <li><button>MENU</button></li>\n        <li><button>CONTACT</button></li>\n    </ul>\n    </div>\n    <div id=\"page\">\n    <img src=\"coffee.jpg\" alt=\"Coffee beans lying on a world map\">\n    <h1>Welcome to BeanJoy Café</h1>\n    <p>\n        Indulge in a Symphony of Aromatic Bliss\n    </p>\n    <p>\n        Step into a haven where every gulp narrates a tale and every instant is cherished. BeanJoy Café warmly invites you to encounter the craftsmanship of coffee like never before. Tucked away in the heart of Sunnyville, our charming coffee corner is more than just a spot to snag your daily caffeine fix – it's an oasis for all java devotees.\n    </p>\n    <h2>Our Roast, Your Odyssey</h2>\n    <p>\n        At BeanJoy Café, we take pride in metamorphosing each coffee bean into a work of artistry. Our expert baristas compose every mug with accuracy and zeal, ensuring that every slurp whisks you away on an odyssey of lush textures and captivating bouquets. From creamy macchiatos to bold Americanos, we proffer a medley of choices to cater to every palate.\n    </p>\n    <h2>A Cosy Hideaway</h2>\n    <p>\n        Our snug coffee bar radiates a congenial ambiance, beckoning you to unwind, bond, and shape moments. Whether you're in search of a tranquil nook to delve into literature, engrossed in heartwarming dialogues with pals, or simply seeking respite from the commotion of the outer world, BeanJoy Café provides the quintessential backdrop.\n    </p>\n    <h2>Community and Kinship</h2>\n    <p>\n        Beyond exquisite coffee, BeanJoy Café fosters community. We believe that coffee holds the power to unite. That's why we host periodic soirées, workshops, and tastings, cultivating an environment where coffee aficionados can converge to learn, exchange, and revel in their mutual ardor.\n    </p>\n    <h2>Sustainability at Heart</h2>\n    <p>\n        Our dedication transcends the cup. We conscientiously source our beans, championing principled farming practices that guarantee a positive influence on both societies and the ecosystem. Join us as we tread towards an eco-friendly future, one mug at a time.\n    </p>\n    <h2>Pay Us a Visit</h2>\n    <p>\n        Embark on your escapade to BeanJoy Café. We anticipate the pleasure of serving you not just coffee, but an encounter that lingers well after your final sip. Allow the redolence to escort you, let the savors kindle you, and let our coffee bar evolve into your sanctuary.\n    </p>\n    <p class=\"address\">\n        123 Java Lane, Sunnyville\n    </p>\n    <p class=\"hours\">\n        Open Mon-Sat: 7 AM - 6 PM\n    </p>\n    <p>\n        <em>Your Coffee Excursion Embarks Here</em>\n    </p>\n    `;\n\n    console.log(\"initialization done\");\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/init.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n\n    let content = document.querySelector(\"#content\");\n\n    content.innerHTML = \n\n    `\n    <div id=\"header\">\n    <ul>\n        <li><button>HOME</button></li>\n        <li><button>MENU</button></li>\n        <li><button>CONTACT</button></li>\n    </ul>\n    </div>\n    <div id=\"menu\">\n    <h1>Menu</h1>\n    <table>\n        <tr>\n            <th>Item</th>\n            <th>Description</th>\n            <th>Price</th>\n        </tr>\n        <tr>\n            <td>Classic Espresso</td>\n            <td>Strong and rich espresso shot</td>\n            <td>$2.50</td>\n        </tr>\n        <tr>\n            <td>Cappuccino</td>\n            <td>Espresso with equal parts of steamed milk and milk foam</td>\n            <td>$3.00</td>\n        </tr>\n        <tr>\n            <td>Latte</td>\n            <td>Espresso with a generous amount of steamed milk</td>\n            <td>$3.50</td>\n        </tr>\n        <tr>\n            <td>Mocha</td>\n            <td>Espresso with chocolate syrup and steamed milk</td>\n            <td>$4.00</td>\n        </tr>\n        <tr>\n            <td>Chai Latte</td>\n            <td>Spiced tea concentrate with steamed milk</td>\n            <td>$3.50</td>\n        </tr>\n        <tr>\n            <td>Iced Coffee</td>\n            <td>Chilled coffee served over ice</td>\n            <td>$2.50</td>\n        </tr>\n        <tr>\n            <td>Hot Chocolate</td>\n            <td>Rich and creamy chocolatey delight</td>\n            <td>$3.00</td>\n        </tr>\n    </table>\n    </div>\n    `;\n    console.log(\"loading menu done\");\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;