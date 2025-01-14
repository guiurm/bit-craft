var Te = Object.defineProperty;
var Re = (s, t, e) => t in s ? Te(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var J = (s, t, e) => Re(s, typeof t != "symbol" ? t + "" : t, e);
import { ref as h, openBlock as m, createElementBlock as g, createElementVNode as C, defineComponent as x, watch as w, onMounted as R, createBlock as E, Transition as be, withCtx as Y, mergeProps as $, unref as b, renderSlot as _, createVNode as F, createCommentVNode as Z, Fragment as O, createTextVNode as P, toDisplayString as z, resolveDynamicComponent as q, normalizeStyle as Ce, h as K, provide as V, inject as M, onUnmounted as ie, withDirectives as _e, vShow as ke, normalizeProps as T, guardReactiveProps as H, computed as N, renderList as X, normalizeClass as B, onBeforeMount as Ie, onBeforeUnmount as Le } from "vue";
const Ve = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
function Me(s) {
  return typeof s == "string" && Ve.test(s);
}
function je(s) {
  if (!Me(s))
    throw TypeError("Invalid UUID");
  var t, e = new Uint8Array(16);
  return e[0] = (t = parseInt(s.slice(0, 8), 16)) >>> 24, e[1] = t >>> 16 & 255, e[2] = t >>> 8 & 255, e[3] = t & 255, e[4] = (t = parseInt(s.slice(9, 13), 16)) >>> 8, e[5] = t & 255, e[6] = (t = parseInt(s.slice(14, 18), 16)) >>> 8, e[7] = t & 255, e[8] = (t = parseInt(s.slice(19, 23), 16)) >>> 8, e[9] = t & 255, e[10] = (t = parseInt(s.slice(24, 36), 16)) / 1099511627776 & 255, e[11] = t / 4294967296 & 255, e[12] = t >>> 24 & 255, e[13] = t >>> 16 & 255, e[14] = t >>> 8 & 255, e[15] = t & 255, e;
}
var D = [];
for (var se = 0; se < 256; ++se)
  D.push((se + 256).toString(16).slice(1));
function ce(s, t = 0) {
  return (D[s[t + 0]] + D[s[t + 1]] + D[s[t + 2]] + D[s[t + 3]] + "-" + D[s[t + 4]] + D[s[t + 5]] + "-" + D[s[t + 6]] + D[s[t + 7]] + "-" + D[s[t + 8]] + D[s[t + 9]] + "-" + D[s[t + 10]] + D[s[t + 11]] + D[s[t + 12]] + D[s[t + 13]] + D[s[t + 14]] + D[s[t + 15]]).toLowerCase();
}
var W, He = new Uint8Array(16);
function Be() {
  if (!W && (W = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !W))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return W(He);
}
var le, Q, ne = 0, ae = 0;
function Pe(s, t, e) {
  var l = t && e || 0, n = t || new Array(16);
  s = s || {};
  var a = s.node, i = s.clockseq;
  if (s._v6 || (a || (a = le), i == null && (i = Q)), a == null || i == null) {
    var o = s.random || (s.rng || Be)();
    a == null && (a = [o[0], o[1], o[2], o[3], o[4], o[5]], !le && !s._v6 && (a[0] |= 1, le = a)), i == null && (i = (o[6] << 8 | o[7]) & 16383, Q === void 0 && !s._v6 && (Q = i));
  }
  var r = s.msecs !== void 0 ? s.msecs : Date.now(), p = s.nsecs !== void 0 ? s.nsecs : ae + 1, d = r - ne + (p - ae) / 1e4;
  if (d < 0 && s.clockseq === void 0 && (i = i + 1 & 16383), (d < 0 || r > ne) && s.nsecs === void 0 && (p = 0), p >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ne = r, ae = p, Q = i, r += 122192928e5;
  var f = ((r & 268435455) * 1e4 + p) % 4294967296;
  n[l++] = f >>> 24 & 255, n[l++] = f >>> 16 & 255, n[l++] = f >>> 8 & 255, n[l++] = f & 255;
  var c = r / 4294967296 * 1e4 & 268435455;
  n[l++] = c >>> 8 & 255, n[l++] = c & 255, n[l++] = c >>> 24 & 15 | 16, n[l++] = c >>> 16 & 255, n[l++] = i >>> 8 | 128, n[l++] = i & 255;
  for (var v = 0; v < 6; ++v)
    n[l + v] = a[v];
  return t || ce(n);
}
function ze(s) {
  var t = typeof s == "string" ? je(s) : s, e = Ne(t);
  return typeof s == "string" ? ce(e) : e;
}
function Ne(s, t = !1) {
  return Uint8Array.of((s[6] & 15) << 4 | s[7] >> 4 & 15, (s[7] & 15) << 4 | (s[4] & 240) >> 4, (s[4] & 15) << 4 | (s[5] & 240) >> 4, (s[5] & 15) << 4 | (s[0] & 240) >> 4, (s[0] & 15) << 4 | (s[1] & 240) >> 4, (s[1] & 15) << 4 | (s[2] & 240) >> 4, 96 | s[2] & 15, s[3], s[8], s[9], s[10], s[11], s[12], s[13], s[14], s[15]);
}
function fe(s, t) {
  var e = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(s);
    t && (l = l.filter(function(n) {
      return Object.getOwnPropertyDescriptor(s, n).enumerable;
    })), e.push.apply(e, l);
  }
  return e;
}
function ve(s) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fe(Object(e), !0).forEach(function(l) {
      Ue(s, l, e[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(e)) : fe(Object(e)).forEach(function(l) {
      Object.defineProperty(s, l, Object.getOwnPropertyDescriptor(e, l));
    });
  }
  return s;
}
function Ue(s, t, e) {
  return (t = Fe(t)) in s ? Object.defineProperty(s, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : s[t] = e, s;
}
function Fe(s) {
  var t = qe(s, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qe(s, t) {
  if (typeof s != "object" || !s) return s;
  var e = s[Symbol.toPrimitive];
  if (e !== void 0) {
    var l = e.call(s, t || "default");
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(s);
}
function A(s = {}, t, e = 0) {
  var l = Pe(ve(ve({}, s), {}, {
    _v6: !0
  }), new Uint8Array(16));
  return l = ze(l), ce(l);
}
const Ze = (s) => {
  const t = /* @__PURE__ */ new Map();
  return { on: (n, a, i) => {
    const o = t.get(n) ?? /* @__PURE__ */ new Map();
    return t.set(n, o), o.set(A(), a), s.addEventListener(n, a, i), () => s.removeEventListener(n, a, i);
  }, clearAll: () => {
    t.forEach((n, a) => {
      n.forEach((i) => s.removeEventListener(a, i));
    });
  } };
}, ue = (s, t, e = {}) => {
  const { ignore: l = [], capture: n = !0, omitChildren: a = !0 } = e, i = (r) => a && r.composedPath().includes(s) ? !0 : l.some((p) => typeof p == "string" ? document.querySelector(p) === r.target : p === r.target), o = (r) => {
    i(r) || t(r);
  };
  return Ze(document).on("click", o, { capture: n });
}, k = () => {
}, Xe = ({ items: s, infinite: t = !0 } = {}) => {
  const e = s ?? h([]), l = h(0), n = h({ height: "0px" }), a = (r, p, d) => {
    e.value.forEach((f, c) => {
      switch (c) {
        case r:
          f.subscriber.distpach("visible");
          break;
        case p:
          f.subscriber.distpach("left");
          break;
        case d:
          f.subscriber.distpach("right");
          break;
        default:
          f.subscriber.distpach("hidden");
          break;
      }
    });
  };
  return {
    itemsList: e,
    currentIndex: l,
    height: n,
    distpachListeners: a,
    next: () => {
      if (!t && l.value === e.value.length - 1) return;
      const r = l.value + 1 >= e.value.length ? 0 : l.value + 1, p = l.value, d = r + 1 >= e.value.length ? 0 : r + 1;
      l.value = r, a(r, p, d);
    },
    prev: () => {
      if (!t && l.value === 0) return;
      const r = l.value - 1 < 0 ? e.value.length - 1 : l.value - 1, p = l.value, d = r - 1 < 0 ? e.value.length - 1 : r - 1;
      l.value = r, a(r, d, p);
    }
  };
}, we = "carrousel.actions";
class Ke {
  constructor() {
    J(this, "_handlers");
    this._handlers = [];
  }
  on(t) {
    this._handlers.push(t);
  }
  distpach(...t) {
    this._handlers.forEach((e) => e(...t));
  }
  clear() {
    this._handlers.length = 0;
  }
}
const Zt = (s) => ({
  identifier: A(),
  ...s
}), Ye = (s) => ({ cells: [], identifier: A(), ...s }), Xt = (s = []) => s.map((t) => ({ ...Ye(), ...t })), ye = Symbol("addCell2Row"), Ge = (s, t) => {
  s(ye, t);
}, Je = (s) => s(ye) ?? k, xe = Symbol("addCell2Header"), We = (s, t) => {
  s(xe, t);
}, Qe = (s) => s(xe) ?? k, De = Symbol("addrRow2Table"), et = (s, t) => {
  s(De, t);
}, tt = (s) => s(De) ?? k, Ee = Symbol("addrRow2Table"), st = (s, t) => {
  s(Ee, t);
}, lt = (s) => s(Ee) ?? k, $e = "add_tab", Se = "rm_tab", Ae = "set_active_tab", re = "line", pe = "col", j = (s = "") => {
  const t = h({}), e = (a) => {
    t.value = { ...t.value, ...me(a) };
  }, l = (a) => {
    t.value = me(a);
  };
  return e(s), { css: t, addCss: e, setCss: l, clearCss: () => {
    Object.keys(t.value).forEach((a) => {
      delete t.value[a];
    });
  } };
}, me = (s) => {
  const t = {};
  if (typeof s == "string")
    s.split(" ").forEach((e) => t[e] = !0);
  else if (Array.isArray(s))
    s.forEach((e) => t[e] = !0);
  else if (typeof s == "object")
    for (const e in s)
      e.split(" ").forEach((l) => {
        t[l] = s[e];
      });
  return t;
}, Kt = (s) => {
  const t = h({}), e = (l) => {
    if (!l) return t;
    typeof l == "string" ? l.split(" ").forEach((n) => t.value[n] = !0) : typeof l == "object" && (t.value = { ...t.value, ...l });
  };
  return s && e(s), {
    computedStyles: t,
    setStyles: e
  };
}, nt = k, at = [
  "drag",
  "dragend",
  "dragenter",
  "dragstart",
  "dragover",
  "dragexit",
  "dragleave",
  "drop"
], oe = (s = {}, t = !1) => {
  const e = {};
  return at.forEach((l) => {
    const n = s[l] ?? nt, a = `on${l.charAt(0).toUpperCase() + l.slice(1)}`;
    e[a] = n;
  }), {
    ...e,
    draggable: t
  };
}, Yt = (s, t) => {
  const { onError: e = k, onLoad: l = k, onSuccess: n = k } = t, a = h(), i = h(!1), o = h(null), r = (...p) => {
    i.value = !0, s(...p).then((d) => {
      n(d), a.value = d;
    }).catch((d) => {
      e(d), o.value = d;
    }).finally(() => {
      l(), i.value = !1;
    });
  };
  return t.autoCall && r(...t.args), {
    data: a,
    loading: i,
    error: o,
    call: r
  };
};
function rt(s, t) {
  return m(), g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5 8.25 12l7.5-7.5"
    })
  ]);
}
function ot(s, t) {
  return m(), g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m8.25 4.5 7.5 7.5-7.5 7.5"
    })
  ]);
}
function it(s, t) {
  return m(), g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
  ]);
}
function ct(s, t) {
  return m(), g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
function ut(s, t) {
  return m(), g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function dt(s, t) {
  return m(), g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ft(s, t) {
  return m(), g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const vt = { class: "toast-item-body" }, pt = /* @__PURE__ */ x({
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
  setup(s, { emit: t }) {
    const e = s, l = t, n = h(e.modelValue), { css: a, ...i } = j(e.css), o = h("100%");
    let r = 0, p = 0;
    const d = () => {
      let u = {};
      return e.type === "success" && (u = K(ut, { class: "size-5 " })), e.type === "warning" && (u = K(dt, { class: "size-5 " })), e.type === "error" && (u = K(ft, { class: "size-5 " })), K(
        "div",
        {
          class: "toast-item-icon"
        },
        [u]
      );
    }, f = () => {
      n.value = !1, l("update:modelValue", !1), l("close"), clearInterval(r), r = -1;
    }, c = (u = Date.now()) => {
      e.liveTime > 0 && (p = u, r = setInterval(() => {
        const U = Date.now() - p, S = Math.min(U, e.liveTime);
        o.value = `${S / e.liveTime * 100}%`, S >= e.liveTime && f();
      }, 1));
    }, v = {
      onmouseenter: () => {
        clearInterval(r);
      },
      onMouseleave: () => {
        const u = e.liveTime * parseInt(o.value.replace("%", "")) / 100;
        c(Date.now() - u);
      }
    };
    return w(
      () => e.modelValue,
      (u, y) => {
        n.value = u, u !== y && (clearInterval(r), c());
      }
    ), w(
      () => e.css,
      (u) => i.addCss(u)
    ), R(() => {
      i.addCss("toast-item"), e.type === "success" && i.addCss("toast-item--success"), e.type === "warning" && i.addCss("toast-item--warning"), e.type === "error" && i.addCss("toast-item--error"), c();
    }), (u, y) => (m(), E(be, { name: "fade" }, {
      default: Y(() => [
        n.value ? (m(), g("div", $({
          key: 0,
          class: ["toast-item", b(a)],
          role: "alert"
        }, v), [
          u.showIcon ? _(u.$slots, "icon", { key: 0 }, () => [
            F(d)
          ]) : Z("", !0),
          C("div", vt, [
            _(u.$slots, "default", {}, () => [
              typeof u.message == "string" ? (m(), g(O, { key: 0 }, [
                P(z(u.message), 1)
              ], 64)) : (m(), E(q(u.message), { key: 1 }))
            ])
          ]),
          C("button", {
            type: "button",
            class: "toast-item-close",
            "data-dismiss-target": "#toast-success",
            "aria-label": "Close",
            onClick: f
          }, [
            F(b(ct), { class: "size-5" })
          ]),
          u.showLifeTime ? (m(), g("div", {
            key: 1,
            style: Ce({ width: o.value }),
            class: "toast-item-progress"
          }, null, 4)) : Z("", !0)
        ], 16)) : Z("", !0)
      ]),
      _: 3
    }));
  }
}), ee = h(/* @__PURE__ */ new Map()), te = h(null), de = () => ({
  registerContainer: (l, n) => {
    ee.value.size === 0 && (te.value = l), ee.value.set(l, n);
  },
  removeStore: (l) => {
    ee.value.delete(l) && l === te.value && (te.value = null);
  },
  getList: (l = te.value) => l ? ee.value.get(l) ?? null : null
}), Gt = (s, t) => {
  const l = de().getList(t);
  if (!l) throw new Error("Not found");
  const n = A(), a = K(pt, s), i = s.onClose ?? k;
  l.value.push([n, a]), s.onClose = () => {
    i(), mt([n, a], t);
  };
}, mt = ([s], t) => {
  const l = de().getList(t);
  if (!l) throw new Error("Not found");
  const n = l.value.filter((a) => a[0] !== s);
  n.length !== l.value.length && (l.value.length = 0, l.value.push(...n));
}, Jt = /* @__PURE__ */ x({
  __name: "AccordionComponent",
  props: {
    unique: { type: Boolean, default: !1 }
  },
  setup(s) {
    const t = s, e = h([]);
    return V("registerCollapse", (l) => {
      e.value.push(l);
    }), V("manageToggleCollapse", (l) => {
      let n = [];
      t.unique && (n = e.value.filter((a) => a.value.isOpen && l.value.uuid !== a.value.uuid)), n.length > 0 && n.forEach((a) => a.value.isOpen = !1);
    }), (l, n) => _(l.$slots, "default");
  }
}), Wt = /* @__PURE__ */ x({
  __name: "CarouselCard",
  emits: ["left", "visible", "hidden", "right", "change"],
  setup(s, { emit: t }) {
    const e = t, { addCard: l, setContainerHeight: n } = M(we), a = new Ke(), i = h(""), o = h(), r = h("hidden"), p = parseInt(Date.now() * 0.01 * Math.random() + "").toString(16);
    a.on((f) => {
      const c = r.value === "visible", v = c ? f === "left" : r.value === "left", u = c ? f === "right" : r.value === "right";
      c ? i.value = v ? "rl" : u ? "lr" : i.value : f === "hidden" ? i.value = "rl" : i.value = v ? "lr" : u ? "rl" : i.value, r.value = f, d(f);
    });
    const d = (f) => {
      switch (e("change", f), f) {
        case "hidden":
          e("hidden");
          break;
        case "left":
          e("left");
          break;
        case "right":
          e("right");
          break;
        case "visible":
          e("visible");
          break;
      }
    };
    return w(r, (f) => {
      f === "visible" && setTimeout(() => {
        n(o.value.clientHeight);
      }, 0);
    }), l({ id: p, subscriber: a }), ie(() => a.clear()), (f, c) => (m(), E(be, { name: i.value }, {
      default: Y(() => [
        _e(C("div", {
          ref_key: "root",
          ref: o,
          class: "bc-carousel-card"
        }, [
          _(f.$slots, "default")
        ], 512), [
          [ke, r.value === "visible"]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), ht = { class: "bc-carousel-container" }, Qt = /* @__PURE__ */ x({
  __name: "CarouselContainer",
  props: {
    infinite: { type: Boolean, default: !0 }
  },
  setup(s) {
    const t = s, { currentIndex: e, distpachListeners: l, height: n, itemsList: a, next: i, prev: o } = Xe({ infinite: t.infinite });
    return V(we, {
      addCard: (r) => {
        a.value.push(r);
      },
      setContainerHeight: (r) => {
        n.value.height = `${r}px`;
      }
    }), R(() => {
      a.value.length === 0 || a.value.length === 1 || l(0, a.value.length - 1, 1);
    }), (r, p) => (m(), g("div", ht, [
      _(r.$slots, "prev", T(H({ prev: b(o) })), () => [
        F(b(rt), {
          onClick: b(o),
          class: "bc-carousel-btn"
        }, null, 8, ["onClick"])
      ]),
      C("div", {
        class: "bc-carousel-content",
        style: Ce(b(n))
      }, [
        _(r.$slots, "default", T(H({ currentIndex: b(e), totalSize: b(a).length, prev: b(o), next: b(i) })))
      ], 4),
      _(r.$slots, "next", T(H({ next: b(i) })), () => [
        F(b(ot), {
          onClick: b(i),
          class: "bc-carousel-btn"
        }, null, 8, ["onClick"])
      ])
    ]));
  }
}), gt = { class: "hs-collapse" }, es = /* @__PURE__ */ x({
  __name: "CollapseComponent",
  props: {
    modelValue: { type: Boolean, default: !1 },
    header: {}
  },
  emits: ["update:model-value", "open", "close"],
  setup(s, { emit: t }) {
    const e = s, l = t, n = h({ isOpen: e.modelValue, uuid: A() }), a = M("registerCollapse") ?? k, i = M("manageToggleCollapse") ?? k;
    w(
      () => e.modelValue,
      (r) => {
        n.value.isOpen = r, l(r ? "open" : "close");
      }
    ), w(n, (r) => n.value = r, { deep: !0 });
    const o = () => {
      n.value.isOpen = !n.value.isOpen, l("update:model-value", n.value.isOpen), n.value.isOpen ? l("open") : l("close"), i(n);
    };
    return R(() => {
      a(n);
    }), (r, p) => (m(), g("div", gt, [
      P(z(n.value) + " ", 1),
      C("div", {
        class: "hs-collapse-header bg-primary-500",
        onClick: o
      }, [
        _(r.$slots, "header", {}, () => [
          P(z(r.header), 1)
        ])
      ]),
      _e(C("div", null, [
        _(r.$slots, "default")
      ], 512), [
        [ke, n.value.isOpen]
      ])
    ]));
  }
}), bt = /* @__PURE__ */ x({
  __name: "CDatatableCellHeader",
  props: {
    identifier: {},
    colSpan: {},
    css: { default: "" },
    binds: { default: () => ({}) },
    events: { default: () => ({ onCellClick: k, onCellAuxclick: k, onCellDblclick: k }) },
    value: {}
  },
  emits: ["cellClick", "cellAuxclick", "cellDblclick"],
  setup(s, { emit: t }) {
    const e = s, l = t, n = {
      onClick: (d) => {
        e.events.onCellClick && e.events.onCellClick(d), l("cellClick", d);
      },
      onAuxclick: (d) => {
        e.events.onCellAuxclick && e.events.onCellAuxclick(d), l("cellAuxclick", d);
      },
      onDblclick: (d) => {
        e.events.onCellDblclick && e.events.onCellDblclick(d), l("cellDblclick", d);
      }
    }, a = N(
      () => e.colSpan && e.colSpan > 0 ? { "grid-column-start": `span ${e.colSpan}` } : {}
    ), { css: i, ...o } = j(e.css), r = e.identifier ?? A(), p = Qe(M);
    return w(
      () => e.css,
      (d) => o.setCss(d)
    ), R(() => {
      p({ ...e, identifier: r });
    }), (d, f) => (m(), g("span", $(n, {
      class: ["w-full", b(i)],
      style: a.value
    }), [
      _(d.$slots, "default", {}, () => {
        var c;
        return [
          typeof d.value == "string" || typeof d.value == "number" ? (m(), g(O, { key: 0 }, [
            P(z(d.value), 1)
          ], 64)) : (m(), E(q((c = d.value) == null ? void 0 : c.node), T($({ key: 1 }, d.binds)), null, 16)),
          F(b(it), { class: "size-4 inline-block ml-1" })
        ];
      })
    ], 16));
  }
}), Ct = /* @__PURE__ */ x({
  __name: "CDatatableHeader",
  props: {
    identifier: {},
    cols: {},
    cells: { default: () => [] },
    css: { default: "" },
    customTemplateColumn: {},
    events: { default: () => ({ onHeaderClick: k, onHeaderAuxclick: k, onHeaderDblclick: k }) }
  },
  emits: ["rowClick", "rowAuxclick", "rowDblclick", "update:cells", "cellClick"],
  setup(s, { emit: t }) {
    const e = s, l = t, n = {
      onClick: (v) => {
        e.events.onHeaderClick && e.events.onHeaderClick(v), l("rowClick", v);
      },
      onAuxclick: (v) => {
        e.events.onHeaderAuxclick && e.events.onHeaderAuxclick(v), l("rowAuxclick", v);
      },
      onDblclick: (v) => {
        e.events.onHeaderDblclick && e.events.onHeaderDblclick(v), l("rowDblclick", v);
      }
    }, a = (v) => v.map((u) => ({ identifier: A(), ...u })), i = (v) => {
      l("cellClick", r.value.indexOf(v), v.identifier);
    }, o = e.identifier ?? A(), r = h(a(e.cells)), { css: p, ...d } = j(e.css), f = N(() => `repeat(${e.cols}, minmax(0, 1fr))`);
    We(V, (v) => {
      r.value.find((u) => u.identifier === v.identifier) === void 0 && (r.value = [...r.value, v], l("update:cells", r.value));
    });
    const c = lt(M);
    return w(
      () => e.css,
      (v) => d.setCss(v)
    ), w(
      () => e.cells,
      () => {
        r.value.length = 0, r.value.push(...a(e.cells));
      },
      { deep: !0 }
    ), R(() => {
      c({ ...e, identifier: o, cells: r.value });
    }), (v, u) => (m(), g("div", $(n, {
      class: ["bc-datatable-head", b(p)],
      style: { "grid-template-columns": v.customTemplateColumn ?? f.value }
    }), [
      _(v.$slots, "default", {}, () => [
        (m(!0), g(O, null, X(r.value, (y, U) => (m(), E(bt, $({
          key: `r-${U}`
        }, y, {
          onCellClick: (S) => i(y)
        }), null, 16, ["onCellClick"]))), 128))
      ])
    ], 16));
  }
}), _t = /* @__PURE__ */ x({
  __name: "CDatatableCell",
  props: {
    identifier: {},
    colSpan: {},
    css: { default: "" },
    binds: { default: () => ({}) },
    events: { default: () => ({ onCellClick: k, onCellAuxclick: k, onCellDblclick: k }) },
    value: {}
  },
  emits: ["cellClick", "cellAuxclick", "cellDblclick"],
  setup(s, { emit: t }) {
    const e = s, l = t, n = {
      onClick: (d) => {
        e.events.onCellClick && e.events.onCellClick(d), l("cellClick", d);
      },
      onAuxclick: (d) => {
        e.events.onCellAuxclick && e.events.onCellAuxclick(d), l("cellAuxclick", d);
      },
      onDblclick: (d) => {
        e.events.onCellDblclick && e.events.onCellDblclick(d), l("cellDblclick", d);
      }
    }, a = N(
      () => e.colSpan && e.colSpan > 0 ? { "grid-column-start": `span ${e.colSpan}` } : {}
    ), { css: i, ...o } = j(e.css), r = e.identifier ?? A(), p = Je(M);
    return w(
      () => e.css,
      (d) => o.setCss(d)
    ), R(() => {
      p({ ...e, identifier: r });
    }), (d, f) => (m(), g("span", $(n, {
      class: ["bc-datatable-cell", b(i)],
      style: a.value
    }), [
      _(d.$slots, "default", {}, () => {
        var c;
        return [
          typeof d.value == "string" || typeof d.value == "number" ? (m(), g(O, { key: 0 }, [
            P(z(d.value), 1)
          ], 64)) : (m(), E(q((c = d.value) == null ? void 0 : c.node), T($({ key: 1 }, d.binds)), null, 16))
        ];
      })
    ], 16));
  }
}), kt = /* @__PURE__ */ x({
  __name: "CDatatableRow",
  props: {
    identifier: {},
    cols: {},
    cells: { default: () => [] },
    css: { default: "" },
    customTemplateColumn: {},
    events: { default: () => ({ onRowClick: k, onRowAuxclick: k, onRowDblclick: k }) }
  },
  emits: ["rowClick", "rowAuxclick", "rowDblclick", "update:cells"],
  setup(s, { emit: t }) {
    const e = s, l = t, n = {
      onClick: (c) => {
        e.events.onRowClick && e.events.onRowClick(c), l("rowClick", c);
      },
      onAuxclick: (c) => {
        e.events.onRowAuxclick && e.events.onRowAuxclick(c), l("rowAuxclick", c);
      },
      onDblclick: (c) => {
        e.events.onRowDblclick && e.events.onRowDblclick(c), l("rowDblclick", c);
      }
    }, a = (c) => c.map((v) => ({ identifier: A(), ...v })), i = e.identifier ?? A(), o = h(a(e.cells)), { css: r, ...p } = j(e.css), d = N(() => `repeat(${e.cols}, minmax(0, 1fr))`);
    Ge(V, (c) => {
      o.value.find((v) => v.identifier === c.identifier) === void 0 && (o.value = [...o.value, c], l("update:cells", o.value));
    });
    const f = tt(M);
    return w(
      () => e.css,
      (c) => p.setCss(c)
    ), w(
      () => e.cells,
      () => {
        o.value.length = 0, o.value.push(...a(e.cells));
      },
      { deep: !0 }
    ), R(() => {
      f({ ...e, identifier: i, cells: o.value });
    }), (c, v) => (m(), g("div", $(n, {
      class: ["bc-datatable-row", b(r)],
      style: { "grid-template-columns": c.customTemplateColumn ?? d.value }
    }), [
      _(c.$slots, "default", {}, () => [
        (m(!0), g(O, null, X(o.value, (u, y) => (m(), E(_t, $({
          key: `r-${y}`
        }, u), null, 16))), 128))
      ])
    ], 16));
  }
}), ts = /* @__PURE__ */ x({
  __name: "CDatatable",
  props: {
    cols: {},
    head: { default: () => ({}) },
    rows: { default: () => [] },
    css: { default: "" },
    customTemplateColumn: {}
  },
  setup(s) {
    const t = s, e = (f) => f.map((c) => ({ identifier: A(), ...c })), l = h(null), n = h(!1), a = (f, c) => {
      if (l.value === f) {
        n.value = !n.value;
        return;
      }
      l.value = f;
    }, i = N(() => l.value === null ? o.value : o.value.slice().sort((f, c) => {
      const v = f.cells[l.value], u = c.cells[l.value], y = typeof v.value == "string" || typeof v.value == "number" ? v.value.toString() : v.value.filterValue ?? "", U = typeof u.value == "string" || typeof u.value == "number" ? u.value.toString() : u.value.filterValue ?? "";
      return n.value ? U.localeCompare(y) : y.localeCompare(U);
    })), o = h(e(t.rows)), r = h(t.head), { css: p, ...d } = j(t.css);
    return et(V, (f) => {
      o.value.find((c) => c.identifier === f.identifier) === void 0 && o.value.push(f);
    }), st(V, (f) => {
      r.value = f;
    }), w(
      () => t.rows,
      () => {
        o.value.length = 0, o.value.push(...e(t.rows));
      },
      { deep: !0 }
    ), w(
      () => t.css,
      (f) => d.setCss(f)
    ), (f, c) => (m(), g("div", {
      class: B(["bc-datatable-container", b(p)])
    }, [
      _(f.$slots, "header", {}, () => [
        F(Ct, $({ onCellClick: a }, { ...f.head }, {
          cols: f.cols,
          "custom-template-column": f.customTemplateColumn
        }), null, 16, ["cols", "custom-template-column"])
      ]),
      _(f.$slots, "body", {}, () => [
        (m(!0), g(O, null, X(i.value, (v, u) => (m(), E(kt, $({ key: u }, v, {
          cells: v.cells,
          "onUpdate:cells": (y) => v.cells = y,
          cols: v.cols ?? f.cols,
          "custom-template-column": f.customTemplateColumn
        }), null, 16, ["cells", "onUpdate:cells", "cols", "custom-template-column"]))), 128))
      ])
    ], 2));
  }
});
class wt {
  constructor(t) {
    J(this, "_storage");
    if (this._storage = /* @__PURE__ */ new Map(), this._isArray(t))
      t.forEach(([e, l]) => this.add(e, l));
    else if (t)
      for (const e in t)
        this.add(e, t[e]);
  }
  get(t) {
    return this._storage.get(t) ?? null;
  }
  extract(t) {
    const e = this._storage.get(t) ?? null;
    return this._storage.delete(t), e;
  }
  getAll() {
    const t = [];
    return this._storage.forEach((e, l) => {
      t.push([l, e]);
    }), t;
  }
  findByIndex(t) {
    let e = null;
    return this._iterate(({ data: l, index: n, stop: a }) => {
      t === n && (e = l, a());
    }), e;
  }
  find(t) {
    let e = null;
    return this._iterate(({ data: l, key: n, stop: a }) => {
      const i = t(l, n);
      if (typeof i != "boolean")
        throw new Error(`[${this.constructor.name}] callback must return a boolean`);
      i && (e = l, a());
    }), e;
  }
  filter(t) {
    const e = [];
    return this._iterate(({ data: l, key: n }) => {
      const a = t(l, n);
      if (typeof a != "boolean")
        throw new Error(`[${this.constructor.name}] callback must return a boolean`);
      a && e.push(l);
    }), e;
  }
  map(t) {
    const e = [];
    return this._iterate(({ data: l, index: n, key: a }) => e.push(t(l, a, n))), e;
  }
  first() {
    return this._storage.values().next().value ?? null;
  }
  last() {
    return this.filter(() => !0).pop() ?? null;
  }
  forEach(t) {
    this._iterate(({ data: e, key: l, index: n, stop: a }) => t(e, l, n, a));
  }
  /**
   * Synchronously iterates over each element in the data set.
   */
  async forEachSync(t) {
    return this._iterateAsync(({ data: e, key: l, index: n, stop: a }) => t(e, l, n, a), !0);
  }
  async forEachAsync(t) {
    return this._iterateAsync(({ data: e, key: l, index: n, stop: a }) => t(e, l, n, a), !1);
  }
  add(t, e) {
    return this._storage.set(t, e), this;
  }
  remove(t) {
    return this._storage.delete(t);
  }
  exists(t) {
    return this.find((e, l) => e === t || l === t) !== null;
  }
  join(t, e = !1) {
    let l = "";
    return this._iterate(({ data: n }) => {
      const a = e ? JSON.stringify(n) : n.toString ? n.toString() : `${n}`;
      l += `${a}${t}`;
    }), l = l.substring(0, l.lastIndexOf(t)), l;
  }
  copy() {
    const t = new this.constructor();
    return this._storage.forEach((e, l) => t.add(l, e)), t;
  }
  toString() {
    return JSON.stringify(this.getAll());
  }
  get size() {
    return this._storage.size;
  }
  clear() {
    this._storage.clear();
  }
  get keysIterator() {
    return this._storage.keys();
  }
  get valuesIterator() {
    return this._storage.values();
  }
  get keys() {
    const t = [];
    return this._iterate(({ key: e }) => t.push(e)), t;
  }
  get values() {
    const t = [];
    return this._iterate(({ data: e }) => t.push(e)), t;
  }
  *[Symbol.iterator]() {
    let t = -1;
    for (const [e, l] of this._storage)
      t++, yield { key: e, value: l, index: t };
  }
  _iterate(t) {
    let e = !1;
    const l = () => e = !0;
    for (const { index: n, key: a, value: i } of this) {
      if (e) break;
      t({ data: i, key: a, index: n, stop: l });
    }
  }
  async _iterateAsync(t, e = !1) {
    const l = [];
    let n = !1;
    const a = () => n = !0;
    for (const { index: i, key: o, value: r } of this) {
      if (n) break;
      e ? await t({ data: r, key: o, index: i, stop: a }) : l.push(t({ data: r, key: o, index: i, stop: a }));
    }
    return new Promise((i, o) => {
      Promise.allSettled(l).then(() => {
        i(void 0);
      }).catch((r) => o(r));
    });
  }
  _isArray(t) {
    return Array.isArray(t);
  }
  _validRecordKey(t) {
    return typeof t == "number" || typeof t == "string";
  }
}
class he extends wt {
  constructor(t) {
    super(t);
  }
}
class yt {
  constructor(t) {
    J(this, "_target");
    J(this, "_storage");
    this._target = t, this._storage = new he();
  }
  changeTarget(t) {
    this._storage.forEach((e, l) => {
      e.forEach((n) => {
        this._target.removeEventListener(l, n), t.addEventListener(l, n);
      });
    }), this._target = t;
  }
  _getOrCreateEventList(t) {
    const e = this._storage.get(t) ?? new he();
    return this._storage.add(t, e), e;
  }
  on(t, e, l) {
    const n = this._getOrCreateEventList(t), a = A();
    return n.add(a, e), this._target.addEventListener(t, e, l), a;
  }
  remove(t, e, l) {
    const n = this._getOrCreateEventList(t);
    let a = !1;
    return typeof e == "string" ? a = n.remove(e) : n.forEach((i, o) => {
      i === e && (a = n.remove(o));
    }), this._target.removeEventListener(t, e, l), a;
  }
  clearAll() {
    this._storage.forEach(
      (t, e) => t.forEach((l) => this._target.removeEventListener(e, l))
    );
  }
}
const ge = (s) => {
  const { top: t, left: e, width: l, height: n } = s.getBoundingClientRect();
  return {
    style: {
      height: n + "px",
      width: l + "px",
      top: t + "px",
      left: e + "px"
    },
    size: {
      height: n,
      width: l,
      top: t,
      left: e
    }
  };
}, xt = /* @__PURE__ */ x({
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
  setup(s) {
    return () => F("div", {
      class: "bg-gray-500 rounded-md ",
      style: {
        height: s.height,
        width: s.width
      }
    }, null);
  }
}), Dt = { class: "w-full" }, Et = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "DraggableSortableItem",
  props: {
    modelValue: {}
  },
  emits: ["dragend", "dragenter", "dragstart", "update:model-value"],
  setup(s, { emit: t }) {
    const e = s, l = t, n = h(ge(document.createElement("div"))), a = N({
      get() {
        return e.modelValue;
      },
      set(o) {
        l("update:model-value", o);
      }
    }), i = oe({
      dragend: (o) => {
        a.value.dragging = !1, a.value = { ...a.value }, l("dragend", a.value, o);
      },
      dragenter: (o) => {
        l("dragenter", a.value, o);
      },
      dragstart: (o) => {
        const r = o.target ?? null;
        r && (n.value = ge(r), a.value.dragging = !0, l("dragstart", {
          sizing: n.value,
          domEvent: o,
          target: r,
          item: a.value
        }), a.value = { ...a.value });
      }
    });
    return (o, r) => (m(), g("div", Dt, [
      C("div", $(b(i), {
        class: ["w-full bg-primary-500 rounded-sm", { hidden: a.value.dragging }],
        draggable: !0
      }), [
        typeof a.value.node == "string" ? (m(), g(O, { key: 0 }, [
          P(z(a.value.node), 1)
        ], 64)) : (m(), E(q(a.value.node), { key: 1 }))
      ], 16),
      a.value.dragging ? (m(), E(b(xt), {
        key: 0,
        height: n.value.style.height,
        width: n.value.style.width
      }, null, 8, ["height", "width"])) : Z("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ x({
  __name: "DraggableSortableContainer",
  props: {
    modelValue: { default: () => [] },
    targetContainer: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: t }) {
    const e = s;
    w(
      () => e.modelValue,
      (S) => {
        n.value.length = 0, n.value.push(...S);
      }
    );
    const l = t, n = h(e.modelValue), a = h(), i = h({
      height: "0px",
      width: "0px",
      top: "0px",
      left: "0px"
    }), o = new yt(document.body);
    let r = 0, p = 0;
    const d = h(null), f = (S) => {
      const I = S.clientX - r, L = S.clientY - p;
      i.value.left = `${I}px`, i.value.top = `${L}px`;
    }, c = h(null), v = (S, I) => {
      if (I.preventDefault(), !c.value || c.value === S) return;
      const L = n.value.indexOf(c.value), G = n.value.indexOf(S);
      n.value.splice(L, 1), n.value.splice(G, 0, c.value), l("update:modelValue", n.value);
    }, u = ({ sizing: S, target: I, domEvent: L, item: G }) => {
      i.value = S.style;
      const Oe = I.cloneNode(!0);
      r = L.clientX - I.offsetLeft, p = L.clientY - I.offsetTop, d.value = K("div", {
        innerHTML: Oe.outerHTML,
        class: "absolute z-50 bottom-0 right-0"
      }), c.value = G, o.on("dragover", f);
    }, y = () => {
      d.value = null, o.remove("dragover", f);
    }, U = (S, I) => {
      ({ ...I });
    };
    return R(() => {
      e.targetContainer && d.value && o.changeTarget(a.value);
    }), (S, I) => (m(), g("div", {
      ref_key: "dragContainer",
      ref: a,
      class: "flex flex-col gap-1 overflow-hidden"
    }, [
      (m(!0), g(O, null, X(n.value, (L) => (m(), E(Et, {
        key: L.id,
        "model-value": L,
        "onUpdate:modelValue": (G) => U(L, G),
        onDragend: y,
        onDragstart: u,
        onDragenter: v
      }, null, 8, ["model-value", "onUpdate:modelValue"]))), 128)),
      d.value ? (m(), E(q(() => d.value), T($({ key: 0 }, { style: i.value })), null, 16)) : Z("", !0)
    ], 512));
  }
}), $t = ["data-hs-drag-active"], St = /* @__PURE__ */ x({
  __name: "DragAndDropItem",
  props: {
    dragBinds: {},
    selected: { type: Boolean, default: !1 },
    css: {}
  },
  setup(s) {
    const t = s, e = N(() => t.selected ? !0 : void 0);
    return (l, n) => (m(), g("span", $(l.dragBinds, {
      class: "drag-item",
      "data-hs-drag-active": e.value
    }), [
      _(l.$slots, "default")
    ], 16, $t));
  }
}), At = { class: "container" }, ls = /* @__PURE__ */ x({
  __name: "DraggableSortableOld",
  props: {
    data: {}
  },
  setup(s) {
    const e = h(s.data), l = h(-1), n = (o, r) => {
      o.dataTransfer && (o.dataTransfer.dropEffect = "move", o.dataTransfer.effectAllowed = "move", l.value = r);
    }, a = () => {
      l.value = -1;
    }, i = (o, r) => {
      if (o.preventDefault(), l.value === r) return;
      const p = e.value.indexOf(l.value), d = e.value.indexOf(r);
      e.value.splice(p, 1), e.value.splice(d, 0, l.value);
    };
    return (o, r) => (m(), g("div", At, [
      C("div", $(b(oe)(), { class: "drag-container" }), [
        (m(!0), g(O, null, X(e.value, (p, d) => (m(), E(St, {
          key: d,
          dragBinds: {
            ...b(oe)(
              {
                dragend: a,
                dragenter: (f) => i(f, p),
                dragstart: (f) => n(f, p)
              },
              !0
            )
          },
          selected: p === l.value
        }, {
          default: Y(() => [
            typeof p == "string" || typeof p == "number" ? (m(), g(O, { key: 0 }, [
              P(z(p), 1)
            ], 64)) : (m(), E(q(p), { key: 1 }))
          ]),
          _: 2
        }, 1032, ["dragBinds", "selected"]))), 128))
      ], 16)
    ]));
  }
}), ns = /* @__PURE__ */ x({
  __name: "DropdownComponent",
  props: {
    modelValue: { type: Boolean, default: !1 },
    header: {},
    closeOutSiceClick: { type: Boolean }
  },
  emits: ["update:model-value"],
  setup(s, { emit: t }) {
    const e = s, l = t, { css: n, ...a } = j({ hidden: !1 }), i = h(e.modelValue), o = h(), r = h();
    w(
      () => e.modelValue,
      (c) => {
        i.value = c, a.addCss({ hidden: !i.value });
      }
    );
    const p = () => {
      i.value = !i.value, a.addCss({ hidden: !i.value }), l("update:model-value", i.value);
    }, d = () => {
      var u;
      const c = r.value.getBoundingClientRect(), v = (u = o.value.parentElement) == null ? void 0 : u.getBoundingClientRect();
      v && (c.right > v.right && a.addCss({ "right-0": !0, "left-0": !1 }), a.addCss({ hidden: !i.value }));
    };
    let f = () => {
    };
    return R(() => {
      d(), e.closeOutSiceClick && (f = ue(o.value, () => {
        i.value = !1, a.addCss({ hidden: i.value }), l("update:model-value", i.value);
      }));
    }), ie(f), (c, v) => (m(), g("div", {
      ref_key: "container",
      ref: o,
      class: "relative bg-slate-300 w-fit"
    }, [
      C("div", {
        class: "cursor-pointer select-none",
        onClick: p
      }, [
        _(c.$slots, "header", {}, () => [
          P(z(c.header), 1)
        ])
      ]),
      C("div", {
        ref_key: "dropdown",
        ref: r,
        class: B(["absolute", b(n)])
      }, [
        _(c.$slots, "default")
      ], 2)
    ], 512));
  }
}), Ot = /* @__PURE__ */ x({
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
    modalStyle: {}
  },
  emits: ["update:visible", "close", "open", "accept", "cancel"],
  setup(s, { emit: t }) {
    const e = s, l = h(), n = h(e.visible), { css: a, ...i } = j(e.modalCss), o = t, r = () => {
      n.value = !1, o("close"), o("update:visible", !1);
    }, p = () => {
      e.beforeAccept() && (r(), o("accept"), e.afterAccept());
    }, d = () => {
      r(), o("cancel");
    }, f = () => {
      n.value = !0, o("open"), o("update:visible", !0);
    };
    let c = () => {
    };
    const v = { close: r, accept: p, cancel: d, open: f, isVisible: n };
    return w(
      () => e.visible,
      (u) => {
        n.value = u, o(u ? "open" : "close");
      },
      { immediate: !0 }
    ), w(
      () => e.target,
      (u, y) => {
        y == null || y.removeEventListener("click", f), u == null || u.addEventListener("click", f);
      }
    ), w(
      () => e.modalCss,
      (u) => i.addCss(u)
    ), R(() => {
      var u;
      (u = e.target) == null || u.addEventListener("click", f), c = ue(l.value, (y) => {
        e.closeOnClickOutside && e.outsideClickHandler(y) && r();
      });
    }), ie(() => {
      c();
    }), (u, y) => n.value ? (m(), g("div", {
      key: 0,
      class: B(b(a)),
      ref_key: "modalDOM",
      ref: l
    }, [
      _(u.$slots, "header", T(H(v))),
      _(u.$slots, "body", T(H(v))),
      _(u.$slots, "footer", T(H(v)))
    ], 2)) : Z("", !0);
  }
}), Tt = { class: "flex justify-center items-center h-full w-full" }, Rt = { class: "flex justify-between items-center mb-4" }, It = /* @__PURE__ */ C("h2", { class: "text-2xl font-bold text-custom-brown" }, "Modal Title", -1), Lt = ["onClick"], Vt = /* @__PURE__ */ C("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ C("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Mt = [
  Vt
], jt = /* @__PURE__ */ C("p", { class: "text-custom-gray mb-4" }, "Modal content goes here...", -1), Ht = { class: "flex justify-end" }, Bt = ["onClick"], Pt = ["onClick"], as = /* @__PURE__ */ x({
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
  setup(s, { emit: t }) {
    const e = s, l = t, n = N({
      get() {
        return e.visible ?? !1;
      },
      set(i) {
        l("update:visible", i);
      }
    }), a = N(() => e.target);
    return (i, o) => (m(), g("div", {
      class: B(["fixed top-0 left-0 w-screen h-screen bg-stone-800/75", { hidden: !n.value }])
    }, [
      C("div", Tt, [
        F(Ot, {
          visible: n.value,
          "onUpdate:visible": o[0] || (o[0] = (r) => n.value = r),
          target: a.value,
          "modal-css": "p-4 w-[48rem] bg-white rounded-md"
        }, {
          header: Y((r) => [
            _(i.$slots, "header", T(H(r)), () => [
              C("div", Rt, [
                It,
                C("button", {
                  onClick: r.close,
                  class: "text-custom-gray hover:text-custom-orange-bright"
                }, Mt, 8, Lt)
              ])
            ])
          ]),
          body: Y((r) => [
            _(i.$slots, "body", T(H(r)), () => [
              jt
            ])
          ]),
          footer: Y((r) => [
            _(i.$slots, "footer", T(H(r)), () => [
              C("div", Ht, [
                C("button", {
                  onClick: r.close,
                  class: "btn-sm"
                }, "Close", 8, Bt),
                C("button", {
                  onClick: r.accept,
                  class: "btn-primary"
                }, "Accept", 8, Pt)
              ])
            ])
          ]),
          _: 3
        }, 8, ["visible", "target"])
      ])
    ], 2));
  }
}), zt = ["onClick"], Nt = { class: "w-full relative" }, rs = /* @__PURE__ */ x({
  __name: "TabMenu",
  props: {
    direction: { default: re },
    allHidden: { type: Boolean, default: !1 }
  },
  setup(s) {
    const t = s, e = h([]), l = h(null), n = h(t.direction), a = h(t.allHidden), i = (c) => {
      c.active = c.active === void 0 ? !1 : c.active;
      const v = h(c);
      return e.value.push(v), v;
    }, o = (c) => {
      e.value = e.value.filter((v) => v.value.id !== c);
    }, r = (c) => {
      const v = e.value.find((u) => u.value.id === c);
      v && (l.value = v.value, !a.value && e.value.forEach((u) => {
        u.value.id === c && u.value.active === !1 && u.value.emit.show(), u.value.id !== c && u.value.active === !0 && u.value.emit.hide(), u.value.active = u.value.id === c;
      }));
    }, p = () => e.value.forEach((c) => {
      c.value.active && (l.value = c.value), c.value.active = !1;
    }), d = () => {
      const c = l.value !== null ? l : e.value[0];
      c.value !== null && e.value.forEach((v) => {
        var u;
        return v.value.active = v.value.id === ((u = c.value) == null ? void 0 : u.id);
      });
    }, f = (c) => {
      r(c.value.id), c.value.emit.clickTab();
    };
    return V($e, i), V(Se, o), V(Ae, r), R(() => {
      if (a.value) {
        p();
        return;
      }
      const c = e.value.filter((v) => v.value.active);
      if (c.length > 1) throw new Error("[TabMenu] - there are more than one tabs set as active, error expected");
      c.length === 0 && e.value.length !== 0 && (e.value[0].value.active = !0);
    }), w(
      () => t.direction,
      (c) => n.value = c
    ), w(
      () => t.allHidden,
      (c) => {
        c ? p() : d(), a.value = c;
      }
    ), (c, v) => (m(), g("div", {
      class: B(["flex", { "flex-wrap": n.value === b(re) }])
    }, [
      C("div", {
        class: B(["flex flex-wrap border-0 border-b border-primary-500 flex-row", {
          "flex-col border-b-0 w-fit": n.value === b(pe),
          "min-w-full": n.value === b(re)
        }])
      }, [
        (m(!0), g(O, null, X(e.value, (u) => (m(), g("div", {
          class: B(["tab-btn flex-grow flex justify-center items-center", {
            "tab-btn--active": u.value.active,
            "h-[50px] border-r-0 border-b": n.value === b(pe)
          }]),
          key: u.value.id,
          onClick: () => f(u)
        }, [
          typeof u.value.header == "string" ? (m(), g(O, { key: 0 }, [
            P(z(u.value.header), 1)
          ], 64)) : (m(), E(q(u.value.header.component), $({ key: 1 }, u.value.header.binds, {
            key: `cH-${u.value.id}`
          }), null, 16))
        ], 10, zt))), 128))
      ], 2),
      C("div", Nt, [
        _(c.$slots, "default")
      ])
    ], 2));
  }
}), os = /* @__PURE__ */ x({
  __name: "TabSlide",
  props: {
    header: {},
    id: {},
    active: { type: Boolean, default: !1 },
    class: { default: "" }
  },
  emits: ["clickTab", "show", "hide"],
  setup(s, { emit: t }) {
    const e = s, l = t, n = e.id ?? parseInt(`${Date.now() * Math.random()}`).toString(16), a = h({}), { css: i, ...o } = j(e.class);
    o.addCss("overflow-y-auto flex flex-col grow min-w-full"), w(
      () => e.class,
      (f) => o.addCss(f)
    );
    const r = M(Ae), p = M($e), d = M(Se);
    return Ie(() => {
      a.value = p({
        header: e.header,
        id: n,
        active: e.active,
        emit: { clickTab: () => l("clickTab"), show: () => l("show"), hide: () => l("hide") }
      }).value;
    }), Le(() => d(n)), w(
      () => e.active,
      (f) => {
        f && r(n);
      }
    ), (f, c) => a.value.active ? (m(), g("div", {
      key: 0,
      class: B(b(i))
    }, [
      _(f.$slots, "default")
    ], 2)) : Z("", !0);
  }
}), is = /* @__PURE__ */ x({
  __name: "ToastContainer",
  props: {
    css: { default: () => [] },
    position: { default: "top-right" },
    target: { default: "document" },
    id: {}
  },
  setup(s) {
    const t = s, { css: e, ...l } = j(t.css), n = t.id ?? A(), a = h([]), i = (r) => /^(top|bottom)-(right|center|left)$/.test(r), o = (r) => {
      if (!i(r)) throw new Error(`Invalid prop type for 'position' as '${r}'`);
      return `toast-container--${r}`;
    };
    return w(
      () => t.position,
      (r, p) => l.addCss({ [o(p)]: !1, [o(r)]: !0 })
    ), R(() => {
      l.addCss({
        [t.target === "document" ? "toast-container--fixed" : "toast-container--absolute"]: !0,
        [o(t.position)]: !0,
        "toast-container": !0
      }), de().registerContainer(n, a);
    }), (r, p) => (m(), g("div", {
      class: B(b(e))
    }, [
      (m(!0), g(O, null, X(a.value, ([d, f]) => (m(), E(q(f), { key: d }))), 128))
    ], 2));
  }
});
class Ut {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  install(t, ...e) {
    const l = /* @__PURE__ */ new Map();
    t.directive("outside-click", {
      beforeMount(n, a) {
        (l.get(n) ?? k)(), l.set(a, ue(n, a.value));
      },
      beforeUnmount(n) {
        (l.get(n) ?? k)();
      }
    });
  }
}
const cs = () => new Ut().install;
export {
  Jt as AccordionComponent,
  Ot as BaseModal,
  we as CARROUSEL_ACTIONS,
  ts as CDatatable,
  _t as CDatatableCell,
  bt as CDatatableCellHeader,
  Ct as CDatatableHeader,
  kt as CDatatableRow,
  Wt as CarouselCard,
  Qt as CarouselContainer,
  Ke as CarouselSubscriber,
  es as CollapseComponent,
  ls as DraggableSortable,
  ss as DraggableSortableContainer,
  Et as DraggableSortableItem,
  xt as DraggableSortableItemShadow,
  ns as DropdownComponent,
  xe as HEADER_PROVIDE,
  ye as ROW_PROVIDE,
  as as StyledModal,
  De as TABLE_PROVIDE,
  Ee as TABLE_PROVIDE_HEADER,
  $e as TAB_ADD,
  pe as TAB_DIRECTION_COL,
  re as TAB_DIRECTION_LINE,
  Se as TAB_REMOVE,
  Ae as TAB_SET_ACTIVE,
  rs as TabMenu,
  os as TabSlide,
  is as ToastContainer,
  pt as ToastItem,
  Zt as buildDatatableCell,
  Ye as buildDatatableRow,
  Xt as buildDatatableRows,
  Qe as cellInjectFromHeader,
  Je as cellInjectFromRow,
  Gt as createToast,
  lt as headerInjectFromTable,
  We as headerProvide,
  ue as onClickOutside,
  Yt as reactiveAsyncCallback,
  tt as rowInjectFromTable,
  Ge as rowProvide,
  et as tableProvide,
  st as tableProvideHeader,
  me as translateCss,
  cs as useBitCraft,
  Kt as useCSSGenerator,
  Xe as useCarousel,
  Ze as useDomNativeEventManager,
  oe as useDragAndDropItem
};
