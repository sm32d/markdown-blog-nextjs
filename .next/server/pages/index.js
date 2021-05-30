(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/hero-post.js":
/*!*********************************!*\
  !*** ./components/hero-post.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeroPost; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ "./components/avatar.js");
/* harmony import */ var _components_date_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date-formatter */ "./components/date-formatter.js");
/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cover-image */ "./components/cover-image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\hero-post.js";




function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-8 md:mb-16",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cover_image__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: title,
        src: coverImage,
        slug: slug,
        height: 620,
        width: 1240
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "mb-4 text-4xl lg:text-6xl leading-tight",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            as: `/posts/${slug}`,
            href: "/posts/[slug]",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "hover:underline",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mb-4 md:mb-0 text-lg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date_formatter__WEBPACK_IMPORTED_MODULE_2__.default, {
            dateString: date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-lg leading-relaxed mb-4",
          children: excerpt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_avatar__WEBPACK_IMPORTED_MODULE_1__.default, {
          name: author.name,
          picture: author.picture
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/intro.js":
/*!*****************************!*\
  !*** ./components/intro.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Intro; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\intro.js";


function Intro() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mb-10 flex flex-col md:flex-row mt-10 justify-between",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: "flex flex-col mb-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "font-bold tracking-tight md:tracking-tighter leading-tight text-2xl md:text-4xl",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "hover:underline",
            children: ". . ."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "font-mono text-lg md:text-xl text-gray-500 mt-1",
        children: "What's with the dots?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "flex mr-10 md:pt-3 font-medium text-lg",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "md:font-semibold text-gray-500 inline mr-7",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "md:font-semibold hover:text-gray-500 inline mr-7",
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "md:font-semibold hover:text-gray-500 inline",
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/more-stories.js":
/*!************************************!*\
  !*** ./components/more-stories.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MoreStories; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_post_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/post-preview */ "./components/post-preview.js");

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\more-stories.js";

function MoreStories({
  posts
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",
      children: "More Stories"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",
      children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post_preview__WEBPACK_IMPORTED_MODULE_1__.default, {
        title: post.title,
        coverImage: post.coverImage,
        date: post.date,
        author: post.author,
        slug: post.slug,
        excerpt: post.excerpt
      }, post.slug, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/post-preview.js":
/*!************************************!*\
  !*** ./components/post-preview.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostPreview; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ "./components/avatar.js");
/* harmony import */ var _components_date_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date-formatter */ "./components/date-formatter.js");
/* harmony import */ var _cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover-image */ "./components/cover-image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\post-preview.js";




function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cover_image__WEBPACK_IMPORTED_MODULE_3__.default, {
        slug: slug,
        title: title,
        src: coverImage,
        height: 278,
        width: 556
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "text-3xl mb-3 leading-snug",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        as: `/posts/${slug}`,
        href: "/posts/[slug]",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "hover:underline",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-lg mb-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date_formatter__WEBPACK_IMPORTED_MODULE_2__.default, {
        dateString: date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-lg leading-relaxed mb-4",
      children: excerpt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_avatar__WEBPACK_IMPORTED_MODULE_1__.default, {
      name: author.name,
      picture: author.picture
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/more-stories */ "./components/more-stories.js");
/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hero-post */ "./components/hero-post.js");
/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/intro */ "./components/intro.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");


var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\pages\\index.js";








function Index({
  allPosts
}) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: "Learn Python | Syntax Matters"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_1__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intro__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), heroPost && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_post__WEBPACK_IMPORTED_MODULE_3__.default, {
          title: heroPost.title,
          coverImage: heroPost.coverImage,
          date: heroPost.date,
          author: heroPost.author,
          slug: heroPost.slug,
          excerpt: heroPost.excerpt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this), morePosts.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_more_stories__WEBPACK_IMPORTED_MODULE_2__.default, {
          posts: morePosts
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 36
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
async function getStaticProps() {
  const allPosts = (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__.getAllPosts)(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);
  return {
    props: {
      allPosts
    }
  };
}

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js","components_avatar_js-components_container_js-components_cover-image_js-components_date-format-a2ca56"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvLi9jb21wb25lbnRzL2hlcm8tcG9zdC5qcyIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvLi9jb21wb25lbnRzL2ludHJvLmpzIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci8uL2NvbXBvbmVudHMvbW9yZS1zdG9yaWVzLmpzIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci8uL2NvbXBvbmVudHMvcG9zdC1wcmV2aWV3LmpzIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyL2V4dGVybmFsIFwiZ3JheS1tYXR0ZXJcIiIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIZXJvUG9zdCIsInRpdGxlIiwiY292ZXJJbWFnZSIsImRhdGUiLCJleGNlcnB0IiwiYXV0aG9yIiwic2x1ZyIsIm5hbWUiLCJwaWN0dXJlIiwiSW50cm8iLCJNb3JlU3RvcmllcyIsInBvc3RzIiwibWFwIiwicG9zdCIsIlBvc3RQcmV2aWV3IiwiSW5kZXgiLCJhbGxQb3N0cyIsImhlcm9Qb3N0IiwibW9yZVBvc3RzIiwic2xpY2UiLCJsZW5ndGgiLCJnZXRTdGF0aWNQcm9wcyIsImdldEFsbFBvc3RzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQWtCO0FBQy9CQyxPQUQrQjtBQUUvQkMsWUFGK0I7QUFHL0JDLE1BSCtCO0FBSS9CQyxTQUorQjtBQUsvQkMsUUFMK0I7QUFNL0JDO0FBTitCLENBQWxCLEVBT1o7QUFDRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw2QkFDRSw4REFBQyw0REFBRDtBQUNFLGFBQUssRUFBRUwsS0FEVDtBQUVFLFdBQUcsRUFBRUMsVUFGUDtBQUdFLFlBQUksRUFBRUksSUFIUjtBQUlFLGNBQU0sRUFBRSxHQUpWO0FBS0UsYUFBSyxFQUFFO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVFO0FBQUssZUFBUyxFQUFDLDhEQUFmO0FBQUEsOEJBQ0U7QUFBQSxn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O0FBSUUsZ0JBQU0sRUFBRWMsUUFBUSxDQUFDWixNQUpuQjtBQUtFLGNBQUksRUFBRVksUUFBUSxDQUFDWCxJQUxqQjtBQU1FLGlCQUFPLEVBQUVXLFFBQVEsQ0FBQ2I7QUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixFQVlHYyxTQUFTLENBQUNFLE1BQVYsR0FBbUIsQ0FBbkIsaUJBQXdCLDhEQUFDLDZEQUFEO0FBQWEsZUFBSyxFQUFFRjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVozQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXVCRDtBQUVNLGVBQWVHLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUwsUUFBUSxHQUFHTSxxREFBVyxDQUFDLENBQzNCLE9BRDJCLEVBRTNCLE1BRjJCLEVBRzNCLE1BSDJCLEVBSTNCLFFBSjJCLEVBSzNCLFlBTDJCLEVBTTNCLFNBTjJCLENBQUQsQ0FBNUI7QUFTQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUFFUDtBQUFGO0FBREYsR0FBUDtBQUdELEM7Ozs7Ozs7Ozs7O0FDbERELHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL2F2YXRhcidcbmltcG9ydCBEYXRlRm9ybWF0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZS1mb3JtYXR0ZXInXG5pbXBvcnQgQ292ZXJJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL2NvdmVyLWltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvUG9zdCh7XG4gIHRpdGxlLFxuICBjb3ZlckltYWdlLFxuICBkYXRlLFxuICBleGNlcnB0LFxuICBhdXRob3IsXG4gIHNsdWcsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggbWQ6bWItMTZcIj5cbiAgICAgICAgPENvdmVySW1hZ2VcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgc3JjPXtjb3ZlckltYWdlfVxuICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgaGVpZ2h0PXs2MjB9XG4gICAgICAgICAgd2lkdGg9ezEyNDB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtMiBtZDpnYXAteC0xNiBsZzpnYXAteC04IG1iLTIwIG1kOm1iLTI4XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC00eGwgbGc6dGV4dC02eGwgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgPExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9XCIvcG9zdHMvW3NsdWddXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPnt0aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgbWQ6bWItMCB0ZXh0LWxnXCI+XG4gICAgICAgICAgICA8RGF0ZUZvcm1hdHRlciBkYXRlU3RyaW5nPXtkYXRlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi00XCI+e2V4Y2VycHR9PC9wPlxuICAgICAgICAgIDxBdmF0YXIgbmFtZT17YXV0aG9yLm5hbWV9IHBpY3R1cmU9e2F1dGhvci5waWN0dXJlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgQ01TX05BTUUgfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRybygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbXQtMTAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWItNVwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgbWQ6dHJhY2tpbmctdGlnaHRlciBsZWFkaW5nLXRpZ2h0IHRleHQtMnhsIG1kOnRleHQtNHhsXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIj4uIC4gLjwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1sZyBtZDp0ZXh0LXhsIHRleHQtZ3JheS01MDAgbXQtMVwiPldoYXQncyB3aXRoIHRoZSBkb3RzPzwvaDI+XG4gICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IG1yLTEwIG1kOnB0LTMgZm9udC1tZWRpdW0gdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48bGkgY2xhc3NOYW1lPVwibWQ6Zm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNTAwIGlubGluZSBtci03XCI+SG9tZTwvbGk+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxsaSBjbGFzc05hbWU9XCJtZDpmb250LXNlbWlib2xkIGhvdmVyOnRleHQtZ3JheS01MDAgaW5saW5lIG1yLTdcIj5BYm91dDwvbGk+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxsaSBjbGFzc05hbWU9XCJtZDpmb250LXNlbWlib2xkIGhvdmVyOnRleHQtZ3JheS01MDAgaW5saW5lXCI+Q29udGFjdDwvbGk+PC9hPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBQb3N0UHJldmlldyBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3QtcHJldmlldydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9yZVN0b3JpZXMoeyBwb3N0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItOCB0ZXh0LTZ4bCBtZDp0ZXh0LTd4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlciBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgIE1vcmUgU3Rvcmllc1xuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBtZDpnYXAteC0xNiBsZzpnYXAteC0zMiBnYXAteS0yMCBtZDpnYXAteS0zMiBtYi0zMlwiPlxuICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPFBvc3RQcmV2aWV3XG4gICAgICAgICAgICBrZXk9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgY292ZXJJbWFnZT17cG9zdC5jb3ZlckltYWdlfVxuICAgICAgICAgICAgZGF0ZT17cG9zdC5kYXRlfVxuICAgICAgICAgICAgYXV0aG9yPXtwb3N0LmF1dGhvcn1cbiAgICAgICAgICAgIHNsdWc9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgIGV4Y2VycHQ9e3Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIiwiaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL2F2YXRhcidcbmltcG9ydCBEYXRlRm9ybWF0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZS1mb3JtYXR0ZXInXG5pbXBvcnQgQ292ZXJJbWFnZSBmcm9tICcuL2NvdmVyLWltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0UHJldmlldyh7XG4gIHRpdGxlLFxuICBjb3ZlckltYWdlLFxuICBkYXRlLFxuICBleGNlcnB0LFxuICBhdXRob3IsXG4gIHNsdWcsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICA8Q292ZXJJbWFnZVxuICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHNyYz17Y292ZXJJbWFnZX1cbiAgICAgICAgICBoZWlnaHQ9ezI3OH1cbiAgICAgICAgICB3aWR0aD17NTU2fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItMyBsZWFkaW5nLXNudWdcIj5cbiAgICAgICAgPExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9XCIvcG9zdHMvW3NsdWddXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi00XCI+XG4gICAgICAgIDxEYXRlRm9ybWF0dGVyIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTRcIj57ZXhjZXJwdH08L3A+XG4gICAgICA8QXZhdGFyIG5hbWU9e2F1dGhvci5uYW1lfSBwaWN0dXJlPXthdXRob3IucGljdHVyZX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL21vcmUtc3RvcmllcydcbmltcG9ydCBIZXJvUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8tcG9zdCdcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vbGliL2FwaSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENNU19OQU1FIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoeyBhbGxQb3N0cyB9KSB7XG4gIGNvbnN0IGhlcm9Qb3N0ID0gYWxsUG9zdHNbMF1cbiAgY29uc3QgbW9yZVBvc3RzID0gYWxsUG9zdHMuc2xpY2UoMSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkxlYXJuIFB5dGhvbiB8IFN5bnRheCBNYXR0ZXJzPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxJbnRybyAvPlxuICAgICAgICAgIHtoZXJvUG9zdCAmJiAoXG4gICAgICAgICAgICA8SGVyb1Bvc3RcbiAgICAgICAgICAgICAgdGl0bGU9e2hlcm9Qb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBjb3ZlckltYWdlPXtoZXJvUG9zdC5jb3ZlckltYWdlfVxuICAgICAgICAgICAgICBkYXRlPXtoZXJvUG9zdC5kYXRlfVxuICAgICAgICAgICAgICBhdXRob3I9e2hlcm9Qb3N0LmF1dGhvcn1cbiAgICAgICAgICAgICAgc2x1Zz17aGVyb1Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgZXhjZXJwdD17aGVyb1Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bW9yZVBvc3RzLmxlbmd0aCA+IDAgJiYgPE1vcmVTdG9yaWVzIHBvc3RzPXttb3JlUG9zdHN9IC8+fVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHMgPSBnZXRBbGxQb3N0cyhbXG4gICAgJ3RpdGxlJyxcbiAgICAnZGF0ZScsXG4gICAgJ3NsdWcnLFxuICAgICdhdXRob3InLFxuICAgICdjb3ZlckltYWdlJyxcbiAgICAnZXhjZXJwdCcsXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhbGxQb3N0cyB9LFxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=