(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4)
	__webpack_require__(8)
	var $app_template$ = __webpack_require__(12)
	var $app_style$ = __webpack_require__(13)
	var $app_script$ = __webpack_require__(14)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(5)
	var $app_style$ = __webpack_require__(6)
	var $app_script$ = __webpack_require__(7)
	
	$app_define$('@app-component/bslist', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "attr": {},
	  "classList": [
	    "tutorial-page"
	  ],
	  "events": {
	    "scrollbottom": "renderMoreListItem"
	  },
	  "children": [
	    {
	      "type": "block",
	      "attr": {},
	      "repeat": function () {return this.productList},
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "image"
	          },
	          "shown": function () {return this.$item.video},
	          "classList": [
	            "content-item"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.$item.text}
	                  },
	                  "classList": [
	                    "text"
	                  ]
	                },
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.$item.thumbnail}
	                  },
	                  "classList": [
	                    "image"
	                  ]
	                },
	                {
	                  "type": "video",
	                  "attr": {
	                    "src": function () {return this.$item.video}
	                  },
	                  "classList": [
	                    "video"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "video"
	          },
	          "shown": function () {return !(this.$item.video)},
	          "classList": [
	            "content-item"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.$item.text}
	                  },
	                  "classList": [
	                    "text"
	                  ]
	                },
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.$item.thumbnail}
	                  },
	                  "classList": [
	                    "image"
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "list-item",
	      "attr": {
	        "type": "loadStatus"
	      },
	      "classList": [
	        "load-status"
	      ],
	      "children": [
	        {
	          "type": "progress",
	          "attr": {
	            "type": "circular",
	            "show": function () {return this.hasMoreData}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "show": function () {return this.hasMoreData},
	            "value": "加载更多"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "show": function () {return !this.hasMoreData},
	            "value": "没有更多了~"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  ".tutorial-page": {
	    "backgroundColor": "#c7c7c7"
	  },
	  ".content-item": {
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px"
	  },
	  ".item": {
	    "width": "100%",
	    "height": "100%",
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px",
	    "backgroundColor": "#ffffff",
	    "color": "#000000",
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".text": {
	    "width": "100%",
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px"
	  },
	  ".image": {
	    "width": "100%",
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px"
	  },
	  ".video": {
	    "width": "100%",
	    "height": "100%",
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px"
	  },
	  ".load-status": {
	    "textAlign": "center",
	    "color": "#74e3ff"
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.fetch');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    productList: [],
	    hasMoreData: true,
	
	    page: 1,
	
	    isLoadingData: false
	  },
	  onInit: function onInit() {
	    this.getInitData();
	  },
	  getInitData: function getInitData() {
	    this.isLoadingData = true;
	    var self = this;
	    _system4.default.fetch({
	      url: 'https://www.apiopen.top/satinGodApi?type=1&page=' + self.page,
	      method: 'get',
	      success: function success(res) {
	        self.isLoadingData = false;
	        self.hasMoreData = false;
	        var d = JSON.parse(res.data);
	        console.log(d);
	        if (d.code == '200') {
	          console.log('状态成功');
	          var dd = d.data;
	          for (var item in dd) {
	            self.productList.push(dd[item]);
	          }
	        }
	      },
	      fail: function fail() {
	        console.log('失败');
	      }
	    });
	  },
	  renderMoreListItem: function renderMoreListItem() {
	    if (!this.isLoadingData) {
	      this.page++;
	      this.getInitData();
	    }
	  }
	};}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(9)
	var $app_style$ = __webpack_require__(10)
	var $app_script$ = __webpack_require__(11)
	
	$app_define$('@app-component/imglist', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "attr": {},
	  "classList": [
	    "tutorial-page"
	  ],
	  "events": {
	    "scrollbottom": "renderMoreListItem"
	  },
	  "children": [
	    {
	      "type": "block",
	      "attr": {},
	      "repeat": function () {return this.productList},
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "product"
	          },
	          "classList": [
	            "content-item"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.$item.url}
	                  },
	                  "classList": [
	                    "image"
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "list-item",
	      "attr": {
	        "type": "loadStatus"
	      },
	      "classList": [
	        "load-status"
	      ],
	      "children": [
	        {
	          "type": "progress",
	          "attr": {
	            "type": "circular",
	            "show": function () {return this.hasMoreData}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "show": function () {return this.hasMoreData},
	            "value": "加载更多"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "show": function () {return !this.hasMoreData},
	            "value": "没有更多了~"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  ".content-item": {
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px"
	  },
	  ".item": {
	    "width": "100%",
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px",
	    "backgroundColor": "#ffd100",
	    "color": "#000000"
	  },
	  ".image": {
	    "width": "100%"
	  },
	  ".loading": {
	    "textAlign": "center",
	    "color": "#74e3ff"
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.fetch');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    productList: [],
	    hasMoreData: true,
	
	    page: 1,
	
	    isLoadingData: false
	  },
	  onInit: function onInit() {
	    this.getInitData();
	  },
	  getInitData: function getInitData() {
	    this.isLoadingData = true;
	    var self = this;
	    _system4.default.fetch({
	      url: 'https://www.apiopen.top/meituApi?page=' + self.page,
	      method: 'get',
	      success: function success(res) {
	        self.isLoadingData = false;
	        self.hasMoreData = false;
	        var d = JSON.parse(res.data);
	        console.log(d);
	        if (d.code == '200') {
	          console.log('状态成功');
	          var dd = d.data;
	          for (var item in dd) {
	            self.productList.push(dd[item]);
	          }
	        }
	      },
	      fail: function fail() {
	        console.log('失败');
	      }
	    });
	  },
	  renderMoreListItem: function renderMoreListItem() {
	    if (!this.isLoadingData) {
	      this.page++;
	      this.getInitData();
	    }
	  }
	};}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "tutorial-page"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "flexible-tabs"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "flexible-tabbar"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "bs"
	              },
	              "classList": function () {return [this.currentIndex===0?'active':'']},
	              "events": {
	                "click": function (evt) {this.clickTabBar(0,evt)}
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "image"
	              },
	              "classList": function () {return [this.currentIndex===1?'active':'']},
	              "events": {
	                "click": function (evt) {this.clickTabBar(1,evt)}
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "other"
	              },
	              "classList": function () {return [this.currentIndex===2?'active':'']},
	              "events": {
	                "click": function (evt) {this.clickTabBar(2,evt)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "tabs",
	          "attr": {
	            "index": function () {return this.currentIndex}
	          },
	          "events": {
	            "change": "changeTabactive"
	          },
	          "children": [
	            {
	              "type": "tab-content",
	              "attr": {},
	              "classList": [
	                "flexible-tab-content"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "bslist",
	                      "attr": {}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "imglist",
	                      "attr": {}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "3333333333333"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  ".tutorial-page": {
	    "flex": 1
	  },
	  ".tutorial-page .flexible-tabs": {
	    "flex": 1,
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tutorial-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        }
	      ]
	    }
	  },
	  ".tutorial-page .flexible-tabs .flexible-tabbar": {
	    "height": "100px",
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "0px",
	    "paddingLeft": "30px",
	    "backgroundColor": "#f1f1f1",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tutorial-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
	        }
	      ]
	    }
	  },
	  ".tutorial-page .flexible-tabs .flexible-tabbar text": {
	    "flexGrow": 1,
	    "height": "100px",
	    "marginTop": "0px",
	    "marginRight": "30px",
	    "marginBottom": "0px",
	    "marginLeft": "30px",
	    "textAlign": "center",
	    "borderTopWidth": "0px",
	    "borderRightWidth": "0px",
	    "borderBottomWidth": "5px",
	    "borderLeftWidth": "0px",
	    "borderStyle": "solid",
	    "borderTopColor": "#f1f1f1",
	    "borderRightColor": "#f1f1f1",
	    "borderBottomColor": "#f1f1f1",
	    "borderLeftColor": "#f1f1f1",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tutorial-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".tutorial-page .flexible-tabs .flexible-tabbar .active": {
	    "color": "#0faeff",
	    "borderBottomColor": "#0faeff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tutorial-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "active"
	        }
	      ]
	    }
	  },
	  ".tutorial-page .flexible-tabs .flexible-tab-content": {
	    "flex": 1,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tutorial-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tab-content"
	        }
	      ]
	    }
	  },
	  ".tutorial-page .flexible-tabs .flexible-tab-content .tab-content-section": {
	    "flex": 1,
	    "backgroundColor": "#ffffff",
	    "justifyContent": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tutorial-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tab-content"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-content-section"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$("@app-module/system.router");
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  private: {
	    currentIndex: 0,
	    tabs: [{
	      "name": "前端",
	      "tag": "前端"
	    }, {
	      "name": "Android",
	      "tag": "Android"
	    }, {
	      "name": "iOS",
	      "tag": "iOS"
	    }]
	  },
	  onInit: function onInit() {
	    this.$page.setTitleBar({ text: '妙乎' });
	  },
	  changeTabactive: function changeTabactive(evt) {
	    this.currentIndex = evt.index;
	  },
	  clickTabBar: function clickTabBar(index) {
	    this.currentIndex = index;
	  },
	  routePage: function routePage(param) {
	    _system2.default.push({
	      uri: 'ComponentTabs/complex/' + param
	    });
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map