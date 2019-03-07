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
        <div id="user-nav" class="row">
            <!-- <div id="user">
                <div class="col-3">
                    <img src="https://fcbk.su/_data/stickers/shiba_inu/shiba_inu_12.png">
                </div>
                <div class="col-9">
                    <p> Christina Buckman </p>
                </div> 
            </div> -->
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
nav {
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: $color-primary;
    overflow-x: hidden;
    padding-top: 20px;
}

nav > div {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    color: $color-primary-2;
    display: block;
    margin: 0.5em 0em;
    height: 50px;
    position: relative;
}

nav > div:hover, nav a:hover {
    color: $color-text-light;
}

nav a {
    text-decoration: none;
    color: $color-primary-2;
    font-size: 1em;
}

#user-nav {
    height: 100px;
    background-color: #fcfbfa;
    position: relative;
}

.logo {
    font-size: 1.9em;
    color: $color-text-light;
    text-align: center;
}

.bold {
    font-weight: 900;
}

div > i {
    margin-right: 1em;
}

div.bottom {
    font-size: 0.75em;;
    bottom: 0;
    position: fixed;
    margin: 0;
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

div.nav-element {
    position: absolute;
    top: 25%;
}

#user {
    right: 0;
    position: absolute;
}

#user p {
    color: black;
    vertical-align: middle;
    margin: 0;
}

#user img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: inline-block;
}
</style>