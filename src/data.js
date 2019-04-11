import Vue from "vue";
import router from "./router";
import { user } from "./user.js";
import axios from 'axios';

// Create a global state (prob need to better)
export const event = new Vue({
    data() {
        return {
            cached: Date.now(),
            costlevels: null
        }
    },
    
    created() {
        // Handle case where uncached or tampered cache
        if(!localStorage.cached) {
            return;
        }

        // Handle case where cache expires
        var threshold = 1000 * 60 * 1;
        var time = Date.now();
        if(time - localStorage.cached > threshold) {
            return;
        }


        // Load in cache!
        if(localStorage.costlevels) {
            this.costlevels = localStorage.costlevels;
        } else {
            sync();
        }
    },

    watch: {
        costlevels(tmp) {
            localStorage.costlevels = tmp;
            localStorage.cached = Date.now();
        },
    },
  
    methods: {
        costLevels() {
            return this.costlevels;
        },
        
        sync() {
            let url = "https://students.washington.edu/tedxuofw/index.php/api/costlevel/all";
            let params = { token: user.getJWT() };
            
            axios.get(url, { params: params }).then((response)  =>  {
                var resp = response.data;
                if(resp.status === "success") {
                    // Store any information given
                    console.log(resp);
                    this.costlevels = resp.result;
                } else {          
                    // Error message
                    var message = resp.message;
                    console.log(response.data);
                }

            }, (error)  =>  {
                // There was an error with the way the request was made!
                var err = error.response;
                console.log(err);

                alert("Error " + error.response.status + ": There was an error processing your request. Please contact tedxuofw@uw.edu.");
            });
        }
    }
});