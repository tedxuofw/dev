<template>
    <div id="nav" v-bind:class="{ invisible: mobile, mobile: mobile }">
        <div class="nav-modal" v-bind:class="{ invisible: !mobile }" @click="this.closeNav"> </div>
        <nav v-bind:class="{ mobile: mobile }" @click="this.closeNav"> 
            <p class="logo"> <span class="light"> TWO STEPS </span> <span class="heavy"> FORWARD </span> </p>
            <div v-bind:class="{ active: this.dashboard }"> 
                <div class="nav-element"> <i class="fas fa-columns"></i> <a href="/#/dashboard"> Dashboard </a> </div>
            </div>
            <div v-bind:class="{ active: this.tickets }"> 
                <div class="nav-element"> <i class="fas fa-ticket-alt"></i> <a href="/#/tickets"> Tickets </a> </div>
            </div>
            <div v-bind:class="{ active: this.feedback }"> 
                <div class="nav-element"> <i class="fas fa-pencil-alt"></i> <a href="/#/feedback"> Feedback </a> </div>
            </div>
            <div class="bottom"> <i class="fas fa-chevron-left"></i> <a href="https://www.tedxuofw.com"> Back to TEDxUofW </a> </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "SideNavBar",
    props: {
        dashboard: Boolean,
        tickets: Boolean,
        feedback: Boolean,
        mobile: Boolean
    }, 
    methods: {
        closeNav: function() {
            if (this.mobile) {
                document.getElementById("nav").classList.add('invisible');
            }            
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

div.bottom {
    bottom: 0;
    font-size: 0.75em;;
    position: fixed;
    margin: 0;
}

div > i {
    margin-left: 16px;
    margin-right: 1em;
}

div.nav-element {
    position: absolute;
    top: 25%;
}

div.nav-modal {
    background-color: white;
    height: 100vh;
    opacity: 0.7;  
    position: absolute;
    width: 100vw;
    z-index: 10;
}

nav.mobile div.active {
    border-left: 16px solid $color-primary;
}

.heavy {
    font-weight: 500;
    letter-spacing: 4px;
}

.light {
    font-weight: 100;
    line-height: 1.3;
}

.logo {
    color: $color-text-light;
    font-size: 1.7em;
    text-align: center;
}

nav {
    background-color: $color-primary;
    height: 100%;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;
    position: fixed;
    top: 0;
    width: 210px;
    z-index: 10;
}

nav.mobile {
    background-color: $color-accent;
}

nav a {
    color: $color-primary-2;
    font-size: 1em;
    text-decoration: none;
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

nav > div:hover, nav a:hover {
    color: $color-text-light;
}

nav div.active {
    background-color: $color-primary-2;
    border-left: 16px solid $color-accent;
}

nav div.active a {
    color: black;
    font-weight: 700;
}

nav div.active i {
    color: $color-primary;
    margin-left: 0;
}

.invisible {
    visibility: hidden;
}
</style>