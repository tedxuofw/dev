<template>
    <div class="dropdown-content">
        <div id="profile-info">
            <div id="profile-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Love_Heart_symbol_square.svg"/>
            </div>
            <p> {{ user.first }} {{ user.last }} </p>
            <p class="email"> {{ user.email }} </p>
        </div>
        <div id="profile-nav">
            <a @click="this.openModal">Edit Profile</a>
            <a>Logout</a>
        </div>
    </div>
</template>

<script>

export default {
    name: "Dropdown",
    props: {
        user: Object
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
            document.querySelector('div.modal').classList.toggle('show-modal');
        },
        keypressCloseModal: function() {
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
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.dropdown-content {
    display: none;
    background-color: $color-secondary-2;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    left: 0;
    margin-top: 200px;
    padding: 1.5em;
    position: absolute;
    width: 180px;
    z-index: 1;
}

.dropdown-content a {
    color: $color-primary;
    display: block;
    padding: 12px 16px;
    text-align: center;
    text-decoration: none;
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

#profile-info {
    margin-bottom: 1em;
}

#profile-info div {
    align-content: center;
    display: flex;
    justify-content: center;
}

#profile-info img {
    border-radius: 100%;
    height: 80px;
    margin-bottom: 1em;
    width: auto;
}

#profile-info p {
    text-align: center;
}

#profile-nav {
    text-align: -webkit-center;
}

.show-modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
}

#user p {
    color: black;
    margin: 0;
}

</style>