exports.id = "components_avatar_js-components_container_js-components_cover-image_js-components_date-format-a2ca56";
exports.ids = ["components_avatar_js-components_container_js-components_cover-image_js-components_date-format-a2ca56"];
exports.modules = {

/***/ "./components/avatar.js":
/*!******************************!*\
  !*** ./components/avatar.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Avatar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\avatar.js";
function Avatar({
  name,
  picture
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: picture,
      className: "w-12 h-12 rounded-full mr-4",
      alt: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-xl font-bold",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\container.js";
function Container({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container mx-auto px-5",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./components/cover-image.js":
/*!***********************************!*\
  !*** ./components/cover-image.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CoverImage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\cover-image.js";



function CoverImage({
  title,
  src,
  slug,
  height,
  width
}) {
  const image = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
    src: src,
    alt: `Cover Image for ${title}`,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('shadow-sm', {
      'hover:shadow-md transition-shadow duration-200': slug
    }),
    layout: "responsive",
    width: width,
    height: height
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "sm:mx-0",
    children: slug ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      as: `/posts/${slug}`,
      href: "/posts/[slug]",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-label": title,
        children: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this) : image
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/date-formatter.js":
/*!**************************************!*\
  !*** ./components/date-formatter.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DateFormatter; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\date-formatter.js";

function DateFormatter({
  dateString
}) {
  const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("time", {
    dateTime: dateString,
    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, 'LLLL	d, yyyy')
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\footer.js";
function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: "flex flex-col justify-center items-center mb-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-wrap text-3xl max-w-lg mb-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "text-gray-600 fas fa-rss mr-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 5,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        rel: "noreferrer noopener nofollow",
        href: "https://www.instagram.com/sm32d",
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "text-red-600 fab fa-instagram mr-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 110
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "text-yellow-700 far fa-envelope-open"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "inline",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: ["Fork maintained with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "text-red-500 fas fa-heart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 42
        }, this), " by\xA0"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        href: "https://www.prodominik.me/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "text-red-600 hover:underline",
          children: "Dominik"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "text-gray-500",
      children: ["Template by\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        rel: "noreferrer noopener nofollow",
        className: "text-gray-800 hover:underline",
        target: "_blank",
        href: "https://github.com/vercel/next.js/tree/canary/examples/blog-starter",
        children: "Next.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meta */ "./components/meta.js");


var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\layout.js";


