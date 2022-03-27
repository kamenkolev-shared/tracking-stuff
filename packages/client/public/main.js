(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/.pnpm/bowser@2.11.0/node_modules/bowser/es5.js
  var require_es5 = __commonJS({
    "node_modules/.pnpm/bowser@2.11.0/node_modules/bowser/es5.js"(exports, module) {
      !function(e2, t2) {
        typeof exports == "object" && typeof module == "object" ? module.exports = t2() : typeof define == "function" && define.amd ? define([], t2) : typeof exports == "object" ? exports.bowser = t2() : e2.bowser = t2();
      }(exports, function() {
        return function(e2) {
          var t2 = {};
          function r2(n2) {
            if (t2[n2])
              return t2[n2].exports;
            var i2 = t2[n2] = { i: n2, l: false, exports: {} };
            return e2[n2].call(i2.exports, i2, i2.exports, r2), i2.l = true, i2.exports;
          }
          return r2.m = e2, r2.c = t2, r2.d = function(e3, t3, n2) {
            r2.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: n2 });
          }, r2.r = function(e3) {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
          }, r2.t = function(e3, t3) {
            if (1 & t3 && (e3 = r2(e3)), 8 & t3)
              return e3;
            if (4 & t3 && typeof e3 == "object" && e3 && e3.__esModule)
              return e3;
            var n2 = /* @__PURE__ */ Object.create(null);
            if (r2.r(n2), Object.defineProperty(n2, "default", { enumerable: true, value: e3 }), 2 & t3 && typeof e3 != "string")
              for (var i2 in e3)
                r2.d(n2, i2, function(t4) {
                  return e3[t4];
                }.bind(null, i2));
            return n2;
          }, r2.n = function(e3) {
            var t3 = e3 && e3.__esModule ? function() {
              return e3.default;
            } : function() {
              return e3;
            };
            return r2.d(t3, "a", t3), t3;
          }, r2.o = function(e3, t3) {
            return Object.prototype.hasOwnProperty.call(e3, t3);
          }, r2.p = "", r2(r2.s = 90);
        }({ 17: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var n2 = r2(18), i2 = function() {
            function e3() {
            }
            return e3.getFirstMatch = function(e4, t3) {
              var r3 = t3.match(e4);
              return r3 && r3.length > 0 && r3[1] || "";
            }, e3.getSecondMatch = function(e4, t3) {
              var r3 = t3.match(e4);
              return r3 && r3.length > 1 && r3[2] || "";
            }, e3.matchAndReturnConst = function(e4, t3, r3) {
              if (e4.test(t3))
                return r3;
            }, e3.getWindowsVersionName = function(e4) {
              switch (e4) {
                case "NT":
                  return "NT";
                case "XP":
                  return "XP";
                case "NT 5.0":
                  return "2000";
                case "NT 5.1":
                  return "XP";
                case "NT 5.2":
                  return "2003";
                case "NT 6.0":
                  return "Vista";
                case "NT 6.1":
                  return "7";
                case "NT 6.2":
                  return "8";
                case "NT 6.3":
                  return "8.1";
                case "NT 10.0":
                  return "10";
                default:
                  return;
              }
            }, e3.getMacOSVersionName = function(e4) {
              var t3 = e4.split(".").splice(0, 2).map(function(e5) {
                return parseInt(e5, 10) || 0;
              });
              if (t3.push(0), t3[0] === 10)
                switch (t3[1]) {
                  case 5:
                    return "Leopard";
                  case 6:
                    return "Snow Leopard";
                  case 7:
                    return "Lion";
                  case 8:
                    return "Mountain Lion";
                  case 9:
                    return "Mavericks";
                  case 10:
                    return "Yosemite";
                  case 11:
                    return "El Capitan";
                  case 12:
                    return "Sierra";
                  case 13:
                    return "High Sierra";
                  case 14:
                    return "Mojave";
                  case 15:
                    return "Catalina";
                  default:
                    return;
                }
            }, e3.getAndroidVersionName = function(e4) {
              var t3 = e4.split(".").splice(0, 2).map(function(e5) {
                return parseInt(e5, 10) || 0;
              });
              if (t3.push(0), !(t3[0] === 1 && t3[1] < 5))
                return t3[0] === 1 && t3[1] < 6 ? "Cupcake" : t3[0] === 1 && t3[1] >= 6 ? "Donut" : t3[0] === 2 && t3[1] < 2 ? "Eclair" : t3[0] === 2 && t3[1] === 2 ? "Froyo" : t3[0] === 2 && t3[1] > 2 ? "Gingerbread" : t3[0] === 3 ? "Honeycomb" : t3[0] === 4 && t3[1] < 1 ? "Ice Cream Sandwich" : t3[0] === 4 && t3[1] < 4 ? "Jelly Bean" : t3[0] === 4 && t3[1] >= 4 ? "KitKat" : t3[0] === 5 ? "Lollipop" : t3[0] === 6 ? "Marshmallow" : t3[0] === 7 ? "Nougat" : t3[0] === 8 ? "Oreo" : t3[0] === 9 ? "Pie" : void 0;
            }, e3.getVersionPrecision = function(e4) {
              return e4.split(".").length;
            }, e3.compareVersions = function(t3, r3, n3) {
              n3 === void 0 && (n3 = false);
              var i3 = e3.getVersionPrecision(t3), s2 = e3.getVersionPrecision(r3), a2 = Math.max(i3, s2), o2 = 0, u2 = e3.map([t3, r3], function(t4) {
                var r4 = a2 - e3.getVersionPrecision(t4), n4 = t4 + new Array(r4 + 1).join(".0");
                return e3.map(n4.split("."), function(e4) {
                  return new Array(20 - e4.length).join("0") + e4;
                }).reverse();
              });
              for (n3 && (o2 = a2 - Math.min(i3, s2)), a2 -= 1; a2 >= o2; ) {
                if (u2[0][a2] > u2[1][a2])
                  return 1;
                if (u2[0][a2] === u2[1][a2]) {
                  if (a2 === o2)
                    return 0;
                  a2 -= 1;
                } else if (u2[0][a2] < u2[1][a2])
                  return -1;
              }
            }, e3.map = function(e4, t3) {
              var r3, n3 = [];
              if (Array.prototype.map)
                return Array.prototype.map.call(e4, t3);
              for (r3 = 0; r3 < e4.length; r3 += 1)
                n3.push(t3(e4[r3]));
              return n3;
            }, e3.find = function(e4, t3) {
              var r3, n3;
              if (Array.prototype.find)
                return Array.prototype.find.call(e4, t3);
              for (r3 = 0, n3 = e4.length; r3 < n3; r3 += 1) {
                var i3 = e4[r3];
                if (t3(i3, r3))
                  return i3;
              }
            }, e3.assign = function(e4) {
              for (var t3, r3, n3 = e4, i3 = arguments.length, s2 = new Array(i3 > 1 ? i3 - 1 : 0), a2 = 1; a2 < i3; a2++)
                s2[a2 - 1] = arguments[a2];
              if (Object.assign)
                return Object.assign.apply(Object, [e4].concat(s2));
              var o2 = function() {
                var e5 = s2[t3];
                typeof e5 == "object" && e5 !== null && Object.keys(e5).forEach(function(t4) {
                  n3[t4] = e5[t4];
                });
              };
              for (t3 = 0, r3 = s2.length; t3 < r3; t3 += 1)
                o2();
              return e4;
            }, e3.getBrowserAlias = function(e4) {
              return n2.BROWSER_ALIASES_MAP[e4];
            }, e3.getBrowserTypeByAlias = function(e4) {
              return n2.BROWSER_MAP[e4] || "";
            }, e3;
          }();
          t2.default = i2, e2.exports = t2.default;
        }, 18: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.ENGINE_MAP = t2.OS_MAP = t2.PLATFORMS_MAP = t2.BROWSER_MAP = t2.BROWSER_ALIASES_MAP = void 0;
          t2.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" };
          t2.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" };
          t2.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" };
          t2.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" };
          t2.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
        }, 90: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var n2, i2 = (n2 = r2(91)) && n2.__esModule ? n2 : { default: n2 }, s2 = r2(18);
          function a2(e3, t3) {
            for (var r3 = 0; r3 < t3.length; r3++) {
              var n3 = t3[r3];
              n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e3, n3.key, n3);
            }
          }
          var o2 = function() {
            function e3() {
            }
            var t3, r3, n3;
            return e3.getParser = function(e4, t4) {
              if (t4 === void 0 && (t4 = false), typeof e4 != "string")
                throw new Error("UserAgent should be a string");
              return new i2.default(e4, t4);
            }, e3.parse = function(e4) {
              return new i2.default(e4).getResult();
            }, t3 = e3, n3 = [{ key: "BROWSER_MAP", get: function() {
              return s2.BROWSER_MAP;
            } }, { key: "ENGINE_MAP", get: function() {
              return s2.ENGINE_MAP;
            } }, { key: "OS_MAP", get: function() {
              return s2.OS_MAP;
            } }, { key: "PLATFORMS_MAP", get: function() {
              return s2.PLATFORMS_MAP;
            } }], (r3 = null) && a2(t3.prototype, r3), n3 && a2(t3, n3), e3;
          }();
          t2.default = o2, e2.exports = t2.default;
        }, 91: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var n2 = u2(r2(92)), i2 = u2(r2(93)), s2 = u2(r2(94)), a2 = u2(r2(95)), o2 = u2(r2(17));
          function u2(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          }
          var d2 = function() {
            function e3(e4, t4) {
              if (t4 === void 0 && (t4 = false), e4 == null || e4 === "")
                throw new Error("UserAgent parameter can't be empty");
              this._ua = e4, this.parsedResult = {}, t4 !== true && this.parse();
            }
            var t3 = e3.prototype;
            return t3.getUA = function() {
              return this._ua;
            }, t3.test = function(e4) {
              return e4.test(this._ua);
            }, t3.parseBrowser = function() {
              var e4 = this;
              this.parsedResult.browser = {};
              var t4 = o2.default.find(n2.default, function(t5) {
                if (typeof t5.test == "function")
                  return t5.test(e4);
                if (t5.test instanceof Array)
                  return t5.test.some(function(t6) {
                    return e4.test(t6);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return t4 && (this.parsedResult.browser = t4.describe(this.getUA())), this.parsedResult.browser;
            }, t3.getBrowser = function() {
              return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
            }, t3.getBrowserName = function(e4) {
              return e4 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
            }, t3.getBrowserVersion = function() {
              return this.getBrowser().version;
            }, t3.getOS = function() {
              return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
            }, t3.parseOS = function() {
              var e4 = this;
              this.parsedResult.os = {};
              var t4 = o2.default.find(i2.default, function(t5) {
                if (typeof t5.test == "function")
                  return t5.test(e4);
                if (t5.test instanceof Array)
                  return t5.test.some(function(t6) {
                    return e4.test(t6);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return t4 && (this.parsedResult.os = t4.describe(this.getUA())), this.parsedResult.os;
            }, t3.getOSName = function(e4) {
              var t4 = this.getOS().name;
              return e4 ? String(t4).toLowerCase() || "" : t4 || "";
            }, t3.getOSVersion = function() {
              return this.getOS().version;
            }, t3.getPlatform = function() {
              return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
            }, t3.getPlatformType = function(e4) {
              e4 === void 0 && (e4 = false);
              var t4 = this.getPlatform().type;
              return e4 ? String(t4).toLowerCase() || "" : t4 || "";
            }, t3.parsePlatform = function() {
              var e4 = this;
              this.parsedResult.platform = {};
              var t4 = o2.default.find(s2.default, function(t5) {
                if (typeof t5.test == "function")
                  return t5.test(e4);
                if (t5.test instanceof Array)
                  return t5.test.some(function(t6) {
                    return e4.test(t6);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return t4 && (this.parsedResult.platform = t4.describe(this.getUA())), this.parsedResult.platform;
            }, t3.getEngine = function() {
              return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
            }, t3.getEngineName = function(e4) {
              return e4 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
            }, t3.parseEngine = function() {
              var e4 = this;
              this.parsedResult.engine = {};
              var t4 = o2.default.find(a2.default, function(t5) {
                if (typeof t5.test == "function")
                  return t5.test(e4);
                if (t5.test instanceof Array)
                  return t5.test.some(function(t6) {
                    return e4.test(t6);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return t4 && (this.parsedResult.engine = t4.describe(this.getUA())), this.parsedResult.engine;
            }, t3.parse = function() {
              return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
            }, t3.getResult = function() {
              return o2.default.assign({}, this.parsedResult);
            }, t3.satisfies = function(e4) {
              var t4 = this, r3 = {}, n3 = 0, i3 = {}, s3 = 0;
              if (Object.keys(e4).forEach(function(t5) {
                var a4 = e4[t5];
                typeof a4 == "string" ? (i3[t5] = a4, s3 += 1) : typeof a4 == "object" && (r3[t5] = a4, n3 += 1);
              }), n3 > 0) {
                var a3 = Object.keys(r3), u3 = o2.default.find(a3, function(e5) {
                  return t4.isOS(e5);
                });
                if (u3) {
                  var d3 = this.satisfies(r3[u3]);
                  if (d3 !== void 0)
                    return d3;
                }
                var c2 = o2.default.find(a3, function(e5) {
                  return t4.isPlatform(e5);
                });
                if (c2) {
                  var f2 = this.satisfies(r3[c2]);
                  if (f2 !== void 0)
                    return f2;
                }
              }
              if (s3 > 0) {
                var l2 = Object.keys(i3), h2 = o2.default.find(l2, function(e5) {
                  return t4.isBrowser(e5, true);
                });
                if (h2 !== void 0)
                  return this.compareVersion(i3[h2]);
              }
            }, t3.isBrowser = function(e4, t4) {
              t4 === void 0 && (t4 = false);
              var r3 = this.getBrowserName().toLowerCase(), n3 = e4.toLowerCase(), i3 = o2.default.getBrowserTypeByAlias(n3);
              return t4 && i3 && (n3 = i3.toLowerCase()), n3 === r3;
            }, t3.compareVersion = function(e4) {
              var t4 = [0], r3 = e4, n3 = false, i3 = this.getBrowserVersion();
              if (typeof i3 == "string")
                return e4[0] === ">" || e4[0] === "<" ? (r3 = e4.substr(1), e4[1] === "=" ? (n3 = true, r3 = e4.substr(2)) : t4 = [], e4[0] === ">" ? t4.push(1) : t4.push(-1)) : e4[0] === "=" ? r3 = e4.substr(1) : e4[0] === "~" && (n3 = true, r3 = e4.substr(1)), t4.indexOf(o2.default.compareVersions(i3, r3, n3)) > -1;
            }, t3.isOS = function(e4) {
              return this.getOSName(true) === String(e4).toLowerCase();
            }, t3.isPlatform = function(e4) {
              return this.getPlatformType(true) === String(e4).toLowerCase();
            }, t3.isEngine = function(e4) {
              return this.getEngineName(true) === String(e4).toLowerCase();
            }, t3.is = function(e4, t4) {
              return t4 === void 0 && (t4 = false), this.isBrowser(e4, t4) || this.isOS(e4) || this.isPlatform(e4);
            }, t3.some = function(e4) {
              var t4 = this;
              return e4 === void 0 && (e4 = []), e4.some(function(e5) {
                return t4.is(e5);
              });
            }, e3;
          }();
          t2.default = d2, e2.exports = t2.default;
        }, 92: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var n2, i2 = (n2 = r2(17)) && n2.__esModule ? n2 : { default: n2 };
          var s2 = /version\/(\d+(\.?_?\d+)+)/i, a2 = [{ test: [/googlebot/i], describe: function(e3) {
            var t3 = { name: "Googlebot" }, r3 = i2.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e3) || i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/opera/i], describe: function(e3) {
            var t3 = { name: "Opera" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/opr\/|opios/i], describe: function(e3) {
            var t3 = { name: "Opera" }, r3 = i2.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e3) || i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/SamsungBrowser/i], describe: function(e3) {
            var t3 = { name: "Samsung Internet for Android" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/Whale/i], describe: function(e3) {
            var t3 = { name: "NAVER Whale Browser" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/MZBrowser/i], describe: function(e3) {
            var t3 = { name: "MZ Browser" }, r3 = i2.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/focus/i], describe: function(e3) {
            var t3 = { name: "Focus" }, r3 = i2.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/swing/i], describe: function(e3) {
            var t3 = { name: "Swing" }, r3 = i2.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/coast/i], describe: function(e3) {
            var t3 = { name: "Opera Coast" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function(e3) {
            var t3 = { name: "Opera Touch" }, r3 = i2.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/yabrowser/i], describe: function(e3) {
            var t3 = { name: "Yandex Browser" }, r3 = i2.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/ucbrowser/i], describe: function(e3) {
            var t3 = { name: "UC Browser" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/Maxthon|mxios/i], describe: function(e3) {
            var t3 = { name: "Maxthon" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/epiphany/i], describe: function(e3) {
            var t3 = { name: "Epiphany" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/puffin/i], describe: function(e3) {
            var t3 = { name: "Puffin" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/sleipnir/i], describe: function(e3) {
            var t3 = { name: "Sleipnir" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/k-meleon/i], describe: function(e3) {
            var t3 = { name: "K-Meleon" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/micromessenger/i], describe: function(e3) {
            var t3 = { name: "WeChat" }, r3 = i2.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/qqbrowser/i], describe: function(e3) {
            var t3 = { name: /qqbrowserlite/i.test(e3) ? "QQ Browser Lite" : "QQ Browser" }, r3 = i2.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/msie|trident/i], describe: function(e3) {
            var t3 = { name: "Internet Explorer" }, r3 = i2.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/\sedg\//i], describe: function(e3) {
            var t3 = { name: "Microsoft Edge" }, r3 = i2.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/edg([ea]|ios)/i], describe: function(e3) {
            var t3 = { name: "Microsoft Edge" }, r3 = i2.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/vivaldi/i], describe: function(e3) {
            var t3 = { name: "Vivaldi" }, r3 = i2.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/seamonkey/i], describe: function(e3) {
            var t3 = { name: "SeaMonkey" }, r3 = i2.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/sailfish/i], describe: function(e3) {
            var t3 = { name: "Sailfish" }, r3 = i2.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/silk/i], describe: function(e3) {
            var t3 = { name: "Amazon Silk" }, r3 = i2.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/phantom/i], describe: function(e3) {
            var t3 = { name: "PhantomJS" }, r3 = i2.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/slimerjs/i], describe: function(e3) {
            var t3 = { name: "SlimerJS" }, r3 = i2.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e3) {
            var t3 = { name: "BlackBerry" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/(web|hpw)[o0]s/i], describe: function(e3) {
            var t3 = { name: "WebOS Browser" }, r3 = i2.default.getFirstMatch(s2, e3) || i2.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/bada/i], describe: function(e3) {
            var t3 = { name: "Bada" }, r3 = i2.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/tizen/i], describe: function(e3) {
            var t3 = { name: "Tizen" }, r3 = i2.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/qupzilla/i], describe: function(e3) {
            var t3 = { name: "QupZilla" }, r3 = i2.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/firefox|iceweasel|fxios/i], describe: function(e3) {
            var t3 = { name: "Firefox" }, r3 = i2.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/electron/i], describe: function(e3) {
            var t3 = { name: "Electron" }, r3 = i2.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/MiuiBrowser/i], describe: function(e3) {
            var t3 = { name: "Miui" }, r3 = i2.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/chromium/i], describe: function(e3) {
            var t3 = { name: "Chromium" }, r3 = i2.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e3) || i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/chrome|crios|crmo/i], describe: function(e3) {
            var t3 = { name: "Chrome" }, r3 = i2.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/GSA/i], describe: function(e3) {
            var t3 = { name: "Google Search" }, r3 = i2.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: function(e3) {
            var t3 = !e3.test(/like android/i), r3 = e3.test(/android/i);
            return t3 && r3;
          }, describe: function(e3) {
            var t3 = { name: "Android Browser" }, r3 = i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/playstation 4/i], describe: function(e3) {
            var t3 = { name: "PlayStation 4" }, r3 = i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/safari|applewebkit/i], describe: function(e3) {
            var t3 = { name: "Safari" }, r3 = i2.default.getFirstMatch(s2, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/.*/i], describe: function(e3) {
            var t3 = e3.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
            return { name: i2.default.getFirstMatch(t3, e3), version: i2.default.getSecondMatch(t3, e3) };
          } }];
          t2.default = a2, e2.exports = t2.default;
        }, 93: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var n2, i2 = (n2 = r2(17)) && n2.__esModule ? n2 : { default: n2 }, s2 = r2(18);
          var a2 = [{ test: [/Roku\/DVP/], describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e3);
            return { name: s2.OS_MAP.Roku, version: t3 };
          } }, { test: [/windows phone/i], describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e3);
            return { name: s2.OS_MAP.WindowsPhone, version: t3 };
          } }, { test: [/windows /i], describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e3), r3 = i2.default.getWindowsVersionName(t3);
            return { name: s2.OS_MAP.Windows, version: t3, versionName: r3 };
          } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function(e3) {
            var t3 = { name: s2.OS_MAP.iOS }, r3 = i2.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/macintosh/i], describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e3).replace(/[_\s]/g, "."), r3 = i2.default.getMacOSVersionName(t3), n3 = { name: s2.OS_MAP.MacOS, version: t3 };
            return r3 && (n3.versionName = r3), n3;
          } }, { test: [/(ipod|iphone|ipad)/i], describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e3).replace(/[_\s]/g, ".");
            return { name: s2.OS_MAP.iOS, version: t3 };
          } }, { test: function(e3) {
            var t3 = !e3.test(/like android/i), r3 = e3.test(/android/i);
            return t3 && r3;
          }, describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e3), r3 = i2.default.getAndroidVersionName(t3), n3 = { name: s2.OS_MAP.Android, version: t3 };
            return r3 && (n3.versionName = r3), n3;
          } }, { test: [/(web|hpw)[o0]s/i], describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e3), r3 = { name: s2.OS_MAP.WebOS };
            return t3 && t3.length && (r3.version = t3), r3;
          } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e3) || i2.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e3) || i2.default.getFirstMatch(/\bbb(\d+)/i, e3);
            return { name: s2.OS_MAP.BlackBerry, version: t3 };
          } }, { test: [/bada/i], describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e3);
            return { name: s2.OS_MAP.Bada, version: t3 };
          } }, { test: [/tizen/i], describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e3);
            return { name: s2.OS_MAP.Tizen, version: t3 };
          } }, { test: [/linux/i], describe: function() {
            return { name: s2.OS_MAP.Linux };
          } }, { test: [/CrOS/], describe: function() {
            return { name: s2.OS_MAP.ChromeOS };
          } }, { test: [/PlayStation 4/], describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e3);
            return { name: s2.OS_MAP.PlayStation4, version: t3 };
          } }];
          t2.default = a2, e2.exports = t2.default;
        }, 94: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var n2, i2 = (n2 = r2(17)) && n2.__esModule ? n2 : { default: n2 }, s2 = r2(18);
          var a2 = [{ test: [/googlebot/i], describe: function() {
            return { type: "bot", vendor: "Google" };
          } }, { test: [/huawei/i], describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/(can-l01)/i, e3) && "Nova", r3 = { type: s2.PLATFORMS_MAP.mobile, vendor: "Huawei" };
            return t3 && (r3.model = t3), r3;
          } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet, vendor: "Nexus" };
          } }, { test: [/ipad/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
          } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
          } }, { test: [/kftt build/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
          } }, { test: [/silk/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet, vendor: "Amazon" };
          } }, { test: [/tablet(?! pc)/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet };
          } }, { test: function(e3) {
            var t3 = e3.test(/ipod|iphone/i), r3 = e3.test(/like (ipod|iphone)/i);
            return t3 && !r3;
          }, describe: function(e3) {
            var t3 = i2.default.getFirstMatch(/(ipod|iphone)/i, e3);
            return { type: s2.PLATFORMS_MAP.mobile, vendor: "Apple", model: t3 };
          } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.mobile, vendor: "Nexus" };
          } }, { test: [/[^-]mobi/i], describe: function() {
            return { type: s2.PLATFORMS_MAP.mobile };
          } }, { test: function(e3) {
            return e3.getBrowserName(true) === "blackberry";
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
          } }, { test: function(e3) {
            return e3.getBrowserName(true) === "bada";
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.mobile };
          } }, { test: function(e3) {
            return e3.getBrowserName() === "windows phone";
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
          } }, { test: function(e3) {
            var t3 = Number(String(e3.getOSVersion()).split(".")[0]);
            return e3.getOSName(true) === "android" && t3 >= 3;
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.tablet };
          } }, { test: function(e3) {
            return e3.getOSName(true) === "android";
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.mobile };
          } }, { test: function(e3) {
            return e3.getOSName(true) === "macos";
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.desktop, vendor: "Apple" };
          } }, { test: function(e3) {
            return e3.getOSName(true) === "windows";
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.desktop };
          } }, { test: function(e3) {
            return e3.getOSName(true) === "linux";
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.desktop };
          } }, { test: function(e3) {
            return e3.getOSName(true) === "playstation 4";
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.tv };
          } }, { test: function(e3) {
            return e3.getOSName(true) === "roku";
          }, describe: function() {
            return { type: s2.PLATFORMS_MAP.tv };
          } }];
          t2.default = a2, e2.exports = t2.default;
        }, 95: function(e2, t2, r2) {
          "use strict";
          t2.__esModule = true, t2.default = void 0;
          var n2, i2 = (n2 = r2(17)) && n2.__esModule ? n2 : { default: n2 }, s2 = r2(18);
          var a2 = [{ test: function(e3) {
            return e3.getBrowserName(true) === "microsoft edge";
          }, describe: function(e3) {
            if (/\sedg\//i.test(e3))
              return { name: s2.ENGINE_MAP.Blink };
            var t3 = i2.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e3);
            return { name: s2.ENGINE_MAP.EdgeHTML, version: t3 };
          } }, { test: [/trident/i], describe: function(e3) {
            var t3 = { name: s2.ENGINE_MAP.Trident }, r3 = i2.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: function(e3) {
            return e3.test(/presto/i);
          }, describe: function(e3) {
            var t3 = { name: s2.ENGINE_MAP.Presto }, r3 = i2.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: function(e3) {
            var t3 = e3.test(/gecko/i), r3 = e3.test(/like gecko/i);
            return t3 && !r3;
          }, describe: function(e3) {
            var t3 = { name: s2.ENGINE_MAP.Gecko }, r3 = i2.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }, { test: [/(apple)?webkit\/537\.36/i], describe: function() {
            return { name: s2.ENGINE_MAP.Blink };
          } }, { test: [/(apple)?webkit/i], describe: function(e3) {
            var t3 = { name: s2.ENGINE_MAP.WebKit }, r3 = i2.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e3);
            return r3 && (t3.version = r3), t3;
          } }];
          t2.default = a2, e2.exports = t2.default;
        } });
      });
    }
  });

  // packages/shared/index.ts
  var pingInterval = 1e3;
  var endpoints = ["ws", "log", "list", "clearList"];

  // env.ts
  var devEnv = {
    wsURL: "ws://localhost:8000/ws",
    apiURL: "http://localhost:8000/"
  };
  var env_default = devEnv;

  // packages/client/shared.ts
  var { wsURL, apiURL } = env_default;
  var userID = Number(prompt("Please enter a numeric ID"));

  // packages/activity-tracker/main.ts
  var import_bowser = __toESM(require_es5());

  // node_modules/.pnpm/page-lifecycle@0.1.2/node_modules/page-lifecycle/dist/lifecycle.mjs
  var e;
  try {
    new EventTarget(), e = true;
  } catch (t2) {
    e = false;
  }
  var t = class {
    constructor() {
      this.e = {};
    }
    addEventListener(e2, t2, s2 = false) {
      this.t(e2).push(t2);
    }
    removeEventListener(e2, t2, s2 = false) {
      const i2 = this.t(e2), a2 = i2.indexOf(t2);
      a2 > -1 && i2.splice(a2, 1);
    }
    dispatchEvent(e2) {
      return e2.target = this, Object.freeze(e2), this.t(e2.type).forEach((t2) => t2(e2)), true;
    }
    t(e2) {
      return this.e[e2] = this.e[e2] || [];
    }
  };
  var s = e ? EventTarget : t;
  var i = class {
    constructor(e2) {
      this.type = e2;
    }
  };
  var a = e ? Event : i;
  var n = class extends a {
    constructor(e2, t2) {
      super(e2), this.newState = t2.newState, this.oldState = t2.oldState, this.originalEvent = t2.originalEvent;
    }
  };
  var r = "active";
  var h = "passive";
  var c = "hidden";
  var o = "frozen";
  var d = "terminated";
  var u = typeof safari == "object" && safari.pushNotification;
  var v = "onpageshow" in self;
  var l = ["focus", "blur", "visibilitychange", "freeze", "resume", "pageshow", v ? "pagehide" : "unload"];
  var g = (e2) => (e2.preventDefault(), e2.returnValue = "Are you sure?");
  var f = (e2) => e2.reduce((e3, t2, s2) => (e3[t2] = s2, e3), {});
  var b = [[r, h, c, d], [r, h, c, o], [c, h, r], [o, c], [o, r], [o, h]].map(f);
  var p = (e2, t2) => {
    for (let s2, i2 = 0; s2 = b[i2]; ++i2) {
      const i3 = s2[e2], a2 = s2[t2];
      if (i3 >= 0 && a2 >= 0 && a2 > i3)
        return Object.keys(s2).slice(i3, a2 + 1);
    }
    return [];
  };
  var E = () => document.visibilityState === c ? c : document.hasFocus() ? r : h;
  var m = class extends s {
    constructor() {
      super();
      const e2 = E();
      this.s = e2, this.i = [], this.a = this.a.bind(this), l.forEach((e3) => addEventListener(e3, this.a, true)), u && addEventListener("beforeunload", (e3) => {
        this.n = setTimeout(() => {
          e3.defaultPrevented || e3.returnValue.length > 0 || this.r(e3, c);
        }, 0);
      });
    }
    get state() {
      return this.s;
    }
    get pageWasDiscarded() {
      return document.wasDiscarded || false;
    }
    addUnsavedChanges(e2) {
      !this.i.indexOf(e2) > -1 && (this.i.length === 0 && addEventListener("beforeunload", g), this.i.push(e2));
    }
    removeUnsavedChanges(e2) {
      const t2 = this.i.indexOf(e2);
      t2 > -1 && (this.i.splice(t2, 1), this.i.length === 0 && removeEventListener("beforeunload", g));
    }
    r(e2, t2) {
      if (t2 !== this.s) {
        const s2 = this.s, i2 = p(s2, t2);
        for (let t3 = 0; t3 < i2.length - 1; ++t3) {
          const s3 = i2[t3], a2 = i2[t3 + 1];
          this.s = a2, this.dispatchEvent(new n("statechange", { oldState: s3, newState: a2, originalEvent: e2 }));
        }
      }
    }
    a(e2) {
      switch (u && clearTimeout(this.n), e2.type) {
        case "pageshow":
        case "resume":
          this.r(e2, E());
          break;
        case "focus":
          this.r(e2, r);
          break;
        case "blur":
          this.s === r && this.r(e2, E());
          break;
        case "pagehide":
        case "unload":
          this.r(e2, e2.persisted ? o : d);
          break;
        case "visibilitychange":
          this.s !== o && this.s !== d && this.r(e2, E());
          break;
        case "freeze":
          this.r(e2, o);
      }
    }
  };
  var w = new m();
  var lifecycle_default = w;

  // packages/activity-tracker/main.ts
  if (import_bowser.default.getParser(window.navigator?.userAgent).getEngine().name !== "Blink") {
    console.warn("Non chromium browsers are not fully supported!");
  }
  var tracker = {
    addEventListener: (listener) => {
      lifecycle_default.addEventListener("statechange", listener);
    },
    removeEventListener: (listener) => {
      lifecycle_default.removeEventListener("statechange", listener);
    },
    get state() {
      return lifecycle_default.state;
    },
    get pageWasDiscarded() {
      return lifecycle_default.pageWasDiscarded;
    }
  };

  // packages/client/client.ts
  var websocketURL = `${wsURL}?userID=${userID}`;
  var logURL = `${apiURL}log?userID=${userID}`;
  var sendEvent = (data) => {
    const queued = navigator.sendBeacon(logURL, data);
    if (!queued) {
      const failedBeacons = JSON.parse(localStorage.getItem("failed-beacons") ?? "[]");
      localStorage.setItem("failed-beacons", JSON.stringify(failedBeacons.concat({
        type: "Beacon failure",
        time: Date.now(),
        url: logURL,
        data
      })));
    }
  };
  var sendFailedBeacons = async () => {
    await Promise.all(JSON.parse(localStorage.getItem("failed-beacons") ?? "[]").map((beaconFailure) => fetch(logURL, {
      method: "POST",
      body: beaconFailure
    })));
    localStorage.setItem("failed-beacons", "[]");
  };
  var openWS = () => {
    const ws = new WebSocket(websocketURL);
    let interval = null;
    ws.onopen = () => {
      interval = setInterval(() => {
        ws.send("");
      }, pingInterval);
    };
    const handleClose = () => {
      if (interval !== null) {
        clearInterval(interval);
      }
      openWS();
    };
    ws.onclose = handleClose;
    ws.onerror = console.warn;
  };
  tracker.addEventListener((e2) => {
    sendEvent(e2.newState);
  });
  openWS();
  sendFailedBeacons();

  // packages/client/view.ts
  var el = document.getElementsByTagName("pre")[0];
  document.getElementById("userID").textContent = String(userID);
  var updateButton = document.querySelector("button#update");
  var clearButton = document.querySelector("button#clear");
  function updateLogList() {
    console.log(`${apiURL}${endpoints[2]}`);
    fetch(`${apiURL}${endpoints[2]}`).then((req) => req.json()).then((json) => el.textContent = JSON.stringify(json, void 0, 2));
  }
  updateButton?.addEventListener("click", updateLogList);
  clearButton?.addEventListener("click", () => {
    fetch(`${apiURL}${endpoints[3]}`, { method: "HEAD" });
  });
  updateLogList();
})();
/*!
 Copyright 2018 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*! lifecycle.mjs v0.1.1 */
