<template>
    <div class="container">
        <div class="row">
            <div class="col-12 outer-container">
                <div class="inner-container">
                    <h1> Welcome to TEDxUofW </h1>
                    <p class="responsive"> Be a part of our community. <br/> Sign into your account to purchase tickets, talk to speakers, and view our curated content. </p>
                    <div class="outer-login-container"> 
                        <div class="container inner-login-container">
                            <div class="button-set sign-in-set">
                                <button>Sign in</button>
                                <button class="secondary">Sign up</button>
                            </div>
                            <sign-up-form> </sign-up-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SignInForm from "@/components/SignInForm";
import SignUpForm from "@/components/SignUpForm";

export default {
  name: "LoginPage",
  components: { SignInForm, SignUpForm },
  data() {
    return {
      emailAddress: "",
      tabIndex: 0,
      tabSecondary: false
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.example-container {
    max-width: 500px;
    border: 1px dashed $color-secondary;
    padding: 16px 32px;
    margin: 16px;
}

.inner-container {
    padding: 5% 20%;
    text-align: center;
}

.inner-login-container {
    display: inline;
    width: 90%;
}

.outer-login-container {
    width: 80%;
    margin: auto;
}

.outer-container {
    background-color: $color-secondary-2;
    height: 80%;
    margin: 10vh 0;
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

@media (max-width: 550px) {
    .responsive {
        display: none;
    }
}

</style>
