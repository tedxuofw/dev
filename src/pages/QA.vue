<template>
  <ConferencePage :selectedIndex="1">
    <div class="row" @click="loadQuestions()">
      <div class="col-12" style="margin-top: 0">
        <div class="profile">
          <div class="content">
            <h1>{{ speakerFirstName }} <span class="last-name">{{ speakerLastName }}</span></h1>
            <p>{{ speaker.title }}</p>
            <router-link to="/qa" class="speakers-link"><i class="fas fa-arrow-left"></i> Full Speakers List</router-link>
          </div>
          <img :src="`static/speaker-headshots/${speaker.fileName}.jpg`"
            :alt="`Photo of ${speaker.name}`" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <h2>Questions</h2>
        <div class="questions-container">
          <button v-if="writingState == 0" @click="writingState++">Ask a Question</button>
          <template v-if="writingState == 1">
            <input type="text" placeholder="Your name" v-model="questionAuthor" />
            <textarea placeholder="Write your question" v-model="questionText" />
          <button id="question-submit" @click="submitQuestion" :disabled="!questionAuthor || !questionText">Submit</button>
          </template>
          <div class="notice" v-if="writingState == 2">
            <p>Submitting...</p>
          </div>
          <div class="notice" v-if="writingState == 3">
            <b>Thank you!</b>
            <p>Your question will appear once it has been moderated.</p>
          </div>
          <div class="notice" v-if="questionsData.length == 0">
            <p>
              No questions to show yet.
            </p>
          </div>
          <div class="question" v-for="(question, i) in questionsData" :key="i">
            <div class="set">
              <img :src="getProfilePicture(i)" :alt="`Photo of ${question.asker}`" />
              <div class="content">
                <p>{{ question.question }}</p>
                <span class="info">Asked by {{ question.asker }}</span>
              </div>
            </div>
            <template v-if="question.response">
              <hr />
              <div class="set">
                <img :src="`static/speaker-headshots/${speaker.fileName}.jpg`" :alt="`Photo of ${question.asker}`" />
                <div class="content">
                  <p>{{ question.response }}</p>
                  <span class="info">Answered by {{ speaker.name }}</span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="col-4">
        <h2>About</h2>
        <div class="about-content">
          <p v-html="speaker.description"></p>
        </div>
      </div>
    </div>
  </ConferencePage>
</template>

<script>
import ConferencePage from "@/components/ConferencePage";
import firebase from '@/firebase';

