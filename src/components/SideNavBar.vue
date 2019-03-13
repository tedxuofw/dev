<template>
    <div style="background-color: #fcfbfa;">
        <nav> 
            <p class="logo"> <span class="bold">TEDx</span>UofW </p>
            <div class="active"> 
                <div class="nav-element"> <i class="fas fa-columns"></i> <a href="/"> Dashboard </a> </div>
            </div>
            <div> 
                <div class="nav-element"> <i class="fas fa-ticket-alt"></i> <a href="/#/checkout"> Tickets </a> </div>
            </div>
            <div> 
                <div class="nav-element"> <i class="fas fa-heart"></i> <a href="/"> Volunteer </a> </div>
            </div>
            <div> 
                <div class="nav-element"> <i class="fas fa-pencil-alt"></i> <a href="/"> Feedback </a> </div>
            </div>
            <div class="bottom"> <i class="fas fa-chevron-left"></i> <a href="https://www.tedxuofw.com"> Back to TEDxUofW </a> </div>
        </nav>
        <div id="user-nav">
            <div id="user">
                    <img src="https://fcbk.su/_data/stickers/shiba_inu/shiba_inu_12.png">
                    <p> Christina Buckman </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideNavBar",
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
    z-index: 1;
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

</style>