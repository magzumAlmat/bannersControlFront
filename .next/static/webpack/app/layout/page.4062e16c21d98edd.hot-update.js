"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout/page",{

/***/ "(app-pages-browser)/./src/components/profile/index.js":
/*!*****************************************!*\
  !*** ./src/components/profile/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfileComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _addprofiledata_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addprofiledata/index */ \"(app-pages-browser)/./src/components/addprofiledata/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header */ \"(app-pages-browser)/./src/components/header/index.js\");\n/* harmony import */ var _store_slices_authSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/slices/authSlice */ \"(app-pages-browser)/./src/store/slices/authSlice.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Главная\"\n            }, void 0, false, {\n                fileName: \"/Users/billionare/Documents/GenplanReklanaFront/src/components/profile/index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/billionare/Documents/GenplanReklanaFront/src/components/profile/index.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Home;\nfunction ProfileComponent(user) {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const { pathname } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const CurrentUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.auth.currentUser);\n    const isAuth = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.auth.isAuth);\n    const TOKEN = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.auth.authToken);\n    console.log(\"CURRENT USER FROM PROFILE isAuth=\", isAuth);\n    console.log(\"12CURRENT USER FROM PROFILE TOKEN=\", TOKEN);\n    console.log(\"123CURRENT USER FROM PROFILE CurrentUser=\", CurrentUser);\n    const [tokenState, setTokenState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(CurrentUser);\n    const token = localStorage.getItem(\"token\");\n    console.log(\"Initialize tokenState=\", tokenState);\n    console.log(\"1 edited current USER\", CurrentUser);\n    const arrayCurrUser = CurrentUser;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (user != null) {\n            console.log(\"user is null\");\n        }\n        // console.log('1User from parent',user)\n        // localStorage.setItem('token',)\n        dispatch(_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_7__.getUserInfo);\n        console.log(\"1 edited current USER\", CurrentUser);\n        if (token) {\n            let decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(token);\n            setTokenState(CurrentUser);\n        // localStorage.setItem('token',tokenState)\n        // dispatch(authorize({tokenState}))\n        } else {\n            localStorage.removeItem(\"token\");\n        }\n    }, [\n        arrayCurrUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flexColumn\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Email: \",\n                    tokenState && tokenState.email,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/billionare/Documents/GenplanReklanaFront/src/components/profile/index.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"name:\",\n                    tokenState && tokenState.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/billionare/Documents/GenplanReklanaFront/src/components/profile/index.js\",\n                lineNumber: 93,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"lastName:\",\n                    tokenState && tokenState.lastname\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/billionare/Documents/GenplanReklanaFront/src/components/profile/index.js\",\n                lineNumber: 94,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \" phone:\",\n                    tokenState && tokenState.phone\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/billionare/Documents/GenplanReklanaFront/src/components/profile/index.js\",\n                lineNumber: 95,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Home, {}, void 0, false, {\n                fileName: \"/Users/billionare/Documents/GenplanReklanaFront/src/components/profile/index.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/billionare/Documents/GenplanReklanaFront/src/components/profile/index.js\",\n        lineNumber: 87,\n        columnNumber: 9\n    }, this);\n}\n_s(ProfileComponent, \"Z/gqzX+OYBC+8OjWr3v+iBXhZus=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c1 = ProfileComponent;\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"ProfileComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2E7QUFFVztBQWNqQztBQUN1QjtBQUNVO0FBRXRCO0FBQ3NCO0FBQ25CO0FBQ1I7QUFDNkI7QUFDdkQsTUFBTXdCLE9BQU87SUFDVCxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7O1lBQzRDOzs7Ozs7O0FBRTVEO0tBTk1GO0FBU1MsU0FBU0csaUJBQWlCQyxJQUFJOztJQUN6QyxNQUFNQyxXQUFTWCx3REFBV0E7SUFFMUIsTUFBTSxFQUFDWSxRQUFRLEVBQUMsR0FBRzdCLDBEQUFTQTtJQUM1QixNQUFNOEIsY0FBYWQsd0RBQVdBLENBQUMsQ0FBQ2UsUUFBVUEsTUFBTUMsSUFBSSxDQUFDQyxXQUFXO0lBQ2hFLE1BQU1DLFNBQVFsQix3REFBV0EsQ0FBQyxDQUFDZSxRQUFVQSxNQUFNQyxJQUFJLENBQUNFLE1BQU07SUFDdEQsTUFBTUMsUUFBTW5CLHdEQUFXQSxDQUFDLENBQUNlLFFBQVVBLE1BQU1DLElBQUksQ0FBQ0ksU0FBUztJQUV2REMsUUFBUUMsR0FBRyxDQUFDLHFDQUFvQ0o7SUFDaERHLFFBQVFDLEdBQUcsQ0FBQyxzQ0FBcUNIO0lBQ2pERSxRQUFRQyxHQUFHLENBQUMsNkNBQTRDUjtJQUV4RCxNQUFNLENBQUNTLFlBQVdDLGNBQWMsR0FBQzFCLCtDQUFRQSxDQUFDZ0I7SUFFMUMsTUFBTVcsUUFBTUMsYUFBYUMsT0FBTyxDQUFDO0lBRWpDTixRQUFRQyxHQUFHLENBQUMsMEJBQXlCQztJQUNyQ0YsUUFBUUMsR0FBRyxDQUFDLHlCQUF3QlI7SUFFcEMsTUFBTWMsZ0JBQWNkO0lBRXBCZixnREFBU0EsQ0FBQztRQUNOLElBQUlZLFFBQU0sTUFBSztZQUNYVSxRQUFRQyxHQUFHLENBQUM7UUFDaEI7UUFJQSx3Q0FBd0M7UUFFeEMsaUNBQWlDO1FBQ2xDVixTQUFTTixnRUFBV0E7UUFDcEJlLFFBQVFDLEdBQUcsQ0FBQyx5QkFBd0JSO1FBR25DLElBQUdXLE9BQU07WUFDTCxJQUFJSSxlQUFhekIsc0RBQVNBLENBQUNxQjtZQUMzQkQsY0FBY1Y7UUFHZCwyQ0FBMkM7UUFDM0Msb0NBQW9DO1FBRXhDLE9BQ0k7WUFDQVksYUFBYUksVUFBVSxDQUFDO1FBQzVCO0lBQ0osR0FBRTtRQUFDRjtLQUFjO0lBRWpCLHFCQUVJLDhEQUFDcEI7UUFBSXVCLFdBQVU7OzBCQUtYLDhEQUFDdkI7O29CQUFJO29CQUFRZSxjQUFjQSxXQUFXUyxLQUFLO29CQUFDOzs7Ozs7OzBCQUMzQyw4REFBQ3hCOztvQkFBSTtvQkFBTWUsY0FBY0EsV0FBV1UsSUFBSTtvQkFBQzs7Ozs7OzswQkFDekMsOERBQUN6Qjs7b0JBQUk7b0JBQVVlLGNBQWNBLFdBQVdXLFFBQVE7Ozs7Ozs7MEJBQ2hELDhEQUFDMUI7O29CQUFJO29CQUFRZSxjQUFjQSxXQUFXWSxLQUFLOzs7Ozs7OzBCQUU1Qyw4REFBQzVCOzs7Ozs7Ozs7OztBQUliO0dBakV3Qkc7O1FBQ0xULG9EQUFXQTtRQUVQakIsc0RBQVNBO1FBQ1RnQixvREFBV0E7UUFDaEJBLG9EQUFXQTtRQUNiQSxvREFBV0E7OztNQU5IVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm9maWxlL2luZGV4LmpzPzE4YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5pbXBvcnQgQWRkUHJvZmlsZURhdGEgZnJvbSAnLi4vYWRkcHJvZmlsZWRhdGEvaW5kZXgnO1xuaW1wb3J0IHtcbiAgICBDb2xsYXBzZSxcbiAgICBOYXZiYXIsXG4gICAgTmF2YmFyVG9nZ2xlcixcbiAgICBOYXZiYXJCcmFuZCxcbiAgICBOYXYsXG4gICAgTmF2SXRlbSxcbiAgICBOYXZMaW5rLFxuICAgIFVuY29udHJvbGxlZERyb3Bkb3duLFxuICAgIERyb3Bkb3duVG9nZ2xlLFxuICAgIERyb3Bkb3duTWVudSxcbiAgICBEcm9wZG93bkl0ZW0sXG4gICAgTmF2YmFyVGV4dFxufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IHVzZVN0YXRlICx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyJztcbmltcG9ydCB7IGF1dGhvcml6ZSB9IGZyb20gJ0Avc3RvcmUvc2xpY2VzL2F1dGhTbGljZSc7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgZ2V0VXNlckluZm8gfSBmcm9tICdAL3N0b3JlL3NsaWNlcy9hdXRoU2xpY2UnO1xuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPtCT0LvQsNCy0L3QsNGPPC9oMT5cbiAgICAgICAgICAgIHsvKiDQlNC+0LHQsNCy0YzRgtC1INGB0L7QtNC10YDQttC40LzQvtC1INC00LvRjyDQk9C70LDQstC90L7QuSDRgdGC0YDQsNC90LjRhtGLICovfSA8L2Rpdj5cbiAgICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlQ29tcG9uZW50KHVzZXIpIHtcbiAgICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXG4gICAgXG4gICAgY29uc3Qge3BhdGhuYW1lfSA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IEN1cnJlbnRVc2VyPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGguY3VycmVudFVzZXIpO1xuICAgIGNvbnN0IGlzQXV0aD0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLmlzQXV0aCk7XG4gICAgY29uc3QgVE9LRU49dXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLmF1dGhUb2tlbik7XG5cbiAgICBjb25zb2xlLmxvZygnQ1VSUkVOVCBVU0VSIEZST00gUFJPRklMRSBpc0F1dGg9Jyxpc0F1dGgpXG4gICAgY29uc29sZS5sb2coJzEyQ1VSUkVOVCBVU0VSIEZST00gUFJPRklMRSBUT0tFTj0nLFRPS0VOKVxuICAgIGNvbnNvbGUubG9nKCcxMjNDVVJSRU5UIFVTRVIgRlJPTSBQUk9GSUxFIEN1cnJlbnRVc2VyPScsQ3VycmVudFVzZXIpXG5cbiAgICBjb25zdCBbdG9rZW5TdGF0ZSxzZXRUb2tlblN0YXRlXT11c2VTdGF0ZShDdXJyZW50VXNlcilcblxuICAgIGNvbnN0IHRva2VuPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG5cbiAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6ZSB0b2tlblN0YXRlPScsdG9rZW5TdGF0ZSlcbiAgICBjb25zb2xlLmxvZygnMSBlZGl0ZWQgY3VycmVudCBVU0VSJyxDdXJyZW50VXNlcilcblxuICAgIGNvbnN0IGFycmF5Q3VyclVzZXI9Q3VycmVudFVzZXJcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAodXNlciE9bnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciBpcyBudWxsJylcbiAgICAgICAgfVxuIFxuICAgICAgIFxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcxVXNlciBmcm9tIHBhcmVudCcsdXNlcilcbiAgICAgICAgXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsKVxuICAgICAgIGRpc3BhdGNoKGdldFVzZXJJbmZvKVxuICAgICAgIGNvbnNvbGUubG9nKCcxIGVkaXRlZCBjdXJyZW50IFVTRVInLEN1cnJlbnRVc2VyKVxuXG5cbiAgICAgICAgaWYodG9rZW4pe1xuICAgICAgICAgICAgbGV0IGRlY29kZWRUb2tlbj1qd3REZWNvZGUodG9rZW4pXG4gICAgICAgICAgICBzZXRUb2tlblN0YXRlKEN1cnJlbnRVc2VyKVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsdG9rZW5TdGF0ZSlcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoKGF1dGhvcml6ZSh7dG9rZW5TdGF0ZX0pKVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgICAgIH1cbiAgICB9LFthcnJheUN1cnJVc2VyXSkgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Q29sdW1uJz5cbiAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PkVtYWlsOiB7dG9rZW5TdGF0ZSAmJiB0b2tlblN0YXRlLmVtYWlsfSA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2Pm5hbWU6e3Rva2VuU3RhdGUgJiYgdG9rZW5TdGF0ZS5uYW1lfSA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2Pmxhc3ROYW1lOnt0b2tlblN0YXRlICYmIHRva2VuU3RhdGUubGFzdG5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgPGRpdj4gcGhvbmU6e3Rva2VuU3RhdGUgJiYgdG9rZW5TdGF0ZS5waG9uZX08L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEhvbWUvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiQWRkUHJvZmlsZURhdGEiLCJDb2xsYXBzZSIsIk5hdmJhciIsIk5hdmJhclRvZ2dsZXIiLCJOYXZiYXJCcmFuZCIsIk5hdiIsIk5hdkl0ZW0iLCJOYXZMaW5rIiwiVW5jb250cm9sbGVkRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsIk5hdmJhclRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJIZWFkZXIiLCJhdXRob3JpemUiLCJqd3REZWNvZGUiLCJheGlvcyIsImdldFVzZXJJbmZvIiwiSG9tZSIsImRpdiIsImgxIiwiUHJvZmlsZUNvbXBvbmVudCIsInVzZXIiLCJkaXNwYXRjaCIsInBhdGhuYW1lIiwiQ3VycmVudFVzZXIiLCJzdGF0ZSIsImF1dGgiLCJjdXJyZW50VXNlciIsImlzQXV0aCIsIlRPS0VOIiwiYXV0aFRva2VuIiwiY29uc29sZSIsImxvZyIsInRva2VuU3RhdGUiLCJzZXRUb2tlblN0YXRlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXJyYXlDdXJyVXNlciIsImRlY29kZWRUb2tlbiIsInJlbW92ZUl0ZW0iLCJjbGFzc05hbWUiLCJlbWFpbCIsIm5hbWUiLCJsYXN0bmFtZSIsInBob25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/profile/index.js\n"));

/***/ })

});