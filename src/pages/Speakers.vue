
<template>
  <ConferencePage :selectedIndex="1">
    <!-- <div class="modal-container" v-if="isSpeakerSelected" @click="selectSpeaker(-1)">
      <div class="modal" @click.stop="() => {}">
        <div class="image" :style="{ backgroundImage: `url('${selectedSpeaker.imageUrl}'` }"></div>
        <div class="content-container">
          <div class="content overflow-content">
            <span class="name">{{ selectedSpeaker.name }} YOOOO WTF WTF</span>
            <span class="title">{{ selectedSpeaker.title }}</span>
            <p v-html="selectedSpeaker.description"></p>
          </div>
          <button @click="selectSpeaker(-1)" class="full-width">Back</button>
        </div>
      </div>
    </div> -->

    
    
    <!-- <div class="standard-hero">
      <h1>Speakers</h1>
      <div class="accent"></div>
    </div> -->
    <div class="container section-sponsors">
      <div class="banner">
        <!-- <h1 class="speakers-title">SPEAKERS</h1>
        <h2 class="speakers-subtitle">Meet the TEDxUofW 2021 speakers!</h2>
        <img src="/static/gardenunderline.png" style="max-height: 80px; margin-top: -40px; padding: 0 0 0 10vw" /> -->
      </div>
      <div class="speakers-container">
        <button @click="showModal(i)" class="speaker" v-for="(speaker, i) in speakers" :key="speaker.name" :to="speaker.askUrl" :style="{visibility: shownSpeakers.includes(i) ? 'visible' : 'hidden', opacity: shownSpeakers.includes(i) ? 1 : 0}">
          <img :src="speaker.imageUrl" />
          <div class="overlay show-overlay-if-mobile">
            <div class="overlay-text">
              <h3 style="text-transform:uppercase; font-weight: 600;">{{ speaker.name }}</h3>
              <h3>{{ speaker.title }}</h3>
            </div>
          </div>
          <!-- <div class="content">
            <span class="name">{{ speaker.name }}</span>
            <span class="title">{{ speaker.title }}</span>
            <router-link class="ask-button" :to="speaker.askUrl">Ask Question</router-link>
          </div> -->
        </button>
        <div class="speaker-filler" v-for="(speaker, i) in speakerSpacer" :key="i"></div>
      </div>
      <!-- <div class="temporary-message"><div class="temp-msg">Speakers Coming Soon...</div></div> -->
    </div>

    <modal
      v-show="isModalVisible"
      @close="closeModal"
      style="z-index: 9999;"
    >
    <div slot="header">
      <div style="display: flex; flex-direction: row; flex-wrap; wrap">
      <img class="hide-if-mobile" style="object-fit: cover; max-width: 50vw; max-height: 35vh;" :src="this.speakers[this.modalSelectedSpeaker].imageUrl" />
      <div style="background-color: #e62b1e; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
      <h3 style="color:white; padding: 40px 25px 25px; font-size: 30px; font-weight: 700; text-transform: uppercase;">
      {{ this.speakers[this.modalSelectedSpeaker].name }}
      </h3>
      <h3 class="smaller-if-mobile" style="color:white; padding: 0px 25px 35px; font-size: 20px; font-weight: 500; text-transform: uppercase;">
      {{ this.speakers[this.modalSelectedSpeaker].title }}
      </h3>
      </div>
      </div>
    </div>
    <div slot="body">
      <p v-html="this.speakers[this.modalSelectedSpeaker].description"></p>
    </div>
    <div slot="footer">
      <p style="font-size: 15px; color:grey">click anywhere to close...</p>
    </div>
    </modal>
  </ConferencePage>
</template>

