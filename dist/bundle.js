/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 443);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/zdying/github/hiproxy-plugin-devtools/node_modules/react/index.js'");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/zdying/github/hiproxy-plugin-devtools/node_modules/react-dom/index.js'");

/***/ }),

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1001);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import JSONUtil from './jsonUtils';


var startX = 0;
var maxWidth = void 0,
    minWidth = void 0;
var shouldMove = false;
var throttle = function throttle(fn, delay, mustRunDelay) {
  var timer = null;
  var t_start;
  return function () {
    var context = this,
        args = arguments,
        t_curr = +new Date();
    clearTimeout(timer);
    if (!t_start) {
      t_start = t_curr;
    }
    if (t_curr - t_start >= mustRunDelay) {
      fn.apply(context, args);
      t_start = t_curr;
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }
  };
};

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.state = {
      tab: 'headers',
      dialogWidth: 900,
      viewParsed: true
    };

    document.onmousemove = throttle(_this.onMousemove.bind(_this), 50, 100);
    document.onmouseup = _this.onMouseup.bind(_this);
    return _this;
  }

  _createClass(Dialog, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({
        //tab: 'headers',
        viewParsed: true
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var block = document.getElementById('js-code');
      // var text = block && block.textContent || '';
      // block && text.length < 20 * 1024 && hljs.highlightBlock(block);
    }
  }, {
    key: 'onMousedown',
    value: function onMousedown(eve) {
      shouldMove = true;
      maxWidth = 1200;
      minWidth = 100;
      startX = eve.clientX;
      eve.preventDefault();
    }
  }, {
    key: 'onMousemove',
    value: function onMousemove(eve) {
      if (!shouldMove) {
        return;
      }
      var clientX = eve.clientX;

      var delta = startX - clientX;
      startX = startX - delta;
      var width = parseInt(document.querySelector('.dialog').style.width);
      width += delta;
      width = width < minWidth ? minWidth : width > maxWidth ? maxWidth : width;
      document.querySelector('.dialog').style.width = width + 'px';
    }
  }, {
    key: 'onMouseup',
    value: function onMouseup() {
      shouldMove = false;
    }
  }, {
    key: 'changeViewJson',
    value: function changeViewJson() {
      var viewParsed = this.state.viewParsed;
      this.setState({ viewParsed: !viewParsed });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          showRequestDetail = _props.showRequestDetail,
          requestDetail = _props.requestDetail,
          onClose = _props.onClose;

      var tab = this.state.tab;
      if (!showRequestDetail) {
        return null;
      }
      var t = requestDetail;

      var content = function content() {
        if (tab === 'headers') {
          return _react2.default.createElement(
            'section',
            { className: 'body' },
            _react2.default.createElement(
              'h3',
              { className: 'header' },
              'General'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'list' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Request URL:'
                ),
                '  ',
                t.url.href
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Proxy URL:'
                ),
                '  ',
                t.newUrl
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Request Method:'
                ),
                ' ',
                t.method
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Status Code:'
                ),
                ' ',
                t.statusCode
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Remote Address:'
                ),
                ' ',
                t.hostname
              )
            ),
            _react2.default.createElement(
              'h3',
              { className: 'header' },
              'Response Headers'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'list' },
              parseData(t.resHeaders)
            ),
            _react2.default.createElement(
              'h3',
              { className: 'header' },
              'Request Headers'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'list' },
              parseData(t.headers)
            ),
            _this2.renderParams(t)
          );
        } else if (tab === 'response') {
          // 获取content-type
          var resHeaders = t.resHeaders;

          var contentType = resHeaders['content-type'] || '';
          var fileType = contentType.split(';')[0].split('/')[1] || '';

          fileType = fileType.trim();

          if (fileType === 'x-javascript') {
            fileType = 'javascript';
          } else if (fileType === 'x-ico' || fileType === 'x-icon') {
            fileType = 'ico';
          }

          var targetURL = t.protocol + '//' + t.hostname + (t.port ? ':' + t.port : '') + t.path;

          if (/^(html|css|javascript|json|text)$/.test(fileType)) {
            if (t.originLength > 1 * 1024 * 1024) {
              return _react2.default.createElement(
                'div',
                { style: { padding: '10px' } },
                '\u6587\u4EF6\u5185\u5BB9\u592A\u957F\uFF0C',
                _react2.default.createElement(
                  'a',
                  { href: targetURL, target: '_blank' },
                  '\u70B9\u51FB\u6B64\u5904'
                ),
                '\u5728\u65B0\u7A97\u53E3\u4E2D\u6253\u5F00\u3002'
              );
            } else {
              var data = t.socketData;

              if (fileType === 'json') {
                try {
                  data = JSON.stringify(JSON.parse(t.socketData), null, 2);
                } catch (err) {
                  // ...
                  data = t.socketData;
                }
              }
              return _react2.default.createElement(
                'pre',
                { className: 'code', id: 'js-code' },
                _react2.default.createElement(
                  'code',
                  { className: fileType },
                  data
                )
              );
            }
          } else if (/^(png|jpg|jpeg|gif|ico|svg\+xml)$/.test(fileType)) {
            return _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement('img', { src: targetURL })
            );
          } else {
            return _react2.default.createElement(
              'div',
              { style: { padding: '10px' } },
              '\u6682\u65F6\u4E0D\u652F\u6301\u6B64\u7C7B\u578B\u6587\u4EF6\u9884\u89C8\uFF0C',
              _react2.default.createElement(
                'a',
                { href: targetURL, target: '_blank' },
                '\u70B9\u51FB\u6B64\u5904'
              ),
              '\u5728\u65B0\u7A97\u53E3\u4E2D\u6253\u5F00\u3002'
            );
          }
        }
      };

      return _react2.default.createElement(
        'div',
        { className: 'dialog', style: { width: this.state.dialogWidth + 'px' } },
        _react2.default.createElement('div', { id: 'spliter',
          onMouseDown: this.onMousedown.bind(this)
        }),
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
            { className: 'close', onClick: this.close.bind(this) },
            '\xD7'
          ),
          _react2.default.createElement(
            'div',
            { className: tab === 'headers' ? 'tab active' : 'tab',
              onClick: this.switchTab.bind(this, 'headers') },
            'Headers'
          ),
          _react2.default.createElement(
            'div',
            { className: tab === 'response' ? 'tab active' : 'tab',
              onClick: this.switchTab.bind(this, 'response') },
            'Response'
          )
        ),
        content()
      );
    }
  }, {
    key: 'renderParams',
    value: function renderParams(t) {
      var bodyType = getBodyType(t);
      var method = t.method.toLocaleLowerCase();
      var bodyOrqs = method === 'get' ? t.querystring : t.body;
      var bodyData = getBody(t);
      var body = '';
      var viewParsed = this.state.viewParsed;


      if (!bodyType || !bodyData) {
        return null;
      }

      if (bodyType === 'Request Payload' || !viewParsed) {
        body = _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            viewParsed ? bodyData : bodyOrqs
          )
        );
      } else {
        body = _react2.default.createElement(
          'ul',
          { className: 'list' },
          bodyData
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'header' },
          bodyType,
          _react2.default.createElement(
            'span',
            {
              style: { marginLeft: '20px', fontSize: '12px', color: '#838383' },
              onClick: this.changeViewJson.bind(this)
            },
            viewParsed ? 'view source' : 'view parsed'
          )
        ),
        body
      );
    }
  }, {
    key: 'close',
    value: function close(eve) {
      var onClose = this.props.onClose;


      onClose && onClose();
    }
  }, {
    key: 'switchTab',
    value: function switchTab(tab) {
      this.setState({ tab: tab });
    }
  }, {
    key: 'showRequestDetail',
    value: function showRequestDetail(item) {
      this.setState({
        showRequestDetail: true,
        requestDetail: item
      });
    }
  }]);

  return Dialog;
}(_react.Component);

