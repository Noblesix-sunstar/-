if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    data() {
      return {
        title: "\u6CB3\u6D77\u667A\u884C \u96BE\u6C11\u7248",
        school_list: [
          { id: 1, school_name: "\u6C5F\u5B81\u6821\u533A" },
          { id: 2, school_name: "\u897F\u5EB7\u8DEF\u6821\u533A" }
        ],
        chosen_school: "\u9009\u62E9\u6821\u533A",
        gate_list: [
          { id: 1, gate_name: "\u4E1C\u95E8" },
          { id: 2, gate_name: "\u5357\u95E8" },
          { id: 3, gate_name: "\u897F\u95E8" },
          { id: 4, gate_name: "\u5317\u95E8" }
        ],
        chosen_gate: "\u9009\u62E9\u5927\u95E8",
        name: "\u5F20\u4E09",
        college: "\u6478\u9C7C\u5B66\u9662",
        id: "810975"
      };
    },
    onLoad() {
    },
    methods: {
      school_select(e) {
        const index = e.detail.value;
        this.chosen_school = this.school_list[index].school_name;
        formatAppLog("log", "at pages/index/index.vue:60", this.chosen_school);
      },
      gate_select(e) {
        const index = e.detail.value;
        this.chosen_gate = this.gate_list[index].gate_name;
        formatAppLog("log", "at pages/index/index.vue:66", this.chosen_gate);
      },
      jump() {
        uni.navigateTo({
          url: "../menu/menu",
          success: (res) => {
            res.eventChannel.emit("acceptDataFromOpenerPage", [this.$data.name, this.$data.college, this.$data.chosen_school, this.$data.chosen_gate, this.$data.id]);
            formatAppLog("log", "at pages/index/index.vue:73", "success");
          },
          fail: (res) => {
            formatAppLog("log", "at pages/index/index.vue:76", res);
          }
        });
        formatAppLog("log", "at pages/index/index.vue:79", "\u786E\u5B9A");
      },
      input_name(e) {
        formatAppLog("log", "at pages/index/index.vue:82", e.detail.value);
        this.name = e.detail.value;
      },
      input_college(e) {
        formatAppLog("log", "at pages/index/index.vue:86", e.detail.value);
        this.college = e.detail.value;
      },
      input_id(e) {
        formatAppLog("log", "at pages/index/index.vue:90", e.detail.value);
        this.id = e.detail.value;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(' <image class="logo" src="/static/logo.png"></image> '),
      vue.createElementVNode("view", { class: "text-area" }, [
        vue.createElementVNode("text", { class: "title" }, vue.toDisplayString($data.title), 1)
      ]),
      vue.createElementVNode("div", { class: "info_show" }, [
        vue.createElementVNode("view", { class: "text-box" }, [
          vue.createElementVNode("view", { class: "hint" }, "\u8F93\u5165\u59D3\u540D"),
          vue.createElementVNode("input", {
            class: "uni-input",
            focus: "",
            placeholder: "\u5F20\u4E09",
            onInput: _cache[0] || (_cache[0] = (...args) => $options.input_name && $options.input_name(...args))
          }, null, 32),
          vue.createElementVNode("view", { class: "hint" }, "\u8F93\u5165\u5B66\u9662\u4FE1\u606F"),
          vue.createElementVNode("input", {
            class: "uni-input",
            focus: "",
            placeholder: "\u6478\u9C7C\u5B66\u9662",
            onInput: _cache[1] || (_cache[1] = (...args) => $options.input_college && $options.input_college(...args))
          }, null, 32),
          vue.createElementVNode("view", { class: "hint" }, "\u8F93\u5165id"),
          vue.createElementVNode("input", {
            class: "uni-input",
            focus: "",
            placeholder: "810975",
            onInput: _cache[2] || (_cache[2] = (...args) => $options.input_id && $options.input_id(...args))
          }, null, 32)
        ]),
        vue.createElementVNode("picker", {
          mode: "selector",
          range: $data.school_list,
          "range-key": "school_name",
          onChange: _cache[3] || (_cache[3] = (...args) => $options.school_select && $options.school_select(...args))
        }, [
          vue.createElementVNode("view", { class: "hint" }, vue.toDisplayString($data.chosen_school), 1)
        ], 40, ["range"]),
        vue.createElementVNode("picker", {
          mode: "selector",
          range: $data.gate_list,
          "range-key": "gate_name",
          onChange: _cache[4] || (_cache[4] = (...args) => $options.gate_select && $options.gate_select(...args))
        }, [
          vue.createElementVNode("view", { class: "hint" }, vue.toDisplayString($data.chosen_gate), 1)
        ], 40, ["range"]),
        vue.createElementVNode("button", {
          class: "confirm",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.jump && $options.jump(...args))
        }, "\u786E\u5B9A")
      ])
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/Code/hhzx/pages/index/index.vue"]]);
  const _sfc_main$2 = {
    created() {
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on("Send", (para) => {
        this.$data.name = para[0];
        this.$data.college = para[1];
        this.$data.school = para[2];
        this.$data.gate = para[3];
        formatAppLog("log", "at pages/home/home.vue:27", para);
      });
      this.dateTimeStr();
    },
    data() {
      return {
        school: "single everyday university",
        gate: "\u963F\u95E8",
        name: "\u5F20\u4E09",
        college: "\u6478\u9C7C\u5B66\u9662",
        dateTime: {
          "year": 2022,
          "month": 1,
          "day": 10,
          "hour": 14,
          "minute": 47
        }
      };
    },
    onLoad() {
    },
    methods: {
      dateTimeStr() {
        var date = new Date(), year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(), hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(), minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        if (month < 10) {
          month = "0" + String(month);
        }
        this.$data.dateTime["year"] = year;
        this.$data.dateTime["month"] = month;
        this.$data.dateTime["day"] = day;
        this.$data.dateTime["hour"] = hour;
        this.$data.dateTime["minute"] = minute;
        formatAppLog("log", "at pages/home/home.vue:67", this.$data.dateTime);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("div", { class: "top_info" }, [
        vue.createElementVNode("image", {
          class: "icon",
          src: "/static/icon.png"
        }),
        vue.createElementVNode("div", { class: "name" }, vue.toDisplayString(this.$data.name), 1),
        vue.createElementVNode("div", { class: "college_and_school" }, vue.toDisplayString(this.$data.college) + " (" + vue.toDisplayString(this.$data.school) + ")", 1)
      ]),
      vue.createElementVNode("div", { class: "info_show" }, [
        vue.createElementVNode("div", { class: "time" }, vue.toDisplayString(this.$data.dateTime["month"]) + "\u6708" + vue.toDisplayString(this.$data.dateTime["day"]) + "\u65E5 " + vue.toDisplayString(this.$data.dateTime["hour"]) + ":" + vue.toDisplayString(this.$data.dateTime["minute"]), 1),
        vue.createElementVNode("image", {
          class: "qcode",
          src: "/static/green_code.jpg"
        }),
        vue.createElementVNode("div", { class: "greetings" }, "\u795D\u4F60\u5E73\u5B89"),
        vue.createElementVNode("div", { class: "gate_info" }, "\u95E8\u5C97-" + vue.toDisplayString(this.$data.school) + vue.toDisplayString(this.$data.gate) + " (\u51FA\u95E8\u7801) ", 1)
      ]),
      vue.createElementVNode("div", { class: "bottom_info" }, "\u6280\u672F\u652F\u6301-\u5357\u4EAC\u6CB3\u6D77\u79D1\u6280\u6709\u9650\u516C\u53F8")
    ]);
  }
  var PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/Code/hhzx/pages/home/home.vue"]]);
  const _sfc_main$1 = {
    created() {
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on("acceptDataFromOpenerPage", (para) => {
        this.$data.name = para[0];
        this.$data.college = para[1];
        this.$data.school = para[2];
        this.$data.gate = para[3];
        this.$data.id = para[4];
        for (var i = 0; i < 5; i++) {
          formatAppLog("log", "at pages/menu/menu.vue:56", para[i]);
        }
      });
    },
    data() {
      return {
        school: "",
        gate: "",
        name: "",
        college: "",
        id: ""
      };
    },
    onLoad() {
    },
    methods: {
      jump() {
        uni.navigateTo({
          url: "../home/home",
          success: (res) => {
            res.eventChannel.emit("Send", [this.$data.name, this.$data.college, this.$data.school, this.$data.gate, this.$data.id]);
            formatAppLog("log", "at pages/menu/menu.vue:79", "success");
          },
          fail: (res) => {
            formatAppLog("log", "at pages/menu/menu.vue:82", res);
          }
        });
        formatAppLog("log", "at pages/menu/menu.vue:85", "\u786E\u5B9A");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { id: "background" }, [
      vue.createElementVNode("div", { class: "top_info" }, [
        vue.createElementVNode("image", {
          class: "icon",
          src: "/static/icon.png"
        }),
        vue.createElementVNode("div", { class: "name" }, vue.toDisplayString(this.$data.name) + " \u3010\u5B66\u751F\u3011", 1),
        vue.createElementVNode("div", { class: "role" }, "\u5B66\u751F"),
        vue.createElementVNode("div", { class: "college_and_school" }, vue.toDisplayString(this.$data.college), 1)
      ]),
      vue.createElementVNode("div", { class: "main" }, [
        vue.createElementVNode("div", null, [
          vue.createElementVNode("div", { id: "check" }, "\u6821\u9A8C\u7801"),
          vue.createElementVNode("div", { id: "ID" }, "ID:" + vue.toDisplayString(this.$data.id), 1)
        ]),
        vue.createElementVNode("div", null, [
          vue.createElementVNode("div", { id: "refresh" }, "\u5237\u65B0\u83B7\u53D6"),
          vue.createElementVNode("image", {
            id: "refresh_pic",
            src: "/static/refresh.png"
          }),
          vue.createElementVNode("div", { id: "click_refresh" }, "\u70B9\u51FB\u5237\u65B0")
        ]),
        vue.createElementVNode("div", { id: "tools" }, "\u5E38\u7528\u5DE5\u5177"),
        vue.createElementVNode("div", { id: "line1" }, [
          vue.createElementVNode("button", {
            class: "sys_button",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.jump && $options.jump(...args))
          }),
          vue.createElementVNode("button", { class: "jcsq_button" }),
          vue.createElementVNode("button", { class: "jcjl_button" }),
          vue.createElementVNode("button", { class: "xzyy_button" })
        ]),
        vue.createElementVNode("div", { id: "line2" }, [
          vue.createElementVNode("div", {
            class: "sys",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.jump && $options.jump(...args))
          }, "\u626B\u4E00\u626B"),
          vue.createElementVNode("div", { class: "jcsq" }, "\u8FDB\u51FA\u7533\u8BF7"),
          vue.createElementVNode("div", { class: "jcjl" }, "\u8FDB\u51FA\u8BB0\u5F55"),
          vue.createElementVNode("div", { class: "xzyy" }, "\u6D17\u6FA1\u9884\u7EA6")
        ]),
        vue.createElementVNode("div", { id: "line3" }, [
          vue.createElementVNode("button", { class: "sqjl_button" })
        ]),
        vue.createElementVNode("div", { id: "line4" }, [
          vue.createElementVNode("div", { class: "sqjl" }, "\u7533\u8BF7\u8BB0\u5F55")
        ]),
        vue.createElementVNode("div", { id: "bottom" }, " -\u6280\u672F\u652F\u6301 \u5357\u4EAC\u6CB3\u6D77\u79D1\u6280\u6709\u9650\u516C\u53F8- ")
      ])
    ]);
  }
  var PagesMenuMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Code/hhzx/pages/menu/menu.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/menu/menu", PagesMenuMenu);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Code/hhzx/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
