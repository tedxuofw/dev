import Vue from "vue";
import router from "./router";

// Create a global state (prob need to better)
export const user = new Vue({
  data() {
    return {
      
      loggedIn: false,
      jwt: null,
      cached: Date.now(),
      
      meta: {
        iat: -1,
        nbf: -1,
        exp: -1
      },
      
      info: {
        id: -1,
        first: '',
        last: '',
        email: '',
        profile: '',
      }
    }
  },
  created() {
    
    // Handle case where uncached or tampered cache
    if(!localStorage.cached) {
      return;
    }
    
    // Handle case where cache expires
    var threshold = 1000 * 60 * 60 * 1;
    var time = Date.now();
    if(time - localStorage.cached > threshold) {
      return;
    }
    
    
    // Load in cache!
    if(localStorage.loggedIn) {
      this.loggedIn = localStorage.loggedIn;
    }
    if(localStorage.jwt) {
      this.jwt = localStorage.jwt;
    }
    if(localStorage.meta) {
      this.meta = JSON.parse(localStorage.meta);
    }
    if(localStorage.info) {
      this.info = JSON.parse(localStorage.info);
    }
    
  },
  watch: {
    loggedIn(tmp) {
      localStorage.loggedIn = tmp;
      localStorage.cached = Date.now();
    },
    jwt(tmp) {
      localStorage.jwt = tmp;
      localStorage.cached =  Date.now();
    },
    cached(tmp) {
      localStorage.cached =  Date.now();
    },
    meta: {
      handler(tmp) {
        localStorage.meta = JSON.stringify(tmp);
        localStorage.cached = Date.now();
      },
      deep: true
    },
    info: {
      handler(tmp) {
        localStorage.info = JSON.stringify(tmp);
        localStorage.cached = Date.now();
      },
      deep: true
    }
  },
  
  methods: {
    
    /*** Get Information about User ***/
    first() {
      this.checkLogin();
      return this.info.first;
    }, 
    
    last() {
      this.checkLogin();
      return this.info.last;
    },
  
    email() {
      this.checkLogin();
      return this.info.email;
    },
    
    profile() {
      this.checkLogin();
      return this.info.profile;
    },
    
    id() {
      this.checkLogin();
      return this.info.id;
    },
    
    isLoggedIn() {
      return this.loggedIn;
    },
    
    getJWT() {
      return this.jwt;
    },
    
    
    
    
    /*** Manage State of User ***/
    login(jwt) {
      var decoded = this.parseJWT(jwt);
      console.log(decoded);
      
      this.loggedIn = true;
      
      // Load meta data
      this.jwt = jwt;
      this.meta.iat = decoded.iat;
      this.meta.nbf = decoded.nbf;
      this.meta.exp = decoded.exp;
      
      // Load user info
      this.info.id = decoded.id;
      this.info.first = decoded.first;
      this.info.last = decoded.last;
      this.info.email = decoded.email;
      this.info.profile = decoded.profile;
    },
    
    logout() {
      this.cached = 0;
      this.loggedIn = false;
      
      // Remove meta data
      this.jwt = null;
      this.meta.iat = this.meta.nbf = this.meta.exp = 0;
      
      // Remove user info
      this.info.id = 0;
      this.info.first =  this.info.last = this.info.email = this.info.profile = '';
      
      localStorage.clear();
      router.push("/login"); 
    },
    
    
    
    
    /*** Helper Methods ***/
    parseJWT(jwt) {
      var base64Url = jwt.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(window.atob(base64));
    },
    
    time() {
      // Inaccurate, but shouldn't matter. Good approximation for 
      return Math.floor((new Date().now()) / 1000);
    },
    
    checkLogin() {
      if(!this.isLoggedIn()){
        router.push('/login');
      }
    }
  }
});