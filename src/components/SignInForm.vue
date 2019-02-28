<template>
    <form action="https://students.washington.edu/tedxuofw/test/public/index.php/api/login" method="get">
        <input type="email" placeholder="Email" class="full-width login-input" name="email">
        <input type="password" placeholder="Password" class="full-width login-input" name="password">
        <a href="/" class="spacer small">Forgot your password?</a>
        <button type="submit" class="full-width primary">Sign in</button>
    </form>
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

@media (max-width: 550px) {
    input, button {
        font-size: 14px;
    }

    .small {
        font-size: 10px;
    }
}

</style>