exports.default = Dialog;


function parseData(data) {
  var result = [];

  for (var key in data) {
    result.push(_react2.default.createElement(
      'li',
      { key: key },
      _react2.default.createElement(
        'strong',
        null,
        key
      ),
      ' : ',
      data[key]
    ));
  }

  return result;
}

function getQueryObjFromURL(params) {
  if (!params) {
    return null;
  }

  var res = {};
  var fields = params.split('&');

  fields.forEach(function (field) {
    var kv = field.split('=');
    var key = kv[0];
    var value = kv.slice(1).join('=');

    if (key) {
      if (key in res) {
        res[key] = [].concat(res[key], value);
      } else {
        res[key] = decodeURIComponent(value);
      }
    }
  });

  return res;
}

function getBody(t) {
  var isJson = false;
  var body = t.body;
  var querystring = t.querystring;
  var data = null;
  var method = t.method.toLocaleLowerCase();
  var contentType = t.headers['content-type'] || '';
  var isJSON = contentType.indexOf('json') !== -1;

  if (method === 'get') {
    data = getQueryObjFromURL(querystring);
  } else if (method === 'post') {
    if (isJSON) {
      try {
        data = JSON.parse(body);
      } catch (e) {
        isJSON = false;
        data = getQueryObjFromURL(body);
      }
    } else {
      data = getQueryObjFromURL(body);
    }
  }

  return isJSON ? JSON.stringify(data, null, 2) : parseData(data);
}

