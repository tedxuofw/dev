<template>
    <div>
        <NavBar feedback :user="user"/>
        <main>
            <h1> Give Feedback </h1>
            <p> We'd love to hear your thoughts! You should hear back from TEDxUofW within 48 hours. </p>
            <div class="col-12 responsive">
                <div class="row card-row">
                    <div class="col-12 responsive"> 
                        <div class="header"> Tell us what you think: </div>
                        <div class="card-container">
                            <input type="text" placeholder="Subject" class="full-width">
                            <textarea class="card-body" placeholder="Type your message here..."/>                        
                        </div>
                        <button class="primary full-width" @click="updateParent()">Continue</button>
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

main > p {
    margin-left: 48px;
}

.card-body {
    padding: 1em;
    height: 200px;
    width: 100%;
}

div button {
    margin-top: 0.5em;
}

.header {
    border-bottom: 4px solid red;
    font-size: 1.25em;
}

.card-row {
    height: 60%;
    margin-bottom: 1em;
}

.card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 85%;
}

textarea {
    border-radius: 4px;
    font-size: 1em;
    resize: none;
}

@media (max-width: 600px) {
    main {
        margin-left: 0;
    }
}


@media (max-width: 750px) {
    .card-container {
        padding: 0.9em 0;
    }

    h1, main > p {
        margin-left: 16px;
    }

    .responsive {
        margin-left: 0;
    }
}


</style>