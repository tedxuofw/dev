<template>
    <div>
        <NavBar dashboard :user="user"/>
        <main>
            <h1> Welcome, {{ user.first }}! </h1>
            <div class="col-12">
                <div class="row card-row">
                    <div class="col-4"> 
                        <div class="header"> Profile </div>
                        <div class="card-container">
                            <div class="card-body"> 
                                <div class="card-child">
                                    <img src="https://fcbk.su/_data/stickers/shiba_inu/shiba_inu_12.png"/>
                                </div>
                                <p class="name card-child"> {{ user.first }} {{ user.last }} </p>
                                <p class="card-child email"> {{ user.email }} </p>
                                <div class="card-child">
                                    <button class="secondary"> View Profile </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-8"> 
                        <div class="header"> Your Tickets </div>
                        <div class="card-container">
                            <div class="card-body"> 
                                <p class="warning card-child"> You don't have tickets for TEDx2019 yet. </p>
                                <div class="card-child">
                                    <a href="/#/checkout"> <button class="secondary"> Get Tickets </button> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div> 
</template>

<script>
import { user } from '../user.js';
import NavBar from "@/components/NavBar";

export default {
    name: "HomePage",
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
    components: { NavBar }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
main {
    margin-left: 200px;
    padding: 1em 3em;
    height: 100%;
}

h1 {
    font-weight: 300;
    margin-left: 48px;
}

.card-body {
    background-color: $color-secondary-2;
    padding: 1em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    width: 100%;
}

.card-body > div {
    display: flex;
    justify-content: center;
}

.card-body img {
    display: inline-block;
}

.card-body img {
    border-radius: 100%;
    width: 130px;
    height: 130px;
}

.card-body p {
    margin: 0;
}

.card-child {
    width: 100%;
}

.col-4, .col-8 {
    margin-bottom: 2em;
}

div button {
    margin-top: 1.5em;
}

.email {
    font-size: 0.9em;
}

.header {
    border-bottom: 4px solid red;
    font-size: 1.25em;
    margin-bottom: 1em;
}

.card-row {
    height: 60%;
    margin-bottom: 1em;
}

.card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85%;
}

.warning {
    color: $color-primary;
}

.name {
    font-size: 1.25em;
}

@media (max-width: 600px) {
    main {
        margin-left: 0;
    }

    h1 {
        margin-left: 16px;
    }
}

</style>