import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  P as r,
  _ as i,
  b as a,
  c as o,
  j as s,
  k as c,
  l,
  o as u,
  p as d,
  s as f,
  w as p,
  y as ee,
} from "./react.Dlpel5Rf.mjs";
import { T as m, a as h, r as g, t as _ } from "./motion.CCb1GvG_.mjs";
import {
  $ as v,
  B as y,
  D as b,
  E as te,
  N as x,
  P as S,
  S as C,
  T as w,
  a as ne,
  ct as re,
  d as T,
  dt as ie,
  ft as E,
  g as D,
  it as O,
  m as k,
  mt as A,
  n as j,
  nt as ae,
  o as M,
  ot as oe,
  r as N,
  s as se,
  st as ce,
  t as P,
  tt as le,
  v as F,
  x as I,
} from "./framer.DPCdg9NM.mjs";
import {
  S as ue,
  b as de,
  d as fe,
  f as pe,
  g as L,
  h as R,
  l as me,
  m as z,
  n as he,
  p as B,
  r as ge,
  u as _e,
  x as ve,
  y as ye,
} from "./shared-lib.PdXiQdeZ.mjs";
var V,
  be,
  xe,
  Se = e(() => {
    (f(),
      p(),
      (V = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (be = {
        ...V,
        borderRadius: 6,
        background: `rgba(149, 149, 149, 0.1)`,
        border: `1px dashed rgba(149, 149, 149, 0.15)`,
        color: `#a5a5a5`,
        flexDirection: `column`,
      }),
      (xe = d((e, t) => u(`div`, { style: be, ref: t }))));
  }),
  Ce = e(() => {
    Se();
  }),
  H,
  we,
  Te = e(() => {
    we = (e) => {
      if (!H) {
        let t = e.forwardRef(({ color: t = `currentColor`, size: n = 24, ...r }, i) =>
          e.createElement(
            `svg`,
            {
              ref: i,
              xmlns: `http://www.w3.org/2000/svg`,
              width: n,
              height: n,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: t,
              strokeWidth: `2`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              ...r,
            },
            e.createElement(`path`, { d: `M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z` }),
            e.createElement(`polyline`, { points: `9 22 9 12 15 12 15 22` })
          )
        );
        ((t.displayName = `Home`), (H = t));
      }
      return H;
    };
  }),
  Ee = e(() => {
    (Te(), Te());
  });
function De(e, t, n = ``, r, i) {
  let a = s(() => {
    if (n == null || n?.length === 0) return null;
    let t = n.toLowerCase().replace(/-|\s/g, ``);
    return i[t] ?? ke(e, t);
  }, [r, n]);
  return t ? r : a;
}
var Oe,
  ke,
  Ae = e(() => {
    (p(),
      y(),
      (Oe = {
        onClick: { type: N.EventHandler },
        onMouseDown: { type: N.EventHandler },
        onMouseUp: { type: N.EventHandler },
        onMouseEnter: { type: N.EventHandler },
        onMouseLeave: { type: N.EventHandler },
      }),
      (ke = (e, t) => e.find((e) => e.toLowerCase().includes(t))));
  });
function U(e) {
  let {
    color: t,
    selectByList: n,
    iconSearch: r,
    iconSelection: o,
    onClick: s,
    onMouseDown: l,
    onMouseUp: d,
    onMouseEnter: f,
    onMouseLeave: p,
    mirrored: m,
  } = e;
  a(!1);
  let h = De(W, n, r, o, Ne),
    [g, _] = i(h === `Home` ? we(c) : null);
  async function v() {
    let e = !0;
    try {
      let t = await import(`${je}${h}.js@0.0.29`);
      e && _(t.default(c));
    } catch (t) {
      (console.log(t), e && _(null));
    }
    return () => {
      e = !1;
    };
  }
  ee(() => {
    v();
  }, [h]);
  let y = D.current() === D.canvas ? u(xe, {}) : null;
  return u(`div`, {
    style: { display: `contents` },
    onClick: s,
    onMouseEnter: f,
    onMouseLeave: p,
    onMouseDown: l,
    onMouseUp: d,
    children: g
      ? u(g, {
          style: { width: `100%`, height: `100%`, transform: m ? `scale(-1, 1)` : void 0 },
          color: t,
        })
      : y,
  });
}
var W,
  je,
  Me,
  Ne,
  Pe = e(() => {
    (f(),
      p(),
      y(),
      Ce(),
      Ee(),
      Ae(),
      (W =
        `activity.airplay.alert-circle.alert-octagon.alert-triangle.align-center.align-justify.align-left.align-right.anchor.aperture.archive.arrow-down.arrow-down-circle.arrow-down-left.arrow-down-right.arrow-left.arrow-left-circle.arrow-right.arrow-right-circle.arrow-up.arrow-up-circle.arrow-up-left.arrow-up-right.at-sign.award.bar-chart.bar-chart-2.battery.battery-charging.bell.bell-off.bluetooth.bold.book.book-open.bookmark.box.briefcase.calendar.camera.camera-off.cast.check.check-circle.check-square.chevron-down.chevron-left.chevron-right.chevron-up.chevrons-down.chevrons-left.chevrons-right.chevrons-up.chrome.circle.clipboard.clock.cloud.cloud-drizzle.cloud-lightning.cloud-off.cloud-rain.cloud-snow.code.codepen.codesandbox.coffee.columns.command.compass.copy.corner-down-left.corner-down-right.corner-left-down.corner-left-up.corner-right-down.corner-right-up.corner-up-left.corner-up-right.cpu.credit-card.crop.crosshair.database.delete.disc.divide.divide-circle.divide-square.dollar-sign.download.download-cloud.dribbble.droplet.edit.edit-2.edit-3.external-link.eye.eye-off.facebook.fast-forward.feather.figma.file.file-minus.file-plus.file-text.film.filter.flag.folder.folder-minus.folder-plus.framer.frown.gift.git-branch.git-commit.git-merge.git-pull-request.github.gitlab.globe.grid.hard-drive.hash.headphones.heart.help-circle.hexagon.home.image.inbox.info.instagram.italic.key.layers.layout.life-buoy.link.link-2.linkedin.list.loader.lock.log-in.log-out.mail.map.map-pin.maximize.maximize-2.meh.menu.message-circle.message-square.mic.mic-off.minimize.minimize-2.minus.minus-circle.minus-square.monitor.moon.more-horizontal.more-vertical.mouse-pointer.move.music.navigation.navigation-2.octagon.package.paperclip.pause.pause-circle.pen-tool.percent.phone.phone-call.phone-forwarded.phone-incoming.phone-missed.phone-off.phone-outgoing.pie-chart.play.play-circle.plus.plus-circle.plus-square.pocket.power.printer.radio.refresh-ccw.refresh-cw.repeat.rewind.rotate-ccw.rotate-cw.rss.save.scissors.search.send.server.settings.share.share-2.shield.shield-off.shopping-bag.shopping-cart.shuffle.sidebar.skip-back.skip-forward.slack.slash.sliders.smartphone.smile.speaker.square.star.stop-circle.sun.sunrise.sunset.tablet.tag.target.terminal.thermometer.thumbs-down.thumbs-up.toggle-left.toggle-right.tool.trash.trash-2.trello.trending-down.trending-up.triangle.truck.tv.twitch.twitter.type.umbrella.underline.unlock.upload.upload-cloud.user.user-check.user-minus.user-plus.user-x.users.video.video-off.voicemail.volume.volume-1.volume-2.volume-x.watch.wifi.wifi-off.wind.x.x-circle.x-octagon.x-square.youtube.zap.zap-off.zoom-in.zoom-out`.split(
          `.`
        )),
      (je = `https://framer.com/m/feather-icons/`),
      (Me = W.map((e) => e.charAt(0).toUpperCase() + e.slice(1))),
      (Ne = W.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (U.displayName = `Feather`),
      (U.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `home`,
        iconSearch: `Home`,
        color: `#66F`,
        selectByList: !0,
        mirrored: !1,
      }),
      C(U, {
        selectByList: {
          type: N.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: U.defaultProps.selectByList,
        },
        iconSelection: {
          type: N.Enum,
          options: W,
          optionTitles: Me,
          defaultValue: U.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Feather site](https://feathericons.com/)`,
        },
        iconSearch: {
          type: N.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        mirrored: {
          type: N.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: U.defaultProps.mirrored,
        },
        color: { type: N.Color, title: `Color`, defaultValue: U.defaultProps.color },
        ...Oe,
      }));
  });
function Fe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  G,
  Xe = e(() => {
    (f(),
      y(),
      _(),
      p(),
      L(),
      (Ie = A(m.div)),
      (Le = { tARmoiEpq: { hover: !0, pressed: !0 } }),
      (Re = [`tARmoiEpq`, `vi2WUfgcO`, `N0MX5Qr38`, `d3SAlt8A0`, `hLjwT0ryz`]),
      (ze = `framer-9somU`),
      (Be = {
        d3SAlt8A0: `framer-v-1otnhn3`,
        hLjwT0ryz: `framer-v-lwnju9`,
        N0MX5Qr38: `framer-v-109a88s`,
        tARmoiEpq: `framer-v-19xv6pc`,
        vi2WUfgcO: `framer-v-1oyg5mi`,
      }),
      (Ve = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (He = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Ue = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (We = (e, t) => `translateX(-50%) ${t}`),
      (Ge = ({ value: e, children: n }) => {
        let r = t(h),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(h.Provider, { value: a, children: n });
      }),
      (Ke = {
        Default: `tARmoiEpq`,
        Disabled: `N0MX5Qr38`,
        Error: `hLjwT0ryz`,
        Loading: `vi2WUfgcO`,
        Success: `d3SAlt8A0`,
      }),
      (qe = m.create(r)),
      (Je = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ke[r.variant] ?? r.variant ?? `tARmoiEpq`,
      })),
      (Ye = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = E(
        d(function (e, t) {
          let i = a(null),
            o = t ?? i,
            s = n(),
            { activeLocale: c, setLocale: d } = oe();
          v();
          let { style: f, className: p, layoutId: ee, variant: h, ..._ } = Je(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: te,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: ne,
              setVariant: re,
              variants: T,
            } = ie({
              cycleOrder: Re,
              defaultVariant: `tARmoiEpq`,
              enabledGestures: Le,
              ref: o,
              variant: h,
              variantClassNames: Be,
            }),
            E = Ye(e, T),
            D = w(ze, B),
            O = () => y !== `vi2WUfgcO`,
            k = () => y === `vi2WUfgcO`;
          return u(g, {
            id: ee ?? s,
            children: u(qe, {
              animate: T,
              initial: !1,
              children: u(Ge, {
                value: Ve,
                children: l(m.button, {
                  ..._,
                  ...x,
                  className: w(D, `framer-19xv6pc`, p, b),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: E,
                  layoutId: `tARmoiEpq`,
                  ref: o,
                  style: {
                    backgroundColor: `var(--token-2e606580-c5cb-45c2-a66e-07cb8dbe5a38, rgb(251, 77, 23))`,
                    borderBottomLeftRadius: 999,
                    borderBottomRightRadius: 999,
                    borderTopLeftRadius: 999,
                    borderTopRightRadius: 999,
                    opacity: 1,
                    ...f,
                  },
                  variants: {
                    "tARmoiEpq-hover": {
                      backgroundColor: `var(--token-33722da1-56ef-4815-82ed-442105eb06b1, rgb(0, 42, 34))`,
                      opacity: 1,
                    },
                    "tARmoiEpq-pressed": {
                      backgroundColor: `var(--token-33722da1-56ef-4815-82ed-442105eb06b1, rgb(0, 42, 34))`,
                      opacity: 1,
                    },
                    d3SAlt8A0: { opacity: 1 },
                    hLjwT0ryz: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                    N0MX5Qr38: { opacity: 0.5 },
                  },
                  ...Fe(
                    {
                      "tARmoiEpq-hover": { "data-framer-name": void 0 },
                      "tARmoiEpq-pressed": { "data-framer-name": void 0 },
                      d3SAlt8A0: { "data-framer-name": `Success` },
                      hLjwT0ryz: { "data-framer-name": `Error` },
                      N0MX5Qr38: { "data-framer-name": `Disabled` },
                      vi2WUfgcO: { "data-framer-name": `Loading` },
                    },
                    y,
                    S
                  ),
                  children: [
                    O() &&
                      u(F, {
                        __fromCanvasComponent: !0,
                        children: u(r, {
                          children: u(m.h3, {
                            className: `framer-styles-preset-13xnbb0`,
                            "data-styles-preset": `zFV_Olyc4`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-78060e73-d695-4e25-9f6a-9a0cd80f5914, rgb(255, 255, 255)))`,
                            },
                            children: `Send message`,
                          }),
                        }),
                        className: `framer-x27c6g`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `gkojjY4si`,
                        style: {
                          "--extracted-a0htzi": `var(--token-78060e73-d695-4e25-9f6a-9a0cd80f5914, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          "tARmoiEpq-hover": {
                            "--extracted-a0htzi": `var(--token-a473ad64-ab8d-4ca3-9d0e-20d39b42bc08, rgb(255, 255, 255))`,
                          },
                          "tARmoiEpq-pressed": {
                            "--extracted-a0htzi": `var(--token-a473ad64-ab8d-4ca3-9d0e-20d39b42bc08, rgb(255, 255, 255))`,
                          },
                          d3SAlt8A0: {
                            "--extracted-r6o4lv": `var(--token-78060e73-d695-4e25-9f6a-9a0cd80f5914, rgb(0, 0, 0))`,
                          },
                          hLjwT0ryz: { "--extracted-r6o4lv": `rgb(255, 34, 68)` },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Fe(
                          {
                            "tARmoiEpq-hover": {
                              children: u(r, {
                                children: u(m.h3, {
                                  className: `framer-styles-preset-13xnbb0`,
                                  "data-styles-preset": `zFV_Olyc4`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-a473ad64-ab8d-4ca3-9d0e-20d39b42bc08, rgb(255, 255, 255)))`,
                                  },
                                  children: `Send message`,
                                }),
                              }),
                            },
                            "tARmoiEpq-pressed": {
                              children: u(r, {
                                children: u(m.h3, {
                                  className: `framer-styles-preset-13xnbb0`,
                                  "data-styles-preset": `zFV_Olyc4`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-a473ad64-ab8d-4ca3-9d0e-20d39b42bc08, rgb(255, 255, 255)))`,
                                  },
                                  children: `Send message`,
                                }),
                              }),
                            },
                            d3SAlt8A0: {
                              children: u(r, {
                                children: u(m.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-78060e73-d695-4e25-9f6a-9a0cd80f5914, rgb(0, 0, 0)))`,
                                  },
                                  children: `Thank you`,
                                }),
                              }),
                              fonts: [`Inter-SemiBold`],
                            },
                            hLjwT0ryz: {
                              children: u(r, {
                                children: u(m.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 34, 68))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                              fonts: [`Inter-SemiBold`],
                            },
                          },
                          y,
                          S
                        ),
                      }),
                    k() &&
                      u(m.div, {
                        className: `framer-1v14fhv`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: E,
                        layoutId: `m_uWtCv1q`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: u(Ie, {
                          __framer__loop: Ue,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: He,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-1qop2qo`,
                          "data-framer-name": `Conic`,
                          layoutDependency: E,
                          layoutId: `ItMvIdBc_`,
                          style: {
                            background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, var(--token-78060e73-d695-4e25-9f6a-9a0cd80f5914, rgb(0, 0, 0)) 342deg)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            vi2WUfgcO: {
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: u(m.div, {
                            className: `framer-o2s0gx`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: E,
                            layoutId: `lyeXFYH4b`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: We,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-9somU.framer-7tytgc, .framer-9somU .framer-7tytgc { display: block; }`,
          `.framer-9somU.framer-19xv6pc { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 58px; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: min-content; }`,
          `.framer-9somU .framer-x27c6g { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-9somU .framer-1v14fhv { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-9somU .framer-1qop2qo { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-9somU .framer-o2s0gx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-9somU.framer-v-1oyg5mi.framer-19xv6pc, .framer-9somU.framer-v-109a88s.framer-19xv6pc, .framer-9somU.framer-v-1otnhn3.framer-19xv6pc, .framer-9somU.framer-v-lwnju9.framer-19xv6pc { cursor: unset; }`,
          `.framer-9somU.framer-v-1oyg5mi .framer-1qop2qo { overflow: hidden; }`,
          ...z,
        ],
        `framer-9somU`
      )),
      (G.displayName = `Buttons/Button 2`),
      (G.defaultProps = { height: 58, width: 211.5 }),
      C(G, {
        variant: {
          options: [`tARmoiEpq`, `vi2WUfgcO`, `N0MX5Qr38`, `d3SAlt8A0`, `hLjwT0ryz`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: N.Enum,
        },
      }),
      I(
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
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
          ...S(R),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ze,
  Qe,
  $e,
  et = e(() => {
    (y(),
      te.loadFonts([`GF;Instrument Serif-regular`, `GF;Instrument Serif-italic`]),
      (Ze = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Instrument Serif`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Instrument Serif`,
              url: `https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zcZj1bIkNo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Instrument Serif`,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Instrument Serif`,
              url: `https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATjnTNgNq55w.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Qe = [
        `.framer-2GmwF .framer-styles-preset-1x9k0vj:not(.rich-text-wrapper), .framer-2GmwF .framer-styles-preset-1x9k0vj.rich-text-wrapper h4 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 44px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-2GmwF .framer-styles-preset-1x9k0vj:not(.rich-text-wrapper), .framer-2GmwF .framer-styles-preset-1x9k0vj.rich-text-wrapper h4 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: -1px) and (min-width: 0px) { .framer-2GmwF .framer-styles-preset-1x9k0vj:not(.rich-text-wrapper), .framer-2GmwF .framer-styles-preset-1x9k0vj.rich-text-wrapper h4 { --framer-font-family: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-family-italic: "Instrument Serif", "Instrument Serif Placeholder", serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      ($e = `framer-2GmwF`));
  }),
  K,
  tt,
  q,
  nt,
  rt,
  it,
  at,
  ot,
  J,
  Y,
  st,
  ct,
  lt,
  ut,
  dt,
  X,
  ft,
  pt,
  Z,
  mt,
  ht,
  Q,
  $;
e(() => {
  (f(),
    y(),
    _(),
    p(),
    Pe(),
    Xe(),
    pe(),
    et(),
    ue(),
    L(),
    he(),
    (K = A(F)),
    (tt = x(U)),
    (q = A(m.div)),
    (nt = x(G)),
    (rt = {
      lg8iEl3V8: `(max-width: 809.98px)`,
      tWuTnIxdD: `(min-width: 810px) and (max-width: 1199.98px)`,
      Xgz7yj9k0: `(min-width: 1200px)`,
    }),
    (it = []),
    (at = `framer-Syxmh`),
    (ot = {
      lg8iEl3V8: `framer-v-musmlt`,
      tWuTnIxdD: `framer-v-1y6iinp`,
      Xgz7yj9k0: `framer-v-esoi6d`,
    }),
    (J = (e, t, n) => (e && t ? `position` : n)),
    (Y = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: 50,
    }),
    (st = { damping: 60, delay: 0.2, mass: 1, stiffness: 400, type: `spring` }),
    (ct = { damping: 60, delay: 0.4, mass: 1, stiffness: 400, type: `spring` }),
    (lt = { damping: 60, delay: 0.6, mass: 1, stiffness: 400, type: `spring` }),
    (ut = { damping: 60, delay: 0.8, mass: 1, stiffness: 400, type: `spring` }),
    (dt = { damping: 60, delay: 1, mass: 1, stiffness: 400, type: `spring` }),
    (X = { damping: 60, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
    (ft = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (pt = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (Z = { Desktop: `Xgz7yj9k0`, Phone: `lg8iEl3V8`, Tablet: `tWuTnIxdD` }),
    (mt = ({ value: e }) =>
      O()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ht = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `Xgz7yj9k0`,
    })),
    (Q = E(
      d(function (e, i) {
        let c = a(null),
          d = i ?? c,
          f = n(),
          { activeLocale: p, setLocale: ee } = oe(),
          _ = v(),
          { style: y, className: b, layoutId: te, variant: x, ...S } = ht(e);
        ce(s(() => ge({}, p), [p]));
        let [C, ie] = ae(x, rt, !1),
          E = w(at, $e, ye, B, me),
          D = t(se)?.isLayoutTemplate,
          O = !!t(h)?.transition?.layout,
          A = J(D, O),
          N = re(`OdTjslwjD`),
          I = a(null);
        return (
          le({}),
          u(se.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Z,
              primaryVariantId: `Xgz7yj9k0`,
              variantClassNames: ot,
            },
            children: l(g, {
              id: te ?? f,
              children: [
                u(mt, {
                  value: `html body { background: var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(5, 5, 5)); }`,
                }),
                u(m.div, {
                  ...S,
                  className: w(E, `framer-esoi6d`, b),
                  ref: d,
                  style: { ...y },
                  children: u(k, {
                    breakpoint: C,
                    overrides: {
                      lg8iEl3V8: { "data-framer-name": `Phone` },
                      tWuTnIxdD: { "data-framer-name": `Tablet` },
                    },
                    children: u(m.header, {
                      className: `framer-1ckaizk`,
                      "data-framer-name": `Contact`,
                      id: N,
                      layout: A,
                      ref: I,
                      children: u(`div`, {
                        className: `framer-do3ztv`,
                        "data-framer-name": `Container`,
                        children: l(`div`, {
                          className: `framer-1piwvw9`,
                          "data-framer-name": `Content`,
                          children: [
                            l(`div`, {
                              className: `framer-1jeo5tt`,
                              "data-framer-name": `Content Left`,
                              children: [
                                l(`div`, {
                                  className: `framer-7x624b`,
                                  "data-framer-name": `Header`,
                                  children: [
                                    u(K, {
                                      __framer__animate: { transition: st },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Y,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: u(r, {
                                        children: u(`h4`, {
                                          className: `framer-styles-preset-1x9k0vj`,
                                          "data-styles-preset": `sj8tlF57o`,
                                          dir: `auto`,
                                          children: `Contact Details`,
                                        }),
                                      }),
                                      className: `framer-1o7wrs6`,
                                      fonts: [`Inter`],
                                      style: { transformPerspective: 1200 },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(K, {
                                      __framer__animate: { transition: ct },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Y,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: u(r, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-21ogod`,
                                          "data-styles-preset": `xZndidUCt`,
                                          dir: `auto`,
                                          children: `Your plumbing needs! Whether you have a question about our services. or require emergency.`,
                                        }),
                                      }),
                                      className: `framer-18j524c`,
                                      fonts: [`Inter`],
                                      style: { transformPerspective: 1200 },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                l(q, {
                                  __framer__animate: { transition: lt },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Y,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-oa0dfh`,
                                  "data-framer-name": `Address`,
                                  style: { transformPerspective: 1200 },
                                  children: [
                                    u(`div`, {
                                      className: `framer-c62wj9`,
                                      "data-border": !0,
                                      "data-framer-name": `Icon Box`,
                                      children: u(P, {
                                        children: u(j, {
                                          className: `framer-vravnu-container`,
                                          "data-framer-name": `Map`,
                                          isModuleExternal: !0,
                                          name: `Map`,
                                          nodeId: `pEDPMqXYH`,
                                          scopeId: `rTY_RGksB`,
                                          children: u(U, {
                                            color: `var(--token-d5229cc0-15a0-4c38-b5da-2a811a526ceb, rgb(31, 42, 46))`,
                                            height: `100%`,
                                            iconSearch: `Home`,
                                            iconSelection: `map-pin`,
                                            id: `pEDPMqXYH`,
                                            layoutId: `pEDPMqXYH`,
                                            mirrored: !1,
                                            name: `Map`,
                                            selectByList: !0,
                                            style: { height: `100%`, width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(`div`, {
                                      className: `framer-15as1mv`,
                                      "data-framer-name": `Details`,
                                      children: [
                                        u(F, {
                                          __fromCanvasComponent: !0,
                                          children: u(r, {
                                            children: u(`p`, {
                                              className: `framer-styles-preset-21ogod`,
                                              "data-styles-preset": `xZndidUCt`,
                                              dir: `auto`,
                                              children: `Office Location`,
                                            }),
                                          }),
                                          className: `framer-tqm73x`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        u(F, {
                                          __fromCanvasComponent: !0,
                                          children: u(r, {
                                            children: u(`h3`, {
                                              className: `framer-styles-preset-13xnbb0`,
                                              "data-styles-preset": `zFV_Olyc4`,
                                              dir: `auto`,
                                              children: `980 Biscayne Blvd, Miami, FL 33132`,
                                            }),
                                          }),
                                          className: `framer-ppj5eh`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l(q, {
                                  __framer__animate: { transition: ut },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Y,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-high6r`,
                                  "data-framer-name": `Message`,
                                  style: { transformPerspective: 1200 },
                                  children: [
                                    u(`div`, {
                                      className: `framer-hlk9ht`,
                                      "data-border": !0,
                                      "data-framer-name": `Icon Box`,
                                      children: u(P, {
                                        children: u(j, {
                                          className: `framer-1663x9m-container`,
                                          "data-framer-name": `Mail`,
                                          isModuleExternal: !0,
                                          name: `Mail`,
                                          nodeId: `Yee4GF5wL`,
                                          scopeId: `rTY_RGksB`,
                                          children: u(U, {
                                            color: `var(--token-d5229cc0-15a0-4c38-b5da-2a811a526ceb, rgb(31, 42, 46))`,
                                            height: `100%`,
                                            iconSearch: `Home`,
                                            iconSelection: `mail`,
                                            id: `Yee4GF5wL`,
                                            layoutId: `Yee4GF5wL`,
                                            mirrored: !1,
                                            name: `Mail`,
                                            selectByList: !0,
                                            style: { height: `100%`, width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(`div`, {
                                      className: `framer-9xn022`,
                                      "data-framer-name": `Details`,
                                      children: [
                                        u(F, {
                                          __fromCanvasComponent: !0,
                                          children: u(r, {
                                            children: u(`p`, {
                                              className: `framer-styles-preset-21ogod`,
                                              "data-styles-preset": `xZndidUCt`,
                                              dir: `auto`,
                                              children: `Our Email`,
                                            }),
                                          }),
                                          className: `framer-6fvt1b`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        u(F, {
                                          __fromCanvasComponent: !0,
                                          children: u(r, {
                                            children: u(`h3`, {
                                              className: `framer-styles-preset-13xnbb0`,
                                              "data-styles-preset": `zFV_Olyc4`,
                                              dir: `auto`,
                                              children: `contact@yourbrand.com`,
                                            }),
                                          }),
                                          className: `framer-1hrbum5`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l(q, {
                                  __framer__animate: { transition: dt },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Y,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-d7ac5z`,
                                  "data-framer-name": `Inquery`,
                                  style: { transformPerspective: 1200 },
                                  children: [
                                    u(`div`, {
                                      className: `framer-gosydm`,
                                      "data-border": !0,
                                      "data-framer-name": `Icon Box`,
                                      children: u(P, {
                                        children: u(j, {
                                          className: `framer-1r67vap-container`,
                                          "data-framer-name": `Phone`,
                                          isModuleExternal: !0,
                                          name: `Phone`,
                                          nodeId: `NYa_sCAYm`,
                                          scopeId: `rTY_RGksB`,
                                          children: u(U, {
                                            color: `var(--token-d5229cc0-15a0-4c38-b5da-2a811a526ceb, rgb(31, 42, 46))`,
                                            height: `100%`,
                                            iconSearch: `Home`,
                                            iconSelection: `phone`,
                                            id: `NYa_sCAYm`,
                                            layoutId: `NYa_sCAYm`,
                                            mirrored: !1,
                                            name: `Phone`,
                                            selectByList: !0,
                                            style: { height: `100%`, width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(`div`, {
                                      className: `framer-1jffdi7`,
                                      "data-framer-name": `Details`,
                                      children: [
                                        u(F, {
                                          __fromCanvasComponent: !0,
                                          children: u(r, {
                                            children: u(`p`, {
                                              className: `framer-styles-preset-21ogod`,
                                              "data-styles-preset": `xZndidUCt`,
                                              dir: `auto`,
                                              children: `Phone Call`,
                                            }),
                                          }),
                                          className: `framer-blatd6`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        u(F, {
                                          __fromCanvasComponent: !0,
                                          children: u(r, {
                                            children: u(`h3`, {
                                              className: `framer-styles-preset-13xnbb0`,
                                              "data-styles-preset": `zFV_Olyc4`,
                                              dir: `auto`,
                                              children: u(T, {
                                                href: `tel:123-456-7890`,
                                                motionChild: !0,
                                                nodeId: `GLoIsH255`,
                                                openInNewTab: !0,
                                                relValues: [],
                                                scopeId: `rTY_RGksB`,
                                                smoothScroll: !1,
                                                children: u(m.a, {
                                                  className: `framer-styles-preset-z9e8gt`,
                                                  "data-styles-preset": `E19LYWyO8`,
                                                  children: `+1 (213) 555-0164`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1491s8n`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-1vbv08`,
                              "data-framer-name": `Contact Form`,
                              children: [
                                l(`div`, {
                                  className: `framer-1lc4uzm`,
                                  "data-framer-name": `Title`,
                                  children: [
                                    u(K, {
                                      __framer__animate: { transition: X },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Y,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: u(r, {
                                        children: u(`h2`, {
                                          className: `framer-styles-preset-1tif1bq`,
                                          "data-styles-preset": `pbkah0okA`,
                                          dir: `auto`,
                                          children: `Get In Touch`,
                                        }),
                                      }),
                                      className: `framer-186usyj`,
                                      fonts: [`Inter`],
                                      style: { transformPerspective: 1200 },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(K, {
                                      __framer__animate: { transition: X },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Y,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: u(r, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-21ogod`,
                                          "data-styles-preset": `xZndidUCt`,
                                          dir: `auto`,
                                          children: `We're here to help with all your plumbing needs! Whether you have a question about our services. or require emergency assistance, our team is ready`,
                                        }),
                                      }),
                                      className: `framer-9vqalt`,
                                      fonts: [`Inter`],
                                      style: { transformPerspective: 1200 },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                u(ne, {
                                  className: `framer-n3ez0b`,
                                  nodeId: `QMe6sMAqX`,
                                  children: (e) =>
                                    l(o, {
                                      children: [
                                        l(`label`, {
                                          className: `framer-ofpy6a`,
                                          children: [
                                            u(F, {
                                              __fromCanvasComponent: !0,
                                              children: u(r, {
                                                children: u(`p`, {
                                                  className: `framer-styles-preset-21ogod`,
                                                  "data-styles-preset": `xZndidUCt`,
                                                  dir: `auto`,
                                                  children: `Your Name`,
                                                }),
                                              }),
                                              className: `framer-11rga6r`,
                                              "data-framer-name": `Paragraph`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `center`,
                                              withExternalLayout: !0,
                                            }),
                                            u(M, {
                                              className: `framer-1oi9r6n`,
                                              inputName: `Name`,
                                              placeholder: `Your Name`,
                                              type: `text`,
                                            }),
                                          ],
                                        }),
                                        l(`label`, {
                                          className: `framer-1hnikpy`,
                                          children: [
                                            u(F, {
                                              __fromCanvasComponent: !0,
                                              children: u(r, {
                                                children: u(`p`, {
                                                  className: `framer-styles-preset-21ogod`,
                                                  "data-styles-preset": `xZndidUCt`,
                                                  dir: `auto`,
                                                  children: `Your Email`,
                                                }),
                                              }),
                                              className: `framer-po2iw2`,
                                              "data-framer-name": `Paragraph`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `center`,
                                              withExternalLayout: !0,
                                            }),
                                            u(M, {
                                              className: `framer-svkqqp`,
                                              inputName: `Email`,
                                              placeholder: `Enter your email`,
                                              type: `email`,
                                            }),
                                          ],
                                        }),
                                        l(`label`, {
                                          className: `framer-1m51z3b`,
                                          children: [
                                            u(F, {
                                              __fromCanvasComponent: !0,
                                              children: u(r, {
                                                children: u(`p`, {
                                                  className: `framer-styles-preset-21ogod`,
                                                  "data-styles-preset": `xZndidUCt`,
                                                  dir: `auto`,
                                                  children: `Message`,
                                                }),
                                              }),
                                              className: `framer-9ymlax`,
                                              "data-framer-name": `Paragraph`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `center`,
                                              withExternalLayout: !0,
                                            }),
                                            u(M, {
                                              className: `framer-mvy3lv`,
                                              inputName: `Message`,
                                              placeholder: `Write your message`,
                                              type: `textarea`,
                                            }),
                                          ],
                                        }),
                                        u(k, {
                                          breakpoint: C,
                                          overrides: {
                                            lg8iEl3V8: {
                                              width: `calc(${_?.width || `100vw`} - 72px)`,
                                            },
                                            tWuTnIxdD: {
                                              width: `calc(${_?.width || `100vw`} - 40px)`,
                                            },
                                          },
                                          children: u(P, {
                                            height: 56,
                                            width: `max(min(${_?.width || `100vw`} - 40px, 1440px) * 0.6091 - 48px, 1px)`,
                                            children: u(j, {
                                              className: `framer-1sa23lx-container`,
                                              nodeId: `jhU5eSZUc`,
                                              scopeId: `rTY_RGksB`,
                                              children: u(G, {
                                                height: `100%`,
                                                id: `jhU5eSZUc`,
                                                layoutId: `jhU5eSZUc`,
                                                style: { height: `100%`, width: `100%` },
                                                type: `submit`,
                                                variant: pt(
                                                  e,
                                                  { pending: `vi2WUfgcO`, success: `d3SAlt8A0` },
                                                  ft(`tARmoiEpq`)
                                                ),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-Syxmh.framer-shm71t, .framer-Syxmh .framer-shm71t { display: block; }`,
        `.framer-Syxmh.framer-esoi6d { align-content: center; align-items: center; background-color: var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, #050505); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Syxmh .framer-1ckaizk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 190px 20px 120px 20px; position: relative; width: 100%; }`,
        `.framer-Syxmh .framer-do3ztv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Syxmh .framer-1piwvw9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Syxmh .framer-1jeo5tt { align-content: flex-start; align-items: flex-start; align-self: stretch; background-color: var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, #111114); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: auto; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 39%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Syxmh .framer-7x624b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-Syxmh .framer-1o7wrs6, .framer-Syxmh .framer-18j524c, .framer-Syxmh .framer-tqm73x, .framer-Syxmh .framer-ppj5eh, .framer-Syxmh .framer-6fvt1b, .framer-Syxmh .framer-1hrbum5, .framer-Syxmh .framer-blatd6, .framer-Syxmh .framer-186usyj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Syxmh .framer-oa0dfh, .framer-Syxmh .framer-high6r, .framer-Syxmh .framer-d7ac5z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Syxmh .framer-c62wj9, .framer-Syxmh .framer-hlk9ht, .framer-Syxmh .framer-gosydm { --border-bottom-width: 1px; --border-color: var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, rgba(0, 0, 0, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; aspect-ratio: 1 / 1; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 64px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Syxmh .framer-vravnu-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 25px; }`,
        `.framer-Syxmh .framer-15as1mv, .framer-Syxmh .framer-9xn022, .framer-Syxmh .framer-1jffdi7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Syxmh .framer-1663x9m-container { aspect-ratio: 1.1666666666666667 / 1; flex: none; height: auto; position: relative; width: 28px; }`,
        `.framer-Syxmh .framer-1r67vap-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 26px; }`,
        `.framer-Syxmh .framer-1491s8n { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Syxmh .framer-1vbv08 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Syxmh .framer-1lc4uzm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Syxmh .framer-9vqalt { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 93%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Syxmh .framer-n3ez0b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Syxmh .framer-ofpy6a, .framer-Syxmh .framer-1hnikpy, .framer-Syxmh .framer-1m51z3b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Syxmh .framer-11rga6r, .framer-Syxmh .framer-po2iw2, .framer-Syxmh .framer-9ymlax { flex: none; height: auto; max-width: 720px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Syxmh .framer-1oi9r6n, .framer-Syxmh .framer-svkqqp { --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #262626); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, #19154e); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 50px; position: relative; width: 100%; }`,
        `.framer-Syxmh .framer-mvy3lv { --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, #262626); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-b1fb229f-a8e6-4640-b958-ea29fe1a7f0e, #19154e); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 118px; position: relative; width: 100%; }`,
        `.framer-Syxmh .framer-1sa23lx-container { flex: none; height: 56px; position: relative; width: 100%; }`,
        ...Qe,
        ...de,
        ...z,
        ..._e,
        `.framer-Syxmh[data-border="true"]::after, .framer-Syxmh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Syxmh.framer-esoi6d { width: 810px; } .framer-Syxmh .framer-1ckaizk { padding: 120px 20px 80px 20px; } .framer-Syxmh .framer-do3ztv { gap: 30px; max-width: 100%; } .framer-Syxmh .framer-1piwvw9 { flex-direction: column; gap: 50px; } .framer-Syxmh .framer-1jeo5tt { align-self: unset; height: min-content; width: 100%; } .framer-Syxmh .framer-7x624b { padding: 0px 0px 40px 0px; } .framer-Syxmh .framer-1o7wrs6, .framer-Syxmh .framer-tqm73x, .framer-Syxmh .framer-6fvt1b, .framer-Syxmh .framer-1hrbum5, .framer-Syxmh .framer-blatd6, .framer-Syxmh .framer-1491s8n, .framer-Syxmh .framer-186usyj { width: 85%; } .framer-Syxmh .framer-18j524c { width: 80%; } .framer-Syxmh .framer-ppj5eh { width: 35%; } .framer-Syxmh .framer-1vbv08 { flex: none; width: 100%; } .framer-Syxmh .framer-9vqalt { width: 97%; }}`,
        `@media (max-width: 809.98px) { .framer-Syxmh.framer-esoi6d { width: 390px; } .framer-Syxmh .framer-1ckaizk { padding: 110px 20px 30px 20px; } .framer-Syxmh .framer-do3ztv { align-content: flex-start; align-items: flex-start; gap: 30px; max-width: 100%; } .framer-Syxmh .framer-1piwvw9 { flex-direction: column; gap: 40px; } .framer-Syxmh .framer-1jeo5tt { align-self: unset; gap: 30px; height: min-content; padding: 35px 20px 35px 20px; width: 100%; } .framer-Syxmh .framer-7x624b { padding: 0px 0px 20px 0px; } .framer-Syxmh .framer-1vbv08 { flex: none; width: 100%; } .framer-Syxmh .framer-9vqalt { width: 100%; } .framer-Syxmh .framer-n3ez0b { padding: 16px; }}`,
      ],
      `framer-Syxmh`
    )),
    (Q.displayName = `Contact 2`),
    (Q.defaultProps = { height: 1760, width: 1200 }),
    I(
      Q,
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
            {
              cssFamilyName: `Inter`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Inter`,
              url: `https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZ1rib2Bg-4.woff2`,
              weight: `400`,
            },
          ],
        },
        ...tt,
        ...nt,
        ...S(Ze),
        ...S(ve),
        ...S(R),
        ...S(fe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([b(G, {}, t)])) }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerrTY_RGksB`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `{"OdTjslwjD":{"pattern":":OdTjslwjD","name":"contact"}}`,
            framerIntrinsicHeight: `1760`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"tWuTnIxdD":{"layout":["fixed","auto"]},"lg8iEl3V8":{"layout":["fixed","auto"]}}}`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, it as queryParamNames };
//# sourceMappingURL=WDcZlxhx5tTr-4Votc0ilPJlFOjdH177_9JkhSSVAVc.DJKMRYdp.mjs.map
