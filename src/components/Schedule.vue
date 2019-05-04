<template>
    <div class="col-12" id="schedule">
        <h2> Conference Schedule </h2>
        <div>
            <div class="schedule-sections">
                <div @click="viewSession(1)" :class="{ 'active-session': this.session == 1 }">
                    Session 1
                </div>
                <div @click="viewSession(2)" :class="{ 'active-session': this.session == 2 }">
                    Session 2
                </div>
                <div @click="viewSession(3)" :class="{ 'active-session': this.session == 3 }">
                    Session 3
                </div>
            </div>
            <table>
                <tbody>
                    <tr v-for="item in subset" v-bind:key="item.start">
                            <td v-if="(item.type != 'act' && item.groupEnd)">
                                {{item.start}} - {{item.groupEnd}}
                            </td>
                            <td v-else-if="item.type != 'act'">
                                
                            </td>
                            <td v-else>
                                {{item.start}} - {{item.end}}
                            </td>
                            <td>
                                <div class="act" v-if="item.type == 'act'">
                                    <img src="/static/navbar-logo.svg"/>
                                    {{item.name}}
                                </div>
                                <div class="schedule-speaker" v-else>
                                    <img v-bind:src="getImageName(item.name)" class="speaker-img"/>
                                    <div>
                                        {{item.desc}} <br/>
                                        <span class="schedule-name"> {{item.name}} </span>
                                    </div>
                                </div>
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    components: {  }, 
    methods: {

    },
    mounted() {
        this.session = 1;
        this.subset = this.schedule.filter(x => x.session == this.session);
    },
    data() {
        return {
            session: 1,
            subset: [],
            schedule: [
                {
                    session: 1,
                    type: 'act',
                    name: 'Video',
                    start: '10:00',
                    end: '10:15'
                },
                {
                    session: 1,
                    type: 'speaker',
                    name: 'James Keblas',
                    desc: 'How Kevin Bacon Saved Seattle: The Seattle Music Story You Never Heard and Why It Matters Today',
                    start: '10:22',
                    end: '10:35',
                    groupEnd: '10:48'
                },
                {
                    session: 1,
                    type: 'speaker',
                    name: 'John Vallier',
                    desc: 'Ethnomusicology 2.0',
                    start: '10:35',
                    end: '10:48'
                },
                {
                    session: 1,
                    type: 'act',
                    name: 'Performance',
                    start: '10:48',
                    end: '10:58'
                },
                {
                    session: 1,
                    type: 'speaker',
                    name: 'Debi Talukdar',
                    desc: 'Philosophy Is for Everyone',
                    start: '10:58',
                    end: '11:11',
                    groupEnd: '11:24'
                },
                {
                    session: 1,
                    type: 'speaker',
                    name: 'Steven Quay',
                    desc: 'How to Be Smart When You\'re Dense: Preventing Breast Cancer by 2030',
                    start: '11:11',
                    end: '11:24'
                },
                {
                    session: 2,
                    type: 'speaker',
                    name: 'Nicole McNichols',
                    start: '12:51',
                    end: '1:04',
                    desc: 'Students on Top: A Vision for 21st Century Sex Education',
                    groupEnd: '1:20'
                },
                {
                    session: 2,
                    type: 'speaker',
                    name: 'Julio Covarrubias',
                    start: '1:07',
                    desc: 'Setting the Record Straight: The Latin American Mind in Global Context',
                    end: '1:20'
                },
                {
                    session: 2,
                    type: 'act',
                    name: 'Performance',
                    start: '1:20',
                    end: '1:35'
                },
                {
                    session: 2,
                    type: 'speaker',
                    name: 'Brad Finegood',
                    desc: 'Unlocking the Cure to Substance Use Disorder',
                    start: '1:35',
                    end: '1:48',
                    groupEnd: '1:48'
                },
                {
                    session: 2,
                    type: 'act',
                    name: 'Video',
                    start: '1:48',
                    end: '1:58'
                },
                {
                    session: 2,
                    type: 'speaker',
                    name: 'Tamuka Chidyausiku',
                    desc: 'Leveraging Privilege to Amplify the Voices of the Underprivileged',
                    start: '1:58',
                    end: '2:11',
                    groupEnd: '2:11'
                },
                {
                    session: 3,
                    type: 'act',
                    name: 'Performance',
                    start: '2:19',
                    end: '2:31',
                },
                {
                    session: 3,
                    type: 'speaker',
                    name: 'Nat Puff',
                    desc: "The Dos and Dont\'s of Breakup Songs",
                    start: '2:31',
                    end: '2:44',
                    groupEnd: '2:57'
                },
                {
                    session: 3,
                    type: 'speaker',
                    name: 'Susanne Rafelski',
                    desc: 'In Search of Patterns inside the Cell through Space and Time',
                    start: '2:44',
                    end: '2:57'
                },
                {
                    session: 3,
                    type: 'act',
                    name: 'Video',
                    start: '2:57',
                    end: '3:07'
                },
                {
                    session: 3,
                    type: 'speaker',
                    name: 'Venus Rekow',
                    desc: 'Power of Inclusion',
                    start: '3:07',
                    end: '3:20',
                    groupEnd: '3:33'
                },
                {
                    session: 3,
                    type: 'speaker',
                    name: 'Nathan Vass',
                    desc: 'Why We Need Strangers',
                    start: '3:20',
                    end: '3:33'
                },
            ],
        }
    },
    methods: {
        viewSession(session) {
            this.session = session;
            this.subset = this.schedule.filter(x => x.session == session);
        },
        getRoundedTime(time) {
            var split = time.split(":");
            var mins = Math.ceil(parseInt(split[1]) / 10) * 10;

            if (mins == 60 || mins == 0) {
                mins = 0 + "0";
            } 
            if (mins == 60) {
                split[0] = (split[0] + 1) % 12;
            }
            return split[0] + ":" + mins;
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

.act img {
    width: 25px;
    margin-right: 1em;
}

.act {
    background-color: $color-primary-2;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-tertiary;
    font-weight: 700;
}

div.schedule-entry {
    display: flex;
}

td {
    padding: 0.5em 0;
}

tr td:first-child {
    width: 8.5em;
    color: $color-tertiary;
}

tr td:nth-child(2) {
    border-bottom: 1px solid $color-primary-2;
}

.schedule-name {
    font-size: 0.85em;
}

table {
    width: 100%;
}

.schedule-speaker {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1em 2em;
}

.active-session {
    background-color: purple;
}

.active-speaker {
    border-left: 8px solid $color-tertiary;
}

.schedule-speaker div {
    font-weight: 700;
    font-size: 1.1em;
    margin: 2% 4%;
    color: $color-tertiary;
}

div.schedule-time {
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.schedule-sections div.scheduleActive {
    opacity: 1;
    background-color: $color-primary-2;
    border-radius: 6px;
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
    margin: 2% 7%;
    margin-left: 0;
}

div.schedule-entry div {
    color: $color-tertiary;
    padding: 0.25em 0.5em;
    font-weight: 700;
    font-size: 1.1em;
    margin: 2% 4%;
    margin-left: 0;
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

.speaker-img {
    border-radius: 100%;
    height: 75px;
    margin-right: 1em;
    width: auto;
}

</style>