function getBodyType(ctx) {
  var method = ctx.method.toLocaleLowerCase();
  if (method === 'get') {
    return 'Query String Paramenters';
  }

  if (method == 'post') {
    var isJson = false;
    try {
      JSON.parse(ctx.body);
      isJson = true;
    } catch (e) {}

    return isJson ? 'Request Payload' : 'Form data';
  }

  return null;
}

/***/ }),

/***/ 1001:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1002:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/zdying/github/hiproxy-plugin-devtools/node_modules/socket.io-client/lib/index.js'");

/***/ }),

/***/ 1024:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/zdying/github/hiproxy-plugin-devtools/node_modules/antd/dist/antd.css'\n    at runLoaders (/Users/zdying/github/hiproxy-plugin-devtools/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/zdying/github/hiproxy-plugin-devtools/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/zdying/github/hiproxy-plugin-devtools/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/zdying/github/hiproxy-plugin-devtools/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/zdying/github/hiproxy-plugin-devtools/node_modules/redux/es/index.js'");

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/zdying/github/hiproxy-plugin-devtools/node_modules/react-redux/es/index.js'");

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onArrive = onArrive;
exports.clearAll = clearAll;
var Actions = exports.Actions = {
  'ON_ARRIVE': 'ON_ARRIVE',
  'CLEAR': 'CLEAR'
};

function onArrive(request) {
  return function (dispatch) {
    dispatch({
      type: Actions.ON_ARRIVE,
      data: request
    });
  };
}

function clearAll() {
  'use strict';

  return function (dispatch) {
    dispatch({
      type: Actions.CLEAR
    });
  };
}

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/zdying/github/hiproxy-plugin-devtools/node_modules/antd/es/index.js'");

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _redux = __webpack_require__(175);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactRedux = __webpack_require__(183);

var _reducer = __webpack_require__(479);

var _reducer2 = _interopRequireDefault(_reducer);

var _reduxThunk = __webpack_require__(480);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _page = __webpack_require__(481);

var _page2 = _interopRequireDefault(_page);

__webpack_require__(1024);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

var mainRender = function mainRender() {
  (0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: Store },
    _react2.default.createElement(_page2.default, null)
  ), document.querySelector('#app'));
};

mainRender();

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = __webpack_require__(188);

var initState = {
  requests: []
};

function HomeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case _action.Actions.ON_ARRIVE:

      return Object.assign({}, state, {
        requests: state.requests.concat([action.data]).slice(-200)
      });

      break;
    case _action.Actions.CLEAR:
      return initState;
    default:
      return state;
  }
}

exports.default = HomeReducer;

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/zdying/github/hiproxy-plugin-devtools/node_modules/redux-thunk/lib/index.js'");

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(183);

var _action = __webpack_require__(188);

var _table = __webpack_require__(482);

var _dialog = __webpack_require__(1000);

var _dialog2 = _interopRequireDefault(_dialog);

var _socket = __webpack_require__(1002);

var _socket2 = _interopRequireDefault(_socket);

