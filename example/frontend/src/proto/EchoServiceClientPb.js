var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module, temp) => {
    return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// ../../node_modules/.pnpm/grpc-web@1.3.1/node_modules/grpc-web/index.js
var require_grpc_web = __commonJS({
  "../../node_modules/.pnpm/grpc-web@1.3.1/node_modules/grpc-web/index.js"(exports, module) {
    var n;
    function aa(a) {
      var b = 0;
      return function() {
        return b < a.length ? { done: false, value: a[b++] } : { done: true };
      };
    }
    var ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
      a != Array.prototype && a != Object.prototype && (a[b] = c.value);
    };
    function ca(a) {
      a = [typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global, a];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math)
          return c;
      }
      throw Error("Cannot find global object");
    }
    var r = ca(exports);
    function t() {
      t = function() {
      };
      r.Symbol || (r.Symbol = da);
    }
    function ea(a, b) {
      this.a = a;
      ba(this, "description", { configurable: true, writable: true, value: b });
    }
    ea.prototype.toString = function() {
      return this.a;
    };
    var da = function() {
      function a(c) {
        if (this instanceof a)
          throw new TypeError("Symbol is not a constructor");
        return new ea("jscomp_symbol_" + (c || "") + "_" + b++, c);
      }
      var b = 0;
      return a;
    }();
    function u() {
      t();
      var a = r.Symbol.iterator;
      a || (a = r.Symbol.iterator = r.Symbol("Symbol.iterator"));
      typeof Array.prototype[a] != "function" && ba(Array.prototype, a, { configurable: true, writable: true, value: function() {
        return fa(aa(this));
      } });
      u = function() {
      };
    }
    function fa(a) {
      u();
      a = { next: a };
      a[r.Symbol.iterator] = function() {
        return this;
      };
      return a;
    }
    function ha(a) {
      var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: aa(a) };
    }
    var ia = typeof Object.create == "function" ? Object.create : function(a) {
      function b() {
      }
      b.prototype = a;
      return new b();
    };
    var ja;
    if (typeof Object.setPrototypeOf == "function")
      ja = Object.setPrototypeOf;
    else {
      a: {
        la = { V: true }, ma = {};
        try {
          ma.__proto__ = la;
          ka = ma.V;
          break a;
        } catch (a) {
        }
        ka = false;
      }
      ja = ka ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b)
          throw new TypeError(a + " is not extensible");
        return a;
      } : null;
    }
    var ka;
    var la;
    var ma;
    var na = ja;
    function oa(a, b) {
      a.prototype = ia(b.prototype);
      a.prototype.constructor = a;
      if (na)
        na(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else
              a[c] = b[c];
      a.O = b.prototype;
    }
    function pa(a, b) {
      u();
      a instanceof String && (a += "");
      var c = 0, d = { next: function() {
        if (c < a.length) {
          var f = c++;
          return { value: b(f, a[f]), done: false };
        }
        d.next = function() {
          return { done: true, value: void 0 };
        };
        return d.next();
      } };
      d[Symbol.iterator] = function() {
        return d;
      };
      return d;
    }
    function v(a, b) {
      if (b) {
        var c = r;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var f = a[d];
          f in c || (c[f] = {});
          c = c[f];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && b != null && ba(c, a, { configurable: true, writable: true, value: b });
      }
    }
    v("Array.prototype.keys", function(a) {
      return a ? a : function() {
        return pa(this, function(b) {
          return b;
        });
      };
    });
    v("Array.prototype.find", function(a) {
      return a ? a : function(b, c) {
        a: {
          var d = this;
          d instanceof String && (d = String(d));
          for (var f = d.length, g = 0; g < f; g++) {
            var e = d[g];
            if (b.call(c, e, g, d)) {
              b = e;
              break a;
            }
          }
          b = void 0;
        }
        return b;
      };
    });
    v("Object.is", function(a) {
      return a ? a : function(b, c) {
        return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
      };
    });
    v("Array.prototype.includes", function(a) {
      return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var f = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + f, 0)); c < f; c++) {
          var g = d[c];
          if (g === b || Object.is(g, b))
            return true;
        }
        return false;
      };
    });
    v("Promise", function(a) {
      function b(e) {
        this.b = 0;
        this.c = void 0;
        this.a = [];
        var h = this.f();
        try {
          e(h.resolve, h.reject);
        } catch (k) {
          h.reject(k);
        }
      }
      function c() {
        this.a = null;
      }
      function d(e) {
        return e instanceof b ? e : new b(function(h) {
          h(e);
        });
      }
      if (a)
        return a;
      c.prototype.b = function(e) {
        if (this.a == null) {
          this.a = [];
          var h = this;
          this.c(function() {
            h.g();
          });
        }
        this.a.push(e);
      };
      var f = r.setTimeout;
      c.prototype.c = function(e) {
        f(e, 0);
      };
      c.prototype.g = function() {
        for (; this.a && this.a.length; ) {
          var e = this.a;
          this.a = [];
          for (var h = 0; h < e.length; ++h) {
            var k = e[h];
            e[h] = null;
            try {
              k();
            } catch (l) {
              this.f(l);
            }
          }
        }
        this.a = null;
      };
      c.prototype.f = function(e) {
        this.c(function() {
          throw e;
        });
      };
      b.prototype.f = function() {
        function e(l) {
          return function(m) {
            k || (k = true, l.call(h, m));
          };
        }
        var h = this, k = false;
        return { resolve: e(this.s), reject: e(this.g) };
      };
      b.prototype.s = function(e) {
        if (e === this)
          this.g(new TypeError("A Promise cannot resolve to itself"));
        else if (e instanceof b)
          this.v(e);
        else {
          a:
            switch (typeof e) {
              case "object":
                var h = e != null;
                break a;
              case "function":
                h = true;
                break a;
              default:
                h = false;
            }
          h ? this.m(e) : this.h(e);
        }
      };
      b.prototype.m = function(e) {
        var h = void 0;
        try {
          h = e.then;
        } catch (k) {
          this.g(k);
          return;
        }
        typeof h == "function" ? this.w(h, e) : this.h(e);
      };
      b.prototype.g = function(e) {
        this.i(2, e);
      };
      b.prototype.h = function(e) {
        this.i(1, e);
      };
      b.prototype.i = function(e, h) {
        if (this.b != 0)
          throw Error("Cannot settle(" + e + ", " + h + "): Promise already settled in state" + this.b);
        this.b = e;
        this.c = h;
        this.l();
      };
      b.prototype.l = function() {
        if (this.a != null) {
          for (var e = 0; e < this.a.length; ++e)
            g.b(this.a[e]);
          this.a = null;
        }
      };
      var g = new c();
      b.prototype.v = function(e) {
        var h = this.f();
        e.F(h.resolve, h.reject);
      };
      b.prototype.w = function(e, h) {
        var k = this.f();
        try {
          e.call(h, k.resolve, k.reject);
        } catch (l) {
          k.reject(l);
        }
      };
      b.prototype.then = function(e, h) {
        function k(q, x) {
          return typeof q == "function" ? function(z) {
            try {
              l(q(z));
            } catch (N) {
              m(N);
            }
          } : x;
        }
        var l, m, p = new b(function(q, x) {
          l = q;
          m = x;
        });
        this.F(k(e, l), k(h, m));
        return p;
      };
      b.prototype.catch = function(e) {
        return this.then(void 0, e);
      };
      b.prototype.F = function(e, h) {
        function k() {
          switch (l.b) {
            case 1:
              e(l.c);
              break;
            case 2:
              h(l.c);
              break;
            default:
              throw Error("Unexpected state: " + l.b);
          }
        }
        var l = this;
        this.a == null ? g.b(k) : this.a.push(k);
      };
      b.resolve = d;
      b.reject = function(e) {
        return new b(function(h, k) {
          k(e);
        });
      };
      b.race = function(e) {
        return new b(function(h, k) {
          for (var l = ha(e), m = l.next(); !m.done; m = l.next())
            d(m.value).F(h, k);
        });
      };
      b.all = function(e) {
        var h = ha(e), k = h.next();
        return k.done ? d([]) : new b(function(l, m) {
          function p(z) {
            return function(N) {
              q[z] = N;
              x--;
              x == 0 && l(q);
            };
          }
          var q = [], x = 0;
          do
            q.push(void 0), x++, d(k.value).F(p(q.length - 1), m), k = h.next();
          while (!k.done);
        });
      };
      return b;
    });
    var qa = qa || {};
    var w = exports || self;
    function y(a, b) {
      a = a.split(".");
      b = b || w;
      for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], b == null)
          return null;
      return b;
    }
    function ra() {
    }
    function sa(a) {
      var b = typeof a;
      return b == "object" && a != null || b == "function";
    }
    var ta = "closure_uid_" + (1e9 * Math.random() >>> 0);
    var ua = 0;
    function va(a, b, c) {
      return a.call.apply(a.bind, arguments);
    }
    function wa(a, b, c) {
      if (!a)
        throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var f = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(f, d);
          return a.apply(b, f);
        };
      }
      return function() {
        return a.apply(b, arguments);
      };
    }
    function A(a, b, c) {
      Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? A = va : A = wa;
      return A.apply(null, arguments);
    }
    function B(a, b) {
      function c() {
      }
      c.prototype = b.prototype;
      a.O = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
    }
    function xa(a) {
      this.a = a || {};
    }
    xa.prototype.get = function(a) {
      return this.a[a];
    };
    xa.prototype.G = function() {
      return Object.keys(this.a);
    };
    function C(a, b, c, d) {
      this.f = a;
      this.c = b;
      this.b = c;
      this.a = d;
    }
    C.prototype.getRequestMessage = function() {
      return this.f;
    };
    C.prototype.getMethodDescriptor = function() {
      return this.c;
    };
    C.prototype.getMetadata = function() {
      return this.b;
    };
    C.prototype.getCallOptions = function() {
      return this.a;
    };
    function D(a, b, c, d) {
      c = c === void 0 ? {} : c;
      this.c = a;
      this.a = c;
      this.b = b;
      this.f = d === void 0 ? null : d;
    }
    D.prototype.getResponseMessage = function() {
      return this.c;
    };
    D.prototype.getMetadata = function() {
      return this.a;
    };
    D.prototype.getMethodDescriptor = function() {
      return this.b;
    };
    D.prototype.getStatus = function() {
      return this.f;
    };
    function E(a, b, c, d, f, g) {
      this.name = a;
      this.a = b;
      this.f = c;
      this.b = d;
      this.c = f;
      this.g = g;
    }
    function ya(a, b, c) {
      c = c === void 0 ? {} : c;
      var d = d === void 0 ? new xa() : d;
      return new C(b, a, c, d);
    }
    n = E.prototype;
    n.getName = function() {
      return this.name;
    };
    n.getMethodType = function() {
      return this.a;
    };
    n.getResponseMessageCtor = function() {
      return this.b;
    };
    n.getRequestMessageCtor = function() {
      return this.f;
    };
    n.getResponseDeserializeFn = function() {
      return this.g;
    };
    n.getRequestSerializeFn = function() {
      return this.c;
    };
    E.prototype.getRequestSerializeFn = E.prototype.getRequestSerializeFn;
    E.prototype.getResponseDeserializeFn = E.prototype.getResponseDeserializeFn;
    E.prototype.getRequestMessageCtor = E.prototype.getRequestMessageCtor;
    E.prototype.getResponseMessageCtor = E.prototype.getResponseMessageCtor;
    E.prototype.getMethodType = E.prototype.getMethodType;
    E.prototype.getName = E.prototype.getName;
    function za(a) {
      switch (a) {
        case 200:
          return 0;
        case 400:
          return 3;
        case 401:
          return 16;
        case 403:
          return 7;
        case 404:
          return 5;
        case 409:
          return 10;
        case 412:
          return 9;
        case 429:
          return 8;
        case 499:
          return 1;
        case 500:
          return 2;
        case 501:
          return 12;
        case 503:
          return 14;
        case 504:
          return 4;
        default:
          return 2;
      }
    }
    function F(a, b, c) {
      c = c === void 0 ? {} : c;
      b = Error.call(this, b);
      this.message = b.message;
      "stack" in b && (this.stack = b.stack);
      this.code = a;
      this.metadata = c;
    }
    oa(F, Error);
    F.prototype.name = "RpcError";
    function Aa(a) {
      this.a = a;
    }
    Aa.prototype.on = function(a, b) {
      return a == "data" || a == "error" ? this : this.a.on(a, b);
    };
    Aa.prototype.removeListener = function(a, b) {
      return this.a.removeListener(a, b);
    };
    Aa.prototype.cancel = function() {
      this.a.cancel();
    };
    function Ba(a) {
      switch (a) {
        case 0:
          return "No Error";
        case 1:
          return "Access denied to content document";
        case 2:
          return "File not found";
        case 3:
          return "Firefox silently errored";
        case 4:
          return "Application custom error";
        case 5:
          return "An exception occurred";
        case 6:
          return "Http response at 400 or 500 level";
        case 7:
          return "Request was aborted";
        case 8:
          return "Request timed out";
        case 9:
          return "The resource is not available offline";
        default:
          return "Unrecognized error code";
      }
    }
    function G(a) {
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, G);
      else {
        var b = Error().stack;
        b && (this.stack = b);
      }
      a && (this.message = String(a));
    }
    B(G, Error);
    G.prototype.name = "CustomError";
    function Ca(a, b) {
      a = a.split("%s");
      for (var c = "", d = a.length - 1, f = 0; f < d; f++)
        c += a[f] + (f < b.length ? b[f] : "%s");
      G.call(this, c + a[d]);
    }
    B(Ca, G);
    Ca.prototype.name = "AssertionError";
    function Da(a, b) {
      throw new Ca("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }
    function Ea() {
      this.l = null;
      this.i = [];
      this.m = 0;
      this.b = Fa;
      this.f = this.a = this.h = 0;
      this.c = null;
      this.g = 0;
    }
    function Ga(a, b) {
      function c(l) {
        l == Ha ? e.h = l : l == H ? e.h = l : Ia(e, h, k, "invalid frame byte");
        e.b = Ja;
        e.a = 0;
        e.f = 0;
      }
      function d(l) {
        e.f++;
        e.a = (e.a << 8) + l;
        e.f == 4 && (e.b = Ka, e.g = 0, typeof Uint8Array !== "undefined" ? e.c = new Uint8Array(e.a) : e.c = Array(e.a), e.a == 0 && g());
      }
      function f(l) {
        e.c[e.g++] = l;
        e.g == e.a && g();
      }
      function g() {
        var l = {};
        l[e.h] = e.c;
        e.i.push(l);
        e.b = Fa;
      }
      var e = a, h, k = 0;
      for (b instanceof Uint8Array || b instanceof Array ? h = b : h = new Uint8Array(b); k < h.length; ) {
        switch (e.b) {
          case La:
            Ia(e, h, k, "stream already broken");
            break;
          case Fa:
            c(h[k]);
            break;
          case Ja:
            d(h[k]);
            break;
          case Ka:
            f(h[k]);
            break;
          default:
            throw Error("unexpected parser state: " + e.b);
        }
        e.m++;
        k++;
      }
      a = e.i;
      e.i = [];
      return 0 < a.length ? a : null;
    }
    var Fa = 0;
    var Ja = 1;
    var Ka = 2;
    var La = 3;
    var Ha = 0;
    var H = 128;
    function Ia(a, b, c, d) {
      a.b = La;
      a.l = "The stream is broken @" + a.m + "/" + c + ". Error: " + d + ". With input:\n" + b;
      throw Error(a.l);
    }
    var Ma = Array.prototype.indexOf ? function(a, b) {
      return Array.prototype.indexOf.call(a, b, void 0);
    } : function(a, b) {
      if (typeof a === "string")
        return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b)
          return c;
      return -1;
    };
    var Na = String.prototype.trim ? function(a) {
      return a.trim();
    } : function(a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
    function I(a, b) {
      return a.indexOf(b) != -1;
    }
    function Oa(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
    var J;
    a: {
      Pa = w.navigator;
      if (Pa) {
        Qa = Pa.userAgent;
        if (Qa) {
          J = Qa;
          break a;
        }
      }
      J = "";
    }
    var Pa;
    var Qa;
    function Ra(a, b) {
      for (var c in a)
        b.call(void 0, a[c], c, a);
    }
    function Sa(a, b) {
      var c = {}, d;
      for (d in a)
        c[d] = b.call(void 0, a[d], d, a);
      return c;
    }
    var Ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function Ua(a, b) {
      for (var c, d, f = 1; f < arguments.length; f++) {
        d = arguments[f];
        for (c in d)
          a[c] = d[c];
        for (var g = 0; g < Ta.length; g++)
          c = Ta[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    }
    function Va(a) {
      var b = 1;
      a = a.split(":");
      for (var c = []; 0 < b && a.length; )
        c.push(a.shift()), b--;
      a.length && c.push(a.join(":"));
      return c;
    }
    function Wa(a) {
      Wa[" "](a);
      return a;
    }
    Wa[" "] = ra;
    function Xa(a) {
      var b = Ya;
      return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9);
    }
    var Za = I(J, "Opera");
    var $a = I(J, "Trident") || I(J, "MSIE");
    var ab = I(J, "Edge");
    var bb = I(J, "Gecko") && !(I(J.toLowerCase(), "webkit") && !I(J, "Edge")) && !(I(J, "Trident") || I(J, "MSIE")) && !I(J, "Edge");
    var cb = I(J.toLowerCase(), "webkit") && !I(J, "Edge");
    var db;
    a: {
      eb = "", fb = function() {
        var a = J;
        if (bb)
          return /rv:([^\);]+)(\)|;)/.exec(a);
        if (ab)
          return /Edge\/([\d\.]+)/.exec(a);
        if ($a)
          return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (cb)
          return /WebKit\/(\S+)/.exec(a);
        if (Za)
          return /(?:Version)[ \/]?(\S+)/.exec(a);
      }();
      fb && (eb = fb ? fb[1] : "");
      if ($a) {
        hb = w.document;
        gb = hb ? hb.documentMode : void 0;
        if (gb != null && gb > parseFloat(eb)) {
          db = String(gb);
          break a;
        }
      }
      db = eb;
    }
    var eb;
    var fb;
    var gb;
    var hb;
    var Ya = {};
    function ib() {
      return Xa(function() {
        for (var a = 0, b = Na(String(db)).split("."), c = Na("9").split("."), d = Math.max(b.length, c.length), f = 0; a == 0 && f < d; f++) {
          var g = b[f] || "", e = c[f] || "";
          do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
            if (g[0].length == 0 && e[0].length == 0)
              break;
            a = Oa(g[1].length == 0 ? 0 : parseInt(g[1], 10), e[1].length == 0 ? 0 : parseInt(e[1], 10)) || Oa(g[2].length == 0, e[2].length == 0) || Oa(g[2], e[2]);
            g = g[3];
            e = e[3];
          } while (a == 0);
        }
        return 0 <= a;
      });
    }
    function jb() {
      kb != 0 && (Object.prototype.hasOwnProperty.call(this, ta) && this[ta] || (this[ta] = ++ua));
      this.K = this.K;
    }
    var kb = 0;
    jb.prototype.K = false;
    var lb = Object.freeze || function(a) {
      return a;
    };
    function K(a, b) {
      this.type = a;
      this.a = this.target = b;
      this.defaultPrevented = false;
    }
    K.prototype.b = function() {
      this.defaultPrevented = true;
    };
    var mb = function() {
      if (!w.addEventListener || !Object.defineProperty)
        return false;
      var a = false, b = Object.defineProperty({}, "passive", { get: function() {
        a = true;
      } });
      try {
        w.addEventListener("test", ra, b), w.removeEventListener("test", ra, b);
      } catch (c) {
      }
      return a;
    }();
    function L(a, b) {
      K.call(this, a ? a.type : "");
      this.relatedTarget = this.a = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
      this.pointerId = 0;
      this.pointerType = "";
      this.c = null;
      if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
          if (bb) {
            a: {
              try {
                Wa(b.nodeName);
                var f = true;
                break a;
              } catch (g) {
              }
              f = false;
            }
            f || (b = null);
          }
        } else
          c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = typeof a.pointerType === "string" ? a.pointerType : nb[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && L.O.b.call(this);
      }
    }
    B(L, K);
    var nb = lb({ 2: "touch", 3: "pen", 4: "mouse" });
    L.prototype.b = function() {
      L.O.b.call(this);
      var a = this.c;
      a.preventDefault ? a.preventDefault() : a.returnValue = false;
    };
    var ob = "closure_listenable_" + (1e6 * Math.random() | 0);
    var pb = 0;
    function qb(a, b, c, d, f) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.H = f;
      this.key = ++pb;
      this.A = this.D = false;
    }
    function rb(a) {
      a.A = true;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.H = null;
    }
    function sb(a) {
      this.src = a;
      this.a = {};
      this.b = 0;
    }
    sb.prototype.add = function(a, b, c, d, f) {
      var g = a.toString();
      a = this.a[g];
      a || (a = this.a[g] = [], this.b++);
      var e = tb(a, b, d, f);
      -1 < e ? (b = a[e], c || (b.D = false)) : (b = new qb(b, this.src, g, !!d, f), b.D = c, a.push(b));
      return b;
    };
    sb.prototype.remove = function(a, b, c, d) {
      a = a.toString();
      if (!(a in this.a))
        return false;
      var f = this.a[a];
      b = tb(f, b, c, d);
      return -1 < b ? (rb(f[b]), Array.prototype.splice.call(f, b, 1), f.length == 0 && (delete this.a[a], this.b--), true) : false;
    };
    function ub(a, b) {
      var c = b.type;
      if (c in a.a) {
        var d = a.a[c], f = Ma(d, b), g;
        (g = 0 <= f) && Array.prototype.splice.call(d, f, 1);
        g && (rb(b), a.a[c].length == 0 && (delete a.a[c], a.b--));
      }
    }
    function tb(a, b, c, d) {
      for (var f = 0; f < a.length; ++f) {
        var g = a[f];
        if (!g.A && g.listener == b && g.capture == !!c && g.H == d)
          return f;
      }
      return -1;
    }
    var vb = "closure_lm_" + (1e6 * Math.random() | 0);
    var wb = {};
    var xb = 0;
    function yb(a, b, c, d, f) {
      if (d && d.once)
        zb(a, b, c, d, f);
      else if (Array.isArray(b))
        for (var g = 0; g < b.length; g++)
          yb(a, b[g], c, d, f);
      else
        c = Ab(c), a && a[ob] ? a.f.add(String(b), c, false, sa(d) ? !!d.capture : !!d, f) : Bb(a, b, c, false, d, f);
    }
    function Bb(a, b, c, d, f, g) {
      if (!b)
        throw Error("Invalid event type");
      var e = sa(f) ? !!f.capture : !!f, h = Cb(a);
      h || (a[vb] = h = new sb(a));
      c = h.add(b, c, d, e, g);
      if (!c.proxy) {
        d = Db();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
          mb || (f = e), f === void 0 && (f = false), a.addEventListener(b.toString(), d, f);
        else if (a.attachEvent)
          a.attachEvent(Eb(b.toString()), d);
        else if (a.addListener && a.removeListener)
          a.addListener(d);
        else
          throw Error("addEventListener and attachEvent are unavailable.");
        xb++;
      }
    }
    function Db() {
      function a(c) {
        return b.call(a.src, a.listener, c);
      }
      var b = Fb;
      return a;
    }
    function zb(a, b, c, d, f) {
      if (Array.isArray(b))
        for (var g = 0; g < b.length; g++)
          zb(a, b[g], c, d, f);
      else
        c = Ab(c), a && a[ob] ? a.f.add(String(b), c, true, sa(d) ? !!d.capture : !!d, f) : Bb(a, b, c, true, d, f);
    }
    function Gb(a, b, c, d, f) {
      if (Array.isArray(b))
        for (var g = 0; g < b.length; g++)
          Gb(a, b[g], c, d, f);
      else
        (d = sa(d) ? !!d.capture : !!d, c = Ab(c), a && a[ob]) ? a.f.remove(String(b), c, d, f) : a && (a = Cb(a)) && (b = a.a[b.toString()], a = -1, b && (a = tb(b, c, d, f)), (c = -1 < a ? b[a] : null) && Hb(c));
    }
    function Hb(a) {
      if (typeof a !== "number" && a && !a.A) {
        var b = a.src;
        if (b && b[ob])
          ub(b.f, a);
        else {
          var c = a.type, d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Eb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          xb--;
          (c = Cb(b)) ? (ub(c, a), c.b == 0 && (c.src = null, b[vb] = null)) : rb(a);
        }
      }
    }
    function Eb(a) {
      return a in wb ? wb[a] : wb[a] = "on" + a;
    }
    function Fb(a, b) {
      if (a.A)
        a = true;
      else {
        b = new L(b, this);
        var c = a.listener, d = a.H || a.src;
        a.D && Hb(a);
        a = c.call(d, b);
      }
      return a;
    }
    function Cb(a) {
      a = a[vb];
      return a instanceof sb ? a : null;
    }
    var Ib = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
    function Ab(a) {
      if (typeof a === "function")
        return a;
      a[Ib] || (a[Ib] = function(b) {
        return a.handleEvent(b);
      });
      return a[Ib];
    }
    function M() {
      jb.call(this);
      this.f = new sb(this);
      this.U = this;
    }
    B(M, jb);
    M.prototype[ob] = true;
    M.prototype.addEventListener = function(a, b, c, d) {
      yb(this, a, b, c, d);
    };
    M.prototype.removeEventListener = function(a, b, c, d) {
      Gb(this, a, b, c, d);
    };
    function O(a, b) {
      a = a.U;
      var c = b.type || b;
      if (typeof b === "string")
        b = new K(b, a);
      else if (b instanceof K)
        b.target = b.target || a;
      else {
        var d = b;
        b = new K(c, a);
        Ua(b, d);
      }
      a = b.a = a;
      Jb(a, c, true, b);
      Jb(a, c, false, b);
    }
    function Jb(a, b, c, d) {
      if (b = a.f.a[String(b)]) {
        b = b.concat();
        for (var f = true, g = 0; g < b.length; ++g) {
          var e = b[g];
          if (e && !e.A && e.capture == c) {
            var h = e.listener, k = e.H || e.src;
            e.D && ub(a.f, e);
            f = h.call(k, d) !== false && f;
          }
        }
      }
    }
    var Kb = w;
    function Lb(a, b, c) {
      if (typeof a === "function")
        c && (a = A(a, c));
      else if (a && typeof a.handleEvent == "function")
        a = A(a.handleEvent, a);
      else
        throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : Kb.setTimeout(a, b || 0);
    }
    function Mb(a, b) {
      this.name = a;
      this.value = b;
    }
    Mb.prototype.toString = function() {
      return this.name;
    };
    var Nb = new Mb("OFF", Infinity);
    var Ob = new Mb("SEVERE", 1e3);
    var Pb = new Mb("CONFIG", 700);
    var Qb = new Mb("FINE", 500);
    function Rb() {
      this.clear();
    }
    var Sb;
    Rb.prototype.clear = function() {
    };
    function Ub(a, b, c) {
      this.reset(a || Nb, b, c, void 0, void 0);
    }
    Ub.prototype.reset = function() {
    };
    function Vb(a, b) {
      this.a = null;
      this.f = [];
      this.b = (b === void 0 ? null : b) || null;
      this.c = [];
      this.g = { getName: function() {
        return a;
      } };
    }
    function Wb(a) {
      if (a.a)
        return a.a;
      if (a.b)
        return Wb(a.b);
      Da("Root logger has no level set.");
      return Nb;
    }
    function Xb(a, b) {
      for (; a; )
        a.f.forEach(function(c) {
          c(b);
        }), a = a.b;
    }
    function Yb() {
      this.entries = {};
      var a = new Vb("");
      a.a = Pb;
      this.entries[""] = a;
    }
    var Zb;
    function $b(a, b, c) {
      var d = a.entries[b];
      if (d)
        return c !== void 0 && (d.a = c), d;
      d = $b(a, b.substr(0, b.lastIndexOf(".")));
      var f = new Vb(b, d);
      a.entries[b] = f;
      d.c.push(f);
      c !== void 0 && (f.a = c);
      return f;
    }
    function ac() {
      Zb || (Zb = new Yb());
      return Zb;
    }
    function bc(a, b, c) {
      var d;
      if (d = a) {
        if (d = a && b) {
          d = b.value;
          var f = a ? Wb($b(ac(), a.getName())) : Nb;
          d = d >= f.value;
        }
      }
      d && (b = b || Nb, d = $b(ac(), a.getName()), typeof c === "function" && (c = c()), Sb || (Sb = new Rb()), a = a.getName(), a = new Ub(b, c, a), Xb(d, a));
    }
    function P(a, b) {
      a && bc(a, Qb, b);
    }
    function cc() {
    }
    cc.prototype.a = null;
    function dc(a) {
      var b;
      (b = a.a) || (b = {}, ec(a) && (b[0] = true, b[1] = true), b = a.a = b);
      return b;
    }
    var fc;
    function gc() {
    }
    B(gc, cc);
    function hc(a) {
      return (a = ec(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    }
    function ec(a) {
      if (!a.b && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];
          try {
            return new ActiveXObject(d), a.b = d;
          } catch (f) {
          }
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.b;
    }
    fc = new gc();
    t();
    u();
    function ic(a, b) {
      this.b = a[w.Symbol.iterator]();
      this.c = b;
      this.f = 0;
    }
    ic.prototype[Symbol.iterator] = function() {
      return this;
    };
    ic.prototype.next = function() {
      var a = this.b.next();
      return { value: a.done ? void 0 : this.c.call(void 0, a.value, this.f++), done: a.done };
    };
    function jc(a, b) {
      return new ic(a, b);
    }
    t();
    u();
    t();
    u();
    var kc = "StopIteration" in w ? w.StopIteration : { message: "StopIteration", stack: "" };
    function Q() {
    }
    Q.prototype.next = function() {
      return Q.prototype.a.call(this);
    };
    Q.prototype.a = function() {
      throw kc;
    };
    Q.prototype.u = function() {
      return this;
    };
    function lc(a) {
      if (a instanceof R || a instanceof S || a instanceof T)
        return a;
      if (typeof a.next == "function")
        return new R(function() {
          return mc(a);
        });
      t();
      u();
      if (typeof a[Symbol.iterator] == "function")
        return t(), u(), new R(function() {
          return a[Symbol.iterator]();
        });
      if (typeof a.u == "function")
        return new R(function() {
          return mc(a.u());
        });
      throw Error("Not an iterator or iterable.");
    }
    function mc(a) {
      if (!(a instanceof Q))
        return a;
      var b = false;
      return { next: function() {
        for (var c; !b; )
          try {
            c = a.a();
            break;
          } catch (d) {
            if (d !== kc)
              throw d;
            b = true;
          }
        return { value: c, done: b };
      } };
    }
    t();
    u();
    function R(a) {
      this.b = a;
    }
    R.prototype.u = function() {
      return new S(this.b());
    };
    R.prototype[Symbol.iterator] = function() {
      return new T(this.b());
    };
    R.prototype.c = function() {
      return new T(this.b());
    };
    t();
    u();
    function S(a) {
      this.b = a;
    }
    oa(S, Q);
    S.prototype.a = function() {
      var a = this.b.next();
      if (a.done)
        throw kc;
      return a.value;
    };
    S.prototype.next = function() {
      return S.prototype.a.call(this);
    };
    S.prototype[Symbol.iterator] = function() {
      return new T(this.b);
    };
    S.prototype.c = function() {
      return new T(this.b);
    };
    function T(a) {
      R.call(this, function() {
        return a;
      });
      this.f = a;
    }
    oa(T, R);
    T.prototype.next = function() {
      return this.f.next();
    };
    function nc(a, b) {
      this.o = {};
      this.j = [];
      this.B = this.size = 0;
      var c = arguments.length;
      if (1 < c) {
        if (c % 2)
          throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
          this.set(arguments[d], arguments[d + 1]);
      } else
        a && this.addAll(a);
    }
    n = nc.prototype;
    n.G = function() {
      oc(this);
      return this.j.concat();
    };
    n.has = function(a) {
      return U(this.o, a);
    };
    n.clear = function() {
      this.o = {};
      this.B = this.size = this.j.length = 0;
    };
    n.remove = function(a) {
      return this.delete(a);
    };
    n.delete = function(a) {
      return U(this.o, a) ? (delete this.o[a], --this.size, this.B++, this.j.length > 2 * this.size && oc(this), true) : false;
    };
    function oc(a) {
      if (a.size != a.j.length) {
        for (var b = 0, c = 0; b < a.j.length; ) {
          var d = a.j[b];
          U(a.o, d) && (a.j[c++] = d);
          b++;
        }
        a.j.length = c;
      }
      if (a.size != a.j.length) {
        var f = {};
        for (c = b = 0; b < a.j.length; )
          d = a.j[b], U(f, d) || (a.j[c++] = d, f[d] = 1), b++;
        a.j.length = c;
      }
    }
    n.get = function(a, b) {
      return U(this.o, a) ? this.o[a] : b;
    };
    n.set = function(a, b) {
      U(this.o, a) || (this.size += 1, this.j.push(a), this.B++);
      this.o[a] = b;
    };
    n.addAll = function(a) {
      if (a instanceof nc)
        for (var b = a.G(), c = 0; c < b.length; c++)
          this.set(b[c], a.get(b[c]));
      else
        for (b in a)
          this.set(b, a[b]);
    };
    n.forEach = function(a, b) {
      for (var c = this.G(), d = 0; d < c.length; d++) {
        var f = c[d], g = this.get(f);
        a.call(b, g, f, this);
      }
    };
    n.clone = function() {
      return new nc(this);
    };
    n.keys = function() {
      return lc(this.u(true)).c();
    };
    n.values = function() {
      return lc(this.u(false)).c();
    };
    n.entries = function() {
      var a = this;
      return jc(this.keys(), function(b) {
        return [b, a.get(b)];
      });
    };
    n.u = function(a) {
      oc(this);
      var b = 0, c = this.B, d = this, f = new Q();
      f.a = function() {
        if (c != d.B)
          throw Error("The map has changed since the iterator was created");
        if (b >= d.j.length)
          throw kc;
        var g = d.j[b++];
        return a ? g : d.o[g];
      };
      f.next = f.a.bind(f);
      return f;
    };
    function U(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }
    var pc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    function qc(a) {
      M.call(this);
      this.headers = new nc();
      this.C = a || null;
      this.c = false;
      this.J = this.a = null;
      this.P = this.v = "";
      this.g = 0;
      this.l = "";
      this.i = this.N = this.s = this.L = false;
      this.h = 0;
      this.w = null;
      this.m = rc;
      this.I = this.M = false;
    }
    B(qc, M);
    var rc = "";
    qc.prototype.b = $b(ac(), "goog.net.XhrIo", void 0).g;
    var sc = /^https?$/i;
    var tc = ["POST", "PUT"];
    function uc(a, b, c) {
      if (a.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + a.v + "; newUri=" + b);
      a.v = b;
      a.l = "";
      a.g = 0;
      a.P = "POST";
      a.L = false;
      a.c = true;
      a.a = a.C ? hc(a.C) : hc(fc);
      a.J = a.C ? dc(a.C) : dc(fc);
      a.a.onreadystatechange = A(a.R, a);
      try {
        P(a.b, V(a, "Opening Xhr")), a.N = true, a.a.open("POST", String(b), true), a.N = false;
      } catch (g) {
        P(a.b, V(a, "Error opening Xhr: " + g.message));
        vc(a, g);
        return;
      }
      b = c || "";
      c = a.headers.clone();
      var d = c.G().find(function(g) {
        return g.toLowerCase() == "content-type";
      }), f = w.FormData && b instanceof w.FormData;
      !(0 <= Ma(tc, "POST")) || d || f || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
      c.forEach(function(g, e) {
        this.a.setRequestHeader(e, g);
      }, a);
      a.m && (a.a.responseType = a.m);
      "withCredentials" in a.a && a.a.withCredentials !== a.M && (a.a.withCredentials = a.M);
      try {
        wc(a), 0 < a.h && (a.I = xc(a.a), P(a.b, V(a, "Will abort after " + a.h + "ms if incomplete, xhr2 " + a.I)), a.I ? (a.a.timeout = a.h, a.a.ontimeout = A(a.T, a)) : a.w = Lb(a.T, a.h, a)), P(a.b, V(a, "Sending request")), a.s = true, a.a.send(b), a.s = false;
      } catch (g) {
        P(a.b, V(a, "Send error: " + g.message)), vc(a, g);
      }
    }
    function xc(a) {
      return $a && ib() && typeof a.timeout === "number" && a.ontimeout !== void 0;
    }
    n = qc.prototype;
    n.T = function() {
      typeof qa != "undefined" && this.a && (this.l = "Timed out after " + this.h + "ms, aborting", this.g = 8, P(this.b, V(this, this.l)), O(this, "timeout"), this.abort(8));
    };
    function vc(a, b) {
      a.c = false;
      a.a && (a.i = true, a.a.abort(), a.i = false);
      a.l = b;
      a.g = 5;
      yc(a);
      zc(a);
    }
    function yc(a) {
      a.L || (a.L = true, O(a, "complete"), O(a, "error"));
    }
    n.abort = function(a) {
      this.a && this.c && (P(this.b, V(this, "Aborting")), this.c = false, this.i = true, this.a.abort(), this.i = false, this.g = a || 7, O(this, "complete"), O(this, "abort"), zc(this));
    };
    n.R = function() {
      this.K || (this.N || this.s || this.i ? Ac(this) : this.W());
    };
    n.W = function() {
      Ac(this);
    };
    function Ac(a) {
      if (a.c && typeof qa != "undefined") {
        if (a.J[1] && W(a) == 4 && a.getStatus() == 2)
          P(a.b, V(a, "Local request error detected and ignored"));
        else if (a.s && W(a) == 4)
          Lb(a.R, 0, a);
        else if (O(a, "readystatechange"), W(a) == 4) {
          P(a.b, V(a, "Request complete"));
          a.c = false;
          try {
            var b = a.getStatus();
            a:
              switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var c = true;
                  break a;
                default:
                  c = false;
              }
            var d;
            if (!(d = c)) {
              var f;
              if (f = b === 0) {
                var g = String(a.v).match(pc)[1] || null;
                if (!g && w.self && w.self.location) {
                  var e = w.self.location.protocol;
                  g = e.substr(0, e.length - 1);
                }
                f = !sc.test(g ? g.toLowerCase() : "");
              }
              d = f;
            }
            if (d)
              O(a, "complete"), O(a, "success");
            else {
              a.g = 6;
              try {
                var h = 2 < W(a) ? a.a.statusText : "";
              } catch (k) {
                P(a.b, "Can not get status: " + k.message), h = "";
              }
              a.l = h + " [" + a.getStatus() + "]";
              yc(a);
            }
          } finally {
            zc(a);
          }
        }
      }
    }
    function zc(a) {
      if (a.a) {
        wc(a);
        var b = a.a, c = a.J[0] ? ra : null;
        a.a = null;
        a.J = null;
        O(a, "ready");
        try {
          b.onreadystatechange = c;
        } catch (d) {
          (a = a.b) && bc(a, Ob, "Problem encountered resetting onreadystatechange: " + d.message);
        }
      }
    }
    function wc(a) {
      a.a && a.I && (a.a.ontimeout = null);
      a.w && (Kb.clearTimeout(a.w), a.w = null);
    }
    function W(a) {
      return a.a ? a.a.readyState : 0;
    }
    n.getStatus = function() {
      try {
        return 2 < W(this) ? this.a.status : -1;
      } catch (a) {
        return -1;
      }
    };
    function Bc(a) {
      try {
        if (!a.a)
          return null;
        if ("response" in a.a)
          return a.a.response;
        switch (a.m) {
          case rc:
          case "text":
            return a.a.responseText;
          case "arraybuffer":
            if ("mozResponseArrayBuffer" in a.a)
              return a.a.mozResponseArrayBuffer;
        }
        var b = a.b;
        b && bc(b, Ob, "Response type " + a.m + " is not supported on this browser");
        return null;
      } catch (c) {
        return P(a.b, "Can not get response: " + c.message), null;
      }
    }
    function Cc(a, b) {
      if (a.a && W(a) == 4)
        return a = a.a.getResponseHeader(b), a === null ? void 0 : a;
    }
    function Dc(a) {
      var b = {};
      a = (a.a && W(a) == 4 ? a.a.getAllResponseHeaders() || "" : "").split("\r\n");
      for (var c = 0; c < a.length; c++)
        if (!/^[\s\xa0]*$/.test(a[c])) {
          var d = Va(a[c]), f = d[0];
          d = d[1];
          if (typeof d === "string") {
            d = d.trim();
            var g = b[f] || [];
            b[f] = g;
            g.push(d);
          }
        }
      return Sa(b, function(e) {
        return e.join(", ");
      });
    }
    function V(a, b) {
      return b + " [" + a.P + " " + a.v + " " + a.getStatus() + "]";
    }
    var Ec = {};
    var Fc = null;
    function Gc(a) {
      var b = a.length, c = 3 * b / 4;
      c % 3 ? c = Math.floor(c) : I("=.", a[b - 1]) && (c = I("=.", a[b - 2]) ? c - 2 : c - 1);
      var d = new Uint8Array(c), f = 0;
      Hc(a, function(g) {
        d[f++] = g;
      });
      return d.subarray(0, f);
    }
    function Hc(a, b) {
      function c(k) {
        for (; d < a.length; ) {
          var l = a.charAt(d++), m = Fc[l];
          if (m != null)
            return m;
          if (!/^[\s\xa0]*$/.test(l))
            throw Error("Unknown base64 encoding at char: " + l);
        }
        return k;
      }
      Ic();
      for (var d = 0; ; ) {
        var f = c(-1), g = c(0), e = c(64), h = c(64);
        if (h === 64 && f === -1)
          break;
        b(f << 2 | g >> 4);
        e != 64 && (b(g << 4 & 240 | e >> 2), h != 64 && b(e << 6 & 192 | h));
      }
    }
    function Ic() {
      if (!Fc) {
        Fc = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
          var d = a.concat(b[c].split(""));
          Ec[c] = d;
          for (var f = 0; f < d.length; f++) {
            var g = d[f];
            Fc[g] === void 0 && (Fc[g] = f);
          }
        }
      }
    }
    var Jc = ["content-type", "grpc-status", "grpc-message"];
    function X(a) {
      this.a = a.Z;
      this.m = null;
      this.b = [];
      this.h = [];
      this.g = [];
      this.f = [];
      this.c = [];
      this.l = false;
      this.i = 0;
      this.s = new Ea();
      var b = this;
      yb(this.a, "readystatechange", function() {
        var c = b.a;
        if (c = c.a ? c.a.getResponseHeader("Content-Type") : null) {
          c = c.toLowerCase();
          if (c.lastIndexOf("application/grpc-web-text", 0) == 0) {
            c = b.a;
            try {
              var d = c.a ? c.a.responseText : "";
            } catch (k) {
              P(c.b, "Can not get responseText: " + k.message), d = "";
            }
            c = d || "";
            d = c.length - c.length % 4;
            c = c.substr(b.i, d - b.i);
            if (c.length == 0)
              return;
            b.i = d;
            c = Gc(c);
          } else if (c.lastIndexOf("application/grpc", 0) == 0)
            c = new Uint8Array(Bc(b.a));
          else {
            Y(b, new F(2, "Unknown Content-type received."));
            return;
          }
          d = null;
          try {
            d = Ga(b.s, c);
          } catch (k) {
            Y(b, new F(2, "Error in parsing response body"));
          }
          if (d)
            for (c = 0; c < d.length; c++) {
              if (Ha in d[c]) {
                var f = d[c][Ha];
                if (f) {
                  var g = void 0;
                  try {
                    g = b.m(f);
                  } catch (k) {
                    Y(b, new F(13, "Error when deserializing response data; error: " + k + (", response: " + g)));
                  }
                  if (g) {
                    f = b;
                    for (var e = 0; e < f.b.length; e++)
                      f.b[e](g);
                  }
                }
              }
              if (H in d[c] && 0 < d[c][H].length) {
                f = "";
                for (g = 0; g < d[c][H].length; g++)
                  f += String.fromCharCode(d[c][H][g]);
                f = f.trim().split("\r\n");
                g = {};
                for (e = 0; e < f.length; e++) {
                  var h = f[e].indexOf(":");
                  g[f[e].substring(0, h).trim()] = f[e].substring(h + 1).trim();
                }
                f = g;
                g = 0;
                e = "";
                "grpc-status" in f && (g = Number(f["grpc-status"]), delete f["grpc-status"]);
                "grpc-message" in f && (e = f["grpc-message"], delete f["grpc-message"]);
                Y(b, new F(g, e, f));
              }
            }
        }
      });
      yb(this.a, "complete", function() {
        var c = b.a.g, d = 2, f = "", g = {}, e = Dc(b.a);
        Object.keys(e).forEach(function(h) {
          Jc.includes(h) || (g[h] = e[h]);
        });
        Kc(b, g);
        if (c != 0) {
          switch (c) {
            case 7:
              d = 10;
              break;
            case 8:
              d = 4;
              break;
            case 6:
              d = za(b.a.getStatus());
              break;
            default:
              d = 14;
          }
          d == 10 && b.l || Y(b, new F(d, Ba(c)));
        } else
          c = false, "grpc-status" in e && (d = Number(Cc(b.a, "grpc-status")), "grpc-message" in e && (f = Cc(b.a, "grpc-message")), d != 0 && (Y(b, new F(d, f || "", e)), c = true)), c || Lc(b);
      });
    }
    X.prototype.on = function(a, b) {
      a == "data" ? this.b.push(b) : a == "status" ? this.h.push(b) : a == "metadata" ? this.g.push(b) : a == "end" ? this.c.push(b) : a == "error" && this.f.push(b);
      return this;
    };
    function Mc(a, b) {
      b = a.indexOf(b);
      -1 < b && a.splice(b, 1);
    }
    X.prototype.removeListener = function(a, b) {
      a == "data" ? Mc(this.b, b) : a == "status" ? Mc(this.h, b) : a == "metadata" ? Mc(this.g, b) : a == "end" ? Mc(this.c, b) : a == "error" && Mc(this.f, b);
      return this;
    };
    X.prototype.cancel = function() {
      this.l = true;
      this.a.abort();
    };
    function Y(a, b) {
      if (b.code != 0)
        for (var c = new F(b.code, decodeURIComponent(b.message || ""), b.metadata), d = 0; d < a.f.length; d++)
          a.f[d](c);
      b = { code: b.code, details: decodeURIComponent(b.message || ""), metadata: b.metadata };
      for (c = 0; c < a.h.length; c++)
        a.h[c](b);
    }
    function Kc(a, b) {
      for (var c = 0; c < a.g.length; c++)
        a.g[c](b);
    }
    function Lc(a) {
      for (var b = 0; b < a.c.length; b++)
        a.c[b]();
    }
    X.prototype.cancel = X.prototype.cancel;
    X.prototype.removeListener = X.prototype.removeListener;
    X.prototype.on = X.prototype.on;
    function Nc(a) {
      var b = "";
      Ra(a, function(c, d) {
        b += d;
        b += ":";
        b += c;
        b += "\r\n";
      });
      return b;
    }
    function Z(a, b) {
      a = a === void 0 ? {} : a;
      this.a = a.format || y("format", a) || "text";
      this.g = a.aa || y("suppressCorsPreflight", a) || false;
      this.f = a.withCredentials || y("withCredentials", a) || false;
      this.b = a.$ || y("streamInterceptors", a) || [];
      this.h = a.ba || y("unaryInterceptors", a) || [];
      this.c = b || null;
    }
    Z.prototype.X = function(a, b, c, d, f) {
      var g = this, e = a.substr(0, a.length - d.name.length);
      a = Oc(function(h) {
        return Pc(g, h, e);
      }, this.b).call(this, ya(d, b, c));
      Qc(a, f, false);
      return new Aa(a);
    };
    Z.prototype.S = function(a, b, c, d) {
      var f = this, g = a.substr(0, a.length - d.name.length);
      return Oc(function(e) {
        return new Promise(function(h, k) {
          var l = Pc(f, e, g), m, p, q;
          Qc(l, function(x, z, N, Tb) {
            x ? k(x) : z ? q = z : N ? p = N : Tb ? m = Tb : (x = e.getMethodDescriptor(), z = m, z = z === void 0 ? {} : z, h(new D(q, x, z, p === void 0 ? null : p)));
          }, true);
        });
      }, this.h).call(this, ya(d, b, c)).then(function(e) {
        return e.getResponseMessage();
      });
    };
    Z.prototype.unaryCall = function(a, b, c, d) {
      return this.S(a, b, c, d);
    };
    Z.prototype.Y = function(a, b, c, d) {
      var f = this, g = a.substr(0, a.length - d.name.length);
      return Oc(function(e) {
        return Pc(f, e, g);
      }, this.b).call(this, ya(d, b, c));
    };
    function Pc(a, b, c) {
      var d = b.getMethodDescriptor(), f = c + d.getName();
      c = a.c ? a.c : new qc();
      c.M = a.f;
      var g = new X({ Z: c }), e = d.getResponseDeserializeFn();
      g.m = e;
      e = b.getMetadata();
      for (var h in e)
        c.headers.set(h, e[h]);
      a.a == "text" ? (c.headers.set("Content-Type", "application/grpc-web-text"), c.headers.set("Accept", "application/grpc-web-text")) : c.headers.set("Content-Type", "application/grpc-web+proto");
      c.headers.set("X-User-Agent", "grpc-web-javascript/0.1");
      c.headers.set("X-Grpc-Web", "1");
      c.headers.has("deadline") && (h = Number(c.headers.get("deadline")), h = Math.ceil(h - new Date().getTime()), c.headers.delete("deadline"), h === Infinity && (h = 0), 0 < h && (c.headers.set("grpc-timeout", h + "m"), c.h = Math.max(0, Math.max(1e3, Math.ceil(1.1 * h)))));
      if (a.g) {
        e = c.headers;
        h = {};
        for (var k = ha(e.keys()), l = k.next(); !l.done; l = k.next())
          l = l.value, h[l] = e.get(l);
        c.headers.clear();
        b: {
          for (m in h) {
            var m = false;
            break b;
          }
          m = true;
        }
        if (!m)
          if (h = Nc(h), typeof f === "string") {
            if (m = encodeURIComponent("$httpHeaders"), h = h != null ? "=" + encodeURIComponent(String(h)) : "", m += h)
              h = f.indexOf("#"), 0 > h && (h = f.length), e = f.indexOf("?"), 0 > e || e > h ? (e = h, k = "") : k = f.substring(e + 1, h), f = [f.substr(0, e), k, f.substr(h)], h = f[1], f[1] = m ? h ? h + "&" + m : m : h, f = f[0] + (f[1] ? "?" + f[1] : "") + f[2];
          } else
            f.a("$httpHeaders", h);
      }
      b = d.getRequestSerializeFn()(b.getRequestMessage());
      d = b.length;
      m = [0, 0, 0, 0];
      h = new Uint8Array(5 + d);
      for (e = 3; 0 <= e; e--)
        m[e] = d % 256, d >>>= 8;
      h.set(new Uint8Array(m), 1);
      h.set(b, 5);
      b = h;
      if (a.a == "text") {
        a = b;
        var p;
        p === void 0 && (p = 0);
        Ic();
        p = Ec[p];
        b = Array(Math.floor(a.length / 3));
        d = p[64] || "";
        for (m = h = 0; h < a.length - 2; h += 3) {
          l = a[h];
          var q = a[h + 1];
          k = a[h + 2];
          e = p[l >> 2];
          l = p[(l & 3) << 4 | q >> 4];
          q = p[(q & 15) << 2 | k >> 6];
          k = p[k & 63];
          b[m++] = e + l + q + k;
        }
        e = 0;
        k = d;
        switch (a.length - h) {
          case 2:
            e = a[h + 1], k = p[(e & 15) << 2] || d;
          case 1:
            a = a[h], b[m] = p[a >> 2] + p[(a & 3) << 4 | e >> 4] + k + d;
        }
        b = b.join("");
      } else
        a.a == "binary" && (c.m = "arraybuffer");
      uc(c, f, b);
      return g;
    }
    function Qc(a, b, c) {
      var d = false, f = null, g = false;
      a.on("data", function(e) {
        d = true;
        f = e;
      });
      a.on("error", function(e) {
        e.code == 0 || g || (g = true, b(e, null));
      });
      a.on("status", function(e) {
        e.code == 0 || g ? c && b(null, null, e) : (g = true, b({ code: e.code, message: e.details, metadata: e.metadata }, null));
      });
      if (c)
        a.on("metadata", function(e) {
          b(null, null, null, e);
        });
      a.on("end", function() {
        g || (d ? b(null, f) : b({ code: 2, message: "Incomplete response" }));
        c && b(null, null);
      });
    }
    function Oc(a, b) {
      var c = a;
      b.forEach(function(d) {
        var f = c;
        c = function(g) {
          return d.intercept(g, f);
        };
      });
      return c;
    }
    Z.prototype.serverStreaming = Z.prototype.Y;
    Z.prototype.unaryCall = Z.prototype.unaryCall;
    Z.prototype.thenableCall = Z.prototype.S;
    Z.prototype.rpcCall = Z.prototype.X;
    module.exports.CallOptions = xa;
    module.exports.MethodDescriptor = E;
    module.exports.GrpcWebClientBase = Z;
    module.exports.RpcError = F;
    module.exports.StatusCode = { OK: 0, CANCELLED: 1, UNKNOWN: 2, INVALID_ARGUMENT: 3, DEADLINE_EXCEEDED: 4, NOT_FOUND: 5, ALREADY_EXISTS: 6, PERMISSION_DENIED: 7, UNAUTHENTICATED: 16, RESOURCE_EXHAUSTED: 8, FAILED_PRECONDITION: 9, ABORTED: 10, OUT_OF_RANGE: 11, UNIMPLEMENTED: 12, INTERNAL: 13, UNAVAILABLE: 14, DATA_LOSS: 15 };
    module.exports.MethodType = { UNARY: "unary", SERVER_STREAMING: "server_streaming", BIDI_STREAMING: "bidi_streaming" };
    Kb = typeof globalThis !== "undefined" && globalThis || self;
  }
});

