<template>
  <ConferencePage :selectedIndex="0" :footerMargin="false"> 
    
  <div class="container section section-landing">
    <!--<div class="animation">
          <div id="Ted">
            <h7></h7>
          </div>
          <div id="X">
            <h8></h8>
          </div>
    </div> -->
    <div class="section-landing-child">
      <video class="logo-video" autoplay="autoplay" muted loop preload="metadata">
        <source src="/static/homepage_logo_2021.mp4">
      </video>
      <!-- <h1><a href="#">Main Logo</a></h1> -->
      <!-- <p style="color: #999997; font-size: 1.1rem; padding-top: 0.5rem"> </p> -->
      <!--<a class="home-page-button" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScFL9fvlKXcNOck3b7rW2JcsMAHdYHqSvrL6B7CzjHO17sKJw/viewform?usp=sf_link">NOMINATE</a> -->
    </div>
  </div>

  <!-- <div class="container section section-details">
    <div class="section-details-child">
      <img class="event-details" src="/static/event_details_2021.svg">
      <img class="what-is-tedx" src="/static/what_is_tedx_2021.svg">
    </div>
    <router-link class="home-page-button" to="login">REGISTER</router-link>
  </div> -->

  <div class="container section section-building">
    <div class="section-building-container">
      <div class="homepage-banner">
        <img class="banner-image" src="/static/details_and_description_2021.svg">
      </div>
      <div class="homepage-banner">
        <a href="#/speakers">
          <img class="banner-image" src="/static/speakers_homepage_banner_2021.png">
          <div class="overlay">
            <div class="overlay-text">
              <h3>Speakers</h3>
            </div>
          </div>
        </a>
      </div>
      <div class="homepage-banner">
        <a href="#/sponsors">
          <img class="banner-image" src="/static/sponsors_homepage_banner_2021.png">
          <div class="overlay">
            <div class="overlay-text">
              <h3>Sponsors</h3>
            </div>
          </div>
        </a>
      </div>
      <div class="homepage-banner">
        <a href="#/about">
          <img class="banner-image" src="/static/about_homepage_banner_2021.png">
          <div class="overlay">
            <div class="overlay-text">
              <h3>About</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <!-- <div class="container section section-speakers">
    
    <div class="carousel-container">
      <SpeakerCarousel />
    </div>
    <router-link class="view-speakers-button" to="speakers">VIEW ALL SPEAKERS</router-link>
  </div> -->

  <!-- <div class="container section section-landing">
    <div class="section-landing-child">
      
      <p style="color: #999997; font-size: 1.1rem; padding-top: 0.5rem"> </p>
      <a class="home-page-button" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScFL9fvlKXcNOck3b7rW2JcsMAHdYHqSvrL6B7CzjHO17sKJw/viewform?usp=sf_link">NOMINATE</a>
    </div>
  </div> -->

  <!-- <div class="container section section-about">
    <div class="section-about-row">
    <div class="section-about-text">
    <h2><a class="highlighted-red"> <a href="http://localhost:8080/#/about">About</a></a></h2>
  </div> -->

  </ConferencePage>
</template>

<script>

import Arrows from "@/components/Arrows";
import ConferencePage from "@/components/ConferencePage";
import Splash from "@/components/Splash";
import SpeakerCarousel from "@/components/SpeakerCarousel";

let backgroundgif = '/static/HomeGif.gif'

let intervalId = null; 
let counter = 0;
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
  // mounted:function(){
  //   this.animateText();
  // },
  methods: {
    getFileName: function(name) {
      return "/static/speaker-headshots/" + name.toLowerCase().replace(" ", '_') + ".jpg";
    },
    getSpeakerCarouselSlide: function(name) {
      return name + " " + speakers.name;
    }
    // myMethod:function(){
    //   console.log("My method")
    //   document.getElementById("Ted").textContent += "TEDx "   
    //   counter++  
    //   if (counter === 10){
    //     clearInterval(intervalId)
    //     document.getElementById("Ted").textContent += "TED"
    //     document.getElementById("X").textContent = "X"
    //   }
    // },
    // animateText:function() { 
    //   if (intervalId === null) {
    //     console.log(intervalId)
    //     intervalId = setInterval(this.myMethod, 450);
    //     console.log("if statement")
    //   }
    // }
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
  margin: 30px 0px 10px 0px;

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

.animation{
  width: 100%;
  display: flex;
  //align-items: left;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 15px;
}

#X, #Ted{
  
  font-weight: bold;
  color: #e62b1e;
  text-shadow: 2px 2px black;

}

#Ted {
  font-size: 1.55vw;
}

#X {
  font-size: 100px;
}


.section-landing-child {
  //background-image: url('/static/HomeGif.gif');
  // background-repeat: no-repeat;
  // background-size: contain;
  // background-position: center center;
  width: 100%;
  height: auto;
  // min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo-video {
    width: 100%;
    height: auto;
  }
}

.section-landing {
  width: 100%;
  text-align: center;
  // min-height: 90vh;
  
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
    color: #e62b1e;
    text-shadow: 5px 5px black;
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

.section-building {
  background-color: white;
  width: 100%;

  .section-building-container {
    display: grid;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: auto;
    row-gap: 2.5vh;
    justify-items: center;
    width: 100%;
    height: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

  .section-building-container .homepage-banner {
    position: relative;
    width: 75%;
    height: auto;
  }

  .section-building-container .homepage-banner a {
    width: 100%;
    height: auto;
    margin: 0;
  }

  .section-building-container .homepage-banner .banner-image {
    display: flex;
    width: 100%;
    height: auto;
  }

  .section-building-container .homepage-banner a .banner-image {
    display: flex;
    width: 100%;
    height: auto;
  }

  .section-building-container .homepage-banner a .overlay {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    border-radius: 2.5%;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .1s ease;
    background: rgb(0,0,0);
    background: rgba(0,0,0,0);

    .overlay-text {
      display: flex;
      position: relative;
      font-size: 10vw;
      height: 100%;
      width: 100%;
      color: white;
      align-items: center;
      justify-content: center;

      h3 {
        text-transform:uppercase; 
        font-weight: 600;
      }
    }
  }

  .section-building-container .homepage-banner:hover a .overlay {
    background: rgba(0,0,0,0.5);
    opacity: 1;
  }
}

.section-about {
  background-color: #fefbd8;
  //background-image: url('/static/background-frame-gray.png');
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

.section-details {
  background-color: #fefbd8;
  width: 100%;
  //background-image: url('/static/background-frame-gray.png');
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: center center;
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-items: center;
  //padding: 30px 0px;

  @media screen and (orientation: portrait) {
    max-height: 20vh;
  }

  h2 {
    color: $color-tertiary;
    margin-bottom: 30px;
  }

  .left{
      width: 100vw;
      background-color: #aabbcc;
  }
  .right{
      width: 100vw;
      background-color: #fefbd8;
  }

  .section-details-child {
    display: grid;
    grid-template-columns: auto auto;
    height: auto;
    width: 80%;
    justify-items: center;
    margin-top: 5vh;
    margin-bottom: 5vh;
    column-gap: 5vw;

    @media screen and (orientation: portrait) {
      column-gap: 2vw;
    }

    .event-details {
      width: auto;
      height: 40vh;

      @media screen and (orientation: portrait) {
        max-width: 25vw;
      }
    }

    .what-is-tedx {
      width: auto;
      height: 40vh;

      @media screen and (orientation: portrait) {
        max-width: 50vw;
      }
    }
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

  a {
    margin: 0;
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