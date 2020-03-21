<template>
  <ConferencePage :selectedIndex="0" :footerMargin="false">

    <div class="container section section-landing">
      <div class="section-landing-child">
        <h6>TEDxUofW 2020 PRESENTS</h6>
        <h1>IN <a class="highlighted-red" href=''>OUR</a><br/>BACKYARD</h1>
        <p style="padding: 0; color: #e62b1e;"> Due to coronavirus, this event has been cancelled </p>
        <p style="padding-bottom: 0; text-decoration: line-through;"> APRIL 11, 2020 KANE HALL</p>
        <p style="color: #999997; font-size: 1.1rem; padding-top: 0.5rem"> <span style="color: #e62b1e">$15</span> for UW Students & <span style="color: #e62b1e">$20</span> for General Public </p>
        <router-link class="home-page-button" to="login">ATTEND</router-link>
      </div>
    </div>

    <div class="container section section-about">
      <!-- <div class="section-about-row"> -->
      <div class="section-about-text">
        <h2>Ideas worth spreading at the<br/>University of Washington</h2>
        <p>
          For the past 7 years, TEDxUofW has been gathering a collection of great creative thinkers, scientific minds, and community leaders in our annual conference. Join us to celebrate the confidence and spread ideas that can make our future better!
        </p>
      </div>
      <!-- </div> -->
      <router-link class="home-page-button" to="login">REGISTER</router-link>
    </div>
    
    <div class="container section section-speakers">
      <h2>FEATURING</h2>
      <div class="carousel-container">
      <SpeakerCarousel />
      </div>
  
      <router-link class="view-speakers-button" to="speakers">VIEW ALL SPEAKERS</router-link>
    </div>
    
  </ConferencePage>
</template>

<script>
import Arrows from "@/components/Arrows";
import ConferencePage from "@/components/ConferencePage";
import Splash from "@/components/Splash";
import SpeakerCarousel from "@/components/SpeakerCarousel";

let backgroundgif = '/static/HomeGif.gif'

const speakers = [
  {
    name: "Venus Rekow",
    talk: "The Power of Inclusion"
  },
  {
    name: "Nathan Vass",
    talk: "Why We Need Strangers"
  },
  {
    name: "Nat Puff",
    talk: "The Dos and Dont's of Breakup Songs"
  },
  {
    name: "Julio Covarrubias",
    talk: "Setting the Record Straight: The Latin American Mind in Global Context"
  },
  {
    name: "John Vallier",
    talk: "Ethnomusicology 2.0"
  },
  {
    name: "Debi Talukdar",
    talk: "Philosophy Is for Everyone"
  },
  {
    name: "Brad Finegood",
    talk: "Unlocking the Cure to Substance Use Disorder"
  },
  {
    name: "Steven Quay",
    talk: "How to Be Smart When You're Dense: Preventing Breast Cancer by 2030"
  },
  {
    name: "Tamuka Chidyausiku",
    talk: "Leveraging Privilege to Amplify the Voices of the Underprivileged"
  },
  {
    name: "Susanne Rafelski",
    talk: "In Search of Patterns inside the Cell through Space and Time"
  },
  {
    name: "Nicole McNichols",
    talk: "Students on Top: A Vision for 21st Century Sex Education"
  },
  {
    name: "James Keblas",
    talk: "How Kevin Bacon Saved Seattle: The Seattle Music Story You Never Heard and Why It Matters Today"
  },
]

export default {
  name: "HomePage",
  components: { Arrows, ConferencePage, Splash, SpeakerCarousel },
  data() {
    return {
      // speakers: speakers.sort(() => Math.random() - 0.5).splice(0, 3)
      speakers: speakers.sort(() => Math.random() - 0.5)
    }
  },
  methods: {
    getFileName: function(name) {
      return "/static/speaker-headshots/" + name.toLowerCase().replace(" ", '_') + ".jpg";
    },
    getSpeakerCarouselSlide: function(name) {
      return name + " " + speakers.name;
    }
  },
  beforeMount(){
    console.log("beforeMount");
    console.log("beforeMount ended");
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
}

.home-page-button {
  text-decoration: none;
  // background-color: pink;
  border: 1.5px solid $color-primary;
  padding: 5px 0px;  // for inner within the box height
  width: 200px;
  text-align: center;

  // Space beneath
  margin: 30px 0px 100px 0px;

  // Font settings
  color: black;
  font-weight: 600;
  font-size: 14px;

  transition: 0.3s ease;
}

.home-page-button:hover {
  background-color: $color-primary;
  color: white;
}

.view-speakers-button {
  text-decoration: none;
  // background-color: pink;
  border: 1.5px solid white;
  padding: 5px 0px;  // for inner within the box height
  width: 200px;
  text-align: center;

  // Font settings
  color: white;
  font-weight: 600;
  font-size: 14px;

  transition: 0.3s ease;

  margin: 40px 15px 50px;
}

.view-speakers-button:hover {
  background-color: $color-primary;
  color: black;
  border: 1.5px solid $color-primary;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 40px;
    line-height: 1.2em;
    text-align: center;
  }
}

