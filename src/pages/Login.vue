<template>
    <div class="container">
        <div class="row">
            <div class="col-12 outer-container">
                <div class="inner-container">
                    <center>
                        <h1> Welcome to TEDxUofW </h1>
                        <p class="responsive"> Be a part of our community. <br/> Sign into your account to purchase tickets, talk to speakers, and view our curated content. </p>
                        <div class="container login-container">
                            <div class="button-set sign-in-set">
                                <button>Sign in</button>
                                <button class="secondary">Sign up</button>
                            </div>
                            <input type="email" placeholder="Email" class="full-width login-input">
                            <input type="password" placeholder="Password" class="full-width login-input">
                            <small> <a href="#" class="spacer">Forgot your password?</a> </small>

                            <button class="full-width primary">Sign in</button>
                        </div>
                    </center>
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

center {
    max-height: 4%;
    overflow: hidden;
}

.example-container {
    max-width: 500px;
    border: 1px dashed $color-secondary;
    padding: 16px 32px;
    margin: 16px;
}

.inner-container {
    padding: 5% 20%;
}

input.login-input {
    background-color: $color-secondary-2;
    margin-bottom: 3.5%;
    width: 90%;
}

input.login-input:focus {
    background-color: $color-text-light;
} 

.login-container {
    width: 400px;
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

.spacer {
  display: block;
  margin: 8px 0;
}

@media (max-width: 768px) {
    .responsive {
        display: none;
    }
}

</style>
