<template>
    <div>
        <input v-model="form.first" type="text" placeholder="First Name" class="full-width login-input" @change="addFocus($event)">
        <input v-model="form.last" type="text" placeholder="Last Name" class="full-width login-input" @change="addFocus($event)">
        <input v-model="form.email" type="email" placeholder="Email" class="full-width login-input" @change="addFocus($event)">
        <input v-model="form.password" type="password" placeholder="Password" class="full-width login-input" @change="addFocus($event)">
        <p class="error"> Please enter a valid email address. </p>
        <button class="full-width primary" v-on:click="register">Sign up</button>
    </div>
</template>

<script>
// Import axios and globalState
import axios from 'axios';
import router from "../router";

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
            if (this.validate()) {
                let url = "https://students.washington.edu/tedxuofw/index.php/api/register";
                axios.get(url, { params: this.form }).then((response)  =>  {
                    var resp = response.data;
                    if(resp.status === "success") {                
                        // Redirect to where we wanna go on success
                        router.push('/login');
                    } else {
                        // User Error
                        
                        
                        // User-friendly error message
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
            } else {
                alert();
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
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            return re.test(this.form.email) && this.form.first !== '' && this.form.last !== '' && validPassword();
        },
        validPassword: function() {
            if (this.form.password.length < 8) {
                return false;
            } else if (!(/^[\x00-\x7F]*$/.test(this.form.password))) {
                return false;
            } else if (!(/[A-Z]/.test(this.form.password))) {
                return false;
            }
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
    visibility: visible;
}

p.error {
  color: $color-primary;
  font-size: 0.9em;
  line-height: 1;
  text-align: left;
}

</style>
