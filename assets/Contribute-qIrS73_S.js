import { u as r, c as n, a as e, b as t, o as l } from "./index-nWkXIawp.js";
const i = { class: "pt-36 text-white w-full", style: { "min-height": "90vh" } },
  a = { class: "flex flex-wrap justify-center w-full relative mt-20" },
  c = { class: "sm:w-3/4 md:w-1/2 xl:w-1/3 w-5/6" },
  u = { class: "bg-sec p-10 rounded-xl h-full" },
  d = { class: "text-center w-full" },
  h = e(
    "div",
    { class: "text-3xl font-bold text-lime-400" },
    " Contribute to NVDA's Network ",
    -1
  ),
  p = e(
    "div",
    { class: "my-7 text-lime-50" },
    [
      t(
        " Thank you for your interest in contributing to the NVDA network, where "
      ),
      e("b", null, "decentralized GPU sharing"),
      t(" is key to improve accessibility to "),
      e("b", null, "LLMs"),
      t(". Our "),
      e("b", null, '"Contribute"'),
      t(
        " section is currently under development and will soon allow you to leverage your GPU power to earn "
      ),
      e("b", null, "$NVDA"),
      t(". "),
    ],
    -1
  ),
  v = {
    __name: "Contribute",
    setup(_) {
      return (
        r(),
        (s, o) => (
          l(),
          n("div", i, [
            e("div", a, [
              e("div", c, [
                e("div", u, [
                  e("div", d, [
                    h,
                    p,
                    e(
                      "span",
                      {
                        onClick: o[0] || (o[0] = (m) => s.$router.push("/")),
                        class:
                          "p-3 rounded-xl bg-gray-600 text-white opacity-50 px-16 cursor-pointer transition ease-in-out duration-300 transform hover:scale-90 hover:bg-gray-700",
                      },
                      "Go Back"
                    ),
                  ]),
                ]),
              ]),
            ]),
          ])
        )
      );
    },
  };
export { v as default };
