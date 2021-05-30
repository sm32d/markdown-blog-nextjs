(function() {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\header.js";

function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    className: "text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-16 mt-8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "hover:underline",
        children: ". . ."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/post-body.js":
/*!*********************************!*\
  !*** ./components/post-body.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostBody; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown-styles.module.css */ "./components/markdown-styles.module.css");
/* harmony import */ var _markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\post-body.js";

function PostBody({
  content
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "max-w-2xl mx-auto",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().markdown),
      dangerouslySetInnerHTML: {
        __html: content
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/post-header.js":
/*!***********************************!*\
  !*** ./components/post-header.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ "./components/avatar.js");
/* harmony import */ var _components_date_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date-formatter */ "./components/date-formatter.js");
/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cover-image */ "./components/cover-image.js");
/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/post-title */ "./components/post-title.js");


var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\post-header.js";




function PostHeader({
  title,
  coverImage,
  date,
  author
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_title__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "hidden md:block md:mb-12",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_avatar__WEBPACK_IMPORTED_MODULE_1__.default, {
        name: author.name,
        picture: author.picture
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-8 md:mb-16 sm:mx-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cover_image__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: title,
        src: coverImage,
        height: 620,
        width: 1240
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "block md:hidden mb-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_avatar__WEBPACK_IMPORTED_MODULE_1__.default, {
          name: author.name,
          picture: author.picture
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-6 text-lg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date_formatter__WEBPACK_IMPORTED_MODULE_2__.default, {
          dateString: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/post-title.js":
/*!**********************************!*\
  !*** ./components/post-title.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostTitle; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\post-title.js";
function PostTitle({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    className: "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./lib/markdownToHtml.js":
/*!*******************************!*\
  !*** ./lib/markdownToHtml.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ markdownToHtml; }
/* harmony export */ });
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remark */ "remark");
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-html */ "remark-html");
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_1__);


async function markdownToHtml(markdown) {
  const result = await remark__WEBPACK_IMPORTED_MODULE_0___default()().use((remark_html__WEBPACK_IMPORTED_MODULE_1___default())).process(markdown);
  return result.toString();
}

/***/ }),

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Post; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");
/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/post-body */ "./components/post-body.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header */ "./components/header.js");
/* harmony import */ var _components_post_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/post-header */ "./components/post-header.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/post-title */ "./components/post-title.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/constants */ "./lib/constants.js");
/* harmony import */ var _lib_markdownToHtml__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/markdownToHtml */ "./lib/markdownToHtml.js");


