webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Post = function Post(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-974054920"
  }, props.show.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-974054920"
  }, props.show.summary.replace(/<[/]?p>/g, '')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: props.show.image.medium,
    className: "jsx-974054920"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "974054920",
    css: "body.jsx-974054920{background-color:#EAECEE;}h1.jsx-974054920,a.jsx-974054920,p.jsx-974054920{font-family:\"Arial\";}p.jsx-974054920{color:#566573;width:70%;float:right;padding:10px;}ul.jsx-974054920{padding:0;}li.jsx-974054920{list-style:none;margin:5px 0;}img.jsx-974054920{overflow:hidden;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYnkvRGV2ZWxvcGVyL1Byb2plY3RzL05leHQvaGVsbG8tbmV4dC9wYWdlcy9wb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFnQixBQUdrQyxBQUlMLEFBSU4sQUFPSixBQUlNLEFBS0EsVUFSbEIsSUFQWSxFQVdHLEFBS0EsSUFwQmYsSUFLYyxDQVRkLElBb0JBLEFBS0EsT0FmZSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9hYnkvRGV2ZWxvcGVyL1Byb2plY3RzL05leHQvaGVsbG8tbmV4dC9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT57cHJvcHMuc2hvdy5uYW1lfTwvaDE+XG4gICAgPHA+e3Byb3BzLnNob3cuc3VtbWFyeS5yZXBsYWNlKC88Wy9dP3A+L2csICcnKX08L3A+XG4gICAgPGltZyBzcmM9e3Byb3BzLnNob3cuaW1hZ2UubWVkaXVtfS8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQUVDRUU7XG4gICAgICB9XG5cbiAgICAgIGgxLCBhLCBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAjNTY2NTczO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YClcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKClcblxuICBjb25zb2xlLmxvZyhgRmV0Y2hlZCBzaG93OiAke3Nob3cubmFtZX1gKVxuXG4gIHJldHVybiB7IHNob3cgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG4iXX0= */\n/*@ sourceURL=/Users/aby/Developer/Projects/Next/hello-next/pages/post.js */"
  }));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, show;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://api.tvmaze.com/shows/".concat(id));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;
            console.log("Fetched show: ".concat(show.name));
            return _context.abrupt("return", {
              show: show
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=post.js.fc13d9b14a670f562e7d.hot-update.js.map