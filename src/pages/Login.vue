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
                            <input type="email" placeholder="Email" class="full-width login-input">
                            <input type="password" placeholder="Password" class="full-width login-input">
                            <a href="#" class="spacer small">Forgot your password?</a>

                            <button class="full-width primary">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TabSet from "@/components/TabSet";
import TabOption from "@/components/TabOption";
export default {
  name: "ComponentsPage",
  components: { TabSet, TabOption },
  data() {
    return {
      emailAddress: "",
      tabIndex: 0,
      tabSecondary: false
    };
  },
  methods: {
    emailSignUp() {
      if (!this.emailAddress) {
        alert("No email address entered!");
      } else {
        alert(`Thank you for registering: ${this.emailAddress}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

a.small {
    line-height: 1.3;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
}

button.primary {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

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

.small {
    width: 90%;
    font-size: 0.6em;
    text-align: right;
}

.spacer {
    display: block;
    margin: 8px 0;
}

@media (max-width: 550px) {
    .responsive {
        display: none;
    }
}

</style>
