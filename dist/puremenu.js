(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["PureMenu"] = factory(require("react"));
	else
		root["PureMenu"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1);
	module.exports.List = __webpack_require__(2);
	module.exports.Heading = __webpack_require__(3);
	module.exports.Item = __webpack_require__(4);
	module.exports.Link = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var classNames = __webpack_require__(7);
	var React = __webpack_require__(6);


	module.exports = React.createClass({
	    displayName: 'Menu',

	    propTypes: {
	        horizontal: React.PropTypes.bool,
	        scrollable: React.PropTypes.bool,
	    },

	    getDefaultProps:function() {
	      return {
	        horizontal: false,
	        scrollable: false,
	      };
	    },

	    render: function() {
	        var $__0=     this.props,className=$__0.className,horizontal=$__0.horizontal,scrollable=$__0.scrollable,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1,horizontal:1,scrollable:1});
	        var horizontalClass = horizontal && 'pure-menu-horizontal';
	        var scrollableClass = scrollable && 'pure-menu-scrollable';

	        return (
	            React.createElement("div", React.__spread({className: 
	                classNames('pure-menu', className, horizontalClass, scrollableClass)
	            },  props), props.children)
	        );
	    },
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var classNames = __webpack_require__(7);
	var React = __webpack_require__(6);


	module.exports = React.createClass({
	    displayName: 'MenuList',

	    render: function() {
	        var $__0=   this.props,className=$__0.className,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1});

	        return (
	            React.createElement("ul", React.__spread({className: classNames('pure-menu-list', className)},  props), props.children)
	        );
	    },
	});


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var classNames = __webpack_require__(7);
	var React = __webpack_require__(6);


	module.exports = React.createClass({
	    displayName: 'MenuHeading',

	    render: function() {
	        var $__0=   this.props,className=$__0.className,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1});

	        return (
	            React.createElement("span", React.__spread({className: classNames('pure-menu-heading', className)},  props), props.children)
	        );
	    },
	});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var classNames = __webpack_require__(7);
	var React = __webpack_require__(6);

	module.exports = React.createClass({
	    displayName: 'MenuItem',

	    propTypes: {
	        disabled: React.PropTypes.bool,
	        selected: React.PropTypes.bool,
	    },

	    getDefaultProps:function() {
	      return {
	        disabled: false,
	        selected: false,
	      };
	    },

	    render: function() {
	        var $__0=     this.props,className=$__0.className,disabled=$__0.disabled,selected=$__0.selected,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1,disabled:1,selected:1});
	        var disabledClass= disabled && 'pure-menu-disabled';
	        var selectedClass = selected && 'pure-menu-selected';

	        return (
	            React.createElement("li", React.__spread({className: 
	                classNames('pure-menu-item', className, disabledClass, selectedClass)
	            },  props), props.children)
	        );
	    },
	});


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var classNames = __webpack_require__(7);
	var React = __webpack_require__(6);


	module.exports = React.createClass({
	    displayName: 'MenuLink',

	    render: function() {
	        var $__0=   this.props,className=$__0.className,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1});

	        return (
	            React.createElement("a", React.__spread({className: classNames('pure-menu-link', className)},  props), 
	                props.children
	            )
	        );
	    },
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames in case the script is included directly on a page
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}


/***/ }
/******/ ])
});
;