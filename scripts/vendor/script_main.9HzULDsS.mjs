import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  E as r,
  I as i,
  L as a,
  N as o,
  O as s,
  P as c,
  R as l,
  S as u,
  _ as d,
  a as f,
  b as p,
  d as m,
  g as h,
  h as g,
  i as _,
  j as v,
  l as y,
  n as b,
  o as x,
  p as S,
  r as ee,
  s as C,
  t as te,
  w,
  y as T,
} from "./react.Dlpel5Rf.mjs";
import { T as E, a as D, r as O, t as k } from "./motion.CCb1GvG_.mjs";
import {
  $ as ne,
  B as A,
  D as j,
  F as re,
  G as M,
  J as ie,
  K as ae,
  N,
  P as oe,
  Q as se,
  R as ce,
  S as le,
  T as P,
  U as ue,
  V as F,
  Y as de,
  Z as fe,
  _ as I,
  _t as pe,
  b as L,
  c as me,
  d as he,
  dt as ge,
  et as _e,
  f as ve,
  ft as R,
  g as ye,
  gt as be,
  ht as xe,
  i as Se,
  it as Ce,
  l as we,
  lt as Te,
  m as Ee,
  mt as De,
  n as Oe,
  nt as ke,
  ot as z,
  p as Ae,
  q as je,
  r as B,
  s as Me,
  t as V,
  tt as Ne,
  u as Pe,
  v as Fe,
  x as Ie,
  y as H,
  z as Le,
} from "./framer.DPCdg9NM.mjs";
import { S as Re, _ as U, b as ze, v as Be, x as Ve, y as He } from "./shared-lib.PdXiQdeZ.mjs";
var Ue,
  We,
  Ge,
  W,
  Ke = e(() => {
    (C(),
      A(),
      w(),
      (Ue = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 7 L 14 7 M 7 0 L 14 7 L 7 14" fill="transparent" height="14px" id="ZQWwyuX20" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--1df8v9o, rgb(0,0,0))" transform="translate(5 5)" width="14px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (We = S((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? x(E.div, { ...a, layoutId: r, ref: t }) : x(`div`, { ...a, ref: t });
      })),
      (Ge = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        n2nHSaXfp: n ?? i.n2nHSaXfp ?? `rgb(0, 0, 0)`,
      })),
      (W = R(
        S(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, n2nHSaXfp: o, ...s } = Ge(e);
          return x(We, {
            ...s,
            className: P(`framer-JBKgu`, r),
            layoutId: i,
            ref: t,
            style: { "--1df8v9o": o, ...n },
          });
        }),
        [
          `.framer-JBKgu { -webkit-mask: ${Ue}; aspect-ratio: 1; background-color: var(--1df8v9o); mask: ${Ue}; width: 24px; }`,
        ],
        `framer-JBKgu`
      )),
      (W.displayName = `Arrow Right`),
      le(W, {
        n2nHSaXfp: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: B.Color },
      }));
  });
