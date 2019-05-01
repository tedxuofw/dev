<template>
    <div>
        <NavBar watch/>
        <main>
            <div class="row">
                <div class="col-8">
                    <iframe width="100%" height="350px" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-4" id="stream-info">
                    <div id="stream-nav"> 
                        <div class="stream-active"> TED Talk </div>
                        <div> Speaker </div>
                    </div>
                    <div id='talk-info'>
                        <div>
                            <p class="accent-label"> TED TALK HAPPENING NOW </p>
                            <p class="talk-name"> Real Power Is Inclusive </p>
                        </div>
                        <div>
                            <p class="accent-label"> ON STAGE </p>
                            Venus Rekow
                            View full speaker list
                        </div>
                    </div>
                    <div id='speaker-info'>
                    </div>
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
                    <div>
                        <p> Share the TEDxUofW stream </p>
                        <div id="social-icons"> 
                            <div class='icon'>
                                <i class="fab fa-facebook-f"></i>
                            </div>
                            <div class='icon'>
                                <i class="fab fa-instagram"></i>
                            </div>
                            <div class='icon'>
                                <i class="fab fa-twitter"></i>
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

.icon {
    align-items: center;
    display: flex;
    background-color: $color-primary-2;
    border-radius: 100%;
    height: 1.75em;
    justify-content: center;
    margin: 0 0.5em;
    width: 1.75em;
}

.icon i {
    color: $color-primary;
}

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

.col-4.bottom-section > div > p {
    color: $color-accent;
    font-size: 0.9em;
    font-weight: 700;
    text-align: center;
}

#social-icons {
    display: flex;
    justify-content: center;
}

#stream-nav {
    border-bottom: 2px solid $color-primary-2;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    padding-bottom: 0.75em;
}

#stream-nav div {
    color: $color-tertiary;
    display: flex;
    justify-content: center;
    line-height: 1em;
    text-align: center;
    width: 50%;
}

#stream-nav div:first-child {
    border-right: 2px solid $color-tertiary;
}

#stream-info {
    display: flex;
    flex-direction: column;
    padding: 1em;
}

.stream-active {
    font-weight: 700;
}

.accent-label {
    color: $color-tertiary;
    font-size: 0.8em;
    font-style: italic;
    font-weight: 700;
    margin: 0;
    opacity: 0.7;
}

.talk-name {
    color: $color-tertiary;
    font-size: 2em;
    font-weight: 700;
    line-height: 1.25;
    margin: 0;
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