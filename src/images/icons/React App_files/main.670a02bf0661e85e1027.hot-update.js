webpackHotUpdate("main",{

/***/ "./src/components/Auth/Login.jsx":
/*!***************************************!*\
  !*** ./src/components/Auth/Login.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Contexts/AuthContext */ "./src/Contexts/AuthContext.js");
/* harmony import */ var _style_Login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/Login.css */ "./src/components/Auth/style/Login.css");
/* harmony import */ var _style_Login_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_Login_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_image_1_removebg_preview_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/image__1_-removebg-preview.png */ "./src/images/image__1_-removebg-preview.png");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ "./src/firebase.js");
/* harmony import */ var _Contexts_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Contexts/UserContext */ "./src/Contexts/UserContext.js");
/* harmony import */ var _saveThisUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./saveThisUser */ "./src/components/Auth/saveThisUser.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/erlan/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/trello/src/components/Auth/Login.jsx",
    _s = __webpack_require__.$Refresh$.signature();












const Login = () => {
  _s();

  const {
    handleSignUp,
    passwordError,
    emailError,
    setEmail,
    setPassword,
    user,
    handleLogIn,
    email,
    password
  } = Object(_Contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__["useAuth"])();
  const {
    addIdUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Contexts_UserContext__WEBPACK_IMPORTED_MODULE_6__["usersContext"]);
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useNavigate"])();

  async function createUser() {
    if (!password || !email) return;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    let data = await Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_4__["addDoc"])(Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_4__["collection"])(_firebase__WEBPACK_IMPORTED_MODULE_5__["db"], "users"), {
      email: email,
      date: today,
      avatar: null,
      posts: [],
      friends: [],
      raiting: 0,
      userStatus: null,
      messages: [],
      saved: [],
      chats: []
    }); // console.log(data.id);

    handleSignUp();
    addIdUser(data.id);
    Object(_saveThisUser__WEBPACK_IMPORTED_MODULE_7__["saveUserId"])(data.id);
  }

  function login() {
    handleLogIn();
    navigate("/");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    className: "login",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "login_card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "auth_title",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
          src: _images_image_1_removebg_preview_png__WEBPACK_IMPORTED_MODULE_3__["default"],
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "login_content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
          type: "text",
          onChange: e => setEmail(e.target.value),
          placeholder: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
          children: emailError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
          type: "text",
          onChange: e => setPassword(e.target.value),
          placeholder: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
          children: passwordError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
          onClick: login,
          children: "\u0432\u043E\u0439\u0442\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
          onClick: createUser,
          children: "\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined), user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
          children: user.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 19
        }, undefined) : "loading"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
};

_s(Login, "18qD1Bw2+06Fkg3GlkFW2nz70eM=", false, function () {
  return [_Contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__["useAuth"], react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useNavigate"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

__webpack_require__.$Refresh$.register(_c, "Login");

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

/***/ })

})
//# sourceMappingURL=main.670a02bf0661e85e1027.hot-update.js.map