var _antd = __webpack_require__(189);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      showRequestDetail: false,
      requestDetail: null
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.ios = _socket2.default;
      var socket = _socket2.default.connect('http://127.0.0.1:9998');
      socket.on('pageReady', function (data) {
        _this2.setState(data);
      });

      socket.on('data', function (data) {
        var length = data.toString().length;
        var maxLen = 1 * 1024 * 1024;
        var obj = JSON.parse(data);
        var socketData = obj.socketData || '';
        var path = obj.path;
        var isSocketIOURL = /^\/(socket\.io|devtools)/.test(path);

        if (isSocketIOURL) {
          console.warn('socket.io本身的请求，忽略');
          return;
        }

        obj.originLength = socketData.length;

        if (socketData.length > maxLen) {
          obj.socketData = '内容太长，无法查看！';
        }

        _this2.props.onArrive(obj);
      });

      socket.on('connectreq', function (data) {
        if (data.hostname === '127.0.0.1' && data.port === '9998') {
          // 忽略插件本身的请求
        } else {
          _this2.props.onArrive(data);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var reqRows = document.querySelectorAll('.request-row');
      var len = reqRows.length;
      var isClick = this.isClick;

      // 如果不是隐藏click导致的渲染，滚动到最后

      if (len && !isClick) {
        reqRows[len - 1].scrollIntoView();
      }

      if (isClick) {
        this.isClick = false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref = this.state || {},
          proxyPath = _ref.proxyPath,
          sslPath = _ref.sslPath;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _antd.Menu,
          { mode: 'horizontal', selectedKeys: ['1'], theme: 'dark' },
          _react2.default.createElement(
            _antd.Menu.Item,
            { key: 'mail' },
            'hiproxy-plugin-devtools'
          ),
          _react2.default.createElement(
            _antd.Menu.Item,
            null,
            _react2.default.createElement(
              'a',
              { onClick: this.props.clearAll },
              _react2.default.createElement(_antd.Icon, { type: 'delete' }),
              'Clear'
            )
          ),
          _react2.default.createElement(
            _antd.Menu.Item,
            null,
            _react2.default.createElement(
              'a',
              { href: proxyPath },
              _react2.default.createElement(_antd.Icon, { type: 'file-text' }),
              'PAC File'
            )
          ),
          _react2.default.createElement(
            _antd.Menu.Item,
            null,
            _react2.default.createElement(
              'a',
              { href: sslPath },
              _react2.default.createElement(_antd.Icon, { type: 'cloud-download' }),
              'SSL Certificate'
            )
          ),
          _react2.default.createElement(
            _antd.Menu.Item,
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/hiproxy/hiproxy-plugin-devtools', target: '_blank' },
              _react2.default.createElement(_antd.Icon, { type: 'github' }),
              'GitHub'
            )
          )
        ),
        _react2.default.createElement(_table.Tables, {
          data: this.props.requests,
          showRequestDetail: this.showRequestDetail.bind(this),
          currIndex: this.state.currIndex
        }),
        _react2.default.createElement(_dialog2.default, {
          showRequestDetail: this.state.showRequestDetail,
          requestDetail: this.state.requestDetail,
          onClose: this.onClose.bind(this)
        })
      );
    }
  }, {
    key: 'showRequestDetail',
    value: function showRequestDetail(item) {
      var id = item.id,
          key = item.key;


      this.isClick = true;

      this.setState({
        showRequestDetail: true,
        requestDetail: this.props.requests[item.key],
        currIndex: id
      });
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      this.setState({
        currIndex: -1,
        showRequestDetail: false
      });
    }
  }]);

  return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    requests: state.requests
  };
};

var mapDispatchToProps = {
  onArrive: _action.onArrive,
  clearAll: _action.clearAll
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tables = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(189);

var _reactFileIcon = __webpack_require__(997);

var _reactFileIcon2 = _interopRequireDefault(_reactFileIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var source = {
  'text/plain': '',
  'stylesheet': 'css',
  'font': '',
  'xhr': '',
  'image': /(jpg|jpeg|bmp|png|svg|gif)/,
  'javascript': 'javascript',
  'json': 'json',
  'document': 'html'
};

var columns = [/*{
               title: 'ID',
               dataIndex: 'id',
               key: 'id',
               width: 20
               }, */{
  title: 'Name',
  dataIndex: 'name',
  width: 200,
  key: 'name',
  render: function render(val, record) {
    var value = val[0];
    var fileType = val[1];
    var arr = value.split('/');
    var name = arr.pop() || '';
    var path = arr.join('/');

    if (!path) {
      name = value;
    }
    name = decodeURIComponent(name);

    if (path.length > 80) {
      path = path.substr(0, 80) + '...';
    }

    if (name.length > 80) {
      name = name.substr(0, 80) + '...';
    }

    return _react2.default.createElement(
      'div',
      { className: 'req-path', title: val[0] },
      _react2.default.createElement('img', { src: "icons/" + fileType + '.png' }),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          { className: 'name' },
          name
        ),
        _react2.default.createElement(
          'p',
          { className: 'path' },
          path
        )
      )
    );
  }
}, {
  title: 'Method',
  dataIndex: 'method',
  key: 'method',
  width: 45
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
  width: 45
}, {
  title: 'Scheme',
  dataIndex: 'protocol',
  key: 'protocol',
  width: 45
}, {
  title: 'Domain',
  dataIndex: 'address',
  key: 'address',
  width: 80
}, {
  title: 'Target Address',
  dataIndex: 'targetAddress',
  key: 'targetAddress',
  width: 70
}, {
  title: 'Target Path',
  dataIndex: 'targetPath',
  key: 'targetPath',
  width: 100,
  render: function render(val, record) {
    var originVal = val;

    if (val.length > 80) {
      val = val.substr(0, 80) + '...';
    }

    return _react2.default.createElement(
      'div',
      { className: 'req-path', title: originVal },
      val
    );
  }
}, {
  title: 'Type',
  dataIndex: 'type',
  key: 'type',
  width: 50
}, {
  title: 'Size',
  dataIndex: 'size',
  key: 'size',
  width: 50
}, {
  title: 'Time',
  dataIndex: 'time',
  key: 'time',
  width: 50
}];

