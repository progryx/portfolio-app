module.exports.timer =
(function() {
var exports = {};
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 7897:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var moduleMap = {
	"./TimerApp": function() {
		return __webpack_require__.e(358).then(function() { return function() { return (__webpack_require__(5358)); }; });
	}
};
var get = function(module, getScope) {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(function() {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = function(shareScope, initScope) {
	if (!__webpack_require__.S) return;
	var oldScope = __webpack_require__.S["default"];
	var name = "default"
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: function() { return get; },
	init: function() { return init; }
});

/***/ }),

/***/ 4546:
/***/ (function(module) {

"use strict";
module.exports = require("/study/portfolio-app/node_modules/@module-federation/nextjs-mf/react.js");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
return __webpack_require__.X([], 7897);
})();