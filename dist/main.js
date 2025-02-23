var cn = Object.defineProperty;
var un = (t, e, n) => e in t ? cn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ee = (t, e, n) => un(t, typeof e != "symbol" ? e + "" : e, n);
import { ref as b, openBlock as y, createElementBlock as E, createElementVNode as x, defineComponent as O, watch as T, onMounted as q, createBlock as B, Transition as Ge, withCtx as ie, mergeProps as $, unref as _, renderSlot as R, createVNode as te, createCommentVNode as le, Fragment as M, createTextVNode as ne, toDisplayString as se, resolveDynamicComponent as re, normalizeStyle as xt, h as pe, provide as G, inject as Z, onUnmounted as Ze, withDirectives as Rt, vShow as At, normalizeProps as V, guardReactiveProps as Y, computed as J, normalizeClass as z, renderList as de, toRefs as dn, onBeforeMount as fn, onBeforeUnmount as pn } from "vue";
const A = () => {
}, hn = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
function mn(t) {
  return typeof t == "string" && hn.test(t);
}
function gn(t) {
  if (!mn(t))
    throw TypeError("Invalid UUID");
  let e;
  return Uint8Array.of((e = parseInt(t.slice(0, 8), 16)) >>> 24, e >>> 16 & 255, e >>> 8 & 255, e & 255, (e = parseInt(t.slice(9, 13), 16)) >>> 8, e & 255, (e = parseInt(t.slice(14, 18), 16)) >>> 8, e & 255, (e = parseInt(t.slice(19, 23), 16)) >>> 8, e & 255, (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, e / 4294967296 & 255, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, e & 255);
}
const L = [];
for (let t = 0; t < 256; ++t)
  L.push((t + 256).toString(16).slice(1));
function Ye(t, e = 0) {
  return (L[t[e + 0]] + L[t[e + 1]] + L[t[e + 2]] + L[t[e + 3]] + "-" + L[t[e + 4]] + L[t[e + 5]] + "-" + L[t[e + 6]] + L[t[e + 7]] + "-" + L[t[e + 8]] + L[t[e + 9]] + "-" + L[t[e + 10]] + L[t[e + 11]] + L[t[e + 12]] + L[t[e + 13]] + L[t[e + 14]] + L[t[e + 15]]).toLowerCase();
}
let Ie;
const vn = new Uint8Array(16);
function at() {
  if (!Ie) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Ie = crypto.getRandomValues.bind(crypto);
  }
  return Ie(vn);
}
const ge = {};
function yn(t, e, n) {
  var o;
  let s;
  const r = (t == null ? void 0 : t._v6) ?? !1;
  if (t) {
    const a = Object.keys(t);
    a.length === 1 && a[0] === "_v6" && (t = void 0);
  }
  if (t)
    s = it(t.random ?? ((o = t.rng) == null ? void 0 : o.call(t)) ?? at(), t.msecs, t.nsecs, t.clockseq, t.node, e, n);
  else {
    const a = Date.now(), i = at();
    bn(ge, a, i), s = it(i, ge.msecs, ge.nsecs, r ? void 0 : ge.clockseq, r ? void 0 : ge.node, e, n);
  }
  return e ? s : Ye(s);
}
function bn(t, e, n) {
  return t.msecs ?? (t.msecs = -1 / 0), t.nsecs ?? (t.nsecs = 0), e === t.msecs ? (t.nsecs++, t.nsecs >= 1e4 && (t.node = void 0, t.nsecs = 0)) : e > t.msecs ? t.nsecs = 0 : e < t.msecs && (t.node = void 0), t.node || (t.node = n.slice(10, 16), t.node[0] |= 1, t.clockseq = (n[8] << 8 | n[9]) & 16383), t.msecs = e, t;
}
function it(t, e, n, s, r, o, a = 0) {
  if (t.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (!o)
    o = new Uint8Array(16), a = 0;
  else if (a < 0 || a + 16 > o.length)
    throw new RangeError(`UUID byte range ${a}:${a + 15} is out of buffer bounds`);
  e ?? (e = Date.now()), n ?? (n = 0), s ?? (s = (t[8] << 8 | t[9]) & 16383), r ?? (r = t.slice(10, 16)), e += 122192928e5;
  const i = ((e & 268435455) * 1e4 + n) % 4294967296;
  o[a++] = i >>> 24 & 255, o[a++] = i >>> 16 & 255, o[a++] = i >>> 8 & 255, o[a++] = i & 255;
  const l = e / 4294967296 * 1e4 & 268435455;
  o[a++] = l >>> 8 & 255, o[a++] = l & 255, o[a++] = l >>> 24 & 15 | 16, o[a++] = l >>> 16 & 255, o[a++] = s >>> 8 | 128, o[a++] = s & 255;
  for (let u = 0; u < 6; ++u)
    o[a++] = r[u];
  return o;
}
function wn(t) {
  const e = typeof t == "string" ? gn(t) : t, n = Cn(e);
  return typeof t == "string" ? Ye(n) : n;
}
function Cn(t) {
  return Uint8Array.of((t[6] & 15) << 4 | t[7] >> 4 & 15, (t[7] & 15) << 4 | (t[4] & 240) >> 4, (t[4] & 15) << 4 | (t[5] & 240) >> 4, (t[5] & 15) << 4 | (t[0] & 240) >> 4, (t[0] & 15) << 4 | (t[1] & 240) >> 4, (t[1] & 15) << 4 | (t[2] & 240) >> 4, 96 | t[2] & 15, t[3], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
}
function H(t, e, n) {
  t ?? (t = {});
  let s = yn({ ...t, _v6: !0 }, new Uint8Array(16));
  return s = wn(s), Ye(s);
}
const En = (t) => {
  const e = /* @__PURE__ */ new Map();
  return { on: (r, o, a) => {
    const i = e.get(r) ?? /* @__PURE__ */ new Map();
    return e.set(r, i), i.set(H(), o), t.addEventListener(r, o, a), () => t.removeEventListener(r, o, a);
  }, clearAll: () => {
    e.forEach((r, o) => {
      r.forEach((a) => t.removeEventListener(o, a));
    });
  } };
}, Qe = (t, e, n = {}) => {
  const { ignore: s = [], capture: r = !0, omitChildren: o = !0 } = n, a = (l) => o && l.composedPath().includes(t) ? !0 : s.some((u) => typeof u == "string" ? document.querySelector(u) === l.target : u === l.target), i = (l) => {
    a(l) || e(l);
  };
  return En(document).on("click", i, { capture: r });
}, _n = ({ items: t, infinite: e = !0 } = {}) => {
  const n = t ?? b([]), s = b(0), r = b({ height: "0px" }), o = (l, u, c) => {
    n.value.forEach((d, m) => {
      switch (m) {
        case l:
          d.subscriber.distpach("visible");
          break;
        case u:
          d.subscriber.distpach("left");
          break;
        case c:
          d.subscriber.distpach("right");
          break;
        default:
          d.subscriber.distpach("hidden");
          break;
      }
    });
  };
  return {
    itemsList: n,
    currentIndex: s,
    height: r,
    distpachListeners: o,
    next: () => {
      if (!e && s.value === n.value.length - 1) return;
      const l = s.value + 1 >= n.value.length ? 0 : s.value + 1, u = s.value, c = l + 1 >= n.value.length ? 0 : l + 1;
      s.value = l, o(l, u, c);
    },
    prev: () => {
      if (!e && s.value === 0) return;
      const l = s.value - 1 < 0 ? n.value.length - 1 : s.value - 1, u = s.value, c = l - 1 < 0 ? n.value.length - 1 : l - 1;
      s.value = l, o(l, c, u);
    }
  };
}, Tt = "carrousel.actions";
class Sn {
  constructor() {
    ee(this, "_handlers");
    this._handlers = [];
  }
  on(e) {
    this._handlers.push(e);
  }
  distpach(...e) {
    this._handlers.forEach((n) => n(...e));
  }
  clear() {
    this._handlers.length = 0;
  }
}
const ro = (t) => ({
  identifier: H(),
  ...t
}), kn = (t) => ({ cells: [], identifier: H(), ...t }), oo = (t = []) => t.map((e) => ({ ...kn(), ...e })), Ot = Symbol("addCell2Row"), xn = (t, e) => {
  t(Ot, e);
}, Rn = (t) => t(Ot) ?? A, Dt = Symbol("addCell2Header"), An = (t, e) => {
  t(Dt, e);
}, Tn = (t) => t(Dt) ?? A, Lt = Symbol("addrRow2Table"), On = (t, e) => {
  t(Lt, e);
}, Dn = (t) => t(Lt) ?? A, Nt = Symbol("addrRow2Table"), Ln = (t, e) => {
  t(Nt, e);
}, Nn = (t) => t(Nt) ?? A, Bt = "add_tab", It = "rm_tab", Pt = "set_active_tab", Pe = "line", Bn = "col", fe = (t, e) => {
  const { onError: n = A, onLoad: s = A, onSuccess: r = A } = e, o = b(), a = b(!1), i = b(null), l = async (...u) => {
    a.value = !0;
    try {
      const c = await t(...u);
      r(c), o.value = c;
    } catch (c) {
      n(c), i.value = c;
    } finally {
      s(), a.value = !1;
    }
  };
  return e.autoCall && l(...e.args), {
    data: o,
    loading: a,
    error: i,
    call: l
  };
};
function $t(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: In } = Object.prototype, { getPrototypeOf: et } = Object, Te = /* @__PURE__ */ ((t) => (e) => {
  const n = In.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), K = (t) => (t = t.toLowerCase(), (e) => Te(e) === t), Oe = (t) => (e) => typeof e === t, { isArray: he } = Array, ye = Oe("undefined");
function Pn(t) {
  return t !== null && !ye(t) && t.constructor !== null && !ye(t.constructor) && j(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Ut = K("ArrayBuffer");
function $n(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Ut(t.buffer), e;
}
const Un = Oe("string"), j = Oe("function"), Ft = Oe("number"), De = (t) => t !== null && typeof t == "object", Fn = (t) => t === !0 || t === !1, Se = (t) => {
  if (Te(t) !== "object")
    return !1;
  const e = et(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, jn = K("Date"), Mn = K("File"), Hn = K("Blob"), Vn = K("FileList"), qn = (t) => De(t) && j(t.pipe), zn = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || j(t.append) && ((e = Te(t)) === "formdata" || // detect form-data instance
  e === "object" && j(t.toString) && t.toString() === "[object FormData]"));
}, Jn = K("URLSearchParams"), [Kn, Wn, Xn, Gn] = ["ReadableStream", "Request", "Response", "Headers"].map(K), Zn = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function be(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let s, r;
  if (typeof t != "object" && (t = [t]), he(t))
    for (s = 0, r = t.length; s < r; s++)
      e.call(null, t[s], s, t);
  else {
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), a = o.length;
    let i;
    for (s = 0; s < a; s++)
      i = o[s], e.call(null, t[i], i, t);
  }
}
function jt(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let s = n.length, r;
  for (; s-- > 0; )
    if (r = n[s], e === r.toLowerCase())
      return r;
  return null;
}
const ae = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Mt = (t) => !ye(t) && t !== ae;
function Ve() {
  const { caseless: t } = Mt(this) && this || {}, e = {}, n = (s, r) => {
    const o = t && jt(e, r) || r;
    Se(e[o]) && Se(s) ? e[o] = Ve(e[o], s) : Se(s) ? e[o] = Ve({}, s) : he(s) ? e[o] = s.slice() : e[o] = s;
  };
  for (let s = 0, r = arguments.length; s < r; s++)
    arguments[s] && be(arguments[s], n);
  return e;
}
const Yn = (t, e, n, { allOwnKeys: s } = {}) => (be(e, (r, o) => {
  n && j(r) ? t[o] = $t(r, n) : t[o] = r;
}, { allOwnKeys: s }), t), Qn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), es = (t, e, n, s) => {
  t.prototype = Object.create(e.prototype, s), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, ts = (t, e, n, s) => {
  let r, o, a;
  const i = {};
  if (e = e || {}, t == null) return e;
  do {
    for (r = Object.getOwnPropertyNames(t), o = r.length; o-- > 0; )
      a = r[o], (!s || s(a, t, e)) && !i[a] && (e[a] = t[a], i[a] = !0);
    t = n !== !1 && et(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, ns = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const s = t.indexOf(e, n);
  return s !== -1 && s === n;
}, ss = (t) => {
  if (!t) return null;
  if (he(t)) return t;
  let e = t.length;
  if (!Ft(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, rs = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && et(Uint8Array)), os = (t, e) => {
  const s = (t && t[Symbol.iterator]).call(t);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const o = r.value;
    e.call(t, o[0], o[1]);
  }
}, as = (t, e) => {
  let n;
  const s = [];
  for (; (n = t.exec(e)) !== null; )
    s.push(n);
  return s;
}, is = K("HTMLFormElement"), ls = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, r) {
    return s.toUpperCase() + r;
  }
), lt = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), cs = K("RegExp"), Ht = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), s = {};
  be(n, (r, o) => {
    let a;
    (a = e(r, o, t)) !== !1 && (s[o] = a || r);
  }), Object.defineProperties(t, s);
}, us = (t) => {
  Ht(t, (e, n) => {
    if (j(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = t[n];
    if (j(s)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ds = (t, e) => {
  const n = {}, s = (r) => {
    r.forEach((o) => {
      n[o] = !0;
    });
  };
  return he(t) ? s(t) : s(String(t).split(e)), n;
}, fs = () => {
}, ps = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, $e = "abcdefghijklmnopqrstuvwxyz", ct = "0123456789", Vt = {
  DIGIT: ct,
  ALPHA: $e,
  ALPHA_DIGIT: $e + $e.toUpperCase() + ct
}, hs = (t = 16, e = Vt.ALPHA_DIGIT) => {
  let n = "";
  const { length: s } = e;
  for (; t--; )
    n += e[Math.random() * s | 0];
  return n;
};
function ms(t) {
  return !!(t && j(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const gs = (t) => {
  const e = new Array(10), n = (s, r) => {
    if (De(s)) {
      if (e.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        e[r] = s;
        const o = he(s) ? [] : {};
        return be(s, (a, i) => {
          const l = n(a, r + 1);
          !ye(l) && (o[i] = l);
        }), e[r] = void 0, o;
      }
    }
    return s;
  };
  return n(t, 0);
}, vs = K("AsyncFunction"), ys = (t) => t && (De(t) || j(t)) && j(t.then) && j(t.catch), qt = ((t, e) => t ? setImmediate : e ? ((n, s) => (ae.addEventListener("message", ({ source: r, data: o }) => {
  r === ae && o === n && s.length && s.shift()();
}, !1), (r) => {
  s.push(r), ae.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  j(ae.postMessage)
), bs = typeof queueMicrotask < "u" ? queueMicrotask.bind(ae) : typeof process < "u" && process.nextTick || qt, p = {
  isArray: he,
  isArrayBuffer: Ut,
  isBuffer: Pn,
  isFormData: zn,
  isArrayBufferView: $n,
  isString: Un,
  isNumber: Ft,
  isBoolean: Fn,
  isObject: De,
  isPlainObject: Se,
  isReadableStream: Kn,
  isRequest: Wn,
  isResponse: Xn,
  isHeaders: Gn,
  isUndefined: ye,
  isDate: jn,
  isFile: Mn,
  isBlob: Hn,
  isRegExp: cs,
  isFunction: j,
  isStream: qn,
  isURLSearchParams: Jn,
  isTypedArray: rs,
  isFileList: Vn,
  forEach: be,
  merge: Ve,
  extend: Yn,
  trim: Zn,
  stripBOM: Qn,
  inherits: es,
  toFlatObject: ts,
  kindOf: Te,
  kindOfTest: K,
  endsWith: ns,
  toArray: ss,
  forEachEntry: os,
  matchAll: as,
  isHTMLForm: is,
  hasOwnProperty: lt,
  hasOwnProp: lt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ht,
  freezeMethods: us,
  toObjectSet: ds,
  toCamelCase: ls,
  noop: fs,
  toFiniteNumber: ps,
  findKey: jt,
  global: ae,
  isContextDefined: Mt,
  ALPHABET: Vt,
  generateString: hs,
  isSpecCompliantForm: ms,
  toJSONObject: gs,
  isAsyncFn: vs,
  isThenable: ys,
  setImmediate: qt,
  asap: bs
};
function C(t, e, n, s, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), s && (this.request = s), r && (this.response = r, this.status = r.status ? r.status : null);
}
p.inherits(C, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: p.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const zt = C.prototype, Jt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Jt[t] = { value: t };
});
Object.defineProperties(C, Jt);
Object.defineProperty(zt, "isAxiosError", { value: !0 });
C.from = (t, e, n, s, r, o) => {
  const a = Object.create(zt);
  return p.toFlatObject(t, a, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), C.call(a, t.message, e, n, s, r), a.cause = t, a.name = t.name, o && Object.assign(a, o), a;
};
const ws = null;
function qe(t) {
  return p.isPlainObject(t) || p.isArray(t);
}
function Kt(t) {
  return p.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function ut(t, e, n) {
  return t ? t.concat(e).map(function(r, o) {
    return r = Kt(r), !n && o ? "[" + r + "]" : r;
  }).join(n ? "." : "") : e;
}
function Cs(t) {
  return p.isArray(t) && !t.some(qe);
}
const Es = p.toFlatObject(p, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Le(t, e, n) {
  if (!p.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = p.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, v) {
    return !p.isUndefined(v[g]);
  });
  const s = n.metaTokens, r = n.visitor || c, o = n.dots, a = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && p.isSpecCompliantForm(e);
  if (!p.isFunction(r))
    throw new TypeError("visitor must be a function");
  function u(f) {
    if (f === null) return "";
    if (p.isDate(f))
      return f.toISOString();
    if (!l && p.isBlob(f))
      throw new C("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(f) || p.isTypedArray(f) ? l && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function c(f, g, v) {
    let w = f;
    if (f && !v && typeof f == "object") {
      if (p.endsWith(g, "{}"))
        g = s ? g : g.slice(0, -2), f = JSON.stringify(f);
      else if (p.isArray(f) && Cs(f) || (p.isFileList(f) || p.endsWith(g, "[]")) && (w = p.toArray(f)))
        return g = Kt(g), w.forEach(function(k, U) {
          !(p.isUndefined(k) || k === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? ut([g], U, o) : a === null ? g : g + "[]",
            u(k)
          );
        }), !1;
    }
    return qe(f) ? !0 : (e.append(ut(v, g, o), u(f)), !1);
  }
  const d = [], m = Object.assign(Es, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: qe
  });
  function h(f, g) {
    if (!p.isUndefined(f)) {
      if (d.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(f), p.forEach(f, function(w, S) {
        (!(p.isUndefined(w) || w === null) && r.call(
          e,
          w,
          p.isString(S) ? S.trim() : S,
          g,
          m
        )) === !0 && h(w, g ? g.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!p.isObject(t))
    throw new TypeError("data must be an object");
  return h(t), e;
}
function dt(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(s) {
    return e[s];
  });
}
function tt(t, e) {
  this._pairs = [], t && Le(t, this, e);
}
const Wt = tt.prototype;
Wt.append = function(e, n) {
  this._pairs.push([e, n]);
};
Wt.toString = function(e) {
  const n = e ? function(s) {
    return e.call(this, s, dt);
  } : dt;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function _s(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xt(t, e, n) {
  if (!e)
    return t;
  const s = n && n.encode || _s;
  p.isFunction(n) && (n = {
    serialize: n
  });
  const r = n && n.serialize;
  let o;
  if (r ? o = r(e, n) : o = p.isURLSearchParams(e) ? e.toString() : new tt(e, n).toString(s), o) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class ft {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, s) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    p.forEach(this.handlers, function(s) {
      s !== null && e(s);
    });
  }
}
const Gt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ss = typeof URLSearchParams < "u" ? URLSearchParams : tt, ks = typeof FormData < "u" ? FormData : null, xs = typeof Blob < "u" ? Blob : null, Rs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ss,
    FormData: ks,
    Blob: xs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, nt = typeof window < "u" && typeof document < "u", ze = typeof navigator == "object" && navigator || void 0, As = nt && (!ze || ["ReactNative", "NativeScript", "NS"].indexOf(ze.product) < 0), Ts = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Os = nt && window.location.href || "http://localhost", Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: nt,
  hasStandardBrowserEnv: As,
  hasStandardBrowserWebWorkerEnv: Ts,
  navigator: ze,
  origin: Os
}, Symbol.toStringTag, { value: "Module" })), P = {
  ...Ds,
  ...Rs
};
function Ls(t, e) {
  return Le(t, new P.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, r, o) {
      return P.isNode && p.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Ns(t) {
  return p.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Bs(t) {
  const e = {}, n = Object.keys(t);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++)
    o = n[s], e[o] = t[o];
  return e;
}
function Zt(t) {
  function e(n, s, r, o) {
    let a = n[o++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), l = o >= n.length;
    return a = !a && p.isArray(r) ? r.length : a, l ? (p.hasOwnProp(r, a) ? r[a] = [r[a], s] : r[a] = s, !i) : ((!r[a] || !p.isObject(r[a])) && (r[a] = []), e(n, s, r[a], o) && p.isArray(r[a]) && (r[a] = Bs(r[a])), !i);
  }
  if (p.isFormData(t) && p.isFunction(t.entries)) {
    const n = {};
    return p.forEachEntry(t, (s, r) => {
      e(Ns(s), r, n, 0);
    }), n;
  }
  return null;
}
function Is(t, e, n) {
  if (p.isString(t))
    try {
      return (e || JSON.parse)(t), p.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (0, JSON.stringify)(t);
}
const we = {
  transitional: Gt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const s = n.getContentType() || "", r = s.indexOf("application/json") > -1, o = p.isObject(e);
    if (o && p.isHTMLForm(e) && (e = new FormData(e)), p.isFormData(e))
      return r ? JSON.stringify(Zt(e)) : e;
    if (p.isArrayBuffer(e) || p.isBuffer(e) || p.isStream(e) || p.isFile(e) || p.isBlob(e) || p.isReadableStream(e))
      return e;
    if (p.isArrayBufferView(e))
      return e.buffer;
    if (p.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let i;
    if (o) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Ls(e, this.formSerializer).toString();
      if ((i = p.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Le(
          i ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || r ? (n.setContentType("application/json", !1), Is(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || we.transitional, s = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (p.isResponse(e) || p.isReadableStream(e))
      return e;
    if (e && p.isString(e) && (s && !this.responseType || r)) {
      const a = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(e);
      } catch (i) {
        if (a)
          throw i.name === "SyntaxError" ? C.from(i, C.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: P.classes.FormData,
    Blob: P.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
p.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  we.headers[t] = {};
});
const Ps = p.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), $s = (t) => {
  const e = {};
  let n, s, r;
  return t && t.split(`
`).forEach(function(a) {
    r = a.indexOf(":"), n = a.substring(0, r).trim().toLowerCase(), s = a.substring(r + 1).trim(), !(!n || e[n] && Ps[n]) && (n === "set-cookie" ? e[n] ? e[n].push(s) : e[n] = [s] : e[n] = e[n] ? e[n] + ", " + s : s);
  }), e;
}, pt = Symbol("internals");
function ve(t) {
  return t && String(t).trim().toLowerCase();
}
function ke(t) {
  return t === !1 || t == null ? t : p.isArray(t) ? t.map(ke) : String(t);
}
function Us(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(t); )
    e[s[1]] = s[2];
  return e;
}
const Fs = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Ue(t, e, n, s, r) {
  if (p.isFunction(s))
    return s.call(this, e, n);
  if (r && (e = n), !!p.isString(e)) {
    if (p.isString(s))
      return e.indexOf(s) !== -1;
    if (p.isRegExp(s))
      return s.test(e);
  }
}
function js(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, s) => n.toUpperCase() + s);
}
function Ms(t, e) {
  const n = p.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(t, s + n, {
      value: function(r, o, a) {
        return this[s].call(this, e, r, o, a);
      },
      configurable: !0
    });
  });
}
class F {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, s) {
    const r = this;
    function o(i, l, u) {
      const c = ve(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const d = p.findKey(r, c);
      (!d || r[d] === void 0 || u === !0 || u === void 0 && r[d] !== !1) && (r[d || l] = ke(i));
    }
    const a = (i, l) => p.forEach(i, (u, c) => o(u, c, l));
    if (p.isPlainObject(e) || e instanceof this.constructor)
      a(e, n);
    else if (p.isString(e) && (e = e.trim()) && !Fs(e))
      a($s(e), n);
    else if (p.isHeaders(e))
      for (const [i, l] of e.entries())
        o(l, i, s);
    else
      e != null && o(n, e, s);
    return this;
  }
  get(e, n) {
    if (e = ve(e), e) {
      const s = p.findKey(this, e);
      if (s) {
        const r = this[s];
        if (!n)
          return r;
        if (n === !0)
          return Us(r);
        if (p.isFunction(n))
          return n.call(this, r, s);
        if (p.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = ve(e), e) {
      const s = p.findKey(this, e);
      return !!(s && this[s] !== void 0 && (!n || Ue(this, this[s], s, n)));
    }
    return !1;
  }
  delete(e, n) {
    const s = this;
    let r = !1;
    function o(a) {
      if (a = ve(a), a) {
        const i = p.findKey(s, a);
        i && (!n || Ue(s, s[i], i, n)) && (delete s[i], r = !0);
      }
    }
    return p.isArray(e) ? e.forEach(o) : o(e), r;
  }
  clear(e) {
    const n = Object.keys(this);
    let s = n.length, r = !1;
    for (; s--; ) {
      const o = n[s];
      (!e || Ue(this, this[o], o, e, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(e) {
    const n = this, s = {};
    return p.forEach(this, (r, o) => {
      const a = p.findKey(s, o);
      if (a) {
        n[a] = ke(r), delete n[o];
        return;
      }
      const i = e ? js(o) : String(o).trim();
      i !== o && delete n[o], n[i] = ke(r), s[i] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return p.forEach(this, (s, r) => {
      s != null && s !== !1 && (n[r] = e && p.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const s = new this(e);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(e) {
    const s = (this[pt] = this[pt] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(a) {
      const i = ve(a);
      s[i] || (Ms(r, a), s[i] = !0);
    }
    return p.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
F.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
p.reduceDescriptors(F.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(s) {
      this[n] = s;
    }
  };
});
p.freezeMethods(F);
function Fe(t, e) {
  const n = this || we, s = e || n, r = F.from(s.headers);
  let o = s.data;
  return p.forEach(t, function(i) {
    o = i.call(n, o, r.normalize(), e ? e.status : void 0);
  }), r.normalize(), o;
}
function Yt(t) {
  return !!(t && t.__CANCEL__);
}
function me(t, e, n) {
  C.call(this, t ?? "canceled", C.ERR_CANCELED, e, n), this.name = "CanceledError";
}
p.inherits(me, C, {
  __CANCEL__: !0
});
function Qt(t, e, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? t(n) : e(new C(
    "Request failed with status code " + n.status,
    [C.ERR_BAD_REQUEST, C.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Hs(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Vs(t, e) {
  t = t || 10;
  const n = new Array(t), s = new Array(t);
  let r = 0, o = 0, a;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const u = Date.now(), c = s[o];
    a || (a = u), n[r] = l, s[r] = u;
    let d = o, m = 0;
    for (; d !== r; )
      m += n[d++], d = d % t;
    if (r = (r + 1) % t, r === o && (o = (o + 1) % t), u - a < e)
      return;
    const h = c && u - c;
    return h ? Math.round(m * 1e3 / h) : void 0;
  };
}
function qs(t, e) {
  let n = 0, s = 1e3 / e, r, o;
  const a = (u, c = Date.now()) => {
    n = c, r = null, o && (clearTimeout(o), o = null), t.apply(null, u);
  };
  return [(...u) => {
    const c = Date.now(), d = c - n;
    d >= s ? a(u, c) : (r = u, o || (o = setTimeout(() => {
      o = null, a(r);
    }, s - d)));
  }, () => r && a(r)];
}
const Re = (t, e, n = 3) => {
  let s = 0;
  const r = Vs(50, 250);
  return qs((o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, l = a - s, u = r(l), c = a <= i;
    s = a;
    const d = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && i && c ? (i - a) / u : void 0,
      event: o,
      lengthComputable: i != null,
      [e ? "download" : "upload"]: !0
    };
    t(d);
  }, n);
}, ht = (t, e) => {
  const n = t != null;
  return [(s) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: s
  }), e[1]];
}, mt = (t) => (...e) => p.asap(() => t(...e)), zs = P.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, P.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(P.origin),
  P.navigator && /(msie|trident)/i.test(P.navigator.userAgent)
) : () => !0, Js = P.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, s, r, o) {
      const a = [t + "=" + encodeURIComponent(e)];
      p.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), p.isString(s) && a.push("path=" + s), p.isString(r) && a.push("domain=" + r), o === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ks(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ws(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function en(t, e) {
  return t && !Ks(e) ? Ws(t, e) : e;
}
const gt = (t) => t instanceof F ? { ...t } : t;
function ue(t, e) {
  e = e || {};
  const n = {};
  function s(u, c, d, m) {
    return p.isPlainObject(u) && p.isPlainObject(c) ? p.merge.call({ caseless: m }, u, c) : p.isPlainObject(c) ? p.merge({}, c) : p.isArray(c) ? c.slice() : c;
  }
  function r(u, c, d, m) {
    if (p.isUndefined(c)) {
      if (!p.isUndefined(u))
        return s(void 0, u, d, m);
    } else return s(u, c, d, m);
  }
  function o(u, c) {
    if (!p.isUndefined(c))
      return s(void 0, c);
  }
  function a(u, c) {
    if (p.isUndefined(c)) {
      if (!p.isUndefined(u))
        return s(void 0, u);
    } else return s(void 0, c);
  }
  function i(u, c, d) {
    if (d in e)
      return s(u, c);
    if (d in t)
      return s(void 0, u);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: i,
    headers: (u, c, d) => r(gt(u), gt(c), d, !0)
  };
  return p.forEach(Object.keys(Object.assign({}, t, e)), function(c) {
    const d = l[c] || r, m = d(t[c], e[c], c);
    p.isUndefined(m) && d !== i || (n[c] = m);
  }), n;
}
const tn = (t) => {
  const e = ue({}, t);
  let { data: n, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: o, headers: a, auth: i } = e;
  e.headers = a = F.from(a), e.url = Xt(en(e.baseURL, e.url), t.params, t.paramsSerializer), i && a.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let l;
  if (p.isFormData(n)) {
    if (P.hasStandardBrowserEnv || P.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((l = a.getContentType()) !== !1) {
      const [u, ...c] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      a.setContentType([u || "multipart/form-data", ...c].join("; "));
    }
  }
  if (P.hasStandardBrowserEnv && (s && p.isFunction(s) && (s = s(e)), s || s !== !1 && zs(e.url))) {
    const u = r && o && Js.read(o);
    u && a.set(r, u);
  }
  return e;
}, Xs = typeof XMLHttpRequest < "u", Gs = Xs && function(t) {
  return new Promise(function(n, s) {
    const r = tn(t);
    let o = r.data;
    const a = F.from(r.headers).normalize();
    let { responseType: i, onUploadProgress: l, onDownloadProgress: u } = r, c, d, m, h, f;
    function g() {
      h && h(), f && f(), r.cancelToken && r.cancelToken.unsubscribe(c), r.signal && r.signal.removeEventListener("abort", c);
    }
    let v = new XMLHttpRequest();
    v.open(r.method.toUpperCase(), r.url, !0), v.timeout = r.timeout;
    function w() {
      if (!v)
        return;
      const k = F.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), I = {
        data: !i || i === "text" || i === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: k,
        config: t,
        request: v
      };
      Qt(function(oe) {
        n(oe), g();
      }, function(oe) {
        s(oe), g();
      }, I), v = null;
    }
    "onloadend" in v ? v.onloadend = w : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, v.onabort = function() {
      v && (s(new C("Request aborted", C.ECONNABORTED, t, v)), v = null);
    }, v.onerror = function() {
      s(new C("Network Error", C.ERR_NETWORK, t, v)), v = null;
    }, v.ontimeout = function() {
      let U = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const I = r.transitional || Gt;
      r.timeoutErrorMessage && (U = r.timeoutErrorMessage), s(new C(
        U,
        I.clarifyTimeoutError ? C.ETIMEDOUT : C.ECONNABORTED,
        t,
        v
      )), v = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in v && p.forEach(a.toJSON(), function(U, I) {
      v.setRequestHeader(I, U);
    }), p.isUndefined(r.withCredentials) || (v.withCredentials = !!r.withCredentials), i && i !== "json" && (v.responseType = r.responseType), u && ([m, f] = Re(u, !0), v.addEventListener("progress", m)), l && v.upload && ([d, h] = Re(l), v.upload.addEventListener("progress", d), v.upload.addEventListener("loadend", h)), (r.cancelToken || r.signal) && (c = (k) => {
      v && (s(!k || k.type ? new me(null, t, v) : k), v.abort(), v = null);
    }, r.cancelToken && r.cancelToken.subscribe(c), r.signal && (r.signal.aborted ? c() : r.signal.addEventListener("abort", c)));
    const S = Hs(r.url);
    if (S && P.protocols.indexOf(S) === -1) {
      s(new C("Unsupported protocol " + S + ":", C.ERR_BAD_REQUEST, t));
      return;
    }
    v.send(o || null);
  });
}, Zs = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let s = new AbortController(), r;
    const o = function(u) {
      if (!r) {
        r = !0, i();
        const c = u instanceof Error ? u : this.reason;
        s.abort(c instanceof C ? c : new me(c instanceof Error ? c.message : c));
      }
    };
    let a = e && setTimeout(() => {
      a = null, o(new C(`timeout ${e} of ms exceeded`, C.ETIMEDOUT));
    }, e);
    const i = () => {
      t && (a && clearTimeout(a), a = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", o));
    const { signal: l } = s;
    return l.unsubscribe = () => p.asap(i), l;
  }
}, Ys = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let s = 0, r;
  for (; s < n; )
    r = s + e, yield t.slice(s, r), s = r;
}, Qs = async function* (t, e) {
  for await (const n of er(t))
    yield* Ys(n, e);
}, er = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: s } = await e.read();
      if (n)
        break;
      yield s;
    }
  } finally {
    await e.cancel();
  }
}, vt = (t, e, n, s) => {
  const r = Qs(t, e);
  let o = 0, a, i = (l) => {
    a || (a = !0, s && s(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: c } = await r.next();
        if (u) {
          i(), l.close();
          return;
        }
        let d = c.byteLength;
        if (n) {
          let m = o += d;
          n(m);
        }
        l.enqueue(new Uint8Array(c));
      } catch (u) {
        throw i(u), u;
      }
    },
    cancel(l) {
      return i(l), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ne = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", nn = Ne && typeof ReadableStream == "function", tr = Ne && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), sn = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, nr = nn && sn(() => {
  let t = !1;
  const e = new Request(P.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), yt = 64 * 1024, Je = nn && sn(() => p.isReadableStream(new Response("").body)), Ae = {
  stream: Je && ((t) => t.body)
};
Ne && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Ae[e] && (Ae[e] = p.isFunction(t[e]) ? (n) => n[e]() : (n, s) => {
      throw new C(`Response type '${e}' is not supported`, C.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const sr = async (t) => {
  if (t == null)
    return 0;
  if (p.isBlob(t))
    return t.size;
  if (p.isSpecCompliantForm(t))
    return (await new Request(P.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (p.isArrayBufferView(t) || p.isArrayBuffer(t))
    return t.byteLength;
  if (p.isURLSearchParams(t) && (t = t + ""), p.isString(t))
    return (await tr(t)).byteLength;
}, rr = async (t, e) => {
  const n = p.toFiniteNumber(t.getContentLength());
  return n ?? sr(e);
}, or = Ne && (async (t) => {
  let {
    url: e,
    method: n,
    data: s,
    signal: r,
    cancelToken: o,
    timeout: a,
    onDownloadProgress: i,
    onUploadProgress: l,
    responseType: u,
    headers: c,
    withCredentials: d = "same-origin",
    fetchOptions: m
  } = tn(t);
  u = u ? (u + "").toLowerCase() : "text";
  let h = Zs([r, o && o.toAbortSignal()], a), f;
  const g = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let v;
  try {
    if (l && nr && n !== "get" && n !== "head" && (v = await rr(c, s)) !== 0) {
      let I = new Request(e, {
        method: "POST",
        body: s,
        duplex: "half"
      }), Q;
      if (p.isFormData(s) && (Q = I.headers.get("content-type")) && c.setContentType(Q), I.body) {
        const [oe, Ce] = ht(
          v,
          Re(mt(l))
        );
        s = vt(I.body, yt, oe, Ce);
      }
    }
    p.isString(d) || (d = d ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    f = new Request(e, {
      ...m,
      signal: h,
      method: n.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: s,
      duplex: "half",
      credentials: w ? d : void 0
    });
    let S = await fetch(f);
    const k = Je && (u === "stream" || u === "response");
    if (Je && (i || k && g)) {
      const I = {};
      ["status", "statusText", "headers"].forEach((ot) => {
        I[ot] = S[ot];
      });
      const Q = p.toFiniteNumber(S.headers.get("content-length")), [oe, Ce] = i && ht(
        Q,
        Re(mt(i), !0)
      ) || [];
      S = new Response(
        vt(S.body, yt, oe, () => {
          Ce && Ce(), g && g();
        }),
        I
      );
    }
    u = u || "text";
    let U = await Ae[p.findKey(Ae, u) || "text"](S, t);
    return !k && g && g(), await new Promise((I, Q) => {
      Qt(I, Q, {
        data: U,
        headers: F.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: t,
        request: f
      });
    });
  } catch (w) {
    throw g && g(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new C("Network Error", C.ERR_NETWORK, t, f),
      {
        cause: w.cause || w
      }
    ) : C.from(w, w && w.code, t, f);
  }
}), Ke = {
  http: ws,
  xhr: Gs,
  fetch: or
};
p.forEach(Ke, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const bt = (t) => `- ${t}`, ar = (t) => p.isFunction(t) || t === null || t === !1, rn = {
  getAdapter: (t) => {
    t = p.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, s;
    const r = {};
    for (let o = 0; o < e; o++) {
      n = t[o];
      let a;
      if (s = n, !ar(n) && (s = Ke[(a = String(n)).toLowerCase()], s === void 0))
        throw new C(`Unknown adapter '${a}'`);
      if (s)
        break;
      r[a || "#" + o] = s;
    }
    if (!s) {
      const o = Object.entries(r).map(
        ([i, l]) => `adapter ${i} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = e ? o.length > 1 ? `since :
` + o.map(bt).join(`
`) : " " + bt(o[0]) : "as no adapter specified";
      throw new C(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: Ke
};
function je(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new me(null, t);
}
function wt(t) {
  return je(t), t.headers = F.from(t.headers), t.data = Fe.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), rn.getAdapter(t.adapter || we.adapter)(t).then(function(s) {
    return je(t), s.data = Fe.call(
      t,
      t.transformResponse,
      s
    ), s.headers = F.from(s.headers), s;
  }, function(s) {
    return Yt(s) || (je(t), s && s.response && (s.response.data = Fe.call(
      t,
      t.transformResponse,
      s.response
    ), s.response.headers = F.from(s.response.headers))), Promise.reject(s);
  });
}
const on = "1.7.9", Be = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Be[t] = function(s) {
    return typeof s === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ct = {};
Be.transitional = function(e, n, s) {
  function r(o, a) {
    return "[Axios v" + on + "] Transitional option '" + o + "'" + a + (s ? ". " + s : "");
  }
  return (o, a, i) => {
    if (e === !1)
      throw new C(
        r(a, " has been removed" + (n ? " in " + n : "")),
        C.ERR_DEPRECATED
      );
    return n && !Ct[a] && (Ct[a] = !0, console.warn(
      r(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, a, i) : !0;
  };
};
Be.spelling = function(e) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${e}`), !0);
};
function ir(t, e, n) {
  if (typeof t != "object")
    throw new C("options must be an object", C.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(t);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r], a = e[o];
    if (a) {
      const i = t[o], l = i === void 0 || a(i, o, t);
      if (l !== !0)
        throw new C("option " + o + " must be " + l, C.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new C("Unknown option " + o, C.ERR_BAD_OPTION);
  }
}
const xe = {
  assertOptions: ir,
  validators: Be
}, X = xe.validators;
class ce {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new ft(),
      response: new ft()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (s) {
      if (s instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? o && !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + o) : s.stack = o;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = ue(this.defaults, n);
    const { transitional: s, paramsSerializer: r, headers: o } = n;
    s !== void 0 && xe.assertOptions(s, {
      silentJSONParsing: X.transitional(X.boolean),
      forcedJSONParsing: X.transitional(X.boolean),
      clarifyTimeoutError: X.transitional(X.boolean)
    }, !1), r != null && (p.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : xe.assertOptions(r, {
      encode: X.function,
      serialize: X.function
    }, !0)), xe.assertOptions(n, {
      baseUrl: X.spelling("baseURL"),
      withXsrfToken: X.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && p.merge(
      o.common,
      o[n.method]
    );
    o && p.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = F.concat(a, o);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous, i.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let c, d = 0, m;
    if (!l) {
      const f = [wt.bind(this), void 0];
      for (f.unshift.apply(f, i), f.push.apply(f, u), m = f.length, c = Promise.resolve(n); d < m; )
        c = c.then(f[d++], f[d++]);
      return c;
    }
    m = i.length;
    let h = n;
    for (d = 0; d < m; ) {
      const f = i[d++], g = i[d++];
      try {
        h = f(h);
      } catch (v) {
        g.call(this, v);
        break;
      }
    }
    try {
      c = wt.call(this, h);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, m = u.length; d < m; )
      c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(e) {
    e = ue(this.defaults, e);
    const n = en(e.baseURL, e.url);
    return Xt(n, e.params, e.paramsSerializer);
  }
}
p.forEach(["delete", "get", "head", "options"], function(e) {
  ce.prototype[e] = function(n, s) {
    return this.request(ue(s || {}, {
      method: e,
      url: n,
      data: (s || {}).data
    }));
  };
});
p.forEach(["post", "put", "patch"], function(e) {
  function n(s) {
    return function(o, a, i) {
      return this.request(ue(i || {}, {
        method: e,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  ce.prototype[e] = n(), ce.prototype[e + "Form"] = n(!0);
});
class st {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let o = s._listeners.length;
      for (; o-- > 0; )
        s._listeners[o](r);
      s._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const a = new Promise((i) => {
        s.subscribe(i), o = i;
      }).then(r);
      return a.cancel = function() {
        s.unsubscribe(o);
      }, a;
    }, e(function(o, a, i) {
      s.reason || (s.reason = new me(o, a, i), n(s.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (s) => {
      e.abort(s);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new st(function(r) {
        e = r;
      }),
      cancel: e
    };
  }
}
function lr(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function cr(t) {
  return p.isObject(t) && t.isAxiosError === !0;
}
const We = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(We).forEach(([t, e]) => {
  We[e] = t;
});
function an(t) {
  const e = new ce(t), n = $t(ce.prototype.request, e);
  return p.extend(n, ce.prototype, e, { allOwnKeys: !0 }), p.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(r) {
    return an(ue(t, r));
  }, n;
}
const D = an(we);
D.Axios = ce;
D.CanceledError = me;
D.CancelToken = st;
D.isCancel = Yt;
D.VERSION = on;
D.toFormData = Le;
D.AxiosError = C;
D.Cancel = D.CanceledError;
D.all = function(e) {
  return Promise.all(e);
};
D.spread = lr;
D.isAxiosError = cr;
D.mergeConfig = ue;
D.AxiosHeaders = F;
D.formToJSON = (t) => Zt(p.isHTMLForm(t) ? new FormData(t) : t);
D.getAdapter = rn.getAdapter;
D.HttpStatusCode = We;
D.default = D;
class Me extends Error {
  constructor(n, { axiosError: s, axiosResponse: r } = {}) {
    super(n);
    ee(this, "isApiConnectorError", !0);
    ee(this, "_axiosError");
    ee(this, "_axiosResponse");
    this.name = "ApiConnectorError", this._axiosError = s, this._axiosResponse = r;
  }
  get axiosError() {
    return this._axiosError;
  }
  get axiosResponse() {
    return this._axiosResponse;
  }
}
const ur = (t) => !(t < 200 || t >= 300), dr = (...t) => {
  const e = D.create(...t), n = async (l, u, c, d = {}, m = {}) => {
    const { serializers: h, validateStatus: f = ur } = d;
    let g = {};
    try {
      g = await e.request({
        method: l,
        url: u,
        data: c,
        ...m
      });
    } catch (w) {
      throw new Me(w.message, { axiosError: w });
    }
    if (!f(g.status))
      throw new Me(`Invalid status code: ${g.status}`);
    let v = g.data;
    try {
      v = fr(g.data, h);
    } catch (w) {
      throw new Me(`Error serializing data: ${w.message}`);
    }
    return v;
  };
  return {
    request: n,
    get: async (l, u = {}, c = {}) => n("get", l, null, u, c),
    post: async (l, u, c = {}, d = {}) => n("post", l, u, c, d),
    put: async (l, u, c = {}, d = {}) => n("put", l, u, c, d),
    patch: async (l, u, c = {}, d = {}) => n("patch", l, u, c, d),
    del: async (l, u = {}, c = {}) => n("delete", l, null, u, c),
    axiosInstance: e
  };
}, fr = (t, e = []) => {
  let n = t;
  for (const s of e)
    n = s(n);
  return n;
}, ao = (...t) => {
  const e = dr(...t);
  return {
    get: (l = {}, u = {}) => {
      const {
        call: c,
        data: d,
        error: m,
        loading: h
      } = fe(e.get, {
        autoCall: !1,
        onError: l.onError,
        onLoad: l.onLoad,
        onSuccess: l.onSuccess,
        args: ["", u]
      });
      return {
        call: async (g) => {
          await c(g, u);
        },
        data: d,
        error: m,
        loading: h
      };
    },
    post: (l = {}, u = {}) => {
      const {
        call: c,
        data: d,
        error: m,
        loading: h
      } = fe(e.post, {
        autoCall: !1,
        onError: l.onError,
        onLoad: l.onLoad,
        onSuccess: l.onSuccess,
        args: ["", u]
      });
      return {
        call: async (g, v = {}) => {
          await c(g, v, u);
        },
        data: d,
        error: m,
        loading: h
      };
    },
    del: (l = {}, u = {}) => {
      const {
        call: c,
        data: d,
        error: m,
        loading: h
      } = fe(e.del, {
        autoCall: !1,
        onError: l.onError,
        onLoad: l.onLoad,
        onSuccess: l.onSuccess,
        args: ["", u]
      });
      return {
        call: async (g) => {
          await c(g, u);
        },
        data: d,
        error: m,
        loading: h
      };
    },
    patch: (l = {}, u = {}) => {
      const {
        call: c,
        data: d,
        error: m,
        loading: h
      } = fe(
        e.patch,
        {
          autoCall: !1,
          onError: l.onError,
          onLoad: l.onLoad,
          onSuccess: l.onSuccess,
          args: ["", u]
        }
      );
      return {
        call: async (g, v = {}) => {
          await c(g, v, u);
        },
        data: d,
        error: m,
        loading: h
      };
    },
    put: (l = {}, u = {}) => {
      const {
        call: c,
        data: d,
        error: m,
        loading: h
      } = fe(e.put, {
        autoCall: !1,
        onError: l.onError,
        onLoad: l.onLoad,
        onSuccess: l.onSuccess,
        args: ["", u]
      });
      return {
        call: async (g, v = {}) => {
          await c(g, v, u);
        },
        data: d,
        error: m,
        loading: h
      };
    },
    request: (l = {}) => fe(
      e.request,
      {
        autoCall: !1,
        onError: l.onError,
        onLoad: l.onLoad,
        onSuccess: l.onSuccess
      }
    ),
    axiosInstance: e.axiosInstance
  };
}, W = (t = "") => {
  const e = b({}), n = (o) => {
    e.value = { ...e.value, ...Et(o) };
  }, s = (o) => {
    e.value = Et(o);
  };
  return n(t), { css: e, addCss: n, setCss: s, clearCss: () => {
    Object.keys(e.value).forEach((o) => {
      delete e.value[o];
    });
  } };
}, Et = (t) => {
  const e = {};
  if (typeof t == "string")
    t.split(" ").forEach((n) => e[n] = !0);
  else if (Array.isArray(t))
    t.forEach((n) => e[n] = !0);
  else if (typeof t == "object")
    for (const n in t)
      n.split(" ").forEach((s) => {
        e[s] = t[n];
      });
  return e;
}, io = (t) => {
  const e = b({}), n = (s) => {
    if (!s) return e;
    typeof s == "string" ? s.split(" ").forEach((r) => e.value[r] = !0) : typeof s == "object" && (e.value = { ...e.value, ...s });
  };
  return t && n(t), {
    computedStyles: e,
    setStyles: n
  };
}, pr = A, hr = [
  "drag",
  "dragend",
  "dragenter",
  "dragstart",
  "dragover",
  "dragexit",
  "dragleave",
  "drop"
], Xe = (t = {}, e = !1) => {
  const n = {};
  return hr.forEach((s) => {
    const r = t[s] ?? pr, o = `on${s.charAt(0).toUpperCase() + s.slice(1)}`;
    n[o] = r;
  }), {
    ...n,
    draggable: e
  };
};
function mr(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    x("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5 8.25 12l7.5-7.5"
    })
  ]);
}
function gr(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    x("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m8.25 4.5 7.5 7.5-7.5 7.5"
    })
  ]);
}
function vr(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    x("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
  ]);
}
function yr(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    x("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
function br(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    x("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function wr(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    x("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Cr(t, e) {
  return y(), E("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    x("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Er = { class: "toast-item-body" }, _r = /* @__PURE__ */ O({
  __name: "ToastItem",
  props: {
    message: {},
    liveTime: { default: -1 },
    showLifeTime: { type: Boolean, default: !0 },
    modelValue: { type: Boolean, default: !0 },
    css: { default: () => [] },
    id: {},
    type: { default: "success" },
    showIcon: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "close"],
  setup(t, { emit: e }) {
    const n = t, s = e, r = b(n.modelValue), { css: o, ...a } = W(n.css), i = b("100%");
    let l = 0, u = 0;
    const c = () => {
      let f = {};
      return n.type === "success" && (f = pe(br, { class: "size-5 " })), n.type === "warning" && (f = pe(wr, { class: "size-5 " })), n.type === "error" && (f = pe(Cr, { class: "size-5 " })), pe(
        "div",
        {
          class: "toast-item-icon"
        },
        [f]
      );
    }, d = () => {
      r.value = !1, s("update:modelValue", !1), s("close"), clearInterval(l), l = -1;
    }, m = (f = Date.now()) => {
      n.liveTime > 0 && (u = f, l = setInterval(() => {
        const v = Date.now() - u, w = Math.min(v, n.liveTime);
        i.value = `${w / n.liveTime * 100}%`, w >= n.liveTime && d();
      }, 1));
    }, h = {
      onmouseenter: () => {
        clearInterval(l);
      },
      onMouseleave: () => {
        const f = n.liveTime * parseInt(i.value.replace("%", "")) / 100;
        m(Date.now() - f);
      }
    };
    return T(
      () => n.modelValue,
      (f, g) => {
        r.value = f, f !== g && (clearInterval(l), m());
      }
    ), T(
      () => n.css,
      (f) => a.addCss(f)
    ), q(() => {
      a.addCss("toast-item"), n.type === "success" && a.addCss("toast-item--success"), n.type === "warning" && a.addCss("toast-item--warning"), n.type === "error" && a.addCss("toast-item--error"), m();
    }), (f, g) => (y(), B(Ge, { name: "fade" }, {
      default: ie(() => [
        r.value ? (y(), E("div", $({
          key: 0,
          class: ["toast-item", _(o)],
          role: "alert"
        }, h), [
          f.showIcon ? R(f.$slots, "icon", { key: 0 }, () => [
            te(c)
          ]) : le("", !0),
          x("div", Er, [
            R(f.$slots, "default", {}, () => [
              typeof f.message == "string" ? (y(), E(M, { key: 0 }, [
                ne(se(f.message), 1)
              ], 64)) : (y(), B(re(f.message), { key: 1 }))
            ])
          ]),
          x("button", {
            type: "button",
            class: "toast-item-close",
            "data-dismiss-target": "#toast-success",
            "aria-label": "Close",
            onClick: d
          }, [
            te(_(yr), { class: "size-5" })
          ]),
          f.showLifeTime ? (y(), E("div", {
            key: 1,
            style: xt({ width: i.value }),
            class: "toast-item-progress"
          }, null, 4)) : le("", !0)
        ], 16)) : le("", !0)
      ]),
      _: 3
    }));
  }
}), Ee = b(/* @__PURE__ */ new Map()), _e = b(null), rt = () => ({
  registerContainer: (s, r) => {
    Ee.value.size === 0 && (_e.value = s), Ee.value.set(s, r);
  },
  removeStore: (s) => {
    Ee.value.delete(s) && s === _e.value && (_e.value = null);
  },
  getList: (s = _e.value) => s ? Ee.value.get(s) ?? null : null
}), lo = (t, e) => {
  const s = rt().getList(e);
  if (!s) throw new Error("Not found");
  const r = H(), o = pe(_r, t), a = t.onClose ?? A;
  s.value.push([r, o]), t.onClose = () => {
    a(), Sr([r, o], e);
  };
}, Sr = ([t], e) => {
  const s = rt().getList(e);
  if (!s) throw new Error("Not found");
  const r = s.value.filter((o) => o[0] !== t);
  r.length !== s.value.length && (s.value.length = 0, s.value.push(...r));
}, kr = { class: "hs-accordion" }, co = /* @__PURE__ */ O({
  __name: "AccordionComponent",
  props: {
    unique: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, n = b([]);
    return G("registerCollapse", (s) => {
      n.value.push(s);
    }), G("manageToggleCollapse", (s) => {
      let r = [];
      e.unique && (r = n.value.filter((o) => o.value.isOpen && s.value.uuid !== o.value.uuid)), r.length > 0 && r.forEach((o) => o.value.isOpen = !1);
    }), (s, r) => (y(), E("div", kr, [
      R(s.$slots, "default")
    ]));
  }
}), uo = /* @__PURE__ */ O({
  __name: "CarouselCard",
  emits: ["left", "visible", "hidden", "right", "change"],
  setup(t, { emit: e }) {
    const n = e, { addCard: s, setContainerHeight: r } = Z(Tt), o = new Sn(), a = b(""), i = b(), l = b("hidden"), u = parseInt(Date.now() * 0.01 * Math.random() + "").toString(16);
    o.on((d) => {
      const m = l.value === "visible", h = m ? d === "left" : l.value === "left", f = m ? d === "right" : l.value === "right";
      m ? a.value = h ? "rl" : f ? "lr" : a.value : d === "hidden" ? a.value = "rl" : a.value = h ? "lr" : f ? "rl" : a.value, l.value = d, c(d);
    });
    const c = (d) => {
      switch (n("change", d), d) {
        case "hidden":
          n("hidden");
          break;
        case "left":
          n("left");
          break;
        case "right":
          n("right");
          break;
        case "visible":
          n("visible");
          break;
      }
    };
    return T(l, (d) => {
      d === "visible" && setTimeout(() => {
        r(i.value.clientHeight);
      }, 0);
    }), s({ id: u, subscriber: o }), Ze(() => o.clear()), (d, m) => (y(), B(Ge, { name: a.value }, {
      default: ie(() => [
        Rt(x("div", {
          ref_key: "root",
          ref: i,
          class: "bc-carousel-card"
        }, [
          R(d.$slots, "default")
        ], 512), [
          [At, l.value === "visible"]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), xr = { class: "bc-carousel-container" }, fo = /* @__PURE__ */ O({
  __name: "CarouselContainer",
  props: {
    infinite: { type: Boolean, default: !0 }
  },
  setup(t) {
    const e = t, { currentIndex: n, distpachListeners: s, height: r, itemsList: o, next: a, prev: i } = _n({ infinite: e.infinite });
    return G(Tt, {
      addCard: (l) => {
        o.value.push(l);
      },
      setContainerHeight: (l) => {
        r.value.height = `${l}px`;
      }
    }), q(() => {
      o.value.length === 0 || o.value.length === 1 || s(0, o.value.length - 1, 1);
    }), (l, u) => (y(), E("div", xr, [
      R(l.$slots, "prev", V(Y({ prev: _(i) })), () => [
        te(_(mr), {
          onClick: _(i),
          class: "bc-carousel-btn"
        }, null, 8, ["onClick"])
      ]),
      x("div", {
        class: "bc-carousel-content",
        style: xt(_(r))
      }, [
        R(l.$slots, "default", V(Y({ currentIndex: _(n), totalSize: _(o).length, prev: _(i), next: _(a) })))
      ], 4),
      R(l.$slots, "next", V(Y({ next: _(a) })), () => [
        te(_(gr), {
          onClick: _(a),
          class: "bc-carousel-btn"
        }, null, 8, ["onClick"])
      ])
    ]));
  }
}), po = /* @__PURE__ */ O({
  __name: "CollapseComponent",
  props: {
    modelValue: { type: Boolean, default: !1 },
    header: {},
    class: { default: "" }
  },
  emits: ["update:model-value", "open", "close"],
  setup(t, { emit: e }) {
    const n = t, s = e, r = b({ isOpen: n.modelValue, uuid: H() }), { css: o, addCss: a } = W(n.class);
    a({ "hs-collapse--open": J(() => r.value.isOpen) });
    const i = Z("registerCollapse") ?? A, l = Z("manageToggleCollapse") ?? A;
    T(
      () => n.modelValue,
      (c) => {
        r.value.isOpen = c, s(c ? "open" : "close");
      }
    ), T(r, (c) => r.value = c, { deep: !0 });
    const u = () => {
      r.value.isOpen = !r.value.isOpen, s("update:model-value", r.value.isOpen), r.value.isOpen ? s("open") : s("close"), l(r);
    };
    return q(() => {
      i(r);
    }), (c, d) => (y(), E("div", {
      class: z(["hs-collapse", _(o)])
    }, [
      x("div", {
        class: "hs-collapse-header",
        onClick: u
      }, [
        R(c.$slots, "header", {}, () => [
          ne(se(c.header), 1)
        ])
      ]),
      Rt(x("div", {
        class: z(["hs-collapse-body", {}])
      }, [
        R(c.$slots, "default")
      ], 512), [
        [At, r.value.isOpen]
      ])
    ], 2));
  }
}), Rr = /* @__PURE__ */ O({
  __name: "CDatatableCellHeader",
  props: {
    identifier: {},
    colSpan: {},
    css: { default: "" },
    binds: { default: () => ({}) },
    events: { default: () => ({ onCellClick: A, onCellAuxclick: A, onCellDblclick: A }) },
    value: {}
  },
  emits: ["cellClick", "cellAuxclick", "cellDblclick"],
  setup(t, { emit: e }) {
    const n = t, s = e, r = {
      onClick: (c) => {
        n.events.onCellClick && n.events.onCellClick(c), s("cellClick", c);
      },
      onAuxclick: (c) => {
        n.events.onCellAuxclick && n.events.onCellAuxclick(c), s("cellAuxclick", c);
      },
      onDblclick: (c) => {
        n.events.onCellDblclick && n.events.onCellDblclick(c), s("cellDblclick", c);
      }
    }, o = J(
      () => n.colSpan && n.colSpan > 0 ? { "grid-column-start": `span ${n.colSpan}` } : {}
    ), { css: a, ...i } = W(n.css), l = n.identifier ?? H(), u = Tn(Z);
    return T(
      () => n.css,
      (c) => i.setCss(c)
    ), q(() => {
      u({ ...n, identifier: l });
    }), (c, d) => (y(), E("span", $(r, {
      class: ["w-full", _(a)],
      style: o.value
    }), [
      R(c.$slots, "default", {}, () => {
        var m;
        return [
          typeof c.value == "string" || typeof c.value == "number" ? (y(), E(M, { key: 0 }, [
            ne(se(c.value), 1)
          ], 64)) : (y(), B(re((m = c.value) == null ? void 0 : m.node), V($({ key: 1 }, c.binds)), null, 16)),
          te(_(vr), { class: "bc-chebron" })
        ];
      })
    ], 16));
  }
}), Ar = /* @__PURE__ */ O({
  __name: "CDatatableHeader",
  props: {
    identifier: {},
    cols: {},
    cells: { default: () => [] },
    css: { default: "" },
    customTemplateColumn: {},
    events: { default: () => ({ onHeaderClick: A, onHeaderAuxclick: A, onHeaderDblclick: A }) }
  },
  emits: ["rowClick", "rowAuxclick", "rowDblclick", "update:cells", "cellClick"],
  setup(t, { emit: e }) {
    const n = t, s = e, r = {
      onClick: (h) => {
        n.events.onHeaderClick && n.events.onHeaderClick(h), s("rowClick", h);
      },
      onAuxclick: (h) => {
        n.events.onHeaderAuxclick && n.events.onHeaderAuxclick(h), s("rowAuxclick", h);
      },
      onDblclick: (h) => {
        n.events.onHeaderDblclick && n.events.onHeaderDblclick(h), s("rowDblclick", h);
      }
    }, o = (h) => h.map((f) => ({ identifier: H(), ...f })), a = (h) => {
      s("cellClick", l.value.indexOf(h), h.identifier);
    }, i = n.identifier ?? H(), l = b(o(n.cells)), { css: u, ...c } = W(n.css), d = J(() => `repeat(${n.cols}, minmax(0, 1fr))`);
    An(G, (h) => {
      l.value.find((f) => f.identifier === h.identifier) === void 0 && (l.value = [...l.value, h], s("update:cells", l.value));
    });
    const m = Nn(Z);
    return T(
      () => n.css,
      (h) => c.setCss(h)
    ), T(
      () => n.cells,
      () => {
        l.value.length = 0, l.value.push(...o(n.cells));
      },
      { deep: !0 }
    ), q(() => {
      m({ ...n, identifier: i, cells: l.value });
    }), (h, f) => (y(), E("div", $(r, {
      class: ["bc-datatable-head", _(u)],
      style: { "grid-template-columns": h.customTemplateColumn ?? d.value }
    }), [
      R(h.$slots, "default", {}, () => [
        (y(!0), E(M, null, de(l.value, (g, v) => (y(), B(Rr, $({
          key: `r-${v}`,
          ref_for: !0
        }, g, {
          onCellClick: (w) => a(g)
        }), null, 16, ["onCellClick"]))), 128))
      ])
    ], 16));
  }
}), Tr = /* @__PURE__ */ O({
  __name: "CDatatableCell",
  props: {
    identifier: {},
    colSpan: {},
    css: { default: "" },
    binds: { default: () => ({}) },
    events: { default: () => ({ onCellClick: A, onCellAuxclick: A, onCellDblclick: A }) },
    value: {}
  },
  emits: ["cellClick", "cellAuxclick", "cellDblclick"],
  setup(t, { emit: e }) {
    const n = t, s = e, r = {
      onClick: (c) => {
        n.events.onCellClick && n.events.onCellClick(c), s("cellClick", c);
      },
      onAuxclick: (c) => {
        n.events.onCellAuxclick && n.events.onCellAuxclick(c), s("cellAuxclick", c);
      },
      onDblclick: (c) => {
        n.events.onCellDblclick && n.events.onCellDblclick(c), s("cellDblclick", c);
      }
    }, o = J(
      () => n.colSpan && n.colSpan > 0 ? { "grid-column-start": `span ${n.colSpan}` } : {}
    ), { css: a, ...i } = W(n.css), l = n.identifier ?? H(), u = Rn(Z);
    return T(
      () => n.css,
      (c) => i.setCss(c)
    ), q(() => {
      u({ ...n, identifier: l });
    }), (c, d) => (y(), E("span", $(r, {
      class: ["bc-datatable-cell", _(a)],
      style: o.value
    }), [
      R(c.$slots, "default", {}, () => {
        var m;
        return [
          typeof c.value == "string" || typeof c.value == "number" ? (y(), E(M, { key: 0 }, [
            ne(se(c.value), 1)
          ], 64)) : (y(), B(re((m = c.value) == null ? void 0 : m.node), V($({ key: 1 }, c.binds)), null, 16))
        ];
      })
    ], 16));
  }
}), Or = /* @__PURE__ */ O({
  __name: "CDatatableRow",
  props: {
    identifier: {},
    cols: {},
    cells: { default: () => [] },
    css: { default: "" },
    customTemplateColumn: {},
    events: { default: () => ({ onRowClick: A, onRowAuxclick: A, onRowDblclick: A }) }
  },
  emits: ["rowClick", "rowAuxclick", "rowDblclick", "update:cells"],
  setup(t, { emit: e }) {
    const n = t, s = e, r = {
      onClick: (m) => {
        n.events.onRowClick && n.events.onRowClick(m), s("rowClick", m);
      },
      onAuxclick: (m) => {
        n.events.onRowAuxclick && n.events.onRowAuxclick(m), s("rowAuxclick", m);
      },
      onDblclick: (m) => {
        n.events.onRowDblclick && n.events.onRowDblclick(m), s("rowDblclick", m);
      }
    }, o = (m) => m.map((h) => ({ identifier: H(), ...h })), a = n.identifier ?? H(), i = b(o(n.cells)), { css: l, ...u } = W(n.css), c = J(() => `repeat(${n.cols}, minmax(0, 1fr))`);
    xn(G, (m) => {
      i.value.find((h) => h.identifier === m.identifier) === void 0 && (i.value = [...i.value, m], s("update:cells", i.value));
    });
    const d = Dn(Z);
    return T(
      () => n.css,
      (m) => u.setCss(m)
    ), T(
      () => n.cells,
      () => {
        i.value.length = 0, i.value.push(...o(n.cells));
      },
      { deep: !0 }
    ), q(() => {
      d({ ...n, identifier: a, cells: i.value });
    }), (m, h) => (y(), E("div", $(r, {
      class: ["bc-datatable-row", _(l)],
      style: { "grid-template-columns": m.customTemplateColumn ?? c.value }
    }), [
      R(m.$slots, "default", {}, () => [
        (y(!0), E(M, null, de(i.value, (f, g) => (y(), B(Tr, $({
          key: `r-${g}`,
          ref_for: !0
        }, f), null, 16))), 128))
      ])
    ], 16));
  }
}), ho = /* @__PURE__ */ O({
  __name: "CDatatable",
  props: {
    cols: {},
    head: { default: () => ({}) },
    rows: { default: () => [] },
    css: { default: "" },
    customTemplateColumn: {}
  },
  setup(t) {
    const e = t, n = (d) => d.map((m) => ({ identifier: H(), ...m })), s = b(null), r = b(!1), o = (d, m) => {
      if (s.value === d) {
        r.value = !r.value;
        return;
      }
      s.value = d;
    }, a = J(() => s.value === null ? i.value : i.value.slice().sort((d, m) => {
      const h = d.cells[s.value], f = m.cells[s.value], g = typeof h.value == "string" || typeof h.value == "number" ? h.value.toString() : h.value.filterValue ?? "", v = typeof f.value == "string" || typeof f.value == "number" ? f.value.toString() : f.value.filterValue ?? "";
      return r.value ? v.localeCompare(g) : g.localeCompare(v);
    })), i = b(n(e.rows)), l = b(e.head), { css: u, ...c } = W(e.css);
    return On(G, (d) => {
      i.value.find((m) => m.identifier === d.identifier) === void 0 && i.value.push(d);
    }), Ln(G, (d) => {
      l.value = d;
    }), T(
      () => e.rows,
      () => {
        i.value.length = 0, i.value.push(...n(e.rows));
      },
      { deep: !0 }
    ), T(
      () => e.css,
      (d) => c.setCss(d)
    ), (d, m) => (y(), E("div", {
      class: z(["bc-datatable-container", _(u)])
    }, [
      R(d.$slots, "header", {}, () => [
        te(Ar, $({ onCellClick: o }, { ...d.head }, {
          cols: d.cols,
          "custom-template-column": d.customTemplateColumn
        }), null, 16, ["cols", "custom-template-column"])
      ]),
      R(d.$slots, "body", {}, () => [
        (y(!0), E(M, null, de(a.value, (h, f) => (y(), B(Or, $({
          key: f,
          ref_for: !0
        }, h, {
          cells: h.cells,
          "onUpdate:cells": (g) => h.cells = g,
          cols: h.cols ?? d.cols,
          "custom-template-column": d.customTemplateColumn
        }), null, 16, ["cells", "onUpdate:cells", "cols", "custom-template-column"]))), 128))
      ])
    ], 2));
  }
}), Dr = /* @__PURE__ */ O({
  name: "DraggingItem",
  props: {
    height: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      required: !0
    }
  },
  inheritAttrs: !1,
  setup(t) {
    return () => te("div", {
      class: "bg-gray-500 rounded-md ",
      style: {
        height: t.height,
        width: t.width
      }
    }, null);
  }
}), N = [];
for (let t = 0; t < 256; ++t)
  N.push((t + 256).toString(16).slice(1));
function Lr(t, e = 0) {
  return (N[t[e + 0]] + N[t[e + 1]] + N[t[e + 2]] + N[t[e + 3]] + "-" + N[t[e + 4]] + N[t[e + 5]] + "-" + N[t[e + 6]] + N[t[e + 7]] + "-" + N[t[e + 8]] + N[t[e + 9]] + "-" + N[t[e + 10]] + N[t[e + 11]] + N[t[e + 12]] + N[t[e + 13]] + N[t[e + 14]] + N[t[e + 15]]).toLowerCase();
}
let He;
const Nr = new Uint8Array(16);
function Br() {
  if (!He) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    He = crypto.getRandomValues.bind(crypto);
  }
  return He(Nr);
}
const Ir = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _t = { randomUUID: Ir };
function Pr(t, e, n) {
  var r;
  if (_t.randomUUID && !t)
    return _t.randomUUID();
  t = t || {};
  const s = t.random ?? ((r = t.rng) == null ? void 0 : r.call(t)) ?? Br();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, Lr(s);
}
const ln = (t) => {
  const e = [];
  for (const n in t)
    e.push([n, t[n]]);
  return e;
}, $r = (t) => {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const [s, r] = t[n];
    e[s] = r;
  }
  return e;
}, Ur = (t) => Array.isArray(t);
class Fr {
  constructor(e) {
    ee(this, "_tuple");
    this._tuple = e !== void 0 ? Ur(e) ? e : typeof e == "object" ? ln(e) : [] : [];
  }
  /**
   * Gets the value associated with the given key.
   * @param key The key to be searched in the tuple.
   * @returns The value associated with the key if found, null otherwise.
   */
  get(e) {
    let n = this._tuple.find((s) => s[0] == e);
    return n ? n[1] : null;
  }
  /**
   * Retrieves the value associated with the given key from the tuple, and removes that key-value pair from the tuple.
   * @param key The key to be searched in the tuple.
   * @returns The value associated with the key if found, null otherwise.
   */
  extract(e) {
    let n = this._tuple.find((r) => r[0] === e), s = this._tuple.filter((r) => r[0] !== e);
    return this.clear(), this._tuple.push(...s), n ? n[1] : null;
  }
  /**
   * Retrieves all key-value pairs stored in the tuple.
   *
   * @returns A tuple containing all key-value pairs as an array of tuples.
   */
  getAll() {
    return [...this._tuple];
  }
  *[Symbol.iterator]() {
    let e = -1;
    for (const [n, s] of this._tuple)
      e++, yield {
        key: n,
        value: s,
        index: e
      };
  }
  /**
   * Iterates over each key-value pair in the tuple, invoking the provided function
   * with the associated data, key, and index. The iteration can be stopped by calling
   * the `stop` function provided in the parameters.
   *
   * @param fn - A function that is called for each key-value pair in the tuple. It receives
   * an object containing the data, key, index, and a stop function to halt the iteration.
   */
  _iterate(e) {
    let n = !1;
    const s = () => n = !0;
    for (const { index: r, key: o, value: a } of this) {
      if (n)
        break;
      e({ data: a, key: o, index: r, stop: s });
    }
  }
  /**
   * Iterates over each key-value pair in the tuple, invoking the provided function
   * with the associated data, key, and index. The iteration can be stopped by calling
   * the `stop` function provided in the parameters. The function can be invoked
   * synchronously by setting `forceSync` to `true`.
   *
   * @param fn - A function that is called for each key-value pair in the tuple. It receives
   * an object containing the data, key, index, and a stop function to halt the iteration.
   * @param forceSync - If set to true, the function will be invoked synchronously. If set to false,
   * the function will be invoked asynchronously and the returned promise will be resolved when
   * all the promises returned by the function have been resolved or rejected.
   * @returns A promise that is resolved when all the promises returned by the function have been resolved,
   * or rejected if any of the promises have been rejected.
   */
  async _iterateAsync(e, n = !1) {
    const s = [];
    let r = !1;
    const o = () => r = !0;
    for (const { index: a, key: i, value: l } of this) {
      if (r)
        break;
      n ? await e({ data: l, key: i, index: a, stop: o }) : s.push(e({ data: l, key: i, index: a, stop: o }));
    }
    return new Promise((a, i) => {
      Promise.allSettled(s).then(() => {
        a(void 0);
      }).catch((l) => i(l));
    });
  }
  /**
   * Finds the element in the tuple at the given index.
   * @param indexToFind - The index of the element to find.
   * @returns The element at the given index if found, null otherwise.
   */
  findByIndex(e) {
    let n = null;
    return this._iterate(({ data: s, index: r, stop: o }) => {
      e === r && (n = s, o());
    }), n;
  }
  /**
   * Finds the first element in the tuple that satisfies the given callback function.
   * @param callback A function that takes an element of the tuple and its associated key and returns a boolean.
   * @returns The first element that satisfies the callback, or null if none is found.
   */
  find(e) {
    let n = null;
    return this._iterate(({ data: s, key: r, stop: o }) => {
      const a = e(s, r);
      if (typeof a != "boolean")
        throw new Error(`[${this.constructor.name}] callback must return a boolean`);
      a && (n = s, o());
    }), n;
  }
  /**
   * Filters the elements in the tuple based on the given callback function.
   * Iterates over each element, invoking the callback with the element's data and key.
   * If the callback returns true, the element is included in the resultant array.
   *
   * @param callback - A function that evaluates each element and its key, returning a boolean
   *                   to determine if the element should be included in the result.
   * @returns An array of elements that satisfy the callback condition.
   * @throws Error if the callback does not return a boolean.
   */
  filter(e) {
    const n = [];
    return this._iterate(({ data: s, key: r }) => {
      const o = e(s, r);
      if (typeof o != "boolean")
        throw new Error(`[${this.constructor.name}] callback must return a boolean`);
      o && n.push(s);
    }), n;
  }
  /**
   * Applies a transformation function to each element in the tuple and returns a new array containing the
   * results of the transformation.
   *
   * @param fn - A function that takes an element from the tuple, its associated key, and its index, and
   *             returns a new value.
   * @returns An array of transformed values.
   */
  map(e) {
    const n = [];
    return this._iterate(({ data: s, index: r, key: o }) => n.push(e(s, o, r))), n;
  }
  /**
   * Retrieves the first value from the tuple.
   *
   * @returns The first value associated with any key in the tuple, or null if the tuple is empty.
   */
  first() {
    return this.find(() => !0) ?? null;
  }
  /**
   * Retrieves the last value from the tuple.
   *
   * @returns The last value associated with any key in the tuple, or null if the tuple is empty.
   */
  last() {
    return this.filter(() => !0).pop() ?? null;
  }
  /**
   * Synchronously iterates over each element in the tuple, invoking the provided function
   * with the associated data, key, and index. The iteration can be stopped by calling
   * the `stop` function provided in the parameters.
   *
   * @param callback - A function that is called for each key-value pair in the tuple. It receives
   * an object containing the data, key, index, and a stop function to halt the iteration.
   */
  forEach(e) {
    this._iterate(({ data: n, key: s, index: r, stop: o }) => e(n, s, r, o));
  }
  /**
   * Synchronously iterates over each element in the tuple, invoking the provided function
   * with the associated data, key, and index. The iteration can be stopped by calling
   * the `stop` function provided in the parameters.
   *
   * @param callback - A function that is called for each key-value pair in the tuple. It receives
   * an object containing the data, key, index, and a stop function to halt the iteration.
   * @returns A promise that resolves when the iteration is complete.
   */
  async forEachSync(e) {
    return this._iterateAsync(({ data: n, key: s, index: r, stop: o }) => e(n, s, r, o), !0);
  }
  /**
   * Iterates over each element in the tuple asynchronously, invoking the provided function
   * with the associated data, key, and index. The iteration can be stopped by calling
   * the `stop` function provided in the parameters.
   *
   * @param callback - A function that is called for each key-value pair in the tuple. It receives
   * an object containing the data, key, index, and a stop function to halt the iteration.
   * @returns A promise that resolves when the iteration is complete.
   */
  async forEachAsync(e) {
    return this._iterateAsync(({ data: n, key: s, index: r, stop: o }) => e(n, s, r, o), !1);
  }
  /**
   * Adds a new element to the tuple. If the key already exists, the value is updated.
   * @param key - The key of the element to be added.
   * @param value - The value associated with the key.
   * @returns The tuple storage object itself, for chaining.
   */
  add(e, n) {
    const s = this._tuple.find((r) => r[0] === e);
    return s ? s[1] = n : this._tuple.push([e, n]), this;
  }
  /**
   * Removes the element associated with the given key from the tuple.
   * @param key - The key of the element to be removed.
   * @returns True if the element was found and removed, false otherwise.
   */
  remove(e) {
    const n = this._tuple.filter((s) => s[0] !== e);
    return n.length === this._tuple.length ? !1 : (this.clear(), this._tuple.push(...n), !0);
  }
  /**
   * Checks if the given key exists in the tuple.
   * @param key - The key to be searched in the tuple.
   * @returns True if the key exists, false otherwise.
   */
  existsKey(e) {
    return this.get(e) !== null;
  }
  /**
   * Checks if the given data exists in the tuple.
   * @param value - The data value to be searched in the tuple.
   * @returns True if the data exists, false otherwise.
   */
  existsData(e) {
    return this.find((n) => n === e) !== null;
  }
  /**
   * Removes all elements from the tuple.
   *
   * @returns The tuple storage object itself, for chaining.
   */
  clear() {
    return this._tuple.length = 0, this;
  }
  /**
   * Retrieves an array of keys from the tuple.
   *
   * @returns An array of keys, which are the first elements of each tuple.
   */
  keys() {
    return this._tuple.map((e) => e[0]);
  }
  /**
   * Retrieves an array of values from the tuple.
   *
   * @returns An array of values, which are the second elements of each tuple.
   */
  values() {
    return this._tuple.map((e) => e[1]);
  }
  /**
   * Retrieves the number of elements in the tuple.
   *
   * @returns The number of elements in the tuple.
   */
  size() {
    return this._tuple.length;
  }
  /**
   * Converts the tuple to a JSON string.
   *
   * @returns A string representation of the tuple in JSON format.
   */
  toString() {
    return JSON.stringify(this._tuple);
  }
}
class St extends Fr {
  constructor(e) {
    super(ln(e));
  }
  /**
   * Gets the value associated with the given key.
   * @param {K} key - The key to be searched in the tuple.
   * @returns {ExtractTupleField<TInternTuple<V>, K> extends never ? null : ExtractTupleField<TInternTuple<V>, K> | null} The value associated with the key if found, null otherwise.
   */
  get(e) {
    return super.get(e);
  }
  /**
   * Retrieves the value associated with the given key from the tuple, and removes that key-value pair from the tuple.
   * @param {K} key - The key to be searched in the tuple.
   * @returns {ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K> extends never ? null : ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K> | null} The value associated with the key if found, null otherwise.
   */
  extract(e) {
    return super.extract(e);
  }
  /**
   * Retrieves all key-value pairs stored in the tuple.
   * @returns {TInternTuple<TObject2Tuple<V>>} A tuple containing all key-value pairs as an array of tuples.
   */
  getAll() {
    return super.getAll();
  }
  /**
   * Finds the first element in the tuple that satisfies the given callback function.
   *
   * @param {function(K, ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K>): boolean} callback
   * - A function that takes an element of the tuple, its associated key, and its index, and
   * returns a boolean.
   * @returns {TInternTuple<TObject2Tuple<V>>[number][1] | null} The first element that satisfies the callback, or null if none is found.
   */
  find(e) {
    return super.find(e);
  }
  /**
   * Filters the elements in the tuple based on the given callback function.
   *
   * @param {function(K, ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K>): boolean} callback
   * - A function that takes an element of the tuple, its associated key, and its index, and
   * returns a boolean.
   * @returns {TInternTuple<TObject2Tuple<V>>[number][]} An array of elements that satisfy the callback condition.
   */
  filter(e) {
    return super.filter(e);
  }
  /**
   * Applies a transformation function to each element in the tuple and returns a new array containing the
   * results of the transformation.
   *
   * @param {function(K, ExtractTupleField<TInternTuple<TObject2Tuple<V>>, K>, number): R} fn
   * - A function that takes an element of the tuple, its associated key, and its index, and
   * returns a new value.
   * @returns {R[]} An array of transformed values.
   */
  map(e) {
    return super.map(e);
  }
  /**
   * Returns the first element in the tuple.
   *
   * @returns {ExtractTupleField<TInternTuple<V>, ExtractTupleKey<TInternTuple<V>>> | null} The first element in the tuple, or null if the tuple is empty.
   */
  first() {
    return super.first();
  }
  /**
   * Returns the last element in the tuple.
   *
   * @returns {ExtractTupleField<TInternTuple<V>, ExtractTupleKey<TInternTuple<V>>> | null} The last element in the tuple, or null if the tuple is empty.
   */
  last() {
    return super.last();
  }
  /**
   * Synchronously iterates over each element in the tuple, invoking the provided function
   * with the associated data, key, and index. The iteration can be stopped by calling
   * the `stop` function provided in the parameters.
   *
   * @param {function(K, ExtractTupleField<TInternTuple<V>, K>, number, () => void): void} callback
   * - A function that is called for each key-value pair in the tuple. It receives
   * an object containing the data, key, index, and a stop function to halt the iteration.
   * @returns {void} nothing
   */
  forEach(e) {
    return super.forEach(e);
  }
  /**
   * Iterates over each element in the tuple asynchronously, invoking the provided function
   * with the associated data, key, and index. The iteration can be stopped by calling
   * the `stop` function provided in the parameters.
   *
   * @param {function(K, ExtractTupleField<TInternTuple<V>, K>, number, () => void): Promise<void>} callback
   * - A function that is called for each key-value pair in the tuple. It receives
   * an object containing the data, key, index, and a stop function to halt the iteration.
   * @returns {Promise<void>} A promise that resolves when the iteration is complete.
   */
  async forEachSync(e) {
    return await super.forEachSync(e);
  }
  /**
   * Iterates over each element in the tuple asynchronously, invoking the provided function
   * with the associated data, key, and index. The iteration can be stopped by calling
   * the `stop` function provided in the parameters.
   *
   * @param {function(K, ExtractTupleField<TInternTuple<V>, K>, number, () => void): Promise<void>} callback
   * - A function that is called for each key-value pair in the tuple. It receives
   * an object containing the data, key, index, and a stop function to halt the iteration.
   * @returns {Promise<void>} A promise that resolves when the iteration is complete.
   */
  async forEachAsync(e) {
    return await super.forEachAsync(e);
  }
  /**
   * Adds a new element to the tuple. If the key already exists, the value is updated.
   * @param {K} key - The key of the element to be added.
   * @param {ExtractTupleField<TInternTuple<V>, K>} value - The value associated with the key.
   * @returns {this} The tuple storage object itself, for chaining.
   */
  add(e, n) {
    return super.add(e, n);
  }
  /**
   * Removes the element associated with the given key from the tuple.
   * @param {K} key - The key of the element to be removed.
   * @returns {boolean} True if the element was found and removed, false otherwise.
   */
  remove(e) {
    return super.remove(e);
  }
  /**
   * Checks if the tuple contains a key.
   * @param {ExtractTupleKey<TInternTuple<V>>} key - The key to be searched.
   * @returns {boolean} True if the key was found, false otherwise.
   */
  existsKey(e) {
    return super.existsKey(e);
  }
  /**
   * Checks if the tuple contains a value.
   * @param {ExtractTupleField<TInternTuple<V>, K>} value - The value to be searched.
   * @returns {boolean} True if the value was found, false otherwise.
   */
  existsData(e) {
    return super.existsData(e);
  }
  /**
   * Removes all elements from the tuple.
   * @returns {this} The tuple storage object itself, for chaining.
   */
  clear() {
    return super.clear();
  }
  /**
   * Retrieves an array of keys from the tuple.
   *
   * @returns {ExtractTupleKey<TInternTuple<V>>[]} An array of keys, which are the first elements of each tuple.
   */
  keys() {
    return super.keys();
  }
  /**
   * Retrieves an array of values from the tuple.
   *
   * @returns {V[keyof V][]} An array of values, which are the second elements of each tuple.
   */
  values() {
    return super.values();
  }
  /**
   * Returns the number of elements in the tuple.
   *
   * @returns {number} The size of the tuple.
   */
  size() {
    return super.size();
  }
  /**
   * Returns the number of elements in the tuple.
   *
   * @returns {number} The size of the tuple.
   */
  toString() {
    return JSON.stringify($r(this._tuple));
  }
}
class jr {
  constructor(e) {
    ee(this, "_target");
    ee(this, "_storage");
    this._target = e, this._storage = new St();
  }
  /**
   * Returns the list of all event listeners registered for the given event type.
   * If such list doesn't exist, a new one is created and stored in the internal storage.
   * @param ev - The type of event to retrieve the list of event listeners for.
   * @returns The list of event listeners registered for the given event type.
   */
  _getOrCreateEventList(e) {
    const n = this._storage.get(e) ?? new St();
    return this._storage.add(e, n), n;
  }
  /**
   * Registers an event listener for the specified event type.
   *
   * @param ev - The type of event to listen for.
   * @param fn - The callback function to be executed when the event is triggered.
   * @param conf - An optional configuration object that specifies characteristics of the event listener.
   * @returns A unique string identifier for the registered event listener.
   */
  on(e, n, s) {
    const r = this._getOrCreateEventList(e), o = Pr();
    return r.add(o, n), this._target.addEventListener(e, n, s), o;
  }
  /**
   * Removes an event listener for the specified event type.
   *
   * @param {Event} ev - The type of event to remove the listener for.
   * @param {TWindowEventStorage[Event] | string} fn - The callback function or the unique identifier of the event listener.
   * @param {boolean | EventListenerOptions} [conf] - Optional configuration object for the event listener.
   * @returns {boolean} - Returns `true` if the event listener was successfully removed, otherwise `false`.
   */
  remove(e, n, s) {
    const r = this._getOrCreateEventList(e);
    let o = !1;
    return typeof n == "string" ? o = r.remove(n) : r.forEach((a, i) => {
      a === n && (o = r.remove(i));
    }), this._target.removeEventListener(e, n, s), o;
  }
  /**
   * Clears all event listeners from the storage and removes them from the target.
   */
  clearAll() {
    this._storage.forEach((e, n) => e.forEach((s) => this._target.removeEventListener(n, s)));
  }
  /**
   * Migrates the event listeners from the current target to the specified target.
   *
   * @param {Target} target - The target to migrate the event listeners to.
   * @returns {this} - Returns the current instance for method chaining.
   */
  _migrateEvents(e) {
    return this._storage.forEach((n, s) => n.forEach((r) => e.addEventListener(s, r))), this;
  }
  /**
   * Migrates the event listeners from the current target to a new target.
   * After calling this method, all the event listeners will be attached to the new target.
   * The internal target reference is also updated.
   * @param target The new target to migrate the event listeners to.
   * @returns The same instance of the {@link DEventManager} for chaining.
   */
  migrate(e) {
    return this._migrateEvents(e), this._target = e, this;
  }
  /**
   * Returns the target which the event listeners are attached to.
   * @readonly
   * @type {Target}
   */
  get target() {
    return this._target;
  }
}
const kt = (t) => {
  const { top: e, left: n, width: s, height: r } = t.getBoundingClientRect();
  return {
    style: {
      height: r + "px",
      width: s + "px",
      top: e + "px",
      left: n + "px"
    },
    size: {
      height: r,
      width: s,
      top: e,
      left: n
    }
  };
}, Mr = { class: "w-full" }, Hr = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "DraggableSortableItem",
  props: {
    modelValue: {}
  },
  emits: ["dragend", "dragenter", "dragstart", "update:model-value"],
  setup(t, { emit: e }) {
    const n = t, s = e, r = b(kt(document.createElement("div"))), o = J({
      get() {
        return n.modelValue;
      },
      set(i) {
        s("update:model-value", i);
      }
    }), a = Xe({
      dragend: (i) => {
        o.value.dragging = !1, o.value = { ...o.value }, s("dragend", o.value, i);
      },
      dragenter: (i) => {
        s("dragenter", o.value, i);
      },
      dragstart: (i) => {
        const l = i.target ?? null;
        l && (r.value = kt(l), o.value.dragging = !0, s("dragstart", {
          sizing: r.value,
          domEvent: i,
          target: l,
          item: o.value
        }), o.value = { ...o.value });
      }
    });
    return (i, l) => (y(), E("div", Mr, [
      x("div", $(_(a), {
        class: ["w-full bg-primary-500 rounded-sm", { hidden: o.value.dragging }],
        draggable: !0
      }), [
        typeof o.value.node == "string" ? (y(), E(M, { key: 0 }, [
          ne(se(o.value.node), 1)
        ], 64)) : (y(), B(re(o.value.node), { key: 1 }))
      ], 16),
      o.value.dragging ? (y(), B(_(Dr), {
        key: 0,
        height: r.value.style.height,
        width: r.value.style.width
      }, null, 8, ["height", "width"])) : le("", !0)
    ]));
  }
}), mo = /* @__PURE__ */ O({
  __name: "DraggableSortableContainer",
  props: {
    modelValue: { default: () => [] },
    targetContainer: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t;
    T(
      () => n.modelValue,
      (w) => {
        r.value.length = 0, r.value.push(...w);
      }
    );
    const s = e, r = b(n.modelValue), o = b(), a = b({
      height: "0px",
      width: "0px",
      top: "0px",
      left: "0px"
    }), i = new jr(document.body);
    let l = 0, u = 0;
    const c = b(null), d = (w) => {
      const S = w.clientX - l, k = w.clientY - u;
      a.value.left = `${S}px`, a.value.top = `${k}px`;
    }, m = b(null), h = (w, S) => {
      if (S.preventDefault(), !m.value || m.value === w) return;
      const k = r.value.indexOf(m.value), U = r.value.indexOf(w);
      r.value.splice(k, 1), r.value.splice(U, 0, m.value), s("update:modelValue", r.value);
    }, f = ({ sizing: w, target: S, domEvent: k, item: U }) => {
      a.value = w.style;
      const I = S.cloneNode(!0);
      l = k.clientX - S.offsetLeft, u = k.clientY - S.offsetTop, c.value = pe("div", {
        innerHTML: I.outerHTML,
        class: "absolute z-50 bottom-0 right-0"
      }), m.value = U, i.on("dragover", d);
    }, g = () => {
      c.value = null, i.remove("dragover", d);
    }, v = (w, S) => {
      ({ ...S });
    };
    return q(() => {
      n.targetContainer && c.value && i.migrate(o.value);
    }), (w, S) => (y(), E("div", {
      ref_key: "dragContainer",
      ref: o,
      class: "hs-draggable-sortable-container"
    }, [
      (y(!0), E(M, null, de(r.value, (k) => (y(), B(Hr, {
        key: k.id,
        "model-value": k,
        "onUpdate:modelValue": (U) => v(k, U),
        onDragend: g,
        onDragstart: f,
        onDragenter: h
      }, null, 8, ["model-value", "onUpdate:modelValue"]))), 128)),
      c.value ? (y(), B(re(() => c.value), V($({ key: 0 }, { style: a.value })), null, 16)) : le("", !0)
    ], 512));
  }
}), Vr = ["data-hs-drag-active"], qr = /* @__PURE__ */ O({
  __name: "DragAndDropItem",
  props: {
    dragBinds: {},
    selected: { type: Boolean, default: !1 },
    css: {}
  },
  setup(t) {
    const e = t, n = J(() => e.selected ? !0 : void 0);
    return (s, r) => (y(), E("span", $(s.dragBinds, {
      class: "drag-item",
      "data-hs-drag-active": n.value
    }), [
      R(s.$slots, "default")
    ], 16, Vr));
  }
}), zr = { class: "container" }, go = /* @__PURE__ */ O({
  __name: "DraggableSortableOld",
  props: {
    data: {}
  },
  setup(t) {
    const n = b(t.data), s = b(-1), r = (i, l) => {
      i.dataTransfer && (i.dataTransfer.dropEffect = "move", i.dataTransfer.effectAllowed = "move", s.value = l);
    }, o = () => {
      s.value = -1;
    }, a = (i, l) => {
      if (i.preventDefault(), s.value === l) return;
      const u = n.value.indexOf(s.value), c = n.value.indexOf(l);
      n.value.splice(u, 1), n.value.splice(c, 0, s.value);
    };
    return (i, l) => (y(), E("div", zr, [
      x("div", $(_(Xe)(), { class: "drag-container" }), [
        (y(!0), E(M, null, de(n.value, (u, c) => (y(), B(qr, {
          key: c,
          dragBinds: {
            ..._(Xe)(
              {
                dragend: o,
                dragenter: (d) => a(d, u),
                dragstart: (d) => r(d, u)
              },
              !0
            )
          },
          selected: u === s.value
        }, {
          default: ie(() => [
            typeof u == "string" || typeof u == "number" ? (y(), E(M, { key: 0 }, [
              ne(se(u), 1)
            ], 64)) : (y(), B(re(u), { key: 1 }))
          ]),
          _: 2
        }, 1032, ["dragBinds", "selected"]))), 128))
      ], 16)
    ]));
  }
}), vo = /* @__PURE__ */ O({
  __name: "DropdownComponent",
  props: {
    modelValue: { type: Boolean, default: !1 },
    header: {},
    closeOutSiceClick: { type: Boolean }
  },
  emits: ["update:model-value"],
  setup(t, { emit: e }) {
    const n = t, s = e, { css: r, ...o } = W({ hidden: !1 }), a = b(n.modelValue), i = b(), l = b();
    T(
      () => n.modelValue,
      (m) => {
        a.value = m, o.addCss({ hidden: !a.value });
      }
    );
    const u = () => {
      a.value = !a.value, o.addCss({ hidden: !a.value }), s("update:model-value", a.value);
    }, c = () => {
      var f;
      const m = l.value.getBoundingClientRect(), h = (f = i.value.parentElement) == null ? void 0 : f.getBoundingClientRect();
      h && (m.right > h.right && o.addCss({ "right-0": !0, "left-0": !1 }), o.addCss({ hidden: !a.value }));
    };
    let d = () => {
    };
    return q(() => {
      c(), n.closeOutSiceClick && (d = Qe(i.value, () => {
        a.value = !1, o.addCss({ hidden: a.value }), s("update:model-value", a.value);
      }));
    }), Ze(d), (m, h) => (y(), E("div", {
      ref_key: "container",
      ref: i,
      class: "relative bg-slate-300 w-fit"
    }, [
      x("div", {
        class: "cursor-pointer select-none",
        onClick: u
      }, [
        R(m.$slots, "header", {}, () => [
          ne(se(m.header), 1)
        ])
      ]),
      x("div", {
        ref_key: "dropdown",
        ref: l,
        class: z(["absolute", _(r)])
      }, [
        R(m.$slots, "default")
      ], 2)
    ], 512));
  }
}), Jr = /* @__PURE__ */ O({
  __name: "BaseModal",
  props: {
    visible: { type: Boolean, default: !1 },
    target: {},
    beforeAccept: { type: Function, default: () => !0 },
    afterAccept: { type: Function, default: () => {
    } },
    closeOnClickOutside: { type: Boolean, default: !0 },
    outsideClickHandler: { type: Function, default: () => !0 },
    modalCss: { default: "w-[48rem] h-[24rem] bg-white" },
    modalStyle: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:visible", "close", "open", "accept", "cancel"],
  setup(t, { emit: e }) {
    const n = t, s = b(), r = b(n.visible), { css: o, ...a } = W(n.modalCss), i = e, l = () => {
      r.value = !1, i("close"), i("update:visible", !1);
    }, u = () => {
      n.beforeAccept() && (l(), i("accept"), n.afterAccept());
    }, c = () => {
      l(), i("cancel");
    }, d = () => {
      r.value = !0, i("open"), i("update:visible", !0);
    };
    let m = () => {
    };
    const h = { close: l, accept: u, cancel: c, open: d, isVisible: r };
    return T(
      () => n.visible,
      (f) => {
        r.value = f, i(f ? "open" : "close");
      },
      { immediate: !0 }
    ), T(
      () => n.target,
      (f, g) => {
        g == null || g.removeEventListener("click", d), f == null || f.addEventListener("click", d);
      }
    ), T(
      () => n.modalCss,
      (f) => a.addCss(f)
    ), q(() => {
      var f;
      (f = n.target) == null || f.addEventListener("click", d), m = Qe(s.value, (g) => {
        n.closeOnClickOutside && n.outsideClickHandler(g) && l();
      });
    }), Ze(() => {
      m();
    }), (f, g) => r.value ? (y(), E("div", {
      key: 0,
      class: z(_(o)),
      ref_key: "modalDOM",
      ref: s
    }, [
      R(f.$slots, "header", V(Y(h))),
      R(f.$slots, "body", V(Y(h))),
      R(f.$slots, "footer", V(Y(h)))
    ], 2)) : le("", !0);
  }
}), Kr = { class: "flex justify-center items-center h-full w-full" }, Wr = { class: "flex justify-between items-center mb-4" }, Xr = ["onClick"], Gr = { class: "flex justify-end" }, Zr = ["onClick"], Yr = ["onClick"], yo = /* @__PURE__ */ O({
  __name: "StyledModal",
  props: {
    visible: { type: Boolean, default: !1 },
    target: {},
    beforeAccept: { type: Function, default: () => !0 },
    afterAccept: { type: Function, default: () => {
    } },
    closeOnClickOutside: { type: Boolean },
    outsideClickHandler: {}
  },
  emits: ["update:visible", "close", "open", "accept", "cancel"],
  setup(t, { emit: e }) {
    const n = t, s = e, r = J({
      get() {
        return n.visible ?? !1;
      },
      set(a) {
        s("update:visible", a);
      }
    }), o = J(() => n.target);
    return (a, i) => (y(), E("div", {
      class: z(["fixed top-0 left-0 w-screen h-screen bg-stone-800/75", { hidden: !r.value }])
    }, [
      x("div", Kr, [
        te(Jr, {
          visible: r.value,
          "onUpdate:visible": i[0] || (i[0] = (l) => r.value = l),
          target: o.value,
          "modal-css": "p-4 w-[48rem] bg-white rounded-md"
        }, {
          header: ie((l) => [
            R(a.$slots, "header", V(Y(l)), () => [
              x("div", Wr, [
                i[2] || (i[2] = x("h2", { class: "text-2xl font-bold text-custom-brown" }, "Modal Title", -1)),
                x("button", {
                  onClick: l.close,
                  class: "text-custom-gray hover:text-custom-orange-bright"
                }, i[1] || (i[1] = [
                  x("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    x("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]), 8, Xr)
              ])
            ])
          ]),
          body: ie((l) => [
            R(a.$slots, "body", V(Y(l)), () => [
              i[3] || (i[3] = x("p", { class: "text-custom-gray mb-4" }, "Modal content goes here...", -1))
            ])
          ]),
          footer: ie((l) => [
            R(a.$slots, "footer", V(Y(l)), () => [
              x("div", Gr, [
                x("button", {
                  onClick: l.close,
                  class: "btn-sm"
                }, "Close", 8, Zr),
                x("button", {
                  onClick: l.accept,
                  class: "btn-primary"
                }, "Accept", 8, Yr)
              ])
            ])
          ]),
          _: 3
        }, 8, ["visible", "target"])
      ])
    ], 2));
  }
}), Qr = ["onClick"], eo = { class: "tab-body" }, bo = /* @__PURE__ */ O({
  __name: "TabMenu",
  props: {
    direction: { default: Pe },
    allHidden: { type: Boolean, default: !1 },
    headerClass: { default: "" }
  },
  setup(t) {
    const e = t, n = b([]), s = b(null), r = b(e.direction), o = b(e.allHidden), { headerClass: a } = dn(e), i = (h) => {
      h.active = h.active === void 0 ? !1 : h.active;
      const f = b(h);
      return n.value.push(f), f;
    }, l = (h) => {
      n.value = n.value.filter((f) => f.value.id !== h);
    }, u = (h) => {
      const f = n.value.find((g) => g.value.id === h);
      f && (s.value = f.value, !o.value && n.value.forEach((g) => {
        g.value.id === h && g.value.active === !1 && g.value.emit.show(), g.value.id !== h && g.value.active === !0 && g.value.emit.hide(), g.value.active = g.value.id === h;
      }));
    }, c = () => n.value.forEach((h) => {
      h.value.active && (s.value = h.value), h.value.active = !1;
    }), d = () => {
      const h = s.value !== null ? s : n.value[0];
      h.value !== null && n.value.forEach((f) => {
        var g;
        return f.value.active = f.value.id === ((g = h.value) == null ? void 0 : g.id);
      });
    }, m = (h) => {
      u(h.value.id), h.value.emit.clickTab();
    };
    return G(Bt, i), G(It, l), G(Pt, u), q(() => {
      if (o.value) {
        c();
        return;
      }
      const h = n.value.filter((f) => f.value.active);
      if (h.length > 1) throw new Error("[TabMenu] - there are more than one tabs set as active, error expected");
      h.length === 0 && n.value.length !== 0 && (n.value[0].value.active = !0);
    }), T(
      () => e.direction,
      (h) => r.value = h
    ), T(
      () => e.allHidden,
      (h) => {
        h ? c() : d(), o.value = h;
      }
    ), (h, f) => (y(), E("div", {
      class: z(["tab-menu", { "tab-menu--line": r.value === _(Pe) }])
    }, [
      x("div", {
        class: z(["tab-header", {
          "tab-header--col": r.value === _(Bn),
          "tab-header--line": r.value === _(Pe),
          [_(a)]: !0
        }])
      }, [
        (y(!0), E(M, null, de(n.value, (g) => (y(), E("div", {
          class: z(["tab-btn", {
            "tab-btn--active": g.value.active
          }]),
          key: g.value.id,
          onClick: () => m(g)
        }, [
          typeof g.value.header == "string" ? (y(), E(M, { key: 0 }, [
            ne(se(g.value.header), 1)
          ], 64)) : (y(), B(re(g.value.header.component), $({
            key: 1,
            ref_for: !0
          }, g.value.header.binds), null, 16))
        ], 10, Qr))), 128))
      ], 2),
      x("div", eo, [
        R(h.$slots, "default")
      ])
    ], 2));
  }
}), wo = /* @__PURE__ */ O({
  __name: "TabSlide",
  props: {
    header: {},
    id: {},
    active: { type: Boolean, default: !1 },
    transitionName: { default: "fade-abs" },
    class: { default: "" }
  },
  emits: ["clickTab", "show", "hide"],
  setup(t, { emit: e }) {
    const n = t, s = e, r = n.id ?? parseInt(`${Date.now() * Math.random()}`).toString(16), o = b({}), { css: a, ...i } = W(n.class);
    i.addCss("overflow-y-auto flex flex-col grow min-w-full"), T(
      () => n.class,
      (m) => i.addCss(m)
    );
    const l = Z(Pt), u = Z(Bt), c = Z(It);
    fn(() => {
      o.value = u({
        header: n.header,
        id: r,
        active: n.active,
        emit: { clickTab: () => s("clickTab"), show: () => s("show"), hide: () => s("hide") }
      }).value;
    }), pn(() => c(r)), T(
      () => n.active,
      (m) => {
        m && l(r);
      }
    );
    const d = J(() => n.transitionName);
    return (m, h) => (y(), B(Ge, { name: d.value }, {
      default: ie(() => [
        o.value.active ? (y(), E("div", {
          key: 0,
          class: z([_(a), ""])
        }, [
          R(m.$slots, "default")
        ], 2)) : le("", !0)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), Co = /* @__PURE__ */ O({
  __name: "ToastContainer",
  props: {
    css: { default: () => [] },
    position: { default: "top-right" },
    target: { default: "document" },
    id: {}
  },
  setup(t) {
    const e = t, { css: n, ...s } = W(e.css), r = e.id ?? H(), o = b([]), a = (l) => /^(top|bottom)-(right|center|left)$/.test(l), i = (l) => {
      if (!a(l)) throw new Error(`Invalid prop type for 'position' as '${l}'`);
      return `toast-container--${l}`;
    };
    return T(
      () => e.position,
      (l, u) => s.addCss({ [i(u)]: !1, [i(l)]: !0 })
    ), q(() => {
      s.addCss({
        [e.target === "document" ? "toast-container--fixed" : "toast-container--absolute"]: !0,
        [i(e.position)]: !0,
        "toast-container": !0
      }), rt().registerContainer(r, o);
    }), (l, u) => (y(), E("div", {
      class: z(_(n))
    }, [
      (y(!0), E(M, null, de(o.value, ([c, d]) => (y(), B(re(d), { key: c }))), 128))
    ], 2));
  }
});
class to {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  install(e, ...n) {
    const s = /* @__PURE__ */ new Map();
    e.directive("outside-click", {
      beforeMount(r, o) {
        (s.get(r) ?? A)(), s.set(o, Qe(r, o.value));
      },
      beforeUnmount(r) {
        (s.get(r) ?? A)();
      }
    });
  }
}
const Eo = () => new to().install;
export {
  co as AccordionComponent,
  Jr as BaseModal,
  Tt as CARROUSEL_ACTIONS,
  ho as CDatatable,
  Tr as CDatatableCell,
  Rr as CDatatableCellHeader,
  Ar as CDatatableHeader,
  Or as CDatatableRow,
  uo as CarouselCard,
  fo as CarouselContainer,
  Sn as CarouselSubscriber,
  po as CollapseComponent,
  go as DraggableSortable,
  mo as DraggableSortableContainer,
  Hr as DraggableSortableItem,
  Dr as DraggableSortableItemShadow,
  vo as DropdownComponent,
  Dt as HEADER_PROVIDE,
  Ot as ROW_PROVIDE,
  yo as StyledModal,
  Lt as TABLE_PROVIDE,
  Nt as TABLE_PROVIDE_HEADER,
  Bt as TAB_ADD,
  Bn as TAB_DIRECTION_COL,
  Pe as TAB_DIRECTION_LINE,
  It as TAB_REMOVE,
  Pt as TAB_SET_ACTIVE,
  bo as TabMenu,
  wo as TabSlide,
  Co as ToastContainer,
  _r as ToastItem,
  ro as buildDatatableCell,
  kn as buildDatatableRow,
  oo as buildDatatableRows,
  Tn as cellInjectFromHeader,
  Rn as cellInjectFromRow,
  lo as createToast,
  Nn as headerInjectFromTable,
  An as headerProvide,
  Qe as onClickOutside,
  fe as reactiveAsyncCallback,
  Dn as rowInjectFromTable,
  xn as rowProvide,
  On as tableProvide,
  Ln as tableProvideHeader,
  Et as translateCss,
  ao as useApiConnector,
  Eo as useBitCraft,
  io as useCSSGenerator,
  _n as useCarousel,
  W as useCssClassTranslator,
  En as useDomNativeEventManager,
  Xe as useDragAndDropItem
};
