<template>
    <div>
        <SideNavBar :dashboard="this.dashboard" :tickets="this.tickets" :feedback="this.feedback" :mobile="true"/>
        <UserNavBar/>
        <nav id="user-nav">
            <div class="mobile-icons">
                <i id ="hamburger" class="fas fa-bars responsive-nav-element" @click="showMainNav()"></i>
                <div id="icon">
                    <i class="far fa-user responsive-nav-element dropdown" @click="showUserNav()"></i>
                </div>
            </div>
            <Modal :user="user"/>
        </nav>
    </div>
</template>

<script>
import UserNavBar from "./UserNavBar";
import SideNavBar from "./SideNavBar";
import Modal from "./Modal";

export default {
    name: "MobileNavBar",
    components: { SideNavBar, UserNavBar, Modal },
    props: {
        dashboard: Boolean,
        tickets: Boolean,
        feedback: Boolean,
        user: Object
    },
    methods: {
        showMainNav: function() {
            document.getElementById('nav').classList.remove('invisible');
        }, 
        showUserNav: function() {
            document.getElementById('user-tasks-nav').classList.remove('invisible');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

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