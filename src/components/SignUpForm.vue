<template>
    <div>
        <input v-model="form.first" type="text" placeholder="First Name" class="full-width login-input">
        <input v-model="form.last" type="text" placeholder="Last Name" class="full-width login-input">
        <input v-model="form.email" type="email" placeholder="Email" class="full-width login-input">
        <input v-model="form.password" type="password" placeholder="Password" class="full-width login-input">
        <button class="full-width primary" v-on:click="register">Sign in</button>
    </div>
</template>

<script>
// Import axios and globalState
import axios from 'axios';
import { globalStore } from '../main.js';
    
export default {
    name: 'SignInForm',
    props: {},
    data() {
        return {
            form: {
                first: '',
                last:  '',
                email: '',
                password:  ''
            }
        }
    },
    methods: {
        register: function () {
            let url = "https://students.washington.edu/tedxuofw/index.php/api/register";
            axios.get(url, { params: this.form }).then((response)  =>  {
                var resp = response.data;
                if(resp.status === "success") {
                    // Store JWT and other things into the global state
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

input.login-input:focus {
    background-color: $color-text-light;
} 

</style>