var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\pages\\posts\\[slug].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function Post({
  post,
  morePosts,
  preview
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  if (!router.isFallback && !(post !== null && post !== void 0 && post.slug)) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_7__.default, {
    preview: preview,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), router.isFallback ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_title__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: "Loading\u2026"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
          className: "mb-32",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
              children: [post.title, " | Next.js Blog Example with ", _lib_constants__WEBPACK_IMPORTED_MODULE_11__.CMS_NAME]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
              property: "og:image",
              content: post.ogImage.url
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_header__WEBPACK_IMPORTED_MODULE_6__.default, {
            title: post.title,
            coverImage: post.coverImage,
            date: post.date,
            author: post.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_body__WEBPACK_IMPORTED_MODULE_4__.default, {
            content: post.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this)
      }, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
async function getStaticProps({
  params
}) {
  const post = (0,_lib_api__WEBPACK_IMPORTED_MODULE_8__.getPostBySlug)(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage']);
  const content = await (0,_lib_markdownToHtml__WEBPACK_IMPORTED_MODULE_12__.default)(post.content || '');
  return {
    props: {
      post: _objectSpread(_objectSpread({}, post), {}, {
        content
      })
    }
  };
}
async function getStaticPaths() {
  const posts = (0,_lib_api__WEBPACK_IMPORTED_MODULE_8__.getAllPosts)(['slug']);
  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}

/***/ }),

/***/ "./components/markdown-styles.module.css":
/*!***********************************************!*\
  !*** ./components/markdown-styles.module.css ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"markdown": "markdown-styles_markdown__1x9gM"
};


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/error");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark-html");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js","components_avatar_js-components_container_js-components_cover-image_js-components_date-format-a2ca56"], function() { return __webpack_exec__("./pages/posts/[slug].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvLi9jb21wb25lbnRzL3Bvc3QtYm9keS5qcyIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvLi9jb21wb25lbnRzL3Bvc3QtaGVhZGVyLmpzIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci8uL2NvbXBvbmVudHMvcG9zdC10aXRsZS5qcyIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvLi9saWIvbWFya2Rvd25Ub0h0bWwuanMiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci8uL2NvbXBvbmVudHMvbWFya2Rvd24tc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Vycm9yXCIiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci9leHRlcm5hbCBcInJlbWFya1wiIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci9leHRlcm5hbCBcInJlbWFyay1odG1sXCIiXSwibmFtZXMiOlsiSGVhZGVyIiwiUG9zdEJvZHkiLCJjb250ZW50IiwibWFya2Rvd25TdHlsZXMiLCJfX2h0bWwiLCJQb3N0SGVhZGVyIiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImF1dGhvciIsIm5hbWUiLCJwaWN0dXJlIiwiUG9zdFRpdGxlIiwiY2hpbGRyZW4iLCJtYXJrZG93blRvSHRtbCIsIm1hcmtkb3duIiwicmVzdWx0IiwicmVtYXJrIiwidXNlIiwiaHRtbCIsInByb2Nlc3MiLCJ0b1N0cmluZyIsIlBvc3QiLCJwb3N0IiwibW9yZVBvc3RzIiwicHJldmlldyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJzbHVnIiwiQ01TX05BTUUiLCJvZ0ltYWdlIiwidXJsIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJnZXRQb3N0QnlTbHVnIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBvc3RzIiwiZ2V0QWxsUG9zdHMiLCJwYXRocyIsIm1hcCIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUMvQixzQkFDRTtBQUFJLGFBQVMsRUFBQyw0RkFBZDtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7QUFFZSxTQUFTQyxRQUFULENBQWtCO0FBQUVDO0FBQUYsQ0FBbEIsRUFBK0I7QUFDNUMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSwyQkFDRTtBQUNFLGVBQVMsRUFBRUMsNkVBRGI7QUFFRSw2QkFBdUIsRUFBRTtBQUFFQyxjQUFNLEVBQUVGO0FBQVY7QUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hEO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0csVUFBVCxDQUFvQjtBQUFFQyxPQUFGO0FBQVNDLFlBQVQ7QUFBcUJDLE1BQXJCO0FBQTJCQztBQUEzQixDQUFwQixFQUF5RDtBQUN0RSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQUEsZ0JBQVlIO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBQSw2QkFDRSw4REFBQyx1REFBRDtBQUFRLFlBQUksRUFBRUcsTUFBTSxDQUFDQyxJQUFyQjtBQUEyQixlQUFPLEVBQUVELE1BQU0sQ0FB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TTtBQURMO0FBREgsT0FBUDtBQUtELEtBTk0sQ0FERjtBQVFMYSxZQUFRLEVBQUU7QUFSTCxHQUFQO0FBVUQsQzs7Ozs7Ozs7OztBQ25GRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvcG9zdHMvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCBtZDp0cmFja2luZy10aWdodGVyIGxlYWRpbmctdGlnaHQgbWItMTYgbXQtOFwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+LiAuIC48L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9oMT5cblxuICApXG59XG4iLCJpbXBvcnQgbWFya2Rvd25TdHlsZXMgZnJvbSAnLi9tYXJrZG93bi1zdHlsZXMubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdEJvZHkoeyBjb250ZW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17bWFya2Rvd25TdHlsZXNbJ21hcmtkb3duJ119XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudCB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL2F2YXRhcidcbmltcG9ydCBEYXRlRm9ybWF0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZS1mb3JtYXR0ZXInXG5pbXBvcnQgQ292ZXJJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL2NvdmVyLWltYWdlJ1xuaW1wb3J0IFBvc3RUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3QtdGl0bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RIZWFkZXIoeyB0aXRsZSwgY292ZXJJbWFnZSwgZGF0ZSwgYXV0aG9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBvc3RUaXRsZT57dGl0bGV9PC9Qb3N0VGl0bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayBtZDptYi0xMlwiPlxuICAgICAgICA8QXZhdGFyIG5hbWU9e2F1dGhvci5uYW1lfSBwaWN0dXJlPXthdXRob3IucGljdHVyZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IG1kOm1iLTE2IHNtOm14LTBcIj5cbiAgICAgICAgPENvdmVySW1hZ2UgdGl0bGU9e3RpdGxlfSBzcmM9e2NvdmVySW1hZ2V9IGhlaWdodD17NjIwfSB3aWR0aD17MTI0MH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG1kOmhpZGRlbiBtYi02XCI+XG4gICAgICAgICAgPEF2YXRhciBuYW1lPXthdXRob3IubmFtZX0gcGljdHVyZT17YXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgdGV4dC1sZ1wiPlxuICAgICAgICAgIDxEYXRlRm9ybWF0dGVyIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RUaXRsZSh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWQ6dGV4dC03eGwgbGc6dGV4dC04eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXIgbGVhZGluZy10aWdodCBtZDpsZWFkaW5nLW5vbmUgbWItMTIgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oMT5cbiAgKVxufVxuIiwiaW1wb3J0IHJlbWFyayBmcm9tICdyZW1hcmsnXG5pbXBvcnQgaHRtbCBmcm9tICdyZW1hcmstaHRtbCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWFya2Rvd25Ub0h0bWwobWFya2Rvd24pIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVtYXJrKCkudXNlKGh0bWwpLnByb2Nlc3MobWFya2Rvd24pXG4gIHJldHVybiByZXN1bHQudG9TdHJpbmcoKVxufVxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IFBvc3RCb2R5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC1ib2R5J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC1oZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgZ2V0UG9zdEJ5U2x1ZywgZ2V0QWxsUG9zdHMgfSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IFBvc3RUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QtdGl0bGUnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDTVNfTkFNRSB9IGZyb20gJy4uLy4uL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgbWFya2Rvd25Ub0h0bWwgZnJvbSAnLi4vLi4vbGliL21hcmtkb3duVG9IdG1sJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCwgbW9yZVBvc3RzLCBwcmV2aWV3IH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgaWYgKCFyb3V0ZXIuaXNGYWxsYmFjayAmJiAhcG9zdD8uc2x1Zykge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcHJldmlldz17cHJldmlld30+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHtyb3V0ZXIuaXNGYWxsYmFjayA/IChcbiAgICAgICAgICA8UG9zdFRpdGxlPkxvYWRpbmfigKY8L1Bvc3RUaXRsZT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWItMzJcIj5cbiAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9IHwgTmV4dC5qcyBCbG9nIEV4YW1wbGUgd2l0aCB7Q01TX05BTUV9XG4gICAgICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17cG9zdC5vZ0ltYWdlLnVybH0gLz5cbiAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICA8UG9zdEhlYWRlclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGNvdmVySW1hZ2U9e3Bvc3QuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgICBkYXRlPXtwb3N0LmRhdGV9XG4gICAgICAgICAgICAgICAgYXV0aG9yPXtwb3N0LmF1dGhvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFBvc3RCb2R5IGNvbnRlbnQ9e3Bvc3QuY29udGVudH0gLz5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHBvc3QgPSBnZXRQb3N0QnlTbHVnKHBhcmFtcy5zbHVnLCBbXG4gICAgJ3RpdGxlJyxcbiAgICAnZGF0ZScsXG4gICAgJ3NsdWcnLFxuICAgICdhdXRob3InLFxuICAgICdjb250ZW50JyxcbiAgICAnb2dJbWFnZScsXG4gICAgJ2NvdmVySW1hZ2UnLFxuICBdKVxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgbWFya2Rvd25Ub0h0bWwocG9zdC5jb250ZW50IHx8ICcnKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICAgICAgLi4ucG9zdCxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gZ2V0QWxsUG9zdHMoWydzbHVnJ10pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzbHVnOiBwb3N0LnNsdWcsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYXJrZG93blwiOiBcIm1hcmtkb3duLXN0eWxlc19tYXJrZG93bl9fMXg5Z01cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9lcnJvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFya1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVtYXJrLWh0bWxcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=