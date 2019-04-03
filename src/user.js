import Vue from "vue";
import router from "./router";

// Create a global state (prob need to better)
export const user = new Vue({
  data() {
    return {
      
      loggedIn: false,
      jwt: null,
      
      meta: {
        iat: 0,
        nbf: 0,
        exp: 0
      },
      
      info: {
        id: 0,
        first: '',
        last: '',
        email: '',
        profile: '',
      }
    }
  },
  mounted() {
    
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
    },
    jwt(tmp) {
      localStorage.jwt = tmp;
    },
    meta: {
      handler(tmp) {
        localStorage.meta = JSON.stringify(tmp);
      },
      deep: true
    },
    info: {
      handler(tmp) {
        localStorage.info = JSON.stringify(tmp);
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
    
    isLoggedIn() {
      return this.loggedIn;
    },
    
    
    
    
    /*** Manage State of User ***/
    login(jwt) {
      var decoded = this.parseJWT(jwt);
      
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
      this.loggedIn = false;
      
      // Remove meta data
      this.jwt = null;
      this.meta.iat = this.meta.nbf = this.meta.exp = 0;
      
      // Remove user info
      this.info.id = 0;
      this.info.first =  this.info.last = this.info.email = this.info.profile = '';
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