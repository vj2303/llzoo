"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/service-details/page",{

/***/ "(app-pages-browser)/./src/app/service-details/BottomSheet.jsx":
/*!*************************************************!*\
  !*** ./src/app/service-details/BottomSheet.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst BottomSheet = (param)=>{\n    let { isOpen, onClose, customizations, name } = param;\n    var _customizations_, _customizations_1, _customizations__options, _customizations_2;\n    if (!isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex justify-center items-end bg-black bg-opacity-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white w-full max-w-lg rounded-t-2xl p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg font-bold\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onClose,\n                            className: \"text-gray-500\",\n                            children: \"✕\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-semibold\",\n                            children: customizations === null || customizations === void 0 ? void 0 : (_customizations_ = customizations[0]) === null || _customizations_ === void 0 ? void 0 : _customizations_.name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-500 mb-2\",\n                            children: customizations === null || customizations === void 0 ? void 0 : (_customizations_1 = customizations[0]) === null || _customizations_1 === void 0 ? void 0 : _customizations_1.instruction\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, undefined),\n                        customizations === null || customizations === void 0 ? void 0 : (_customizations_2 = customizations[0]) === null || _customizations_2 === void 0 ? void 0 : (_customizations__options = _customizations_2.options) === null || _customizations__options === void 0 ? void 0 : _customizations__options.map((ele)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between border rounded-md px-2 py-2 mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: ele.name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"From ₹ \",\n                                            ele.rate\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"product\",\n                                        className: \"form-radio\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 22\n                            }, undefined);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-500 text-white w-full py-2 rounded-md font-semibold\",\n                    children: \"Add Service\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\BottomSheet.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BottomSheet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BottomSheet);\nvar _c;\n$RefreshReg$(_c, \"BottomSheet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VydmljZS1kZXRhaWxzL0JvdHRvbVNoZWV0LmpzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUNpQztBQUVqQyxNQUFNQyxjQUFjO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLGNBQWMsRUFBRUMsSUFBSSxFQUFFO1FBY3JCRCxrQkFDWUEsbUJBRXpDQSwwQkFBQUE7SUFoQlYsSUFBSSxDQUFDRixRQUFRLE9BQU87SUFFcEIscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVOzs7Ozs7c0NBQ2QsOERBQUNFOzRCQUFPQyxTQUFTUDs0QkFBU0ksV0FBVTtzQ0FBZ0I7Ozs7Ozs7Ozs7Ozs4QkFLdEQsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0k7NEJBQUdKLFdBQVU7c0NBQWlCSCwyQkFBQUEsc0NBQUFBLG1CQUFBQSxjQUFnQixDQUFDLEVBQUUsY0FBbkJBLHVDQUFBQSxpQkFBcUJDLElBQUk7Ozs7OztzQ0FDeEQsOERBQUNPOzRCQUFFTCxXQUFVO3NDQUE4QkgsMkJBQUFBLHNDQUFBQSxvQkFBQUEsY0FBZ0IsQ0FBQyxFQUFFLGNBQW5CQSx3Q0FBQUEsa0JBQXFCUyxXQUFXOzs7Ozs7d0JBRXpFVCwyQkFBQUEsc0NBQUFBLG9CQUFBQSxjQUFnQixDQUFDLEVBQUUsY0FBbkJBLHlDQUFBQSwyQkFBQUEsa0JBQXFCVSxPQUFPLGNBQTVCViwrQ0FBQUEseUJBQThCVyxHQUFHLENBQUMsQ0FBQ0M7NEJBQ2pDLHFCQUFPLDhEQUFDVjtnQ0FBSUMsV0FBVTs7a0RBQ3BCLDhEQUFDVTtrREFBTUQsSUFBSVgsSUFBSTs7Ozs7O2tEQUNmLDhEQUFDWTs7NENBQUs7NENBQVFELElBQUlFLElBQUk7Ozs7Ozs7a0RBQ3RCLDhEQUFDQzt3Q0FBTUMsTUFBSzt3Q0FBUWYsTUFBSzt3Q0FBVUUsV0FBVTs7Ozs7Ozs7Ozs7O3dCQUVqRDs7Ozs7Ozs4QkFRSiw4REFBQ0U7b0JBQU9GLFdBQVU7OEJBQThEOzs7Ozs7Ozs7Ozs7Ozs7OztBQU14RjtLQXJDTU47QUF1Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zZXJ2aWNlLWRldGFpbHMvQm90dG9tU2hlZXQuanN4PzkyYWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBCb3R0b21TaGVldCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgY3VzdG9taXphdGlvbnMsIG5hbWUgfSkgPT4ge1xuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1lbmQgYmctYmxhY2sgYmctb3BhY2l0eS01MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LWZ1bGwgbWF4LXctbGcgcm91bmRlZC10LTJ4bCBwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPnt9PC9oMj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICYjMTAwMDU7XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBtYi0yXCI+QmFzaWM8L3A+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPntjdXN0b21pemF0aW9ucz8uWzBdPy5uYW1lfTwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLTJcIj57Y3VzdG9taXphdGlvbnM/LlswXT8uaW5zdHJ1Y3Rpb259PC9wPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGN1c3RvbWl6YXRpb25zPy5bMF0/Lm9wdGlvbnM/Lm1hcCgoZWxlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXIgcm91bmRlZC1tZCBweC0yIHB5LTIgbWItMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPntlbGUubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+RnJvbSDigrkge2VsZS5yYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByb2R1Y3RcIiBjbGFzc05hbWU9XCJmb3JtLXJhZGlvXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyIHJvdW5kZWQtbWQgcHgtMiBweS0yXCI+XG4gICAgICAgICAgICA8c3Bhbj5XaXRob3V0IEFtbW9uaWE8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5Gcm9tIOKCuSAxLDUwMDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJvZHVjdFwiIGNsYXNzTmFtZT1cImZvcm0tcmFkaW9cIiAvPlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSB3LWZ1bGwgcHktMiByb3VuZGVkLW1kIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICBBZGQgU2VydmljZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm90dG9tU2hlZXQ7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCb3R0b21TaGVldCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJjdXN0b21pemF0aW9ucyIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyIsInAiLCJpbnN0cnVjdGlvbiIsIm9wdGlvbnMiLCJtYXAiLCJlbGUiLCJzcGFuIiwicmF0ZSIsImlucHV0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/service-details/BottomSheet.jsx\n"));

/***/ })

});