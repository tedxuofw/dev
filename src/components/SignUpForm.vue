<template>
    <div>
        <input type="text" placeholder="First Name" class="full-width login-input">
        <input type="text" placeholder="Last Name" class="full-width login-input">
        <input type="email" placeholder="Email" class="full-width login-input">
        <input type="password" placeholder="Password" class="full-width login-input">
        <button class="full-width primary">Sign in</button>
    </div>
</template>

<script>
export default {
  name: 'SignInForm',
  props: {
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

input.login-input:focus {
    background-color: $color-text-light;
} 

</style>
