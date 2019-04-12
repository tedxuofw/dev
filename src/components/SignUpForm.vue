<template>
    <div>
        <input v-model="form.first" type="text" placeholder="First Name" class="login-input" @change="addFocus($event)">
        <input v-model="form.last" type="text" placeholder="Last Name" class="login-input" @change="addFocus($event)">
        <input v-model="form.email" type="email" placeholder="Email" class="full-width login-input" @change="addFocus($event)">
        <input v-model="form.password" type="password" placeholder="Password" class="full-width login-input" @change="addFocus($event)">
        <input id="pw-confirmation" type="password" placeholder="Confirm password" class="full-width login-input" @change="addFocus($event)">
        <p class="error"> </p>
        <button class="full-width primary" v-on:click="register">Sign up</button>
    </div>
</template>

<script>
// Import axios and globalState
import axios from 'axios';
import router from "../router";
import { user } from '../user.js';
    
export default {
    name: 'SignInForm',
    props: {},
    data() {
        return {
            form: {
                first: '',
                last:  '',
                email: '',
                password:  '',
                profile: 'https://www.tedxuofw.com/static/img/test_2.4a98b92.svg'
            }
        }
    },
    methods: {
        register: function () {
            var error = this.validate();
            console.log(error);
            if (error === '') {
                this.$emit("loading");
                this.hideError();
                let url = "https://students.washington.edu/tedxuofw/index.php/api/register";
                axios.get(url, { params: this.form }).then((response)  =>  {
                    this.$emit("loading");
                    var resp = response.data;
                    if(resp.status === "success") {                
                        console.log(resp);
                        user.login(resp.token);
                        console.log("Successfully logged in as: " + this.form.email);
                        
                        // Redirect to where we wanna go on success
                        router.push('/dashboard');
                    } else {
                        // User Error
                        this.displayError(response.data.message);
                        
                        // User-friendly error message
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
                this.displayError(error);
            }
        }, 
        enterSignUp: function(event) {
            var code = (event.keyCode ? event.keyCode : event.which);
            if(code == 13) {
                event.preventDefault();
                this.register();
            }
        }, 
        addFocus: function(event) {
            event.target.classList.add('focus');
        }, 
        validate: function() {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA(-Z]{2,}))$/;
            if (this.form.first == '' || this.form.last == '' || this.form.email == '' || this.form.password == '' || document.querySelector('#pw-confirmation').value == '') {
                return "Please fill in all fields."
            } else if (!(re.test(this.form.email))) {
                return "Please enter a valid email.";
            } else {
                return this.validPassword();
            }
        },
        validPassword: function() {
            if (this.form.password.length < 8) {
                return "Please enter a password with at least 8 characters.";
            } else if (!(/^[\x00-\x7F]*$/.test(this.form.password))) {
                return "Please enter a password with only keyboard characters.";
            } else if (!(/[A-Z]/.test(this.form.password))) {
                return "Please include at least one capital letter.";
            } else if (document.getElementById('pw-confirmation').value !== this.form.password) {
                return "Your passwords do not match."
            } else {
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
        window.addEventListener('keypress',this.enterSignUp);
    }, 
    destroyed() {
        window.removeEventListener('keypress', this.enterSignUp);
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

input.login-input:focus, input.focus {
    background-color: $color-text-light;
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

</style>
