import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  D as r,
  E as i,
  F as a,
  I as o,
  L as s,
  M as c,
  N as l,
  O as u,
  P as d,
  R as f,
  S as p,
  T as m,
  _ as h,
  a as g,
  b as _,
  c as v,
  d as y,
  f as b,
  h as x,
  i as S,
  j as C,
  l as w,
  m as T,
  o as E,
  p as D,
  s as O,
  u as k,
  v as A,
  w as j,
  x as M,
  y as N,
} from "./react.Dlpel5Rf.mjs";
import {
  A as ee,
  B as P,
  C as te,
  D as ne,
  E as re,
  F as ie,
  G as ae,
  H as oe,
  I as se,
  K as ce,
  M as le,
  N as ue,
  O as de,
  P as fe,
  R as pe,
  S as me,
  T as he,
  U as ge,
  V as F,
  W as _e,
  _ as ve,
  a as ye,
  b as be,
  c as xe,
  d as I,
  f as Se,
  g as Ce,
  h as we,
  i as Te,
  j as Ee,
  k as De,
  l as Oe,
  m as ke,
  n as Ae,
  o as je,
  p as Me,
  q as Ne,
  r as Pe,
  s as Fe,
  u as Ie,
  v as Le,
  w as Re,
  x as ze,
  y as Be,
  z as Ve,
} from "./motion.CCb1GvG_.mjs";
function He(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function Ue(e) {
  return typeof e == `function`;
}
function We(e) {
  return typeof e == `boolean`;
}
function L(e) {
  return typeof e == `string`;
}
function R(e) {
  return Number.isFinite(e);
}
function Ge(e) {
  return Array.isArray(e);
}
function z(e) {
  return typeof e == `object` && !!e && !Ge(e);
}
function Ke(e) {
  for (let t in e) return !1;
  return !0;
}
function qe(e) {
  return e === void 0;
}
function Je(e) {
  return e === null;
}
function Ye(e) {
  return e == null;
}
function Xe(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function Ze(e) {
  return z(e) && Ue(e.return);
}
function Qe(e) {
  return z(e) && Ue(e.then);
}
function $e(e) {
  return e instanceof Promise;
}
function et(e) {
  return `url('${He(e)}')`;
}
function tt(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function nt(e, t, n) {
  if (Fg.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (Fg.set(e, t), t))
    .catch((t) => {
      throw (Fg.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(Dg), Fg.set(e, r));
}
function rt(e, t) {
  Og && (Ig.set(e, t), Lg.has(e) && nt(e, t, `registered loader ${e}`));
}
function it() {
  if (!Og) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(Rg),
      i = r ? e.slice(Rg.length) : e;
    if (!i) continue;
    Lg.add(i);
    let a = Ig.get(i);
    a ? nt(i, a, `registered loader ${i}`) : r && nt(i, () => import(n), n);
  }
}
function at(e) {
  return typeof e == `object` && !!e && !T(e) && Bg in e;
}
function ot(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function st(e, t = `default`, n) {
  n && rt(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Fg.has(n)) return;
      let e = Fg.get(n);
      $e(e) ? s(() => e) : (i = ot(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = ot(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = D(function (t, r) {
      if (
        (N(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && zg !== void 0 && zg.add(n), !i)) throw s(e);
      return E(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function ct(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function lt(e) {
  return e === null || !(Hg in e) ? !1 : typeof e.equals == `function`;
}
function ut(e, t) {
  return e === t || (e !== e && t !== t);
}
function dt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!ut(e[r], t[r])) return !1;
  return !0;
}
function ft(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!vt(e[r], t[r], !0)) return !1;
  return !0;
}
function pt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!ut(r, t.get(n))) return !1;
  return !0;
}
function mt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!vt(r, t.get(n), !0)) return !1;
  return !0;
}
function ht(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function gt(e, t) {
  let n = Vg(e);
  if (n.length !== Vg(t).length) return !1;
  for (let r of n)
    if (!ct(t, r) || (!(r === `_owner` && ct(e, `$$typeof`) && e.$$typeof) && !ut(e[r], t[r])))
      return !1;
  return !0;
}
function _t(e, t) {
  let n = Vg(e);
  if (n.length !== Vg(t).length) return !1;
  for (let r of n)
    if (!ct(t, r) || (!(r === `_owner` && ct(e, `$$typeof`) && e.$$typeof) && !vt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function vt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? ft(e, t) : dt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? mt(e, t) : pt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return ht(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? lt(e) && lt(t)
        ? e.equals(t)
        : n
          ? _t(e, t)
          : gt(e, t)
      : !1;
}
function yt(e, t, n = !0) {
  try {
    return vt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function bt(e) {
  return M.useCallback((t) => e[t], [e]);
}
function xt({ api: e, children: t }) {
  return E(Ug.Provider, { value: e, children: t });
}
function St() {
  return M.useContext(Ug);
}
function Ct({ routes: e, children: t }) {
  let n = bt(e),
    r = C(() => ({ getRoute: n }), [n]);
  return E(Ug.Provider, { value: r, children: t });
}
function wt() {
  let e = St(),
    n = t(Wg),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = n?.routeId ? void 0 : e.currentCanonicalPathVariables,
    o = r ? e.getRoute?.(r) : void 0;
  return C(() => {
    if (!(!r || !o)) return { ...o, id: r, pathVariables: i, canonicalPathVariables: a };
  }, [a, r, i, o]);
}
function Tt() {
  let e = wt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Et(e) {
  let t = wt(),
    n = M.useRef(t);
  yt(n.current, t) || !t || ((n.current = t), e(t));
}
function Dt(e) {
  let t = St();
  if (e) return t.getRoute?.(e);
}
function Ot(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function kt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function At(e, t) {
  let n = wt(),
    r = Dt(t) ?? n;
  return M.useMemo(() => (r ? Ot(r, e) : e), [e, r]);
}
function B(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function V(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function jt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === a_
  );
}
function Mt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Nt(e) {
  return typeof Buffer < `u` && Buffer.isBuffer(e);
}
function Pt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Ft(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Pt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function It(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Lt(e) {
  return o_.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Rt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > r_);
}
function zt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > n_);
}
function Bt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return Rt(+e);
}
function Vt(e) {
  for (var t = e.length - 1; t >= 0 && !Bt(e[t]); t--);
  return t + 1;
}
function Ht(e) {
  let t = Object.keys(e);
  return ((t.length = Vt(t)), t);
}
function Ut(e) {
  return new Uint8Array(e).toBase64();
}
function Wt(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function Gt(e) {
  return Buffer.from(e).toString(`base64`);
}
function Kt(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function qt(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function Jt(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function Yt(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function Xt(e, t, n) {
  return Zt(JSON.parse(e), t, n);
}
function Zt(e, t, n) {
  let r = Yt(g_, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === Yg) return r.fromPrimitive(void 0);
    if (e === Zg) return r.fromPrimitive(NaN);
    if (e === Qg) return r.fromPrimitive(1 / 0);
    if (e === $g) return r.fromPrimitive(-1 / 0);
    if (e === e_) return r.fromPrimitive(-0);
    if (n || typeof e != `number`) throw Error(`Invalid input`);
    if (e in a) return a[e];
    if (e >= i.length) throw Error(`Invalid input`);
    let c = i[e];
    if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
    else if (Array.isArray(c))
      if (typeof c[0] == `string`) {
        let n = c[0],
          l = t && Object.hasOwn(t, n) ? t[n] : void 0;
        if (l) {
          let t = c[1];
          if ((typeof t != `number` && (t = i.push(c[1]) - 1), Object.hasOwn(a, t)))
            return (a[e] = l(a[t]));
          if (((o ??= new Set()), o.has(t))) throw Error(`Invalid circular reference`);
          return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
        }
        switch (n) {
          case `Date`:
            a[e] = r.fromISOString(c[1]);
            break;
          case `Set`:
            let t = r.createSet();
            a[e] = t;
            for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
            break;
          case `Map`:
            let o = r.createMap();
            a[e] = o;
            for (let e = 1; e < c.length; e += 2) r.addEntry(o, s(c[e]), s(c[e + 1]));
            break;
          case `RegExp`:
            a[e] = r.fromRegExpInfo(c[1], c[2]);
            break;
          case `Object`: {
            let t = c[1];
            if (typeof i[t] == `object` && i[t][0] !== `BigInt`) throw Error(`Invalid input`);
            a[e] = r.box(s(t));
            break;
          }
          case `BigInt`:
            a[e] = r.fromPrimitive(BigInt(c[1]));
            break;
          case `null`:
            let l = r.createNullPrototypeObject();
            a[e] = l;
            for (let e = 1; e < c.length; e += 2) {
              let t = c[e];
              if (typeof t != `string`) throw Error(`Cannot parse an object with a non-string key`);
              if (t === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              r.set(l, t, s(c[e + 1]));
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = s(c[1]);
            a[e] = r.fromViewInfo(n, t, c[2], c[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = c[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            a[e] = r.fromArrayBuffer(u_(t));
            break;
          }
          case `URL`:
          case `URLSearchParams`:
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`:
            a[e] = r.fromStringValue(n, c[1]);
            break;
          default:
            throw Error(`Unknown type ${n}`);
        }
      } else if (c[0] === t_) {
        let t = c[1];
        if (!zt(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!Rt(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== Xg && r.set(t, e, s(n));
        }
      }
    else {
      let t = r.createObject();
      a[e] = t;
      for (let e of Object.keys(c)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        r.set(t, e, s(c[e]));
      }
    }
    return a[e];
  }
  return s(0);
}
function Qt(e, t, n) {
  let r = $t(!1, e, t, n);
  return typeof r == `string` ? r : `[${r.join(`,`)}]`;
}
function $t(e, t, n, r) {
  let i = Yt(p_, r?.operations),
    a = [],
    o = new Map(),
    s = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) s.push({ key: e, fn: n[e] });
  let c = [],
    l = 0;
  function u(n, r) {
    let d = i.typeOf(n);
    if (d === `undefined`) return Yg;
    let f;
    if (d === `number`) {
      if (((f = i.toPrimitive(n)), Number.isNaN(f))) return Zg;
      if (f === 1 / 0) return Qg;
      if (f === -1 / 0) return $g;
      if (f === 0 && 1 / f < 0) return e_;
    }
    let p = i.identify(n);
    if (o.has(p)) return o.get(p);
    ((r ??= l++), o.set(p, r));
    for (let { key: e, fn: t } of s) {
      let i = t(n);
      if (i) return ((a[r] = `["${e}",${u(i)}]`), r);
    }
    if (d === `function`) throw new i_(`Cannot stringify a function`, c, n, t);
    if (d === `symbol`) throw new i_(`Cannot stringify a Symbol primitive`, c, n, t);
    let m = ``;
    if (d !== `object`) m = en(d === `number` ? f : i.toPrimitive(n));
    else if (i.isThenable(n)) {
      if (!e)
        throw new i_(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          c,
          n,
          t
        );
      ((m = i.toPromise(n).then((e) => {
        let t = u(e, r);
        t < 0 && (a[r] = t);
      })),
        m.catch(() => {}));
    } else {
      let e = i.tagOf(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          m = `["Object",${u(i.unbox(n))}]`;
          break;
        case `Date`:
          m = `["Date","${i.toISOString(n)}"]`;
          break;
        case `URL`:
          m = `["URL",${Ft(i.toStringValue(n))}]`;
          break;
        case `URLSearchParams`:
          m = `["URLSearchParams",${Ft(i.toStringValue(n))}]`;
          break;
        case `RegExp`:
          let { source: r, flags: a } = i.regExpInfo(n);
          m = a ? `["RegExp",${Ft(r)},"${a}"]` : `["RegExp",${Ft(r)}]`;
          break;
        case `Array`: {
          let e = !1,
            t = i.lengthOf(n);
          m = `[`;
          for (let r = 0; r < t; r += 1)
            if ((r > 0 && (m += `,`), i.hasOwn(n, r)))
              (c.push(`[${r}]`), (m += u(i.get(n, r))), c.pop());
            else if (e) m += Xg;
            else {
              let r = i.indicesOf(n),
                a = r.length,
                o = String(t).length;
              if ((t - a) * 3 > 4 + o + a * (o + 1)) {
                m = `[` + t_ + `,` + t;
                for (let e = 0; e < r.length; e++) {
                  let t = r[e];
                  (c.push(`[${t}]`), (m += `,` + t + `,` + u(i.get(n, t))), c.pop());
                }
                break;
              } else ((e = !0), (m += Xg));
            }
          m += `]`;
          break;
        }
        case `Set`:
          m = `["Set"`;
          for (let e of i.valuesOf(n)) m += `,${u(e)}`;
          m += `]`;
          break;
        case `Map`:
          m = `["Map"`;
          for (let [e, t] of i.entriesOf(n)) {
            let n = i.typeOf(e),
              r = n !== `object` && n !== `function` && n !== `symbol`;
            (c.push(`.get(${r ? en(i.toPrimitive(e)) : `...`})`),
              (m += `,${u(e)},${u(t)}`),
              c.pop());
          }
          m += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.length}`),
            (m += `]`));
          break;
        }
        case `DataView`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.byteLength}`),
            (m += `]`));
          break;
        }
        case `ArrayBuffer`:
          m = `["ArrayBuffer","${l_(i.toArrayBuffer(n))}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          m = `["${e}",${Ft(i.toStringValue(n))}]`;
          break;
        default: {
          let e = i.shapeOf(n);
          if (e.kind === `not-plain`) throw new i_(`Cannot stringify arbitrary non-POJOs`, c, n, t);
          if (e.kind === `symbol-keys`)
            throw new i_(`Cannot stringify POJOs with symbolic keys`, c, n, t);
          if (e.kind === `null-proto`) {
            m = `["null"`;
            for (let r of e.keys) {
              if (r === `__proto__`)
                throw new i_(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (c.push(Lt(r)), (m += `,${Ft(r)},${u(i.get(n, r))}`), c.pop());
            }
            m += `]`;
          } else {
            m = `{`;
            let r = !1;
            for (let a of e.keys) {
              if (a === `__proto__`)
                throw new i_(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (r && (m += `,`),
                (r = !0),
                c.push(Lt(a)),
                (m += `${Ft(a)}:${u(i.get(n, a))}`),
                c.pop());
            }
            m += `}`;
          }
        }
      }
    }
    return ((a[r] = m), r);
  }
  let d = u(t);
  return d < 0 ? `${d}` : a;
}
function en(e) {
  let t = typeof e;
  return t === `string`
    ? Ft(e)
    : e === void 0
      ? Yg.toString()
      : e === 0 && 1 / e < 0
        ? e_.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function tn(e, t, n = `lazy`) {
  switch ((G.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function nn(e) {
  return L(e) && (e === `` || v_.test(e));
}
function rn() {
  return { [y_.QueryCache]: new Map(), [y_.CollectionUtilsCache]: new Map() };
}
function an() {
  if (!Og) return;
  if (b_ !== void 0) return b_;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      b_ = Xt(e.text) ?? rn();
    } catch (e) {
      ((b_ = rn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      jg(() => {
        (e?.remove(), (e = null));
      }),
      b_
    );
  }
}
function on(e, t) {
  let n = an();
  return n ? n[e].has(t) : !1;
}
function sn(e, t) {
  let n = an();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function cn(e) {
  return e?.id ?? Kg;
}
function ln(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function un(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (w_.has(n)) return w_.get(n);
    let r = new E_(n, t);
    return (w_.set(n, r), r);
  };
}
function dn({ children: e, collectionUtils: t }) {
  let n = C(() => ({ get: un(t) }), [t]);
  return E(T_.Provider, { value: n, children: e });
}
function fn() {
  return t(T_);
}
function pn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function mn() {
  return s === void 0 ? void 0 : s;
}
function hn() {
  let e = mn();
  return e ? D_.test(e.platform) : !1;
}
function gn() {
  let e = mn();
  return e
    ? O_.test(e.platform)
      ? !0
      : k_.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function _n() {
  return hn() || gn();
}
function vn() {
  let e = mn();
  return e ? A_.test(e.userAgent) : !1;
}
function yn() {
  let e = mn();
  return e ? j_.test(e.userAgent) && M_.test(e.vendor) && !vn() : !1;
}
function bn() {
  let e = mn();
  return e ? N_.test(e.userAgent) && P_.test(e.vendor) : !1;
}
function xn() {
  let e = mn();
  return e ? F_.test(e.userAgent) : !1;
}
function Sn() {
  return typeof document == `object`;
}
function Cn() {
  let e = mn();
  if (!e) return -1;
  let t = I_.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function wn() {
  let e = mn();
  return e ? L_.test(e.userAgent) : !1;
}
function Tn() {
  return !1;
}
function En() {
  let e = mn();
  return e && R_.test(e.userAgent) ? `tablet` : e && z_.test(e.userAgent) ? `phone` : `desktop`;
}
function Dn() {
  return En() === `desktop`;
}
function On(e) {
  return _n() ? e.metaKey : e.ctrlKey;
}
function kn() {}
async function An() {}
function jn(e) {
  return typeof e == `function` ? e() : e;
}
function Mn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Nn(e, t) {
  let n = e?.priority,
    r = Mn();
  return n === `background`
    ? (t?.() ?? pn(1))
    : r?.yield
      ? r.yield(e).catch(kn)
      : r?.postTask
        ? r.postTask(kn, e).catch(kn)
        : t
          ? t()
          : n === `user-blocking`
            ? U_
            : pn(0);
}
function Pn(e, t, n) {
  let r = -1 / 0,
    i,
    a = new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    Sn() && (document.addEventListener(`visibilitychange`, s), f.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, W_),
        e(() => {
          Nn(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return Sn()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : Nn(a, t);
    return i ? u(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function m(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? B_ : V_),
        s = Sn() && document.hidden ? H_ : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return p(a, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !Sn() && !t ? (n ? void 0 : U_) : n ? m(i, r) : d(i);
  }
  return h;
}
function Fn(e, t = !1) {
  let n = ``;
  if (f !== void 0)
    if (t) n = f.location.search;
    else {
      let e = f.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? f.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? In(n, e) : e;
}
function In(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== q_ && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Ln(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(J_)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !L(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = $e(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = $e(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = $e(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function Rn(e, t) {
  return t ? `/${t}${e}` : e;
}
async function zn({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Ln(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Rn(u.path, t.slug)),
    o && u.path && (u.path = Fn(u.path, !0)),
    u
  );
}
async function Bn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(J_)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (L(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Vn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === Kg) return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await Bn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function Hn({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Vn({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await zn({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return yt(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function Un() {
  return M.useContext(Z_);
}
function Wn() {
  let e = fn(),
    { getRoute: t } = St(),
    { activeLocale: n, locales: r } = Un();
  return u(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return Kn(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o
      );
    },
    [t, e, n, r]
  );
}
function Gn(e, t = !0) {
  let n = Wn();
  N(() => {
    if (!(!t || !$_)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Kn(e, t, n = {}) {
  if (!$_ || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !at(o)) return;
  let s = a && !!t;
  if (!(o.getStatus().hasLoaded && !s)) {
    i && (await K_({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await qn(n, e, t, r));
    } catch {}
  }
}
async function qn(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await Hn({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === Kg),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function Jn(e, t) {
  return e.replace(J_, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Yn() {
  if (ev) return;
  ev = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (f.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((f.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), tn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function Xn({ children: e, value: t }) {
  return E(tv.Provider, { value: t, children: e });
}
function Zn() {
  return M.useContext(tv);
}
function Qn(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function $n(e) {
  let t = nv,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < rv;) ((n = e.next(t)), r.push(n.value), (t += nv));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - nv }
  );
}
function er(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function tr(e) {
  let { innerWidth: t, innerHeight: n } = f,
    [r, i] = er(e.x),
    [a, o] = er(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function nr(e) {
  let [t, n] = er(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function rr(e) {
  let { x: t, y: n } = tr(e);
  return Math.hypot(Math.max(t, f.innerWidth - t), Math.max(n, f.innerHeight - n));
}
function ir(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function ar(e) {
  return e ? ov[e] : void 0;
}
function or(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (sr(t)) {
    let { easing: e, duration: n } = $n(
      ee({ keyframes: [0, 1], ...cr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = ar(n?.mask?.type),
    o = ir(n, `start`, e, a),
    s = ir({ ...sv, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function sr(e) {
  return e.type === `spring`;
}
function cr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function lr({ exit: e = lv, enter: t }) {
  let n = document.createElement(`style`);
  n.id = cv;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += or(`exit`, e)),
    (r += or(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function ur() {
  jg(() => {
    Le.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(cv);
      e && document.head.removeChild(e);
    });
  });
}
function dr() {
  return !!document.startViewTransition;
}
function fr(e) {
  return new Promise((t) => {
    Le.render(() => {
      (performance.mark(`framer-vt-style`), lr(e), t());
    });
  });
}
async function pr(e, t, n) {
  if (!dr()) {
    e();
    return;
  }
  if ((await fr(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(uv),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), ur());
      })
      .catch(uv),
    r
  );
}
function mr() {
  let e = Zn(),
    t = _(void 0);
  return (
    N(() => {
      t.current &&= (t.current(), void 0);
    }),
    u(
      (n, r, i, a) => {
        let o = Qn(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return pr(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function hr(e, t) {
  jg(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function gr(e, t) {
  jg(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function _r(e) {
  jg(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
function vr(e, t, n, r = i) {
  r(() => {
    let t = async (e) => (await K_({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function yr(e) {
  let t = _(new Set());
  return (
    vr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    u(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function br(e) {
  return z(e) && `routeId` in e;
}
function xr(e = f.history.state) {
  return br(e) ? e : void 0;
}
function Sr(e) {
  return e?.entryId;
}
function Cr(e) {
  pv = e;
}
function wr() {
  return pv;
}
function Tr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Er(e, t) {
  return Dr(e, Sr(e) ?? Sr(t));
}
function Dr(e, t = Tr()) {
  return { ...e, entryId: t };
}
function Or(e, t) {
  (performance.mark(`framer-history-replace`), Cr(Er(e, xr())), t && hr(t, f.location.href));
  let n =
    !t || t === f.location.href
      ? f.History.prototype.replaceState.bind(f.history)
      : f.history.replaceState.bind(f.history);
  try {
    n(pv, ``, t);
  } catch {}
}
function kr(e) {
  (performance.mark(`framer-history-replace`),
    Cr(Dr(e)),
    History.prototype.replaceState.call(f.history, pv, ``, void 0));
}
function Ar(e, t) {
  (performance.mark(`framer-history-push`), Cr(Dr(e)), hr(t, f.location.href), Yn());
  try {
    f.history.pushState(pv, ``, t);
  } catch {}
}
function jr({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
  initialContentLocaleId: a,
  initialCanonicalPathVariables: o,
}) {
  i(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = f.location.hash ? f.location.hash.slice(1) : void 0;
    Or({
      ...xr(),
      routeId: t,
      hash: i,
      pathVariables: n,
      localeId: r,
      contentLocaleId: a,
      canonicalPathVariables: o,
    });
  }, []);
}
function Mr(e, t, n) {
  let r = mr(),
    i = yr(`framer-route-change`),
    { onHistoryTraversal: a, usesCustomScrollRestoration: o } = e,
    s = o ? `manual` : `after-transition`,
    c = _(void 0),
    l = u(() => {
      (c.current?.resolve(), (c.current = void 0));
    }, []),
    d = u(
      async ({ state: e }) => {
        if (!br(e)) return;
        let o = i({ popstate: !0 }),
          c = kt();
        (o.promise.finally(c), Sr(wr()) !== (Sr(e) ?? Sr(xr())) && a(), Cr(e));
        let {
            routeId: u,
            hash: d,
            pathVariables: p,
            localeId: m,
            contentLocaleId: h,
            canonicalPathVariables: g,
          } = e,
          _ = L(d) ? d : f.location.hash ? f.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (n(
                u,
                L(m) ? m : void 0,
                _,
                f.location.pathname + f.location.search + f.location.hash,
                z(p) ? p : void 0,
                h,
                g,
                !0,
                o,
                !1
              ),
              !0);
          },
          b = s === `after-transition`;
        (await Promise.resolve(r(t.current, u, y))
          .then((e) => e?.updateCallbackDone)
          .catch(y)
          .finally(() => {
            b || l();
          }),
          await o.promise,
          b && l(),
          await f.navigation?.transition?.finished.catch(Dg),
          fv(),
          hr(f.location.href));
      },
      [t, i, a, l, n, r, s]
    ),
    p = u(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        br(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                c.current = { resolve: e, reject: t };
              }),
                (c.current = void 0));
            },
            scroll: s,
          });
      },
      [s]
    );
  N(
    () => (
      f.addEventListener(`popstate`, d),
      mv && f.navigation.addEventListener(`navigate`, p),
      () => {
        (f.removeEventListener(`popstate`, d),
          mv && f.navigation.removeEventListener(`navigate`, p));
      }
    ),
    [d, p]
  );
}
async function Nr(e, t, n, r) {
  if (!e.path || !t) return !1;
  let i = r + Rn(Jn(e.path, t), n.slug);
  return (await fetch(i, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((f.location.href = f.location.origin + i), !0)
    : !1;
}
function Pr() {
  let e = fn();
  return u((t) => Fr({ ...t, collectionUtils: e }), [e]);
}
async function Fr({ sitePrefix: e, ...t }) {
  let n = await zn(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!L(n.path)) throw Error(`Expected result.path to be a string`);
      if (n.isMissingInLocale && (await Nr(t.route, n.pathVariables, t.nextLocale, e))) return;
    } catch {}
    return n;
  }
}
function Ir(e) {
  let t = _(Promise.resolve()),
    n = _(),
    r = u(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return u(
    (e, i, a) => {
      if (!mv) {
        a?.();
        return;
      }
      ((t.current = e),
        (n.current = i),
        f.navigation.addEventListener(`navigate`, r),
        a?.(),
        e.finally(() => {
          t.current === e &&
            ((n.current = void 0), f.navigation.removeEventListener(`navigate`, r));
        }));
    },
    [r]
  );
}
function Lr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Rr(e) {
  return Lr(e.trim().toLowerCase().replace(hv, `-`));
}
function zr({ children: e, value: t }) {
  return E(_v.Provider, { value: t, children: e });
}
function Br() {
  return t(_v);
}
function Vr(e, t) {
  let n = h(() => ({ inputs: t, result: e() }))[0],
    r = _(!0),
    i = _(n),
    a =
      r.current || (t && i.current.inputs && yt(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    N(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function Hr(e, t) {
  return Vr(() => e, t);
}
function Ur() {
  return f.location.search;
}
function Wr() {
  return ``;
}
function Gr(e) {
  return (
    yv.add(e),
    f.addEventListener(`popstate`, e),
    () => {
      (yv.delete(e), f.removeEventListener(`popstate`, e));
    }
  );
}
function Kr() {
  for (let e of yv) e();
}
function qr({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let i = Br() === `preview`,
    [a, o] = h(``),
    s = _(t);
  vv(() => {
    s.current = t;
  }, [t]);
  let c = r(Gr, Ur, Wr),
    d = A(c),
    p = t !== A(t),
    m = i ? a : p ? c : d,
    g = u(
      async (e) => {
        if (i) {
          l(() => {
            o((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let r = n(),
          a = t;
        if ((await K_({ continueAfter: `paint` }), r || n() || s.current !== a)) return;
        let c = xr();
        if (!c) return;
        let u = new URL(f.location.href),
          d = e(u.searchParams).toString();
        u.search = d;
        let p = c.queryParamBackAnchorSearch,
          m = f.location.search.slice(1),
          h = p === void 0 && d !== m,
          g = p !== void 0 && d === p,
          _ = { ...c, queryParamBackAnchorSearch: g ? void 0 : (p ?? (h ? m : void 0)) },
          v = u.toString();
        (h || g ? Ar(_, v) : Or(_, v), Kr());
      },
      [n, i, t]
    ),
    v = Vr(() => ({ urlSearchParams: new URLSearchParams(m), replaceSearchParams: g }), [m, g]);
  return E(bv.Provider, { value: v, children: e });
}
function Jr(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Yr(e),
    [r, i] = Yr(t),
    a = Xr(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Yr(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Xr(e, t) {
  if (e === t || ((e = `/` + Zr(e)), (t = `/` + Zr(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Cv(e, 1 + s);
    if (n !== Cv(t, 1 + s)) break;
    n === Sv && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Cv(t, 1 + s) === Sv) return Tv(t, 1 + s + 1);
      if (s === 0) return Tv(t, 1 + s);
    } else r > a && (Cv(e, 1 + s) === Sv ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Cv(e, s) === Sv) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Tv(t, 1 + o)}`;
}
function Zr(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Cv(e, o);
    else if (Ov(a)) break;
    else a = Sv;
    if (Ov(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Cv(t, t.length - 1) !== xv || Cv(t, t.length - 2) !== xv) {
            if (t.length > 2) {
              let e = wv(t, Dv);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Tv(t, 0, e)), (n = t.length - 1 - wv(t, Dv))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          Ev && ((t += t.length > 0 ? `${Dv}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${Dv}${Tv(e, r + 1, o)}`) : (t = Tv(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === xv && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Qr(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || f.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function $r(e, t) {
  let n = e.replace(J_, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function ei(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return $r(i, r);
  }
  if (e.includes(`:`)) return $r(e, r);
  let i = t.elements?.[e];
  return i ? $r(i, r) : e;
}
function ti(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: p,
  }
) {
  let m;
  if ((i && e && (m = ei(i, e, o)), l)) return m ?? ``;
  let h = t ?? `/`;
  (n && d && (h = n[d] ?? h), r && (h = h.replace(J_, (e, t) => String(r[t] || e))));
  let g = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace(J_, (e, t) => String(a[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (s)
    if (kv.has(h) && f !== void 0) {
      let e = Qr(u);
      g = Jr(f.location.pathname, e + g);
    } else g = Jr(h, g);
  else g = Rn(g, p);
  let y = _ || v;
  return ((c || y) && (g = Fn(g, y)), m && (g = `${g}#${m}`), g);
}
function ni(e, t) {
  let n = document.currentScript?.parentElement;
  n &&
    n.addEventListener(`submit`, (r) => {
      n.hasAttribute(e) || (r.preventDefault(), n.setAttribute(t, ``));
    });
}
function ri() {
  return `(${ni.toString()})("${Mv}","${Nv}")`;
}
function ii(e, t) {
  N(() => {
    let n = e.current;
    if (!n || (n.setAttribute(Mv, ``), !n.hasAttribute(Nv))) return;
    n.removeAttribute(Nv);
    let r = !1;
    return (
      queueMicrotask(() => {
        r || (n.reportValidity() && t(n));
      }),
      () => {
        r = !0;
      }
    );
  }, []);
}
function ai() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[Av] = 1), e);
}
function oi() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[Av] = 1), e);
}
function si(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function ci(e) {
  return Av in e && e[Av] === 1;
}
function li(e) {
  return jv in e.nativeEvent && e.nativeEvent[jv] === 1;
}
function ui(e) {
  let t = _(!1),
    n = _(null),
    i = r(Mg, Pg, Pv);
  return (
    N(() => {
      if (!i) return;
      let r = n.current;
      if (t.current || !r) return;
      t.current = !0;
      let a = si(r),
        o = r[a];
      if (o === (a === `checked` ? !!e : e)) return;
      if (r.type === `radio` && o === !0) {
        ((r.checked = !1), r.dispatchEvent(oi()));
        return;
      }
      if (a === `checked`) {
        let e = oi();
        ((e[jv] = 1), r.dispatchEvent(e), r.dispatchEvent(oi()));
        return;
      }
      if (r.nodeName === `SELECT`) {
        r.dispatchEvent(ai());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(r), a)?.set;
      if (!s) return;
      s.call(r, ``);
      let c = ai();
      ((c[jv] = 1),
        r.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(r, o), r.dispatchEvent(ai()));
        }));
    }, [i]),
    n
  );
}
function di() {
  if (!Fv) return;
  ((Lv = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Fv.forEach((n) => t.addEventListener(n, Iv, e));
}
function fi() {
  return (
    N(() => {
      if (!Lv || !Fv) return;
      let e = { capture: !0 },
        t = document.body;
      (Fv.forEach((n) => t.removeEventListener(n, Iv, e)),
        (Fv = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function pi(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function mi(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function hi() {
  ((zv = new Rv()), zv.render.markStart());
}
function gi() {
  (c(() => {
    zv?.useInsertionEffects.markRouterStart();
  }, []),
    i(() => {
      zv?.useLayoutEffects.markRouterStart();
    }, []),
    N(() => {
      zv?.useEffects.markRouterStart();
    }, []));
}
function _i() {
  (c(() => {
    (zv?.render.markEnd(), zv?.useInsertionEffects.markStart());
  }, []),
    i(() => {
      if ((zv?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        Bv = !0;
        return;
      }
      Le.read(() => {
        (zv?.browserRendering.requestAnimationFrame.markStart(),
          zv?.unattributedHydrationOverhead.measure());
      });
    }, []),
    N(() => {
      (zv?.useEffects.markStart(),
        zv?.browserRendering.hasStarted ||
          (zv?.mutationEffects.measure(), zv?.useEffects.markAreSynchronous()));
    }, []));
}
function vi() {
  (c(() => {
    zv?.useInsertionEffects.markEnd();
  }, []),
    i(() => {
      (zv?.useLayoutEffects.markEnd(),
        !(Bv || document.visibilityState !== `visible`) &&
          Le.read(() => {
            (zv?.browserRendering.requestAnimationFrame.markEnd(),
              K_().then(() => {
                zv?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    N(() => {
      zv?.useEffects.markEnd();
    }, []));
}
function yi() {
  return (_i(), null);
}
function bi() {
  return (vi(), null);
}
function xi(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return M.isValidElement(e) ? M.cloneElement(e, n) : E(e, { ...n });
}
function Si() {
  return Wv;
}
function Ci(e) {
  if (Gv?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      B(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Ei(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          B(t, `localizedPath must be defined`);
          let i = Ei(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    Gv = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: Gv.pathRoutes,
    paths: Gv.paths,
    pathRoutesLocalized: Gv.pathRoutesLocalized,
    pathsLocalized: Gv.pathsLocalized,
  };
}
function wi(e, t, n = !0, r = Si()) {
  return Ti(e, t, r, n);
}
function Ti(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Ci(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Di(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Di(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Di(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Di(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Ei(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Di(e, t) {
  let n = [],
    r = Oi(t).replace(J_, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Oi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function ki(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function Ai(e) {
  let t = new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = ki(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function ji(e, t) {
  let n = e.toLowerCase(),
    r = Ai(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function Mi(e) {
  if (f === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in f)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function Ni() {
  let e = Mi(`abtests`);
  return new URLSearchParams(e?.description);
}
function Pi(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Fi(e, t) {
  for (let [n, r] of t) Pi(e, n, r);
}
function Ii(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Li(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Ri(e, t) {
  if (f === void 0) return t;
  let n = t;
  if (t) {
    Li(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Fi(e, Ni()), Ii(e), n);
}
function zi(e) {
  (N(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    c(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Bi(e, ...t) {
  Kv.has(e) || (Kv.add(e), console.warn(e, ...t));
}
function Vi(e, t, n) {
  Bi(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Hi(e) {
  return (
    typeof e == `object` &&
    !!e &&
    Yv in e &&
    e[Yv] instanceof Function &&
    Xv in e &&
    e[Xv] instanceof Function
  );
}
function Ui(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Jv(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function Wi(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Gi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Ki(e) {
  return Math.round(e * 2) / 2;
}
function qi(e, t) {
  return { x: e, y: t };
}
function Ji(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function Yi(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Xi(e) {
  let t = Zi(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Zi(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function Qi(e, t, n) {
  return (
    (ey.rgb_r = e / 255),
    (ey.rgb_g = t / 255),
    (ey.rgb_b = n / 255),
    ey.rgbToHsluv(),
    { h: ey.hsluv_h, s: ey.hsluv_s, l: ey.hsluv_l }
  );
}
function $i(e, t, n, r = 1) {
  return (
    (ey.hsluv_h = e),
    (ey.hsluv_s = t),
    (ey.hsluv_l = n),
    ey.hsluvToRgb(),
    { r: ey.rgb_r * 255, g: ey.rgb_g * 255, b: ey.rgb_b * 255, a: r }
  );
}
function ea(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function ta(e, t, n) {
  return {
    r: Yi(e) ? ca(e, 255) * 255 : 0,
    g: Yi(t) ? ca(t, 255) * 255 : 0,
    b: Yi(n) ? ca(n, 255) * 255 : 0,
  };
}
function na(e, t, n, r) {
  let i = [
    da(Math.round(e).toString(16)),
    da(Math.round(t).toString(16)),
    da(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function ra(e, t, n) {
  let r,
    i,
    a = ca(e, 255),
    o = ca(t, 255),
    s = ca(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function ia(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function aa(e, t, n) {
  let r, i, a;
  if (((e = ca(e, 360)), (t = ca(t * 100, 100)), (n = ca(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = ia(s, o, e + 1 / 3)), (i = ia(s, o, e)), (a = ia(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function oa(e, t, n) {
  ((e = ca(e, 255)), (t = ca(t, 255)), (n = ca(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function sa(e, t, n) {
  ((e = ca(e, 360) * 6), (t = ca(t * 100, 100)), (n = ca(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function ca(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    la(e) && (e = `100%`);
    let t = ua(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function la(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function ua(e) {
  return typeof e == `string` && e.includes(`%`);
}
function da(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function fa(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = Qv[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = ty.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = ty.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = ty.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Xi(r[2] ?? ``), l: Xi(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = ty.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Xi(r[2] ?? ``),
              l: Xi(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = ty.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Xi(r[2] ?? ``), v: Xi(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = ty.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Xi(r[2] ?? ``),
                  v: Xi(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = ty.hex8.exec(t))
                ? {
                    r: pa(r[1] ?? ``),
                    g: pa(r[2] ?? ``),
                    b: pa(r[3] ?? ``),
                    a: ma(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = ty.hex6.exec(t))
                  ? {
                      r: pa(r[1] ?? ``),
                      g: pa(r[2] ?? ``),
                      b: pa(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = ty.hex4.exec(t))
                    ? {
                        r: pa(`${r[1]}${r[1]}`),
                        g: pa(`${r[2]}${r[2]}`),
                        b: pa(`${r[3]}${r[3]}`),
                        a: ma(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = ty.hex3.exec(t))
                      ? {
                          r: pa(`${r[1]}${r[1]}`),
                          g: pa(`${r[2]}${r[2]}`),
                          b: pa(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function pa(e) {
  return parseInt(e, 16);
}
function ma(e) {
  return pa(e) / 255;
}
function ha(e) {
  let t = ny.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function ga(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function _a({ r: e, g: t, b: n, a: r }) {
  return { r: ga(e), g: ga(t), b: ga(n), a: r };
}
function va(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function ya({ r: e, g: t, b: n, a: r }) {
  return { r: va(e), g: va(t), b: va(n), a: r };
}
function ba({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function xa(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Sa({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = xa(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Ca(e) {
  return oy(ay(e));
}
function wa(e) {
  return iy(ry(e));
}
function Ta(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Oa({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Ea(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Oa(e)
              : ka(e)),
    i
  );
}
function Ea(e) {
  let t = fa(e);
  if (t) return t.format === `hsl` ? ka(t) : t.format === `hsv` ? Da(t) : Oa(t);
}
function Da(e) {
  let t = sa(e.h, e.s, e.v);
  return { ...ra(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Aa(e.a) };
}
function Oa(e) {
  let t = ta(e.r, e.g, e.b);
  return { ...ra(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Aa(e.a) };
}
function ka(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Yi(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Yi(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Zi(e.s)),
    (r = Yi(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Zi(e.l)),
    (i = aa(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Aa(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function ja() {
  return G.location.origin === `https://screenshot.framer.invalid`;
}
function Ma({ children: e }) {
  if (t(by).top) return E(v, { children: e });
  let n = _({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = _({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = _(new Set()).current,
    a = _({
      getLayoutId: u(({ id: e, name: t, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = t ? `byName` : `byId`,
          s = n.current[o][e];
        if (s) return s;
        let c = t || e;
        if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
          return (
            n.current.count[o][c] === void 0 &&
              ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            B(!!c, `duplicatedId must be defined`);
            let u = n.current[o][c],
              d = n.current.byLastId[c];
            if (d && !l) {
              let e = n.current.byLayoutId[d],
                r = !e || e === t;
              d && !i.has(d) && (!t || r) && (l = [d, c]);
            }
            let f = u ? n.current.byLayoutId[u] : void 0,
              p = !f || f === t;
            if (u && !i.has(u) && (!t || p))
              return ((r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u);
          }
        let u = n.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
        if (l) {
          let [t, n] = l;
          return ((r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t);
        }
        let d = n.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
        let f = a?.[0],
          p = t || f || e,
          { layoutId: m, value: h } = Na(p, (n.current.count[o][p] ?? -1) + 1, i);
        if (((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)) {
          let e = a[a.length - 1];
          if ((e && (r.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
            }
        }
        return ((r.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: u(() => {
        ((n.current = {
          byId: { ...n.current.byId, ...r.current.byId },
          byLastId: { ...n.current.byLastId, ...r.current.byLastId },
          byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
          byName: { ...n.current.byName, ...r.current.byName },
          byLastName: { ...n.current.byLastName, ...r.current.byLastName },
          byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
          count: { ...n.current.count, byName: {} },
        }),
          (r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return E(by.Provider, { value: a, children: e });
}
function Na(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Pa({ enabled: e = !0, ...n }) {
  let r = t(by),
    i = C(() => ({ ...r, enabled: e }), [e]);
  return E(by.Provider, { ...n, value: i });
}
function Fa(e) {
  let t = _(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Ia(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${La(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return w(`div`, {
    style: Sy,
    children: [
      E(`div`, { className: `text`, style: wy, children: r }),
      i && E(`div`, { className: `text`, style: Ty, children: i }),
    ],
  });
}
function La(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Ra() {
  let e = q.current();
  return e === q.canvas || e === q.export;
}
function za() {
  let [e] = h(() => Ra());
  return e;
}
function Ba(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Va(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of Ly) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Ha(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Ua(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < Ry) continue;
    let n = Ha(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Ha(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Wa(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Iy) {
    let n = Ha(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Ga(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Wa(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Ua(n, t, Va(t.pixelWidth, t.pixelHeight)) };
}
function Ka() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: et(Ny.imagePlaceholderSvg),
  };
}
function qa(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Ja(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Ya(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...Fy,
    objectPosition: Ja(e.positionX, e.positionY),
    objectFit: qa(e.fit),
  };
}
function Xa(e) {
  let t = M.useRef(e ? `auto` : `async`),
    n = u((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = u(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = u(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function Za({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = Ny.useImageSource(e, t, n),
    s = Ya(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = Xa(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Ga(e.nodeFixedSize, e, o);
  return E(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function Qa({ image: e, containerSize: t, nodeId: n }) {
  let r = M.useRef(null),
    i = Ny.useImageElement(e, t, n),
    a = Ya(e);
  return (
    M.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    E(`div`, { ref: r, style: { display: `contents`, ...Fy } })
  );
}
function $a({ nodeId: e, image: t, containerSize: n }) {
  let r = M.useRef(null),
    i = Ny.useImageSource(t, n, e);
  return (
    M.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Ya(t);
      Ny.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    E(`div`, { ref: r, style: { display: `contents`, ...Fy } })
  );
}
function eo({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (L(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = R(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Ki(e * (t.pixelWidth / 2)),
        s = Ny.useImageSource(t, n);
      ((r = {
        ...zy,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Ja(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        q.current() === q.canvas
          ? Ny.canRenderOptimizedCanvasImage(Ny.useImageSource(t))
            ? E($a, { image: t, ...n })
            : E(Qa, { image: t, ...n })
          : E(Za, { image: t, avoidAsyncDecoding: q.current() === q.export, ...n });
  let o = a ? zy : (r ?? { ...zy, ...Ka() });
  return i
    ? E(he.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : E(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function to(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function no(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...Fy,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), E(he.div, { style: n }))
    : (to(e, n, !1), E(he.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function ro(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function io(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Vy.isImageObject(t)) return;
  let r = null;
  if (((r = L(n) ? { alt: ``, src: n } : Jv.get(t, null)), Vy.isImageObject(r))) return ro(r, e);
}
function ao(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function oo(e) {
  return typeof e != `string` && typeof e != `number`;
}
function so(e) {
  return e != null && typeof e != `boolean` && !ao(e);
}
function H(e) {
  return Number.isFinite(e);
}
function co(e) {
  return (Math.PI / 180) * e;
}
function lo(e) {
  return qe(e) ? !1 : e === 2 || e === 5;
}
function uo(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function fo(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return po(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function po(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      V(e, `unknown constraint key`);
  }
}
function mo(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(fo(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(fo(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function ho(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(fo(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(fo(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function go(e, t, n, r, i) {
  let a = ho(H(e) ? e : Ky, n, r, i),
    o = mo(H(t) ? t : qy, n, r, i);
  return (
    H(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (H(n.left) && H(n.right)
        ? (o = a / n.aspectRatio)
        : (H(n.top) && H(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function _o(e, t) {
  return !H(e) || !H(t) ? null : e + t;
}
function vo(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function yo(e) {
  return !e._constraints || vo(e) ? !1 : e._constraints.enabled;
}
function bo(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    H(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    H(n) && H(r) ? { width: n, height: r } : null
  );
}
function xo(e) {
  let t = bo(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return H(n) && H(r) ? { x: n, y: r, ...t } : null;
}
function So(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!yo(e) || r) return xo(e);
  let i = Co(e),
    a = wo(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Gy.toRect(i, o, null, n, null);
}
function Co(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Wy.quickfix({
      left: H(t),
      right: H(n),
      top: H(r),
      bottom: H(i),
      widthType: uo(c),
      heightType: uo(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function wo(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function To() {
  return M.useContext(Jy).parentSize;
}
function Eo(e) {
  return typeof e == `object`;
}
function Do(e) {
  return Eo(e) ? e.width : e;
}
function Oo(e) {
  return Eo(e) ? e.height : e;
}
function ko(e, t) {
  return E(Yy, { parentSize: t, children: e });
}
function Ao(e) {
  return So(e, To(), !0);
}
function jo({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Mo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function No(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? he[e] : he.div;
}
function Po(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function Fo(e, t, n = Zy) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Qy) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Qy = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Qy;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Io() {
  return $y !== void 0;
}
function Lo(e, t) {
  $y?.(e, t);
}
function Ro() {
  return ja() ? q.preview : q.current();
}
function zo(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? X.variable(e) : e === `` ? `""` : e;
}
function Bo(e) {
  return e !== xb && e !== Sb;
}
function Vo(e) {
  for (let t in e) if (Bo(t) && e?.[t] === !0) return !0;
  return !1;
}
function Ho(e, t, n, r, i) {
  let a = M.useRef(null),
    o = M.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = M.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !Vo(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = M.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (Vo(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t]
    );
  return M.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function Uo(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return Wo(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return Go(r);
    case `lower-roman`:
    case `upper-roman`:
      return qo(r);
    default:
      return Wo(r);
  }
}
function Wo(e) {
  return String(e).length;
}
function Go(e) {
  let t = 1;
  for (; Ko(t) < e;) t++;
  return t;
}
function Ko(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function qo(e) {
  let t = 0;
  for (let n of Ab) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Jo(e, t) {
  return X.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Yo(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function Xo() {
  return q.current() === q.preview ? Wb.value : Ub.value;
}
function Zo(e) {
  return rb(e, Xo, `framer-lib-combinedCSSRules`);
}
function Qo(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function $o(e, t) {
  let n = {};
  return (
    q.current() === q.canvas &&
      Qo(n, Gb ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function es(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function ts(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = M.Children.map(t, (e) =>
        M.isValidElement(e) ? M.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function ns(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function rs(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = t(by);
  return C(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function is() {
  let [e, t] = M.useState(0);
  return M.useCallback(() => t((e) => e + 1), []);
}
function as(e) {
  let t = is();
  N(() => {
    let n = e?.current;
    if (n)
      return (
        Jb?.observeElementWithCallback(e.current, t),
        () => {
          Jb?.unobserve(n);
        }
      );
  }, [e, t]);
}
function os(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(Yb)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(ss)
    .map(cs);
}
function ss(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function cs(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(ss);
  return t ? cs(t) : e;
}
function ls(e, n, r = () => [], i = {}) {
  let { id: a, visible: o, _needsMeasure: s } = e,
    { skipHook: c = !1 } = i,
    l = t(Kb),
    u = q.current() === q.canvas;
  vv(() => {
    !u ||
      l ||
      c ||
      (n.current && a && o && s && Ny.queueMeasureRequest(es(a), n.current, r(n.current)));
  });
}
function us(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && Ny.queueMeasureRequest(es(t.id), t, os(t));
}
function ds(e) {
  e.willChange = `transform`;
  let t = q.current() === q.canvas;
  Qb && t && (e.translateZ = Xb);
}
function fs(e) {
  ((e.willChange = `transform`), ps(e, !0));
}
function ps(e, t) {
  let n = q.current() === q.canvas;
  if (!Qb || !n) return;
  let r = (L(e.transform) && e.transform) || ``;
  t ? r.includes(Zb) || (e.transform = r + Zb) : (e.transform = r.replace(Zb, ``));
}
function ms(e, t, n, r = !0) {
  if (!e) return;
  let i = Ey(e.style),
    a = n || i[t],
    o = () => {
      hs(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function hs(e) {
  return L(e) || R(e) || Je(e);
}
function gs(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function _s(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  gs(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function vs(e, t) {
  let n = [e, t];
  return nx.test(e) ? e : _s(1e3, rx, n, () => tx.multiplyAlpha(e, t));
}
function ys(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: vs(e.value, t) }))
  );
}
function bs(e, t) {
  let n = 0;
  return (
    ys(e, t).forEach((e) => {
      n ^= ex(e.value) ^ e.position;
    }),
    n
  );
}
function xs(e) {
  return e && ix.every((t) => t in e);
}
function Ss(e) {
  return e && ax.every((t) => t in e);
}
function Cs({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || ly(t)
      ? (n.backgroundColor = t)
      : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e))
    : e &&
      ((e = Jv.get(e, null)),
      typeof e == `string` || ly(e)
        ? (n.background = e)
        : sx.isLinearGradient(e)
          ? (n.background = sx.toCSS(e))
          : lx.isRadialGradient(e)
            ? (n.background = lx.toCSS(e))
            : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e)));
}
function U(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function ws(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Ts(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Es(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    te(n)
      ? (t.cornerShape = ue(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    U(e, `size`, t),
    U(e, `width`, t),
    U(e, `height`, t),
    U(e, `minWidth`, t),
    U(e, `minHeight`, t),
    U(e, `top`, t),
    U(e, `right`, t),
    U(e, `bottom`, t),
    U(e, `left`, t),
    U(e, `position`, t),
    U(e, `overflow`, t),
    U(e, `opacity`, t),
    e._border?.borderWidth || U(e, `border`, t),
    U(e, `borderRadius`, t),
    U(e, `radius`, t, `borderRadius`),
    U(e, `color`, t),
    U(e, `shadow`, t, `boxShadow`),
    U(e, `x`, t),
    U(e, `y`, t),
    U(e, `z`, t),
    U(e, `rotate`, t),
    U(e, `rotateX`, t),
    U(e, `rotateY`, t),
    U(e, `rotateZ`, t),
    U(e, `scale`, t),
    U(e, `scaleX`, t),
    U(e, `scaleY`, t),
    U(e, `skew`, t),
    U(e, `skewX`, t),
    U(e, `skewY`, t),
    U(e, `originX`, t),
    U(e, `originY`, t),
    U(e, `originZ`, t),
    Cs(e, t),
    t
  );
}
function Ds(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Ey(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Os(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (dx.has(t)) return `pointer`;
}
function ks(e) {
  return As(e) ? !0 : e.style ? !!As(e.style) : !1;
}
function As(e) {
  return fx in e && (e[fx] === `scroll` || e[fx] === `auto`);
}
function js(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = de(e.minWidth),
    h = de(e.minHeight),
    g = de(e.maxWidth),
    _ = de(e.maxHeight);
  return {
    top: de(n),
    left: de(t),
    bottom: de(r),
    right: de(i),
    width: de(a),
    height: de(o),
    size: de(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Ms(e) {
  let n = t(Kb),
    { style: r, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = js(e),
    c = Ao(s),
    l = {
      display: `block`,
      flex: r?.flex ?? `0 0 auto`,
      userSelect: q.current() === q.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !Ds(e) && !e.__fromCanvasComponent && !ks(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (l.pointerEvents = `none`);
  let f = M.Children.count(e.children) > 0 &&
      M.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = Es(e);
  (o === void 0 && !a && (ws(p) || (l.width = px.width), Ts(p) || (l.height = px.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let m = {};
  (yo(s) &&
    c &&
    !jo(e) &&
    (m = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, i, p, m, r),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    $b.applyWillChange(e, l, !0));
  let h = l;
  l.transform || (h = { x: 0, y: 0, ...l });
  let g = Ra();
  return (
    e.positionSticky
      ? (!g || Ny.isOnPageCanvas || n) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = Ny.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, c]
  );
}
function Ns(e) {
  let t = {};
  for (let n in e)
    (Re(n) || Oy(n)) && !mx.has(n)
      ? (t[n] = Ey(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Ey(e)[n] != `boolean` && !e.transition && (t.transition = Ey(e)[n]));
  return t;
}
function Ps(e) {
  return `data-framer-name` in e;
}
function Fs(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Is(e) {
  return E(he.div, { layoutId: _x, style: bx, children: e.children });
}
function Ls(e, t) {
  Ue(e) ? e(t) : Rs(e) && (e.current = t);
}
function Rs(e) {
  return z(e) && `current` in e;
}
function zs() {
  let e = Fa(() => new Set()),
    t = Fa(() => new Map());
  return Fa(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Bs(e) {
  let t = _(null),
    n = zs();
  return Fa(() => (Rs(e) ? n(e) : Ue(e) ? n(t, e) : n(t)));
}
function Vs(e, t, n) {
  let r = _(),
    i = _();
  (Vr(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Hs(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new xx({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Us(e, n, r) {
  let i = Fa(() => `${r.rootMargin}`),
    a = t(Sx),
    { enabled: o, root: s, rootMargin: c, threshold: l } = r;
  Vs(
    e,
    (e) => {
      if (o && e !== null) return Hs(a, i, e, s, n, c, l);
    },
    [o, n, s, c, l]
  );
}
function Ws(e, t, n) {
  let r = M.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  Cx(
    e,
    M.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Ks(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: wx, rootMargin: s, enabled: i ?? !0 }
  );
}
function Gs(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, G.innerHeight);
}
function Ks({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Gs(t, e) >= r;
}
function qs() {
  return t(Ox);
}
function Js() {
  return new Map();
}
function Ys() {
  return Fa(Js);
}
function Xs(e, n = []) {
  let { register: r, deregister: i } = t(kx);
  N(() => {
    if (e) return (r(e), () => i(e));
  }, [r, i, ...n]);
}
function Zs(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Qs(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (H(t.originX) && (r.originX = t.originX),
      H(t.originY) && (r.originY = t.originY),
      H(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (H(n.originX) && (r.originX = n.originX),
      H(n.originY) && (r.originY = n.originY),
      H(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function $s(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function ec(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return Fx.PushLeft;
    case `left`:
      return Fx.PushRight;
    case `bottom`:
      return Fx.PushUp;
    case `top`:
      return Fx.PushDown;
  }
}
function tc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Fx.OverlayLeft;
    case `left`:
      return Fx.OverlayRight;
    case `bottom`:
      return Fx.OverlayUp;
    case `top`:
      return Fx.OverlayDown;
  }
}
function nc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Fx.FlipLeft;
    case `left`:
      return Fx.FlipRight;
    case `bottom`:
      return Fx.FlipUp;
    case `top`:
      return Fx.FlipDown;
  }
}
function rc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return ac(e, t.transition, t.component);
    case `removeOverlay`:
      return oc(e);
    case `add`:
      return sc(e, t.key, t.transition, t.component);
    case `remove`:
      return uc(e);
    case `update`:
      return ic(e, t.key, t.component);
    case `back`:
      return cc(e);
    case `forward`:
      return lc(e);
    default:
      return;
  }
}
function ic(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function ac(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function oc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function sc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? hc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = pc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = dc(e, t, c),
    p = mc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function cc(e) {
  let t = { ...e.containers },
    n = uc(e);
  if (n) return ((n.containers = t), n);
}
function lc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = sc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function uc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (B(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = fc(e, r, n),
    u = mc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function dc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function fc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function pc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function mc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = gc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function hc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).some((t) => t.key === e)
        ? !0
        : !r.slice(0, t - 1).some((t) => t.key === e);
}
function gc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return _c(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return _c(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return _c(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return _c(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function _c(e, t, n) {
  let r = {},
    i = {};
  return (
    Lx.forEach((e) => {
      ((r[e] = Mx[e]), (i[e] = { ...n, from: Mx[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Ey(Mx)[a]}%` : Ey(Mx)[a];
        ((Ey(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function vc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function yc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function bc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : Vx;
}
function xc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function Sc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Cc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  } else if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  } else {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function wc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Tc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Ec(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
}
function Dc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return Vx;
}
function Oc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function kc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Ac(e) {
  return M.Children.map(e.component, (t) => {
    if (!so(t) || !oo(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? z(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      M.cloneElement(t, n)
    );
  });
}
function jc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Mc(e, t) {
  let n = ge(),
    r = pe();
  return E(Bx, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function Nc(e) {
  return z(e) || Ue(e);
}
function Pc(e) {
  return !!e && Wx in e && e[Wx] === !0;
}
function Fc(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
      case `dimension`:
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return We(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return qe(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return Ge(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return Ge(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = z(e.defaultValue) ? e.defaultValue : {};
        return (z(e.controls) && Ic(t, e.controls), t);
      }
      case `array`:
        return Ge(e.defaultValue) ? e.defaultValue : void 0;
      case `motionvalue`:
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Ic(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!qe(i) || Pc(r)) continue;
    let a = Fc(r);
    qe(a) || (e[n] = a);
  }
}
function Lc(e) {
  if (z(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Rc(e, t) {
  Nc(e) && Ic(Lc(e), t);
}
function zc(e, t) {
  Object.assign(e, { [Gx]: t });
}
function Bc(e, t, n) {
  (Object.assign(e, { propertyControls: t }), Rc(e, t), n !== void 0 && zc(e, n));
}
function Vc(e) {
  return e.propertyControls;
}
function Hc(e) {
  return Zx in e;
}
function Uc(e, t) {
  if (!Hc(e)) return;
  let n = Jv.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Wc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Gc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Kc(e, t) {
  let n = [];
  (H(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    H(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    H(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    H(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    H(e.invert) && n.push(`invert(${e.invert / 100})`),
    H(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    H(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    H(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Wc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function qc(e, t) {
  H(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Jc(e, t) {
  (qc(e, t), Kc(e, t));
}
function Yc(e, t) {
  let n,
    r = (...r) => {
      (G.clearTimeout(n), (n = G.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      G.clearTimeout(n);
    }),
    r
  );
}
function Xc(...e) {
  return e.filter(Boolean).join(` `);
}
function Zc(e) {
  if (e.startsWith(nS)) return e.substr(rS);
}
function Qc(e, t, n) {
  let r = m.map(e, (e) => (T(e) ? a(e, t) : e));
  return n ? r : E(v, { children: r });
}
function $c(e) {
  let t = Fa(() => el(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function el(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = tl(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = tl(t)));
    },
    r = !1;
  function i(i, o) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      m.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      m.map(i, (e) => {
        if (T(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Ue(o) ? o(e.props) : o;
          return a(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return E(v, { children: i(e, t) });
  };
  return (
    (o.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: o,
    }
  );
}
function tl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Ls(n, e), Ls(t, e));
  };
}
function nl(e, t, n, r, i, a, o, s) {
  let c = M.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !M.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !ol(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = al([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = al([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = E(
        aS.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = il(e, a, r);
    (f.length
      ? (B(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = E(
          `div`,
          { className: `${oS} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : B(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    B(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, E(`div`, { className: sS }, `property-overrides-separator`)]
  );
}
function rl(e) {
  return e.split(`-`)[2];
}
function il(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${rl(a)}`);
  }
  return r;
}
function al(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function ol(e, t) {
  for (let n of Object.keys(t)) if (!yt(e[n], t[n], !0)) return !0;
  return !1;
}
function sl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function cl(e) {
  return M.forwardRef(({ optimized: t, ...n }, r) => {
    let i = M.useContext(iS),
      a = M.useContext(aS)?.variants,
      o = n[hS];
    o && !Sn() && pS.setAll(o, a, t ? n : null, i);
    let s = _S(n);
    return E(e, { ref: r, ...n, ...s });
  });
}
function ll(e) {
  return L(e) || Array.isArray(e);
}
function ul(e) {
  return e in bS;
}
function dl(e, t) {
  let n = Fa(() => ({ values: yS(t ? e : void 0) }));
  return (
    M.useEffect(() => {
      if (!t)
        for (let e of vS) {
          let t = bS[e];
          qe(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function fl(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  o
) {
  let s = oe(),
    c = Fa(yS),
    d = _(!1),
    f = wS(),
    p = _(null),
    m = u(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? bS : i,
        o = t ? i : bS;
      return (
        (d.current = !d.current),
        (p.current = Promise.all(
          vS.map((t) => {
            if (!(s && t !== `opacity`))
              return (
                c[t].jump(o[t] ?? bS[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && we(c[t], i, r);
                })
              );
          })
        )),
        p.current
      );
    }, [i, r, n, s]),
    [g, v] = h(!1),
    y = _(!1),
    b = u(async () => {
      !e || !y.current || (await m(), await f(t ?? 0), b());
    }, [m, f, e, t]),
    x = u(() => {
      y.current || ((y.current = !0), l(() => v(!0)), b());
    }, [b]),
    S = u((e = !0) => {
      (vS.forEach((e) => {
        c[e].stop();
      }),
        vS.forEach((e) => {
          c[e].set(bS[e]);
        }),
        (d.current = !1),
        e && ((y.current = !1), l(() => v(!1))));
    }, []),
    w = e && i,
    T = u(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (N(() => {
    if (w)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [w, T]),
    N(() => {
      (w && a) || (w ? x() : S());
    }, [x, S, a, w]),
    N(() => () => S(), [S]));
  let E = _(!1),
    D = u(async () => {
      p.current && (await p.current, !E.current && S());
    }, [S]);
  Cx(
    o,
    u(
      (e) => {
        e.isIntersecting ? ((E.current = !0), x()) : ((E.current = !1), D());
      },
      [x, D]
    ),
    { enabled: w && a }
  );
  let O = g || !a;
  return C(() => ({ values: c, style: w && O ? xS : SS }), [w, O]);
}
function pl(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function ml(e, n, r) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = M.useRef(null),
    l = oe(),
    u = M.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : pl(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: d } = _e(),
    f = ce(d, u),
    p = P(o && c.current === null ? `hidden` : r),
    m = P(0),
    h = t(Sx);
  return (
    Vs(
      n,
      (e) => {
        if (e === null || !s) return;
        let t = Hs(h, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            Le.update(() => {
              (f.set(u(d.get())), o && p.set(r ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    Et(() => {
      s && f.set(0);
    }),
    { values: { y: l || !s ? m : f }, style: s ? { ...xS, visibility: p } : SS }
  );
}
function hl(e) {
  return typeof e == `object` && !!e;
}
function gl(e) {
  if (hl(e)) return e?.transition;
}
function _l(e, t, n, r, i, a) {
  let o = gl(e);
  return Promise.all(
    vS.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = hl(e) ? (e?.[s] ?? bS[s]) : bS[s];
          if ((te(u) && (u = u.get()), !R(u))) return c();
          let d = Ne.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (L(i) && !l?.hasAnimated && G.MotionHandoffAnimation) {
            let e = G.MotionHandoffAnimation(i, s, Le);
            e && (f = e);
          } else L(i) && G.MotionCancelOptimisedAnimation?.(i, s, Le);
          a ? l.set(u) : we(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function vl(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  l
) {
  let u = r ?? e,
    d = i ?? t,
    f = a ?? n,
    [p, m] = F(),
    h = _({ lastPresence: !1, lastAnimate: d, hasMounted: !1, running: !1 }),
    g = Fa(() => {
      let e = u ?? c;
      if (!z(e)) return { values: yS() };
      let t = {};
      for (let n in e) {
        let r = z(e) ? e[n] : void 0;
        R(r) && (t[n] = r);
      }
      return { values: yS(t) };
    });
  Vs(
    o,
    (e) => {
      let { hasMounted: t } = h.current;
      if (t && d) return;
      let n = Ne.get(e);
      if (n) {
        Object.assign(h.current, { hasMounted: !0 });
        for (let e in g.values) {
          if (!ul(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, R(t) ? t : bS[e]);
        }
      }
    },
    [d]
  );
  let v = oe();
  Vs(o, (e) => {
    if (!s) {
      m?.();
      return;
    }
    if (e === null) return;
    if (p !== h.current.lastPresence) {
      (Object.assign(h.current, { lastPresence: p }),
        p
          ? u &&
            d &&
            (Object.assign(h.current, { running: !0 }),
            _l(d, g, v, o, l).then(() => Object.assign(h.current, { running: !1 })))
          : f
            ? (Object.assign(h.current, { running: !0 }),
              _l(f, g, v, o, l)
                .then(() => Object.assign(h.current, { running: !1 }))
                .then(() => m()))
            : m());
      return;
    }
    let { lastAnimate: t, running: n } = h.current;
    yt(d, t) ||
      !d ||
      (Object.assign(h.current, { lastAnimate: d }),
      _l(d, g, v, o, l, !n).then(() => Object.assign(h.current, { running: !1 })));
  });
  let y = s && d;
  return C(() => ({ values: g.values, style: y ? xS : SS }), [y]);
}
function yl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function bl(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = yl(o.current, document.documentElement) - DS - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function xl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Sl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Tt();
  M.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return De((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = xl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < OS) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Cl(e, t, n) {
  let r = bl(e, t),
    i = [...AS],
    a = r[0];
  if (!R(a)) return jS;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!R(e)) return jS;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function wl(e) {
  return {
    x: e?.x ?? bS.x,
    y: e?.y ?? bS.y,
    scale: e?.scale ?? bS.scale,
    opacity: e?.opacity ?? bS.opacity,
    transformPerspective: e?.transformPerspective ?? bS.transformPerspective,
    rotate: e?.rotate ?? bS.rotate,
    rotateX: e?.rotateX ?? bS.rotateX,
    rotateY: e?.rotateY ?? bS.rotateY,
    skewX: e?.skewX ?? bS.skewX,
    skewY: e?.skewY ?? bS.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Tl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return M.useMemo(
    () => ({
      initial: r ?? wl({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? wl({ opacity: t }),
      exit: i ?? wl(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function El(e, t) {
  let n = oe(),
    r = Tl(e),
    i = e.styleAppearEffectEnabled,
    a = dl(i ? r.initial : r.animate, i),
    o = M.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Tt(),
    c = M.useRef(),
    l = M.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = Ne.get(t.current);
      c.current = Promise.all(
        vS.map((e) => {
          s && a.values[e].set(r.initial[e] ?? bS[e]);
          let t = o[e] ?? bS[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (R(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && we(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    u = e.animateOnce && o.current.lastAppearState === !0;
  Ws(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && l(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let d = e.targets && i && !e.scrollDirection;
  return (
    M.useEffect(() => {
      if (!d) return;
      let t = { initial: !0 },
        n = `initial`;
      return De((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Cl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = le(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = Ey(r)[u];
        d && l(d);
      });
    }, [s, d]),
    Sl(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Et(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of vS) a.values[e].set(r.initial?.[e] ?? bS[e]);
    }),
    C(() => ({ values: a.values, style: i ? xS : SS }), [i])
  );
}
function Dl(e, t) {
  let n = M.useRef({});
  M.useEffect(() => {
    if (t !== void 0)
      for (let r of Vg(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Ce({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), Le.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Ol(e, t) {
  let n = PS();
  return {
    inputRange: bl(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of vS) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function kl(e) {
  let t = PS();
  for (let { target: n } of e) for (let e of vS) t[e]?.push(n[e]);
  return t;
}
function Al(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = oe(),
    c = dl(NS(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Tt();
  return (
    i(() => {
      if (!(l || !u))
        return De((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = Ol(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of vS)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(le(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    Vs(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = kl(n);
        return De(
          (e, { y: t }) => {
            for (let e of vS)
              (s && e !== `opacity`) ||
                (FS.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(le(t.progress, FS, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    Dl(c.values, r),
    Et(() => {
      if (l) return;
      let e = NS(n, s);
      for (let t of vS) c.values[t].set(e?.[t] ?? bS[t]);
    }),
    M.useMemo(() => ({ values: c.values, style: t ? xS : SS }), [t])
  );
}
function jl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Ml(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Zc(n);
    if (r) {
      for (let i of LS)
        if (IS[i]?.has(r)) {
          t[i][r] = Ey(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Ey(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = jl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = jl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Nl(e) {
  return z(e) && BS in e;
}
function Pl(e, t) {
  if (!e || !z(e)) return t;
  for (let n in e) {
    let r = e[n];
    !te(r) || !ul(n) || (R(r.get()) && t[n].push(r));
  }
}
function Fl(e) {
  return L(e) || Array.isArray(e);
}
function Il() {
  return M.useContext(HS);
}
function Ll(e) {
  let t = rs(e),
    { layoutIdKey: n, duplicatedFrom: r, ...i } = e;
  return { layoutId: t, ...i };
}
function Rl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function zl() {
  if (f === void 0 || JS)
    return E(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw XS;
}
function Bl({ children: e }) {
  return t(QS) ? E(v, { children: e }) : E(x, { fallback: ZS, children: e });
}
function Vl() {
  return E(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Hl(e, t) {
  if (!Og || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  tn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Ul(...e) {
  console.error(...e);
}
function Wl() {
  return q.current() !== q.canvas;
}
function Gl({ getErrorMessage: e, fallback: t, children: n }) {
  return Wl()
    ? E(Kl, { fallback: t, children: E(eC, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Kl({ children: e, fallback: t = $S }) {
  return f === void 0 ? E(x, { fallback: t, children: e }) : E(Bl, { children: e });
}
function ql() {
  return M.useContext(nC);
}
function Jl() {
  let e = ql();
  return M.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function Yl({ children: e, scopeId: t, nodeId: n }) {
  let r = ql(),
    i = M.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return E(nC.Provider, { value: i, children: e });
}
function Xl(e, t) {
  return `${rC}${e}:${t}`;
}
function Zl(e, t) {
  return $l(`component`, e, t);
}
function Ql(e, t) {
  return $l(`override`, e, t);
}
function $l(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Xl(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function eu(e, t, n, r, i, a) {
  let o = nu(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function tu(e, t, n, r) {
  return nu(e, t, n, r);
}
function nu(e, t, n, r) {
  return !!(qe(n) || (n === 1 && r && e === t));
}
function ru(e, t, n, r, i, a) {
  let o = ql();
  if (qe(t) || qe(n)) return E(tC, { children: e });
  let { disableCustomCode: s } = KS();
  return s && r
    ? E(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (eu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = E(Gl, { getErrorMessage: Zl.bind(null, t, n), fallback: null, children: e })),
      i && (e = E(Yl, { scopeId: t, nodeId: n, children: e })),
      e);
}
function iu() {
  if (oC !== void 0 || f === void 0) return;
  let e = G.matchMedia(`(any-hover: hover)`);
  ((oC = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== oC) {
        oC = t;
        for (let e of sC) e();
      }
    }));
}
function au() {
  return (iu(), ou());
}
function ou() {
  return oC ?? !1;
}
function su(e) {
  return (
    sC.add(e),
    iu(),
    () => {
      sC.delete(e);
    }
  );
}
function cu(e = !1) {
  let [t, n] = h(e);
  return (
    vv(function () {
      function e(e = !0) {
        let t = ou();
        e ? l(() => n(t)) : n(t);
      }
      let t = su(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function lu(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function uu(e) {
  return !(!e || e.placement || e.alignment);
}
function du(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      V(e);
  }
}
function fu(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${du(t)}, -100%`;
    case `right`:
      return `0%, ${du(t)}`;
    case `bottom`:
      return `${du(t)}, 0%`;
    case `left`:
      return `-100%, ${du(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function pu(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(mC)) {
      let e = n.getAttribute(mC);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function mu(e) {
  let { registerCursors: r } = t(cC),
    a = Fa(() => e),
    o = n();
  i(() => r(a, o), [r, o]);
}
function hu(e) {
  return !!(e && typeof e == `object` && gC in e);
}
function gu(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function _u() {
  return q.current() === q.canvas;
}
function vu(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function yu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function bu(e, t, n, r) {
  if (L(e)) {
    let i = vu(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = wi(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function xu(e) {
  return L(e) && e.startsWith(`data:${CC}`);
}
function Su(e) {
  if (xu(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(CC.length),
        r = t.searchParams,
        i = r.has(yC) ? r.get(yC) : void 0,
        a,
        o = r.get(bC),
        s = r.get(xC),
        c = r.get(SC);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function Cu(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = Su(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function wu(e) {
  if (!xu(e)) return e;
  let t = Su(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Tu(i) };
}
function Tu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Eu(e, n, r, i, a, o) {
  let s = t(wC),
    c = Jl(),
    l = C(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: c }), [n, r, c]),
    d = St(),
    f = wt(),
    { locales: p } = Un(),
    h = C(() => {
      let e = hu(i) ? i : wu(i);
      if (e) return bu(e, d, f, p);
    }, [f, i, d, p]),
    g = !!(!_u() && s?.nodeId && l.nodeId),
    _ = u(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), On(e))) {
            ku(a.href, ``, `_blank`);
            return;
          }
          h ? a.navigate?.() : ku(a.href, a.rel, a.target);
        }
      },
      [a, h]
    ),
    v = u(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), ku(a.href, ``, `_blank`));
      },
      [a]
    ),
    b = u(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          h ? a.navigate?.() : ku(a.href, a.rel, a.target));
      },
      [a, h]
    );
  Vs(
    o,
    (e) => {
      e !== null && g && (e.dataset.hydrated = `true`);
    },
    [g]
  );
  let x = e;
  return (
    g &&
      (m.forEach(e, (e) => {
        Ou(e) &&
          (B(
            Du(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          B(
            Du(l),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          vC.collectNestedLink(s, l));
      }),
      (x = m.map(e, (e) => {
        if (!Ou(e)) return e;
        let t = Au(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: _,
            onAuxClick: v,
            onKeyDown: b,
            as: r.as && Au(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return y(t, { ...i, ref: a }, n);
      }))),
    E(wC.Provider, { value: l, children: x })
  );
}
function Du(e) {
  return !qe(e?.nodeId);
}
function Ou(e) {
  return T(e) && (Au(e.type) !== e.type || Au(e.props.as) !== e.props.as);
}
function ku(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Au(e) {
  return e === `a` ? `span` : me(e) && fe(e) === `a` ? he.span : e;
}
function ju(e) {
  OC = e;
}
function Mu() {
  return OC;
}
function Nu(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Nu(e.parentElement, t)
      : null;
}
function Pu({ children: e }) {
  return E(Bl, { children: e });
}
function Fu(e) {
  return D(function (t, n) {
    return E(Pu, { children: E(e, { ...t, ref: n }) });
  });
}
function Iu(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Ru(e, t, o, s, a, c, l, i, r);
}
function Lu(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && vu(t))
    try {
      let [i, a] = t.split(`#`, 2);
      B(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      B(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = wi(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function Ru(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = ti(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function zu() {
  let e = t(AC),
    n = wt()?.pathVariables;
  return e || n;
}
function Bu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(kC)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Vu() {
  return !!Mi(`ss-only-routes`);
}
function Hu(e) {
  if (f === void 0) return;
  let t = f.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function Uu(e) {
  return ji(`rewrite`, e)?.description === `external`;
}
function Wu() {
  if (!KS().checkServerSideRouter) return !1;
  if (PC === void 0) {
    let e = Vu();
    ((FC = !e && bn() && Cn() < 16.4), (PC = e || FC));
  }
  return PC;
}
function Gu(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: Uu(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === Mu() ? `client` : `server` };
}
async function Ku(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (FC &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((FC = !1), ji(`ss-only-routes`, t.headers.get(`server-timing`)) || (PC = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return Gu(t, e);
}
function qu(e, t) {
  jC.has(e) && jC.set(e, t);
}
async function Ju(e) {
  await pn(MC);
  try {
    qu(e, await Ku(e));
  } catch {
    jC.delete(e);
  }
}
async function Yu(e) {
  try {
    let t = await Ku(e);
    return (qu(e, t), t);
  } catch {
    return (Ju(e), { decision: `server` });
  }
}
function Xu(e) {
  if (!Wu()) return;
  let t = Hu(e);
  if (!t || t.origin !== f.location.origin) return;
  let n = t.href;
  jC.has(n) || jC.set(n, Yu(n));
}
function Zu(e) {
  let t = Hu(e);
  if (!t) return;
  let n = jC.get(t.href);
  return n && !$e(n) ? n : void 0;
}
async function Qu(e) {
  let t = Hu(e);
  if (!t) return;
  let n = jC.get(t.href);
  if (n) return $e(n) ? Promise.race([n, pn(NC).then(() => void 0)]) : n;
}
function $u() {
  let e = s.connection || s.mozConnection || s.webkitConnection || {},
    t = s.deviceMemory && s.deviceMemory < RC,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? zC : BC));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(u, { threshold: LC }),
    c = 0;
  async function l(e, t) {
    if (r) return;
    Xu(e.navigationUrl);
    let { id: n, preload: a } = e,
      s = UC.get(n);
    if (!s?.size || HC.has(n)) return;
    if (c >= i) {
      setTimeout(() => l(e, t), IC);
      return;
    }
    (++c, HC.add(n));
    let u = a()?.catch(() => {});
    (o.unobserve(t), VC.delete(t));
    for (let e of s) (o.unobserve(e), VC.delete(e));
    (s.clear(), UC.delete(n), await u, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = VC.get(e);
      if (!n || HC.has(n.id)) {
        (o.unobserve(e), VC.delete(e));
        continue;
      }
      let r = n.id,
        i = UC.get(r),
        a = UC.get(r)?.size ?? 0;
      t.isIntersecting
        ? (i ? i.add(e) : UC.set(r, new Set([e])), setTimeout(() => l(n, e), IC))
        : (i && i.delete(e), a <= 1 && UC.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!HC.has(n))
      return (
        VC.set(e, { id: n, preload: t, navigationUrl: r }),
        o.observe(e),
        () => {
          (VC.delete(e), o.unobserve(e));
        }
      );
  };
}
function ed(e, t) {
  let n = vu(e),
    r = {
      href: e === `` || yu(e, n) ? e : `https://${e}`,
      target: td(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Fn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function td(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function nd(e, t) {
  console.warn(
    tt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function rd(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return nd(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return $e(i) ? i.catch(nd) : i;
  } catch (e) {
    nd(e);
  }
}
async function id(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      B(a, `unresolvedSlug should be defined`);
      let o = rd(a, r, n),
        s = $e(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function ad(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = rd(o, r, n);
      $e(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function od() {
  let e = fn();
  return u((t, n, r, i = []) => ad(t, n, r, e, i), [e]);
}
function sd({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = fn();
  return u(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = hu(r) ? r : wu(r);
      if (!hu(c))
        return tn(
          `published_site_click`,
          {
            ...s,
            href: o ? cd(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (L(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = ($e(n) ? await n : n) ?? null;
        }
      }
      return tn(
        `published_site_click`,
        {
          ...s,
          href: o ? cd(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function cd(e) {
  try {
    let t = new URL(e, G.document.baseURI);
    return t.origin === G.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function ld(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function ud(e, t, n) {
  return async (r) => {
    let i = On(r),
      a = Nu(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await K_({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function dd(e, t, n) {
  return async (r) => {
    let i = await fd(t);
    if (i.decision === `client`) {
      n(r);
      return;
    }
    pd(t ?? e, r, i.redirectUrl);
  };
}
async function fd(e) {
  return !e || !Wu()
    ? { decision: `client` }
    : Zu(e) || (Xu(e), (await Qu(e)) ?? { decision: `server` });
}
async function pd(e, t, n) {
  (await K_({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    f.location.assign(md(e, n)));
}
function md(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, f.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function hd(e) {
  let t = Qr(e);
  if (t && f.location.pathname === t) {
    let e = new URL(f.location.href);
    return ((e.pathname = `${t}/`), e.href);
  }
  return f.location.href;
}
function gd(e, t, n) {
  if (t || f === void 0) return;
  let r = hd(n),
    i;
  try {
    i = new URL(e, r);
  } catch {
    return;
  }
  let a = new URL(r);
  if (i.origin === a.origin && !(i.pathname === a.pathname && i.search === a.search)) return i.href;
}
function _d(e, t, n, r, i, a, o, s) {
  if (!n) return ed(e, r);
  let c = Lu(t, e, s, o);
  if (!c) return ed(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return ed(e, r);
  let m = ti(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !kg,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = td(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = gd(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = dd(m, _, (e) =>
      ld(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: ud(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Bu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function vd(e, t, n) {
  let r = yd(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Ue(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Ue(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function yd(e, t) {
  let n = z(e) ? e : void 0,
    r = n && !Ke(n),
    i = t && !Ke(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function bd(e, t, n) {
  if (!(t && gn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: xd } : { ...i, onTap: r }) : e;
}
function xd(e) {
  let t = Nu(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Sd(e, t, n, r, i, a) {
  let o = hu(e) ? e : wu(e);
  if (!hu(o)) return L(e) ? ed(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if ($e(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return ti(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function Cd() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function wd() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, Cd(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: KC, difficulty: qC, tokenLength: JC, maxTime: YC }));
  });
}
function Td(e) {
  let t = new Set();
  for (let n of e.elements)
    !Ed(n) || n.disabled || !n.name || n.name.startsWith(XC) || t.add(n.name);
  return Array.from(t);
}
function Ed(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function Dd(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function Od(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function kd() {
  let e = M.useContext(lw),
    t = M.useMemo(
      () =>
        QC.map((e) => ({
          inputRef: M.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: M.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${XC}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: M.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [ew.name]: e.originalName,
                [ew.value]: o,
                [ew.setAttribute]: e.methodsUsed.setAttribute,
                [ew.valueProperty]: e.methodsUsed.valueProperty,
                [ew.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [ew.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [ew.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${XC}_${tw.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${XC}_${tw.fieldCount}`, r.toString()),
          n.append(`${XC}_${tw.fieldFilledCount}`, i.toString()),
          n.append(`${XC}_${tw.hpVersion}`, ZC),
          n.append(`${XC}_${tw.siteId}`, e || ``),
          n.append(`${XC}_${tw.timeToSubmissionSinceModuleLoad}`, nw()));
      },
      [t, e]
    ),
  };
}
function Ad({ states: e }) {
  return E(v, { children: e.map((e) => E(rw, { inputStateRef: e }, `hp_${e.originalName}`)) });
}
function jd({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          Md(e, t, n);
        })
      : Md(e.pageviewEventData.current, t, n));
}
function Md(e, t, n) {
  return tn(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function Nd({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? cw : sw;
    case `incomplete`:
      return e === `error` ? cw : ow;
    case `submit`:
      return iw;
    case `success`:
      return aw;
    case `error`:
      return cw;
    default:
      V(t);
  }
}
function Pd({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function Fd(e) {
  e.preventDefault();
}
function Id(e, t) {
  let n = yu(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function Ld(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (Ld(t)) return !0;
  return !1;
}
async function Rd(e, t, n, r) {
  let i = await wd();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": Dd(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw zd(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function zd(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    z(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function Bd({ EditorBar: e, fast: n = !1 }) {
  let i = t(lw),
    a = r(Mg, n ? pw : mw, Pg),
    o = KS(),
    s = C(() => {
      let e = {},
        t;
      for (t in o)
        o.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = o[t]);
      return e;
    }, [o]);
  return !e || !i || !a
    ? null
    : E(fw, { children: E(x, { children: E(e, { framerSiteId: i, features: s }) }) });
}
function Vd({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = _(),
    i = _(),
    a = _(t),
    o = _(null);
  ((a.current = t),
    N(() => {
      e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = h(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        a.current ? Ud(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? Ud(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && Hd(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return E(hw.Provider, { value: s, children: n });
}
async function Hd(e, t) {
  if (!nn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    tn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Ud(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? Jn(r.path, n) : r.path) : ``;
}
function Wd(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Gd() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((gw = e.timeZone), (_w = e.locale));
}
function Kd({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Ar(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: xr()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function qd(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = xr();
  Ar(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function Jd(e, t, n, r) {
  let i = xr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Ar(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      ti(t, n)
    ));
}
function Yd() {
  return Cn() >= 17 ? xw : bw;
}
function Xd(e = nf) {
  let t = (e) => {
    e.persisted && of();
  };
  bn() && (f.addEventListener(`pageshow`, t), (yw = Date.now() - Yd()));
  let n = Zd(),
    r = rf(e);
  return function () {
    (f.removeEventListener(`pageshow`, t), n(), r());
  };
}
function Zd() {
  let e = f.history.scrollRestoration;
  return (
    (f.history.scrollRestoration = `manual`),
    function () {
      f.history.scrollRestoration = e;
    }
  );
}
function Qd(e) {
  return z(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function $d() {
  return { x: f.scrollX, y: f.scrollY };
}
function ef() {
  let e = xr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (Qd(t)) return t;
}
function tf(e) {
  let t = xr();
  t && (Or({ ...t, scrollPosition: e }), bn() && (yw = Date.now()));
}
function nf(e, t = !1) {
  let n = ef();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (bn() && !t) {
      let e = Yd();
      if (Date.now() - yw < e) return;
    }
    tf(e);
  }
}
function rf(e) {
  let t = () => {
      e($d());
    },
    n = () => {
      e($d(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), f.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), f.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in f)) {
    let e = af(t);
    return function () {
      (i(), e());
    };
  }
  return (
    f.addEventListener(`scrollend`, t),
    function () {
      (i(), f.removeEventListener(`scrollend`, t));
    }
  );
}
function af(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || Sr(xr()) !== t) && e());
    },
    a = () => {
      let e = Sr(xr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = bn() ? Yd() : 100;
      t = f.setTimeout(i, a);
    };
  return (
    f.addEventListener(`scroll`, a),
    function () {
      (f.removeEventListener(`scroll`, a), r());
    }
  );
}
function of() {
  let e = ef();
  return e ? (f.scrollTo(e.x, e.y), !0) : !1;
}
function sf(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function cf(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (sf(n, t), !0);
}
function lf(e, t, n) {
  n !== `preserve-scroll-position` &&
    Le.render(
      () => {
        (n === `restore-scroll-position` && of()) || cf(e, t) || f.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function uf(e, t) {
  Le.read(() => {
    f.scrollY !== 0 ||
      f.scrollX !== 0 ||
      Le.render(
        () => {
          of() || cf(e, t);
        },
        !1,
        !0
      );
  });
}
function df(e) {
  let t = KS().scrollRestoration,
    n = _(void 0),
    r = _(!1),
    a = !!(t && !e),
    o = u(
      (e) => {
        ((n.current = e), a && (r.current = !0));
      },
      [a]
    ),
    s = u((e, t = !1) => {
      r.current || nf(e, t);
    }, []),
    c = u(() => {
      a && (r.current = !0);
    }, [a]),
    l = u(() => n.current !== void 0 || r.current, []),
    d = u((e, t) => {
      let i = n.current;
      !i ||
        i.routeId !== e ||
        i.remountKey !== t ||
        ((n.current = void 0), (r.current = !1), lf(i.hash, i.shouldSmoothScroll, i.behavior));
    }, []);
  return (
    i(() => {
      if (a) return Xd(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: d,
    }
  );
}
function ff({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: a } = n;
  return (
    i(() => {
      r(e, t);
    }),
    N(() => {
      a && uf(f.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function pf() {
  let [e, t] = M.useState(0);
  return [e, M.useCallback(() => t((e) => e + 1), [])];
}
function mf({ children: e, loadSnippetsModule: t }) {
  return E(Mw.Provider, { value: t, children: e });
}
function hf() {
  return M.useContext(Mw);
}
function gf(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function _f(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (B(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (B(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      V(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await vf(a.createContextualFragment(e), r, i));
}
async function vf(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = yf(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await vf(r, e, null)));
  }
}
function yf(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return bf(r, t, n);
}
function bf(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function xf(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = Ow), (n = kw));
      break;
    case `bodyEnd`:
      ((t = Aw), (n = jw));
      break;
    case `headStart`:
      ((t = ww), (n = Tw));
      break;
    case `headEnd`:
      ((t = Ew), (n = Dw));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function Sf(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = gf(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function Cf(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = xf(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Sf(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((wf(t, o), s)) {
      await _f(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = gf(e.id),
      u = `${c}
${e.code}
${l}`,
      d = Ef(e.id, n, r, i);
    d ? await _f(u, d, `afterend`) : await _f(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function wf(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (Tf(n) && n.remove(), (n = e));
  }
}
function Tf(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Ef(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Sf(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Df() {
  let e = hf();
  return u(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(Sw)?.dataset[Cw] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await Cf(t, n, r);
      }
    },
    [e]
  );
}
function Of(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function kf({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: s,
}) {
  if (!e || !t || !n || !r) return;
  let c,
    l = [],
    u = o.find((e) => e.id === Kg),
    { path: d } = await zn({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
  d && (c = Of(d, e));
  let p;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o, isMissingInLocale: c } = await zn({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    if (!o || c) continue;
    let d = Of(o, e);
    (l.push({ href: d, hrefLang: n.code }), n.id === Kg && (p = d));
  }
  return (
    p && l.push({ href: p, hrefLang: `x-default` }),
    () => {
      (gr(c, f.location.href), _r(l));
    }
  );
}
function Af({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = fn(),
    l = Df();
  N(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && Hl(e);
        }),
        d)
      : ((e.id === t.id
          ? An()
          : zn({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === Kg),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: c,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await kf({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && Hl(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function jf(e) {
  if (!e) return Dg;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Mf(e) {
  let t = Ir(e),
    n = _(void 0),
    r = u(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: u(
      async (e, i, a, o = !0) => {
        r();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = kt(c);
        if ((i.promise.finally(l), a === void 0)) return (e(c), i.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(Dg);
        if ((t(d, s, a), e(c), await i.promise, c?.aborted)) return;
        let p = f.navigation?.transition;
        u();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || fv();
      },
      [r, t]
    ),
    cancelPendingNavigation: r,
  };
}
function Nf({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: a,
  collectionUtils: o,
  routes: s,
  initialLocaleId: c,
  initialCollectionItemId: p,
  initialContentLocaleIdOverride: m,
  locales: h = Gg,
  initialCanonicalPathVariables: g,
  preserveQueryParams: v = !1,
  LayoutTemplate: y,
  EditorBar: b,
  siteCanonicalURL: x,
  adaptLayoutToTextDirection: S,
}) {
  (gi(),
    jr({
      disabled: t,
      routeId: r,
      initialPathVariables: n,
      initialLocaleId: c,
      initialContentLocaleId: m,
      initialCanonicalPathVariables: g,
    }));
  let T = mr(),
    [D, O] = pf(),
    k = yr(`framer-route-change`),
    A = C(() => (!KS().synchronousNavigationOnDesktop || !Dn() ? l : (e) => e()), []),
    j = _(!0),
    M = _(),
    ee = _(0),
    P = _(r),
    te = _(n),
    ne = _(),
    re = _(c),
    ie = df(t),
    { isNavigationCommitPending: ae, usesCustomScrollRestoration: oe } = ie,
    { startNavigation: se, cancelPendingNavigation: ce } = Mf(oe),
    le = fn(),
    ue = ie.scheduleScroll,
    de = re.current,
    fe = P.current,
    pe = te.current,
    me = s[fe],
    he = me?.path;
  if (!me) throw Error(`Router cannot find route for ${fe}`);
  let ge = C(() => h.find(({ id: e }) => e === Kg), [h]),
    F = C(() => h.find(({ id: e }) => (de ? e === de : e === Kg)) ?? null, [de, h]),
    {
      contentLocale: _e,
      currentCanonicalPathVariables: ve,
      pageExistsInCurrentLocale: ye,
      setRouteContentState: be,
    } = Ff({
      activeLocale: F,
      currentRoute: me,
      initialCanonicalPathVariables: g,
      initialContentLocaleIdOverride: m,
      locales: h,
      routes: s,
    }),
    xe = F?.textDirection ?? `ltr`,
    I = S ? xe : `ltr`;
  i(() => {
    S && document.documentElement.setAttribute(`dir`, xe);
  }, [xe, S]);
  let Se = Pr(),
    Ce = C(
      () => ({
        activeLocale: F,
        contentLocale: _e,
        locales: h,
        setLocale: async (e) => {
          let n = ++ee.current,
            r = k({ localized: !0 });
          if ((await K_({ priority: `user-blocking`, continueAfter: `paint` }), n !== ee.current)) {
            r.ignore?.();
            return;
          }
          let i;
          L(e) ? (i = e) : z(e) && (i = e.id);
          let a = h.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = P.current,
            c = s[o];
          if (!c) {
            r.ignore?.();
            return;
          }
          let l = Qr(x);
          try {
            let e = await Se({
              currentLocale: F,
              nextLocale: a,
              route: c,
              routeId: o,
              defaultLocale: ge,
              pathVariables: te.current,
              preserveQueryParams: v,
              sitePrefix: l,
            });
            if (!e || n !== ee.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && l + e.path,
              { contentLocaleId: s, canonicalPathVariables: u } = await Hn({
                activeLocale: a,
                defaultLocale: ge,
                collectionUtilsCache: le,
                locales: h,
                pathVariables: e.pathVariables,
                route: c,
                routeId: o,
              });
            if (n !== ee.current) {
              r.ignore?.();
              return;
            }
            ((j.current = !1),
              (re.current = a.id),
              (M.current = i),
              (te.current = e.pathVariables),
              be(s, u));
            let d = c.path && e.pathVariables ? Jn(c.path, e.pathVariables) : c.path;
            (ue({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              se(
                () => {
                  T(o, o, () => A(O));
                },
                r,
                t
                  ? void 0
                  : i
                    ? () => {
                        Kd({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: s,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [F, ge, _e, t, O, h, v, be, s, ue, se, T, k, A, Se, le, x]
    ),
    we = u(
      (e, t, n, r, i, a, o, c, l, u, d) => {
        j.current = !1;
        let f = P.current,
          p = s[e],
          m = Ot(p, n),
          h = p?.path && i ? Jn(p.path, i) : p?.path;
        if (
          ((P.current = e),
          (re.current = t),
          (te.current = i),
          (ne.current = void 0),
          be(a, o),
          (M.current = r),
          ue({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: u ?? !1,
            behavior: c
              ? oe
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          c)
        ) {
          (ce(), A(O));
          return;
        }
        se(
          (t) => {
            T(f, e, () => A(O), t);
          },
          l,
          d,
          !0
        );
      },
      [O, be, s, oe, ue, se, T, A, ce]
    );
  (Mr(ie, P, we),
    N(() => {
      if (t) return;
      let e = () => {
        let e = xr(),
          t = f.location.hash === `` ? void 0 : f.location.hash.slice(1);
        (e && Ot(s[e.routeId], e.hash) === t) ||
          kr({
            ...(e ||
              (wr() ?? { routeId: P.current, pathVariables: te.current, localeId: re.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (f.addEventListener(`hashchange`, e), () => f.removeEventListener(`hashchange`, e));
    }, [t, s]));
  let Te = u(
      async (e, n, r, i, a) => {
        let o = s[e],
          c = at(o?.page) ? o.page.getStatus() : void 0,
          l = c?.hasRendered,
          u = k({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          d = jf(a);
        if (
          (K_({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await K_({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(J_)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Ot(o, n),
          p = te.current,
          m = re.current;
        if (
          ne.current === void 0 &&
          Wd({ routeId: P.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = ae();
          if (a) {
            let t = o?.path && r ? Jn(o.path, r) : o?.path;
            ue({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ce();
          (u.ignore?.(), !a && oe && lf(f, i, `scroll-to-hash-or-top`));
          let c = s[e];
          (!t &&
            c &&
            Jd(
              e,
              c,
              {
                currentRoutePath: c.path,
                currentRoutePathLocalized: c.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: n,
                localeId: m,
                preserveQueryParams: v,
                siteCanonicalURL: x,
              },
              d
            ),
            !a && !oe && lf(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let g = s[P.current],
          _ =
            Qr(x) +
            ti(o, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: m,
              localeSlug: h.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: v,
              relative: !1,
              siteCanonicalURL: x,
            }),
          y = {};
        ne.current = y;
        let { contentLocaleId: b, canonicalPathVariables: S } = await Hn({
          activeLocale: F,
          defaultLocale: ge,
          collectionUtilsCache: le,
          locales: h,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        ne.current === y &&
          we(
            e,
            m,
            n,
            _,
            r,
            b,
            S,
            !1,
            u,
            i,
            t
              ? void 0
              : () => {
                  (d(),
                    qd(e, o, {
                      historyPath: _,
                      currentRoutePath: g?.path,
                      hash: n,
                      pathVariables: r,
                      contentLocaleId: b,
                      canonicalPathVariables: S,
                      localeId: m,
                    }));
                }
          );
      },
      [ce, s, h, we, t, v, x, k, oe, ae, ue, le, ge, F]
    ),
    Ee = bt(s),
    De = M.current,
    Oe = vw(me, fe, De, pe, F, p),
    ke = j.current;
  Af({
    activeLocale: F,
    contentLocale: _e,
    currentPathVariables: pe,
    currentRoute: me,
    currentRouteId: fe,
    isInitialNavigation: ke,
    locales: h,
    siteCanonicalURL: x,
  });
  let Ae = C(
      () => ({
        navigate: Te,
        getRoute: Ee,
        currentRouteId: fe,
        currentPathVariables: pe,
        currentCanonicalPathVariables: ve,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: v,
        pageviewEventData: Oe,
        siteCanonicalURL: x,
        isInitialNavigation: ke,
      }),
      [Te, Ee, fe, pe, ve, s, o, v, x, Oe, ke]
    ),
    je = he && pe ? Jn(he, pe) : he,
    Me = `${de}${je}`,
    Ne = Fa(() => ({ ...e, display: `contents` }));
  return E(xt, {
    api: Ae,
    children: E(Z_.Provider, {
      value: Ce,
      children: E(Q_.Provider, {
        value: I,
        children: E(fC, {
          children: E(qr, {
            routerRenderKey: D,
            isNavigationCommitPending: ie.isNavigationCommitPending,
            children: w(Vd, {
              currentRoutePath: je,
              routerAPI: Ae,
              children: [
                b && E(Bd, { EditorBar: b, fast: !0 }),
                E(YS, {
                  children: w(Bl, {
                    children: [
                      E(Vv.Start, {}),
                      E(ff, { currentRouteId: fe, remountKey: Me, scrollRestoration: ie }),
                      E(Uv, {
                        notFoundPage: a,
                        defaultPageStyle: e,
                        routerRenderKey: D,
                        children: E(Pf, {
                          LayoutTemplate: y,
                          webPageId: me?.abTestingVariantId ?? fe,
                          style: e,
                          children: (t) =>
                            E(d, { children: ye ? xi(me.page, t ? Ne : e) : a && xi(a, e) }, Me),
                        }),
                      }),
                      b && E(Bd, { EditorBar: b }),
                      E(fi, {}),
                      E(Vv.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function Pf({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? E(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function Ff({
  activeLocale: e,
  currentRoute: t,
  initialCanonicalPathVariables: n,
  initialContentLocaleIdOverride: r,
  locales: i,
  routes: a,
}) {
  let o = _(n),
    s = _(r),
    c = s.current,
    l = !e || !t.includedLocales || t.includedLocales.includes(e.id),
    d = C(() => {
      if (!e) return null;
      let n;
      return (
        (n = l
          ? (c ?? t?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(a).find((e) => e.path && kv.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        n ? (i.find(({ id: e }) => e === n) ?? e) : e
      );
    }, [e, t, i, c, l, a]),
    f = u((e, t) => {
      ((s.current = e), (o.current = t));
    }, []);
  return {
    contentLocale: d,
    currentCanonicalPathVariables: o.current,
    pageExistsInCurrentLocale: l,
    setRouteContentState: f,
  };
}
function If(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function Lf(e) {
  return typeof e == `object` && !!e;
}
function Rf(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Lf(r)) return;
    r = r[e];
  }
  return r;
}
function zf(e) {
  return `${e.credentials}:${e.url}`;
}
function Bf(e) {
  return L(e) && !Number.isNaN(Number(e));
}
function Vf(e, t) {
  switch (e) {
    case `string`:
      return L(t) || R(t);
    case `color`:
      return L(t);
    case `boolean`:
      return We(t);
    case `number`:
      return R(t) || Bf(t);
    case `link`:
    case `image`:
      return L(t) && yu(t, !1);
    default:
      return !1;
  }
}
function Hf(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = Rf(e.data, t.resultKeyPath);
  if (qe(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Vf(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Uf(e) {
  return Math.max(e * 1e3, Pw);
}
function Wf(e, t) {
  if (q.current() === q.canvas) return !1;
  let n = Uf(t);
  return Date.now() >= e + n;
}
function Gf({ client: e, children: t }) {
  return E(Bw.Provider, { value: e, children: t });
}
function Kf(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: f = !1,
    skipAnimations: p = !1,
    includeDataObserver: m = !1,
    localeId: h,
    locales: g,
    preserveQueryParams: _,
    EditorBar: v,
    defaultPageStyle: y,
    disableHistory: b,
    LayoutTemplate: x,
    siteCanonicalURL: S,
    adaptLayoutToTextDirection: C,
    loadSnippetsModule: w,
    initialCollectionItemId: T,
    initialContentLocaleIdOverride: D,
  } = e;
  return (
    M.useEffect(() => {
      n || _y.start();
    }, []),
    n
      ? E(zr, {
          value: r ?? `preview`,
          children: E(Te, {
            reducedMotion: p ? `always` : f ? `user` : `never`,
            skipAnimations: p,
            children: E(dn, {
              collectionUtils: l,
              children: E(Gf, {
                client: u,
                children: E(zw, {
                  children: E(lw.Provider, {
                    value: a,
                    children: E(mf, {
                      loadSnippetsModule: w,
                      children: E(Nf, {
                        initialRoute: i,
                        initialPathVariables: o,
                        initialCanonicalPathVariables: s,
                        initialLocaleId: h,
                        initialCollectionItemId: T,
                        initialContentLocaleIdOverride: D,
                        routes: c,
                        collectionUtils: l,
                        notFoundPage: d,
                        locales: g,
                        defaultPageStyle: y ?? { minHeight: `100vh`, width: `auto` },
                        preserveQueryParams: _,
                        EditorBar: v,
                        disableHistory: b,
                        LayoutTemplate: x,
                        siteCanonicalURL: S,
                        adaptLayoutToTextDirection: C,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : E(m ? tS : M.Fragment, {
          children: E(Ct, {
            routes: c,
            children: E(Hx, { children: M.isValidElement(t) ? t : M.createElement(t, { key: i }) }),
          }),
        })
  );
}
function qf(e, t) {
  let n = St(),
    { activeLocale: r } = Un(),
    i = od();
  return Vr(() => {
    let t = [],
      a = (e) => {
        if (e)
          return L(e) || hu(e)
            ? Sd(e, n, void 0, void 0, r, o)
            : Sd(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function Jf(e) {
  return {
    trace(...t) {
      return Ny.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return Ny.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return Ny.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return Ny.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return Ny.getLogger(e)?.error(...t);
    },
    get enabled() {
      return Ny.getLogger(e) !== void 0;
    },
  };
}
function Yf() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function Xf() {
  return Hw.priority;
}
function Zf(e) {
  let t = Hw;
  return (
    (Hw = e),
    {
      [Yf()]() {
        Hw = t;
      },
    }
  );
}
function Qf(e = Hw.priority, t = Hw.canYield) {
  if (!(!t || e === void 0)) return K_({ batch: !0, priority: jn(e) });
}
function $f(e) {
  var t = [];
  try {
    Me(t, Zf({ priority: Hw.priority, canYield: !1 }));
    let n = e.next();
    return (B(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    I(t, n, r);
  }
}
async function ep(e, t, n = Hw.priority, r = Hw.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (Me(o, Zf(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      I(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = Qf(n, r);
      (o && (await o), Me(l, Zf(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      I(l, u, d);
    }
  }
  return a.value;
}
function tp(e, t = Hw.priority, n = Hw.canYield) {
  var r = [];
  try {
    Me(r, Zf({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : ep(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    I(r, i, a);
  }
}
function* np(e, t = Hw.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (Ze(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            ep(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* rp(e, t = Hw.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Qf(t);
    r && (yield r);
    let o = e[a];
    if (Ze(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            ep(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function ip(e) {
  return sp(e) || up(e);
}
function ap(e) {
  return Ge(e) && e.every(z);
}
function op(e) {
  return z(e) && Ue(e.read) && Ue(e.preload);
}
function sp(e) {
  return ap(e) || op(e);
}
function cp(e) {
  return z(e) && z(e.schema);
}
function lp(e) {
  return z(e) && z(e.collectionByLocaleId);
}
function up(e) {
  return cp(e) || lp(e);
}
function dp(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Bp(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function fp(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => Uw.cast(e, t.definition)) };
  }
  return null;
}
function pp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function mp(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function hp(e) {
  return mp(e)?.value ?? !1;
}
function gp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function _p(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function vp(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function yp(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return Xe(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function bp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function xp(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Sp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Cp(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function wp(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Tp(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Ep(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Dp(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Op(e) {
  return Dp(e)?.value ?? null;
}
function kp(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Bp(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Ap(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = Uw.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function jp(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Mp(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function Np(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Pp(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function Fp(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Ip(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function Lp(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Rp(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function zp(e) {
  return Rp(e)?.value ?? null;
}
function Bp(e, t, n) {
  if (Je(e) || Je(t)) return (B(e === t), 0);
  switch (e.type) {
    case `array`:
      return (B(e.type === t.type), dp(e, t, n));
    case `boolean`:
      return (B(e.type === t.type), pp(e, t));
    case `color`:
      return (B(e.type === t.type), gp(e, t));
    case `date`:
      return (B(e.type === t.type), vp(e, t));
    case `enum`:
      return (B(e.type === t.type), bp(e, t));
    case `file`:
      return (B(e.type === t.type), Sp(e, t));
    case `link`:
      return (B(e.type === t.type), wp(e, t));
    case `number`:
      return (B(e.type === t.type), Ep(e, t));
    case `object`:
      return (B(e.type === t.type), kp(e, t, n));
    case `responsiveimage`:
      return (B(e.type === t.type), jp(e, t));
    case `richtext`:
      return (B(e.type === t.type), Np(e, t));
    case `vectorsetitem`:
      return (B(e.type === t.type), Fp(e, t));
    case `string`:
      return (B(e.type === t.type), Lp(e, t, n));
    default:
      V(e);
  }
}
async function Vp(e, t) {
  return op(e) ? (await e.preload(t), e.read(t)) : e;
}
function Hp(e) {
  if (!up(e) || !e.id) return;
  let t = Kw.get(e.id);
  if (!t) return (Kw.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Up(e) {
  let t = Hp(e);
  if (t) return t;
  let n = qw.get(e);
  if (n) return n;
  let r = `${Jw}${Math.random().toString(16).slice(2)}`;
  return (qw.set(e, r), r);
}
function Wp(e, t) {
  if (sp(e)) {
    let n = Up(e) + (t?.id ?? Kg),
      r = Yw.get(n);
    if (r) return r;
    let i = new Gw(e, t);
    return (Yw.set(n, i), i);
  }
  if (cp(e)) return e;
  if (lp(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  V(e, `Unsupported collection type`);
}
function Gp(e) {
  return e;
}
function Kp(e) {
  return Ue(e.getHash);
}
function W(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (z(r) && Kp(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return Gp(`${n})`);
}
function qp(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function Jp(e, t) {
  return { collectionId: Up(e), pointer: t };
}
function Yp(e) {
  return z(e) && L(e.collectionId);
}
function Xp(e, t) {
  return { collectionId: Up(e), pointer: t };
}
function Zp(e) {
  return z(e) && L(e.collectionId);
}
function Qp(e, t) {
  let n = new Map();
  function r(e) {
    if (z(e))
      if (e.type === `Collection` && ip(e.data)) {
        let r = Wp(e.data, t),
          i = Up(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (Ge(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function $p(e) {
  return e;
}
function em(e) {
  return e;
}
function tm(e) {
  return e;
}
function nm() {
  return 25;
}
function rm() {
  return 12500;
}
function im(e) {
  return Array(e).fill({ type: `All` });
}
function am(e) {
  return e;
}
function om(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new nE(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function sm(e) {
  let t = new Set();
  if (!e) return t;
  om(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (om(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function cm(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) cm(n, t);
      return;
    case `object`:
      for (let n in e.value) cm(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function lm(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function um(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function dm(e) {
  return `${e.functionName}(${e.arguments.map((e) => gm(e)).join(`, `)})`;
}
function fm(e) {
  let t = `CASE`;
  e.value && (t += ` ${gm(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${gm(n.when)} THEN ${gm(n.then)}`;
  return (e.else && (t += ` ELSE ${gm(e.else)}`), (t += ` END`), t);
}
function pm(e) {
  let t = gm(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function mm(e) {
  let t = gm(e.left),
    n = gm(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function hm(e) {
  return `CAST(${gm(e.value)} as ${e.dataType})`;
}
function gm(e) {
  switch (e.type) {
    case `Identifier`:
      return lm(e);
    case `LiteralValue`:
      return um(e);
    case `FunctionCall`:
      return dm(e);
    case `Case`:
      return fm(e);
    case `UnaryOperation`:
      return pm(e);
    case `BinaryOperation`:
      return mm(e);
    case `TypeCast`:
      return hm(e);
    case `Select`:
      return `${xm(e)}`;
    default:
      V(e);
  }
}
function _m(e) {
  return cp(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function vm(e) {
  let t = `${ym(e.left)} LEFT JOIN ${ym(e.right)}`;
  return (e.constraint && (t += ` ON ${gm(e.constraint)}`), t);
}
function ym(e) {
  switch (e.type) {
    case `Collection`:
      return _m(e);
    case `LeftJoin`:
      return vm(e);
    default:
      V(e);
  }
}
function bm(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function xm(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = gm(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${ym(e.from)}`),
    e.where && (t += ` WHERE ${gm(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${gm(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${gm(e.limit)}`),
    e.offset && (t += ` OFFSET ${gm(e.offset)}`),
    bm(t)
  );
}
function Sm(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(qe(e) || z(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function Cm(e) {
  let t = _(e);
  return (
    c(() => {
      t.current = e;
    }, [e]),
    Hr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function wm(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Tm() {
  return new Set();
}
function Em(e) {
  let t = Fa(Tm),
    n = Fa(Tm);
  return (
    Xs(() => () => wm(n, t)),
    N(() => () => wm(n, t), []),
    N(() => {
      wm(n, t);
    }, [e]),
    _({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Dm(e, t, n) {
  return M.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Om(e) {
  for (let [t, n] of Object.entries(e)) if (G.matchMedia(n).matches) return t;
}
function km(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && G.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Am(e, n, r = !0) {
  let i = t(zx),
    a = za(),
    o = ja(),
    s = Sn() && (!a || o),
    c = _(s ? (Om(n) ?? e) : e),
    d = _(r && i ? e : c.current),
    f = is(),
    p = Ve(),
    m = u(
      (e) => {
        if (e !== c.current || e !== d.current) {
          let t = function () {
            ((c.current = d.current = e),
              l(() => {
                f();
              }));
          };
          a
            ? t()
            : p(() => {
                t();
              });
        }
      },
      [p, f, a]
    );
  return (
    vv(() => {
      if (a) {
        if (o) {
          m(Om(n) ?? e);
          return;
        }
        m(e);
      }
    }, [e, o, a, n, m]),
    vv(() => {
      !r || i !== !0 || m(c.current);
    }, []),
    N(() => {
      if (!s || o) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = G.matchMedia(r),
          i = (e) => {
            e.matches && m(t);
          };
        (jm(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => Mm(e, t));
    }, [o, n, m, s]),
    [c.current, d.current]
  );
}
function jm(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Mm(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Nm(e) {
  setTimeout(e, 1);
}
function Pm(e) {
  let t = new Set(),
    n = km(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Fm(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (Ag ? G.requestIdleCallback : Nm)(() => {
    document.querySelector(_E)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Fm(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Im(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Fm(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Im(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Lm(e) {
  return z(e) && vE in e && e.page !== void 0;
}
function Rm(e, t) {
  return `${e}-${t}`;
}
function zm(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (B(r !== void 0, `nextVariant should be defined`), r);
}
function Bm(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Vm(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Hm(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Um(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Wm() {
  let e = _(),
    t = _(),
    n = u(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    N(
      () => () => {
        n();
      },
      [n]
    ),
    u(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function Gm() {
  let e = _(),
    n = _(!1),
    r = _(),
    i = t(Sx);
  return (
    N(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    u(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = Hs(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function Km(e) {
  let t = Wm(),
    n = Gm();
  return u(
    (r, i = !1) => {
      if (kg) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function qm() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (xE = () => {
        (e(), (t = void 0));
      }));
  });
}
function Jm(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (bE = qm()));
}
function Ym() {
  (performance.mark(`click-received-listener`), (bE = void 0), xE?.(), (xE = void 0));
}
function Xm(e = !1) {
  N(() => {
    e &&
      (document.addEventListener(`pointerup`, Jm, !0),
      document.__proto__.addEventListener.call(document, `click`, Ym, !0));
  }, [e]);
}
function Zm({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: s,
}) {
  let c = is(),
    d = _u(),
    f = Fa(() => new Set(i));
  Xm(KS().yieldOnTap);
  let p = Km(s),
    m = _({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Um(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = u((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = Um(e, a, f),
        s = Vm(i?.[o], t, n, !1, r);
      return [o, s ? Rm(o, s) : void 0];
    }, []),
    g = u(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let u = KS().yieldOnTap && m.current.isPressedHasUpdated;
        (u &&
          bE &&
          (performance.mark(`wait-for-tap-start`),
          await bE,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          u &&
            (performance.mark(`yield-on-tap-start`),
            await K_({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: d,
          isPressed: f,
          isHoveredHasUpdated: g,
          isPressedHasUpdated: _,
        } = m.current;
        if (d || g || f || _) {
          l(c);
          return;
        }
        p(() => l(c), i);
      },
      [h, c, p]
    ),
    v = u(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !d && KS().disableHoverOnMobile && !au() && (e = !1);
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          g(a, o, s, a, !1));
      },
      [g, d]
    ),
    y = u(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === yE ? zm(r || [], i || n) : e;
        g(i, a, n, o, t, !0);
      },
      [g]
    ),
    b = u(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => l(c), !0));
    }, [c, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: k,
    } = m.current,
    A = Dm(m.current.baseVariant, m.current.gestureVariant, a);
  return C(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !O && !d && !!t && !k[x],
      r = n ? Rm(x, `loading`) : S;
    r && e.push(r);
    let i = T?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: Bm(m.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: Xc(Hm(x, o), Vm(i, E, D, n, O)),
      }
    );
  }, [x, S, E, D, k, A, y, w, T, v, b, o]);
}
function Qm(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Wl()) return eh(e, r, t, n);
  let a = $m(e, r, t, n),
    o = !1;
  function s(r, s) {
    let c = ql(),
      { disableCustomCode: l } = KS();
    if (l) return E(e, { ...r, ref: s });
    if (tu(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? E(gv.Provider, {
            value: n,
            children: E(Gl, {
              getErrorMessage: Ql.bind(null, t, n),
              fallback: E(e, { ...r, ref: s }),
              children: E(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Ul(a.error), Ul(Ql(t, n)), Hl(a.error), !0)), E(e, { ...r, ref: s }));
    if (a.status === `success`)
      return E(gv.Provider, { value: n, children: E(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return M.forwardRef(s);
}
function $m(e, t, n, r) {
  try {
    return { status: `success`, Component: eh(e, t, n, r) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function eh(e, t, n, r) {
  let i = SE.get(t);
  i || ((i = new WeakMap()), SE.set(t, i));
  let a = i.get(e);
  a || ((a = new Map()), i.set(e, a));
  let o = `${n}:${r}`;
  if (a.has(o)) return a.get(o);
  let s = t(e);
  return (a.set(o, s), s);
}
function th(e, t, n, r = EE) {
  let [i, a] = M.useState(e),
    [o, s] = M.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      M.useCallback(
        (e) => {
          li(e) ||
            (t && a(r(e)),
            n &&
              M.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function nh(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function rh() {
  return E(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: E(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function ih(e, t) {
  N(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (f.addEventListener(`keyup`, n), () => f.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function ah(e, t, n, r) {
  let i = f.innerHeight - r,
    a = Math.min(f.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function oh(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new f.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function sh() {
  return document.getElementById(EC) ?? document.getElementById(TC) ?? document.body;
}
function ch(e, t) {
  return R(e) ? e : (t ?? 0);
}
function lh(e) {
  return ch(e?.paddingTop, e?.padding) + ch(e?.paddingBottom, e?.padding);
}
function uh(e) {
  return ch(e?.paddingLeft, e?.padding) + ch(e?.paddingRight, e?.padding);
}
function dh(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - uh(e)}px)`,
      srcSet: Ga(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function fh(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in LE)) continue;
    let n = LE[t],
      r = e[t];
    if (!(!R(n) || !R(r)) && n !== r) return !0;
  }
  return !1;
}
function ph(e) {
  let t = Ne.get(e.current);
  if (!t) return !1;
  if (fh(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (fh(e.latestValues)) return !0;
  return !1;
}
function mh(e) {
  return D(function ({ lightbox: r, lightboxClassName: i, onClick: a, ...o }, s) {
    let c = t(ye),
      f = t(CE),
      p = !!f,
      m = _(null),
      g = s ?? m,
      y = _(),
      b = C(() => dh(r, o.background), [r, o.background]),
      [x, T] = h(!1),
      [D, O] = h(),
      k = u(() => {
        if (r) {
          if (x) {
            l(() => {
              T(!0);
            });
            return;
          }
          Le.read(() => {
            if (!g.current) return;
            let e = getComputedStyle(g.current),
              t =
                g.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(g.current, `::after`)
                  : void 0,
              n = g.current.offsetWidth ?? 1,
              i = g.current.offsetHeight ?? 1,
              a = ph(g) || p ? { duration: 0 } : r.transition;
            l(() => {
              (O({
                borderRadius: e.borderRadius,
                aspectRatio: n / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                T(!0),
                f?.stop());
            });
          });
        }
      }, [r, x, g, f?.stop, p]),
      A = D?.aspectRatio ?? 1,
      j = Cm(() => {
        if (!r || !b?.src) return;
        let e = y.current?.[b.src];
        if (e) return e;
        let t = ah(A, r.maxWidth, uh(r), lh(r)),
          n = oh(b, { width: t, height: t * A });
        return ((y.current = { [b.src]: n }), n);
      }),
      M = u(
        async (e) => {
          (a?.(e), !(x || !r || !b) && (await j(), k()));
        },
        [a, k, x, b, r, j]
      ),
      ee = u((e) => {
        (e?.stopPropagation(),
          l(() => {
            T(!1);
          }));
      }, []);
    (ih(x, ee),
      N(() => {
        if (!r) return;
        let e;
        function t() {
          e = setTimeout(() => {
            j();
          }, 50);
        }
        function n() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, n),
          i?.addEventListener(`pointerdown`, j),
          () => {
            (n(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, n),
              i?.removeEventListener(`pointerdown`, j));
          }
        );
      }, [j, g, r]));
    let P = n(),
      te = D?.transition ?? o.transition ?? c.transition,
      ne = D?.borderRadius,
      re = D?.imageRendering,
      ie = D?.filter,
      ae = D?.borderTop,
      oe = D?.borderRight,
      se = D?.borderBottom,
      ce = D?.borderLeft,
      le = D?.borderStyle,
      ue = D?.borderColor,
      de = !!(ae || oe || se || ce || le || ue),
      fe = de
        ? {
            "--border-top-width": ae,
            "--border-right-width": oe,
            "--border-bottom-width": se,
            "--border-left-width": ce,
            "--border-style": le,
            "--border-color": ue,
          }
        : void 0,
      pe = { [mC]: o.id },
      me = ch(r?.paddingTop, r?.padding),
      ge = ch(r?.paddingBottom, r?.padding),
      F = ch(r?.paddingLeft, r?.padding),
      _e = ch(r?.paddingRight, r?.padding),
      ve = D?.borderRadius ? { ...o.style, borderRadius: D.borderRadius } : o.style,
      be = x ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      xe = p && x ? void 0 : (o.layoutId ?? (r ? P : void 0));
    return w(v, {
      children: [
        E(e, {
          ...o,
          style: ve,
          onClick: M,
          layoutId: xe,
          ref: g,
          layoutDependency: be,
          transition: te,
        }),
        E(Ae, {
          onExitComplete: () => {
            l(() => {
              (O(void 0), f?.start());
            });
          },
          children:
            x &&
            r &&
            b &&
            E(
              d,
              {
                children: S(
                  w(v, {
                    children: [
                      E(he.div, {
                        ...pe,
                        className: i,
                        onClick: ee,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: r.zIndex,
                          backgroundColor: r.backdrop ?? `transparent`,
                        },
                        transition: te,
                        initial: RE,
                        animate: zE,
                        exit: RE,
                      }),
                      E(he.div, {
                        ...pe,
                        className: i,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${me}px ${_e}px ${ge}px ${F}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: r.zIndex,
                        },
                        children: E(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: A,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: r.maxWidth,
                          },
                          children: E(he.div, {
                            layoutId: xe,
                            transition: te,
                            onClick: k,
                            className: `framer-lightbox-container`,
                            "data-border": de,
                            style: {
                              aspectRatio: A,
                              borderRadius: ne,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: re,
                              filter: ie,
                              ...fe,
                            },
                            children: E(eo, { image: b, alt: b.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  sh()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function hh(e) {
  let t = {};
  for (let n in e) (Re(n) || Oy(n)) && (t[n] = e[n]);
  return t;
}
function gh(e, t) {
  return HE && !t
    ? Document.parseHTMLUnsafe(e)
    : ((VE ??= new DOMParser()), VE.parseFromString(e, t ?? `text/html`));
}
function _h(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function vh(e, t, n, r) {
  return e.replace(UE, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Su(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Lm(f) || !Lm(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Ot(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = wu(u);
    if (!_ || L(_)) return e;
    Bu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(kC, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Jr(m, v)), i + o + `"${_h(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function yh(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function bh(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function xh(e, t, n) {
  let r = _([]);
  yh(r.current, e) ||
    ((r.current = e),
    Ny.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || q.current() !== q.canvas || (e > 0 && us(n.current));
    }));
}
function Sh() {
  return { current: null };
}
async function Ch(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function wh(e) {
  return e in qE;
}
function Th(e, t) {
  let n = {};
  for (let r in e) {
    if (!wh(r)) continue;
    let i = e[r],
      a = qE[r];
    qe(i) || qe(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Eh(e, t = `character`, n, r, i) {
  if (r) {
    let t = Sh();
    return (n.add(t), E(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return w(
          d,
          {
            children: [
              E(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(JE)?.map((e, t) => {
                  let r = Sh();
                  return (n.add(r), E(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Sh();
        return (
          n.add(o),
          w(
            d,
            { children: [E(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function Dh(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      V(t);
  }
}
function Oh(e) {
  let t = [];
  return (
    R(e.x) && t.push(`translateX(${e.x}px)`),
    R(e.y) && t.push(`translateY(${e.y}px)`),
    R(e.scale) && t.push(`scale(${e.scale})`),
    R(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    R(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    R(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    R(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    R(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function kh(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Oh(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Oh(n.effect),
              };
      }
    default:
      V(i);
  }
}
function Ah(e, t, n) {
  let r = Fa(() => new Set()),
    i = Ra(),
    a = n || !i,
    o = oe(),
    s = _({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let c = e?.trigger ?? `onMount`,
    l = e?.target,
    u = e?.threshold;
  N(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            Mh(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          V(t);
      }
    }
    switch (c) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? Be(n, e, { amount: u ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = l?.ref?.current;
        return t
          ? Be(t, e, {
              amount: u ?? 0,
              root: document,
              margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        V(c);
    }
  }, [a, r, n, t, l, u, c]);
  let d = !!e,
    f = e ? Dh(e) : void 0;
  return C(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !d)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = kh(a, n || jh(e, t, i), s.current.effect, o);
        return {
          text: (e) => Eh(e, f, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Sh();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            Mh(f, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            V(t);
        }
      },
    }),
    [a, d, r, n, f]
  );
}
function jh(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Mh(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Th(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await Nh(n, u);
      if (
        e === null ||
        (we(e, l, { ...r, restDelta: 0.001, delay: Ee(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        we(e, n, { ...r, restDelta: 0.001, delay: Ee(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Ch(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (Le.read(() => {
          ((e = Ph(n)),
            e.length !== 0 &&
              Le.update(() => {
                let t = e.map((e, t) =>
                  we(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          we(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      V(e);
  }
}
async function Nh(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Ch(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function Ph(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function Fh(e) {
  return e.type === d;
}
function Ih(e) {
  return e.type === `br`;
}
function Lh(e, t, n, r, i = {}, o, s = Fh(e) ? -1 : 0) {
  let c = m.toArray(e.props.children);
  qe(n) || (c = c.slice(0, 1));
  let l = !0;
  c = c.map((e) => {
    if (((!T(e) || !Ih(e)) && (l = !1), T(e))) return Lh(e, t, n, r, i, o, s + 1);
    let a = qe(n) ? e : n;
    return L(a) && o ? o.text(a) : a;
  });
  let { "data-preset-tag": u, ...d } = e.props;
  if (L(e.type) || me(e.type)) {
    let n = fe(e.type) || e.type,
      a = u || n,
      f = L(a) ? t?.[a] : void 0;
    ((d.className = Xc(`framer-text`, d.className, f)),
      o && s === 0 && !l && Object.assign(d, o.props(d.style)));
    let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (p && h) {
      let e = Rh(c, i);
      d.id = e;
      let t = Xc(`framer-text`, h),
        n = E(`a`, { href: `#${e}`, className: t, children: c });
      ((d.style = { ...d.style, scrollMarginTop: r }), (c = [n]));
    }
    a === `ol` &&
      (d.style = { ...d.style, [kb]: Bh(d.start ?? 1, m.count(d.children), d.style?.[Ob] ?? ``) });
  }
  return a(e, d, ...c);
}
function Rh(e, t) {
  let n = Rr(e.map(zh).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function zh(e) {
  return L(e) || R(e)
    ? e.toString()
    : T(e)
      ? zh(e.props.children)
      : Array.isArray(e)
        ? e.map(zh).join(``)
        : ``;
}
function Bh(e, t, n) {
  return Uo(Number(e) || 1, t, n);
}
function Vh(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = qi(n.x, n.y),
    i = Hy(qi(0.5, 0.5), r),
    a = J.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: qi.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  B(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !qi.isEqual(e, s) && !qi.isEqual(e, c));
  B(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = Hy.intersection(i, Hy(s, c)),
    f = Hy.intersection(i, Hy(l, u));
  return (B(d && f, `linearGradientLine: Must have a start and end point.`), Hy(d, f));
}
function Hh(e, t) {
  let n = Vh(e.angle),
    r = ys(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = Hy.pointAtPercentDistance(n, i),
    s = Hy.pointAtPercentDistance(n, a),
    c = ze([i, a], [0, 1]);
  return {
    id: `id${t}g${sx.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: tx.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function Uh(e, t) {
  return {
    id: `id${t}g${lx.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: ys(e).map((t) => ({
      color: t.value,
      alpha: tx.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function Wh(e) {
  if (!L(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return R(parseFloat(t));
}
function Gh(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return R(n) ? n : 50;
}
function Kh(e) {
  return Wh(e) ? Gh(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function qh(e) {
  return Wh(e) ? Gh(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function Jh(e, t, n, r) {
  if (((e = Jv.get(e, `#09F`)), !Vy.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * Kh(e.positionX) + f),
        (d = (t.height - l) * qh(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * qh(e.positionY)))
        : ((n = g), (u = (1 - g) * Kh(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function Yh(e) {
  return e.startsWith(`data:${nD}`);
}
function Xh(e, t) {
  if (/^\w+:/u.test(e) && !Yh(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = q.current() === q.export;
  return Ny.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function Zh(e, t) {
  return (N(() => cD.subscribeToTemplate(e), [e]), cD.template(e, t));
}
function Qh(e) {
  try {
    let t = gh(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function $h(e, t) {
  tg(e, eg(t));
}
function eg(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function tg(e, t) {
  (ng(e, t),
    Array.from(e.children).forEach((e) => {
      tg(e, t);
    }));
}
function ng(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function rg(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (lD[t[2]] || 1));
}
function ig(e) {
  let t = rg(e.getAttribute(`width`)),
    n = rg(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function ag(e) {
  return e.indexOf(`image`) >= 0;
}
function og(e) {
  return e.indexOf(`var(--`) >= 0;
}
function sg(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function cg(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? G,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = cD.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && yo(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    H(s) &&
    H(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function lg(e) {
  return e > mD ? `lazy` : void 0;
}
function ug(e, t, n) {
  let r = pg(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function dg(e) {
  return e ? (e.fonts ?? Si()) : Si();
}
function fg(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : pg(e);
}
function pg(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    mg(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(hg) })
      : t.fonts.push(hg(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function mg(e) {
  return gD in e;
}
function hg(e) {
  let t = gg(e) || _g(e) ? e : vg(e);
  return _g(t) ? t : yg(t);
}
function gg(e) {
  return `source` in e;
}
function _g(e) {
  return `cssFamilyName` in e;
}
function vg(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function yg(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${hD}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function bg(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
async function xg(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = K_({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function Sg(e) {
  return e.loader;
}
function Cg(e, t, n) {
  let r = Sg(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var wg,
  Tg,
  Eg,
  Dg,
  Og,
  kg,
  Ag,
  jg,
  Mg,
  Ng,
  Pg,
  Fg,
  Ig,
  Lg,
  Rg,
  zg,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  G,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  K,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  q,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  J,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  Y,
  pb,
  mb,
  hb,
  gb,
  X,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  Z,
  rT,
  iT,
  aT,
  oT,
  sT,
  Q,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  $,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D = e(() => {
    (o(),
      be(),
      j(),
      O(),
      g(),
      (wg = Se({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (Tg = Se({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (Eg = Se({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = Tg();
        },
      })),
      Se({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = Eg(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      }),
      Se({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= f),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function p(e) {
              return (
                l === null &&
                  (m(e) && /Apple/.test(f.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        f.navigator.userAgent
                      )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function m(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (m(a.context) && !p(a.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(h(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              f.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(l),
                          e(a)));
                    }
                    function p() {
                      if (new Date().getTime() - d >= u)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          n()),
                          (l = setTimeout(p, 50)));
                      }
                    }
                    var m = new r(s),
                      g = new r(s),
                      _ = new r(s),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      i(m, h(a, `sans-serif`)),
                      i(g, h(a, `serif`)),
                      i(_, h(a, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      a.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      o(m, function (e) {
                        ((v = e), n());
                      }),
                      i(m, h(a, `"` + a.family + `",sans-serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, h(a, `"` + a.family + `",serif`)),
                      o(_, function (e) {
                        ((b = e), n());
                      }),
                      i(_, h(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((f.FontFaceObserver = s),
                  (f.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      }),
      (Dg = () => {}),
      (Og = f !== void 0),
      (kg =
        Og &&
        (s.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent))),
      (Ag = Og && typeof f.requestIdleCallback == `function`),
      (jg = Ag ? f.requestIdleCallback : setTimeout),
      (Mg = () => Dg),
      (Ng = () => !0),
      (Pg = () => !1),
      (Fg = new Map()),
      (Ig = new Map()),
      (Lg = new Set()),
      (Rg = `:`),
      (zg = Og ? void 0 : new Set()),
      (Bg = `preload`),
      (Vg = Object.keys),
      (Hg = `equals`),
      (Ug = M.createContext({})),
      (Wg = M.createContext({})),
      (Gg = []),
      (Kg = `default`),
      (qg = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (Jg = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && rt(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = qg.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === qg.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === qg.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== qg.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && zg !== void 0 && zg.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = qg.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = qg.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Fg.has(this.cacheHash) ? Fg.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!$e(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === qg.Fulfilled) return this.value;
          throw this.promiseState === qg.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (Yg = -1),
      (Xg = -2),
      (Zg = -3),
      (Qg = -4),
      ($g = -5),
      (e_ = -6),
      (t_ = -7),
      (n_ = 2 ** 32 - 1),
      (r_ = n_ - 1),
      (i_ = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (a_ = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (o_ = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (s_ = typeof Uint8Array.fromBase64 == `function`),
      (c_ = typeof process == `object` && process.versions?.node !== void 0),
      (l_ = s_ ? Ut : c_ ? Gt : qt),
      (u_ = s_ ? Wt : c_ ? Kt : Jt),
      (d_ = Object.freeze({ kind: `not-plain` })),
      (f_ = Object.freeze({ kind: `symbol-keys` })),
      (p_ = Object.freeze({
        identify: (e) => e,
        typeOf: (e) => (e === null ? `null` : typeof e),
        toPrimitive: (e) => e,
        tagOf: (e) => Mt(e),
        isThenable: (e) => typeof e.then == `function`,
        toPromise: (e) => Promise.resolve(e),
        unbox: (e) => e.valueOf(),
        toISOString: (e) => (isNaN(e.getDate()) ? `` : e.toISOString()),
        toStringValue: (e) => e.toString(),
        regExpInfo: (e) => ({ source: e.source, flags: e.flags }),
        valuesOf: (e) => e,
        entriesOf: (e) => e,
        viewInfo: (e) => (
          Nt(e) && (e = new Uint8Array(e)),
          {
            buffer: e.buffer,
            byteOffset: e.byteOffset,
            byteLength: e.byteLength,
            length: e.length,
            bufferByteLength: e.buffer.byteLength,
          }
        ),
        toArrayBuffer: (e) => e,
        lengthOf: (e) => e.length,
        hasOwn: (e, t) => Object.hasOwn(e, t),
        indicesOf: (e) => Ht(e),
        shapeOf: (e) =>
          jt(e)
            ? It(e).length > 0
              ? f_
              : {
                  kind: Object.getPrototypeOf(e) === null ? `null-proto` : `plain`,
                  keys: Object.keys(e),
                }
            : d_,
        get: (e, t) => e[t],
      })),
      (m_ = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, `byteLength`).get),
      (h_ =
        typeof SharedArrayBuffer > `u`
          ? void 0
          : Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, `byteLength`).get),
      (g_ = Object.freeze({
        fromPrimitive: (e) => e,
        fromISOString: (e) => new Date(e),
        fromStringValue: (e, t) =>
          e === `URL`
            ? new URL(t)
            : e === `URLSearchParams`
              ? new URLSearchParams(t)
              : Temporal[e.slice(9)].from(t),
        fromArrayBuffer: (e) => e,
        fromRegExpInfo: (e, t) => new RegExp(e, t),
        fromViewInfo: (e, t, n, r) => {
          try {
            m_.call(t);
          } catch (e) {
            if (!h_) throw e;
            h_.call(t);
          }
          let i = globalThis[e];
          return n === void 0 ? new i(t) : new i(t, n, r);
        },
        box: (e) => Object(e),
        createArray: (e) => Array(e),
        createSparseArray: (e) => {
          let t = [];
          return ((t[r_] = void 0), delete t[r_], (t.length = e), t);
        },
        createObject: () => ({}),
        createNullPrototypeObject: () => Object.create(null),
        createSet: () => new Set(),
        createMap: () => new Map(),
        set: (e, t, n) => {
          e[t] = n;
        },
        addValue: (e, t) => {
          e.add(t);
        },
        addEntry: (e, t, n) => {
          e.set(t, n);
        },
      })),
      (G = Og
        ? f
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (__ = 2),
      (v_ = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (y_ = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (x_ = class {
        payload = rn();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return Qt(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (S_ = Og ? void 0 : new x_()),
      (C_ = y_.CollectionUtilsCache),
      (w_ = new WeakMap()),
      (T_ = k(void 0)),
      (E_ = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new Jg(async () => {
              try {
                let t = await e();
                return (B(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(tt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = cn(n),
            i = ln(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (S_ !== void 0) {
              if ($e(e)) return e.then((e) => (S_.set(C_, i, e), e));
              S_.set(C_, i, e);
            }
            return e;
          }
          if (on(C_, i)) {
            let e = sn(C_, i);
            return (this.cacheMap.set(i, new Jg(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = $e(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(tt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (S_ !== void 0 && S_.set(C_, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new Jg(async () => {
            try {
              let e = $e(s) ? await s : s;
              return (S_ !== void 0 && S_.set(C_, i, e), e);
            } catch (e) {
              console.error(tt(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (D_ = /Mac/u),
      (O_ = /iPhone|iPod|iPad/iu),
      (k_ = /MacIntel/iu),
      (A_ = /Edg\//u),
      (j_ = /Chrome/u),
      (M_ = /Google Inc/u),
      (N_ = /Safari/u),
      (P_ = /Apple Computer/u),
      (F_ = /Firefox\/\d+\.\d+$/u),
      (I_ = /Version\/([\d.]+)/u),
      (L_ = /FramerX/u),
      (R_ = /tablet|iPad|Nexus 9/iu),
      (z_ = /mobi/iu),
      (B_ = 1e3 / 60),
      (V_ = 1e3 / 25),
      (H_ = 500),
      (U_ = Promise.resolve()),
      (W_ = 100),
      (G_ = (e) => {
        Le.read(e, !1, !0);
      }),
      (K_ = Pn(G_)),
      (q_ = `framer_variant`),
      (J_ = RegExp(`:([a-z]\\w*)`, `gi`)),
      (Y_ = async () => {}),
      (X_ = { contentLocale: null, activeLocale: null, locales: [], setLocale: Y_ }),
      (Z_ = (() => {
        let e = M.createContext(X_);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Q_ = (() => {
        let e = M.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      ($_ = !kg),
      (ev = !1),
      (tv = M.createContext({ global: void 0, routes: {} })),
      (nv = 10),
      (rv = 1e4),
      (iv = (e) => `--view-transition-${e}`),
      (av = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${iv(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${iv(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${iv(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (ov = {
        circle: {
          makeKeyframe: (e, t) => `${iv(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${iv(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${rr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${iv(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: av,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${nr(e.x)} ${nr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = er(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${iv(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${iv(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${iv(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${iv(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${iv(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${iv(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (sv = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (cv = `view-transition-styles`),
      (lv = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (uv = () => {}),
      (fv = () => {
        let e = document.title;
        if (e) {
          if (document.ariaNotify) {
            document.ariaNotify(e, { priority: `high` });
            return;
          }
          (dv ||
            ((dv = document.createElement(`div`)),
            dv.setAttribute(`aria-live`, `assertive`),
            dv.setAttribute(`aria-atomic`, `true`),
            (dv.style.position = `absolute`),
            (dv.style.transform = `scale(0)`),
            document.body.append(dv)),
            setTimeout(() => {
              dv.textContent = e;
            }, 60));
        }
      }),
      (mv =
        Og &&
        typeof f.navigation?.back == `function` &&
        !(() => {
          if (s === void 0) return !1;
          let e = s.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !bn()),
      (hv = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (gv = M.createContext(null)),
      (_v = (() => {
        let e = k(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (vv = typeof document < `u` ? i : N),
      (yv = new Set()),
      (bv = (() => {
        let e = k({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (xv = 46),
      (Sv = 47),
      (Cv = (e, t) => e.charCodeAt(t)),
      (wv = (e, t) => e.lastIndexOf(t)),
      (Tv = (e, t, n) => e.slice(t, n)),
      (Ev = !1),
      (Dv = `/`),
      (Ov = (e) => e === Sv),
      (kv = new Set([`/404.html`, `/404`, `/404/`])),
      (Av = `__f_replay`),
      (jv = `__f_replay_ignore`),
      (Mv = `data-framer-form-hydrated`),
      (Nv = `data-framer-form-pending-submit`),
      (Pv = () => Og),
      (Fv =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Iv = (e) => {
        e.target?.closest?.(`#main`) &&
          (ci(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Lv = !1),
      (Rv = class {
        markRenderStart = pi(() => {
          performance.mark(`framer-hydration-start`);
        });
        markRenderEnd = pi(() => {
          (performance.mark(`framer-hydration-render-end`),
            mi(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        });
        markUseInsertionEffectsStart = pi(() => {
          performance.mark(`framer-hydration-insertion-effects-start`);
        });
        markUseInsertionEffectRouterStart = pi(() => {
          performance.mark(`framer-hydration-router-insertion-effect`);
        });
        markUseInsertionEffectsEnd = pi(() => {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            mi(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        });
        markUseLayoutEffectsStart = pi(() => {
          performance.mark(`framer-hydration-layout-effects-start`);
        });
        markRouterUseLayoutEffectStart = pi(() => {
          performance.mark(`framer-hydration-router-layout-effect`);
        });
        markUseLayoutEffectsEnd = pi(() => {
          (performance.mark(`framer-hydration-layout-effects-end`),
            mi(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        });
        markUseEffectsStart = pi(() => {
          performance.mark(`framer-hydration-effects-start`);
        });
        markUseEffectsRouterStart = pi(() => {
          performance.mark(`framer-hydration-router-effect`);
        });
        markUseEffectsAreSynchronous = pi(() => {
          performance.mark(`framer-hydration-effects-sync`);
        });
        markUseEffectsEnd = pi(() => {
          (performance.mark(`framer-hydration-effects-end`),
            mi(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        });
        markRafStart = pi(() => {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        });
        markRafEnd = pi(() => {
          (performance.mark(`framer-hydration-browser-raf-end`),
            mi(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        });
        markLayoutStylePaintEnd = pi(() => {
          (performance.mark(`framer-hydration-first-paint`),
            mi(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            mi(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        });
        measureMutationEffects = pi(() => {
          mi(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        });
        measureUnattributedHydrationOverhead = pi(() => {
          mi(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        });
        render = { markStart: () => this.markRenderStart(), markEnd: () => this.markRenderEnd() };
        mutationEffects = { measure: () => this.measureMutationEffects() };
        useInsertionEffects = {
          markStart: () => this.markUseInsertionEffectsStart(),
          markRouterStart: () => this.markUseInsertionEffectRouterStart(),
          markEnd: () => this.markUseInsertionEffectsEnd(),
        };
        useLayoutEffects = {
          markStart: () => this.markUseLayoutEffectsStart(),
          markRouterStart: () => this.markRouterUseLayoutEffectStart(),
          markEnd: () => this.markUseLayoutEffectsEnd(),
        };
        useEffects = {
          markStart: () => this.markUseEffectsStart(),
          markRouterStart: () => this.markUseEffectsRouterStart(),
          markEnd: () => this.markUseEffectsEnd(),
          markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
        };
        browserRendering = {
          hasStarted: !1,
          requestAnimationFrame: {
            markStart: () => this.markRafStart(),
            markEnd: () => this.markRafEnd(),
          },
          layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
        };
        unattributedHydrationOverhead = {
          measure: () => this.measureUnattributedHydrationOverhead(),
        };
      }),
      (Bv = !1),
      (Vv = { Start: yi, End: bi }),
      (Hv = class extends Error {}),
      (Uv = class extends b {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof Hv)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return xi(e, t);
        }
      }),
      (Wv = Object.freeze([])),
      (Kv = new Set()),
      (qv = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (Jv = (() => {
        function e(e) {
          return (
            Vi(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Hi(e) ? e : new Zv(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Hi(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Hi(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (Yv = `onUpdate`),
      (Xv = `finishTransaction`),
      (Zv = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new qv();
        static interpolationFor(e, t) {
          if (Hi(e)) return Ui(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Hi(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Gi(e.x, t.x), y: Gi(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((qi ||= {})),
      (Qv = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      ($v = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      ($v.hexChars = `0123456789abcdef`),
      ($v.refY = 1),
      ($v.refU = 0.19783000664283),
      ($v.refV = 0.46831999493879),
      ($v.kappa = 903.2962962),
      ($v.epsilon = 0.0088564516),
      ($v.m_r0 = 3.240969941904521),
      ($v.m_r1 = -1.537383177570093),
      ($v.m_r2 = -0.498610760293),
      ($v.m_g0 = -0.96924363628087),
      ($v.m_g1 = 1.87596750150772),
      ($v.m_g2 = 0.041555057407175),
      ($v.m_b0 = 0.055630079696993),
      ($v.m_b1 = -0.20397695888897),
      ($v.m_b2 = 1.056971514242878),
      (ey = new $v()),
      (ty = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (ny =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (ry = (e) => {
        let { r: t, g: n, b: r, a: i } = _a(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (iy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ya({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (ay = (e) => {
        let { r: t, g: n, b: r, a: i } = _a(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (oy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ya({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (sy = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return ba(this);
        }
        rgb() {
          return wa(this);
        }
        hsl() {
          return ra(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Sa(t));
            case `srgb`:
              return new e(Ca(Sa(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Ca({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = K(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = ha(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!L(t) || !K.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (cy = new Map()),
      (K = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = cy.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (cy.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Ta(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && fa(e) !== !1),
          (e.isColorObject = (e) =>
            z(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => na(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && sy.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...Qi(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = oa(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = oa(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = na(e.r, e.g, e.b, !0);
            for (let e of Object.keys(Qv)) if (Qv[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Ji(i, [0, 1], [t.r, r.r], a),
                g: Ji(i, [0, 1], [t.g, r.g], a),
                b: Ji(i, [0, 1], [t.b, r.b], a),
                a: Ji(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Ji(i, [0, 1], [u, u + f], a),
                s: Ji(i, [0, 1], [c.s, l.s], a),
                l: Ji(i, [0, 1], [c.l, l.l], a),
                a: Ji(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e($i(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => ra(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (ly = (e) => e instanceof Fe),
      (uy = wg().EventEmitter),
      (dy = class {
        _emitter = new uy();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (fy = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (py = G.requestAnimationFrame || fy),
      (my = (e) => py(e)),
      (hy = 1 / 60),
      (gy = class extends dy {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          hy = e;
        }
        static get TimeStep() {
          return hy;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), my(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * hy;
        }
        tick = () => {
          this._started &&
            (my(this.tick),
            this.emit(`update`, this._frame, hy),
            this.emit(`render`, this._frame, hy),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (_y = new gy()),
      (vy = { target: ja() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (q = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => vy.target,
        hasRestrictions: () => {
          let e = vy.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (yy = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      ke({
        borderTopWidth: yy(`y`),
        borderLeftWidth: yy(`x`),
        borderRightWidth: yy(`x`),
        borderBottomWidth: yy(`y`),
      }),
      (by = M.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (xy = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (Sy = {
        ...xy,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (Cy = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (wy = { ...Cy, fontWeight: 500 }),
      (Ty = {
        ...Cy,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Ey = (e) => e),
      (Dy =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Oy = Ba(
        (e) =>
          Dy.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (ky = (e) => () => {
        Bi(e);
      }),
      (Ay = () => () => {}),
      (jy = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = Ny.useImageSource(e, t, n);
          return C(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        fontStore: {
          isSelectorLoaded() {
            return !0;
          },
          async loadFonts() {
            return { newlyLoadedFontCount: 0 };
          },
          async loadWebFontsFromSelectors() {
            return [];
          },
          async loadMissingFonts() {},
        },
        isOnPageCanvas: !1,
      }),
      (My = !1),
      (Ny = new Proxy(jy, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? Ay()
              : ky(
                  My
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (Py = {
        isSelectorLoaded(e) {
          return Ny.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return Ny.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return Ny.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return Ny.fontStore.loadMissingFonts(e, t);
        },
      }),
      (Fy = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Iy = [1, 2, 2.2]),
      (Ly = [512, 1024, 2048, 4096]),
      (Ry = 512),
      (zy = { position: `absolute`, ...Fy, top: 0, right: 0, bottom: 0, left: 0 }),
      (By = `src`),
      (Vy = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && By in e;
        },
      }),
      (Hy = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = co(qi.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(qi(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => qi.distance(e.a, e.b)),
          e
        );
      })()),
      (J = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => J.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: Wi(e.x, t),
          y: Wi(e.y, t),
          width: Wi(e.width, t),
          height: Wi(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: J.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: J.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: qi.distance(t, n), height: qi.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(J.minX)), y: Math.min(...e.map(J.minY)) },
            n = { x: Math.max(...e.map(J.maxX)), y: Math.max(...e.map(J.maxY)) };
          return J.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: J.minX(e), y: J.minY(e) },
          { x: J.minX(e), y: J.maxY(e) },
          { x: J.maxX(e), y: J.minY(e) },
          { x: J.maxX(e), y: J.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < J.minX(e) ||
            t.x > J.maxX(e) ||
            t.y < J.minY(e) ||
            t.y > J.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of J.points(t)) if (!J.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= J.maxX(e) || J.maxX(t) <= e.x || t.y >= J.maxY(e) || J.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = J.maxX(e),
            r = J.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = J.maxY(e),
            r = J.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => !t.some((t) => J.intersects(t, e)),
        isEqual: (e, t) => J.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > J.maxX(e) && (n = t.x - J.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > J.maxY(e) && (r = t.y - J.maxY(e)),
            qi.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: J.minX(e), y: J.minY(e) },
            r = { x: J.minX(t), y: J.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = J.minX(e),
            r = J.minY(e),
            i = J.maxX(e),
            a = J.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = J.cornerPoints(e);
          return [Hy(t, n), Hy(n, r), Hy(r, i), Hy(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  V(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              V(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  V(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              V(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Hy(t, J.center(e)),
            r = J.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Hy.intersection(n, t, !0)) {
              let n = Uy[e];
              return (B(n, () => `Invalid edge name: ${JSON.stringify(Uy)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          B(r, `Rect array is empty`);
          let i = J.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            B(o);
            let s = J.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Uy = [`top`, `right`, `bottom`, `left`]),
      (Wy = {
        quickfix: (e) => (
          (lo(e.widthType) || lo(e.heightType)) && (e.aspectRatio = null),
          H(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || lo(e.widthType) || H(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || lo(e.heightType) || H(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Gy = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = Wy.quickfix({
              left: H(t) || Hi(t),
              right: H(n) || Hi(n),
              top: H(r) || Hi(r),
              bottom: H(i) || Hi(i),
              widthType: uo(a),
              heightType: uo(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = Jv.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Jv.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Jv.getNumber(t) : null,
              right: d.right ? Jv.getNumber(n) : null,
              top: d.top ? Jv.getNumber(r) : null,
              bottom: d.bottom ? Jv.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? Jv.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Jv.getNumber(t?.sizing.height) : null,
            c = _o(e.left, e.right);
          if (o && H(c)) i = o - c;
          else if (n && lo(e.widthType)) i = n.width;
          else if (H(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                V(e.widthType);
            }
          let l = _o(e.top, e.bottom);
          if (s && H(l)) a = s - l;
          else if (n && lo(e.heightType)) a = n.height;
          else if (H(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                V(e.heightType);
            }
          return go(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Gy.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Jv.getNumber(l.width) : null,
            d = l ? Jv.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? J.pixelAligned(f) : f;
        },
      }),
      (Ky = 200),
      (qy = 200),
      (Jy = M.createContext({ parentSize: 0 })),
      (Yy = (e) => {
        let t = To(),
          { parentSize: n, children: r } = e,
          i = M.useMemo(() => ({ parentSize: n }), [Do(n), Oo(n)]);
        return t === 1
          ? r
            ? E(v, { children: r })
            : null
          : E(Jy.Provider, { value: i, children: r });
      }),
      (Xy = M.createContext(void 0)),
      (Zy = new Set()),
      (eb = `style[data-framer-css-ssr-minified]`),
      (tb = (() => {
        if (!Sn()) return new Set();
        let e = document.querySelector(eb)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (nb = `data-framer-css-ssr`),
      (rb = (e, t, n) => (
        Io() &&
          n !== void 0 &&
          !Ue(t) &&
          Lo(
            n,
            (Array.isArray(t)
              ? t
              : t.split(`
`)
            ).filter(Boolean)
          ),
        M.forwardRef((r, i) => {
          let { sheet: a, cache: o } = M.useContext(Xy) ?? {},
            s = n;
          if (!Sn()) {
            Ue(t) && (t = t(Ro(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            ab.add(e, s);
          }
          return (
            c(() => {
              (s && tb.has(s)) ||
                (Ue(t)
                  ? t(Ro(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Fo(e, a, o));
            }, []),
            E(e, { ...r, ref: i })
          );
        })
      )),
      (ib = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (ab = new ib()),
      (ob = `--framer-will-change-override`),
      (sb = `--framer-will-change-effect-override`),
      (cb = `--framer-will-change-filter-override`),
      (lb = `--overflow-clip-fallback`),
      (ub = `--one-if-corner-shape-supported`),
      (db = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (fb = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(fb || {})),
      (Y = fb),
      (pb = `framer-form-input`),
      (mb = `framer-form-input-wrapper`),
      (hb = `framer-form-input-empty`),
      (gb = `framer-form-input-forced-focus`),
      (X = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (B(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${zo(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            B(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (_b = [
        X(`.${pb}`, {
          padding: X.variable(Y.Padding),
          background: `transparent`,
          fontFamily: X.variable(Y.FontFamily),
          fontWeight: X.variable(Y.FontWeight),
          fontSize: X.variable(Y.FontSize),
          fontStyle: X.variable(Y.FontStyle),
          color: X.variable(Y.FontColor),
          fontFeatureSettings: X.variable(Y.FontOpenType),
          fontVariationSettings: X.variable(Y.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: X.variable(Y.WrapperHeight, `100%`),
          letterSpacing: X.variable(Y.FontLetterSpacing),
          textAlign: X.variable(Y.FontTextAlignment),
          lineHeight: X.variable(Y.FontLineHeight),
        }),
        X(`.${pb}:focus-visible`, { outline: `none` }),
      ]),
      (vb = [X(`.${mb}`, { overflow: `hidden` })]),
      (yb = `var(${Y.BorderTopWidth}) var(${Y.BorderRightWidth}) var(${Y.BorderBottomWidth}) var(${Y.BorderLeftWidth})`),
      (bb = [
        `.${mb}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${Y.BorderRadiusTopLeft});
        border-top-right-radius: var(${Y.BorderRadiusTopRight});
        border-bottom-right-radius: var(${Y.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${Y.BorderRadiusBottomLeft});
        corner-shape: var(${Y.CornerShape});
        border-color: var(${Y.BorderColor});
        border-top-width: var(${Y.BorderTopWidth});
        border-right-width: var(${Y.BorderRightWidth});
        border-bottom-width: var(${Y.BorderBottomWidth});
        border-left-width: var(${Y.BorderLeftWidth});
        border-style: var(${Y.BorderStyle});
        transition: var(${Y.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (xb = `customError`),
      (Sb = `valid`),
      (Cb = 10),
      (wb = 8),
      (Tb = 16),
      (Eb = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${Tb}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${Tb}px`,
        backgroundColor: X.variable(Y.IconColor),
      }),
      (Db = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${Tb}px`,
        boxSizing: `content-box`,
        padding: X.variable(Y.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...Eb,
      }),
      (Ob = `--list-style-type`),
      (kb = `--max-list-digits`),
      (Ab = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (jb = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Mb = { display: `inline-block` }),
      (Nb = { display: `block` }),
      (Pb = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${jb.display};
            flex-direction: ${jb.flexDirection};
            justify-content: ${jb.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Jo([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Jo([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Jo([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${Mb.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Jo([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Jo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Jo([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Jo([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Jo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        /* Linked images keep the radius and padding of their image style. */
        a.framer-text:where(:not(.framer-image)):hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Jo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Jo([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Jo([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Jo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Jo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Jo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Jo([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Jo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Jo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Jo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Jo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Jo([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Jo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Jo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${Nb.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        /* A linked image gets its image style on both the link and the image; only the image draws the border and shadow. */
        a.framer-image.framer-text {
            border: none;
            box-shadow: none;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${kb}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${Yo(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (Fb = `--text-truncation-display-inline-for-safari-16`),
      (Ib = `--text-truncation-display-none-for-safari-16`),
      (Lb = `--text-truncation-line-break-for-safari-16`),
      (Rb = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (zb = `(background: -webkit-named-image(i))`),
      (Bb = `(contain-intrinsic-size: inherit)`),
      (Vb = [
        `@supports ${zb} and (not ${Bb}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${Rb.join(`, `)} { display: var(${Fb}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${Rb.map((e) => `${e}::after`).join(`, `)} { content: var(${Lb}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Ib}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${Fb}, ${Mb.display}) }
    }`,
      ]),
      (Hb = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${ob}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${ob}: transform; } }`,
                ]
              : [`body { ${ob}: none; ${sb}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${cb}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${cb}: filter; } }`,
                ]
              : [`body { ${cb}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${lb}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${ub}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...Pb,
          ...db,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...Vb,
          f,
        ];
      }),
      (Ub = Po(() => Hb(!1))),
      (Wb = Po(() => Hb(!0))),
      (Gb = yn()),
      (Kb = M.createContext(!1)),
      (qb = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (Jb = Sn() ? new qb() : void 0),
      (Yb = `data-framer-size-compatibility-wrapper`),
      (Xb = `0.000001px`),
      (Zb = ` translateZ(${Xb})`),
      (Qb = wn() || bn() || Tn()),
      ($b = (() => {
        class e extends b {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? ds(t) : fs(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !yt(this.props, e);
          }
          componentDidUpdate(e) {
            Ey(this.props).clip &&
              Ey(this.props).radius === 0 &&
              Ey(e).radius !== 0 &&
              ms(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (ex = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (tx = {
        hueRotate: (e, t) => K.toHslString(K.hueRotate(K(e), t)),
        setAlpha: (e, t) => K.toRgbString(K.alpha(K(e), t)),
        getAlpha: (e) => {
          let t = fa(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => K.toRgbString(K.multiplyAlpha(K(e), t)),
        toHexValue: (e) => K.toHex(K(e)).toUpperCase(),
        toHex: (e) => K.toHexString(K(e)).toUpperCase(),
        toRgb: (e) => K.toRgb(K(e)),
        toRgbString: (e) => K.toRgbString(K(e)),
        toHSV: (e) => K.toHsv(K(e)),
        toHSL: (e) => K.toHsl(K(e)),
        toHslString: (e) => K.toHslString(K(e)),
        toHsvString: (e) => K.toHsvString(K(e)),
        hsvToHSLString: (e) => K.toHslString(K(ea(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => K.toHex(K(ea(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => K.toHexString(K(ea(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => K.toRgbString(K(ea(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => ea(e.h, e.s, e.v),
        rgbaToString: (e) => K.toRgbString(K(e)),
        rgbToHexValue: (e) => K.toHex(K(e)),
        rgbToHexString: (e) => K.toHexString(K(e)),
        hslToString: (e) => K.toHslString(K(e)),
        hslToRgbString: (e) => K.toRgbString(K(e)),
        toColorPickerSquare: (e) => K.toRgbString(K({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => K(e).isValid !== !1,
        equals: (e, t) =>
          K.isP3String(e) || K.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = K(e)),
              typeof t == `string` && (t = K(t)),
              K.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = K(e);
          return t.a === 1 ? K.toHexString(t) : K.toRgbString(t);
        },
        toFormatString: (e) => (K.isP3String(e) ? e : K.toRgbString(K(e))),
      }),
      (nx = /var\(.+\)/u),
      (rx = new Map()),
      (ix = [`stops`]),
      (ax = [`start`, `end`]),
      (ox = [`angle`, `alpha`]),
      (sx = {
        isLinearGradient: (e) => z(e) && ox.every((t) => t in e) && (Ss(e) || xs(e)),
        hash: (e) => e.angle ^ bs(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = ys(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (cx = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (lx = {
        isRadialGradient: (e) => z(e) && cx.every((t) => t in e) && (Ss(e) || xs(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ bs(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = ys(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (ux = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (dx = new Set([...ux, ...ux.map((e) => `${e}Capture`)])),
      (fx = `overflow`),
      (px = { x: 0, y: 0, width: 200, height: 200 }),
      (mx = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (hx = D(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: l } = ts(e),
          u = Ns(c),
          d = rs(e),
          f = Os(e),
          p = _(null),
          m = n ?? p,
          h = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": f,
            "data-framer-highlight": f === `pointer` || void 0,
            "data-layoutid": d,
            "data-framer-offset-parent-id": Ey(e)[`data-framer-offset-parent-id`],
          };
        !Ps(e) && r && (Ey(h)[`data-framer-name`] = r);
        let [g, y] = Ms(c),
          b = js(c),
          x = jo(b),
          S = i && !(y && !x && yo(b)) ? i : void 0;
        (S ? (u.transformTemplate ||= ns(i)) : (u.transformTemplate ||= void 0),
          Object.assign(h, $o(S, c.style)),
          ls(e, m));
        let C = io(e),
          T = Fs(c, b, y, t(Kb)),
          D = ko(
            w(v, {
              children: [
                C
                  ? E(eo, {
                      alt: e.alt ?? ``,
                      image: C,
                      containerSize: y ?? void 0,
                      nodeId: e.id && es(e.id),
                      layoutId: d,
                    })
                  : null,
                l,
                E(no, { ...o, border: a, layoutId: d }),
              ],
            }),
            T
          ),
          O = No(e.as),
          k = Mo(C);
        return (
          e.fitImageDimension &&
            k &&
            ((g[e.fitImageDimension] = `auto`), (g.aspectRatio = k.width / k.height)),
          w(O, { ...h, ...u, layoutId: d, style: g, ref: m, children: [D, s] })
        );
      })),
      (gx = Zo(
        D(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? E(hx, { ...e, ref: t }) : null;
        })
      )),
      (_x = `__LAYOUT_TREE_ROOT`),
      (vx = M.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (yx = class extends b {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === _x && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return E(vx.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (bx = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (xx = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (Sx = k(new Map())),
      (Cx = typeof IntersectionObserver > `u` ? Dg : Us),
      (wx = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (Tx = M.createContext(null)),
      (Ex = class extends b {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === _x && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return E(Oe.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (Dx = (e) => {
        let t = M.useContext(vx);
        return E(Ex, { ...e, sharedLayoutContext: t });
      }),
      (Ox = M.createContext(!0)),
      (kx = k({ register: () => {}, deregister: () => {} })),
      (Ax = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = Ys(),
          i = _({
            register: u(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: u(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          N(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, Ue(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          E(kx.Provider, { value: i, children: n })
        );
      }),
      (jx = M.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: c,
        onTapBackdrop: l,
        backfaceVisible: u,
        exitBackfaceVisible: d,
        animation: f,
        exitAnimation: p,
        instant: m,
        initialProps: h,
        exitProps: g,
        position: v = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: y,
        index: b,
        areMagicMotionLayersPresent: x,
        id: S,
        isInitial: C,
      }) {
        let T = ie(),
          D = t(xe),
          { persistLayoutIdCache: O } = t(by),
          k = _({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Qs({}, h, o),
          }),
          A = _(null),
          j = D !== null && !D.isPresent;
        (n && k.current.wasCurrent === void 0 && O(),
          N(() => {
            if (e || !T) return;
            if (j) {
              k.current = { ...k.current, wasBeingRemoved: j };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = k.current,
              a = (n && !i) || (!j && k.current.wasBeingRemoved && n),
              s = r && !t,
              c = Qs(k.current.origins, h, o),
              l = k.current.wasReset;
            (a || s
              ? (T.stop(), T.start({ zIndex: b, ...c, ...o }), (l = !1))
              : l === !1 && (T.stop(), T.set({ zIndex: b, ...Mx, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, j]));
        let M = m ? { type: !1 } : `velocity` in f ? { ...f, velocity: 0 } : f,
          ee = m ? { type: !1 } : p || f,
          P = { ...v };
        ((P.left === void 0 || P.right === void 0) && (P.width = `auto`),
          (P.top === void 0 || P.bottom === void 0) && (P.height = `auto`));
        let te = ($s(o) || $s(h)) && (e || n || r) ? 1200 : void 0,
          ne = { ...Mx, ...k.current.origins },
          re = e
            ? {
                initial: { ...ne, ...h },
                animate: { ...ne, ...o, transition: M },
                exit: { ...ne, ...g, transition: f },
              }
            : { animate: T, exit: { ...ne, ...g, transition: ee } },
          ae = !(j || x === !1),
          oe = !!n && ae,
          se = n && C;
        return w(gx, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || j || (n && y) ? b : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: te,
          },
          children: [
            e &&
              E(gx, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: f,
                initial: { opacity: m && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: c || `transparent`,
                onTap: j ? void 0 : l,
              }),
            E(gx, {
              ...P,
              ...re,
              transition: {
                default: M,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: j ? d : u,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: se || e || (n && y) ? 1 : 0 },
              "data-is-present": ae ? void 0 : !1,
              ref: A,
              children: E(Tx.Provider, {
                value: A,
                children: E(Ox.Provider, {
                  value: oe,
                  children: E(Ax, {
                    isCurrent: oe,
                    isOverlayed: i,
                    children: E(Dx, {
                      isLead: n,
                      animatesLayout: !!y,
                      transition: M,
                      isExiting: !ae,
                      isOverlayed: i,
                      id: S,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, Zs)),
      (Mx = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (Nx = class {
        warning = () => {
          Bi(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (Px = k(new Nx())),
      (Fx = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (Ix = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (Lx = Vg(Mx)),
      (Rx = M.createContext(void 0)),
      (zx = M.createContext(void 0)),
      (Bx = (() => {
        class e extends b {
          #e = null;
          state = Ix();
          static defaultProps = { enabled: !0 };
          static contextType = Rx;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !so(t) || !oo(t)) return;
            let n = { ...Fx.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = rc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!so(t) || !oo(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, Fx.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = rc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !so(e) || !oo(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, Fx.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, Fx.Fade, t);
          }
          push(e, t) {
            this.#i(e, ec(t), t);
          }
          modal(e, t) {
            this.#i(e, Fx.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, tc(t), t);
          }
          flip(e, t) {
            this.#i(e, nc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, Fx.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = vc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              B(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              B(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                E(
                  jx,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: Oc(o, e),
                    transitionProps: u,
                    animation: Dc(o, e),
                    backfaceVisible: Tc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: E(Is, { children: Ac({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              E(
                jx,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: wc(n, t),
                  transitionProps: Ec(n, t),
                  instant: Oc(n, t, !0),
                  animation: Dc(n, t),
                  exitProps: e.transition.enter,
                  visible: kc(n, t),
                  backdropColor: Sc(e.transition),
                  backfaceVisible: Cc(n, t),
                  onTapBackdrop: jc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: Ac({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return E(gx, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: E(Px.Provider, {
                value: this,
                children: w(zx.Provider, {
                  value: i,
                  children: [
                    E(jx, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: yc(n),
                      animation: bc(n),
                      backfaceVisible: xc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: E(Ma, {
                        children: E(yx, {
                          children: E(Ae, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    E(Ae, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (Vx = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (Hx = Zo(M.forwardRef(Mc))),
      (Ux = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.MotionValue = `motionvalue`),
        (e.Dimension = `dimension`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(Ux || {})),
      (Wx = `optional`),
      (Gx = `outputControls`),
      (Kx = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (qx = Symbol(`private`)),
      (Jx = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [qx]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new qv(),
                reset() {
                  for (let t in i)
                    if (Kx(i, t)) {
                      let n = Kx(e, t) ? Ey(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, Xx);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[qx].reset()),
          (e.addObserver = (e, t) => e[qx].observers.add(t)),
          e
        );
      })()),
      (Yx = class {
        set = (e, t, n, r) => {
          if (t === qx) return !1;
          let i = e[qx],
            a,
            o;
          if (
            (Hi(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = Jv(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = Ey(e)[t];
          if (l !== void 0) {
            Hi(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Ey(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === qx) return Ey(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[qx].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(qx);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== qx) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (Xx = new Yx()),
      (Zx = `opacity`),
      (Qx = (() => {
        function e(t = {}) {
          let n = Jx(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => Jx.resetObject(e));
          }),
          (e.addObserver = (e, t) => Jx.addObserver(e, t)),
          e
        );
      })()),
      ($x = { update: 0 }),
      (eS = M.createContext({ update: NaN })),
      (tS = class extends b {
        observers = [];
        state = $x;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), _y.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), Qx.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            Qx._stores.forEach((e) => {
              let t = Qx.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            E(eS.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      (nS = `__framer__`),
      (rS = nS.length),
      (iS = M.createContext(void 0)),
      (aS = M.createContext(void 0)),
      (oS = `ssr-variant`),
      (sS = `ssr-variant-group-separator`),
      (cS = M.forwardRef(function (e, t) {
        let n = $c(t),
          r = M.useContext(aS),
          i = M.useSyncExternalStore(Mg, Pg, Ng),
          a = Fa(() => (i ? (Sn() ? 1 : 2) : 0)),
          o = M.useContext(iS);
        return Vr(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, sl(t, c, i));
            case 1:
              return nl(i, s, c, u, l, d, n, t);
            case 2:
              return nl(i, s, c, u, l, d, Qc, void 0);
            default:
              V(a);
          }
        }, [o, r, n, e]);
      })),
      (lS = rb(cS, `.${oS} { display: contents }`, `PropertyOverrides`)),
      (uS = `default`),
      (dS = new Set([uS])),
      (fS = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (B(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (B(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = uS, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return uS;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = rl(r)) : uS;
        }
        setAll(e, t = dS, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Ue(n.transformTemplate) ? n.transformTemplate?.({}, mS) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: z(a) ? a : void 0,
              animate: z(o) ? o : void 0,
              transformTemplate: L(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (pS = new fS()),
      (mS = `__Appear_Animation_Transform__`),
      (hS = `data-framer-appear-id`),
      (gS = `data-framer-appear-animation`),
      (_S = (e) => {
        if (Ra())
          return {
            animate: ll(e.animate) ? e.animate : void 0,
            initial: ll(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (vS = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (yS = (e) => ({
        x: re(e?.x ?? 0),
        y: re(e?.y ?? 0),
        opacity: re(e?.opacity ?? 1),
        scale: re(e?.scale ?? 1),
        rotate: re(e?.rotate ?? 0),
        rotateX: re(e?.rotateX ?? 0),
        rotateY: re(e?.rotateY ?? 0),
        skewX: re(e?.skewX ?? 0),
        skewY: re(e?.skewY ?? 0),
        transformPerspective: re(e?.transformPerspective ?? 0),
      })),
      (bS = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (xS = Object.freeze({ willChange: `transform` })),
      (SS = Object.freeze({})),
      (CS = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (wS = () => {
        let e = _();
        return (
          N(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (TS = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (ES = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (DS = 1),
      (OS = 4),
      (kS = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (AS = [`animate`, `animate`]),
      (jS = { inputRange: [], outputRange: [] }),
      (MS = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (NS = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (PS = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (FS = [0, 1]),
      (IS = { parallax: TS, styleAppear: kS, styleTransform: MS, loop: CS, presence: ES }),
      (LS = Vg(IS)),
      (RS = (e) => e.reduce((e, t) => (e += t), 0)),
      (zS = (e) => e.reduce((e, t) => (e *= t), 1)),
      (BS = `current`),
      (VS = (e) =>
        M.forwardRef((t, n) => {
          let r = !me(e);
          if (t.__withFX) {
            let i = { ...t };
            return (
              r || Reflect.deleteProperty(i, `__withFX`),
              E(e, { ...i, animate: void 0, initial: void 0, exit: void 0, ref: n })
            );
          }
          let i = _S(t);
          if (i) return E(e, { ...Ml(t).forwardedProps, ...i, ref: n });
          let {
              parallax: a = {},
              styleAppear: o = {},
              styleTransform: s = {},
              presence: c = {},
              loop: l = {},
              forwardedProps: u,
              targetOpacityValue: d,
              withPerspective: f,
              inSmartComponent: p = !1,
            } = Ml(t),
            m = Bs(n),
            { values: h, style: g } = vl(c, m, p, t.style, t[ne]),
            { values: _, style: v } = ml(a, m, t.style?.visibility),
            { values: y, style: b } = Al(s, m),
            { values: x, style: S } = El(o, m),
            { values: C, style: w } = fl(l, m),
            T = M.useMemo(() => {
              let e = new Fe(d ?? 1);
              return {
                scale: [x.scale, C.scale, h.scale, y.scale],
                opacity: [x.opacity, C.opacity, h.opacity, e, y.opacity],
                x: [x.x, C.x, h.x, y.x],
                y: [x.y, C.y, _.y, h.y, y.y],
                rotate: [x.rotate, C.rotate, h.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, h.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, h.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, h.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, h.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [d, y, _, x, C, h]);
          Pl(t.style, T);
          let D = ce(T.scale, zS),
            O = ce(T.opacity, zS),
            k = ce(T.x, RS),
            A = ce(T.y, RS),
            j = ce(T.rotate, RS),
            N = ce(T.rotateX, RS),
            ee = ce(T.rotateY, RS),
            P = ce(T.skewX, RS),
            te = ce(T.skewY, RS),
            re = ce(T.transformPerspective, RS),
            { drag: ie, dragConstraints: ae } = u;
          as(ie && Nl(ae) ? ae : void 0);
          let oe = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: N,
            rotateY: ee,
            skewX: P,
            skewY: te,
          };
          qe(f) && (oe.transformPerspective = re);
          let se = Fl(t.animate) ? t.animate : void 0,
            le = Fl(t.initial) ? t.initial : void 0,
            ue = Fl(t.exit) ? t.exit : void 0,
            de = p && !c.presenceInitial ? { initial: le, animate: se, exit: ue } : {},
            fe = r ? { __withFX: !0 } : {};
          return E(e, {
            ...u,
            ...de,
            ...fe,
            style: { ...t.style, ...v, ...b, ...w, ...oe, ...S, ...g },
            values: h,
            ref: m,
          });
        })),
      (HS = M.createContext({})),
      (US = M.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = M.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = $c(a);
        return E(HS.Provider, { value: o, children: s(r, i) });
      })),
      (WS = (e) => M.forwardRef((t, n) => E(e, { ...Ll(t), ref: n }))),
      (GS = {}),
      (KS = () => GS),
      (qS = (e) => {
        GS = e;
      }),
      (JS = !1),
      (YS = class extends b {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Rl(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              tt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          tn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Rl(e)) throw e;
          return ((JS = !0), this.props.children);
        }
      }),
      (XS = f === void 0 ? null : new Promise(() => {})),
      (ZS = E(zl, {})),
      (QS = (() => {
        let e = k(!1);
        return ((e.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`), e);
      })()),
      ($S = E(Vl, {})),
      (eC = class extends b {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Ul(this.props.getErrorMessage(), t?.componentStack), Hl(e, t));
        }
        render() {
          let { children: e, fallback: t = $S } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (tC = class extends b {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Hl(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (nC = M.createContext(void 0)),
      (rC = `code-crash:`),
      (iC = WS(
        M.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            rendersWithMotion: c,
            __withFX: l,
            ...u
          },
          d
        ) {
          let f = Fa(() => (t ? `${t}-container` : void 0)),
            p = No(n),
            m = ru(
              M.Children.map(e, (e) =>
                M.isValidElement(e) ? M.cloneElement(e, { layoutId: t ?? e.props.layoutId }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return E(p, {
            layoutId: f,
            ...u,
            ref: d,
            children: E(Kb.Provider, {
              value: !0,
              children: E(gv.Provider, {
                value: i ?? null,
                children: E(Pa, {
                  enabled: !1,
                  children: E(Pe, { id: t ?? ``, inherit: u.layout ? !0 : `id`, children: m }),
                }),
              }),
            }),
          });
        })
      )),
      (aC = M.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = ru(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = No(f);
          return E(gv.Provider, {
            value: a ?? null,
            children: E(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return E(gv.Provider, {
            value: a ?? null,
            children: E(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (sC = new Set()),
      (cC = k({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (lC = `framer-cursor-none`),
      (uC = `framer-pointer-events-none`),
      (dC = p(function ({ children: e }) {
        let t = Fa(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = lu(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = oe();
        return w(cC.Provider, { value: t, children: [e, !n && E(hC, {})] });
      })),
      (fC = rb(
        dC,
        [
          `.${lC}, .${lC} * { cursor: none !important; }`,
          `.${uC}, .${uC} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (pC = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (mC = `data-framer-portal-id`),
      (hC = p(function () {
        let { onRegisterCursors: e } = t(cC),
          n = cu(!1),
          r = P(0),
          a = P(0),
          o = P(0),
          s = _(null),
          c = _({ cursors: {}, cursorHash: void 0 }),
          l = is();
        (N(() => {
          if (!n) return;
          let e = 0,
            t = 0;
          function i() {
            (r.set(e), a.set(t), we(o, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (Ke(c.current.cursors)) return;
            let n = pu(e, t);
            n !== c.current.cursorHash && ((c.current.cursorHash = n), Le.update(() => l()));
          };
          function d(n) {
            if (n.pointerType === `touch`) {
              ve(u);
              return;
            }
            (Le.read(u, !0), (e = n.clientX), (t = n.clientY), Le.update(i));
          }
          function f(e) {
            if (e.target === s.current || !s.current) return;
            let t = new PointerEvent(e.type, {
              bubbles: !0,
              cancelable: e.cancelable,
              pointerType: e.pointerType,
              pointerId: e.pointerId,
              composed: e.composed,
              isPrimary: e.isPrimary,
              buttons: e.buttons,
              button: e.button,
            });
            Le.update(() => {
              s.current?.dispatchEvent(t);
            });
          }
          return (
            G.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            Le.read(u, !0),
            () => {
              (G.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                ve(u));
            }
          );
        }, [o, r, a, l, n]),
          N(() => {
            if (!n) return;
            function e() {
              we(o, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              G.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), G.removeEventListener(`blur`, e));
              }
            );
          }, [o, n]),
          i(() => {
            function t(e) {
              ((c.current.cursors = e),
                (c.current.cursorHash = Ke(e) ? null : pu(r.get(), a.get())),
                l());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(lC, !1));
            };
          }, [r, a, e, l]));
        let { cursors: d, cursorHash: f } = c.current,
          p = f ? d[f] : null,
          m = uu(p);
        i(() => {
          n && document.body.classList.toggle(lC, m);
        }, [m, n]);
        let h = p?.component,
          g = p?.transition ?? { duration: 0 },
          v = g.duration === void 0 ? g : { ...g, duration: g.duration * 1e3 },
          y = ae(r, v),
          b = ae(a, v),
          S = ce(() => y.get() + (p?.offset?.x ?? 0)),
          C = ce(() => b.get() + (p?.offset?.y ?? 0)),
          w = p?.alignment,
          T = p?.placement,
          D = u((e, t) => `translate(${fu(T, w)}) ${t}`, [w, T]);
        return !n || !p || !h
          ? null
          : E(x, {
              children: E(h, {
                transformTemplate: D,
                style: { ...pC, x: S, y: C, opacity: o },
                globalTapTarget: !0,
                variant: p?.variant,
                ref: s,
                className: uC,
              }),
            });
      })),
      (gC = `webPageId`),
      (_C = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            B(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (B(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Og && !Tn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(gu(e), e), this.collectedLinks.set(gu(t), t));
          let n = this.nestingInfo.get(gu(e)) ?? new Set();
          (n.add(gu(t)), this.nestingInfo.set(gu(e), n));
        }
      }),
      (vC = new _C()),
      (yC = `element`),
      (bC = `collection`),
      (xC = `collectionItemId`),
      (SC = `pathVariables`),
      (CC = `framer/page-link,`),
      (wC = k(void 0)),
      (TC = `overlay`),
      (EC = `template-overlay`),
      (DC = class extends b {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((f.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(tt(kg ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          tn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (kg && document.getElementById(`main`)?.innerHTML) || ``;
          return E(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${tt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (kC = /:([a-z]\w*)/gi),
      (AC = k(void 0)),
      (jC = new Map()),
      (MC = 500),
      (NC = 500),
      (FC = !1),
      (IC = 500),
      (LC = 0.9),
      (RC = 1.7),
      (zC = 4),
      (BC = 1 / 0),
      (VC = new WeakMap()),
      (HC = new Set()),
      (UC = new Map()),
      (WC = !$_ || typeof IntersectionObserver > `u` ? null : $u()),
      (GC = Fu(
        D(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...u
          },
          d
        ) {
          let f = St(),
            p = wt(),
            m = zu(),
            { activeLocale: h, locales: g } = Un(),
            _ = od(),
            v = Wn(),
            y = _u(),
            b = sd({ nodeId: s, clickTrackingId: i, router: f, href: t, activeLocale: h }),
            x = C(() => {
              if (!t) return {};
              let e = hu(t) ? t : wu(t);
              if (!e) return {};
              if (L(e))
                return _d(
                  e,
                  f,
                  p,
                  {
                    openInNewTab: n,
                    trackLinkClick: b,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  v,
                  h?.id,
                  g,
                  m
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = _(i, s, h);
              if ($e(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: y,
                  locale: x,
                } = Iu(f, p, e, h, c, m),
                S = td(n, !0),
                C = S === `_blank`,
                w = gd(u, C, f.siteCanonicalURL),
                T = { pathVariables: y, locale: x },
                E = dd(u, w, (e) =>
                  ld(
                    f,
                    l,
                    () =>
                      v(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    y,
                    r,
                    e
                  )
                );
              return {
                href: u,
                target: S,
                onClick: ud(u, b, E),
                "data-framer-page-link-current": (p && Bu(p, e, m)) || void 0,
                navigate: E,
                preload: () =>
                  v(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: y,
                _locale: x,
                _navigationUrl: w,
              };
            }, [t, f, h, m, n, p, r, b, a, g, o, _, v]),
            S = Bs(T(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: w,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = x;
          Vs(
            S,
            (e) => {
              if (!(e === null || !D || !E || !A || y))
                return WC?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`, A);
            },
            [E, D, O, k, A, y]
          );
          let M = !!w;
          return Eu(
            $c(d).cloneAsArray(e, (e) => vd(e, { ...u, ...bd(j, l, M) }, S)),
            c,
            s,
            t,
            x,
            S
          );
        })
      )),
      (KC = `framer`),
      (qC = 3),
      (JC = 30),
      (YC = 1e4),
      (XC = `__framer`),
      (ZC = `3`),
      (QC = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      ($C = Date.now()),
      (ew = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (tw = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (nw = () => ((Date.now() - $C) / 1e3).toFixed(2)),
      (rw = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          M.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          M.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = nw())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = nw()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = nw()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          E(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (iw = { state: `pending` }),
      (aw = { state: `success` }),
      (ow = { state: `incomplete` }),
      (sw = { state: `complete` }),
      (cw = { state: `error` }),
      (lw = M.createContext(void 0)),
      (uw = M.forwardRef(function (
        {
          action: e,
          children: n,
          redirectUrl: r,
          onSuccess: i,
          onError: a,
          onLoading: o,
          submitTrackingId: s,
          nodeId: c,
          ...u
        },
        d
      ) {
        let f = M.useRef(null),
          p = se(d, f),
          {
            states: m,
            convertHoneypotFieldsForSubmission: h,
            replaceHoneypotWithMetadata: g,
          } = kd(),
          _ = St(),
          v = wt(),
          y = zu(),
          b = fn(),
          [x, S] = M.useReducer(Nd, ow),
          { activeLocale: C, locales: T } = Un(),
          D = t(lw),
          O = M.useRef({ onSuccess: i, onError: a, onLoading: o });
        O.current = { onSuccess: i, onError: a, onLoading: o };
        let k = M.useRef(!1);
        async function A(e) {
          if (L(e)) {
            let t = Lu(_, e, y, T);
            if (!t) {
              Id(e, f);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            _.navigate?.(n, r, i);
            return;
          }
          B(
            hu(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await id(e.unresolvedPathSlugs, e.unresolvedHashSlugs, C, b),
            { routeId: n, elementId: r, pathVariables: i } = Iu(_, v, e, C, t, y);
          _.navigate?.(n, r, i);
        }
        let j = (e) => {
          (e.preventDefault(), N(e.currentTarget));
        };
        async function N(t) {
          if (!e || !D || k.current) return;
          ((k.current = !0), h());
          let n = new FormData(t),
            i = Td(t);
          (await K_({ priority: `user-visible`, continueAfter: `paint` }),
            g(n),
            l(() => S({ type: `submit` })),
            Od(n, G.document));
          for (let [e, t] of n) t instanceof File && n.delete(e);
          try {
            (O.current.onLoading?.(),
              jd({ router: _, nodeId: c, submitTrackingId: s, activeLocale: C }),
              await Rd(e, n, i, D),
              l(() => S({ type: `success` })),
              O.current.onSuccess?.(),
              r && (await A(r)));
          } catch (e) {
            (l(() => S({ type: `error` })), O.current.onError?.(), console.error(e));
          }
          k.current = !1;
        }
        let ee = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), j(e)));
          },
          P = async (e) => {
            let t = e.currentTarget;
            (await K_({ priority: `background`, continueAfter: `paint` }),
              l(() => S({ type: Ld(t) ? `incomplete` : `complete` })));
          };
        ii(f, (e) => void N(e));
        let te = M.useMemo(() => n(x), [n, x]);
        return w(he.form, {
          ...u,
          method: `post`,
          "data-framer-form": ``,
          onSubmit: Pd(x) ? j : Fd,
          onKeyDown: ee,
          onChange: P,
          ref: p,
          children: [
            te,
            E(Ad, { states: m }),
            E(`script`, { dangerouslySetInnerHTML: { __html: ri() } }),
            w(`noscript`, {
              children: [
                E(`style`, {
                  children: `[data-framer-form] input[name=framer-noscript] { position: absolute; transform: scale(0); }`,
                }),
                E(`input`, {
                  required: !0,
                  pattern: `(?!)`,
                  name: `framer-noscript`,
                  tabIndex: -1,
                  "aria-label": `Enable JavaScript to submit this form`,
                  title: `Enable JavaScript to submit this form`,
                }),
                E(`p`, { children: `Enable JavaScript to submit this form.` }),
              ],
            }),
          ],
        });
      })),
      (dw = `__framer_force_showing_editorbar_since`),
      (fw = class extends b {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (pw = () => {
        try {
          return !!localStorage[dw];
        } catch {
          return !1;
        }
      }),
      (mw = () => !pw()),
      (hw = (() => {
        let e = k(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (gw = null),
      (_w = null),
      jg(Gd),
      (vw = (e, n, r, i, a, o) => {
        let s = t(lw),
          c = _(),
          l = fn(),
          u = _(!0);
        return (
          N(() => {
            function t() {
              (!gw || !_w) && Gd();
              let t = r ? new URL(r, G.location.href) : G.location,
                c = {
                  version: __,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: gw,
                  locale: _w,
                },
                d = u.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && l?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && L(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = ($e(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (c.current = t()),
                n = e instanceof Promise ? await e : e;
              ((c.current = n),
                u.current ? (u.current = !1) : tn(`published_site_pageview`, n, `eager`));
            })();
            let d = async (e) => {
              if (e.persisted) {
                let e = (c.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((c.current = n), tn(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              f.addEventListener(`pageshow`, d),
              () => {
                f.removeEventListener(`pageshow`, d);
              }
            );
          }, [e, n, r, i, a, s, l, o]),
          c
        );
      }),
      (yw = 0),
      (bw = 500),
      (xw = 200),
      (Sw = `main`),
      (Cw = `framerGeneratedPage`),
      (ww = `<!-- Start of headStart -->`),
      (Tw = `<!-- End of headStart -->`),
      (Ew = `<!-- Start of headEnd -->`),
      (Dw = `<!-- End of headEnd -->`),
      (Ow = `<!-- Start of bodyStart -->`),
      (kw = `<!-- End of bodyStart -->`),
      (Aw = `<!-- Start of bodyEnd -->`),
      (jw = `<!-- End of bodyEnd -->`),
      (Mw = M.createContext(void 0)),
      (Nw = { status: `loading`, data: void 0 }),
      (Pw = 5e3),
      (Fw = () => {}),
      (Iw = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = zf(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = zf(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = Math.min(Uf(r), 2 ** 31 - 1),
            a = G.setInterval(() => {
              if (document.visibilityState === `hidden`) return;
              let n = this.#r.get(t);
              !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
            }, i);
          this.#a.set(t, a);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Wf(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = Yc(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Wf(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!Sn() || !yu(e.url, !1)) return;
          let t = zf(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Hf(n, e);
          return (e.resultOutputType === `image` && L(i) && (await If(i).catch(Fw)), i);
        }
        async fetchWithCache(e) {
          if (!Sn()) return;
          let t = zf(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Wf(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, Nw);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!yu(r, !1)) return Fw;
          let a = zf(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n && (n.delete(t), n.size === 0 && (this.#e.delete(a), this.stopQueryRefetching(e)));
            }
          );
        }
      }),
      (Lw = k(void 0)),
      (Rw = k(!0)),
      (zw = ({ children: e, client: t }) => {
        let [n] = h(() => t ?? new Iw()),
          [r, i] = h(!0);
        return (
          N(
            () => (
              n.hydrateCache(),
              l(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          E(Rw.Provider, { value: r, children: E(Lw.Provider, { value: n, children: e }) })
        );
      }),
      (Bw = (() => {
        let e = k(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (je.WillChange = Ie),
      (Vw = Fu(
        D(function ({ links: e, children: t, ...n }, r) {
          return $c(r)(t(qf((t) => e.map(t), [e])), n);
        })
      )),
      (Hw = { priority: void 0, canYield: !0 }),
      (Uw = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return fp(e, t);
            case `boolean`:
              return mp(e);
            case `color`:
              return _p(e);
            case `date`:
              return yp(e);
            case `enum`:
              return xp(e);
            case `file`:
              return Cp(e);
            case `link`:
              return Tp(e);
            case `number`:
              return Dp(e);
            case `object`:
              return Ap(e, t);
            case `responsiveimage`:
              return Mp(e);
            case `richtext`:
              return Pp(e);
            case `string`:
              return Rp(e);
            case `vectorsetitem`:
              return Ip(e);
            case `unknown`:
              return e;
            default:
              V(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return We(e)
            ? { type: `boolean`, value: e }
            : Xe(e)
              ? { type: `date`, value: e.toISOString() }
              : R(e)
                ? { type: `number`, value: e }
                : L(e)
                  ? { type: `string`, value: e }
                  : Ge(e)
                    ? { type: `array`, value: e.map(Uw.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && Bp(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && Bp(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && Bp(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && Bp(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && Bp(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => Uw.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Uw.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = zp(e),
            i = zp(t);
          return Je(r) || Je(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = zp(e),
            i = zp(t);
          return Je(r) || Je(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = zp(e),
            i = zp(t);
          return Je(r) || Je(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(Uw.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return L(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              V(e);
          }
        },
      }),
      (Ww = { type: `unknown`, isNullable: !0 }),
      (Gw = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = Vc(e);
          B(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (B(n !== `array`, `Array properties are not supported`),
              B(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (Ye(i)) continue;
            let a = this.schema[t];
            if (!qe(a)) {
              if ((B(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await Vp(this.collection, this.locale))[t]?.[n];
          return Jg.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Vp(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Qf(e);
            i && (await i);
            let a = t[r];
            B(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Vp(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Qf(t);
            e && (await e);
            let a = n[Number(i)];
            (B(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (Kw = new Map()),
      (qw = new WeakMap()),
      (Jw = `$r_`),
      (Yw = new Map()),
      (Xw = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Qp(e, t)), (this.priority = qp(n)));
        }
        *resolveArrayValue(e) {
          return yield* rp(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* np(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          B(Yp(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          B(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return Qe(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          B(Zp(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (B(n, `Can't find collection for vector set item pointer`),
            B(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return Qe(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (Zw = `index`),
      (Qw = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), W(this.name, ...e));
        }
      }),
      ($w = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new tT();
        fields = new Z();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (eT = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Z();
      }),
      (tT = class extends Qw {
        name = `Indexes`;
      }),
      (nT = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          B(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                B(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Jp(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                B(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Xp(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Z = class extends Qw {
        name = `Fields`;
      }),
      (rT = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return W(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (iT = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return W(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== Zw) return !1;
          return !0;
        }
      }),
      (aT = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return W(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (oT = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (B(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (B(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new iT();
        }
        getRequiredResolvedFields() {
          let e = new Z();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new aT(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          B(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (B(e, `Field must exist`), e.field);
        }
      }),
      (sT = 1e3),
      (Q = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = nm(),
            i = rm(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (cT = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (lT = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Z();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Z();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (uT = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (dT = class extends uT {
        group;
        getGroup() {
          return (B(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (B(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return $f(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return ep(this.evaluate(void 0), void 0, e);
        }
      }),
      (fT = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return W(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (pT = class e extends dT {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return W(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Z();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Z();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new aT(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new fT(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* rp(
              n.tuples.map((t) =>
                rp(
                  this.projections.map((n) => np({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new cT();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            B(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (mT = { type: 0 }),
      (hT = class extends uT {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return $f(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return ep(this.evaluate(void 0, void 0));
        }
      }),
      (gT = { type: 0 }),
      (_T = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return W(`CaseCondition`, this.when, this.then);
        }
      }),
      (vT = class e extends hT {
        constructor(e, t, n) {
          let r = new Z(),
            i = new Z(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return W(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new _T(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* np({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: rp(
              this.conditions.map((n) =>
                np({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Uw.equal(n, e, gT)) return t;
          } else for (let { when: e, then: t } of r) if (hp(e)) return t;
          return i;
        }
      }),
      (yT = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new oT();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Z(),
            o;
          if (t.orderBy) {
            o = new iT();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (qe(t)) continue;
                a.add(t.field);
                let r = new rT(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new nT(tm(this.fieldId++), void 0, t.definition, void 0),
                  a = new fT(t, r);
                i.push(a);
                let s = new rT(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Z(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (qe(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              B(n.alias, `Subqueries should have an alias`);
              let r = tm(this.fieldId++),
                a = n.alias,
                s = new nT(r, a, t.definition, void 0),
                c = new fT(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              V(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Wp(t.data, this.locale),
            i = t.alias,
            a = new $w($p(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new nT(tm(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new nT(tm(this.fieldId++), Zw, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: Zw, collectionName: i });
            let t = new iT(),
              r = new rT(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new iT(),
              o = new eT(em(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new iT(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              V(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              V(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(Ww, null);
        }
        buildLiteralValue(e) {
          let t = Uw.parse(e.value);
          return this.normalizer.newScalarConstant(Ww, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (B(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              V(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new bT(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new bT(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new _T(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              V(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              V(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (bT = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Z();
        referencedOuterFields = new Z();
      }),
      (xT = class e extends dT {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return W(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new aT(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* rp(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => hp(n[t] ?? null));
        }
      }),
      (ST = class e extends dT {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return W(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * sT : 50 * sT);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, Xf()),
            i = Xf(),
            a = [];
          for (let n of r) {
            let r = Qf(i);
            r && (yield r);
            let o = new cT();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new lT(n, a);
        }
      }),
      (CT = class e extends dT {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return W(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new aT(new iT(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* np({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (wT = class e extends dT {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return W(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * sT);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(Xf()),
            r = Xf(),
            i = [];
          for (let a of n) {
            let n = Qf(r);
            n && (yield n);
            let o = new cT();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new lT(t, i);
        }
      }),
      (TT = class e extends dT {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return W(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new aT(new iT(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* np({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (ET = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: hp(n) && hp(r) };
        }
      }),
      (DT = class extends hT {
        constructor(e, t) {
          let n = new Z(),
            r = new Z();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return W(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (OT = { type: 0 }),
      (kT = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* np({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Uw.contains(n, r, OT) };
        }
      }),
      (AT = { type: 0 }),
      (jT = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* np({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Uw.endsWith(n, r, AT) };
        }
      }),
      (MT = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Uw.equal(n, r, mT) };
        }
      }),
      (NT = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Uw.greaterThan(n, r, mT) };
        }
      }),
      (PT = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Uw.greaterThanOrEqual(n, r, mT) };
        }
      }),
      (FT = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Uw.lessThan(n, r, mT) };
        }
      }),
      (IT = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Uw.lessThanOrEqual(n, r, mT) };
        }
      }),
      (LT = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Uw.equal(n, r, mT) };
        }
      }),
      (RT = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: hp(n) || hp(r) };
        }
      }),
      (zT = { type: 0 }),
      (BT = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* np({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Uw.startsWith(n, r, zT) };
        }
      }),
      (VT = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof xT) {
            if (e.predicate instanceof ET) {
              let n = new CT(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof RT) {
              let n = new TT(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof wT)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new ST(n, im(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof xT) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof wT)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof MT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof DT &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new ST(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof LT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof DT &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new ST(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof FT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof DT &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new ST(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof IT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof DT &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new ST(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof NT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof DT &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new ST(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof PT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof DT &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new ST(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof kT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof DT &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new ST(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof BT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof DT &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new ST(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof jT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof DT &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new ST(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (HT = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new UT();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          B(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (UT = class {
        node;
        cost = new Q(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (WT = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (GT = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new HT(am(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new WT(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            B(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (KT = class e extends dT {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return W(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Z();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Z(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new aT(new iT(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new lT(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new cT();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* np({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof MT) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new lT(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new cT();
              (n.merge(i),
                n.merge(a),
                hp(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (qT = class e extends dT {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return W(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new aT(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* np({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Op(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (JT = class e extends dT {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return W(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new aT(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* np({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Op(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (YT = class e extends hT {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return W(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Z(),
            t = Object.values(this.namedFields);
          for (let n of t) qe(n.collection) || e.add(n);
          return new aT(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new cT();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (XT = class e extends hT {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            B(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return W(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return Uw.cast(n, this.definition);
        }
      }),
      (ZT = class e extends hT {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return W(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Z();
          return (qe(this.field.collection) || e.add(this.field), new aT(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new cT();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (QT = { type: 0 }),
      ($T = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Uw.in(n, r, QT) };
        }
      }),
      (eE = { type: 1 }),
      (tE = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return W(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* np({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Uw.indexOf(n, r, eE) };
        }
      }),
      (nE = class extends Error {}),
      (rE = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return W(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = sm(n),
            a = sm(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (iE = class e extends hT {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return W(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: Uw.length(n) };
        }
      }),
      (aE = class e extends hT {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !hp(yield* this.input.evaluate(e, t)) };
        }
      }),
      (oE = { type: 0 }),
      (sE = class e extends hT {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Uw.in(n, r, oE) };
        }
      }),
      (cE = class extends hT {
        constructor(e, t) {
          B(e.name !== Zw, `Invalid field name`);
          let n = new Z(),
            r = new Z();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return W(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (B(e, `Context must exist`), e.getValue(this.field))
            : (B(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (lE = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new wT(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new ST(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new KT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof DT && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof KT && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new xT(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new pT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof pT &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new qT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new JT(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof DT) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new cE(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new DT(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof aE)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof MT) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof LT) return this.newScalarEquals(e.left, e.right);
          if (e instanceof FT) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof IT) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof NT) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof PT) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof ET) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof RT) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new aE(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof DT && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof DT && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof DT && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof DT && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new ET(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof DT && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof DT && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof DT && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof DT && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new RT(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof cE;
          if (t instanceof cE && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new MT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof cE;
          if (t instanceof cE && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new LT(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof cE;
          if (t instanceof cE && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new FT(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof cE;
          if (t instanceof cE && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new IT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof cE;
          if (t instanceof cE && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new NT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof cE;
          if (t instanceof cE && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new PT(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new $T(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new sE(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new _T(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new vT(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new kT(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new BT(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new jT(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new iE(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new tE(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new YT(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new ZT(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new rE(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new XT(e, t);
          return this.finishScalar(n);
        }
      }),
      (uE = class extends dT {}),
      (dE = class e extends uE {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return W(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Z();
          return new aT(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * sT).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          B(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            B(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Z()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) cm(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                B(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new cT();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (B(s, `Item not found`), B(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (fE = { type: 0 }),
      (pE = class e extends uE {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return W(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== Zw && (qe(e.collection) || t.add(e));
          return new aT(new iT(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === Zw) {
                let r = n.collection;
                B(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                B(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                B(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Uw.equal(a, o, fE)) {
                if (Je(a) || Uw.lessThan(a, o, fE)) return i ? -1 : 1;
                if (Je(o) || Uw.greaterThan(a, o, fE)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (mE = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new GT();
        normalizer = new lE(this.memo);
        explorer = new VT(this.normalizer);
        optimize(e) {
          let t = new yT(this.normalizer, this.query, this.locale).build(),
            n = Qf(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (B(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new dE(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new pE(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (hE = Jf(`query-engine`)),
      (gE = class {
        async evalQuery(e, t, n, r) {
          hE.enabled &&
            hE.debug(`Query:
${xm(e)}`);
          let i = new Xw(e, t, r),
            a = new mE(e, t, i),
            o = Qf(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = $e(s) ? await s : s,
            u = Qf(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = Qf(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(np(a, r)));
          }
          let h = tp(rp(m, r), r);
          return n ? [$e(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new Xw(t, n, r);
          return tp(
            rp(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return np(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (_E = `style[data-framer-breakpoint-css]`),
      (vE = `page`),
      (yE = Symbol(`cycle`)),
      (SE = new WeakMap()),
      (CE = (() => {
        let e = k(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (wE = M.createContext(void 0)),
      (TE = () => M.useContext(wE)),
      (EE = (e) => e.target.value),
      (DE = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (OE = D(function (e, t) {
        let {
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            autoFocus: a,
            className: o,
            inputName: s,
            max: c,
            min: d,
            placeholder: f,
            required: p,
            step: m,
            style: h,
            type: g,
            maxLength: _,
            value: v,
            defaultValue: y,
            autofillEnabled: b,
            onChange: x,
            onBlur: S,
            onInvalid: C,
            onFocus: T,
            onValid: D,
            onClear: O,
            ...k
          } = e,
          A = nh(v ?? y, g),
          [j, M, N] = th(A ?? ``, !0, x),
          ee = ui(A),
          P = u(() => {
            (M(``), O && l(() => O()));
          }, [O, M]),
          te = Ho(D, C, N, S, T),
          ne = u(
            (e) => {
              e.target === e.currentTarget && ee.current?.focus();
            },
            [ee]
          );
        if (g === `hidden`) return E(he.input, { type: `hidden`, name: s, defaultValue: y });
        let re = b === !1 ? DE : void 0,
          ie = !!j,
          ae = !!O && ie,
          oe = Xc($, mb, o, g === `text` && kE, g === `textarea` && AE);
        return w(he.div, {
          ref: t,
          onClick: ne,
          style: h,
          className: oe,
          ...k,
          children: [
            g === `textarea`
              ? E(he.textarea, {
                  ref: ee,
                  ...re,
                  ...te,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  required: p,
                  autoFocus: a,
                  name: s,
                  placeholder: f,
                  className: pb,
                  value: j,
                  maxLength: _,
                })
              : E(he.input, {
                  ref: ee,
                  ...re,
                  ...te,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  type: g,
                  required: p,
                  autoFocus: a,
                  name: s,
                  placeholder: f,
                  className: Xc(pb, !ie && hb),
                  value: j,
                  min: d,
                  max: c,
                  step: m,
                  maxLength: _,
                }),
            ae &&
              E(`button`, {
                type: `button`,
                className: jE,
                onClick: P,
                "aria-label": `Clear`,
                children: E(rh, {}),
              }),
          ],
        });
      })),
      ($ = `framer-form-text-input`),
      (kE = `framer-form-text-input-type`),
      (AE = `framer-form-textarea-input-type`),
      (jE = `framer-form-text-input-clear`),
      (ME = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (NE = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (PE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (FE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (IE = rb(
        OE,
        [
          ..._b,
          ...bb,
          ...vb,
          X(`.${mb}`, {
            boxShadow: X.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: X.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: X.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: X.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: X.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: X.variable(`--framer-input-corner-shape`),
            background: X.variable(`--framer-input-background`),
            transition: X.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          X(`.${$} .${pb}::placeholder`, { color: X.variable(`--framer-input-placeholder-color`) }),
          X(`.${$}`, {
            display: `flex`,
            alignItems: `center`,
            padding: X.variable(`--framer-input-padding`),
          }),
          X(`.${$} .${pb}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          X(`.${$}.${AE}`, { padding: 0 }),
          X(`.${$}.${AE} textarea.${pb}`, {
            width: `100%`,
            padding: X.variable(`--framer-input-padding`),
          }),
          X(`.${$} .${pb}[type="date"], .${$} .${pb}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          X(`.${$} .${pb}::-webkit-date-and-time-value`, { textAlign: `start` }),
          X(`.${$} textarea`, {
            display: `flex`,
            resize: X.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          X(`.${$} textarea::-webkit-resizer`, { background: `no-repeat ${et(ME)}` }),
          X(`.${$}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${et(NE)}` }),
          X(`.${$} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          X(`.${$} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          X(`.${$} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          X(`.${$} .${pb}::-webkit-datetime-edit`, {
            height: X.variable(`--framer-input-font-line-height`),
          }),
          X(`.${$} .${pb}.${hb}::-webkit-datetime-edit`, {
            color: X.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": X.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          X(`.${$}.${kE}::before`, {
            content: X.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${Tb}px`,
            height: `${Tb}px`,
            marginRight: `${wb}px`,
            ...Eb,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: X.variable(`--framer-input-icon-mask-image`),
            backgroundImage: X.variable(`--framer-input-icon-image`),
          }),
          X(`.${$} .${pb}[type="date"]::before, .${$} .${pb}[type="time"]::before`, {
            ...Db,
            paddingLeft: `${Cb}px`,
            maskPosition: `${Cb}px center`,
            backgroundPosition: `${Cb}px center`,
          }),
          X(`.${$} .${pb}[type="date"]::before`, {
            maskImage: X.variable(`--framer-input-icon-mask-image`, et(PE)),
            backgroundImage: X.variable(`--framer-input-icon-image`),
          }),
          X(`.${$} .${pb}[type="time"]::before`, {
            maskImage: X.variable(`--framer-input-icon-mask-image`, et(FE)),
            backgroundImage: X.variable(`--framer-input-icon-image`),
          }),
          X(`.${$} .${pb}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: X.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${Tb}px`,
            height: `100%`,
          }),
          X(`.${$}:focus-within, .${$}.${gb}`, {
            boxShadow: X.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: X.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          X(`.${$}:focus-within::after, .${$}.${gb}::after`, {
            borderColor: X.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: X.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: X.variable(`--framer-input-focused-border-width`, yb),
          }),
          X(`.${jE}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${Tb}px`,
            height: `${Tb}px`,
            marginLeft: `${wb}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: X.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          X(`.${jE}:hover, .${jE}:focus-visible`, {
            color: X.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (LE = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (RE = { opacity: 0 }),
      (zE = { opacity: 1 }),
      (BE = mh(
        M.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: o,
              style: s,
              ...c
            } = e,
            u = { ...s },
            d = C(() => Mo(n), [n]),
            [f, p] = h();
          M.useEffect(() => {
            if (!n?.src || !o || d) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                l(() => p({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, d]);
          let m = d ?? f;
          return (
            o && m && ((u[o] = `auto`), (u.aspectRatio = m.width / m.height)),
            n && delete u.background,
            w(No(e.as), {
              ...c,
              style: u,
              ref: t,
              draggable: a,
              children: [n && E(eo, { image: n, alt: i, draggable: a }), r],
            })
          );
        })
      )),
      (HE = !xn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (UE =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (WE = `{{ text-placeholder }}`),
      (GE = `rich-text-wrapper`),
      (KE = Zo(
        D(function (e, n) {
          let {
              id: r,
              name: i,
              html: a,
              htmlFromDesign: o,
              text: s,
              textFromDesign: c,
              fonts: l = [],
              width: u,
              height: d,
              left: f,
              right: p,
              top: m,
              bottom: h,
              center: g,
              className: v,
              stylesPresetsClassName: y,
              visible: b = !0,
              opacity: x,
              rotation: S = 0,
              verticalAlignment: w = `top`,
              isEditable: T = !1,
              environment: D = q.current,
              withExternalLayout: O = !1,
              positionSticky: k,
              positionStickyTop: A,
              positionStickyRight: j,
              positionStickyBottom: M,
              positionStickyLeft: ee,
              __htmlStructure: P,
              __fromCanvasComponent: te = !1,
              _forwardedOverrideId: ne,
              _forwardedOverrides: re,
              _usesDOMRect: ie,
              children: ae,
              ...oe
            } = e,
            se = To(),
            ce = rs(e),
            le = _(null),
            ue = n ?? le,
            { navigate: de, getRoute: fe } = St(),
            pe = wt();
          (Gn(e.preload ?? []), ls(e, ue));
          let me = t(Kb),
            ge = _u(),
            F = s,
            _e = ne ?? r;
          if (_e && re) {
            let e = re[_e];
            typeof e == `string` && (F = e);
          }
          let ve = ``;
          if (F) {
            let e = _h(F);
            ve = P ? P.replace(WE, e) : `<p>${e}</p>`;
          } else if (a) ve = a;
          else if (c) {
            let e = _h(c);
            ve = P ? P.replace(WE, e) : `<p>${e}</p>`;
          } else o && (ve = o);
          let ye = zu(),
            be = C(() => (ge || !fe || !pe ? ve : vh(ve, fe, pe, ye)), [ve, fe, pe, ye]);
          if (
            (N(() => {
              let e = ue.current;
              if (e === null) return;
              function t(e) {
                let t = Nu(e.target, ue.current);
                On(e) ||
                  !de ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Cu(de, t, ye) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [de, ye]),
            xh(l, te, ue),
            !b)
          )
            return null;
          let xe = T && D() === q.canvas,
            I = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: bh(w),
              opacity: xe ? 0 : x,
              flexShrink: 0,
            },
            Se = q.hasRestrictions(),
            Ce = So(e, se || 0, !1),
            we = ie && (u === `auto` || d === `auto`),
            Te = !!e.transformTemplate || !Ce || !Se || te || we,
            Ee = Te ? (e.transformTemplate ?? ns(g)) : void 0;
          if (!O) {
            if (Ce && Se && !we) {
              let e = Jv.getNumber(S).toFixed(4);
              ((I.transform = `translate(${Ce.x}px, ${Ce.y}px) rotate(${e}deg)`),
                (I.width = Ce.width),
                (I.minWidth = Ce.width),
                (I.height = Ce.height));
            } else
              ((I.left = f),
                (I.right = p),
                (I.top = m),
                (I.bottom = h),
                (I.width = u),
                (I.height = d),
                (I.rotate = S));
            k
              ? (!ge || me) &&
                ((I.position = `sticky`),
                (I.willChange = `transform`),
                (I.top = A),
                (I.right = j),
                (I.bottom = M),
                (I.left = ee))
              : ge && (e.positionFixed || e.positionAbsolute) && (I.position = `absolute`);
          }
          return (
            Jc(e, I),
            Gc(e, I),
            Object.assign(I, e.style),
            E(he.div, {
              id: r,
              ref: ue,
              ...hh(Ey(oe)),
              ...$o(Te ? g : void 0, e.style),
              style: I,
              layoutId: ce,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": g,
              className: Xc(v, y, GE),
              transformTemplate: Ee,
              dangerouslySetInnerHTML: { __html: be },
            })
          );
        })
      )),
      (qE = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (JE = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (YE = D(function (e, t) {
        return E(`svg`, { ...e, ref: t, children: e.children });
      })),
      (XE = he.create(YE)),
      (ZE = D(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return E(XE, {
          ...r,
          ref: i,
          viewBox: t,
          children: E(he.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (QE = []),
      ($E = `RichTextContainer`),
      (eD = D(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: c,
            bottom: l,
            center: u,
            children: d,
            environment: f = q.current,
            fonts: p = QE,
            height: m,
            isEditable: h = !1,
            left: g,
            name: v,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: x,
            positionStickyLeft: S,
            positionStickyRight: w,
            positionStickyTop: T,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: N,
            verticalAlignment: ee = `top`,
            visible: P = !0,
            width: te,
            withExternalLayout: ne = !1,
            viewBox: re,
            viewBoxScale: ie = 1,
            effect: ae,
            ...oe
          } = e,
          se = To(),
          ce = f(),
          le = ce === q.canvas,
          ue = le || ce === q.export,
          de = t(Kb),
          fe = rs(e),
          pe = _(null),
          me = n ?? pe;
        (ls(e, me), xh(p, r, me));
        let he = Ah(ae, me),
          ge = C(() => {
            if (d) return Lh(d, j, M, s, void 0, he.getTokenizer());
          }, [d, j, M, s, he]);
        if (!P) return null;
        let F = { opacity: h && le ? 0 : y },
          _e = bh(ee);
        _e !== jb.justifyContent && (F.justifyContent = _e);
        let ve = {},
          ye = q.hasRestrictions(),
          be = So(e, se || 0, !1),
          xe = o && (te === `auto` || m === `auto`),
          I = !!e.transformTemplate || !be || !ye || r || xe,
          Se = I ? (e.transformTemplate ?? ns(u)) : void 0;
        (ne ||
          (be && ye && !xe
            ? ((ve.x = be.x + (R(k?.x) ? k.x : 0)),
              (ve.y = be.y + (R(k?.y) ? k.y : 0)),
              (ve.left = 0),
              (ve.top = 0),
              (F.rotate = Jv.getNumber(O)),
              (F.width = be.width),
              (F.minWidth = be.width),
              (F.height = be.height))
            : ((F.left = g),
              (F.right = D),
              (F.top = N),
              (F.bottom = l),
              (F.width = te),
              (F.height = m),
              (F.rotate = O)),
          b
            ? (!ue || de) &&
              ((F.position = `sticky`),
              (F.willChange = `transform`),
              (F.top = T),
              (F.right = w),
              (F.bottom = x),
              (F.left = S))
            : le && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`)),
          Jc(e, F),
          Gc(e, F),
          Object.assign(F, A, k, ve),
          fe && (oe.layout = `preserve-aspect`));
        let Ce = No(e.as),
          we = oe[`data-framer-name`] ?? v,
          Te = hh(Ey(oe)),
          Ee = $o(I ? u : void 0, k);
        return L(e.viewBox)
          ? e.as === void 0
            ? E(ZE, {
                ...Te,
                ...Ee,
                ref: me,
                style: F,
                layoutId: fe,
                viewBox: re,
                viewBoxScale: ie,
                transformTemplate: Se,
                "data-framer-name": we,
                "data-framer-component-type": $E,
                children: ge,
              })
            : E(Ce, {
                ...Te,
                ...Ee,
                ref: me,
                style: F,
                layoutId: fe,
                transformTemplate: Se,
                "data-framer-name": we,
                "data-framer-component-type": $E,
                children: E(ZE, {
                  viewBox: re,
                  viewBoxScale: ie,
                  style: { width: `100%`, height: `100%` },
                  children: ge,
                }),
              })
          : E(Ce, {
              ...Te,
              ...Ee,
              ref: me,
              style: F,
              layoutId: fe,
              transformTemplate: Se,
              "data-framer-name": we,
              "data-framer-component-type": $E,
              children: ge,
            });
      })),
      (tD = Zo(
        D(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (L(a)) {
            !r.stylesPresetsClassName &&
              z(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [L(t) ? `html` : `htmlFromDesign`]: a };
            return E(KE, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && L(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return E(eD, { ...r, ref: i, children: T(a) ? a : void 0 });
        })
      )),
      (nD = `framer/asset-reference,`),
      (rD = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = Xh(t);
        return E(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: E(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (iD = Sn()),
      (aD = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (oD = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (sD = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(ex(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Qh(e);
            (s &&
              (t && $h(s, n),
              (s.id = n),
              (o = ig(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          iD && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = oD),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          iD && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new aD(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !iD) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        iD && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${oD}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (cD = new sD()),
      (lD = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (uD = D(function (e, t) {
        let n = To(),
          r = rs(e),
          i = M.useRef(null),
          a = t ?? i,
          o = TE();
        return (
          ls(e, i),
          E(fD, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (dD = 5e4),
      (fD = class e extends $b {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ...$b.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return So(e, e.parentSize || 0);
        }
        container = M.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return So(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (cD.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || cg(this.container, this.props);
        }
        componentWillUnmount() {
          (cD.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (Vy.isImageObject(t) &&
            Vy.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            ms(this.svgElement, `fill`, null, !1),
            cg(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = Jv.getNumber(r);
          if (
            ((e.opacity = H(this.props.opacity) ? this.props.opacity : 1), q.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              yo(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = vy;
            if (l === q.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: g,
            width: _,
            requiresOverflowVisible: y,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            C = S || { width: o || 100, height: a || 100 },
            T = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            D = {};
          (this.collectLayout(T, D),
            Uc(this.props, T),
            Jc(this.props, T),
            $b.applyWillChange(this.props, T, !1));
          let O = null;
          if (typeof r == `string` || K.isColorObject(r)) {
            let e = K.isColorObject(r) ? r.initialValue || K.toRgbString(r) : r;
            ((T.fill = e), (T.color = e));
          } else if (sx.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${sx.hash(t)}`;
            T.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = Hh(t, x);
            O = E(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: E(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  E(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (lx.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${lx.hash(t)}`;
            T.fill = `url(#${n})`;
            let i = Uh(t, x);
            O = E(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: E(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  E(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (Vy.isImageObject(r)) {
            let e = Jh(r, C, x);
            e &&
              ((T.fill = `url(#${e.id})`),
              (O = E(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: E(`defs`, { children: E(rD, { ...e }) }),
              })));
          }
          let k = { "data-framer-component-type": `SVG` },
            A = !S;
          Object.assign(k, $o(A ? this.props.center : void 0, this.props.style));
          let j =
              !y &&
              !O &&
              !T.fill &&
              !T.background &&
              !T.backgroundImage &&
              i.length < dD &&
              !ag(i) &&
              !og(i),
            M = null;
          if (j)
            ((T.backgroundSize = `100% 100%`),
              (T.backgroundImage = et(i)),
              cD.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = cD.subscribe(i, !m, e, y);
            (cD.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              sg(T) && (T.overflow = `hidden`),
              (M = w(v, {
                children: [
                  O,
                  E(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: D,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    Vy.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let N = No(this.props.as),
            { href: ee, target: P, rel: te, onClick: ne, onTap: re } = this.props,
            ie = s || c;
          return E(N, {
            ...k,
            ...hh(Ey(b)),
            layoutId: l,
            transformTemplate: A ? ns(this.props.center) : void 0,
            id: e,
            ref: p,
            style: T,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: ie ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": ie ? void 0 : `true`,
            onTap: re,
            onClick: ne,
            href: ee,
            target: P,
            rel: te,
            children: M,
          });
        }
      }),
      (pD = Zo(uD)),
      (mD = 1e3),
      (hD = `Variable`),
      (gD = `explicitInter`),
      (Fe.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = re(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  Il as $,
  hS as A,
  _D as B,
  Wb as C,
  Cg as D,
  Py as E,
  lg as F,
  Ri as G,
  zg as H,
  Sm as I,
  ju as J,
  Pm as K,
  S_ as L,
  nb as M,
  dg as N,
  gS as O,
  fg as P,
  Em as Q,
  wi as R,
  Bc as S,
  Xc as T,
  hi as U,
  st as V,
  vC as W,
  cD as X,
  qS as Y,
  di as Z,
  Vw as _,
  K_ as _t,
  uw as a,
  za as at,
  aC as b,
  DC as c,
  At as ct,
  GC as d,
  Zm as dt,
  wt as et,
  Xn as f,
  rb as ft,
  q as g,
  bg as gt,
  gE as h,
  cl as ht,
  Ia as i,
  _u as it,
  mS as j,
  pS as k,
  BE as l,
  St as lt,
  lS as m,
  VS as mt,
  iC as n,
  Am as nt,
  IE as o,
  Un as ot,
  Kf as p,
  Qm as pt,
  xg as q,
  Ux as r,
  qs as rt,
  iS as s,
  zi as st,
  US as t,
  mu as tt,
  Jg as u,
  Zh as ut,
  tD as v,
  ab as w,
  ug as x,
  pD as y,
  it as z,
};
//# sourceMappingURL=framer.DPCdg9NM.mjs.map