<script>
import Arrows from "@/components/Arrows";
import ConferencePage from "@/components/ConferencePage";
import Modal from '@/components/Modal.vue';
export default {
  name: "SpeakersPage",
  components: { Arrows, ConferencePage, Modal },
  data() {
    const makeSpeaker = this.makeSpeaker.bind(this);
    return {
      shownSpeakers: [],
      isModalVisible: false,
      modalSelectedSpeaker: 1,
      selectedSpeakerIndex: -1,
      speakers: [
        makeSpeaker(
          'Ashley McGirt',
          'Understanding and Healing from Racial Trauma',
          '<p>Ashley McGirt is the founder and President of the WA Therapy Fund Foundation. She is a psychotherapist, Tedx international speaker, and author who has been featured in Forbes, MSNBC, The young turks, Bravo, & more. Ashley has received a Masters of Social Work from the University of Washington. She also holds a Bachelor of Science in Psychology. Ashley currently works as a full-time hospice therapist and owns and operates her own private practice. In her private practice she focuses primarily on racial trauma, depression, and anxiety. Ashley actively works toward de-stigmatizing mental illness, and reducing high rates of recidivism in American prisons, in an attempt to create a more socially just society for all. Ashley offers presentations, workshops, group facilitation, and consultation specializing in racial trauma, mental health, crisis response, social justice and racial equity. Ashley strives to help others find happiness and healing within themselves through unpacking their baggage, resting, reflecting, and restoring themselves to be who they were intended to be on this earth.</p><p>Instagram: <a href="https://www.instagram.com/therapywithash/" style="color: #e62b1e;">@therapywithash</a><br>Facebook: <a href="https://www.facebook.com/McGirtCounselingServices/" style="color: #e62b1e;">@McGirtCounselingServices</a><br>Website: <a href="https://ashleymcgirt.com/" style="color: #e62b1e;">https://ashleymcgirt.com/</a></p>'
        ),
        makeSpeaker(
          'Casey Dreier',
          'The Space Race in Your Own Backyard',
          '<p>Casey is the Chief Advocate and Senior Space Policy Adviser for The Planetary Society, the world\'s largest independent pro-space organization. He writes, teaches, and speaks about the importance, relevancy, and excitement of space exploration to the organization\'s members, the public, and elected officials. He is a trusted source for journalists and has been featured in many publications, including The New York Times, The Washington Post, The Atlantic, Scientific American, Vox, and The Verge, to name a few. He also has appeared as an expert on BBC News and both seasons of National Geographic\'s MARS series as a \"MARS Big Thinker\". Casey is also co-host of the podcast, Planetary Radio: Space Policy Edition, which has been published monthly since 2016.</p><p>Twitter: <a href="https://twitter.com/CaseyDreier" style="color: #e62b1e;">@CaseyDreier</a></p>'
        ),
        makeSpeaker(
          'Dee Dwyer',
          'Humanity at the Forefront of Photojournalism',
          '<p>Dee Dwyer is a diversified Photographer from Southeast, Washington, D.C who produces awe-inspiring images. She has been anointed by her community as "The Visual Voice for the People”. Her goal is to show all aspects of human life with the primary focus being humanity. Dwyer’s raw and compelling candids unveil the souls of people. The images expose many subject’s truth, adversities, beauty, and culture. As a teenager, she developed her fascination for photography. Dee never left the house without her disposable camera to capture daily life of family and friends. Receiving her BFA in Filmmaking and Digital Production helped to develop her keen eye and technical skills. While taking a required Black & White photography class, she had to shoot and develop her own film. This is how the love for photography blossomed. She’d spend half her days snapping candids and the other half in the dark room. Having a love for travel and community she continues to use her camera to, "Show the World What it\'s Made of." Her work has been shown in exhibitions such as PhotoSCHWEIZ, Photoville, Catchlight amongst many others and featured in publications such as Vogue, The Wall Street Journal, The New York Times, BET, The Guardian, Bloomberg Businessweek and more. Dee Dwyer currently resides in Washington, DC with her two children.</p><p>Instagram: <a href="https://www.instagram.com/deedwyerjonts/" style="color: #e62b1e;">@deedwyerjonts</a><br>Twitter: <a href="https://twitter.com/deedwyerjonts" style="color: #e62b1e;">@deedwyerjonts</a></p>'
        ),
        makeSpeaker(
          'Samer Fouad',
          'Comfort Kills Creativity',
          '<p>Samer Fouad is an artist and graphic designer. Although his degree is in graphic design, Fouad considers himself a mixed media artist, combining sculpture, video, graphic design, photography, digital college, and various printmaking methods. His work has been showcased around the world, including New York City, Tokyo, Doha, France, Spain, Italy and Budapest. Fouad has been published in The AIGA, Adweek, Beautiful Bizarre Magazine and Design Sponge. Fouad was an artist-in-residence for the Mana BSMT program, located at Mana Contemporary, Jersey City, Palazzo Monti in Brescia, Italy, and Nouvelle Vague Gallery in Marbella, Spain. He is a co-founder of the Newark Print Shop in New Jersey.</p><p>Simultaneous to his career as an artist, Fouad taught advanced printmaking and graphic design for the undergraduate BFA Program and book arts for the MFA Program, at Rutgers University in New Jersey. He was also a teaching assistant in visual communication design for the Undergraduate School of Art and Design and was a lecturer for the masters program of the School of Human Centered Design and Engineering, at The University of Washington. He is currently an Assistant Professor of Design at Pacific Lutheran University.</p><p>Samer Fouad holds an Arts, Culture, Media degree with a Bachelors in Fine Art within a concentration of graphic design and a minor in art history from Rutgers University. He also holds a Master of Design degree from the University of Washington.</p><p>Website: <a href="https://www.samerfouad.com/" style="color: #e62b1e;">https://www.samerfouad.com/</a></p>'        ),
        makeSpeaker(
          'Kathleen Bogart',
          'The Psychology of Ableism',
          '<p>Kathleen Bogart, Ph.D., is an Associate Professor of Psychology at Oregon State University. As a person with a disability, she is passionate about researching, educating, and writing about ableism, or disability prejudice. Her research focuses on the psychosocial implications of living with disability, rare disorders, or facial differences such as Moebius syndrome. An advocate for people with disabilities, she has served on the American Psychological Association Committee on Disability Issues in Psychology, the Rehabilitation Psychology editorial board, and the Moebius Syndrome Foundation Scientific Advisory Board.</p><p>She is a 2021 Public Voices Fellow with the OpEd Project. Her work has been featured in the New York Times, Time, The Conversation, the Financial Times, and Huffington Post, and she blogs for Psychology Today at https://www.psychologytoday.com/us/blog/disability-is-diversity. In 2019, she co-edited the Journal of Social Issues special issue on Ableism. Dr. Bogart presents internationally to academic, general, and stakeholder audiences about disability awareness, disability as diversity, and facial paralysis. She consults with organizations on disability advocacy.</p><p>Twitter: <a href="https://twitter.com/kathleen_bogart" style="color: #e62b1e;">@kathleen_bogart</a><br>Blog: <a href="https://www.psychologytoday.com/us/blog/disability-is-diversity" style="color: #e62b1e;">Disability is Diversity</a></p>'
        ),
        makeSpeaker(
          'Christina Scheppelmann',
          'The Power of Opera',
          '<p>As Director of Artistic Operations at Washington National Opera, Scheppelmann oversaw the artistic planning for 11 years. She was instrumental in fundraising efforts, leading to grants for individual productions, ongoing projects and renovations. Her passion for the artform and interest to see it flourish into the future led her to conceive of and secure funding for WNO’s American Opera Initiative, offering young composers and librettists a developmental forum in which to bridge the gap between conservatory training and full-length commissions.</p><p>A long-time champion of young artists, she has led masterclasses, lectured at artist training programs, and judged vocal competitions around the world.</p><p>Scheppelmann began her career in the arts early-on, performing in the children’s choir of the Hamburg State Opera. After completing a degree in banking, she left her home country of Germany in 1988 to work in an Artist Management agency in Milan. Fluent in five languages, she quickly became known for her communication skills and was soon offered a job in arts administration at the Gran Teatre del Liceu.</p><p>In 1994, she was recruited by Lotfi Mansouri to assist him at San Francisco Opera where, as one of the youngest artistic administrators at the time, she continued her work in planning seasons and hiring singers, conductors, directors and designers. Ms. Scheppelmann prides herself on having built solid collaborative relationships with union and civic leaders, members of the diplomatic corps, and national and international press.</p><p>Scheppelmann was previously awarded the rank of Commendatore in the Order of the Star of Solidarity by the Italian government for her career-long work promoting opera and Italian culture. She also served as the Vice President for the board of Opera Europa, the professional organization of opera houses and festivals.</p><p>Instagram: <a href="https://www.instagram.com/scheppelmannch/" style="color: #e62b1e;">@scheppelmannch</a><br>Twitter: <a href="https://twitter.com/ScheppelmannCh" style="color: #e62b1e;">@ScheppelmannCh</a></p>'
        ),
        makeSpeaker(
          'Aidan Key',
          'The Heart of the Matter',
          '<p>Aidan Key is the founder and president of <a href="https://transfamilies.org/" style="color: #e62b1e;">Trans Families</a>, an organization that provides online support to families of gender diverse children across the nation. Key, the principal trainer at <a href="http://genderdiversity.org/" style="color: #e62b1e;">Gender Diversity</a>, has served as a consultant to hundreds of K-12 schools and other youth-based agencies across the US and has provided districts with training, strategic planning, policy development, and staff, parent, and student education. Key’s workplace trainings have included companies like Amazon, Lighthouse, Milliman, Grange, Cigna, Mithun Architects, Price Waterhouse Cooper, SAP Concur, and more.</p><p>Key is currently authoring a book, Trans Children in Today’s Schools (Oxford University Press, expected publication date, early 2022). He is the co-author of Trans Bodies, Trans Selves (Oxford University Press, 1st and 2nd editions) and Gender Cognition in Transgender Children (Psychological Science). Past speaking/keynote engagements include the Children’s Justice Conference, the National Women’s Judges Conference, the Adolescent Medicine Conference, and the University of Alaska’s 1st Power & Privilege conference.</p><p>The Greater Seattle Business Association honored Key as the Humanitarian of the Year (2017) and The Pride Foundation, Ingersoll Gender Center, Chicago Black Pride, Seattle Out and Proud, have praised Key’s work as well. He has often been featured in the national media, including the Oprah Winfrey Show, NPR’s Diane Rehm Show, Al Jazeera America, Larry King Live, and Fresh Air with Terry Gross. More recently, Aidan was selected as one of Seattle magazine\'s 2019 Most Influential People of the Year.</p><p>Website: <a href="http://www.genderdiversity.org/" style="color: #e62b1e;">http://www.genderdiversity.org/</a><br>Facebook: <a href="https://www.facebook.com/GenderDiversityInc" style="color: #e62b1e;">@GenderDiversityInc</a></p>'
        ),
        makeSpeaker(
          'Whitnee Hawthorne',
          'What Corporate America Needs To Know About Working Moms',
          '<p>Whitnee Hawthorne is a dynamic professional speaker, informative podcaster, and inspiring Fortune 500 company executive. She founded The Savvy Working Mom as a platform dedicated to helping working moms thrive in every arena. Her easy to follow digital courses have helped countless working mothers find harmony across all areas of their life. At the root of everything she does is the belief that working moms are the backbone of our society, and she wants to support as many women as possible in creating a vibrant, joyful life.</p><p>Instagram: <a href="https://www.instagram.com/thesavvyworkingmom/" style="color: #e62b1e;">@thesavvyworkingmom</a><br>Facebook: <a href="https://www.facebook.com/thesavvyworkingmom" style="color: #e62b1e;">@thesavvyworkingmom</a><br>Twitter: <a href="https://twitter.com/SavvyWorking" style="color: #e62b1e;">@SavvyWorking</a></p>'
        ),
        makeSpeaker(
          'Dagan Kay',
          'Surplus Food: Why I’m an Optimist about Climate Change',
          '<p>Dagan Kay is the cofounder and CEO of <a href="https://producemate.com/" style="color: #e62b1e;">Produce Mate</a>, a mission-driven startup company dedicated to reducing food waste and it’s massive impact on our planet. He started working on Produce Mate while still a full-time Philosophy student at the University of Portland. After graduating in 2019, Dagan remained in the foodie-capital of Portland, Oregon, where his work now largely revolves around raising food preservation awareness, designing innovative products that help food last longer, and building a team of like-minded people at Produce Mate. In a world threatened by the existential threat of climate change, Dagan remains eternally optimistic, throwing himself in at the deep end to work alongside the people working on creative solutions to our planet\'s biggest problem.</p><p>Instagram: <a href="https://www.instagram.com/dagankay/" style="color: #e62b1e;">@dagankay</a> / <a href="https://www.instagram.com/producemate/" style="color: #e62b1e;">@producemate</a><br>Facebook: <a href="https://www.facebook.com/ProduceMate" style="color: #e62b1e;">@ProduceMate</a></p>'
        ),
        makeSpeaker(
          'Lexi Walls',
          'The Future of Pandemic Preparedness',
          '<p>Dr. Lexi Walls grew up in Massachusetts and moved to Seattle to start graduate school and follow both her scientific and hiking dreams. She started studying coronaviruses in 2015: learning what they looked like, how they functioned, and what kinds of therapeutics could be useful. She had no idea that her years of work would help prepare her and the scientific and medical communities for the COVID-19 pandemic. She is currently a scientist at the University of Washington working on next generation vaccines and therapeutics against this current pandemic as well as against potential future ones. She works hard to make sure that the work she and others are doing can be communicated to the broad public, and has spoken at high schools, community colleges, universities, on podcasts, and at Seattle town hall to share the work with the community. She spends her free time exploring the beautiful mountains of the Pacific Northwest.</p><p>Twitter: <a href="https://twitter.com/coronalexington" style="color: #e62b1e;">@coronalexington</a></p>'
        )
      ]
    };
  },
  methods: {
    addSpeaker() {
      let currSize = this.shownSpeakers.length;
      while (currSize == this.shownSpeakers.length) {
        let randSpeaker = parseInt(Math.floor(Math.random() * Math.floor(this.speakers.length)));

        if (!this.shownSpeakers.includes(randSpeaker)) {
          this.shownSpeakers.push(randSpeaker);
        }
      }

      if (this.shownSpeakers.length != this.speakers.length) {
        setTimeout(this.addSpeaker, 500);
      }
    },
    showModal(speakerNum) {
      this.isModalVisible = true;
      this.modalSelectedSpeaker = speakerNum;
    },
    closeModal() {
      this.isModalVisible = false;
    },
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
  },
  created: function() {
    setTimeout(this.addSpeaker(), 500);
    console.log("Created");
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

// I added in this as a style-reset that never got implemented
body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

$speakers-break: 750px;

$speakers-break-1: 600px;
$speakers-break-2: 900px;

.section-sponsors {
  height: 150vh;
  background-image: url('/static/speakers_2021_background_lower_res.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;

  @media screen and (orientation: portrait) {
    height: auto;
    padding-bottom: 5vh;
    background-image: none;
    background-color: #f5c26a
  }

  .temporary-message {
    width: 100%;
    height: 150vh;
    position: relative;
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: auto;
    

    .temp-msg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: relative;
      text-align: center;
      text-transform: uppercase;
      font-size: 5vw;
      font-weight: 200;
      color: black;
      font-weight: bold;
    }
  }
}

button {
  padding: 0;
}

.banner {
  margin-top: 5vh;
  background-image: url('/static/speakers_2021_premade_banner.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  display: grid;
  grid-auto-columns: auto;
  width: 80vw;
  height: 16vh;

  @media screen and (orientation: portrait) {
    margin-top: 2vh;
    height: 10vh;
  }

  @media screen and (min-width: 500px) and (max-width: 1000px) {
    margin-top: 2vh;
    height: 16vh;
  }
}

// .speakers-title {
//   padding-top: 3.5vh;
//   padding-left: 2.5vw;
//   font-size: 3vw;
//   font-weight: 700;
//   line-height: 3vw;

//   @media screen and (orientation: portrait) {
//     font-size: 2.5vw;
//   }

//   @media screen and (min-width: 500px) {
//     padding-top: 2.5vh;
//   }
// }

// .speakers-subtitle {
//   padding-left: 2.5vw;
//   font-size: 2vw;
//   line-height: 2vw;

//   @media screen and (orientation: portrait) {
//     font-size: 1vw;
//   }
// }

// .standard-hero {
//   background-image: url('/static/speakers-page-header.jpg');
//   background-position: bottom;
// }

// @media screen and (max-width: 600px) {
//   .modal {
//     flex-direction: column;
//     overflow-y: scroll;
//     align-items: center;


// // TODO get rid of important
//     .image {
//       flex: 0 0 300px !important;
//       height: 300px !important;
//       width: 300px !important;
//       margin-top: 20px;
//     }

//     .content-container {
//       display: block !important;
//     }

//     .overflow-content {
//       overflow-y: inherit !important;
//     }

//     .content.overflow-content {
//       max-height: inherit !important;
//     }

//     a,
//     button {
//       display: block;
//       width: calc(100% - 32px);
//       margin-bottom: 16px !important;
//       margin-left: auto;
//       margin-right: auto;
//     }
//   }
// }


// .modal-container {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.4);
//   cursor: pointer;

//   .modal {
//     width: 800px;
//     max-width: 90%;
//     height: 600px;
//     max-height: 80vh;
//     background-color: #ffffff;
//     display: flex;
//     cursor: auto;

//     .image,
//     .content-container {
//       height: 100%;
//       flex: 1;
//     }

//     .content-container {
//       display: flex;
//       flex-direction: column;
//     }

//     .content.overflow-content {
//       box-sizing: border-box;
//       max-height: 100%;
//       overflow-y: scroll;
//     }

//     button {
//       margin-bottom: 0;
//     }
//   }
// }

.speakers-container {
  position: relative;
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 4vh;

  //.speaker-filler {
  //  flex: 1 1 calc(30% - 28px);
  //}

  .fade-enter-active, .fade-leave-active {
    transition: all 1.5s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-leave, .fade-enter-to {
    opacity: 1;
  }

  // most mobile views which will have height > width
  @media screen and (orientation: portrait) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto auto auto;
    margin-top: 1vh;
  }

  .speaker {
    position: relative;
    height: 13vw;
    width: 13vw;
    margin-left: 2vw;
    margin-right: 2vw;
    border: none;
    margin-bottom: 2vw;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 1s ease-in-out;
    z-index: 1;

    @media screen and (orientation: portrait) {
      width: 30vw;
      height: 30vw;
      margin-top: 2vh;
    }

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
  }
}

@media screen and (max-width: $speakers-break-1) {
  .hide-if-mobile {
    display: none !important;
  }

  .smaller-if-mobile {
    font-size: 17px !important;
  }
}

.speaker .content {
  margin-top: -8px;
}

.speaker {
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .image {
    width: 100%;
    height: auto;
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

  .overlay {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .1s ease;
    background: rgb(0,0,0);
    background: rgba(0,0,0,0);
    

    .overlay-text {
      position: relative;
      font-size: 1vw;
      height: 100%;
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: white;
      padding: 15px;
      text-align: left;
    }
  }

  .overlay:hover {
    background: rgba(0,0,0,0.5);
    opacity: 1;
  }


  &:hover .ask-button {
    background-color: $color-tertiary;
    color: white;
  }
}
</style>
