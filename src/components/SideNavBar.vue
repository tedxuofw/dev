<template>
    <div>
        <nav> 
            <p class="logo"> <span class="bold">TEDx</span>UofW </p>
            <div v-bind:class="{ active: this.dashboard }"> 
                <div class="nav-element"> <i class="fas fa-columns"></i> <a href="/#/home"> Dashboard </a> </div>
            </div>
            <div v-bind:class="{ active: this.tickets }"> 
                <div class="nav-element"> <i class="fas fa-ticket-alt"></i> <a href="/#/checkout"> Tickets </a> </div>
            </div>
            <div> 
                <div class="nav-element"> <i class="fas fa-heart"></i> <a href="/"> Volunteer </a> </div>
            </div>
            <div v-bind:class="{ active: this.feedback }"> 
                <div class="nav-element"> <i class="fas fa-pencil-alt"></i> <a href="/"> Feedback </a> </div>
            </div>
            <div class="bottom"> <i class="fas fa-chevron-left"></i> <a href="https://www.tedxuofw.com"> Back to TEDxUofW </a> </div>
        </nav>
        <div id="user-nav">
            <div id="user" class="dropdown">
                <img class="dropdown" src="https://fcbk.su/_data/stickers/shiba_inu/shiba_inu_12.png">
                <p class="dropdown"> Christina Buckman </p>

                <div class="dropdown-content dropdown">
                    <div id="profile-info">
                        <div>
                            <img src="https://fcbk.su/_data/stickers/shiba_inu/shiba_inu_12.png"/>
                        </div>
                        <p> Christina Buckman </p>
                        <p class="email"> cbe2019@uw.edu </p>
                    </div>
                    <div id="profile-nav">
                        <a href="#">Edit Profile</a>
                        <a href="#">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideNavBar",
        props: {
            dashboard: Boolean,
            tickets: Boolean,
            feedback: Boolean
        }
    };
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.bold {
    font-weight: 900;
}

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

.logo {
    color: $color-text-light;
    font-size: 1.9em;
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
    width: 200px;
    z-index: 10;
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

#user-nav {
    align-items: center;
    display: flex;
    background-color: #fcfbfa;
    height: 100px;
    position: relative;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
    display: none;
    background-color: $color-secondary-2;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    position: absolute;
    left: 0;
    margin-top: 200px;
    padding: 1.5em;
}

.dropdown-content a {
    color: $color-primary;
    padding: 12px 16px;
    text-decoration: none;
    text-align: center;
    display: block;
    width: 70%;
}

.dropdown-content a:hover {
    background-color: darken($color-secondary-2, 5%);
}

.dropdown:hover .dropdown-content {
    display: block;
}

#profile-info {
    margin-bottom: 1em;
}

#profile-info div {
    align-content: center;
    display: flex;
    justify-content: center;
}

#profile-info p {
    text-align: center;
}

#profile-info img {
    height: 90px;
    margin-bottom: 1em;
    width: 90px;
}

#profile-nav {
    text-align: -webkit-center;
}

.email {
    font-size: 0.85em;
}

.dropdown-content a:first-child {
    border-bottom: 1px solid $color-primary;
}

</style>