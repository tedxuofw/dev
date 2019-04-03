import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

// Create a global state (prob need to better)
export const userStore = new Vue({
  data() {
    return {
      first: 'Not Logged In',
      last: '',
      email: '',
      profile: '',
      jwt: ''
    }
  },
  methods: {
    logout() {
      this.first = 'Not Logged In';
      this.last = this.email = this.profile = this.jwt = '';
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
