<template>
  <ConferencePage :selectedIndex="2">
    <div class="modal-container" v-if="isSpeakerSelected" @click="selectSpeaker(-1)">
      <div class="modal" @click.stop="() => {}">
        <div class="image" :style="{ backgroundImage: `url('${selectedSpeaker.imageUrl}'` }"></div>
        <div class="content-container">
          <div class="content overflow-content">
            <span class="name">{{ selectedSpeaker.name }}</span>
            <span class="title">{{ selectedSpeaker.title }}</span>
            <p v-html="selectedSpeaker.description"></p>
          </div>
          <button @click="selectSpeaker(-1)" class="full-width">Back</button>
        </div>
      </div>
    </div>
    <div class="standard-hero">
      <h1>Speakers</h1>
      <div class="accent"></div>
    </div>
    <div class="container section-sponsors">
      <div class="row">
        <div class="speakers-container">
          <router-link class="speaker" v-for="(speaker, i) in speakers" :key="speaker.name" :to="speaker.askUrl">
            <img :src="speaker.imageUrl" />
            <div class="content">
              <span class="name">{{ speaker.name }}</span>
              <span class="title">{{ speaker.title }}</span>
              <router-link class="ask-button" :to="speaker.askUrl">Ask Question</router-link>
            </div>
          </router-link>
          <div class="speaker-filler" v-for="(speaker, i) in speakerSpacer" :key="i"></div>
        </div>
      </div>
    </div>
  </ConferencePage>
</template>

