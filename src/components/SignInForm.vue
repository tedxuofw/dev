<template>
    <div>
        <input type="email" placeholder="Email" class="full-width login-input">
        <input type="password" placeholder="Password" class="full-width login-input">
        <a href="/" class="spacer small">Forgot your password?</a>
        <a href="/"> <button class="full-width primary">Sign in</button></a>
    </div>
</template>

<script>
export default {
    name: 'SignInForm',
    props: {
        selected: {
            type: Boolean,
            default: false
        }
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

</style>
