<template>
    <div class="container">
        <div class="row">
            <div class="col-12 outer-container">
                <div class="inner-container">
                    <h1> Welcome to TEDxUofW </h1>
                    <p> Be a part of our community. <br/> Sign into your account to purchase tickets, view events, and more. </p>
                    <div class="outer-login-container"> 
                        <div class="container inner-login-container">
                            <div class="button-set sign-in-set">
                                <button id="sign-in" @click="toggle(true)" v-bind:class="{secondary: !signIn}">Sign in</button>
                                <button id="sign-up" @click="toggle(false)" v-bind:class="{secondary: signIn}">Sign up</button>
                            </div>
                            <sign-in-form  v-if="signIn" @loading="toggleLoading()"/>
                            <sign-up-form v-else @loading="toggleLoading()"/>
                        </div>
                    </div>
                    <router-link to="/">Back to Home</router-link>
                </div>
            </div>
        </div>
        <Loading v-if="this.loading"/>
    </div>
</template>

<script>
import SignInForm from "@/components/SignInForm";
import SignUpForm from "@/components/SignUpForm";
import Loading from "@/components/Loading";

export default {
    name: "LoginPage",
    components: { Loading, SignInForm, SignUpForm },
    data() {
        return {
            signIn: true,
            loading: false
        };
    },
    methods: {
        toggle: function(signIn) {
            this.signIn = signIn;
        },
        toggleLoading(){
            this.loading = !this.loading;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

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
