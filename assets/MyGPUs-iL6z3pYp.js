import {
  o,
  c as n,
  a as e,
  t as d,
  b as p,
  g as m,
  F as y,
  k as _,
  n as h,
  w as $,
  v as C,
  u as P,
  r,
  l as S,
} from "./index-nWkXIawp.js";
import { _ as I } from "./gpubg-hAwauZ-d.js";
import { _ as M } from "./_plugin-vue_export-helper-x3n3nnut.js";
const G = {
    name: "SelfGPU",
    props: { datas: {} },
    async mounted() {
      this.getGpuPrice();
    },
    methods: {
      stakeGpu() {
        this.$store.commit("STAKE_GPU", {
          projectId: this.selectedProject,
          gpuId: this.datas.id,
        });
      },
      unstakeGpu() {
        this.$store.commit("UNSTAKE_GPU", this.datas.id);
      },
      sell() {
        this.$store.commit("SELL_GPU", {
          id: this.datas.id,
          price: this.price * 10 ** 18,
        });
      },
      async getGpuPrice() {
        try {
          const t = await this.$store.state.gpuContract.convertPrice(
            this.datas.id
          );
          this.priceInKai = parseFloat(t.toString()) / 10 ** 18;
        } catch (t) {
          return console.error("No Price :", t), null;
        }
      },
    },
    data: function () {
      return {
        showStakeModal: !1,
        showSellModal: !1,
        selectedProject: void 0,
        price: void 0,
        priceInKai: 0,
      };
    },
  },
  D = {
    class:
      "z-0 rounded-xl bg-gray-500 bg-opacity-10 text-lime-50 px-5 py-3 relative my-5 mr-5 zoom",
    style: { width: "550px" },
  },
  U = { style: { "z-index": "1000 !important" } },
  K = { class: "text-2xl font-bold" },
  A = { class: "text-gray-300 mr-3" },
  z = e("div", null, "NVIDIA Turing, 2,560 CUDA cores, 1250MHz", -1),
  T = e("div", { class: "mt-10 font-thin" }, "16GB GDDR6", -1),
  V = e(
    "div",
    { class: "flex font-thin" },
    [
      e(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 20 24",
          "stroke-width": "2",
          stroke: "currentColor",
          class: "size-5 text-lime-400 mr-1",
        },
        [
          e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5",
          }),
        ]
      ),
      e("div", null, "300 Gbps"),
    ],
    -1
  ),
  E = { class: "flex justify-between mt-14" },
  L = { class: "font-bold text-lg" },
  N = { key: 0 },
  B = { class: "text-lime-400" },
  F = { key: 1 },
  R = { class: "text-lime-400" },
  Y = { key: 2, class: "text-orange-400 text-base" },
  H = { key: 3, class: "flex" },
  W = { key: 0, class: "text-lime-400 ml-2" },
  q = { key: 1, class: "text-lime-400 ml-2" },
  J = { class: "flex justify-end" },
  O = { key: 1, class: "flex" },
  Q = e(
    "img",
    {
      class: "absolute top-0",
      style: { right: "-0px", "z-index": "-1" },
      src: I,
    },
    null,
    -1
  ),
  X = {
    key: 0,
    class: "absolute bg-lime-400 top-5 right-7 rounded-full p-2 ping",
  },
  Z = {
    key: 1,
    class: "absolute bg-orange-400 top-5 right-7 rounded-full p-2",
  },
  ee = {
    key: 2,
    class:
      "bg-gray-950 opacity-90 h-full w-full z-1000 absolute left-0 top-0 rounded-xl",
  },
  te = e(
    "div",
    { class: "font-bold m-3 ml-5 text-xl" },
    "Select a project to NVDA",
    -1
  ),
  se = { class: "m-5" },
  oe = ["onClick"],
  ne = { class: "flex mt-5 absolute bottom-0 right-0 m-4" },
  ie = {
    key: 3,
    class:
      "bg-gray-950 opacity-90 h-full w-full z-1000 absolute left-0 top-0 rounded-xl",
  },
  le = e(
    "div",
    { class: "font-bold m-3 ml-5 text-xl" },
    "Enter your price in $",
    -1
  ),
  re = { class: "m-5" },
  ae = { class: "flex mt-5 absolute bottom-0 right-0 m-4 text-white" };