function qe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  G,
  rt = e(() => {
    (C(),
      A(),
      k(),
      w(),
      Ke(),
      Re(),
      (Je = N(W)),
      (Ye = { rw6T8HOqH: { hover: !0 } }),
      (Xe = `framer-Anvaq`),
      (Ze = { rw6T8HOqH: `framer-v-crw8n2` }),
      (Qe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      ($e = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = v(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return x(D.Provider, { value: a, children: n });
      }),
      (et = E.create(c)),
      (tt = ({ click: e, height: t, id: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        lKUeJW0_M: i ?? o.lKUeJW0_M ?? `Home`,
        pKOcikyli: e ?? o.pKOcikyli,
        uvDkJghgJ: r ?? o.uvDkJghgJ,
      })),
      (nt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = R(
        S(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = z();
          ne();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              lKUeJW0_M: m,
              uvDkJghgJ: h,
              pKOcikyli: g,
              ..._
            } = tt(e),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: ee,
              gestureVariant: C,
              isLoading: te,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = ge({
              defaultVariant: `rw6T8HOqH`,
              enabledGestures: Ye,
              ref: i,
              variant: f,
              variantClassNames: Ze,
            }),
            k = nt(e, D),
            A = [He],
            { activeVariantCallback: j, delay: re } = se(v),
            M = j(async (...e) => {
              if ((w({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            }),
            ie = P(Xe, ...A);
          return x(O, {
            id: d ?? a,
            children: x(et, {
              animate: D,
              initial: !1,
              children: x($e, {
                value: Qe,
                children: x(he, {
                  href: h,
                  motionChild: !0,
                  nodeId: `rw6T8HOqH`,
                  openInNewTab: !1,
                  scopeId: `ru6_kMdXL`,
                  smoothScroll: !0,
                  children: y(E.a, {
                    ..._,
                    ...ee,
                    className: `${P(ie, `framer-crw8n2`, u, b)} framer-1g4lj1u`,
                    "data-framer-name": `Variant 1`,
                    "data-highlight": !0,
                    layoutDependency: k,
                    layoutId: `rw6T8HOqH`,
                    onTap: M,
                    ref: i,
                    style: { ...l },
                    ...qe({ "rw6T8HOqH-hover": { "data-framer-name": void 0 } }, v, C),
                    children: [
                      x(W, {
                        animated: !0,
                        className: `framer-1whl3q3`,
                        layoutDependency: k,
                        layoutId: `nyLc6ZgW8`,
                        style: { "--1df8v9o": `rgb(0, 0, 0)` },
                      }),
                      x(Fe, {
                        __fromCanvasComponent: !0,
                        children: x(c, {
                          children: x(E.p, {
                            className: `framer-styles-preset-21ogod`,
                            "data-styles-preset": `xZndidUCt`,
                            dir: `auto`,
                            children: `Home`,
                          }),
                        }),
                        className: `framer-1sbayuj`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `uiYk_314w`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: m,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-Anvaq.framer-1g4lj1u, .framer-Anvaq .framer-1g4lj1u { display: block; }`,
          `.framer-Anvaq.framer-crw8n2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-Anvaq .framer-1whl3q3 { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: auto; left: -22px; position: absolute; width: 22px; z-index: 1; }`,
          `.framer-Anvaq .framer-1sbayuj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Anvaq.framer-v-crw8n2.hover .framer-1whl3q3 { bottom: unset; left: unset; position: relative; }`,
          ...ze,
        ],
        `framer-Anvaq`
      )),
      (G.displayName = `Nav link`),
      (G.defaultProps = { height: 23, width: 49 }),
      le(G, {
        lKUeJW0_M: { defaultValue: `Home`, displayTextArea: !1, title: `Title`, type: B.String },
        onlKUeJW0_MChange: { changes: `lKUeJW0_M`, type: B.ChangeHandler },
        uvDkJghgJ: { title: `Link`, type: B.Link },
        pKOcikyli: { title: `Click`, type: B.EventHandler },
      }),
      Ie(
        G,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Je,
          ...oe(Ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  q,
  pt = e(() => {
    (C(),
      A(),
      k(),
      w(),
      (it = [`b1hvjHFMf`, `Wr5Axzkqj`]),
      (at = `framer-gGW0T`),
      (ot = { b1hvjHFMf: `framer-v-13y8ati`, Wr5Axzkqj: `framer-v-ceym39` }),
      (st = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (ct = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = v(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return x(D.Provider, { value: a, children: n });
      }),
      (lt = { "Main Logo": `b1hvjHFMf`, "White Logo": `Wr5Axzkqj` }),
      (ut = E.create(c)),
      (dt = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        j5O95N1Qq: n ?? i.j5O95N1Qq,
        variant: lt[i.variant] ?? i.variant ?? `b1hvjHFMf`,
      })),
      (ft = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = R(
        S(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = z();
          ne();
          let { style: l, className: u, layoutId: d, variant: f, j5O95N1Qq: m, ...h } = dt(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: C,
              setVariant: te,
              variants: w,
            } = ge({
              cycleOrder: it,
              defaultVariant: `b1hvjHFMf`,
              ref: i,
              variant: f,
              variantClassNames: ot,
            }),
            T = ft(e, w),
            D = P(at);
          return x(O, {
            id: d ?? a,
            children: x(ut, {
              animate: w,
              initial: !1,
              children: x(ct, {
                value: st,
                children: x(he, {
                  href: m,
                  motionChild: !0,
                  nodeId: `b1hvjHFMf`,
                  openInNewTab: !1,
                  scopeId: `wx_T5gNDr`,
                  children: y(E.a, {
                    ...h,
                    ...b,
                    className: `${P(D, `framer-13y8ati`, u, _)} framer-1fkucei`,
                    "data-framer-name": `Main Logo`,
                    layoutDependency: T,
                    layoutId: `b1hvjHFMf`,
                    ref: i,
                    style: { ...l },
                    ...K({ Wr5Axzkqj: { "data-framer-name": `White Logo` } }, g, S),
                    children: [
                      x(Fe, {
                        __fromCanvasComponent: !0,
                        children: x(c, {
                          children: x(E.h5, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `Q1VTVE9NVjI7TWVsYWd1IFJlZ3VsYXI=`,
                              "--framer-font-family": `"Melagu Regular", "Melagu Regular Placeholder", sans-serif`,
                              "--framer-font-size": `24px`,
                              "--framer-letter-spacing": `0px`,
                              "--framer-line-height": `1.4em`,
                              "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-2e606580-c5cb-45c2-a66e-07cb8dbe5a38, rgb(54, 59, 31)))`,
                            },
                            children: `Mari`,
                          }),
                        }),
                        className: `framer-2d7s20`,
                        fonts: [`CUSTOMV2;Melagu Regular`],
                        layoutDependency: T,
                        layoutId: `JISDaKTQ1`,
                        style: {
                          "--extracted-1lwpl3i": `var(--token-2e606580-c5cb-45c2-a66e-07cb8dbe5a38, rgb(54, 59, 31))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          Wr5Axzkqj: {
                            "--extracted-1lwpl3i": `var(--token-a473ad64-ab8d-4ca3-9d0e-20d39b42bc08, rgb(255, 255, 255))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...K(
                          {
                            Wr5Axzkqj: {
                              children: x(c, {
                                children: x(E.h5, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `Q1VTVE9NVjI7TWVsYWd1IFJlZ3VsYXI=`,
                                    "--framer-font-family": `"Melagu Regular", "Melagu Regular Placeholder", sans-serif`,
                                    "--framer-font-size": `24px`,
                                    "--framer-letter-spacing": `0px`,
                                    "--framer-line-height": `1.4em`,
                                    "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-a473ad64-ab8d-4ca3-9d0e-20d39b42bc08, rgb(255, 255, 255)))`,
                                  },
                                  children: `Mari`,
                                }),
                              }),
                            },
                          },
                          g,
                          S
                        ),
                      }),
                      y(E.div, {
                        className: `framer-njk8a4`,
                        layoutDependency: T,
                        layoutId: `mHiCyubNn`,
                        children: [
                          y(H, {
                            className: `framer-hddh9`,
                            layoutDependency: T,
                            layoutId: `Z_AjaEssk`,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.827 28.812" overflow="visible"><path d="M 19.164 12.749 C 19.153 12.706 19.137 12.658 19.126 12.615 C 18.758 11.32 18.336 10.24 17.867 9.413 C 17.285 8.398 16.634 7.764 15.919 7.527 C 14.478 7.06 12.946 7.269 11.82 8.091 C 11.473 8.344 11.185 8.639 10.95 8.978 C 10.715 8.645 10.422 8.344 10.08 8.091 C 8.954 7.264 7.422 7.054 5.981 7.527 C 5.266 7.758 4.61 8.392 4.033 9.413 C 3.857 9.724 3.681 10.074 3.521 10.46 C 3.286 10.299 3.067 10.122 2.881 9.934 C 0.954 7.995 0.954 4.836 2.881 2.896 C 3.823 1.94 5.113 1.414 6.451 1.441 L 6.462 1.441 C 7.828 1.441 9.141 1.865 10.262 2.665 C 11.366 3.45 12.183 4.53 12.626 5.776 C 12.759 6.147 13.165 6.34 13.538 6.211 C 13.907 6.077 14.099 5.668 13.971 5.292 C 13.426 3.767 12.428 2.451 11.089 1.494 C 9.712 0.517 8.116 0.001 6.456 0.001 C 4.722 -0.026 3.089 0.64 1.861 1.876 C -0.62 4.379 -0.62 8.446 1.861 10.944 C 2.187 11.272 2.576 11.573 2.998 11.825 C 2.918 12.078 2.838 12.341 2.758 12.609 C 2.101 14.946 1.69 17.858 1.69 20.216 C 1.69 24.729 2.406 28.114 2.438 28.253 C 2.528 28.634 2.904 28.871 3.283 28.788 C 3.663 28.705 3.906 28.331 3.831 27.947 C 3.825 27.915 3.115 24.563 3.115 20.211 C 3.115 17.976 3.505 15.215 4.129 12.996 C 4.183 12.803 4.242 12.615 4.295 12.432 C 5.021 12.695 5.795 12.846 6.547 12.856 L 6.558 12.856 C 8.362 12.856 9.589 13.936 10.31 14.86 C 10.443 15.048 10.662 15.167 10.897 15.167 C 11.131 15.167 11.361 15.043 11.489 14.85 C 12.429 13.651 13.863 12.954 15.38 12.959 C 16.047 12.959 17.029 13.179 17.931 13.668 C 18.448 15.752 18.769 18.196 18.769 20.211 C 18.769 20.684 18.758 21.14 18.747 21.586 C 18.395 21.893 18.037 22.134 17.744 22.333 L 17.68 22.376 C 16.666 23.064 11.628 26.083 11.58 26.115 C 11.542 26.137 11.537 26.137 11.51 26.163 C 11.468 26.19 11.281 26.298 10.977 26.298 C 10.603 26.298 10.315 26.153 10.283 26.131 C 10.096 26.018 6.963 24.122 5.25 23.053 C 4.914 22.843 4.476 22.946 4.268 23.284 C 4.06 23.622 4.161 24.063 4.498 24.272 C 6.264 25.379 9.525 27.351 9.557 27.367 C 9.621 27.404 10.187 27.727 10.966 27.727 C 11.681 27.727 12.162 27.437 12.322 27.324 C 12.754 27.066 17.445 24.251 18.464 23.558 L 18.528 23.515 C 18.56 23.493 18.598 23.467 18.635 23.445 C 18.432 26.11 18.053 27.904 18.048 27.942 C 18.002 28.153 18.054 28.374 18.189 28.543 C 18.323 28.712 18.527 28.811 18.742 28.812 C 19.068 28.812 19.366 28.581 19.436 28.248 C 19.462 28.13 19.975 25.696 20.135 22.226 C 20.284 22.07 20.434 21.898 20.578 21.715 C 21.405 20.652 21.827 19.368 21.827 17.901 C 21.827 15.349 20.61 13.716 19.153 12.738 Z M 10.294 26.147 M 12.524 12.206 C 11.932 12.507 11.382 12.905 10.902 13.372 C 10.452 12.9 9.936 12.497 9.37 12.174 C 8.5 11.685 7.556 11.433 6.568 11.433 C 5.981 11.422 5.368 11.304 4.786 11.094 C 4.941 10.729 5.095 10.407 5.256 10.122 C 5.64 9.445 6.051 9.005 6.408 8.886 C 7.417 8.559 8.474 8.693 9.232 9.246 C 9.68 9.574 10.219 10.197 10.219 11.299 C 10.219 11.696 10.539 12.013 10.929 12.013 L 10.95 12.013 C 11.345 12.013 11.66 11.691 11.66 11.299 C 11.66 10.197 12.199 9.574 12.647 9.246 C 13.405 8.693 14.462 8.553 15.47 8.886 C 15.828 9.005 16.239 9.44 16.623 10.122 C 16.895 10.6 17.157 11.196 17.402 11.889 C 16.65 11.637 15.935 11.53 15.38 11.53 C 14.376 11.53 13.416 11.755 12.524 12.206 Z M 20.183 19.497 C 20.14 18.175 19.985 16.724 19.74 15.328 C 20.188 16.058 20.418 16.918 20.418 17.912 C 20.418 18.487 20.343 19.013 20.183 19.497 Z" fill="rgb(54,59,31)"></path></svg>`,
                            withExternalLayout: !0,
                            ...K(
                              {
                                Wr5Axzkqj: {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.827 28.812" overflow="visible"><path d="M 19.164 12.749 C 19.153 12.706 19.137 12.658 19.126 12.615 C 18.758 11.32 18.336 10.24 17.867 9.413 C 17.285 8.398 16.634 7.764 15.919 7.527 C 14.478 7.06 12.946 7.269 11.82 8.091 C 11.473 8.344 11.185 8.639 10.95 8.978 C 10.715 8.645 10.422 8.344 10.08 8.091 C 8.954 7.264 7.422 7.054 5.981 7.527 C 5.266 7.758 4.61 8.392 4.033 9.413 C 3.857 9.724 3.681 10.074 3.521 10.46 C 3.286 10.299 3.067 10.122 2.881 9.934 C 0.954 7.995 0.954 4.836 2.881 2.896 C 3.823 1.94 5.113 1.414 6.451 1.441 L 6.462 1.441 C 7.828 1.441 9.141 1.865 10.262 2.665 C 11.366 3.45 12.183 4.53 12.626 5.776 C 12.759 6.147 13.165 6.34 13.538 6.211 C 13.907 6.077 14.099 5.668 13.971 5.292 C 13.426 3.767 12.428 2.451 11.089 1.494 C 9.712 0.517 8.116 0.001 6.456 0.001 C 4.722 -0.026 3.089 0.64 1.861 1.876 C -0.62 4.379 -0.62 8.446 1.861 10.944 C 2.187 11.272 2.576 11.573 2.998 11.825 C 2.918 12.078 2.838 12.341 2.758 12.609 C 2.101 14.946 1.69 17.858 1.69 20.216 C 1.69 24.729 2.406 28.114 2.438 28.253 C 2.528 28.634 2.904 28.871 3.283 28.788 C 3.663 28.705 3.906 28.331 3.831 27.947 C 3.825 27.915 3.115 24.563 3.115 20.211 C 3.115 17.976 3.505 15.215 4.129 12.996 C 4.183 12.803 4.242 12.615 4.295 12.432 C 5.021 12.695 5.795 12.846 6.547 12.856 L 6.558 12.856 C 8.362 12.856 9.589 13.936 10.31 14.86 C 10.443 15.048 10.662 15.167 10.897 15.167 C 11.131 15.167 11.361 15.043 11.489 14.85 C 12.429 13.651 13.863 12.954 15.38 12.959 C 16.047 12.959 17.029 13.179 17.931 13.668 C 18.448 15.752 18.769 18.196 18.769 20.211 C 18.769 20.684 18.758 21.14 18.747 21.586 C 18.395 21.893 18.037 22.134 17.744 22.333 L 17.68 22.376 C 16.666 23.064 11.628 26.083 11.58 26.115 C 11.542 26.137 11.537 26.137 11.51 26.163 C 11.468 26.19 11.281 26.298 10.977 26.298 C 10.603 26.298 10.315 26.153 10.283 26.131 C 10.096 26.018 6.963 24.122 5.25 23.053 C 4.914 22.843 4.476 22.946 4.268 23.284 C 4.06 23.622 4.161 24.063 4.498 24.272 C 6.264 25.379 9.525 27.351 9.557 27.367 C 9.621 27.404 10.187 27.727 10.966 27.727 C 11.681 27.727 12.162 27.437 12.322 27.324 C 12.754 27.066 17.445 24.251 18.464 23.558 L 18.528 23.515 C 18.56 23.493 18.598 23.467 18.635 23.445 C 18.432 26.11 18.053 27.904 18.048 27.942 C 18.002 28.153 18.054 28.374 18.189 28.543 C 18.323 28.712 18.527 28.811 18.742 28.812 C 19.068 28.812 19.366 28.581 19.436 28.248 C 19.462 28.13 19.975 25.696 20.135 22.226 C 20.284 22.07 20.434 21.898 20.578 21.715 C 21.405 20.652 21.827 19.368 21.827 17.901 C 21.827 15.349 20.61 13.716 19.153 12.738 Z M 10.294 26.147 M 12.524 12.206 C 11.932 12.507 11.382 12.905 10.902 13.372 C 10.452 12.9 9.936 12.497 9.37 12.174 C 8.5 11.685 7.556 11.433 6.568 11.433 C 5.981 11.422 5.368 11.304 4.786 11.094 C 4.941 10.729 5.095 10.407 5.256 10.122 C 5.64 9.445 6.051 9.005 6.408 8.886 C 7.417 8.559 8.474 8.693 9.232 9.246 C 9.68 9.574 10.219 10.197 10.219 11.299 C 10.219 11.696 10.539 12.013 10.929 12.013 L 10.95 12.013 C 11.345 12.013 11.66 11.691 11.66 11.299 C 11.66 10.197 12.199 9.574 12.647 9.246 C 13.405 8.693 14.462 8.553 15.47 8.886 C 15.828 9.005 16.239 9.44 16.623 10.122 C 16.895 10.6 17.157 11.196 17.402 11.889 C 16.65 11.637 15.935 11.53 15.38 11.53 C 14.376 11.53 13.416 11.755 12.524 12.206 Z M 20.183 19.497 C 20.14 18.175 19.985 16.724 19.74 15.328 C 20.188 16.058 20.418 16.918 20.418 17.912 C 20.418 18.487 20.343 19.013 20.183 19.497 Z" fill="var(--token-a473ad64-ab8d-4ca3-9d0e-20d39b42bc08, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>`,
                                },
                              },
                              g,
                              S
                            ),
                            children: [
                              x(H, {
                                className: `framer-2tj1i7`,
                                layoutDependency: T,
                                layoutId: `eBL29qI18`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.827 28.812" overflow="visible"><path d="M 19.164 12.749 C 19.153 12.706 19.137 12.658 19.126 12.615 C 18.758 11.32 18.336 10.24 17.867 9.413 C 17.285 8.398 16.634 7.764 15.919 7.527 C 14.478 7.06 12.946 7.269 11.82 8.091 C 11.473 8.344 11.185 8.639 10.95 8.978 C 10.715 8.645 10.422 8.344 10.08 8.091 C 8.954 7.264 7.422 7.054 5.981 7.527 C 5.266 7.758 4.61 8.392 4.033 9.413 C 3.857 9.724 3.681 10.074 3.521 10.46 C 3.286 10.299 3.067 10.122 2.881 9.934 C 0.954 7.995 0.954 4.836 2.881 2.896 C 3.823 1.94 5.113 1.414 6.451 1.441 L 6.462 1.441 C 7.828 1.441 9.141 1.865 10.262 2.665 C 11.366 3.45 12.183 4.53 12.626 5.776 C 12.759 6.147 13.165 6.34 13.538 6.211 C 13.907 6.077 14.099 5.668 13.971 5.292 C 13.426 3.767 12.428 2.451 11.089 1.494 C 9.712 0.517 8.116 0.001 6.456 0.001 C 4.722 -0.026 3.089 0.64 1.861 1.876 C -0.62 4.379 -0.62 8.446 1.861 10.944 C 2.187 11.272 2.576 11.573 2.998 11.825 C 2.918 12.078 2.838 12.341 2.758 12.609 C 2.101 14.946 1.69 17.858 1.69 20.216 C 1.69 24.729 2.406 28.114 2.438 28.253 C 2.528 28.634 2.904 28.871 3.283 28.788 C 3.663 28.705 3.906 28.331 3.831 27.947 C 3.825 27.915 3.115 24.563 3.115 20.211 C 3.115 17.976 3.505 15.215 4.129 12.996 C 4.183 12.803 4.242 12.615 4.295 12.432 C 5.021 12.695 5.795 12.846 6.547 12.856 L 6.558 12.856 C 8.362 12.856 9.589 13.936 10.31 14.86 C 10.443 15.048 10.662 15.167 10.897 15.167 C 11.131 15.167 11.361 15.043 11.489 14.85 C 12.429 13.651 13.863 12.954 15.38 12.959 C 16.047 12.959 17.029 13.179 17.931 13.668 C 18.448 15.752 18.769 18.196 18.769 20.211 C 18.769 20.684 18.758 21.14 18.747 21.586 C 18.395 21.893 18.037 22.134 17.744 22.333 L 17.68 22.376 C 16.666 23.064 11.628 26.083 11.58 26.115 C 11.542 26.137 11.537 26.137 11.51 26.163 C 11.468 26.19 11.281 26.298 10.977 26.298 C 10.603 26.298 10.315 26.153 10.283 26.131 C 10.096 26.018 6.963 24.122 5.25 23.053 C 4.914 22.843 4.476 22.946 4.268 23.284 C 4.06 23.622 4.161 24.063 4.498 24.272 C 6.264 25.379 9.525 27.351 9.557 27.367 C 9.621 27.404 10.187 27.727 10.966 27.727 C 11.681 27.727 12.162 27.437 12.322 27.324 C 12.754 27.066 17.445 24.251 18.464 23.558 L 18.528 23.515 C 18.56 23.493 18.598 23.467 18.635 23.445 C 18.432 26.11 18.053 27.904 18.048 27.942 C 18.002 28.153 18.054 28.374 18.189 28.543 C 18.323 28.712 18.527 28.811 18.742 28.812 C 19.068 28.812 19.366 28.581 19.436 28.248 C 19.462 28.13 19.975 25.696 20.135 22.226 C 20.284 22.07 20.434 21.898 20.578 21.715 C 21.405 20.652 21.827 19.368 21.827 17.901 C 21.827 15.349 20.61 13.716 19.153 12.738 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              x(H, {
                                className: `framer-rkjeoe`,
                                layoutDependency: T,
                                layoutId: `tKtv2Fc8R`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 0 0" overflow="visible"><path d="M 0 0" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              x(H, {
                                className: `framer-1xu6j5j`,
                                layoutDependency: T,
                                layoutId: `lgTTSqoHI`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.616 4.664" overflow="visible"><path d="M 7.739 3.499 C 7.146 3.8 6.596 4.197 6.116 4.664 C 5.666 4.192 5.15 3.789 4.584 3.466 C 3.715 2.978 2.77 2.725 1.783 2.725 C 1.195 2.714 0.582 2.596 0 2.387 C 0.155 2.021 0.31 1.699 0.47 1.414 C 0.854 0.737 1.265 0.297 1.622 0.179 C 2.631 -0.149 3.688 -0.015 4.446 0.539 C 4.894 0.866 5.433 1.489 5.433 2.591 C 5.433 2.988 5.753 3.305 6.143 3.305 L 6.164 3.305 C 6.559 3.305 6.874 2.983 6.874 2.591 C 6.874 1.489 7.413 0.866 7.861 0.539 C 8.619 -0.015 9.676 -0.154 10.685 0.179 C 11.042 0.297 11.453 0.732 11.837 1.414 C 12.109 1.892 12.371 2.489 12.616 3.182 C 11.864 2.929 11.149 2.822 10.594 2.822 C 9.59 2.822 8.63 3.047 7.739 3.499 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              x(H, {
                                className: `framer-15txygd`,
                                layoutDependency: T,
                                layoutId: `QZay7YWOv`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 4.169" overflow="visible"><path d="M 0.443 4.169 C 0.4 2.847 0.245 1.397 0 0 C 0.448 0.731 0.678 1.59 0.678 2.584 C 0.678 3.159 0.603 3.685 0.443 4.169 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          x(Fe, {
                            __fromCanvasComponent: !0,
                            children: x(c, {
                              children: x(E.h5, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Q1VTVE9NVjI7TWVsYWd1IFJlZ3VsYXI=`,
                                  "--framer-font-family": `"Melagu Regular", "Melagu Regular Placeholder", sans-serif`,
                                  "--framer-font-size": `24px`,
                                  "--framer-letter-spacing": `0px`,
                                  "--framer-line-height": `1.4em`,
                                  "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-2e606580-c5cb-45c2-a66e-07cb8dbe5a38, rgb(54, 59, 31)))`,
                                },
                                children: ` Simón`,
                              }),
                            }),
                            className: `framer-f3c5io`,
                            fonts: [`CUSTOMV2;Melagu Regular`],
                            layoutDependency: T,
                            layoutId: `vk91zDFB8`,
                            style: {
                              "--extracted-1lwpl3i": `var(--token-2e606580-c5cb-45c2-a66e-07cb8dbe5a38, rgb(54, 59, 31))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            variants: {
                              Wr5Axzkqj: {
                                "--extracted-1lwpl3i": `var(--token-a473ad64-ab8d-4ca3-9d0e-20d39b42bc08, rgb(255, 255, 255))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...K(
                              {
                                Wr5Axzkqj: {
                                  children: x(c, {
                                    children: x(E.h5, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `Q1VTVE9NVjI7TWVsYWd1IFJlZ3VsYXI=`,
                                        "--framer-font-family": `"Melagu Regular", "Melagu Regular Placeholder", sans-serif`,
                                        "--framer-font-size": `24px`,
                                        "--framer-letter-spacing": `0px`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-a473ad64-ab8d-4ca3-9d0e-20d39b42bc08, rgb(255, 255, 255)))`,
                                      },
                                      children: ` Simón`,
                                    }),
                                  }),
                                },
                              },
                              g,
                              S
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-gGW0T.framer-1fkucei, .framer-gGW0T .framer-1fkucei { display: block; }`,
          `.framer-gGW0T.framer-13y8ati { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-gGW0T .framer-2d7s20, .framer-gGW0T .framer-f3c5io { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-gGW0T .framer-njk8a4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-gGW0T .framer-hddh9 { height: 29px; position: relative; width: 22px; }`,
          `.framer-gGW0T .framer-2tj1i7 { height: 29px; left: 0px; position: absolute; top: 0px; width: 22px; }`,
          `.framer-gGW0T .framer-rkjeoe { height: 0px; left: 10px; position: absolute; top: 26px; width: 0px; }`,
          `.framer-gGW0T .framer-1xu6j5j { height: 5px; left: 5px; position: absolute; top: 9px; width: 13px; }`,
          `.framer-gGW0T .framer-15txygd { height: 4px; left: 20px; position: absolute; top: 15px; width: 1px; }`,
        ],
        `framer-gGW0T`
      )),
      (q.displayName = `Logo`),
      (q.defaultProps = { height: 34, width: 146 }),
      le(q, {
        variant: {
          options: [`b1hvjHFMf`, `Wr5Axzkqj`],
          optionTitles: [`Main Logo`, `White Logo`],
          title: `Variant`,
          type: B.Enum,
        },
        j5O95N1Qq: { title: `Link`, type: B.Link },
      }),
      Ie(
        q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Melagu Regular`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Melagu`,
                url: `../../assets/fonts/p8R19B0sS9kTNFrmVQVV9nr8OJY.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Y,
  Mt = e(() => {
    (C(),
      A(),
      k(),
      w(),
      rt(),
      Be(),
      pt(),
      (mt = N(q)),
      (ht = N(U)),
      (gt = N(G)),
      (_t = xe(De(E.div))),
      (vt = xe(De(E.nav))),
      (yt = [`y78AXnbp7`, `he2OkFJKR`, `n3zhAZZOU`, `TaextaS4M`]),
      (bt = `framer-AdOwz`),
      (xt = {
        he2OkFJKR: `framer-v-1w54phj`,
        n3zhAZZOU: `framer-v-7e59kw`,
        TaextaS4M: `framer-v-on4sel`,
        y78AXnbp7: `framer-v-1yqeb4r`,
      }),
      (St = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 52, delay: 0, mass: 1, stiffness: 320, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Ct = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -20,
      }),
      (wt = { damping: 48, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (Tt = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Et = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Dt = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = v(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return x(D.Provider, { value: a, children: n });
      }),
      (Ot = {
        "Desktop-close": `y78AXnbp7`,
        "Mobile-open": `he2OkFJKR`,
        "Phone-close": `n3zhAZZOU`,
        "Phone-open": `TaextaS4M`,
      }),
      (kt = E.create(c)),
      (At = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ot[r.variant] ?? r.variant ?? `y78AXnbp7`,
      })),
      (jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = R(
        S(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = z(),
            c = ne(),
            { style: l, className: u, layoutId: d, variant: f, ...m } = At(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: b,
              isLoading: S,
              setGestureState: ee,
              setVariant: C,
              variants: te,
            } = ge({
              cycleOrder: yt,
              defaultVariant: `y78AXnbp7`,
              ref: i,
              variant: f,
              variantClassNames: xt,
            }),
            w = jt(e, te),
            T = P(bt),
            { activeVariantCallback: D, delay: k } = se(h),
            A = D(async (...e) => {
              C(`he2OkFJKR`);
            }),
            j = D(async (...e) => {
              C(`y78AXnbp7`);
            }),
            re = D(async (...e) => {
              C(`TaextaS4M`);
            }),
            M = D(async (...e) => {
              C(`n3zhAZZOU`);
            }),
            ie = () => h !== `n3zhAZZOU`,
            ae = () => ![`n3zhAZZOU`, `TaextaS4M`].includes(h),
            N = () => !![`he2OkFJKR`, `TaextaS4M`].includes(h);
          Te();
          let oe = () => h !== `TaextaS4M`,
            ce = () => h !== `he2OkFJKR`;
          return x(O, {
            id: d ?? a,
            children: x(kt, {
              animate: te,
              initial: !1,
              children: x(Dt, {
                value: wt,
                children: x(vt, {
                  ...m,
                  ...v,
                  __framer__presenceAnimate: St,
                  __framer__presenceInitial: Ct,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: P(T, `framer-1yqeb4r`, u, g),
                  "data-framer-appear-id": `1yqeb4r`,
                  "data-framer-name": `Desktop-close`,
                  layoutDependency: w,
                  layoutId: `y78AXnbp7`,
                  optimized: !0,
                  ref: i,
                  style: { ...l },
                  ...J(
                    {
                      he2OkFJKR: { "data-framer-name": `Mobile-open` },
                      n3zhAZZOU: { "data-framer-name": `Phone-close` },
                      TaextaS4M: { "data-framer-name": `Phone-open` },
                    },
                    h,
                    b
                  ),
                  children: y(_t, {
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    animate: St,
                    className: `framer-myjbqg`,
                    "data-framer-appear-id": `myjbqg`,
                    "data-framer-name": `Container`,
                    initial: Tt,
                    layoutDependency: w,
                    layoutId: `Aucyk6tis`,
                    optimized: !0,
                    style: {
                      backgroundColor: `var(--token-9cb69150-5fe7-42c8-b6eb-e70640686ea4, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 27,
                      borderBottomRightRadius: 27,
                      borderTopLeftRadius: 27,
                      borderTopRightRadius: 27,
                      boxShadow: `0px 1px 32px 0px rgba(0, 0, 0, 0.05)`,
                    },
                    children: [
                      y(E.div, {
                        className: `framer-utedy7`,
                        "data-framer-name": `Content wrapper`,
                        layoutDependency: w,
                        layoutId: `RjcMDoaaN`,
                        children: [
                          y(E.div, {
                            className: `framer-igvfwz`,
                            "data-highlight": !0,
                            layoutDependency: w,
                            layoutId: `Lijh9QFhO`,
                            onTap: A,
                            style: {
                              backgroundColor: `var(--token-2e606580-c5cb-45c2-a66e-07cb8dbe5a38, rgb(54, 59, 31))`,
                              borderBottomLeftRadius: 999,
                              borderBottomRightRadius: 999,
                              borderTopLeftRadius: 999,
                              borderTopRightRadius: 999,
                            },
                            ...J(
                              {
                                he2OkFJKR: { onTap: j },
                                n3zhAZZOU: { onTap: re },
                                TaextaS4M: { onTap: M },
                              },
                              h,
                              b
                            ),
                            children: [
                              x(E.div, {
                                className: `framer-8498s1`,
                                "data-framer-name": `Line`,
                                layoutDependency: w,
                                layoutId: `HkOdXigLj`,
                                style: {
                                  backgroundColor: `var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(240, 240, 240))`,
                                  rotate: 0,
                                },
                                variants: {
                                  he2OkFJKR: { rotate: -45 },
                                  n3zhAZZOU: { rotate: 0 },
                                  TaextaS4M: { rotate: 45 },
                                },
                              }),
                              x(E.div, {
                                className: `framer-i05ee7`,
                                "data-framer-name": `Line`,
                                layoutDependency: w,
                                layoutId: `jx9Wt9cSc`,
                                style: {
                                  backgroundColor: `var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(240, 240, 240))`,
                                  rotate: 0,
                                },
                                variants: {
                                  he2OkFJKR: { rotate: 45 },
                                  n3zhAZZOU: { rotate: 0 },
                                  TaextaS4M: { rotate: -45 },
                                },
                              }),
                            ],
                          }),
                          ie() &&
                            x(E.div, {
                              className: `framer-twjpbo`,
                              "data-framer-name": `Menu wrapper`,
                              layoutDependency: w,
                              layoutId: `E3yJYP409`,
                            }),
                          x(V, {
                            height: 30,
                            width: `108px`,
                            y: (c?.y || 0) + (0 + ((c?.height || 60) - 0 - 60) / 2) + 7 + 0 + 8,
                            ...J(
                              {
                                he2OkFJKR: {
                                  y:
                                    (c?.y || 0) +
                                    (0 + ((c?.height || 352) - 0 - 352) / 2) +
                                    7 +
                                    0 +
                                    8,
                                },
                                n3zhAZZOU: {
                                  width: void 0,
                                  y:
                                    (c?.y || 0) +
                                    (0 + ((c?.height || 55) - 0 - 55) / 2) +
                                    7 +
                                    0 +
                                    5.5,
                                },
                                TaextaS4M: {
                                  y:
                                    (c?.y || 0) +
                                    (0 + ((c?.height || 553) - 0 - 553) / 2) +
                                    7 +
                                    0 +
                                    5.5,
                                },
                              },
                              h,
                              b
                            ),
                            children: x(L, {
                              className: `framer-2ltkx-container`,
                              layoutDependency: w,
                              layoutId: `H6HO3_g9p-container`,
                              nodeId: `H6HO3_g9p`,
                              rendersWithMotion: !0,
                              scopeId: `S95bsYWUB`,
                              children: x(q, {
                                height: `100%`,
                                id: `H6HO3_g9p`,
                                layoutId: `H6HO3_g9p`,
                                style: { height: `100%`, width: `100%` },
                                variant: Et(`b1hvjHFMf`),
                                width: `100%`,
                                ...J({ n3zhAZZOU: { style: { height: `100%` } } }, h, b),
                              }),
                            }),
                          }),
                          ae() &&
                            x(V, {
                              height: 46,
                              y: (c?.y || 0) + (0 + ((c?.height || 60) - 0 - 60) / 2) + 7 + 0 + 0,
                              ...J(
                                {
                                  he2OkFJKR: {
                                    y:
                                      (c?.y || 0) +
                                      (0 + ((c?.height || 352) - 0 - 352) / 2) +
                                      7 +
                                      0 +
                                      0,
                                  },
                                },
                                h,
                                b
                              ),
                              children: x(L, {
                                className: `framer-uxfpdd-container`,
                                layoutDependency: w,
                                layoutId: `X5MslPUtK-container`,
                                nodeId: `X5MslPUtK`,
                                rendersWithMotion: !0,
                                scopeId: `S95bsYWUB`,
                                style: { opacity: 1 },
                                variants: { he2OkFJKR: { opacity: 0 } },
                                children: x(U, {
                                  azjbYCood: `999px`,
                                  gHeOvXgAq: `https://bodamariysimon.online/form`,
                                  Goeh0UlpU: `PlayCircle`,
                                  height: `100%`,
                                  hyoIEBZCr: `Confirmar asistencia`,
                                  id: `X5MslPUtK`,
                                  layoutId: `X5MslPUtK`,
                                  Uwhubicpx: !1,
                                  variant: Et(`zMIqz4YH_`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                        ],
                      }),
                      N() &&
                        x(E.div, {
                          className: `framer-3cs938`,
                          "data-framer-name": `Dropdown`,
                          layoutDependency: w,
                          layoutId: `msLPQ6WAu`,
                          style: {
                            backgroundColor: `var(--token-9cb69150-5fe7-42c8-b6eb-e70640686ea4, rgb(255, 255, 255))`,
                            borderBottomLeftRadius: 27,
                            borderBottomRightRadius: 27,
                          },
                          children: x(E.div, {
                            className: `framer-1u2ut5e`,
                            "data-framer-name": `Wrapper`,
                            layoutDependency: w,
                            layoutId: `oiWnUQXRN`,
                            style: {
                              borderBottomLeftRadius: 20,
                              borderBottomRightRadius: 20,
                              borderTopLeftRadius: 20,
                              borderTopRightRadius: 20,
                            },
                            children: y(E.div, {
                              className: `framer-15u7dja`,
                              "data-framer-name": `Links content`,
                              layoutDependency: w,
                              layoutId: `qSqlROiwv`,
                              style: {
                                backgroundColor: `var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(239, 240, 244))`,
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                              },
                              children: [
                                x(E.div, {
                                  className: `framer-uzlq1d`,
                                  "data-framer-name": `Grid 2x`,
                                  layoutDependency: w,
                                  layoutId: `gJ9VfhgN7`,
                                  children: x(E.div, {
                                    className: `framer-10k7x9a`,
                                    "data-framer-name": `Nav links`,
                                    layoutDependency: w,
                                    layoutId: `OtPw0k1Jl`,
                                    children: y(E.div, {
                                      className: `framer-1n3anle`,
                                      "data-framer-name": `Links wrapper`,
                                      layoutDependency: w,
                                      layoutId: `f_XO3Z3MO`,
                                      children: [
                                        x(I, {
                                          links: [
                                            {
                                              href: { hash: `:Aq9AYouiW`, webPageId: `cUeqT91wH` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:Aq9AYouiW`, webPageId: `cUeqT91wH` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:Aq9AYouiW`, webPageId: `cUeqT91wH` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            x(V, {
                                              height: 23,
                                              ...J(
                                                {
                                                  he2OkFJKR: {
                                                    y:
                                                      (c?.y || 0) +
                                                      (0 + ((c?.height || 352) - 0 - 352) / 2) +
                                                      7 +
                                                      54 +
                                                      5 +
                                                      0 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0,
                                                  },
                                                  TaextaS4M: {
                                                    y:
                                                      (c?.y || 0) +
                                                      (0 + ((c?.height || 553) - 0 - 553) / 2) +
                                                      7 +
                                                      49 +
                                                      5 +
                                                      0 +
                                                      0 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0,
                                                  },
                                                },
                                                h,
                                                b
                                              ),
                                              children: x(L, {
                                                className: `framer-e0xf0v-container`,
                                                layoutDependency: w,
                                                layoutId: `USEy5Q0My-container`,
                                                nodeId: `USEy5Q0My`,
                                                rendersWithMotion: !0,
                                                scopeId: `S95bsYWUB`,
                                                children: x(G, {
                                                  height: `100%`,
                                                  id: `USEy5Q0My`,
                                                  layoutId: `USEy5Q0My`,
                                                  lKUeJW0_M: `About`,
                                                  uvDkJghgJ: e[0],
                                                  width: `100%`,
                                                  ...J(
                                                    {
                                                      he2OkFJKR: {
                                                        lKUeJW0_M: `Fecha`,
                                                        pKOcikyli: j,
                                                        uvDkJghgJ: e[1],
                                                      },
                                                      TaextaS4M: {
                                                        lKUeJW0_M: `Fecha`,
                                                        pKOcikyli: M,
                                                        uvDkJghgJ: e[2],
                                                      },
                                                    },
                                                    h,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        x(I, {
                                          links: [
                                            {
                                              href: { hash: `:wGzKblT1D`, webPageId: `cUeqT91wH` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:CRFlCsEZ9`, webPageId: `cUeqT91wH` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:CRFlCsEZ9`, webPageId: `cUeqT91wH` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            x(V, {
                                              height: 23,
                                              ...J(
                                                {
                                                  he2OkFJKR: {
                                                    y:
                                                      (c?.y || 0) +
                                                      (0 + ((c?.height || 352) - 0 - 352) / 2) +
                                                      7 +
                                                      54 +
                                                      5 +
                                                      0 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      32,
                                                  },
                                                  TaextaS4M: {
                                                    y:
                                                      (c?.y || 0) +
                                                      (0 + ((c?.height || 553) - 0 - 553) / 2) +
                                                      7 +
                                                      49 +
                                                      5 +
                                                      0 +
                                                      0 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      32,
                                                  },
                                                },
                                                h,
                                                b
                                              ),
                                              children: x(L, {
                                                className: `framer-7cw8ye-container`,
                                                layoutDependency: w,
                                                layoutId: `r5K7GZgCB-container`,
                                                nodeId: `r5K7GZgCB`,
                                                rendersWithMotion: !0,
                                                scopeId: `S95bsYWUB`,
                                                children: x(G, {
                                                  height: `100%`,
                                                  id: `r5K7GZgCB`,
                                                  layoutId: `r5K7GZgCB`,
                                                  lKUeJW0_M: `Services`,
                                                  uvDkJghgJ: e[0],
                                                  width: `100%`,
                                                  ...J(
                                                    {
                                                      he2OkFJKR: {
                                                        lKUeJW0_M: `Lugar`,
                                                        pKOcikyli: j,
                                                        uvDkJghgJ: e[1],
                                                      },
                                                      TaextaS4M: {
                                                        lKUeJW0_M: `Lugar`,
                                                        pKOcikyli: M,
                                                        uvDkJghgJ: e[2],
                                                      },
                                                    },
                                                    h,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        oe() &&
                                          x(I, {
                                            links: [
                                              {
                                                href: {
                                                  hash: `:wGzKblT1D`,
                                                  webPageId: `cUeqT91wH`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  hash: `:hnaJEeQJz`,
                                                  webPageId: `cUeqT91wH`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              x(V, {
                                                height: 23,
                                                ...J(
                                                  {
                                                    he2OkFJKR: {
                                                      y:
                                                        (c?.y || 0) +
                                                        (0 + ((c?.height || 352) - 0 - 352) / 2) +
                                                        7 +
                                                        54 +
                                                        5 +
                                                        0 +
                                                        24 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        64,
                                                    },
                                                  },
                                                  h,
                                                  b
                                                ),
                                                children: x(L, {
                                                  className: `framer-1nbj3zo-container`,
                                                  layoutDependency: w,
                                                  layoutId: `ddhFOVrc3-container`,
                                                  nodeId: `ddhFOVrc3`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `S95bsYWUB`,
                                                  children: x(G, {
                                                    height: `100%`,
                                                    id: `ddhFOVrc3`,
                                                    layoutId: `ddhFOVrc3`,
                                                    lKUeJW0_M: `Lugar`,
                                                    pKOcikyli: j,
                                                    uvDkJghgJ: e[0],
                                                    width: `100%`,
                                                    ...J(
                                                      {
                                                        he2OkFJKR: {
                                                          lKUeJW0_M: `Itinerario`,
                                                          uvDkJghgJ: e[1],
                                                        },
                                                      },
                                                      h,
                                                      b
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        ce() &&
                                          x(I, {
                                            links: [
                                              {
                                                href: {
                                                  hash: `:amIr5XrMY`,
                                                  webPageId: `cUeqT91wH`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: {
                                                  hash: `:amIr5XrMY`,
                                                  webPageId: `cUeqT91wH`,
                                                },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              x(V, {
                                                height: 23,
                                                ...J(
                                                  {
                                                    TaextaS4M: {
                                                      y:
                                                        (c?.y || 0) +
                                                        (0 + ((c?.height || 553) - 0 - 553) / 2) +
                                                        7 +
                                                        49 +
                                                        5 +
                                                        0 +
                                                        0 +
                                                        24 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        96,
                                                    },
                                                  },
                                                  h,
                                                  b
                                                ),
                                                children: x(L, {
                                                  className: `framer-176lfri-container`,
                                                  layoutDependency: w,
                                                  layoutId: `yr9hJFdIT-container`,
                                                  nodeId: `yr9hJFdIT`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `S95bsYWUB`,
                                                  children: x(G, {
                                                    height: `100%`,
                                                    id: `yr9hJFdIT`,
                                                    layoutId: `yr9hJFdIT`,
                                                    lKUeJW0_M: `Guía de viaje`,
                                                    uvDkJghgJ: e[0],
                                                    width: `100%`,
                                                    ...J(
                                                      {
                                                        TaextaS4M: {
                                                          pKOcikyli: M,
                                                          uvDkJghgJ: e[1],
                                                        },
                                                      },
                                                      h,
                                                      b
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        x(I, {
                                          links: [
                                            {
                                              href: { hash: `:A2F7YG5xj`, webPageId: `cUeqT91wH` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:amIr5XrMY`, webPageId: `cUeqT91wH` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:hnaJEeQJz`, webPageId: `cUeqT91wH` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            x(V, {
                                              height: 23,
                                              ...J(
                                                {
                                                  he2OkFJKR: {
                                                    y:
                                                      (c?.y || 0) +
                                                      (0 + ((c?.height || 352) - 0 - 352) / 2) +
                                                      7 +
                                                      54 +
                                                      5 +
                                                      0 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      96,
                                                  },
                                                  TaextaS4M: {
                                                    y:
                                                      (c?.y || 0) +
                                                      (0 + ((c?.height || 553) - 0 - 553) / 2) +
                                                      7 +
                                                      49 +
                                                      5 +
                                                      0 +
                                                      0 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      64,
                                                  },
                                                },
                                                h,
                                                b
                                              ),
                                              children: x(L, {
                                                className: `framer-1nopc8c-container`,
                                                layoutDependency: w,
                                                layoutId: `m7imm_klo-container`,
                                                nodeId: `m7imm_klo`,
                                                rendersWithMotion: !0,
                                                scopeId: `S95bsYWUB`,
                                                children: x(G, {
                                                  height: `100%`,
                                                  id: `m7imm_klo`,
                                                  layoutId: `m7imm_klo`,
                                                  lKUeJW0_M: `Testimonials`,
                                                  uvDkJghgJ: e[0],
                                                  width: `100%`,
                                                  ...J(
                                                    {
                                                      he2OkFJKR: {
                                                        lKUeJW0_M: `Guía de viaje`,
                                                        pKOcikyli: j,
                                                        uvDkJghgJ: e[1],
                                                      },
                                                      TaextaS4M: {
                                                        lKUeJW0_M: `Itinerario`,
                                                        pKOcikyli: M,
                                                        uvDkJghgJ: e[2],
                                                      },
                                                    },
                                                    h,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        x(I, {
                                          links: [
                                            {
                                              href: { hash: `:A2F7YG5xj`, webPageId: `cUeqT91wH` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:JaKa00mqa`, webPageId: `cUeqT91wH` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:JaKa00mqa`, webPageId: `cUeqT91wH` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            x(V, {
                                              height: 23,
                                              ...J(
                                                {
                                                  he2OkFJKR: {
                                                    y:
                                                      (c?.y || 0) +
                                                      (0 + ((c?.height || 352) - 0 - 352) / 2) +
                                                      7 +
                                                      54 +
                                                      5 +
                                                      0 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      128,
                                                  },
                                                  TaextaS4M: {
                                                    y:
                                                      (c?.y || 0) +
                                                      (0 + ((c?.height || 553) - 0 - 553) / 2) +
                                                      7 +
                                                      49 +
                                                      5 +
                                                      0 +
                                                      0 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      128,
                                                  },
                                                },
                                                h,
                                                b
                                              ),
                                              children: x(L, {
                                                className: `framer-vdp5dr-container`,
                                                layoutDependency: w,
                                                layoutId: `b7mwVEuX_-container`,
                                                nodeId: `b7mwVEuX_`,
                                                rendersWithMotion: !0,
                                                scopeId: `S95bsYWUB`,
                                                children: x(G, {
                                                  height: `100%`,
                                                  id: `b7mwVEuX_`,
                                                  layoutId: `b7mwVEuX_`,
                                                  lKUeJW0_M: `Preguntas Frecuentes`,
                                                  pKOcikyli: j,
                                                  uvDkJghgJ: e[0],
                                                  width: `100%`,
                                                  ...J(
                                                    {
                                                      he2OkFJKR: { uvDkJghgJ: e[1] },
                                                      TaextaS4M: { uvDkJghgJ: e[2] },
                                                    },
                                                    h,
                                                    b
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                x(E.div, {
                                  className: `framer-d490qi`,
                                  "data-framer-name": `Wrapper`,
                                  layoutDependency: w,
                                  layoutId: `DqsGnIfOj`,
                                  children: x(I, {
                                    links: [
                                      {
                                        href: { webPageId: `rTY_RGksB` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      x(V, {
                                        height: 46,
                                        ...J(
                                          {
                                            he2OkFJKR: {
                                              width: `calc(max(min(max(${c?.width || `100vw`}, 1px), 700px) - 24px, 1px) - 48px)`,
                                              y:
                                                (c?.y || 0) +
                                                (0 + ((c?.height || 352) - 0 - 352) / 2) +
                                                7 +
                                                54 +
                                                5 +
                                                0 +
                                                24 +
                                                180 +
                                                0 +
                                                0,
                                            },
                                            TaextaS4M: {
                                              width: `calc(max((max(min(max(${c?.width || `100vw`}, 1px), 700px) - 24px, 1px) - 10px) / 2, 50px) * 2 - 38px)`,
                                              y:
                                                (c?.y || 0) +
                                                (0 + ((c?.height || 553) - 0 - 553) / 2) +
                                                7 +
                                                49 +
                                                5 +
                                                0 +
                                                0 +
                                                24 +
                                                386 +
                                                0 +
                                                0,
                                            },
                                          },
                                          h,
                                          b
                                        ),
                                        children: x(L, {
                                          className: `framer-1whhahp-container`,
                                          layoutDependency: w,
                                          layoutId: `mNTgVvavN-container`,
                                          nodeId: `mNTgVvavN`,
                                          rendersWithMotion: !0,
                                          scopeId: `S95bsYWUB`,
                                          children: x(U, {
                                            azjbYCood: `999px`,
                                            gHeOvXgAq: e[0],
                                            Goeh0UlpU: `PlayCircle`,
                                            height: `100%`,
                                            hyoIEBZCr: `Contact us`,
                                            id: `mNTgVvavN`,
                                            layoutId: `mNTgVvavN`,
                                            style: { width: `100%` },
                                            Uwhubicpx: !1,
                                            variant: Et(`zMIqz4YH_`),
                                            width: `100%`,
                                            ...J(
                                              {
                                                he2OkFJKR: {
                                                  gHeOvXgAq: void 0,
                                                  hyoIEBZCr: `Confirmar asistencia`,
                                                },
                                                TaextaS4M: {
                                                  gHeOvXgAq: void 0,
                                                  hyoIEBZCr: `Confirmar asistencia`,
                                                },
                                              },
                                              h,
                                              b
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-AdOwz.framer-9js78s, .framer-AdOwz .framer-9js78s { display: block; }`,
          `.framer-AdOwz.framer-1yqeb4r { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 700px; }`,
          `.framer-AdOwz .framer-myjbqg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; max-width: 700px; overflow: hidden; padding: 7px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 4; }`,
          `.framer-AdOwz .framer-utedy7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-AdOwz .framer-igvfwz { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 41px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 41px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-AdOwz .framer-8498s1 { flex: none; height: 2px; left: calc(51.21951219512197% - 18px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 15px; width: 18px; z-index: 1; }`,
          `.framer-AdOwz .framer-i05ee7 { bottom: 15px; flex: none; height: 2px; left: calc(51.21951219512197% - 18px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 18px; z-index: 1; }`,
          `.framer-AdOwz .framer-twjpbo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; min-height: 41px; overflow: visible; padding: 0px; position: relative; width: 78px; }`,
          `.framer-AdOwz .framer-2ltkx-container { flex: none; height: 30px; position: relative; width: 108px; }`,
          `.framer-AdOwz .framer-uxfpdd-container, .framer-AdOwz .framer-e0xf0v-container, .framer-AdOwz .framer-7cw8ye-container, .framer-AdOwz .framer-1nbj3zo-container, .framer-AdOwz .framer-176lfri-container, .framer-AdOwz .framer-1nopc8c-container, .framer-AdOwz .framer-vdp5dr-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-AdOwz .framer-3cs938 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 5px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-AdOwz .framer-1u2ut5e { display: grid; flex: 1 0 0px; gap: 10px 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: 480px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-AdOwz .framer-15u7dja { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; justify-self: start; max-width: 350px; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-AdOwz .framer-uzlq1d { display: grid; flex: none; gap: 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-AdOwz .framer-10k7x9a { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-AdOwz .framer-1n3anle { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-AdOwz .framer-d490qi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-AdOwz .framer-1whhahp-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-AdOwz.framer-v-1w54phj .framer-8498s1, .framer-AdOwz.framer-v-on4sel .framer-8498s1 { top: calc(51.21951219512197% - 2px / 2); }`,
          `.framer-AdOwz.framer-v-1w54phj .framer-i05ee7, .framer-AdOwz.framer-v-on4sel .framer-i05ee7 { bottom: unset; top: calc(51.21951219512197% - 2px / 2); }`,
          `.framer-AdOwz.framer-v-1w54phj .framer-1u2ut5e { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 274px; justify-content: flex-start; }`,
          `.framer-AdOwz.framer-v-1w54phj .framer-15u7dja { align-self: unset; flex: 1 0 0px; max-width: unset; width: 1px; }`,
          `.framer-AdOwz.framer-v-1w54phj .framer-uzlq1d { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; }`,
          `.framer-AdOwz.framer-v-1w54phj .framer-10k7x9a { align-self: unset; flex: 1 0 0px; width: 1px; }`,
          `.framer-AdOwz.framer-v-1w54phj .framer-1n3anle { align-content: center; align-items: center; padding: 0px 0px 10px 0px; }`,
          `.framer-AdOwz.framer-v-7e59kw.framer-1yqeb4r, .framer-AdOwz.framer-v-on4sel.framer-1yqeb4r { width: 390px; }`,
          `.framer-AdOwz.framer-v-7e59kw .framer-utedy7 { gap: 73px; justify-content: flex-start; padding: 0px 0px 0px 11px; }`,
          `.framer-AdOwz.framer-v-7e59kw .framer-igvfwz, .framer-AdOwz.framer-v-on4sel .framer-igvfwz, .framer-AdOwz.framer-v-on4sel .framer-e0xf0v-container { order: 0; }`,
          `.framer-AdOwz.framer-v-7e59kw .framer-2ltkx-container { order: 1; width: auto; }`,
          `.framer-AdOwz.framer-v-on4sel .framer-utedy7 { padding: 0px 0px 0px 11px; }`,
          `.framer-AdOwz.framer-v-on4sel .framer-twjpbo { min-width: 78px; order: 2; width: min-content; }`,
          `.framer-AdOwz.framer-v-on4sel .framer-2ltkx-container, .framer-AdOwz.framer-v-on4sel .framer-7cw8ye-container { order: 1; }`,
          `.framer-AdOwz.framer-v-on4sel .framer-15u7dja { grid-column: span 2; max-width: unset; }`,
          `.framer-AdOwz.framer-v-on4sel .framer-176lfri-container { order: 4; }`,
          `.framer-AdOwz.framer-v-on4sel .framer-1nopc8c-container { order: 3; }`,
          `.framer-AdOwz.framer-v-on4sel .framer-vdp5dr-container { order: 5; }`,
        ],
        `framer-AdOwz`
      )),
      (Y.displayName = `Navbar 2`),
      (Y.defaultProps = { height: 60, width: 700 }),
      le(Y, {
        variant: {
          options: [`y78AXnbp7`, `he2OkFJKR`, `n3zhAZZOU`, `TaextaS4M`],
          optionTitles: [`Desktop-close`, `Mobile-open`, `Phone-close`, `Phone-open`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      Ie(Y, [{ explicitInter: !0, fonts: [] }, ...mt, ...ht, ...gt], {
        supportsExplicitInterCodegen: !0,
      }),
      (Y.loader = {
        load: (e, t) => je([() => j(q, {}, t), () => j(U, {}, t), () => j(G, {}, t)], t),
      }));
  }),
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  X,
  Jt = e(() => {
    (C(),
      A(),
      k(),
      w(),
      Mt(),
      (Nt = N(Y)),
      (Pt = {
        BWH67OMr9: `(min-width: 1200px)`,
        izjzeECLz: `(min-width: 810px) and (max-width: 1199.98px)`,
        JzEJPDyh2: `(max-width: 809.98px)`,
      }),
      (Ft = `framer-ZMBes`),
      (It = {
        BWH67OMr9: `framer-v-infosu`,
        izjzeECLz: `framer-v-1sk51ph`,
        JzEJPDyh2: `framer-v-w5z11t`,
      }),
      (Lt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Rt = {
        JzEJPDyh2: [
          `.framer-ZMBes .framer-140ma8s-container { left: 26px; right: 26px; top: 26px; transform: unset; width: unset; }`,
        ],
      }),
      (zt = Object.keys(Rt)),
      (Bt = { JzEJPDyh2: `.framer-w5z11t-override` }),
      (Vt = [
        `.framer-ZMBes.framer-3qlgr6, .framer-ZMBes .framer-3qlgr6 { display: block; }`,
        `.framer-ZMBes.framer-infosu { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-ZMBes .framer-140ma8s-container { flex: none; height: auto; left: 50%; position: var(--framer-canvas-fixed-position, fixed); top: 30px; transform: translateX(-50%); width: 700px; z-index: 10; }`,
        `.framer-ZMBes .framer-14nhlwx { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (Ht = {
        BWH67OMr9: `(min-width: 1200px)`,
        izjzeECLz: `(min-width: 810px) and (max-width: 1199.98px)`,
        JzEJPDyh2: `(max-width: 809.98px)`,
      }),
      (Ut = { Desktop: `BWH67OMr9`, Phone: `JzEJPDyh2`, Tablet: `izjzeECLz` }),
      (Wt = ({ value: e }) =>
        Ce()
          ? null
          : x(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Gt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ut[r.variant] ?? r.variant ?? `BWH67OMr9`,
      })),
      (Kt = S(function (e, t) {
        let r = p(null),
          i = t ?? r,
          a = n(),
          { activeLocale: o, setLocale: s } = z(),
          { style: c, className: l, layoutId: u, variant: d, children: f, ...m } = Gt(e),
          [h, g] = ke(d, Pt, !1),
          _ = P(Ft);
        return (
          Ne({}),
          x(Me.Provider, {
            value: {
              activeVariantId: h,
              humanReadableVariantMap: Ut,
              isLayoutTemplate: !0,
              primaryVariantId: `BWH67OMr9`,
              variantClassNames: It,
            },
            children: y(O, {
              id: u ?? a,
              children: [
                x(Wt, { value: `:root body { background: none; }` }),
                y(we, {
                  ...m,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 768,
                    intrinsicWidth: 1376,
                    loading: re(0),
                    pixelHeight: 768,
                    pixelWidth: 1376,
                    sizes: `100vw`,
                    src: `../../assets/images/g2zAgxHOdi07CztwrjrtaWDDy8.jpg`,
                    srcSet: `../../assets/images/g2zAgxHOdi07CztwrjrtaWDDy8-bf3e2c.jpg 512w,../../assets/images/g2zAgxHOdi07CztwrjrtaWDDy8-6e320b.jpg 1024w,../../assets/images/g2zAgxHOdi07CztwrjrtaWDDy8.jpg 1376w`,
                  },
                  className: P(_, `framer-infosu`, l),
                  "data-layout-template": !0,
                  ref: i,
                  style: { ...c },
                  children: [
                    x(Ee, {
                      breakpoint: h,
                      overrides: { JzEJPDyh2: { width: `calc(100vw - 52px)`, y: 26 } },
                      children: x(V, {
                        height: 60,
                        width: `700px`,
                        y: 30,
                        children: x(Ee, {
                          breakpoint: h,
                          overrides: { JzEJPDyh2: { "data-framer-layout-hint-center-x": void 0 } },
                          children: x(Oe, {
                            className: `framer-140ma8s-container`,
                            "data-framer-layout-hint-center-x": !0,
                            "data-framer-name": `Navbar`,
                            layoutScroll: !0,
                            name: `Navbar`,
                            nodeId: `IxX2k8VLP`,
                            scopeId: `glQgmp25w`,
                            children: x(Ee, {
                              breakpoint: h,
                              overrides: { JzEJPDyh2: { variant: Lt(`n3zhAZZOU`) } },
                              children: x(Y, {
                                height: `100%`,
                                id: `IxX2k8VLP`,
                                layoutId: `IxX2k8VLP`,
                                name: `Navbar`,
                                style: { width: `100%` },
                                variant: Lt(`y78AXnbp7`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    f,
                    x(`div`, { className: `framer-14nhlwx` }),
                  ],
                }),
                x(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (qt = (e) =>
        e === ye.canvas || e === ye.export
          ? [
              ...Vt,
              ...zt.flatMap((e) => {
                let t = Bt[e];
                return Rt[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Vt, ...zt.map((e) => `@media ${Ht[e]} { ${Rt[e].join(` `)} }`)]),
      (X = R(Kt, qt, `framer-ZMBes`)),
      (X.displayName = `Template`),
      (X.defaultProps = { height: 1781, width: 1200 }),
      Ie(X, [{ explicitInter: !0, fonts: [] }, ...Nt], { supportsExplicitInterCodegen: !0 }),
      (X.loader = { load: (e, t) => je([() => j(Y, {}, t)], t) }));
  });
function Yt({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `cUeqT91wH`:
    case `rTY_RGksB`:
      return m(X, { ...i, key: `Template1`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function Xt(e) {
  switch (e) {
    case `cUeqT91wH`:
    case `rTY_RGksB`:
      return [
        { hash: `infosu`, mediaQuery: `(min-width: 1200px)` },
        { hash: `1sk51ph`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `w5z11t`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function Zt({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: n,
  localeId: i,
  collectionItemId: a,
  contentLocaleId: o,
  shouldResolveInitialRouteContentState: f = !1,
}) {
  let h = Z[e].page.preload();
  (de({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    ie(Q));
  let g = m(ve, {
    children: m(me, {
      children: m(Ae, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: n,
        routes: Z,
        collectionUtils: tn,
        serverDatabaseClient: nn,
        framerSiteId: Q,
        notFoundPage: F(() => import(`./SitesNotFoundPage.js@1.4.HqKBg8cj.mjs`)),
        isReducedMotion: void 0,
        localeId: i,
        locales: en,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://bodamariysimon.framer.website`,
        EditorBar:
          l === void 0
            ? void 0
            : (() => {
                if (rn) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return F(async () => {
                  l.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: _e, useLocaleInfo: z, useRouter: Te },
                    react: {
                      createElement: m,
                      Fragment: c,
                      memo: u,
                      useCallback: s,
                      useEffect: T,
                      useRef: p,
                      useState: d,
                      useLayoutEffect: r,
                    },
                    "react-dom": { createPortal: _ },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !1,
        LayoutTemplate: Yt,
        loadSnippetsModule: new Pe(
          () => import("./pzmb9wEg-d8rKzhZqhnjSIxUD5Ws9mF0FaNxUob_bh0.CvAQ6EBT.mjs")
        ),
        initialCollectionItemId: a,
        initialContentLocaleIdOverride: o,
      }),
    }),
    value: { routes: {} },
  });
  return (await h, g);
}
function Qt() {
  $ && l.__framer_events.push(arguments);
}
async function $t(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || l.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    Qt(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, s, c, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (r = d.routeId),
        (i = d.localeId),
        (a = d.contentLocaleId),
        (s = d.pathVariables),
        (c = d.canonicalPathVariables),
        (u = d.breakpoints),
        (r = M(Z, r)));
    else {
      M(Z, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((s ??= {}), (s[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = ce(Z, decodeURIComponent(location.pathname), !0, en);
        ((r = e.routeId), (i = e.localeId), (s = e.pathVariables));
      }
    }
    let f = Zt({
      routeId: r,
      localeId: i,
      contentLocaleId: a,
      pathVariables: s,
      canonicalPathVariables: c,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    l !== void 0 &&
      (async () => {
        let e = Z[r],
          t = en.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = d?.collectionItemId ?? null;
        if (n === null && e?.collectionId && tn) {
          let r = await tn[e.collectionId]?.(),
            [i] = Object.values(s);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          o = a.timeZone,
          c = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          l.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Q,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: l.location.href,
              hostname: l.location.hostname || null,
              pathname: l.location.pathname || null,
              hash: l.location.hash || null,
              search: l.location.search || null,
              timezone: o,
              locale: c,
            },
            `eager`,
          ]),
          await pe({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (be(`framer-rewrite-breakpoints`, () => {
          (ae(u), l.__framer_onRewriteBreakpoints?.(u));
        }),
        (rn ? (e) => e() : o)(() => {
          (ue(), fe(), te(t, p, { onRecoverableError: n }));
        }))
      : ee(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Z, en, tn, nn, Q, $, rn;
e(() => {
  if (
    (i(),
    A(),
    w(),
    f(),
    b(),
    Jt(),
    (Z = {
      cUeqT91wH: {
        elements: {
          amIr5XrMY: `datos`,
          Aq9AYouiW: `fecha`,
          CjlvllkWk: `mensaje`,
          CRFlCsEZ9: `lugar`,
          DGTgZIvig: `intro`,
          hnaJEeQJz: `cronograma`,
          JaKa00mqa: `faq`,
          wGzKblT1D: `services`,
          yUQYbsb4e: `hero-section`,
        },
        page: F(() => import("./se3-2SIJUYB3043PhVxlwdaupu3LzIg4uS4CNC9Zlcs.DELc0mh1.mjs")),
        path: `/`,
      },
      rTY_RGksB: {
        elements: { OdTjslwjD: `contact` },
        page: F(() => import("./WDcZlxhx5tTr-4Votc0ilPJlFOjdH177_9JkhSSVAVc.DJKMRYdp.mjs")),
        path: `/contact`,
      },
    }),
    (en = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (tn = {}),
    (nn = void 0),
    (Q = `b93a89d6828a03c3eb293e10cdd10114b00dbe40a986ff71fddf6d50cf76f07f`),
    ($ = typeof document < `u`),
    (rn = $ && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(a.userAgent)),
    $)
  ) {
    ((l.__framer_importFromPackage = (e, t) => () =>
      m(Se, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (l.__framer_events = l.__framer_events || []),
      Le());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? $t(!0, e) : $t(!1, e);
  }
})();
export { Xt as getLayoutTemplateBreakpoints, Zt as getPageRoot };
//# sourceMappingURL=script_main.9HzULDsS.mjs.map
