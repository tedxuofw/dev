<template>
    <div>
        <input v-model="form.email" type="email" placeholder="Email" class="full-width login-input">
        <input v-model="form.password" type="password" placeholder="Password" class="full-width login-input">
        <a href="mailto:tedxuofw@uw.edu?Subject=TEDxUofW%20Account%20Password%20Recovery" class="spacer small">Forgot your password?</a>
        <button class="full-width primary" v-on:click="signIn">Sign in</button>
    </div>
</template>

<script>
import axios from 'axios';
import router from "../router";
import { userStore } from '../main.js';
    
export default {
    name: 'SignInForm',
    props: {
        selected: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            form: {
                email: '',
                password:  ''
            }
        }
    },
    methods: {
        signIn: function () {
            let url = "https://students.washington.edu/tedxuofw/index.php/api/login";
            axios.get(url, { params: this.form }).then((response)  =>  {
                var resp = response.data;
                if(resp.status === "success") {
                    // Store any information given
                    userStore.first = resp.first;
                    userStore.last = resp.last;
                    userStore.email = resp.email;
                    userStore.profile = resp.profile;
                    userStore.jwt = resp.token;
                    console.log("Successfully logged in as: " + resp.email);
                    
                    // Redirect to where we wanna go on success
                    router.push('/home');
                } else {
                    // User Error
                    
                    // Error message
                    var message = resp.message;
                    console.log(response.data);
                }
            }, (error)  =>  {
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
        },
        enterSignIn: function(event) {
            var code = (event.keyCode ? event.keyCode : event.which);
            if(code == 13) {
                event.preventDefault();
                this.signIn();
            }
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

input.login-input:focus, .focus {
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

</style>
