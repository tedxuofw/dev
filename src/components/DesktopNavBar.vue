<template>
    <div>
        <SideNavBar :dashboard="this.dashboard" :tickets="this.tickets" :feedback="this.feedback"/>
        <div id="user-nav">
            <div id="user" class="dropdown">
                <img class="dropdown" :src="user.profile">
                <p class="dropdown"> {{ user.first }} {{ user.last }} </p>
                <Dropdown :user="user"/>
            </div>
            <UserModal :user="user"/>
        </div>
    </div>
</template>

<script>
import { user } from '../user.js';
import Dropdown from "./Dropdown";
import UserModal from "./UserModal";
import SideNavBar from "./SideNavBar";

export default {
    name: "DesktopNavBar",
    props: {
        dashboard: Boolean,
        tickets: Boolean,
        feedback: Boolean
    },
    data () {
        return {
            user: {
                first: user.first(),
                last: user.last(),
                email: user.email(),
                profile: user.profile(),
            }
        }
    },
    components: { Dropdown, UserModal, SideNavBar },
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

div.nav-element {
    position: absolute;
    top: 25%;
}

p.dropdown {
    padding: 1em 0;
}

#user {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 10%;
    position: absolute;
    right: 0;
}

#user img {
    border-radius: 100%;
    height: 50px;
    width: 50px;
}

#user p {
    color: black;
    margin: 0;
}

#user p.dropdown {
    margin-left: 1em;
}

#user-nav {
    align-items: center;
    display: flex;
    background-color: #fcfbfa;
    height: 100px;
    position: relative;
}
</style>