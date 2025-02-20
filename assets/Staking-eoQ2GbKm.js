import {
  u as E,
  r as u,
  c as n,
  e as t,
  a as e,
  i as r,
  g,
  t as x,
  b as h,
  w as Q,
  v as N,
  n as b,
  F as D,
  o as i,
  j as H,
} from "./index-nWkXIawp.js";
const y =
    "/assets/VRAM.png",
  R = {
    key: 0,
    class:
      "w-full h-screen top-0 left-0 bg-opacity-50 bg-black fixed flex items-center justify-center",
    style: { "z-index": "1" },
  },
  _ = { class: "bg-sec p-5 py-10 rounded-xl w-3/4 md:w-1/4 text-center" },
  K = { key: 0, class: "text-yellow-500" },
  S = { key: 1, class: "text-gray-200" },
  T = { class: "flex justify-between w-full text-white mt-7" },
  z = { class: "flex justify-center p-5 py-44 w-full" },
  q = { class: "w-full md:w-2/3 xl:w-1/2 2xl:w-1/3" },
  U = e(
    "div",
    { class: "text-center text-lime-50 w-full mb-5" },
    " Staking a minimum of 500 NVDA will grant access to future token launches on our launchpad (AIPAD). ",
    -1
  ),
  O = { class: "text-white rounded-xl w-full" },
  V = { class: "w-full flex mb-3" },
  Z = {
    key: 0,
    class: "rounded-xl bg-sec bg-opacity-50 p-5 px-2 md:px-5 w-full mr-3",
  },
  P = e("div", { class: "text-sm text-gray-400 mb-2" }, "TVL", -1),
  L = { class: "text-xs md:text-base" },
  J = { class: "rounded-xl bg-sec bg-opacity-50 p-5 px-2 md:px-5 w-full mr-3" },
  F = e("div", { class: "text-sm text-gray-400 mb-2" }, "APR", -1),
  X = { key: 0, class: "text-xs md:text-base blink-1" },
  W = { class: "rounded-xl bg-sec bg-opacity-50 p-5 px-2 md:px-5 w-full" },
  $ = e("div", { class: "text-sm text-gray-400 mb-2" }, "APY", -1),
  tt = { key: 0, class: "text-xs md:text-base blink-1" },
  et = { class: "rounded-xl bg-sec bg-opacity-50 relative" },
  st = {
    key: 0,
    class:
      "absolute h-full w-full bg-gray-900 bg-opacity-80 z-10 text-xl md:text-2xl flex items-center justify-center rounded-xl text-center pt-1 md:pt-5",
  },
  ot = { key: 0 },
  lt = { class: "p-5 md:p-10" },
  nt = { class: "flex justify-between mt-5 mb-2" },
  it = e("div", null, "Staked:", -1),
  at = e("img", { class: "w-5 inline m-1 mb-2", src: y }, null, -1),
  dt = e("div", null, "AIPad membership:", -1),
  rt = { key: 0, class: "text-blue-500 flex" },
  ct = { key: 0 },
  ut = { key: 1 },
  mt = { key: 2 },
  gt = { key: 1, class: "text-red-500 text-sm" },
  xt = H(
    '<div class="text-teal-200"> AIPAD membership offers three tiers, each providing priority access to its launches and increasing GPU discounts commensurate with your tier. </div><div class="flex justify-between flex-wrap mt-3"><div class="text-orange-400">Level 1 &gt; 500 NVDA</div><div class="text-gray-400">Level 2 &gt; 2000 NVDA</div><div class="text-yellow-400">Level 3 &gt; 10000 NVDA</div></div>',
    2
  ),
  vt = [xt],
  ht = { class: "my-3 relative" },
  bt = e(
    "div",
    {
      style: { top: "1px", right: "0px" },
      class:
        "absolute text-black m-2 mt-2 border-l-2 px-2 border-gray-800 text-gray-800",
    },
    " NVDA ",
    -1
  ),
  ft = e("div", { class: "border-b my-7" }, null, -1),
  pt = { class: "flex justify-between my-5" },
  At = e("div", null, "Rewards:", -1),
  wt = e("img", { class: "w-5 inline m-1 mb-2", src: y }, null, -1),
  yt = { class: "my-5 flex" },
  Ct = {
    __name: "Staking",
    setup(kt) {
      const o = E();
      let d = u(void 0);
      const k = new Date(Date.UTC(2024, 0, 31, 20, 30, 0)),
        M = setInterval(Y, 1e3);
      let I = u(0),
        p = u(0),
        A = u(0),
        C = u(0),
        l = u(6),
        v = u(!0),
        c = u(!1);
      const B = Math.floor(new Date().getTime() / 1e3);
      let G = { 1: 15, 3: 20, 6: 25 },
        j = { 1: 16.17, 3: 22.13, 6: 28.39 },
        m = u(!1);
      function Y() {
        const s = k - new Date();
        (I.value = Math.floor(s / (1e3 * 60 * 60 * 24))),
          (p.value = Math.floor((s % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60))),
          (A.value = Math.floor((s % (1e3 * 60 * 60)) / (1e3 * 60))),
          (C.value = u(Math.floor((s % (1e3 * 60)) / 1e3))),
          s <= 0 && clearInterval(M);
      }
      function f() {
        (v.value = !1),
          setTimeout(() => {
            v.value = !0;
          }, 0);
      }
      return (
        (localStorage.stakingVisited = !0),
        setTimeout(() => {
          o.state.staking.lockMonths && (l.value = o.state.staking.lockMonths);
        }, 3e3),
        (w, s) => (
          i(),
          n(
            D,
            null,
            [
              t(c)
                ? (i(),
                  n("div", R, [
                    e("div", _, [
                      t(o).state.staking.lockTime > t(B)
                        ? (i(),
                          n(
                            "div",
                            K,
                            ` Warning: You're attempting to withdraw your tokens before the unlock date you selected. If you proceed, a 10% tax will be deducted from your balance." `
                          ))
                        : (i(),
                          n(
                            "div",
                            S,
                            " Are you sure you want to unstack your tokens? "
                          )),
                      e("div", T, [
                        e(
                          "button",
                          {
                            onClick:
                              s[0] ||
                              (s[0] = (a) => {
                                t(o).commit("UNSTAKE_NVDA"),
                                  r(c) ? (c.value = !1) : (c = !1);
                              }),
                            class:
                              "w-1/2 text-center bg-red-500 rounded-md mr-5 p-2 font-bold",
                          },
                          " Confirm "
                        ),
                        e(
                          "button",
                          {
                            onClick:
                              s[1] ||
                              (s[1] = (a) =>
                                r(c) ? (c.value = !1) : (c = !1)),
                            class:
                              "w-1/2 text-center bg-gray-700 text-gray-400 rounded-md ml-5 p-2 font-bold",
                          },
                          " Back "
                        ),
                      ]),
                    ]),
                  ]))
                : g("", !0),
              e("div", z, [
                e("div", q, [
                  U,
                  e("div", O, [
                    e("div", V, [
                      t(o).state.tvl
                        ? (i(),
                          n("div", Z, [
                            P,
                            e("div", L, x(t(o).state.tvl) + " NVDA", 1),
                          ]))
                        : g("", !0),
                      e("div", J, [
                        F,
                        t(v)
                          ? (i(), n("div", X, x(t(G)[t(l)]) + "% ", 1))
                          : g("", !0),
                      ]),
                      e("div", W, [
                        $,
                        t(v)
                          ? (i(), n("div", tt, x(t(j)[t(l)]) + "% ", 1))
                          : g("", !0),
                      ]),
                    ]),
                    e("div", et, [
                      t(o).state.contractInPause
                        ? (i(),
                          n("div", st, [
                            t(p) || t(A) || w.secondes
                              ? (i(), n("span", ot, " Connect your wallet "))
                              : g("", !0),
                          ]))
                        : g("", !0),
                      e("div", lt, [
                        e("div", nt, [
                          it,
                          e("div", null, [
                            h(x(t(o).state.staking.amount || 0) + " ", 1),
                            at,
                            h(" NVDA "),
                          ]),
                        ]),
                        e(
                          "div",
                          {
                            class: "flex justify-between mb-5 cursor-help",
                            onClick:
                              s[2] ||
                              (s[2] = (a) =>
                                r(m) ? (m.value = !t(m)) : (m = !t(m))),
                          },
                          [
                            dt,
                            t(o).state.staking.amount >= 500
                              ? (i(),
                                n("div", rt, [
                                  t(o).state.staking.amount >= 1e4
                                    ? (i(), n("div", ct, "level 3"))
                                    : t(o).state.staking.amount >= 2e3
                                    ? (i(), n("div", ut, "level 2"))
                                    : (i(), n("div", mt, "level 1")),
                                ]))
                              : (i(), n("div", gt, "Stake 500 NVDA min")),
                          ]
                        ),
                        t(m)
                          ? (i(),
                            n(
                              "div",
                              {
                                key: 0,
                                onClick:
                                  s[3] ||
                                  (s[3] = (a) =>
                                    r(m) ? (m.value = !1) : (m = !1)),
                                class:
                                  "p-4 rounded-xl bg-opacity-10 bg-white mb-5 text-xs cursor-pointer",
                              },
                              vt
                            ))
                          : g("", !0),
                        e("div", ht, [
                          Q(
                            e(
                              "input",
                              {
                                id: "numericInput",
                                type: "text",
                                class:
                                  "border border-gray-300 rounded-md p-2 mb-4 text-black w-full text-end pr-20",
                                "onUpdate:modelValue":
                                  s[4] ||
                                  (s[4] = (a) =>
                                    r(d) ? (d.value = a) : (d = a)),
                                placeholder: "0.0",
                              },
                              null,
                              512
                            ),
                            [[N, t(d)]]
                          ),
                          bt,
                          e(
                            "div",
                            {
                              style: { top: "-3px", left: "-2px" },
                              class:
                                "absolute m-2 mt-2 px-2 text-white bg-gray-800 rounded p-1 cursor-pointer",
                              onClick:
                                s[5] ||
                                (s[5] = (a) =>
                                  r(d)
                                    ? (d.value = t(o).state.kaiBalance)
                                    : (d = t(o).state.kaiBalance)),
                            },
                            " MAX "
                          ),
                          e(
                            "div",
                            {
                              class: b([
                                "my-5 flex",
                                {
                                  "opacity-50 pointer-events-none":
                                    t(o).state.staking.lockMonths,
                                },
                              ]),
                            },
                            [
                              e(
                                "button",
                                {
                                  class: b([
                                    {
                                      "bg-lime-600":
                                        t(o).state.staking.lockMonths == 1 ||
                                        (t(l) == 1 &&
                                          !t(o).state.staking.lockMonths),
                                    },
                                    "text-sm md:text-md text-white font-bold py-2 px-4 rounded-xl w-full transition duration-300 ease-in-out hover:bg-lime-700 border-lime-700 border",
                                  ]),
                                  onClick:
                                    s[6] ||
                                    (s[6] = (a) => {
                                      r(l) ? (l.value = 1) : (l = 1), f();
                                    }),
                                },
                                " 1 months ",
                                2
                              ),
                              e(
                                "button",
                                {
                                  class: b([
                                    {
                                      "bg-lime-600":
                                        t(o).state.staking.lockMonths == 3 ||
                                        (t(l) == 3 &&
                                          !t(o).state.staking.lockMonths),
                                    },
                                    "text-sm md:text-md text-white font-bold py-2 px-4 rounded-xl w-full mx-2 transition duration-300 ease-in-out hover:bg-lime-700 border-lime-700 border",
                                  ]),
                                  onClick:
                                    s[7] ||
                                    (s[7] = (a) => {
                                      r(l) ? (l.value = 3) : (l = 3), f();
                                    }),
                                },
                                " 3 months ",
                                2
                              ),
                              e(
                                "button",
                                {
                                  class: b([
                                    {
                                      "bg-lime-600":
                                        t(o).state.staking.lockMonths == 6 ||
                                        (t(l) == 6 &&
                                          !t(o).state.staking.lockMonths),
                                    },
                                    "text-sm md:text-md text-white font-bold py-2 px-4 rounded-xl w-full transition duration-300 ease-in-out hover:bg-lime-700 border-lime-700 border",
                                  ]),
                                  onClick:
                                    s[8] ||
                                    (s[8] = (a) => {
                                      r(l) ? (l.value = 6) : (l = 6), f();
                                    }),
                                },
                                " 6 months ",
                                2
                              ),
                            ],
                            2
                          ),
                          e(
                            "button",
                            {
                              class:
                                "p-3 rounded-xl bg-lime-600 text-white w-full cursor-pointer transition ease-in-out duration-300 transform hover:scale-95 hover:bg-lime-700 font-bold",
                              onClick:
                                s[9] ||
                                (s[9] = (a) => (
                                  t(o).commit("STAKE_NVDA", {
                                    amount: t(d),
                                    timeLock: t(l),
                                  }),
                                  r(d) ? (d.value = void 0) : (d = void 0)
                                )),
                            },
                            " STAKE NVDA "
                          ),
                        ]),
                        ft,
                        e("div", pt, [
                          At,
                          e("div", null, [
                            h(x(t(o).state.staking.rewardsEarned) + " ", 1),
                            wt,
                            h(" NVDA "),
                          ]),
                        ]),
                        e("div", yt, [
                          e(
                            "button",
                            {
                              class:
                                "text-sm md:text-md bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-xl w-full mr-2 transition duration-300 ease-in-out",
                              onClick:
                                s[10] ||
                                (s[10] = (a) => t(o).commit("COMPOUND")),
                            },
                            " Compound "
                          ),
                          e(
                            "button",
                            {
                              class:
                                "text-sm md:text-md bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-xl w-full ml-2 transition duration-300 ease-in-out",
                              onClick:
                                s[11] || (s[11] = (a) => t(o).commit("CLAIM")),
                            },
                            " Claim Rewards "
                          ),
                        ]),
                        e(
                          "button",
                          {
                            class:
                              "p-3 rounded-xl bg-gray-600 text-white opacity-50 w-full cursor-pointer transition ease-in-out duration-300 transform hover:scale-95 hover:bg-gray-700",
                            onClick:
                              s[12] ||
                              (s[12] = (a) =>
                                r(c) ? (c.value = !0) : (c = !0)),
                          },
                          " UNSTAKE NVDA "
                        ),
                      ]),
                    ]),
                  ]),
                  g("", !0),
                ]),
              ]),
            ],
            64
          )
        )
      );
    },
  };
export { Ct as default };
