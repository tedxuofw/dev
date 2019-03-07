<template>
    <div>
        <input v-model="form.email" type="email" placeholder="Email" class="full-width login-input">
        <input v-model="form.password" type="password" placeholder="Password" class="full-width login-input">
        <a href="/" class="spacer small">Forgot your password?</a>
        <button class="full-width primary" v-on:click="signIn">Sign in</button>
    </div>
</template>

<script>
import axios from 'axios';
import { globalStore } from '../main.js';
    
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
                    globalStore.set('jwt', resp.token);
                    
                    // Redirect to where we wanna go on success
                    
                } else {
                    // User Error
                    
                    // Error message
                    var message = resp.message;
                    console.log(response.data);
                }
            }, (error)  =>  {
                // There was an error with the way the request was made!
                // This is really bad (either the API broke or the frontend)
                // isn't properly validating the input
                alert(error.response.data);
            });
        }
    },
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

</style>
