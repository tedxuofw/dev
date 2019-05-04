<template>
    <div class="col-12" id="schedule">
        <h2> Conference Schedule </h2>
        <div>
            <div class="schedule-sections">
                <div class="scheduleActive" @click="">
                    Session 1
                </div>
                <div>
                    Session 2
                </div>
                <div>
                    Session 3
                </div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            10:15 - 10:20
                        </td>
                        <td>
                            <div class="act">
                                <img src="/static/navbar-logo.svg"/>
                                Opening
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            10:15 - 10:20
                        </td>
                        <td>
                            <div class="schedule-speaker">
                                <img src='/static/speaker-headshots/venus_rekow.jpg' class="speaker-img"/>
                                <div>
                                    Ethnomusicology 2.0 <br/>
                                    Venus Rekow
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        </td>
                        <td>
                            <div class="schedule-speaker active-speaker">
                                <img src='/static/speaker-headshots/venus_rekow.jpg' class="speaker-img"/>
                                <div>
                                    Ethnomusicology 2.0 <br/>
                                    Venus Rekow
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            10:15 - 10:20
                        </td>
                        <td>
                            <div class="act">
                                <img src="/static/navbar-logo.svg"/>
                                Closing
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
    data() {
        return {
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
                    desc: '',
                    start: '10:22',
                    end: '10:35',
                    groupEnd: '10:48'
                },
                {
                    session: 1,
                    type: 'speaker',
                    name: 'Jon Vallier',
                    desc: '',
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
                    desc: '',
                    start: '10:58',
                    end: '11:11',
                    groupEnd: '11:24'
                },
                {
                    session: 1,
                    type: 'speaker',
                    name: 'Steven Quay',
                    desc: '',
                    start: '11:11',
                    end: '11:24'
                },
                {
                    session: 2,
                    type: 'speaker',
                    name: 'Nicole McNichols',
                    start: '12:54',
                    end: '13:07',
                    groupEnd: '10:48'
                },
                {
                    session: 2,
                    type: 'speaker',
                    name: 'Julio Covarrubias',
                    start: '13:07',
                    end: '13:20'
                },
                {
                    session: 2,
                    type: 'act',
                    name: 'Performance',
                    start: '13:20',
                    end: '13:35'
                },
                {
                    session: 2,
                    type: 'speaker',
                    name: 'Brad Finegood',
                    start: '13:35',
                    end: '13:48'
                },
                {
                    session: 2,
                    type: 'act',
                    name: 'Video',
                    start: '13:48',
                    end: '13:58'
                },
                {
                    session: 2,
                    type: 'speaker',
                    name: 'Tamuka Chidyausika',
                    start: '13:58',
                    end: '14:11'
                },
                {
                    session: 3,
                    type: 'act',
                    name: 'Performance',
                    start: '14:19',
                    end: '14:31'
                },
                {
                    session: 3,
                    type: 'speaker',
                    name: 'Nat Puff',
                    start: '14:31',
                    end: '14:44'
                },
                {
                    session: 3,
                    type: 'speaker',
                    name: 'Susanne Rafelski',
                    start: '14:44',
                    end: '14:57'
                },
                {
                    session: 3,
                    type: 'act',
                    name: 'Video',
                    start: '14:57',
                    end: '15:07'
                },
                {
                    session: 3,
                    type: 'speaker',
                    name: 'Venus Rekow',
                    start: '15:07',
                    end: '15:20'
                },
                {
                    session: 3,
                    type: 'speaker',
                    name: 'Nathan Vass',
                    start: '15:20',
                    end: '15:33'
                },
            ],
        }
    },
    methods: {
        
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


table {
    width: 100%;
}

.schedule-speaker {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1em 2em;
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