function de(t, s, i, x, g, u) {
  return (
    o(),
    n("div", D, [
      e("div", U, [
        e("div", K, [
          e("span", A, "#" + d(i.datas.id), 1),
          p(" 1/10 NVIDIA Tesla T4 "),
        ]),
        z,
        T,
        V,
        e("div", E, [
          e("div", L, [
            i.datas.startKomputing > 0
              ? (o(),
                n("div", N, [
                  p(" Staked in "),
                  e(
                    "span",
                    B,
                    d(t.$store.state.projects.names[i.datas.stakedIn]),
                    1
                  ),
                ]))
              : m("", !0),
            i.datas.startKomputing > 0
              ? (o(),
                n("div", F, [
                  p(" Daily Earn "),
                  e(
                    "span",
                    R,
                    "~" +
                      d(t.$store.state.projects.rewards[i.datas.stakedIn]) +
                      " $NVDA",
                    1
                  ),
                ]))
              : (o(), n("div", Y, "Must be stake to earn ⚠️")),
            i.datas.sellPrice > 0
              ? (o(),
                n("div", H, [
                  p(" Price "),
                  i.datas.sellPrice > 1e12
                    ? (o(),
                      n(
                        "span",
                        W,
                        d(t.priceInKai.toFixed(2)) +
                          " NVDA (" +
                          d(i.datas.sellPrice / 10 ** 18) +
                          " $)",
                        1
                      ))
                    : (o(), n("span", q, " 0 $")),
                  e(
                    "div",
                    {
                      onClick:
                        s[0] ||
                        (s[0] = (l) => {
                          (t.price = 0), u.sell();
                        }),
                      class: "text-red-500 cursor-pointer ml-2 text-sm mt-1",
                    },
                    " Unlist "
                  ),
                ]))
              : m("", !0),
          ]),
          e("div", J, [
            i.datas.sellPrice == 0
              ? (o(),
                n(
                  "div",
                  {
                    key: 0,
                    class:
                      "h-16 rounded-3xl bg-gray-500 bg-opacity-50 px-10 py-4 text-gray-400 mr-5 font-bold cursor-pointer text-2xl items-center flex justify-center hover:outline-gray-400 hover:outline outline-1",
                    onClick: s[1] || (s[1] = (l) => (t.showSellModal = !0)),
                  },
                  " Sell "
                ))
              : m("", !0),
            i.datas.stakedIn == 0
              ? (o(),
                n("div", O, [
                  e(
                    "div",
                    {
                      class:
                        "h-16 rounded-3xl bg-gray-500 bg-opacity-50 px-7 py-4 text-lime-400 mr-5 font-bold cursor-pointer text-2xl items-center flex justify-center hover:outline-lime-400 hover:outline outline-1",
                      onClick: s[2] || (s[2] = (l) => (t.showStakeModal = !0)),
                    },
                    " Stake "
                  ),
                ]))
              : (o(),
                n(
                  "div",
                  {
                    key: 2,
                    onClick: s[3] || (s[3] = (l) => u.unstakeGpu()),
                    class:
                      "h-16 rounded-3xl bg-gray-500 bg-opacity-50 px-7 py-4 text-orange-400 mr-5 font-bold cursor-pointer text-2xl items-center flex justify-center hover:outline-orange-400 hover:outline outline-1",
                  },
                  " Unstake "
                )),
          ]),
        ]),
      ]),
      Q,
      i.datas.stakedIn > 0 ? (o(), n("div", X)) : (o(), n("div", Z)),
      t.showStakeModal
        ? (o(),
          n("div", ee, [
            te,
            e("div", se, [
              (o(!0),
              n(
                y,
                null,
                _(
                  t.$store.state.projects.names,
                  (l, c) => (
                    o(),
                    n(
                      "div",
                      {
                        class: h([
                          "cursor-pointer font-bold",
                          {
                            "text-lime-400": t.selectedProject == c,
                            hidden: c == 0,
                          },
                        ]),
                        key: c,
                        onClick: (b) => (t.selectedProject = c),
                      },
                      d(l) +
                        ": " +
                        d(t.$store.state.projects.rewards[c]) +
                        " $NVDA per day ",
                      11,
                      oe
                    )
                  )
                ),
                128
              )),
              e("div", ne, [
                e(
                  "div",
                  {
                    onClick: s[4] || (s[4] = (l) => u.stakeGpu()),
                    class: h([
                      {
                        "opacity-50 pointer-events-none":
                          t.selectedProject == null,
                      },
                      "rounded-3xl bg-gray-500 bg-opacity-50 px-7 py-4 text-lime-400 mr-5 font-bold cursor-pointer text-2xl items-center flex justify-center hover:outline-lime-400 hover:outline outline-1",
                    ]),
                  },
                  " Confirm ",
                  2
                ),
                e(
                  "div",
                  {
                    onClick: s[5] || (s[5] = (l) => (t.showStakeModal = !1)),
                    class:
                      "rounded-3xl bg-gray-500 bg-opacity-50 px-9 py-4 text-orange-400 mr-5 font-bold cursor-pointer text-2xl items-center flex justify-center hover:outline-orange-400 hover:outline outline-1",
                  },
                  " Cancel "
                ),
              ]),
            ]),
          ]))
        : m("", !0),
      t.showSellModal
        ? (o(),
          n("div", ie, [
            le,
            $(
              e(
                "input",
                {
                  "onUpdate:modelValue": s[6] || (s[6] = (l) => (t.price = l)),
                  type: "text",
                  name: "price",
                  id: "price",
                  class:
                    "block m-3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                  placeholder: "0.00 $",
                },
                null,
                512
              ),
              [[C, t.price]]
            ),
            e("div", re, [
              e("div", ae, [
                e(
                  "div",
                  {
                    onClick: s[7] || (s[7] = (l) => u.sell()),
                    class: h([
                      {
                        "opacity-50 pointer-events-none":
                          !t.price || !parseFloat(t.price),
                      },
                      "rounded-3xl bg-gray-500 bg-opacity-50 px-7 py-4 text-lime-400 mr-5 font-bold cursor-pointer text-2xl items-center flex justify-center hover:outline-lime-400 hover:outline outline-1",
                    ]),
                  },
                  " Confirm ",
                  2
                ),
                e(
                  "div",
                  {
                    onClick: s[8] || (s[8] = (l) => (t.showSellModal = !1)),
                    class:
                      "rounded-3xl bg-gray-500 bg-opacity-50 px-9 py-4 text-orange-400 mr-5 font-bold cursor-pointer text-2xl items-center flex justify-center hover:outline-orange-400 hover:outline outline-1",
                  },
                  " Cancel "
                ),
              ]),
            ]),
          ]))
        : m("", !0),
    ])
  );
}
const ce = M(G, [["render", de]]),
  ue = { class: "p-7 w-full" },
  me = { class: "flex justify-center md:justify-end mb-5 mt-10" },
  pe = {
    class:
      "text-white mt-20 text-2xl text-center w-72 p-5 bg-gray-500 bg-opacity-10 mx-10 rounded-xl",
  },
  fe = { class: "text-lime-400" },
  he = { key: 0, class: "text-center text-white text-xl mt-20" },
  xe = e(
    "a",
    { href: "/marketplace", class: "text-lime-400 cursor-pointer underline" },
    "Marketplace",
    -1
  ),
  ge = { class: "flex justify-center flex-wrap" },
  be = {
    __name: "MyGPUs",
    setup(t) {
      const s = P();
      r(void 0);
      const i = new Date(Date.UTC(2024, 0, 31, 20, 30, 0)),
        x = setInterval(k, 1e3);
      let g = r(0),
        u = r(0),
        l = r(0),
        c = r(0);
      r(6), r(!0), r(!1), Math.floor(new Date().getTime() / 1e3), r(!1);
      function k() {
        const a = i - new Date();
        (g.value = Math.floor(a / (1e3 * 60 * 60 * 24))),
          (u.value = Math.floor((a % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60))),
          (l.value = Math.floor((a % (1e3 * 60 * 60)) / (1e3 * 60))),
          (c.value = r(Math.floor((a % (1e3 * 60)) / 1e3))),
          a <= 0 && clearInterval(x);
      }
      function w() {
        s.commit("CLAIM_GPU_REWARDS");
      }
      return (
        (localStorage.stakingVisited = !0),
        (f, a) => (
          o(),
          n("div", ue, [
            e("div", me, [
              e("div", pe, [
                p(" Rewards : "),
                e(
                  "span",
                  fe,
                  d((f.$store.state.rewards / 10 ** 18).toFixed(2)) + " NVDA ",
                  1
                ),
                e(
                  "div",
                  {
                    class: h([
                      {
                        "opacity-50 pointer-events-none":
                          f.$store.state.rewards == 0,
                      },
                      "mt-3 mx-7 rounded-3xl bg-gray-500 bg-opacity-50 px-7 py-4 text-lime-400 mr-5 font-bold cursor-pointer text-2xl items-center flex justify-center hover:outline-lime-400 hover:outline outline-1",
                    ]),
                    onClick: a[0] || (a[0] = (v) => w()),
                  },
                  " Claim ",
                  2
                ),
              ]),
            ]),
            f.$store.state.myGpus.length
              ? m("", !0)
              : (o(),
                n("div", he, [
                  p(" You do not own a GPU. You can buy them on the "),
                  xe,
                ])),
            e("div", ge, [
              (o(!0),
              n(
                y,
                null,
                _(
                  f.$store.state.myGpus,
                  (v, j) => (
                    o(), S(ce, { key: j, datas: v }, null, 8, ["datas"])
                  )
                ),
                128
              )),
            ]),
          ])
        )
      );
    },
  };
export { be as default };
