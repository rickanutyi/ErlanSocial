webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/SendMessage/style/SendMessage.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/SendMessage/style/SendMessage.css ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".letters {\n  max-width: 1000px;\n  height: calc(100vh - 70px);\n  background-color: #fff;\n  margin: 0 auto;\n}\n\n.letters .letters_list {\n  width: 100%;\n  height: 80%;\n}\n/*# sourceMappingURL=SendMessage.css.map */", "",{"version":3,"sources":["webpack://src/components/SendMessage/style/SendMessage.scss","webpack://src/components/SendMessage/style/SendMessage.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,sBAAsB;EACtB,cAAc;ACChB;;ADLA;EAMI,WAAW;EACX,WAAW;ACGf;AACA,0CAA0C","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/SendMessage/SendMessage.js":
/*!***************************************************!*\
  !*** ./src/components/SendMessage/SendMessage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Contexts/AuthContext */ "./src/Contexts/AuthContext.js");
/* harmony import */ var _Contexts_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Contexts/UserContext */ "./src/Contexts/UserContext.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var _style_SendMessage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/SendMessage.css */ "./src/components/SendMessage/style/SendMessage.css");
/* harmony import */ var _style_SendMessage_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_SendMessage_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/erlan/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/trello/src/components/SendMessage/SendMessage.js",
    _s = __webpack_require__.$Refresh$.signature();










const SendMessage = () => {
  _s();

  const {
    getThisUser,
    thisUser,
    getUsers,
    users
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Contexts_UserContext__WEBPACK_IMPORTED_MODULE_4__["usersContext"]);
  const {
    user
  } = Object(_Contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
  const [message, setMessage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''); // const [gEmail,setGEmail] = useState('')

  const [usern, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"])();
  const params = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getThisUser(params.id);
  }, []) // let data = await addDoc(collection(db, "users"), {
  //       email: email,
  //       date: today,
  //       avatar: null,
  //       posts: [],
  //       friends: [],
  //       raiting: 0,
  //       userStatus: null,
  //       messages: [],
  //       saved: [],
  //     })
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getUsers();
  }, []); //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    users.forEach(elem => {
      console.log(elem.email);

      if (elem.email == user.email) {
        setUser(elem);
      }
    });
  }, [users]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: "letters",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "letters_list"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "letters_action",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
        onChange: e => setMessage(e.target.value),
        type: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
        children: "\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, undefined);
};

_s(SendMessage, "X1GwYP3pq7zFpWV4YXkfcJdo73M=", false, function () {
  return [_Contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__["useAuth"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"]];
});

_c = SendMessage;
/* harmony default export */ __webpack_exports__["default"] = (SendMessage);

var _c;

__webpack_require__.$Refresh$.register(_c, "SendMessage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/SendMessage/style/SendMessage.css":
/*!**********************************************************!*\
  !*** ./src/components/SendMessage/style/SendMessage.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./SendMessage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/SendMessage/style/SendMessage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./SendMessage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/SendMessage/style/SendMessage.css",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./SendMessage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/SendMessage/style/SendMessage.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=main.aa7661baf8f0b0c520a3.hot-update.js.map