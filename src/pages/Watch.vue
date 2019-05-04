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
                                <a href="https://www.facebook.com/" target="blank"> <i class="fab fa-facebook-f"></i> </a>
                            </div>
                            <div class='icon'>
                                <a href="https://www.instagram.com/" target="blank"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class='icon'>
                                <a href="https://www.twitter.com/" target="blank"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <Schedule/>
            </div>
        </div>

    </ConferencePage> 
</template>

<script>
import ConferencePage from "@/components/ConferencePage";
import Schedule from "@/components/Schedule";
import axios from 'axios';

export default {
    name: "WatchPage",
    components: { ConferencePage, Schedule }, 
    methods: {

    },
    data() {
        return {
            speakerDesc: false,
            speakerInfo: [
                {
                    name: 'James Keblas',
                    title: 'How Kevin Bacon Saved Seattle: The Seattle Music Story You Never Heard and Why It Matters Today',
                    desc: 'James Keblas is a celebrated economic development leader in the areas of arts and entertainment. He got his start in the music business in 1991 working in hip hop at NastyMix Records, pushing artists like Sir Mix-a-Lot. He was Director of Seattle’s Office of Film, Music and Special Events for 9 years, where he earned the title “Punk Rocker in a Suit.” His favorite professional achievement will always be Co-Founding The Vera Project, a music and arts center in Seattle run by and for youth.',
                    start: '10:22',
                },
                {
                    name: 'Jon Vallier',
                    title: "Ethnomusicology 2.0",
                    desc: 'John Vallier is head of media and ethnomusicology curator at the University of Washington Libraries. In these roles he oversees the Libraries\' Ethnomusicology Archives and audio/video makerspace: Media Arcade. As an affiliate professor of ethnomusicology John teaches on topics such as music of Seattle, remix studies, and sound of cinema for UW Honors, Cinema and Media Studies, and Ethnomusicology. Before coming to UW, John was ethnomusicology archivist at UCLA, a composer for Activision, and drummer for bands such as Swell and Santa Cruise Control.',
                    start: '10:35',
                },
                {
                    name: 'Debi Talukdar',
                    title: 'Philosophy Is for Everyone',
                    desc: 'Debi Talukdar is the Philosopher-in-Residence at Thurgood Marshall Elementary School. She has been facilitating philosophical discussions with K-12 students and educators in Seattle for several years and serves on the boards of the UW Center for Philosophy for Children, and the Philosophy Learning and Teaching Organization (PLATO). Debi is also the Program Coordinator and an ensemble member of Theater for Change UW at the Center for Teaching and Learning. They do anti-oppressive professional development using interactive theater. Debi is graduating with a Ph.D. in Education this summer. In her free time, she enjoys board games, yoga, and sleeping in.',
                    start: '10:58',
                },
                {
                    name: 'Steven Quay',
                    title: 'How to Be Smart When You\'re Dense: Preventing Breast Cancer by 2030',
                    desc: 'Steven Quay is the founder of Seattle-based Atossa Genetics, dedicated to breast cancer prevention. He received his Ph.D. in Biological Chemistry, M.D. from the University of Michigan, postdoc at MIT and Harvard, and was a faculty member at Stanford Medical School. His contributions to medicine, cancer, and biochemistry have been cited over 9,300 times. Since entering biotech in 1983, he has founded six startups, invented seven FDA-approved pharmaceuticals, and holds 87 US patents. Over 80 million people have benefited from the medicines he invented. His current passion is the prevention of the two million yearly breast cancer cases worldwide.',
                    start: '11:11',
                },
                {
                    name: 'Nicole McNichols',
                    title: 'Students on Top: A Vision for 21st Century Sex Education',
                    desc: 'Nicole McNichols is a Lecturer in the Psychology Department at the University of Washington, where she also received her PhD in Social Psychology. Over the past five years, Nicole has built her class, The Diversity of Human Sexuality, into the University’s largest and most popular undergraduate course with over two thousand enrolled students each year. She is the co-author of A Critical Introduction to Human Sexuality, an online, interactive textbook that stresses a sex-positive approach to sex education. Her research focuses on the role of interactive platforms in understanding undergraduates’ attitudes surrounding Human Sexuality topics. She is married and has three children.',
                    start: '12:54',
                },
                {
                    name: 'Julio Covarrubias',
                    title: 'Setting the Record Straight: The Latin American Mind in Global Context',
                    desc: 'Julio Covarrubias is a doctoral candidate and teaching assistant in the department of philosophy at UW. He is the recipient of the American Philosophical Association\'s 2018 Prize Essay on Latin American Thought for “the best unpublished, English-language, philosophical essay in Latin American thought.” His research focuses on Latinx identity and racial oppression. Currently, he is writing a dissertation on the ethics and politics of inter- and intra-personal relationships in the wake of colonial violence.',
                    start: '13:07',
                },
                {
                    name: 'Brad Finegood',
                    title: 'Unlocking the Cure to Substance Use Disorder',
                    desc: 'Demystifying Stigma is based on a lifetime of experience that Brad Finegood has been through. He works as a Strategic Advisor in Public Health - Seattle & King County. Brad recently served as a co-chair of the King County Opiate Task Force and was the Alcohol and Drug Coordinator for King County. His Bachelor\'s Degree is from Michigan State and his Master\'s Degree in Counseling, Specialty in Alcohol and Drug Abuse from Western Michigan. He has worked in the behavioral health field for 20 years. He is the sibling and survivor of a younger brother that died from an overdose.',
                    start: '13:35',
                },
                {
                    name: 'Tamuka Chidyausika',
                    title: 'Leveraging Privilege to Amplify the Voices of the Underprivileged',
                    desc: 'Tamuka Martin Chidyausiku is the 1st black PhD candidate in his Biological Physics Structure and Design program, Biochemistry lab and at the Institute for Protein Design where he is studying computational biology with applications in agriculture. Tamuka, (aka Muk) is graduating Spring 2019 from the UW Biochemistry department where he is launching his social media class on “Hip Hop Biochemistry @TamukaInvestments”. As an openly gay student from Zimbabwe, Tamuka believes that representation matters and visibility is the key to STEM-ulating the future generation. He is also the founder Chibage Chip; an Agri-tech startup aimed at helping farmers combat climate change.',
                    start: '13:58',
                },
                {
                    name: 'Nat Puff',
                    title: 'The Dos and Dont\'s of Breakup Songs',
                    desc: 'Also known for her internet presence, Left At London (sometimes stylized and shortened as /@/), is the stage name of singer/songwriter Nat Puff (she/her), a trans woman from Seattle, Washington who is not afraid to let herself be known intimately through her music, while still remaining accessible.',
                    start: '14:31',
                },
                {
                    name: 'Susanne Rafelski',
                    title: 'In Search of Patterns inside the Cell through Space and Time',
                    desc: 'Susanne Rafelski is a quantitative cell biologist and a Director at the Allen Institute for Cell Science in Seattle. Susanne has been imaging the structures inside living cells since she was 17. Her life-long scientific goal is to decipher the patterns and rules that transform the overwhelming complexity found inside cells into functioning units of life. The quest to unlock the secrets of the cell requires there to be no boundaries between scientific fields. Susanne is always looking for ways to incorporate interdisciplinary approaches into her research including data science analyses, image processing, mathematical modeling, computational simulations, and modern machine learning.',
                    start: '14:44',
                },
                {
                    name: 'Venus Rekow',
                    title: 'Power of Inclusion',
                    desc: 'Venus Rekow is the founder of Neural Shifts, a consulting firm specialized in helping leaders foster diverse, equitable and inclusive workforces. She designs & implements effective global diversity and inclusion programs, conducts organizational assessments & employs analytics to measure business results. Venus is well known for her ability to translate research insights from Neuroscience & Behavioral economics into practical management strategies that enable behavior change. Her clients include Fortune 500 companies & non-profit organizations. Venus earned an M.S. in Organizational Development from Seattle University, completed coursework for an M.S. in Neuroscience from the University of Oberta, Spain. In addition, she is a certified executive coach.',
                    start: '15:07',
                },
                {
                    name: 'Nathan Vass',
                    title: 'Why We Need Strangers',
                    desc: 'Nathan Vass has had work displayed in over thirty photography shows and is the director of nine films, six of which have shown at festivals and one of which premiered at Henry Art Gallery. Born in South Central LA, he holds a Bachelor of Fine Arts from the University of Washington. His blog, The View From Nathan\'s Bus, details his adventures as a public bus driver and has been featured in more than fifteen news outlets including NPR and The Seattle Times. His new book, The Lines That Make Us, is a Seattle bestseller.',
                    start: '15:20',
                },
            ],
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

@media (max-width: 760px) {
    .main {
        margin-left: 0;
    }

    .main > .row:nth-child(2) {
        display: none;
    }
}
</style>