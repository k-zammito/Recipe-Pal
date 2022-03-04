"use strict";
(self["webpackChunkstackathon"] = self["webpackChunkstackathon"] || []).push([["client_components_Video_js"],{

/***/ "./client/components/Video.js":
/*!************************************!*\
  !*** ./client/components/Video.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


const Video = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    style: {
      position: 'absolute',
      width: '100%',
      left: '50%',
      top: '50%',
      height: '100%',
      objectFit: 'cover',
      transform: 'translate(-50%, -50%)',
      zIndex: '-1'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    src: 'https://gdurl.com/gQPv',
    type: "video/mp4"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);

/***/ })

}]);
//# sourceMappingURL=client_components_Video_js.bundle.js.map