// external:google-protobuf
var google_protobuf_exports = {};
import * as google_protobuf_star from "google-protobuf";
var init_google_protobuf = __esm({
  "external:google-protobuf"() {
    __reExport(google_protobuf_exports, google_protobuf_star);
  }
});

// src/proto/echo_pb.js
var require_echo_pb = __commonJS({
  "src/proto/echo_pb.js"(exports) {
    var jspb = (init_google_protobuf(), __toCommonJS(google_protobuf_exports));
    var goog = jspb;
    var global2 = function() {
      if (this) {
        return this;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global2 !== "undefined") {
        return global2;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.grpc.gateway.testing.ClientStreamingEchoRequest", null, global2);
    goog.exportSymbol("proto.grpc.gateway.testing.ClientStreamingEchoResponse", null, global2);
    goog.exportSymbol("proto.grpc.gateway.testing.EchoRequest", null, global2);
    goog.exportSymbol("proto.grpc.gateway.testing.EchoResponse", null, global2);
    goog.exportSymbol("proto.grpc.gateway.testing.Empty", null, global2);
    goog.exportSymbol("proto.grpc.gateway.testing.OneOfSample", null, global2);
    goog.exportSymbol("proto.grpc.gateway.testing.OneOfSample.TestOneofCase", null, global2);
    goog.exportSymbol("proto.grpc.gateway.testing.Score", null, global2);
    goog.exportSymbol("proto.grpc.gateway.testing.ServerStreamingEchoRequest", null, global2);
    goog.exportSymbol("proto.grpc.gateway.testing.ServerStreamingEchoResponse", null, global2);
    goog.exportSymbol("proto.grpc.gateway.testing.Student", null, global2);
    goog.exportSymbol("proto.grpc.gateway.testing.Suject", null, global2);
    proto.grpc.gateway.testing.Empty = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.Empty, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.Empty.displayName = "proto.grpc.gateway.testing.Empty";
    }
    proto.grpc.gateway.testing.Student = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.grpc.gateway.testing.Student.repeatedFields_, null);
    };
    goog.inherits(proto.grpc.gateway.testing.Student, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.Student.displayName = "proto.grpc.gateway.testing.Student";
    }
    proto.grpc.gateway.testing.Suject = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.grpc.gateway.testing.Suject.repeatedFields_, null);
    };
    goog.inherits(proto.grpc.gateway.testing.Suject, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.Suject.displayName = "proto.grpc.gateway.testing.Suject";
    }
    proto.grpc.gateway.testing.Score = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.Score, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.Score.displayName = "proto.grpc.gateway.testing.Score";
    }
    proto.grpc.gateway.testing.OneOfSample = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.grpc.gateway.testing.OneOfSample.oneofGroups_);
    };
    goog.inherits(proto.grpc.gateway.testing.OneOfSample, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.OneOfSample.displayName = "proto.grpc.gateway.testing.OneOfSample";
    }
    proto.grpc.gateway.testing.EchoRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.EchoRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.EchoRequest.displayName = "proto.grpc.gateway.testing.EchoRequest";
    }
    proto.grpc.gateway.testing.EchoResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.EchoResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.EchoResponse.displayName = "proto.grpc.gateway.testing.EchoResponse";
    }
    proto.grpc.gateway.testing.ServerStreamingEchoRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.ServerStreamingEchoRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.ServerStreamingEchoRequest.displayName = "proto.grpc.gateway.testing.ServerStreamingEchoRequest";
    }
    proto.grpc.gateway.testing.ServerStreamingEchoResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.ServerStreamingEchoResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.ServerStreamingEchoResponse.displayName = "proto.grpc.gateway.testing.ServerStreamingEchoResponse";
    }
    proto.grpc.gateway.testing.ClientStreamingEchoRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.ClientStreamingEchoRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.ClientStreamingEchoRequest.displayName = "proto.grpc.gateway.testing.ClientStreamingEchoRequest";
    }
    proto.grpc.gateway.testing.ClientStreamingEchoResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.gateway.testing.ClientStreamingEchoResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.gateway.testing.ClientStreamingEchoResponse.displayName = "proto.grpc.gateway.testing.ClientStreamingEchoResponse";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.Empty.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.Empty.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.Empty.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.Empty.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.Empty();
      return proto.grpc.gateway.testing.Empty.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.Empty.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.Empty.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.Empty.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.Empty.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    proto.grpc.gateway.testing.Student.repeatedFields_ = [3];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.Student.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.Student.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.Student.toObject = function(includeInstance, msg) {
        var f, obj = {
          name: jspb.Message.getFieldWithDefault(msg, 1, ""),
          sex: jspb.Message.getFieldWithDefault(msg, 2, ""),
          favoratesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.Student.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.Student();
      return proto.grpc.gateway.testing.Student.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.Student.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setName(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setSex(value);
            break;
          case 3:
            var value = reader.readString();
            msg.addFavorates(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.Student.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.Student.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.Student.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = message.getSex();
      if (f.length > 0) {
        writer.writeString(2, f);
      }
      f = message.getFavoratesList();
      if (f.length > 0) {
        writer.writeRepeatedString(3, f);
      }
    };
    proto.grpc.gateway.testing.Student.prototype.getName = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.Student.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.grpc.gateway.testing.Student.prototype.getSex = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.grpc.gateway.testing.Student.prototype.setSex = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.grpc.gateway.testing.Student.prototype.getFavoratesList = function() {
      return jspb.Message.getRepeatedField(this, 3);
    };
    proto.grpc.gateway.testing.Student.prototype.setFavoratesList = function(value) {
      return jspb.Message.setField(this, 3, value || []);
    };
    proto.grpc.gateway.testing.Student.prototype.addFavorates = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
    };
    proto.grpc.gateway.testing.Student.prototype.clearFavoratesList = function() {
      return this.setFavoratesList([]);
    };
    proto.grpc.gateway.testing.Suject.repeatedFields_ = [1, 2];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.Suject.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.Suject.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.Suject.toObject = function(includeInstance, msg) {
        var f, obj = {
          liberalArtsList: jspb.Message.toObjectList(msg.getLiberalArtsList(), proto.grpc.gateway.testing.Score.toObject, includeInstance),
          scienceList: jspb.Message.toObjectList(msg.getScienceList(), proto.grpc.gateway.testing.Score.toObject, includeInstance)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.Suject.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.Suject();
      return proto.grpc.gateway.testing.Suject.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.Suject.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.grpc.gateway.testing.Score();
            reader.readMessage(value, proto.grpc.gateway.testing.Score.deserializeBinaryFromReader);
            msg.addLiberalArts(value);
            break;
          case 2:
            var value = new proto.grpc.gateway.testing.Score();
            reader.readMessage(value, proto.grpc.gateway.testing.Score.deserializeBinaryFromReader);
            msg.addScience(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.Suject.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.Suject.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.Suject.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getLiberalArtsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.grpc.gateway.testing.Score.serializeBinaryToWriter);
      }
      f = message.getScienceList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(2, f, proto.grpc.gateway.testing.Score.serializeBinaryToWriter);
      }
    };
    proto.grpc.gateway.testing.Suject.prototype.getLiberalArtsList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.grpc.gateway.testing.Score, 1);
    };
    proto.grpc.gateway.testing.Suject.prototype.setLiberalArtsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.grpc.gateway.testing.Suject.prototype.setLiberalArtsList.getValueType = function() {
      return proto.grpc.gateway.testing.Score;
    };
    proto.grpc.gateway.testing.Suject.prototype.setLiberalArtsList.valueType = proto.grpc.gateway.testing.Score;
    proto.grpc.gateway.testing.Suject.prototype.addLiberalArts = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grpc.gateway.testing.Score, opt_index);
    };
    proto.grpc.gateway.testing.Suject.prototype.clearLiberalArtsList = function() {
      return this.setLiberalArtsList([]);
    };
    proto.grpc.gateway.testing.Suject.prototype.getScienceList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.grpc.gateway.testing.Score, 2);
    };
    proto.grpc.gateway.testing.Suject.prototype.setScienceList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 2, value);
    };
    proto.grpc.gateway.testing.Suject.prototype.setScienceList.getValueType = function() {
      return proto.grpc.gateway.testing.Score;
    };
    proto.grpc.gateway.testing.Suject.prototype.setScienceList.valueType = proto.grpc.gateway.testing.Score;
    proto.grpc.gateway.testing.Suject.prototype.addScience = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.grpc.gateway.testing.Score, opt_index);
    };
    proto.grpc.gateway.testing.Suject.prototype.clearScienceList = function() {
      return this.setScienceList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.Score.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.Score.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.Score.toObject = function(includeInstance, msg) {
        var f, obj = {
          name: jspb.Message.getFieldWithDefault(msg, 1, ""),
          score: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.Score.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.Score();
      return proto.grpc.gateway.testing.Score.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.Score.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setName(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setScore(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.Score.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.Score.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.Score.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = message.getScore();
      if (f.length > 0) {
        writer.writeString(2, f);
      }
    };
    proto.grpc.gateway.testing.Score.prototype.getName = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.Score.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.grpc.gateway.testing.Score.prototype.getScore = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.grpc.gateway.testing.Score.prototype.setScore = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.grpc.gateway.testing.OneOfSample.oneofGroups_ = [[4, 9]];
    proto.grpc.gateway.testing.OneOfSample.TestOneofCase = {
      TEST_ONEOF_NOT_SET: 0,
      NAME: 4,
      SUB_MESSAGE: 9
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.getTestOneofCase = function() {
      return jspb.Message.computeOneofCase(this, proto.grpc.gateway.testing.OneOfSample.oneofGroups_[0]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.OneOfSample.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.OneOfSample.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.OneOfSample.toObject = function(includeInstance, msg) {
        var f, obj = {
          name: jspb.Message.getFieldWithDefault(msg, 4, ""),
          subMessage: (f = msg.getSubMessage()) && proto.grpc.gateway.testing.Score.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.OneOfSample.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.OneOfSample();
      return proto.grpc.gateway.testing.OneOfSample.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.OneOfSample.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 4:
            var value = reader.readString();
            msg.setName(value);
            break;
          case 9:
            var value = new proto.grpc.gateway.testing.Score();
            reader.readMessage(value, proto.grpc.gateway.testing.Score.deserializeBinaryFromReader);
            msg.setSubMessage(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.OneOfSample.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.OneOfSample.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeString(4, f);
      }
      f = message.getSubMessage();
      if (f != null) {
        writer.writeMessage(9, f, proto.grpc.gateway.testing.Score.serializeBinaryToWriter);
      }
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.getName = function() {
      return jspb.Message.getFieldWithDefault(this, 4, "");
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.setName = function(value) {
      return jspb.Message.setOneofField(this, 4, proto.grpc.gateway.testing.OneOfSample.oneofGroups_[0], value);
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.clearName = function() {
      return jspb.Message.setOneofField(this, 4, proto.grpc.gateway.testing.OneOfSample.oneofGroups_[0], void 0);
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.hasName = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.getSubMessage = function() {
      return jspb.Message.getWrapperField(this, proto.grpc.gateway.testing.Score, 9);
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.setSubMessage = function(value) {
      return jspb.Message.setOneofWrapperField(this, 9, proto.grpc.gateway.testing.OneOfSample.oneofGroups_[0], value);
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.setSubMessage.getValueType = function() {
      return proto.grpc.gateway.testing.Score;
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.setSubMessage.valueType = proto.grpc.gateway.testing.Score;
    proto.grpc.gateway.testing.OneOfSample.prototype.clearSubMessage = function() {
      return this.setSubMessage(void 0);
    };
    proto.grpc.gateway.testing.OneOfSample.prototype.hasSubMessage = function() {
      return jspb.Message.getField(this, 9) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.EchoRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.EchoRequest.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.EchoRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          message: jspb.Message.getFieldWithDefault(msg, 1, ""),
          student: (f = msg.getStudent()) && proto.grpc.gateway.testing.Student.toObject(includeInstance, f),
          suject: (f = msg.getSuject()) && proto.grpc.gateway.testing.Suject.toObject(includeInstance, f),
          keyvalueMap: (f = msg.getKeyvalueMap()) ? f.toObject(includeInstance, void 0) : [],
          keyScroeMap: (f = msg.getKeyScroeMap()) ? f.toObject(includeInstance, proto.grpc.gateway.testing.Score.toObject) : [],
          oneOfSample: (f = msg.getOneOfSample()) && proto.grpc.gateway.testing.OneOfSample.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.EchoRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.EchoRequest();
      return proto.grpc.gateway.testing.EchoRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.EchoRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setMessage(value);
            break;
          case 2:
            var value = new proto.grpc.gateway.testing.Student();
            reader.readMessage(value, proto.grpc.gateway.testing.Student.deserializeBinaryFromReader);
            msg.setStudent(value);
            break;
          case 3:
            var value = new proto.grpc.gateway.testing.Suject();
            reader.readMessage(value, proto.grpc.gateway.testing.Suject.deserializeBinaryFromReader);
            msg.setSuject(value);
            break;
          case 4:
            var value = msg.getKeyvalueMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
            });
            break;
          case 5:
            var value = msg.getKeyScroeMap();
            reader.readMessage(value, function(message, reader2) {
              jspb.Map.deserializeBinary(message, reader2, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.grpc.gateway.testing.Score.deserializeBinaryFromReader, "", new proto.grpc.gateway.testing.Score());
            });
            break;
          case 6:
            var value = new proto.grpc.gateway.testing.OneOfSample();
            reader.readMessage(value, proto.grpc.gateway.testing.OneOfSample.deserializeBinaryFromReader);
            msg.setOneOfSample(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.EchoRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.EchoRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessage();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = message.getStudent();
      if (f != null) {
        writer.writeMessage(2, f, proto.grpc.gateway.testing.Student.serializeBinaryToWriter);
      }
      f = message.getSuject();
      if (f != null) {
        writer.writeMessage(3, f, proto.grpc.gateway.testing.Suject.serializeBinaryToWriter);
      }
      f = message.getKeyvalueMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
      }
      f = message.getKeyScroeMap(true);
      if (f && f.getLength() > 0) {
        f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.grpc.gateway.testing.Score.serializeBinaryToWriter);
      }
      f = message.getOneOfSample();
      if (f != null) {
        writer.writeMessage(6, f, proto.grpc.gateway.testing.OneOfSample.serializeBinaryToWriter);
      }
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.getMessage = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setMessage = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.getStudent = function() {
      return jspb.Message.getWrapperField(this, proto.grpc.gateway.testing.Student, 2);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setStudent = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setStudent.getValueType = function() {
      return proto.grpc.gateway.testing.Student;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setStudent.valueType = proto.grpc.gateway.testing.Student;
    proto.grpc.gateway.testing.EchoRequest.prototype.clearStudent = function() {
      return this.setStudent(void 0);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.hasStudent = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.getSuject = function() {
      return jspb.Message.getWrapperField(this, proto.grpc.gateway.testing.Suject, 3);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setSuject = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setSuject.getValueType = function() {
      return proto.grpc.gateway.testing.Suject;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setSuject.valueType = proto.grpc.gateway.testing.Suject;
    proto.grpc.gateway.testing.EchoRequest.prototype.clearSuject = function() {
      return this.setSuject(void 0);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.hasSuject = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.getKeyvalueMap = function(opt_noLazyCreate) {
      return jspb.Message.getMapField(this, 4, opt_noLazyCreate, null);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setKeyvalueMap = function(k, v) {
      this.getKeyvalueMap().set(k, v);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setKeyvalueMap.getValueType = function() {
      return this.getKeyvalueMap();
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.clearKeyvalueMap = function() {
      this.getKeyvalueMap().clear();
      return this;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.getKeyScroeMap = function(opt_noLazyCreate) {
      return jspb.Message.getMapField(this, 5, opt_noLazyCreate, proto.grpc.gateway.testing.Score);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setKeyScroeMap = function(k, v) {
      this.getKeyScroeMap().set(k, v);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setKeyScroeMap.getValueType = function() {
      return this.getKeyScroeMap();
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.clearKeyScroeMap = function() {
      this.getKeyScroeMap().clear();
      return this;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.getOneOfSample = function() {
      return jspb.Message.getWrapperField(this, proto.grpc.gateway.testing.OneOfSample, 6);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setOneOfSample = function(value) {
      return jspb.Message.setWrapperField(this, 6, value);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setOneOfSample.getValueType = function() {
      return proto.grpc.gateway.testing.OneOfSample;
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.setOneOfSample.valueType = proto.grpc.gateway.testing.OneOfSample;
    proto.grpc.gateway.testing.EchoRequest.prototype.clearOneOfSample = function() {
      return this.setOneOfSample(void 0);
    };
    proto.grpc.gateway.testing.EchoRequest.prototype.hasOneOfSample = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.EchoResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.EchoResponse.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.EchoResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          message: jspb.Message.getFieldWithDefault(msg, 1, ""),
          messageCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
          resp: (f = msg.getResp()) && proto.grpc.gateway.testing.EchoRequest.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.EchoResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.EchoResponse();
      return proto.grpc.gateway.testing.EchoResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.EchoResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setMessage(value);
            break;
          case 2:
            var value = reader.readInt32();
            msg.setMessageCount(value);
            break;
          case 3:
            var value = new proto.grpc.gateway.testing.EchoRequest();
            reader.readMessage(value, proto.grpc.gateway.testing.EchoRequest.deserializeBinaryFromReader);
            msg.setResp(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.EchoResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.EchoResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessage();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = message.getMessageCount();
      if (f !== 0) {
        writer.writeInt32(2, f);
      }
      f = message.getResp();
      if (f != null) {
        writer.writeMessage(3, f, proto.grpc.gateway.testing.EchoRequest.serializeBinaryToWriter);
      }
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.getMessage = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.setMessage = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.getMessageCount = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.setMessageCount = function(value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.getResp = function() {
      return jspb.Message.getWrapperField(this, proto.grpc.gateway.testing.EchoRequest, 3);
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.setResp = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.setResp.getValueType = function() {
      return proto.grpc.gateway.testing.EchoRequest;
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.setResp.valueType = proto.grpc.gateway.testing.EchoRequest;
    proto.grpc.gateway.testing.EchoResponse.prototype.clearResp = function() {
      return this.setResp(void 0);
    };
    proto.grpc.gateway.testing.EchoResponse.prototype.hasResp = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.ServerStreamingEchoRequest.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.ServerStreamingEchoRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          message: jspb.Message.getFieldWithDefault(msg, 1, ""),
          messageCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
          messageInterval: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.ServerStreamingEchoRequest();
      return proto.grpc.gateway.testing.ServerStreamingEchoRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setMessage(value);
            break;
          case 2:
            var value = reader.readInt32();
            msg.setMessageCount(value);
            break;
          case 3:
            var value = reader.readInt32();
            msg.setMessageInterval(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.ServerStreamingEchoRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessage();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
      f = message.getMessageCount();
      if (f !== 0) {
        writer.writeInt32(2, f);
      }
      f = message.getMessageInterval();
      if (f !== 0) {
        writer.writeInt32(3, f);
      }
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.getMessage = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.setMessage = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.getMessageCount = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.setMessageCount = function(value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.getMessageInterval = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.grpc.gateway.testing.ServerStreamingEchoRequest.prototype.setMessageInterval = function(value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.ServerStreamingEchoResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.ServerStreamingEchoResponse.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.ServerStreamingEchoResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          message: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.ServerStreamingEchoResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.ServerStreamingEchoResponse();
      return proto.grpc.gateway.testing.ServerStreamingEchoResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.ServerStreamingEchoResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setMessage(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.ServerStreamingEchoResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.ServerStreamingEchoResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.ServerStreamingEchoResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessage();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
    };
    proto.grpc.gateway.testing.ServerStreamingEchoResponse.prototype.getMessage = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.ServerStreamingEchoResponse.prototype.setMessage = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.ClientStreamingEchoRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.ClientStreamingEchoRequest.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.ClientStreamingEchoRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          message: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.ClientStreamingEchoRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.ClientStreamingEchoRequest();
      return proto.grpc.gateway.testing.ClientStreamingEchoRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.ClientStreamingEchoRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setMessage(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.ClientStreamingEchoRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.ClientStreamingEchoRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.ClientStreamingEchoRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessage();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
    };
    proto.grpc.gateway.testing.ClientStreamingEchoRequest.prototype.getMessage = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.grpc.gateway.testing.ClientStreamingEchoRequest.prototype.setMessage = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.gateway.testing.ClientStreamingEchoResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.gateway.testing.ClientStreamingEchoResponse.toObject(opt_includeInstance, this);
      };
      proto.grpc.gateway.testing.ClientStreamingEchoResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
          messageCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.gateway.testing.ClientStreamingEchoResponse.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.gateway.testing.ClientStreamingEchoResponse();
      return proto.grpc.gateway.testing.ClientStreamingEchoResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.gateway.testing.ClientStreamingEchoResponse.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readInt32();
            msg.setMessageCount(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.gateway.testing.ClientStreamingEchoResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.gateway.testing.ClientStreamingEchoResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.gateway.testing.ClientStreamingEchoResponse.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMessageCount();
      if (f !== 0) {
        writer.writeInt32(1, f);
      }
    };
    proto.grpc.gateway.testing.ClientStreamingEchoResponse.prototype.getMessageCount = function() {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.grpc.gateway.testing.ClientStreamingEchoResponse.prototype.setMessageCount = function(value) {
      return jspb.Message.setProto3IntField(this, 1, value);
    };
    goog.object.extend(exports, proto.grpc.gateway.testing);
  }
});

// src/proto/EchoServiceClientPb.ts
var grpcWeb = __toESM(require_grpc_web());
var echo_pb = __toESM(require_echo_pb());
var EchoServiceClient = class {
  client_;
  hostname_;
  credentials_;
  options_;
  constructor(hostname, credentials, options) {
    if (!options)
      options = {};
    if (!credentials)
      credentials = {};
    options["format"] = "text";
    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }
  methodInfoEcho = new grpcWeb.MethodDescriptor("/grpc.gateway.testing.EchoService/Echo", grpcWeb.MethodType.UNARY, echo_pb.EchoRequest, echo_pb.EchoResponse, (request) => {
    return request.serializeBinary();
  }, echo_pb.EchoResponse.deserializeBinary);
  echo(request, metadata, callback) {
    if (callback !== void 0) {
      return this.client_.rpcCall(this.hostname_ + "/grpc.gateway.testing.EchoService/Echo", request, metadata || {}, this.methodInfoEcho, callback);
    }
    return this.client_.unaryCall(this.hostname_ + "/grpc.gateway.testing.EchoService/Echo", request, metadata || {}, this.methodInfoEcho);
  }
  methodInfoEchoAbort = new grpcWeb.MethodDescriptor("/grpc.gateway.testing.EchoService/EchoAbort", grpcWeb.MethodType.UNARY, echo_pb.EchoRequest, echo_pb.EchoResponse, (request) => {
    return request.serializeBinary();
  }, echo_pb.EchoResponse.deserializeBinary);
  echoAbort(request, metadata, callback) {
    if (callback !== void 0) {
      return this.client_.rpcCall(this.hostname_ + "/grpc.gateway.testing.EchoService/EchoAbort", request, metadata || {}, this.methodInfoEchoAbort, callback);
    }
    return this.client_.unaryCall(this.hostname_ + "/grpc.gateway.testing.EchoService/EchoAbort", request, metadata || {}, this.methodInfoEchoAbort);
  }
  methodInfoNoOp = new grpcWeb.MethodDescriptor("/grpc.gateway.testing.EchoService/NoOp", grpcWeb.MethodType.UNARY, echo_pb.Empty, echo_pb.Empty, (request) => {
    return request.serializeBinary();
  }, echo_pb.Empty.deserializeBinary);
  noOp(request, metadata, callback) {
    if (callback !== void 0) {
      return this.client_.rpcCall(this.hostname_ + "/grpc.gateway.testing.EchoService/NoOp", request, metadata || {}, this.methodInfoNoOp, callback);
    }
    return this.client_.unaryCall(this.hostname_ + "/grpc.gateway.testing.EchoService/NoOp", request, metadata || {}, this.methodInfoNoOp);
  }
  methodInfoServerStreamingEcho = new grpcWeb.MethodDescriptor("/grpc.gateway.testing.EchoService/ServerStreamingEcho", grpcWeb.MethodType.SERVER_STREAMING, echo_pb.ServerStreamingEchoRequest, echo_pb.ServerStreamingEchoResponse, (request) => {
    return request.serializeBinary();
  }, echo_pb.ServerStreamingEchoResponse.deserializeBinary);
  serverStreamingEcho(request, metadata) {
    return this.client_.serverStreaming(this.hostname_ + "/grpc.gateway.testing.EchoService/ServerStreamingEcho", request, metadata || {}, this.methodInfoServerStreamingEcho);
  }
  methodInfoServerStreamingEchoAbort = new grpcWeb.MethodDescriptor("/grpc.gateway.testing.EchoService/ServerStreamingEchoAbort", grpcWeb.MethodType.SERVER_STREAMING, echo_pb.ServerStreamingEchoRequest, echo_pb.ServerStreamingEchoResponse, (request) => {
    return request.serializeBinary();
  }, echo_pb.ServerStreamingEchoResponse.deserializeBinary);
  serverStreamingEchoAbort(request, metadata) {
    return this.client_.serverStreaming(this.hostname_ + "/grpc.gateway.testing.EchoService/ServerStreamingEchoAbort", request, metadata || {}, this.methodInfoServerStreamingEchoAbort);
  }
};
export {
  EchoServiceClient
};
