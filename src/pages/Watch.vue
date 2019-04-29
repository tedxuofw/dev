<template>
    <div>
        <NavBar watch/>
        <main>
            <div class="row">
                <div class="col-8">
                    <iframe width="100%" height="350px" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-4" id="stream-info">
                    HELLOOO
                </div>
            </div>
            <div class="row">
                <div class="col-8 bottom-section">
                    <div>
                        <p class="cta-header"> Did Venus' talk inspire you? </p>
                        <p class="cta-subtitle">Share your ideas with Venus and other viewers.</p>
                    </div>
                    <button class="primary"> Interact with speaker </button>
                </div>
                <div class="col-4 bottom-section">
                    Testing
                </div>
            </div>
    </main>

    </div> 
</template>

<script>
import { user } from '../user.js';
import NavBar from "@/components/NavBar";
import axios from 'axios';

export default {
    name: "HomePage",
    data () {
        return {
            user: {
                first: user.first(),
                last: user.last(),
                email: user.email(),
                profile: user.profile(),
            },
        }
    },
    components: { NavBar }, 
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

main {
    margin-left: 200px;
    padding: 1em 3em;
    height: 100%;
}

main > .row > .col-8, main > .row > .col-4 {
    border-radius: 6px;
}

main > .row:nth-child(2) > .col-8 {
    padding: 1em;
}

main > .row:nth-child(2) .col-4, main > .row:nth-child(2) .col-8 {
    margin-top: 0;
}

main > .row:nth-child(2) .col-8 {
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.bottom-section, #stream-info {
    background-color: $color-secondary-2;
}

.cta-header {
    color: $color-accent;
    font-size: 1.2em;
    font-weight: 700;
    line-height: 1;
    margin: 0.5em 0;
}

.cta-subtitle {
    color: $color-accent;
    font-size: 0.8em;
    line-height: 1;
}

.col-8.bottom-section button {
    font-size: 0.8em;
}

@media (max-width: 600px) {
    main {
        margin-left: 0;
    }
}

@media (max-width: 1200px){
    main > .row:nth-child(2) {
        display: none;
    }
}
</style>