function Layout({
  preview,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meta__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "min-h-screen",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/meta.js":
/*!****************************!*\
  !*** ./components/meta.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Meta; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");

var _jsxFileName = "C:\\Users\\sulab\\Documents\\Github\\blog_starter\\components\\meta.js";


function Meta() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#000000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "msapplication-TileColor",
      content: "#000000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "msapplication-config",
      content: "/favicon/browserconfig.xml"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "theme-color",
      content: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "alternate",
      type: "application/rss+xml",
      href: "/feed.xml"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "description",
      content: `A statically generated blog example using Next.js and ${_lib_constants__WEBPACK_IMPORTED_MODULE_2__.CMS_NAME}.`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:image",
      content: _lib_constants__WEBPACK_IMPORTED_MODULE_2__.HOME_OG_IMAGE_URL
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPostSlugs": function() { return /* binding */ getPostSlugs; },
/* harmony export */   "getPostBySlug": function() { return /* binding */ getPostBySlug; },
/* harmony export */   "getAllPosts": function() { return /* binding */ getAllPosts; }
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), '_posts');
function getPostSlugs() {
  return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${realSlug}.md`);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8');
  const {
    data,
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  const items = {}; // Ensure only the minimal needed data is exposed

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}
function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug, fields)) // sort posts by date in descending order
  .sort((post1, post2) => post1.date > post2.date ? -1 : 1);
  return posts;
}

/***/ }),

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EXAMPLE_PATH": function() { return /* binding */ EXAMPLE_PATH; },
/* harmony export */   "CMS_NAME": function() { return /* binding */ CMS_NAME; },
/* harmony export */   "HOME_OG_IMAGE_URL": function() { return /* binding */ HOME_OG_IMAGE_URL; }
/* harmony export */ });
const EXAMPLE_PATH = 'blog-starter';
const CMS_NAME = 'Markdown';
const HOME_OG_IMAGE_URL = 'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg';

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvLi9jb21wb25lbnRzL2F2YXRhci5qcyIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvLi9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvLi9jb21wb25lbnRzL2NvdmVyLWltYWdlLmpzIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci8uL2NvbXBvbmVudHMvZGF0ZS1mb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyLy4vY29tcG9uZW50cy9tZXRhLmpzIiwid2VicGFjazovL2Jsb2ctc3RhcnRlci8uL2xpYi9hcGkuanMiLCJ3ZWJwYWNrOi8vYmxvZy1zdGFydGVyLy4vbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXIvaWdub3JlZHxDOlxcVXNlcnNcXHN1bGFiXFxEb2N1bWVudHNcXEdpdGh1YlxcYmxvZ19zdGFydGVyXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQXZhdGFyIiwibmFtZSIsInBpY3R1cmUiLCJDb250YWluZXIiLCJjaGlsZHJlbiIsIkNvdmVySW1hZ2UiLCJ0aXRsZSIsInNyYyIsInNsdWciLCJoZWlnaHQiLCJ3aWR0aCIsImltYWdlIiwiY24iLCJEYXRlRm9ybWF0dGVyIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJwYXJzZUlTTyIsImZvcm1hdCIsIkZvb3RlciIsIkxheW91dCIsInByZXZpZXciLCJNZXRhIiwiQ01TX05BTUUiLCJIT01FX09HX0lNQUdFX1VSTCIsInBvc3RzRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnZXRQb3N0U2x1Z3MiLCJmcyIsImdldFBvc3RCeVNsdWciLCJmaWVsZHMiLCJyZWFsU2x1ZyIsInJlcGxhY2UiLCJmdWxsUGF0aCIsImZpbGVDb250ZW50cyIsImRhdGEiLCJjb250ZW50IiwibWF0dGVyIiwiaXRlbXMiLCJmb3JFYWNoIiwiZmllbGQiLCJnZXRBbGxQb3N0cyIsInNsdWdzIiwicG9zdHMiLCJtYXAiLCJzb3J0IiwicG9zdDEiLCJwb3N0MiIsIkVYQU1QTEVfUEFUSCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQWhCLEVBQW1DO0FBQ2hELHNCQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUVBLE9BQVY7QUFBbUIsZUFBUyxFQUFDLDZCQUE3QjtBQUEyRCxTQUFHLEVBQUVEO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsZ0JBQW9DQTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGMsU0FBU0UsU0FBVCxDQUFtQjtBQUFFQztBQUFGLENBQW5CLEVBQWlDO0FBQzlDLHNCQUFPO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsY0FBeUNBO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGRDtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxVQUFULENBQW9CO0FBQUVDLE9BQUY7QUFBU0MsS0FBVDtBQUFjQyxNQUFkO0FBQW9CQyxRQUFwQjtBQUE0QkM7QUFBNUIsQ0FBcEIsRUFBeUQ7QUFDdEUsUUFBTUMsS0FBSyxnQkFDVCw4REFBQyxtREFBRDtBQUNFLE9BQUcsRUFBRUosR0FEUDtBQUVFLE9BQUcsRUFBRyxt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anMtY29tcG9uZW50c19jb250YWluZXJfanMtY29tcG9uZW50c19jb3Zlci1pbWFnZV9qcy1jb21wb25lbnRzX2RhdGUtZm9ybWF0LWEyY2E1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YXRhcih7IG5hbWUsIHBpY3R1cmUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxpbWcgc3JjPXtwaWN0dXJlfSBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIG1yLTRcIiBhbHQ9e25hbWV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e25hbWV9PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNVwiPntjaGlsZHJlbn08L2Rpdj5cbn1cbiIsImltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdmVySW1hZ2UoeyB0aXRsZSwgc3JjLCBzbHVnLCBoZWlnaHQsIHdpZHRoIH0pIHtcbiAgY29uc3QgaW1hZ2UgPSAoXG4gICAgPEltYWdlXG4gICAgICBzcmM9e3NyY31cbiAgICAgIGFsdD17YENvdmVyIEltYWdlIGZvciAke3RpdGxlfWB9XG4gICAgICBjbGFzc05hbWU9e2NuKCdzaGFkb3ctc20nLCB7XG4gICAgICAgICdob3ZlcjpzaGFkb3ctbWQgdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMjAwJzogc2x1ZyxcbiAgICAgIH0pfVxuICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAvPlxuICApXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbTpteC0wXCI+XG4gICAgICB7c2x1ZyA/IChcbiAgICAgICAgPExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9XCIvcG9zdHMvW3NsdWddXCI+XG4gICAgICAgICAgPGEgYXJpYS1sYWJlbD17dGl0bGV9PntpbWFnZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkgOiAoXG4gICAgICAgIGltYWdlXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVGb3JtYXR0ZXIoeyBkYXRlU3RyaW5nIH0pIHtcbiAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKGRhdGVTdHJpbmcpXG4gIHJldHVybiA8dGltZSBkYXRlVGltZT17ZGF0ZVN0cmluZ30+e2Zvcm1hdChkYXRlLCAnTExMTFx0ZCwgeXl5eScpfTwvdGltZT5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1iLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHRleHQtM3hsIG1heC13LWxnIG1iLTVcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZmFzIGZhLXJzcyBtci01XCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICA8YSByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyIG5vZm9sbG93XCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc20zMmRcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgZmFiIGZhLWluc3RhZ3JhbSBtci01XCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTcwMCBmYXIgZmEtZW52ZWxvcGUtb3BlblwiPjwvaT48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIEZvcmsgbWFpbnRhaW5lZCB3aXRoIDxpIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmYXMgZmEtaGVhcnRcIj48L2k+IGJ5Jm5ic3A7XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5wcm9kb21pbmlrLm1lL1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgaG92ZXI6dW5kZXJsaW5lXCI+RG9taW5pazwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5UZW1wbGF0ZSBieSZuYnNwO1xuICAgICAgICAgICAgPGEgcmVsPVwibm9yZWZlcnJlciBub29wZW5lciBub2ZvbGxvd1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgaG92ZXI6dW5kZXJsaW5lXCIgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL2Jsb2ctc3RhcnRlclwiPlxuICAgICAgICAgICAgTmV4dC5qczwvYT48L3NwYW4+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cbiIsImltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTWV0YSBmcm9tICcuLi9jb21wb25lbnRzL21ldGEnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IHByZXZpZXcsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1ldGEgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ01TX05BTUUsIEhPTUVfT0dfSU1BR0VfVVJMIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0YSgpIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgICBocmVmPVwiL2Zhdmljb24vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgIGhyZWY9XCIvZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZ1wiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nXCJcbiAgICAgIC8+XG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvZmF2aWNvbi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cIm1hc2staWNvblwiXG4gICAgICAgIGhyZWY9XCIvZmF2aWNvbi9zYWZhcmktcGlubmVkLXRhYi5zdmdcIlxuICAgICAgICBjb2xvcj1cIiMwMDAwMDBcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tY29uZmlnXCIgY29udGVudD1cIi9mYXZpY29uL2Jyb3dzZXJjb25maWcueG1sXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCIgaHJlZj1cIi9mZWVkLnhtbFwiIC8+XG4gICAgICA8bWV0YVxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICBjb250ZW50PXtgQSBzdGF0aWNhbGx5IGdlbmVyYXRlZCBibG9nIGV4YW1wbGUgdXNpbmcgTmV4dC5qcyBhbmQgJHtDTVNfTkFNRX0uYH1cbiAgICAgIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17SE9NRV9PR19JTUFHRV9VUkx9IC8+XG4gICAgPC9IZWFkPlxuICApXG59XG4iLCJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXG5cbmNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gam9pbihwcm9jZXNzLmN3ZCgpLCAnX3Bvc3RzJylcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RTbHVncygpIHtcbiAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdEJ5U2x1ZyhzbHVnLCBmaWVsZHMgPSBbXSkge1xuICBjb25zdCByZWFsU2x1ZyA9IHNsdWcucmVwbGFjZSgvXFwubWQkLywgJycpXG4gIGNvbnN0IGZ1bGxQYXRoID0gam9pbihwb3N0c0RpcmVjdG9yeSwgYCR7cmVhbFNsdWd9Lm1kYClcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpXG4gIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKGZpbGVDb250ZW50cylcblxuICBjb25zdCBpdGVtcyA9IHt9XG5cbiAgLy8gRW5zdXJlIG9ubHkgdGhlIG1pbmltYWwgbmVlZGVkIGRhdGEgaXMgZXhwb3NlZFxuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpZiAoZmllbGQgPT09ICdzbHVnJykge1xuICAgICAgaXRlbXNbZmllbGRdID0gcmVhbFNsdWdcbiAgICB9XG4gICAgaWYgKGZpZWxkID09PSAnY29udGVudCcpIHtcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IGNvbnRlbnRcbiAgICB9XG5cbiAgICBpZiAoZGF0YVtmaWVsZF0pIHtcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IGRhdGFbZmllbGRdXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpdGVtc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoZmllbGRzID0gW10pIHtcbiAgY29uc3Qgc2x1Z3MgPSBnZXRQb3N0U2x1Z3MoKVxuICBjb25zdCBwb3N0cyA9IHNsdWdzXG4gICAgLm1hcCgoc2x1ZykgPT4gZ2V0UG9zdEJ5U2x1ZyhzbHVnLCBmaWVsZHMpKVxuICAgIC8vIHNvcnQgcG9zdHMgYnkgZGF0ZSBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgLnNvcnQoKHBvc3QxLCBwb3N0MikgPT4gKHBvc3QxLmRhdGUgPiBwb3N0Mi5kYXRlID8gLTEgOiAxKSlcbiAgcmV0dXJuIHBvc3RzXG59XG4iLCJleHBvcnQgY29uc3QgRVhBTVBMRV9QQVRIID0gJ2Jsb2ctc3RhcnRlcidcbmV4cG9ydCBjb25zdCBDTVNfTkFNRSA9ICdNYXJrZG93bidcbmV4cG9ydCBjb25zdCBIT01FX09HX0lNQUdFX1VSTCA9XG4gICdodHRwczovL29nLWltYWdlLnZlcmNlbC5hcHAvTmV4dC5qcyUyMEJsb2clMjBTdGFydGVyJTIwRXhhbXBsZS5wbmc/dGhlbWU9bGlnaHQmbWQ9MSZmb250U2l6ZT0xMDBweCZpbWFnZXM9aHR0cHMlM0ElMkYlMkZhc3NldHMudmVyY2VsLmNvbSUyRmltYWdlJTJGdXBsb2FkJTJGZnJvbnQlMkZhc3NldHMlMkZkZXNpZ24lMkZuZXh0anMtYmxhY2stbG9nby5zdmcnXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9