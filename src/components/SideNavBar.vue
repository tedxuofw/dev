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
                <img class="dropdown" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Love_Heart_symbol_square.svg">
                <p class="dropdown"> Christina Buckman </p>

                <div class="dropdown-content">
                    <div id="profile-info">
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Love_Heart_symbol_square.svg"/>
                        </div>
                        <p> Christina Buckman </p>
                        <p class="email"> cbe2019@uw.edu </p>
                    </div>
                    <div id="profile-nav">
                        <a @click="this.openModal">Edit Profile</a>
                        <a>Logout</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal">
            <div class="modal-content">
                <h2>Profile</h2>
                <div id="avatars">
                    <div id="images">
                        <p class="label"> Avatar </p>
                        <div class='img-container'>
                            <img class="selected" src="../assets/test_4.svg"/>
                        </div>
                        <div>
                            <img src="../assets/test_2.svg"/>
                        </div>
                        <div>
                            <img src="../assets/test_3.svg"/>
                        </div>
                        <div> 
                            <img src="../assets/test_1.svg"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 input-group">
                            <label class="label" for="first-name">First name</label>
                            <input type="text" class="full-width" id="first-name" value="Jenny"/>
                        </div>
                        <div class="col-6 input-group">
                            <label class="label" for="last-name">Last name</label>
                            <input type="text" class="full-width" id="last-name" value="Liang"/>
                        </div>
                    </div>
                    <div class="row">
                        <p class="col-12"> Email: lalalala@uw.edu </p>
                    </div>
                </div>

                <div class="buttons">
                    <button class="primary" @click="this.closeModal"> Save </button>
                    <button @click="this.submit"> Cancel </button>
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
        },
        methods: {
            submit: function() {
                // Do other stuff
                this.closeModal();
            },
            closeModal: function() {
                document.querySelector('div.modal').classList.remove('show-modal');
            },
            openModal: function() {
                console.log('fa123sdf');
                document.querySelector('div.modal').classList.toggle('show-modal');
            },
            keypressCloseModal: function() {
                console.log("HERE");
                var code = (event.keyCode ? event.keyCode : event.which);
                if(code == 27) {
                    event.preventDefault();
                    this.closeModal();
                }
            }
        },
        created() {
            window.addEventListener('keyup',this.keypressCloseModal);
        }, 
        destroyed() {
            window.removeEventListener('keyup', this.keypressCloseModal);
        }
    };
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

#avatars .col-6 {
    margin: 0;
}

#avatars div.row > .col-6.input-group  {
    margin: 0 0.3em;
}

#avatars img {
    height: 80px;
    width: 80px;
    border-radius: 100%;
    margin-right: 2%;
}

.bold {
    font-weight: 900;
}

.buttons {
    display: flex;
    justify-content: flex-end;
}

.buttons button:first-child {
    margin-right: 1em;
}

.close-button {
    float: right;
    width: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: lightgray;
}

.close-button:hover {
    background-color: darkgray;
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
    margin-top: 185px;
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

.dropdown-content a:first-child {
    border-bottom: 1px solid $color-primary;
}

.dropdown-content a:hover {
    background-color: darken($color-secondary-2, 5%);
}

.dropdown:hover .dropdown-content {
    display: block;
}

.email {
    font-size: 0.85em;
}

h2 {
    border-bottom: 1px solid $color-primary;
    font-weight: 300;
    line-height: 2;
    margin: 0;
    margin-bottom: 1em;
}

#images {
    margin: 0.75em 16px;
}

#images > p {
    margin-bottom: 0.5em;
    margin: 0;
}

#images img.selected {
    border: 5px solid $color-primary;
    height: 70px;
    width: 70px;
}

#images div {
    display: inline;
}

.label {
    color: $color-primary;
    font-weight: 300;
}

.logo {
    color: $color-text-light;
    font-size: 1.9em;
    text-align: center;
}

.modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 0;
    visibility: hidden;
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
    z-index: 1;
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem;
    width: 40%;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
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

#profile-info {
    margin-bottom: 1em;
}

#profile-info div {
    align-content: center;
    display: flex;
    justify-content: center;
}

#profile-info img {
    height: 90px;
    margin-bottom: 1em;
    width: 90px;
}

#profile-info p {
    text-align: center;
}

#profile-nav {
    text-align: -webkit-center;
}

.row:nth-child(3) {
    margin: 0;
}

.show-modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
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

@media (max-width: 600px) {
    .buttons {
        margin-top: 1em;
    }

    #images {
        text-align: center;
    }

    #images img {
        height: 50px;
        width: 50px;
    }

    #images p.label {
        text-align: left;
    }

    nav {
        visibility: hidden;
    }
}
</style>