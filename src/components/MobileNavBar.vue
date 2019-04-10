<template>
    <div>
        <SideNavBar :dashboard="this.dashboard" :tickets="this.tickets" :feedback="this.feedback" :mobile="true"/>
        <nav id="user-nav">
            <div class="mobile-icons">
                <i id ="hamburger" class="fas fa-bars responsive-nav-element" @click="showMainNav()"></i>
                <div id="icon">
                    <i class="far fa-user responsive-nav-element dropdown" @click="showUserNav()"></i>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import Dropdown from "./Dropdown";
import SideNavBar from "./SideNavBar";

export default {
    name: "MobileNavBar",
    components: { Dropdown, SideNavBar },
    props: {
        dashboard: Boolean,
        tickets: Boolean,
        feedback: Boolean,
        user: Object
    },
    methods: {
        showMainNav: function() {
            console.log("HERE");
            document.getElementById('nav').classList.remove('invisible');
        }, 
        showUserNav: function() {
            var userNav = document.querySelector('.dropdown-content');
            userNav.classList.add("visible-test");
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

div.dropdown-content {
    
}

div > i {
    margin: 1em;
    font-size: 1.25em;
}

#icon {
    position: relative;
}

.mobile-icons {
    display:flex;
    justify-content: space-between;
    margin: 1em;
    width: 100%;
}

.responsive-nav-element {
    color: $color-primary-2;
}

#user-nav {
    align-items: center;
    display: flex;
    background-color: $color-primary;
    height: 100px;
    position: relative;
}

.visible-test {
    display: block !important;
}

</style>