// .button {
//   padding: 5px 65px;
//   font-weight: 600;
//   font-size: 16px;
//   border-width: 2px;
//   width: 60px;
// }

.section-landing-child {
  background-image: url('/static/HomeGif.gif');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-landing {
  text-align: center;
  min-height: 90vh;
  
  h6 {
    color: #999997;
    font-weight: 700;
    font-size: 4vw;
    // background-color: purple;
  }

  p {
    font-weight: 700;
    font-size: 4vw;
    padding: 15px;
  }

  // .button {
  //   padding: 5px 65px;
  //   font-weight: 600;
  //   font-size: 16px;
  //   border-width: 2px;
  // }

  h1 {
    font-size: 13vw;
    padding: 20px;
  }

  h1 > a {
    position: relative;
    color: #000;
    text-decoration: none;
  }

  h1 > a:hover {
    color: $color-primary;
  }

  h1 > a:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  h1 > a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .highlighted-red {
    color: $color-primary;
  }

  @media screen and (min-width: 800px) {
    h6, p {
      font-size: 20px;
    }

    h1 {
      font-size: 90px;
    }
  }
}

.section-about {
  background-image: url('/static/background-frame-gray.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 80vh;
  padding: 30px 0px;

  h2 {
    color: $color-tertiary;
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 40px;
  }

  .content {
    text-align: center;
  }

  .section-about-text {
    padding: 0px 30px;
    max-width: 600px;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

}

.section-accent {
  background-color: $color-secondary-2;

  .col-6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 24px;
  }
  
  .accent {
    height: 16px;
    width: 140px;
    max-width: 100%;
    margin: 0 auto;
    background-color: $color-primary;
  }
}

.section-speakers {
  background-color: $color-primary;

  h2 {
    text-align: center;
    font-size: 4.3vh;
    padding: 65px 65px;
    letter-spacing: 4px;
    line-height: 1em;
    margin: 0;
    color: white;
  }

  .button-container {
    background-color: yellow;
  }
  
  .button-container .ghost {
    border: 1px solid white;
    color: white;
    background-color: purple;
  }


  .carousel-container {
    width: 100%;
    // background-color: green;
  }

  .speakers-container {
    display: flex;
    padding: 0 10%;
    align-items: stretch;
    justify-content: center;
    margin-bottom: 16px;

    @media screen and (max-width: 650px) {
      flex-direction: column;
    }

    @media screen and (max-width: 1200px) {
      padding: 0 32px;
    }
    

    .speaker-col {
      flex: 0 0 calc(33% - 24px);
      display: flex;
      justify-content: center;
      background-color: $color-secondary-2;
      border-radius: 0;

      @media screen and (max-width: 650px) {
        max-width: 400px;
      }

      .speaker-content {
        padding-bottom: 16px;

        img {
          width: 100%;
        }

        h3, p {
          padding: 0 32px;
        }

        h3 {
          font-size: 1.5vw;
          line-height: 1.5em;
          margin: 0;
          color: $color-tertiary;
          padding-top: 16px;
          
          @media screen and (max-width: 1200px) {
            font-size: 22px;
          }
        }

        p {
          margin-top: 0;
          margin-bottom: 16px;
        }
      }
    }
  }

  .btn-container {
    // padding-left: 10%;
    align-self: center;
    // margin-bottom: 32px;
    // background-color: yellow;

    // @media screen and (max-width: 1200px) {
    //   padding-left: 0;
    //   align-self: center;
    // }

    a {
      text-decoration: none;
    }
  }
}

.section-community {
  background-color: $color-secondary-2;
  height: inherit;
  padding-top: 40px;
  padding-bottom: 60px;
  position: relative;

  .community-arrow-deco {
    position: absolute;
    top: 0;
    left: -40px;
    height: 300px;
    margin-top: -(300px / 2) + 5px;

    @media screen and (max-width: 760px) {
      height: 100px;
      margin-top: -(100px / 2) + 5px;
      left: -10px;
    }
  }

  h2 {
    color: $color-tertiary;
  }
}
</style>