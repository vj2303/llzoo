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

/***/ "(app-pages-browser)/./src/app/service-details/Sidebar.jsx":
/*!*********************************************!*\
  !*** ./src/app/service-details/Sidebar.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ServiceData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceData */ \"(app-pages-browser)/./src/app/service-details/ServiceData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Sidebar = (param)=>{\n    let { onSelect } = param;\n    _s();\n    // const [services, setServices] = useState(serviceData.data.sub_categories)\n    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_ServiceData__WEBPACK_IMPORTED_MODULE_3__.serviceData);\n    const fetchServices = async ()=>{\n        try {\n            const res = await (0,axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n                method: \"post\",\n                baseURL: \"\".concat(\"https://ts1.luzo.app\", \"/api/v1\"),\n                url: \"/salon/subCategories\",\n                params: {\n                    main_category_id: 11,\n                    salon_id: 811\n                }\n            });\n            setServices(res.data.data.sub_categories);\n            console.log(res.data);\n        } catch (error) {\n            console.log(error);\n            alert(\"Could not fetch services\");\n        }\n    };\n    // const services = [\n    //   { name: 'Hair Colour', count: 6 },\n    //   { name: 'Nail Bar', count: 2 },\n    //   { name: 'Face', count: 3 },\n    //   { name: 'Treatments', count: 2 },\n    //   { name: 'Balayage', count: 2 },\n    //   { name: 'Ombre', count: 2 },\n    //   { name: 'Massage & Spa', count: 2 },\n    //   { name: 'Manicure & Pedicure', count: 2 },\n    //   { name: 'Waxing, Bleaching & Threading', count: 2 },\n    // ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchServices();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 bg-gray-100 border-r-4 border-r-gray-200\",\n        children: services === null || services === void 0 ? void 0 : services.map((service)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2 flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>onSelect(service),\n                    className: \"flex text-[12px] text-center flex-col items-center w-full rounded hover:bg-gray-200\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: \"/img/icon.webp\",\n                            alt: \"logo icon\",\n                            width: \"50\",\n                            height: \"50\",\n                            className: \"rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\Sidebar.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" text-[12px] text-center sm:text-[18px]\",\n                            children: [\n                                service.name,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sm:text-[18px] text-center\",\n                                    children: [\n                                        \"(\",\n                                        service.services.length,\n                                        \")\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\Sidebar.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 85\n                                }, undefined),\n                                \"  \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\Sidebar.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\Sidebar.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined)\n            }, service.name, false, {\n                fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\Sidebar.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\Sidebar.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"L98yIsZ6Q4dZyxLKqaJJU1W6PZA=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VydmljZS1kZXRhaWxzL1NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNLO0FBQ2E7QUFDQTtBQUU1QyxNQUFNSyxVQUFVO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMzQiw0RUFBNEU7SUFDNUUsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDQyxxREFBV0E7SUFFcEQsTUFBTUssZ0JBQWdCO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxNQUFNLE1BQU1WLGlEQUFLQSxDQUFDO2dCQUN0QlcsUUFBUTtnQkFDUkMsU0FBUyxHQUFxQyxPQUFsQ0Msc0JBQWlDLEVBQUM7Z0JBQzlDRyxLQUFLO2dCQUNMQyxRQUFRO29CQUNOQyxrQkFBa0I7b0JBQ2xCQyxVQUFVO2dCQUNaO1lBQ0Y7WUFDQVgsWUFBWUUsSUFBSVUsSUFBSSxDQUFDQSxJQUFJLENBQUNDLGNBQWM7WUFDeENDLFFBQVFDLEdBQUcsQ0FBQ2IsSUFBSVUsSUFBSTtRQUV0QixFQUFFLE9BQU9JLE9BQU87WUFDZEYsUUFBUUMsR0FBRyxDQUFDQztZQUNaQyxNQUFNO1FBQ1I7SUFDRjtJQUNBLHFCQUFxQjtJQUNyQix1Q0FBdUM7SUFDdkMsb0NBQW9DO0lBQ3BDLGdDQUFnQztJQUNoQyxzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyx5Q0FBeUM7SUFDekMsK0NBQStDO0lBQy9DLHlEQUF5RDtJQUN6RCxLQUFLO0lBRUx2QixnREFBU0EsQ0FBQztRQUNSTztJQUNGLEdBQUcsRUFBRTtJQUdMLHFCQUNFLDhEQUFDaUI7UUFBSUMsV0FBVTtrQkFDWnBCLHFCQUFBQSwrQkFBQUEsU0FBVXFCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDZCw4REFBQ0g7Z0JBQXVCQyxXQUFVOzBCQUNoQyw0RUFBQ0c7b0JBQ0NDLFNBQVMsSUFBTXpCLFNBQVN1QjtvQkFDeEJGLFdBQVU7O3NDQUVWLDhEQUFDMUIsa0RBQUtBOzRCQUFDK0IsS0FBSTs0QkFBaUJDLEtBQUk7NEJBQVlDLE9BQU07NEJBQUtDLFFBQU87NEJBQUtSLFdBQVU7Ozs7OztzQ0FFN0UsOERBQUNEOzRCQUFJQyxXQUFVOztnQ0FBMkNFLFFBQVFPLElBQUk7Z0NBQUM7OENBQUMsOERBQUNDO29DQUFLVixXQUFVOzt3Q0FBNkI7d0NBQUVFLFFBQVF0QixRQUFRLENBQUMrQixNQUFNO3dDQUFDOzs7Ozs7O2dDQUFROzs7Ozs7Ozs7Ozs7O2VBUGpKVCxRQUFRTyxJQUFJOzs7Ozs7Ozs7O0FBYTlCO0dBeERNL0I7S0FBQUE7QUEwRE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zZXJ2aWNlLWRldGFpbHMvU2lkZWJhci5qc3g/NDllYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNlcnZpY2VEYXRhIH0gZnJvbSBcIi4vU2VydmljZURhdGFcIjtcblxuY29uc3QgU2lkZWJhciA9ICh7IG9uU2VsZWN0IH0pID0+IHtcbiAgLy8gY29uc3QgW3NlcnZpY2VzLCBzZXRTZXJ2aWNlc10gPSB1c2VTdGF0ZShzZXJ2aWNlRGF0YS5kYXRhLnN1Yl9jYXRlZ29yaWVzKVxuICBjb25zdCBbc2VydmljZXMsIHNldFNlcnZpY2VzXSA9IHVzZVN0YXRlKHNlcnZpY2VEYXRhKVxuXG4gIGNvbnN0IGZldGNoU2VydmljZXMgPSBhc3luYygpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBiYXNlVVJMOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19URVNUX0hPU1R9L2FwaS92MWAsXG4gICAgICAgIHVybDogXCIvc2Fsb24vc3ViQ2F0ZWdvcmllc1wiLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBtYWluX2NhdGVnb3J5X2lkOiAxMSxcbiAgICAgICAgICBzYWxvbl9pZDogODExXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzZXRTZXJ2aWNlcyhyZXMuZGF0YS5kYXRhLnN1Yl9jYXRlZ29yaWVzKVxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIGFsZXJ0KFwiQ291bGQgbm90IGZldGNoIHNlcnZpY2VzXCIpXG4gICAgfVxuICB9XG4gIC8vIGNvbnN0IHNlcnZpY2VzID0gW1xuICAvLyAgIHsgbmFtZTogJ0hhaXIgQ29sb3VyJywgY291bnQ6IDYgfSxcbiAgLy8gICB7IG5hbWU6ICdOYWlsIEJhcicsIGNvdW50OiAyIH0sXG4gIC8vICAgeyBuYW1lOiAnRmFjZScsIGNvdW50OiAzIH0sXG4gIC8vICAgeyBuYW1lOiAnVHJlYXRtZW50cycsIGNvdW50OiAyIH0sXG4gIC8vICAgeyBuYW1lOiAnQmFsYXlhZ2UnLCBjb3VudDogMiB9LFxuICAvLyAgIHsgbmFtZTogJ09tYnJlJywgY291bnQ6IDIgfSxcbiAgLy8gICB7IG5hbWU6ICdNYXNzYWdlICYgU3BhJywgY291bnQ6IDIgfSxcbiAgLy8gICB7IG5hbWU6ICdNYW5pY3VyZSAmIFBlZGljdXJlJywgY291bnQ6IDIgfSxcbiAgLy8gICB7IG5hbWU6ICdXYXhpbmcsIEJsZWFjaGluZyAmIFRocmVhZGluZycsIGNvdW50OiAyIH0sXG4gIC8vIF07XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZmV0Y2hTZXJ2aWNlcygpXG4gIH0sIFtdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IGJnLWdyYXktMTAwIGJvcmRlci1yLTQgYm9yZGVyLXItZ3JheS0yMDBcIj5cbiAgICAgIHtzZXJ2aWNlcz8ubWFwKChzZXJ2aWNlKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtzZXJ2aWNlLm5hbWV9IGNsYXNzTmFtZT1cIm1iLTIgZmxleFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KHNlcnZpY2UpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LVsxMnB4XSB0ZXh0LWNlbnRlciBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdy1mdWxsIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0yMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2ljb24ud2VicFwiIGFsdD1cImxvZ28gaWNvblwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtWzEycHhdIHRleHQtY2VudGVyIHNtOnRleHQtWzE4cHhdXCI+e3NlcnZpY2UubmFtZX0gPHNwYW4gY2xhc3NOYW1lPVwic206dGV4dC1bMThweF0gdGV4dC1jZW50ZXJcIj4oe3NlcnZpY2Uuc2VydmljZXMubGVuZ3RofSk8L3NwYW4+ICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7Il0sIm5hbWVzIjpbImF4aW9zIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNlcnZpY2VEYXRhIiwiU2lkZWJhciIsIm9uU2VsZWN0Iiwic2VydmljZXMiLCJzZXRTZXJ2aWNlcyIsImZldGNoU2VydmljZXMiLCJyZXMiLCJtZXRob2QiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1RFU1RfSE9TVCIsInVybCIsInBhcmFtcyIsIm1haW5fY2F0ZWdvcnlfaWQiLCJzYWxvbl9pZCIsImRhdGEiLCJzdWJfY2F0ZWdvcmllcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic2VydmljZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm5hbWUiLCJzcGFuIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/service-details/Sidebar.jsx\n"));

/***/ })

});