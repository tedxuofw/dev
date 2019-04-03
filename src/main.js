import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

// Create a global state (prob need to better)
export const globalStore = new Vue({
  data() {
    return {
      attrs: {}
    }
  },
  methods: {
    set(key, val) {
      this.attrs[key] = val;
    },
    get(key) {
      return this.attrs[key];
    },
    remove(key) {
      delete this.attrs[key];
    },
    all() {
        return this.attrs;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
