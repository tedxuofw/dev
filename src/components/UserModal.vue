<template>
    <div class="user-modal">
        <div class="user-modal-content">
            <h2>Profile</h2>
            <div id="avatars">
                <div id="images">
                    <p class="label"> Avatar </p>
                    <div>
                        <img class="selected" src="../assets/test_4.svg" @click="updateActive($event)"/>
                    </div>
                    <div>
                        <img src="../assets/test_2.svg" @click="updateActive($event)"/>
                    </div>
                    <div>
                        <img src="../assets/test_3.svg" @click="updateActive($event)"/>
                    </div>
                    <div> 
                        <img src="../assets/test_1.svg" @click="updateActive($event)"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 input-group">
                        <label class="label" for="first-name">First name</label>
                        <input type="text" class="full-width" id="first-name" :value="user.first"/>
                    </div>
                    <div class="col-6 input-group">
                        <label class="label" for="last-name">Last name</label>
                        <input type="text" class="full-width" id="last-name" :value="user.last"/>
                    </div>
                </div>
                <div class="row">
                    <p class="col-12 email"> Email: {{ user.email }} </p>
                </div>
            </div>

            <div class="buttons">
                <button class="primary" @click="this.closeModal"> Save </button>
                <button @click="this.submit"> Cancel </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Dropdown from "./Dropdown";

export default {
    name: "UserModal",
    props: {
        user: Object
    },
    methods: {
        closeModal: function() {
            document.querySelector('div.user-modal').classList.remove('show-modal');
        },
        submit: function() {
            // Do other stuff
            this.closeModal();
        },
        updateActive(event) {
            var images = document.querySelectorAll('#images img');

            images.forEach(element => {
                element.classList.remove('selected');
            });

            event.target.classList.add('selected');
        }
    }
}
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

.buttons {
    display: flex;
    justify-content: flex-end;
}

.buttons button:first-child {
    margin-right: 1em;
}

h2 {
    border-bottom: 2px solid $color-primary;
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

.user-modal {
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

.user-modal-content {
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
    left: 57%;
    padding: 1rem;
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
}

p.col-12 {
    margin: 0 16px;
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

@media (max-width: 600px) {
    .buttons {
        margin-top: 1em;
    }

    .email {
        font-size: 0.9em;
    }

    #images {
        text-align: center;
    }

    #images img {
        height: 50px;
        width: 50px;
    }

    #images img.selected {
        border: 5px solid $color-primary;
        height: 40px;
        width: 40px;
    }

    #images p.label {
        text-align: left;
    }

    .user-modal-content {
        width: 80%;
        left: 50%;
    }
}
</style>