<template>
    <ConferencePage :selectedIndex="1">
        <div class="main">
            <div class="row">
                <div class="col-8">
                    <iframe width="100%" height="450px" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-4" id="stream-info">
                    <div id="stream-nav"> 
                        <div v-bind:class="{ streamActive: !speakerDesc }" @click="setSpeakerDesc(false)"> TED Talk </div>
                        <div v-bind:class="{ streamActive: speakerDesc }" @click="setSpeakerDesc(true)"> Speaker </div>
                    </div>
                    <div id='talk-info' v-if="!speakerDesc">
                        <div>
                            <p class="accent-label"> TED TALK HAPPENING NOW </p>
                            <p class="talk-name"> The Power of Inclusion </p>
                        </div>
                        <div>
                            <p class="accent-label"> ON STAGE </p>
                            <div class="info-footer">
                                <img src='/static/speaker-headshots/venus_rekow.jpg' class="speaker-img"/>
                                <div>
                                    <span class="speaker-name"> Venus Rekow </span> <br/>
                                    <a href="/#/speakers" target="blank"> <span class="view-list"> View full speaker list &nbsp; <span> &#9658; </span> </span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='speaker-info' v-else>
                        <div class="info-footer">
                            <img src='/static/speaker-headshots/venus_rekow.jpg' class="speaker-img"/>
                            <div class="name-container"> 
                                <span class="speaker-name-2"> Venus Rekow </span>
                            </div>
                        </div>
                        <div class="speaker-desc"> Venus Rekow is the founder of Neural Shifts, a consulting firm specialized in helping leaders foster diverse, equitable and inclusive workforces. She designs & implements effective global diversity and inclusion programs, conducts organizational assessments & employs analytics to measure business results. Venus is well known for her ability to translate research insights from Neuroscience & Behavioral economics into practical management strategies that enable behavior change. Her clients include Fortune 500 companies & non-profit organizations. Venus earned an M.S. in Organizational Development from Seattle University, completed coursework for an M.S. in Neuroscience from the University of Oberta, Spain. In addition, she is a certified executive coach. </div>
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

            <div class="row">
                <div class="col-12" id="schedule">
                    <h2> Conference Schedule </h2>
                    <div>
                        <div class="schedule-sections">
                            <div class="scheduleActive">
                                Section 1
                            </div>
                            <div>
                                Section 2
                            </div>
                            <div>
                                Section 3
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    10:15 - 12:00
                                </div>
                                <div>
                                    <img src='/static/speaker-headshots/venus_rekow.jpg' class="speaker-img"/>
                                    <div>
                                        Ethnomusicology 2.0
                                        Venus Rekow
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </ConferencePage> 
</template>

<script>
import ConferencePage from "@/components/ConferencePage";
import axios from 'axios';

export default {
    name: "HomePage",
    components: { ConferencePage }, 
    methods: {

    },
    data() {
        return {
            speakerDesc: false
        }
    },
    methods: {
        setSpeakerDesc(flag) {
            this.speakerDesc = flag;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.schedule-sections div.scheduleActive {
    opacity: 1;
    background-color: $color-primary-2;
    border-radius: 6px;
}

.speaker-desc {
    color: $color-tertiary;
    font-size: 0.95em;
}

#speaker-info .info-footer {
    margin-bottom: 1em;
}

.schedule-sections {
    display: flex;
    border-bottom: 2px solid $color-primary-2;
    margin-bottom: 0.75em;
}

.schedule-sections div {
    color: $color-tertiary;
    padding: 0.25em 0.5em;
    font-weight: 700;
    font-size: 1.1em;
    opacity: 0.5;
    margin: 2% 5%;
    margin-left: 0;
}

a {
    text-decoration: none;
}

h2 {
    color: $color-tertiary;
    font-size: 2em;
    margin: 0;
}

#schedule {
    padding: 2em 2.5em;
    border-radius: 6px;
}

.name-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.view-list {
    color: $color-tertiary;
    font-size: 0.85em;
}

.speaker-name {
    color: $color-tertiary;
    font-size: 1.15em;
    font-weight: 700;
}

.speaker-name-2 {
    color: $color-tertiary;
    font-size: 1.5em;
    font-weight: 700;
}

.speaker-img {
    border-radius: 100%;
    height: 75px;
    margin-right: 1em;
    width: auto;
}

#talk-info {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

.info-footer {
    display: flex;
    margin-top: 0.5em;
}

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

.main {
    height: 100%;
    width: 100%;
    margin: 1em 3em;
}

.main > .row > .col-8, .main > .row > .col-4 {
    border-radius: 6px;
    max-height: 100%;
    overflow-y: scroll;
}

.main > .row:nth-child(2) > .col-8 {
    padding: 1em;
}

.main > .row:nth-child(2) .col-4, .main > .row:nth-child(2) .col-8 {
    margin-top: 0;
}

.main > .row:nth-child(2) .col-8 {
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.bottom-section, #stream-info, #schedule {
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
    padding: 2em 1.5em;
}

.streamActive {
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
    .main {
        margin-left: 0;
    }

    .main > .row:nth-child(2) {
        display: none;
    }
}
</style>