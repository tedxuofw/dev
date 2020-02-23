<template>
    <div class="container">
        <div class="row">
            <div class="col-12 outer-container">
                <div class="inner-container">
                    <h1>Reset Password</h1>
                    <p>Email password reset link</p>
                    <div class="outer-login-container"> 
                        <div class="container inner-login-container">
    <div>
        <input v-model="form.email" type="email" placeholder="Email" class="full-width login-input" @change="addFocus($event)">
        <p class="error"> </p>
        <button class="full-width primary" v-on:click="signIn"> Sign In </button>
    </div>
                        </div>
                    </div>
                    <router-link to="/login">Back to Login</router-link>
                </div>
            </div>
        </div>
        <Loading v-if="this.loading"/>
    </div>
</template>

<script>
import axios from 'axios';
import router from "../router";
import { user } from '../user.js';
import Loading from "@/components/Loading";

    
export default {
    name: 'ForgotPassword',
    components: { Loading },

    data() {
        return {
            form: {
                email: ''
            },
            loading: false
        }
    },
    methods: {
        signIn: function () {
            this.hideError();
            var errors = this.validate();

            if (errors === '') {
                this.$emit("loading");
                let url = "https://students.washington.edu/tedxuofw/index.php/api/login";
                axios.get(url, { params: this.form }).then((response)  =>  {
                    this.$emit("loading");
                    var resp = response.data;
                    if(resp.status === "success") {
                        // Store any information given
                        console.log(resp);
                        user.login(resp.token);
                        console.log("Successfully logged in as: " + this.form.email);
                        
                        // Redirect to where we wanna go on success
                        router.push('/dashboard');
                    } else {
                        // User Error
                        this.displayError(response.data.message);

                        // Error message
                        var message = resp.message;
                        console.log(response.data);
                    }
                }, (error)  =>  {
                    this.$emit("loading");
                    // There was an error with the way the request was made!
                    // This is really bad (either the API broke or more likely
                    // the frontend isn't properly validating the input)
                    var err = error.response;
                    console.log(err);
                    if(err.status == 422) {
                        // Did not properly validate the input before sending (e.g. missing field)
                    }
                    
                    alert("Error " + error.response.status + ": There was an error processing your request. Please contact tedxuofw@uw.edu.");
                });
            } else {
                this.displayError(errors);
            }
        },
        enterSignIn: function(event) {
            var code = (event.keyCode ? event.keyCode : event.which);
            if(code == 13) {
                event.preventDefault();
                this.signIn();
            }
        },
        addFocus: function(event) {
            event.target.classList.add('focus');
        },
        validate: function() {
            if (this.form.email == '') {
                return "Please fill in all fields."
            }  else {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA(-Z]{2,}))$/;
                if (!re.test(this.form.email)) {
                    return "Please enter a valid email."
                }
                return "";
            }
        },
        displayError: function(error) {
            var errorElement = document.querySelector('p.error');
            errorElement.classList.add("visible");
            errorElement.textContent = error;
        },
        hideError: function() {
            var errorElement = document.querySelector('p.error');
            errorElement.classList.remove("visible");
            errorElement.textContent = '';
        }
    },
    created() {
        window.addEventListener('keypress',this.enterSignIn);
    }, 
    destroyed() {
        window.removeEventListener('keypress', this.enterSignIn);
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

a.small {
    line-height: 1.3;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;
}

button.primary {
    width: 90%;
    margin: 15px;
    margin-left: auto;
    margin-right: auto;
}

input.login-input {
    background-color: $color-secondary-2;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3.5%;
    width: 90%;
}

input.login-input:focus, input.focus {
    background-color: $color-text-light;
} 

.small {
    width: 90%;
    font-size: 0.75em;
    text-align: right;
}

.spacer {
    display: block;
    margin: 8px 0;
}

@media (max-width: 550px) {
    input, button {
        font-size: 14px;
    }

    .small {
        font-size: 10px;
    }
}

.visible {
    visibility: visible !important;
}

p.error {
  color: $color-primary;
  font-size: 0.9em;
  line-height: 1;
  margin-left: auto;
  margin-right: auto;
  margin-top: -5px; 
  text-align: left;
  visibility: hidden;
  width: 90%;
}

@media (max-width: 600px) {
    input.login-input {
        height: 2em;
        font-size: 0.8em;
        margin-bottom: 0.5em;
    }

    button {
        font-size: 0.8em;
        height: 2em;
        padding: 0;
    }
}


// @import "@/styles/_variables.scss";

div.container, div.row {
    background-color: $color-secondary-2;
    min-height: 100vh;
}

div.row {
    display: flex;
    align-items: center;
}

.inner-container {
    padding: 5% 5%;
    text-align: center;
}

.inner-login-container {
    display: inline;
    width: 90%;
}

.invisible {
    display: none;
}

.outer-login-container {
    width: 80%;
    margin: auto;
    margin-bottom: 50px;
}

.outer-container {
    height: 80%;
    width: 80vw;
}

.sign-in-set {
  width: 100%;
  max-width: 100%;
  margin: 4% 0%;
}

.hidden {
    display: none;
}

@media (max-width: 600px) {
    div.inner-container > p {
        display: none;
    }

    div.button-set button {
        height: 2em;
        font-size: 0.8em;
        padding:0;
    }

    h1 {
        font-size: 32px;
    }
}
</style>
