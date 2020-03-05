<template>
    <ConferencePage :selectedIndex="1">
        <div class="main" style="max-width: 100vw; display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <div class="row">
                <!-- <div style="max-width: 100vw; width: 90%; background-color: purple"> -->
                <iframe style="max-width: 100vw" width="100%" height="450px" src="https://www.youtube.com/embed/A9sOb_r6Hy0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <!-- </div> -->
            </div>

            <div class="row">
                <h3 style="margin: 15px 15px;"> Conference Schedule Coming Soon </h3>
                <!-- <Schedule/> -->
            </div>
        </div>

    </ConferencePage> 
</template>

<script>
import ConferencePage from "@/components/ConferencePage";
import Schedule from "@/components/Schedule";


export default {
    name: "WatchPage",
    components: { ConferencePage, Schedule }, 
    methods: {
    
    },
    methods: {
        setSpeakerDesc(flag) {
            this.speakerDesc = flag;
        },
        getName(name) {
            var first = name.split(' ');
            if (first[0].endsWith('s')) {
                return first + "\'";
            }
            return first + "\'s";
        },
        getImageName(speaker) {
            var prefix = '/static/speaker-headshots/';
            var suffix = '.jpg';
            return prefix + speaker.toLowerCase().replace(" ", "_") + suffix;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

// .main > div.row {
//     margin: auto;
// }

.speaker-desc {
    color: $color-tertiary;
    font-size: 0.95em;
    height: 11.75em;
    overflow-y: scroll;
}

#speaker-info .info-footer {
    margin-bottom: 1em;
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
    // min-width: 700px;
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
    max-height: 4.2em;
    overflow-y: scroll;
}

@media (max-width: 760px) {
    // .main {
    //     margin-left: 0;
    // }

    .main > .row:nth-child(2) {
        display: none;
    }
}
</style>