<script>
import Arrows from "@/components/Arrows";
import ConferencePage from "@/components/ConferencePage";
export default {
  name: "SpeakersPage",
  components: { Arrows, ConferencePage },
  data() {
    const makeSpeaker = this.makeSpeaker.bind(this);
    return {
      selectedSpeakerIndex: -1,
      speakers: [
        makeSpeaker(
          'Venus Rekow',
          'The Power of Inclusion',
          '<a href="https://www.linkedin.com/in/venusrekow/" target="_blank">Venus Rekow</a> is the founder of <a href="https://neuralshifts.com" target="_blank">Neural Shifts</a>, a consulting firm specialized in helping leaders foster diverse, equitable and inclusive workforces. She designs & implements effective global diversity and inclusion programs, conducts organizational assessments & employs analytics to measure business results. Venus is well known for her ability to translate research insights from Neuroscience & Behavioral economics into practical management strategies that enable behavior change. Her clients include Fortune 500 companies & non-profit organizations. Venus earned an M.S. in Organizational Development from Seattle University, completed coursework for an M.S. in Neuroscience from the University of Oberta, Spain. In addition, she is a certified executive coach.'
        ),
        makeSpeaker(
          'Nathan Vass',
          'Why We Need Strangers',
          'Nathan Vass has had work displayed in over thirty photography shows and is the director of nine films, six of which have shown at festivals and one of which premiered at Henry Art Gallery. Born in South Central LA, he holds a Bachelor of Fine Arts from the University of Washington. His blog, The View From Nathan\'s Bus, details his adventures as a public bus driver and has been featured in more than fifteen news outlets including NPR and The Seattle Times. His new book, The Lines That Make Us, is a Seattle bestseller.'
        ),
        makeSpeaker(
          'Nat Puff',
          'The Dos and Dont\'s of Breakup Songs',
          'Also known for her internet presence, Left At London (sometimes stylized and shortened as /@/), is the stage name of singer/songwriter Nat Puff (she/her), a trans woman from Seattle, Washington who is not afraid to let herself be known intimately through her music, while still remaining accessible.'
        ),
        makeSpeaker(
          'Julio Covarrubias',
          'Setting the Record Straight: The Latin American Mind in Global Context',
          'Julio Covarrubias is a doctoral candidate and teaching assistant in the department of philosophy at UW. He is the recipient of the American Philosophical Association\'s 2018 Prize Essay on Latin American Thought for “the best unpublished, English-language, philosophical essay in Latin American thought.” His research focuses on Latinx identity and racial oppression. Currently, he is writing a dissertation on the ethics and politics of inter- and intra-personal relationships in the wake of colonial violence.'
        ),
        makeSpeaker(
          'John Vallier',
          'Ethnomusicology 2.0',
          'John Vallier is head of media and ethnomusicology curator at the University of Washington Libraries. In these roles he oversees the Libraries\' Ethnomusicology Archives and audio/video makerspace: Media Arcade. As an affiliate professor of ethnomusicology John teaches on topics such as music of Seattle, remix studies, and sound of cinema for UW Honors, Cinema and Media Studies, and Ethnomusicology. Before coming to UW, John was ethnomusicology archivist at UCLA, a composer for Activision, and drummer for bands such as Swell and Santa Cruise Control.'
        ),
        makeSpeaker(
          'Debi Talukdar',
          'Philosophy Is for Everyone',
          'Debi Talukdar is the Philosopher-in-Residence at Thurgood Marshall Elementary School. She has been facilitating philosophical discussions with K-12 students and educators in Seattle for several years and serves on the boards of the UW Center for Philosophy for Children, and the Philosophy Learning and Teaching Organization (PLATO). Debi is also the Program Coordinator and an ensemble member of Theater for Change UW at the Center for Teaching and Learning. They do anti-oppressive professional development using interactive theater. Debi is graduating with a Ph.D. in Education this summer. In her free time, she enjoys board games, yoga, and sleeping in.'
        ),
        makeSpeaker(
          'Brad Finegood',
          'Unlocking the Cure to Substance Use Disorder',
          'Demystifying Stigma is based on a lifetime of experience that Brad Finegood has been through. He works as a Strategic Advisor in Public Health - Seattle & King County. Brad recently served as a co-chair of the King County Opiate Task Force and was the Alcohol and Drug Coordinator for King County. His Bachelor\'s Degree is from Michigan State and his Master\'s Degree in Counseling, Specialty in Alcohol and Drug Abuse from Western Michigan. He has worked in the behavioral health field for 20 years. He is the sibling and survivor of a younger brother that died from an overdose.'
        ),
        makeSpeaker(
          'Steven Quay',
          'How to Be Smart When You\'re Dense: Preventing Breast Cancer by 2030',
          'Steven Quay is the founder of Seattle-based Atossa Genetics, dedicated to breast cancer prevention. He received his Ph.D. in Biological Chemistry, M.D. from the University of Michigan, postdoc at MIT and Harvard, and was a faculty member at Stanford Medical School. His contributions to medicine, cancer, and biochemistry have been cited over 9,300 times. Since entering biotech in 1983, he has founded six startups, invented seven FDA-approved pharmaceuticals, and holds 87 US patents. Over 80 million people have benefited from the medicines he invented. His current passion is the prevention of the two million yearly breast cancer cases worldwide.'
        ),
        makeSpeaker(
          'Tamuka Chidyausiku',
          'Leveraging Privilege to Amplify the Voices of the Underprivileged',
          'Tamuka Martin Chidyausiku is the 1st black PhD candidate in his Biological Physics Structure and Design program, Biochemistry lab and at the Institute for Protein Design where he is studying computational biology with applications in agriculture. Tamuka, (aka Muk) is graduating Spring 2019 from the UW Biochemistry department where he is launching his social media class on “Hip Hop Biochemistry @TamukaInvestments”. As an openly gay student from Zimbabwe, Tamuka believes that representation matters and visibility is the key to STEM-ulating the future generation. He is also the founder Chibage Chip; an Agri-tech startup aimed at helping farmers combat climate change.'
        ),
        makeSpeaker(
          'Susanne Rafelski',
          'In Search of Patterns inside the Cell through Space and Time',
          'Susanne Rafelski is a quantitative cell biologist and a Director at the Allen Institute for Cell Science in Seattle. Susanne has been imaging the structures inside living cells since she was 17. Her life-long scientific goal is to decipher the patterns and rules that transform the overwhelming complexity found inside cells into functioning units of life. The quest to unlock the secrets of the cell requires there to be no boundaries between scientific fields. Susanne is always looking for ways to incorporate interdisciplinary approaches into her research including data science analyses, image processing, mathematical modeling, computational simulations, and modern machine learning.'
        ),
        makeSpeaker(
          'Nicole McNichols',
          'Students on Top: A Vision for 21st Century Sex Education',
          'Nicole McNichols is a Lecturer in the Psychology Department at the University of Washington, where she also received her PhD in Social Psychology. Over the past five years, Nicole has built her class, The Diversity of Human Sexuality, into the University’s largest and most popular undergraduate course with over two thousand enrolled students each year. She is the co-author of A Critical Introduction to Human Sexuality, an online, interactive textbook that stresses a sex-positive approach to sex education. Her research focuses on the role of interactive platforms in understanding undergraduates’ attitudes surrounding Human Sexuality topics. She is married and has three children.'
        ),
        makeSpeaker(
          'James Keblas',
          'How Kevin Bacon Saved Seattle: The Seattle Music Story You Never Heard and Why It Matters Today',
          'James Keblas is a celebrated economic development leader in the areas of arts and entertainment. He got his start in the music business in 1991 working in hip hop at NastyMix Records, pushing artists like Sir Mix-a-Lot. He was Director of Seattle’s Office of Film, Music and Special Events for 9 years, where he earned the title “Punk Rocker in a Suit.” His favorite professional achievement will always be Co-Founding The Vera Project, a music and arts center in Seattle run by and for youth.'
        )
      ]
    };
  },
  methods: {
    makeSpeaker(name, title, description) {
      const fileName = name.toLowerCase().replace(' ', '_').replace(' ', '_');
      const askUrl = name.toLowerCase().replace(' ', '-').replace(' ', '-');
      return {
        name,
        title,
        description,
        imageUrl: `/static/speaker-headshots/${fileName}.jpg`,
        askUrl: `/qa/${askUrl}`
      }
    },
    selectSpeaker(index) {
      return this.selectedSpeakerIndex = index;
    }
  },
  computed: {
    isSpeakerSelected() {
      return this.selectedSpeakerIndex > -1;
    },
    selectedSpeaker() {
      if(!this.isSpeakerSelected) {
        return {};
      }

      return this.speakers[this.selectedSpeakerIndex];
    },
    speakerSpacer() {
      const num = this.speakers.length % 3;
      const res = [];
      for (let i = 0; i < num; i++) {
        res.push(i);
      }
      return res;
    }
  }
};