export default {
  name: "QA",
  data() {
    return {
      writingState: 0,
      data: false,
      questionText: '',
      questionAuthor: '',
      speakers: [
        this.makeSpeaker(
          'Venus Rekow',
          'The Power of Inclusion',
          '<a href="https://www.linkedin.com/in/venusrekow/" target="_blank">Venus Rekow</a> is the founder of <a href="https://neuralshifts.com" target="_blank">Neural Shifts</a>, a consulting firm specialized in helping leaders foster diverse, equitable and inclusive workforces. She designs & implements effective global diversity and inclusion programs, conducts organizational assessments & employs analytics to measure business results. Venus is well known for her ability to translate research insights from Neuroscience & Behavioral economics into practical management strategies that enable behavior change. Her clients include Fortune 500 companies & non-profit organizations. Venus earned an M.S. in Organizational Development from Seattle University, completed coursework for an M.S. in Neuroscience from the University of Oberta, Spain. In addition, she is a certified executive coach.'
        ),
        this.makeSpeaker(
          'Nathan Vass',
          'Why We Need Strangers',
          'Nathan Vass has had work displayed in over thirty photography shows and is the director of nine films, six of which have shown at festivals and one of which premiered at Henry Art Gallery. Born in South Central LA, he holds a Bachelor of Fine Arts from the University of Washington. His blog, The View From Nathan\'s Bus, details his adventures as a public bus driver and has been featured in more than fifteen news outlets including NPR and The Seattle Times. His new book, The Lines That Make Us, is a Seattle bestseller.'
        ),
        this.makeSpeaker(
          'Nat Puff',
          'The Dos and Dont\'s of Breakup Songs',
          'Also known for her internet presence, Left At London (sometimes stylized and shortened as /@/), is the stage name of singer/songwriter Nat Puff (she/her), a trans woman from Seattle, Washington who is not afraid to let herself be known intimately through her music, while still remaining accessible.'
        ),
        this.makeSpeaker(
          'Julio Covarrubias',
          'Setting the Record Straight: The Latin American Mind in Global Context',
          'Julio Covarrubias is a doctoral candidate and teaching assistant in the department of philosophy at UW. He is the recipient of the American Philosophical Association\'s 2018 Prize Essay on Latin American Thought for “the best unpublished, English-language, philosophical essay in Latin American thought.” His research focuses on Latinx identity and racial oppression. Currently, he is writing a dissertation on the ethics and politics of inter- and intra-personal relationships in the wake of colonial violence.'
        ),
        this.makeSpeaker(
          'John Vallier',
          'Ethnomusicology 2.0',
          'John Vallier is head of media and ethnomusicology curator at the University of Washington Libraries. In these roles he oversees the Libraries\' Ethnomusicology Archives and audio/video makerspace: Media Arcade. As an affiliate professor of ethnomusicology John teaches on topics such as music of Seattle, remix studies, and sound of cinema for UW Honors, Cinema and Media Studies, and Ethnomusicology. Before coming to UW, John was ethnomusicology archivist at UCLA, a composer for Activision, and drummer for bands such as Swell and Santa Cruise Control.'
        ),
        this.makeSpeaker(
          'Debi Talukdar',
          'Philosophy Is for Everyone',
          'Debi Talukdar is the Philosopher-in-Residence at Thurgood Marshall Elementary School. She has been facilitating philosophical discussions with K-12 students and educators in Seattle for several years and serves on the boards of the UW Center for Philosophy for Children, and the Philosophy Learning and Teaching Organization (PLATO). Debi is also the Program Coordinator and an ensemble member of Theater for Change UW at the Center for Teaching and Learning. They do anti-oppressive professional development using interactive theater. Debi is graduating with a Ph.D. in Education this summer. In her free time, she enjoys board games, yoga, and sleeping in.'
        ),
        this.makeSpeaker(
          'Brad Finegood',
          'Unlocking the Cure to Substance Use Disorder',
          'Demystifying Stigma is based on a lifetime of experience that Brad Finegood has been through. He works as a Strategic Advisor in Public Health - Seattle & King County. Brad recently served as a co-chair of the King County Opiate Task Force and was the Alcohol and Drug Coordinator for King County. His Bachelor\'s Degree is from Michigan State and his Master\'s Degree in Counseling, Specialty in Alcohol and Drug Abuse from Western Michigan. He has worked in the behavioral health field for 20 years. He is the sibling and survivor of a younger brother that died from an overdose.'
        ),
        this.makeSpeaker(
          'Steven Quay',
          'How to Be Smart When You\'re Dense: Preventing Breast Cancer by 2030',
          'Steven Quay is the founder of Seattle-based Atossa Genetics, dedicated to breast cancer prevention. He received his Ph.D. in Biological Chemistry, M.D. from the University of Michigan, postdoc at MIT and Harvard, and was a faculty member at Stanford Medical School. His contributions to medicine, cancer, and biochemistry have been cited over 9,300 times. Since entering biotech in 1983, he has founded six startups, invented seven FDA-approved pharmaceuticals, and holds 87 US patents. Over 80 million people have benefited from the medicines he invented. His current passion is the prevention of the two million yearly breast cancer cases worldwide.'
        ),
        this.makeSpeaker(
          'Tamuka Chidyausiku',
          'Leveraging Privilege to Amplify the Voices of the Underprivileged',
          'Tamuka Martin Chidyausiku is the 1st black PhD candidate in his Biological Physics Structure and Design program, Biochemistry lab and at the Institute for Protein Design where he is studying computational biology with applications in agriculture. Tamuka, (aka Muk) is graduating Spring 2019 from the UW Biochemistry department where he is launching his social media class on “Hip Hop Biochemistry @TamukaInvestments”. As an openly gay student from Zimbabwe, Tamuka believes that representation matters and visibility is the key to STEM-ulating the future generation. He is also the founder Chibage Chip; an Agri-tech startup aimed at helping farmers combat climate change.'
        ),
        this.makeSpeaker(
          'Susanne Rafelski',
          'In Search of Patterns inside the Cell through Space and Time',
          'Susanne Rafelski is a quantitative cell biologist and a Director at the Allen Institute for Cell Science in Seattle. Susanne has been imaging the structures inside living cells since she was 17. Her life-long scientific goal is to decipher the patterns and rules that transform the overwhelming complexity found inside cells into functioning units of life. The quest to unlock the secrets of the cell requires there to be no boundaries between scientific fields. Susanne is always looking for ways to incorporate interdisciplinary approaches into her research including data science analyses, image processing, mathematical modeling, computational simulations, and modern machine learning.'
        ),
        this.makeSpeaker(
          'Nicole McNichols',
          'Student on Top: A Vision for 21st Century Sex Education',
          'Nicole McNichols is a Lecturer in the Psychology Department at the University of Washington, where she also received her PhD in Social Psychology. Over the past five years, Nicole has built her class, The Diversity of Human Sexuality, into the University’s largest and most popular undergraduate course with over two thousand enrolled students each year. She is the co-author of A Critical Introduction to Human Sexuality, an online, interactive textbook that stresses a sex-positive approach to sex education. Her research focuses on the role of interactive platforms in understanding undergraduates’ attitudes surrounding Human Sexuality topics. She is married and has three children.'
        ),
        this.makeSpeaker(
          'James Keblas',
          'How Kevin Bacon Saved Seattle: The Seattle Music Story You Never Heard and Why It Matters Today',
          'James Keblas is a celebrated economic development leader in the areas of arts and entertainment. He got his start in the music business in 1991 working in hip hop at NastyMix Records, pushing artists like Sir Mix-a-Lot. He was Director of Seattle’s Office of Film, Music and Special Events for 9 years, where he earned the title “Punk Rocker in a Suit.” His favorite professional achievement will always be Co-Founding The Vera Project, a music and arts center in Seattle run by and for youth.'
        )
      ],
      interviewData: [
        {
          question: 'What was your first baking experience like?',
          asker: 'Lina',
          response: 'I have never touch a baking pan or mix any flour ever since I left secondary school’s Home Economics. Part of my journey to push myself out of my comfort zone was to pick up a baking activity. I chanced upon Bemyguest.com.sg and found that they have quite a few excellent workshops. Therefore, I was very pleased to be invited to a workshop on baking a chiffon cake on 20 July at the Baking Studio.'
        },
        {
          question: 'What was your first baking experience like?',
          asker: 'Lina',
          response: 'I have never touch a baking pan or mix any flour ever since I left secondary school’s Home Economics. Part of my journey to push myself out of my comfort zone was to pick up a baking activity. I chanced upon Bemyguest.com.sg and found that they have quite a few excellent workshops. Therefore, I was very pleased to be invited to a workshop on baking a chiffon cake on 20 July at the Baking Studio.'
        },
        {
          question: 'What was your first baking experience like?',
          asker: 'Lina',
          response: 'I have never touch a baking pan or mix any flour ever since I left secondary school’s Home Economics. Part of my journey to push myself out of my comfort zone was to pick up a baking activity. I chanced upon Bemyguest.com.sg and found that they have quite a few excellent workshops. Therefore, I was very pleased to be invited to a workshop on baking a chiffon cake on 20 July at the Baking Studio.'
        },
        {
          question: 'What was your first baking experience like?',
          asker: 'Lina',
          response: 'I have never touch a baking pan or mix any flour ever since I left secondary school’s Home Economics. Part of my journey to push myself out of my comfort zone was to pick up a baking activity. I chanced upon Bemyguest.com.sg and found that they have quite a few excellent workshops. Therefore, I was very pleased to be invited to a workshop on baking a chiffon cake on 20 July at the Baking Studio.'
        },
        {
          question: 'What was your first baking experience like?',
          asker: 'Lina'
        }
      ],
      hasTickets: false,
      tickets: [],
      loading: false
    };
  },
  components: { ConferencePage },
  methods: {
    makeSpeaker(name, title, description) {
      const urlName = name.toLowerCase().replace(' ', '-').replace(' ', '-');
      const fileName = name.toLowerCase().replace(' ', '_').replace(' ', '_');
      return {
        name,
        urlName,    // for routing
        fileName,   // for image
        title,
        description
      }
    },
    getProfilePicture(i) {
      const num = i % 5 + 1;
      return require(`../assets/test_${num}.svg`);
    },
    submitQuestion() {
      const requests = firebase.database().ref('ask2019/');
      const requestKey = requests.push().key;
      this.writingState++;
      firebase.database().ref('ask2019/' + requestKey).set({
          speaker: this.speaker.name,
          asker: this.questionAuthor,
          question: this.questionText,
          response: '',
          visible: false
      }, this.doneSubmitting);
    },
    doneSubmitting() {
      this.writingState++;
    },
    loadQuestions() {
      const ref = firebase.database().ref('/ask2019');
      ref.on('value', snapshot => {
        this.data = snapshot.val() || {};
      });
    }
  },
  mounted() {
    this.loadQuestions();
  },
  computed: {
    speaker() {
      return this.speakers.filter(speaker => speaker.urlName ==  this.$route.params.speaker)[0];
    },
    speakerFirstName() {
      return this.speaker.name.substring(0, this.speaker.name.lastIndexOf(" ") + 1);
    },
    speakerLastName() {
      return this.speaker.name.substring(this.speaker.name.lastIndexOf(" ") + 1, this.speaker.name.length);
    },
    questionsData() {
      if(this.data !== false) {
        return Object.keys(this.data)
          .map(key => this.data[key])
          .filter(entry => entry.speaker == this.speaker.name && entry.visible);
      }
      return [];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

$profile-content-padding: 45px;
$profile-section-size: 350px;
$page-break: 1140px;

main {
  margin-left: 200px;
  padding: 1em 3em;
  min-height: 100%;
}

h2 {
  border-bottom: 4px solid red;
  font-size: 1.25em;
  margin-top: 0;
  margin-bottom: 1em;
  font-weight: 400;
  padding-bottom: 0.5em;
}

@media (max-width: 600px) {
  main, div.row.card-row, div.col-12 {
    margin-left: 0;
  }
}

@media screen and (max-width: $page-break) {
  .profile, .row {
    flex-direction: column-reverse;
  }

  .row > * {
    width: 100%;
  }

  .profile {
    height: inherit !important;
    background-color: $color-secondary-2;

    img {
      height: 100%;
      width: auto;
      max-width: 100vw;
      align-self: center;
    }
  }
}

.profile {
  height: $profile-section-size;
  display: flex;
  width: 100%;
  margin-bottom: 16px;

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    background-color: $color-tertiary;
    background-image: url('/static/speaker-qa-profile-arrow.png');
    background-size: #{0.45 * $profile-section-size};
    background-position: calc(100% - #{$profile-content-padding / 2}) calc(100% - #{$profile-content-padding / 2});
    background-repeat: no-repeat;
    color: white;
    padding: $profile-content-padding;
    box-sizing: border-box;

    h1 {
      font-weight: 300;
      padding: 0;
      margin: 0;
      text-transform: uppercase;
      line-height: 1.1em;
      letter-spacing: 2px;

      .last-name {
        display: block;
        font-weight: 400;
      }
    }

    p {
      color: $color-primary-2;
      max-width: 80%;
      flex: 1;
    }

    .speakers-link {
      text-decoration: none;
      color: white;

      i {
        font-size: 0.8em;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  img {
    width: auto;
    height: $profile-section-size;
  }
}

.questions-container {
  background-color: $color-secondary-2;
  padding: 16px;

  input[type="text"], textarea {
    width: 100%;
  }

  button {
    margin-left: auto;
  }

  .notice {
    padding: 16px;

    p {
      margin: 0;
    }
  }

  .notice,
  .question {
    background-color: white;
    margin-bottom: 16px;

    hr {
      margin: 0 24px;
    }

    .set {
      display: flex;
      align-items: flex-start;
      padding: 24px;

      img {
        flex: 0 0 52px;
        width: 52px;
        height: 52px;
        margin-right: 24px;
        border-radius: 26px;
      }

      .content {
        flex: 1;

        p {
          margin: 0;
        }

        .info {
          display: block;
          margin-top: 0.5em;
          color: $color-tertiary;
          font-size: 14px;
        }
      }
    }
  }
}

.about-content {
  background-color: $color-secondary-2;
  padding: 16px 24px;
  font-size: 14px;
  
  p {
    margin: 0;
  }
}
</style>