var files = ['css', 'file', 'html', 'javascript', 'jpg', 'png', 'pdf', 'json', 'svg', 'gif', 'ico', 'txt', 'xml', 'zip'];

var Tables = exports.Tables = function Tables(props) {
  var dataSource = props.data && props.data.map(function (t, index) {
    var _t$resHeaders = t.resHeaders,
        resHeaders = _t$resHeaders === undefined ? {} : _t$resHeaders,
        _t$socketData = t.socketData,
        socketData = _t$socketData === undefined ? '' : _t$socketData,
        statusCode = t.statusCode,
        url = t.url,
        method = t.method,
        hostname = t.hostname,
        port = t.port,
        path = t.path,
        time = t.time;

    var contentType = resHeaders['content-type'] || '';
    var fileType = contentType.split(';')[0].split('/')[1] || '';
    var length = resHeaders['content-length'] || socketData.length;

    // console.log('t', t);

    if (t.type === 'connect') {
      return {
        key: index,
        name: ['UNKNOW', 'ssl-error'],
        id: index,
        method: 'CONNECT',
        protocol: 'HTTPS',
        status: '',
        address: hostname + ':' + port,
        targetAddress: '',
        targetPath: '',
        type: '',
        size: 'N/A',
        time: 'N/A'
      };
    }

    fileType = fileType.trim();

    if (fileType.indexOf('+')) {
      fileType = fileType.split('+')[0];
    }

    if (fileType === 'jpeg') {
      fileType = 'jpg';
    } else if (fileType === 'x-javascript') {
      fileType = 'javascript';
    } else if (fileType === 'x-ico' || fileType === 'x-icon') {
      fileType = 'ico';
    }

    if (files.indexOf(fileType) === -1) {
      fileType = 'file';
    }

    var host = url.host,
        _url$protocol = url.protocol,
        protocol = _url$protocol === undefined ? '' : _url$protocol;


    return {
      key: index,
      name: [t.path, fileType],
      id: index,
      method: method,
      protocol: protocol.replace(':', '').toUpperCase(),
      status: statusCode,
      address: host,
      targetAddress: hostname + (port ? ':' + port : ''),
      targetPath: path,
      type: getContentType(contentType),
      size: getSizeLabel(length),
      time: getTimeLabel(time)
    };
  });

  return _react2.default.createElement(_antd.Table, {
    bordered: true,
    dataSource: dataSource,
    pagination: false,
    columns: columns,
    onRowClick: props.showRequestDetail,
    scroll: { y: window.innerHeight - 100 },
    rowClassName: function rowClassName(record, index) {
      return 'request-row' + (props.currIndex === index ? ' active' : '');
    }
  });
};

function getContentType(contentType) {
  for (var key in source) {
    var types = source[key];

    if (types) {
      if (typeof types === 'string') {
        if (contentType.indexOf(types) !== -1) {
          return key;
        }
      } else if (typeof types.test === 'function') {
        if (types.test(contentType)) {
          return key;
        }
      }
    }
  }

  return '';
}

function getSizeLabel(num) {
  var k = num / 1024;
  var m = k / 1024;

  if (m > 1) {
    return m.toFixed(2) + ' MB';
  } else if (k > 1) {
    return k.toFixed(2) + ' KB';
  } else {
    return num + ' B';
  }
}

function getTimeLabel(time) {
  var s = time / 1000;

  if (s > 1) {
    return s.toFixed(1) + ' s';
  } else {
    return time + ' ms';
  }
}

/***/ }),

/***/ 997:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/zdying/github/hiproxy-plugin-devtools/node_modules/react-file-icon/dist/main.js'");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map