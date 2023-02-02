window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  FBSDK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01b27nUArJKmJPk75VUAhvc", "FBSDK");
    "use strict";
    (function _(a, b, c, d, e) {
      var f = window.console;
      f && Math.floor(new Date().getTime() / 1e3) - b > 604800 && f.warn("The Facebook JSSDK is more than 7 days old.");
      if (window[c]) return;
      if (!window.JSON) return;
      var g = window[c] = {
        __buffer: {
          replay: function replay() {
            var a = this, b = function b(d) {
              var b = window[c];
              a.calls[d][0].split(".").forEach(function(a) {
                return b = b[a];
              });
              b.apply(null, a.calls[d][1]);
            };
            for (var d = 0; d < this.calls.length; d++) b(d);
            this.calls = [];
          },
          calls: [],
          opts: null
        },
        getUserID: function getUserID() {
          return "";
        },
        getAuthResponse: function getAuthResponse() {
          return null;
        },
        getAccessToken: function getAccessToken() {
          return null;
        },
        init: function init(a) {
          g.__buffer.opts = a;
        }
      };
      for (b = 0; b < d.length; b++) {
        f = d[b];
        if (f in g) continue;
        var h = f.split("."), i = h.pop(), j = g;
        for (var k = 0; k < h.length; k++) j = j[h[k]] || (j[h[k]] = {});
        j[i] = function(a) {
          if ("init" === a) return;
          return function() {
            g.__buffer.calls.push([ a, Array.prototype.slice.call(arguments) ]);
          };
        }(f);
      }
      k = document.createElement("script");
      k.src = a;
      k.async = !0;
      e && (k.crossOrigin = "anonymous");
      h = document.getElementsByTagName("script")[0];
      h.parentNode && h.parentNode.insertBefore(k, h);
    })("https://connect.facebook.net/en_US/sdk.js?hash=ca973832d85233cf58c07f68ffa6c55b", 1675162631, "FB", [ "AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.clearAppVersion", "AppEvents.clearUserID", "AppEvents.getAppVersion", "AppEvents.getUserID", "AppEvents.logEvent", "AppEvents.logPageView", "AppEvents.logPurchase", "AppEvents.setAppVersion", "AppEvents.setUserID", "AppEvents.updateUserProperties", "Canvas.Plugin.showPluginElement", "Canvas.Plugin.hidePluginElement", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.startTimer", "Canvas.stopTimer", "Event.subscribe", "Event.unsubscribe", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui" ], true);
    cc._RF.pop();
  }, {} ],
  LoginFacebook: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "179abhZjMxCrJ1F1K2+ZJho", "LoginFacebook");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  LoginScreen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b5ffJw+CRHUp+gya5Qo5hr", "LoginScreen");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoginScreen = function(_super) {
      __extends(LoginScreen, _super);
      function LoginScreen() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeLayoutLogin = null;
        _this.nodeLayoutSignIn = null;
        return _this;
      }
      LoginScreen.prototype.start = function() {
        this.nodeLayoutLogin.active = true;
        this.nodeLayoutSignIn.active = false;
        window.fbAsyncInit = function() {
          FB.init({
            appId: "577254864321632",
            cookie: true,
            xfbml: true,
            version: "v15.0"
          });
        };
        FB.AppEvents.logPageView();
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
      };
      LoginScreen.prototype.onButtonSignInClick = function() {
        this.nodeLayoutLogin.active = false;
        this.nodeLayoutSignIn.active = true;
      };
      LoginScreen.prototype.onButtonSignWithFBClick = function() {
        var _this = this;
        FB.getLoginStatus(function(response) {
          _this.statusChangeCallback(response);
        });
      };
      LoginScreen.prototype.statusChangeCallback = function(response) {
        console.log("statusChangeCallback");
        console.log(response);
        "connected" === response.status ? this.testAPI() : FB.login(function(response) {
          if (response.authResponse) {
            console.log("Welcome!  Fetching your information.... ");
            FB.api("/me", function(response) {
              console.log("Good to see you, " + response.name + ".");
            });
          } else console.log("User cancelled login or did not fully authorize.");
        });
      };
      LoginScreen.prototype.testAPI = function() {
        console.log("Welcome!  Fetching your information.... ");
        FB.api("/me", function(response) {
          console.log("Successful login for: " + response.name);
          document.getElementById("status").innerHTML = "Thanks for logging in, " + response.name + "!";
        });
      };
      __decorate([ property(cc.Node) ], LoginScreen.prototype, "nodeLayoutLogin", void 0);
      __decorate([ property(cc.Node) ], LoginScreen.prototype, "nodeLayoutSignIn", void 0);
      LoginScreen = __decorate([ ccclass ], LoginScreen);
      return LoginScreen;
    }(cc.Component);
    exports.default = LoginScreen;
    cc._RF.pop();
  }, {} ]
}, {}, [ "FBSDK", "LoginFacebook", "LoginScreen" ]);
//# sourceMappingURL=index.js.map
