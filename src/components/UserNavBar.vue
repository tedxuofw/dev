uy<template>
    <div id="user-tasks-nav" class="invisible">
        <div class="nav-modal" @click="this.closeNav"> </div>
        <nav @click="this.closeNav"> 
            <div @click="this.openModal"> 
                <div class="nav-element"> Edit Profile </div>
            </div>
            <div> 
                <div class="nav-element" @click="this.logout"> Logout </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { user } from "../user.js";
export default {
    name: "UserNavBar",
    props: {
        dashboard: Boolean,
        tickets: Boolean,
        feedback: Boolean,
    }, 
    methods: {
        closeNav: function() {
            document.getElementById('user-tasks-nav').classList.add('invisible');
        },
        openModal: function() {
            document.querySelector('div.user-modal').classList.add('show-modal');
        },
        logout: function() {
            user.logout();
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

div.nav-element {
    color: black;
    position: absolute;
    margin-left: 0.5em;
    top: 25%;
}

div.nav-modal {
    background-color: white;
    height: 100vh;
    opacity: 0.7;  
    position: absolute;
    width: 100%;
    z-index: 10;
}

.invisible {
    visibility: hidden;
}

nav.mobile div.active {
    border-left: 16px solid $color-primary;
}

.logo {
    color: $color-text-light;
    font-size: 1.9em;
    text-align: center;
}

nav {
    background-color: $color-primary-2;
    height: 100%;
    right: 0;
    overflow-x: hidden;
    padding-top: 20px;
    position: fixed;
    top: 0;
    width: 210px;
    z-index: 10;
}

nav > div {
    color: $color-primary-2;
    display: block;
    height: 50px;
    margin: 0.5em 0em;
    padding: 6px 8px 6px 16px;
    position: relative;
    text-decoration: none;
}

// nav > div:hover, nav a:hover {
//     color: $color-text-light;
// }

nav div.active {
    background-color: $color-primary-2;
    border-left: 16px solid $color-accent;
}

.invisible {
    visibility: hidden;
}
</style>