</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
$speakers-break: 750px;

.standard-hero {
  background-image: url('/static/speakers-page-header.jpg');
  background-position: bottom;
}

@media screen and (max-width: 600px) {
  .modal {
    flex-direction: column;
    overflow-y: scroll;
    align-items: center;


// TODO get rid of important
    .image {
      flex: 0 0 300px !important;
      height: 300px !important;
      width: 300px !important;
      margin-top: 20px;
    }

    .content-container {
      display: block !important;
    }

    .overflow-content {
      overflow-y: inherit !important;
    }

    .content.overflow-content {
      max-height: inherit !important;
    }

    a,
    button {
      display: block;
      width: calc(100% - 32px);
      margin-bottom: 16px !important;
      margin-left: auto;
      margin-right: auto;
    }
  }
}


.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  .modal {
    width: 800px;
    max-width: 90%;
    height: 600px;
    max-height: 80vh;
    background-color: #ffffff;
    display: flex;
    cursor: auto;

    .image,
    .content-container {
      height: 100%;
      flex: 1;
    }

    .content-container {
      display: flex;
      flex-direction: column;
    }

    .content.overflow-content {
      box-sizing: border-box;
      max-height: 100%;
      overflow-y: scroll;
    }

    button {
      margin-bottom: 0;
    }
  }
}

.speakers-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 64px;

  .speaker-filler {
    flex: 1 1 calc(30% - 28px);
  }

  .speaker {
    flex: 1 1 calc(30% - 28px);
    margin-left: 24px;
    margin-right: 24px;
    border: 2px solid $color-tertiary;
    margin-bottom: 48px;
    cursor: pointer;
    flex-grow: 1;
    text-decoration: none;
    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      flex: 1;
      flex-direction: column;

      span {
        display: block;
      }

      .title {
        flex: 1;
      }
    }

    @media screen and (max-width: $speakers-break) {
      flex: 1 0 100%;
      margin-left: 0;
      margin-right: 0;

      .ask-button {
        background-color: $color-tertiary;
        color: white !important;
      }
    }
  }
}

.speaker .content {
  margin-top: -8px;
}

.speaker,
.modal {
  img {
    width: 100%;
    height: auto;
  }

  .image {
    width: 100%;
    height: 300px;
    background-position: top;
    background-size: cover;
  }

  .content {
    padding: 32px 16px;
    color: $color-tertiary;

    .name {
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
    }
    
    .title {
      font-size: 20px;
    }

    .name,
    .title {
      display: block;
    }

    .ask-button {
      display: block;
      color: $color-tertiary;
      width: 100%;
      padding: 16px;
      text-decoration: none;
      margin-top: 16px;
      margin-left: -16px;
      margin-right: -16px;
      margin-bottom: -32px;
      transition: 250ms all;
    }
  }

  &:hover .ask-button {
    background-color: $color-tertiary;
    color: white;
  }
}
</style>
