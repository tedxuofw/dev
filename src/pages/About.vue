<template>
  <ConferencePage :selectedIndex="3">
    <div class="container section-about" style="background-color:#F5C26A">
      <div class="row">
        <div class="img-container">
          
          <img id="myImg" src="../../static/Group 45.png">
          <div class="top-left">
            <h2 class="red">Meet the Team!</h2>
          </div>

          <div class="centered">
            <p>
              TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to Vancouver, British Columbia to speak for 18 minutes or less. 
            </p>
            <p>
              TEDxUofW is established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our organization has sought to give amazing speakers a receptive audience to share their passion. Our all student-run organization has put on a sold-out event for four years in a row, gathering a collection of great creative thinkers, scientific minds, community leaders, and much more.
            </p>
          </div>

          <div class="bottom-left">
            <div class="about-selection">
              <button
                class="team-button"
                v-for="team in teamNames"
                :key="team"
                :class="{ selected: team == teamSelection }"
                @click="selectTeam(team)"
              >{{ team }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container section-team" style="background-color:#F5C26A">
      <div class="row">
        <div class="col-12 no-margin-horizontal">
          <div class="team-container">
            <div class="team" v-for="t in filteredTeam" :key="t.team">
              <!-- <span class="title">{{ t.team }}</span> -->
              <img
                :src="!t.showAlt ? t.imageUrl : person.imageUrlAlt"
                :class="{ 'web': t.team == 'Web' }"
                :alt="`Photo of a Member of ${t.team}`"
                @mouseover="t.showAlt = true"
                @mouseleave="t.showAlt = false"
              />
            </div>
            <div style="padding-bottom: 25px;color:#F5C26A">bottom padding</div>
          </div>
        </div>
      </div>
    </div>
  </ConferencePage>
</template>

<script>
import Arrows from "@/components/Arrows";
import ConferencePage from "@/components/ConferencePage";
export default {
  name: "AboutPage",
  components: { Arrows, ConferencePage },
  data() {
    const makeTeam = this.makeTeam.bind(this);
    return {
      selectedOrg: 2,
      orgs: ["TED", "TEDx", "TEDxUofW"],
      teamSelection: "All",
      team: [
        makeTeam("Curators", { hasAlt: false }),
        makeTeam("Design", { hasAlt: false }),
        makeTeam("Speaker Selection", { hasAlt: false }),
        makeTeam("Finance", { hasAlt: false }),
        makeTeam("Web", { hasAlt: false }),
        makeTeam("Public Relations", { hasAlt: false }),
        makeTeam("Guest Experience", { hasAlt: false })
      ]
    };
  },
  methods: {
    makeTeam(team, opts) {
      opts = opts || {};
      const hasPhoto = opts.hasPhoto !== false;
      const hasAlt = opts.hasAlt !== false;
      const fileName = team;

      let imageUrl = hasPhoto
        ? `/static/locker-headshots/${fileName}.svg`
        : "/static/locker-headshots/blank_face.png";

      let imageUrlAlt = hasPhoto
        "/static/locker-headshots/blank_face.png";

      if (!hasAlt) {
        imageUrlAlt = imageUrl;
      }

      return {
        team,
        showAlt: false,
        imageUrl,
        imageUrlAlt
      };
    },
    selectTeam(team) {
      this.teamSelection = team;
    }
  },
  computed: {
    filteredTeam() {
      if (this.teamSelection == "All") {
        return this.team;
      }

      return this.team.filter(person => person.team == this.teamSelection);
    },
    teamNames() {
      const uniqueTeams = ["All"];
      this.team.forEach(person => {
        if (!uniqueTeams.includes(person.team)) {
          uniqueTeams.push(person.team);
        }
      });
      return uniqueTeams;
    }
   
  }
};

let imgArea = 3000 * 400;
window.onload = function() {
  document.getElementById("myImg").width = "100%";
  document.getElementById("myImg").height = imgArea / (document.getElementById("myImg").width * 2);
}

window.onresize = function() {
  document.getElementById("myImg").width = "100%";
  document.getElementById("myImg").height = imgArea / (document.getElementById("myImg").width * 2);
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
$about-break: 1170px;



/* Container holding the image and the text */
.img-container {
  position: relative;
  display: flex;
  justify-content: center;
  color: black;

  img {
    width: 100%;
  }
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85%;
  transform: translate(-50%, -50%);
  text-align: left;
}

/* Top left text */
.top-left {
  position: absolute;
  top: 13%;
  left: 3vw;

  @media only screen and (max-width: 1000px) {
    top: 20%
  }
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 13%;
  left: 3vw;

  @media only screen and (max-width: 1000px) {
    bottom: 20%
  }
}

.team-button:focus {
  outline: none;
  outline-offset: none;
}

.red {
  color: $color-primary;
  font-weight: 700;
}

.section-about {
  padding-top: 10vh;
  background-color: $color-secondary-2;

  .about-selection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    button {
      background: none;
      border: none;
      text-transform: uppercase;
      font-size: 1rem;
      justify-content: center;
      font-weight: bold;
      color: rgb(102, 102, 102);
      white-space: nowrap;
      border-radius: 0;
      line-height: 0px;

      &.selected {
        color: $color-primary;
        font-weight: 900;
      }

 
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 1em;
    margin: 16px 0;
    text-align: left;
    s .highlightred {
      color: $color-primary;
    }

    .highlight2 {
      color: $color-primary;
    }
  }
}

.section-team {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  background-color: $color-secondary-2;
  position: relative;

  span.floating {
    position: absolute;
    color: $color-primary-2;
    right: 0;
    top: 64px;
    font-size: 24vw;
    line-height: 1em;
    z-index: 0;
    opacity: 0.6;

    @media screen and (max-width: $about-break) {
      top: 0;
    }
  }

  .row,
  .col-12 {
    z-index: 1;
  }

  .team-title {
    margin-top: 16px;

    h2 {
      width: 100%;
      display: block;
      color: black;
      text-transform: uppercase;
      text-align: left;
      font-size: 3.2rem;
      line-height: 1.5em;
      margin: 0;
    }
  }

  .team-container {
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .team {
      flex: 0 0 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 36px;
      max-width: 100%;
      text-align: left;

      img,
      span {
        display: block;
        margin: 0;
        line-height: 1.2em;
      }

      img {
        margin-bottom: 8px;
        max-width: 95%
      }

      .title {
        font-size: 2em;
        font-weight: 24;
      }

      // img.web:hover {
      //   animation-name: web-hover-animate;
      //   animation-duration: 2s;
      //   animation-iteration-count: infinite;
      // }
    }
  }
}

$web-hover-animate-props: 0px 0px 40px 29px;
@keyframes web-hover-animate {
  0% {
    box-shadow: $web-hover-animate-props #ff240033;
  }

  10% {
    box-shadow: $web-hover-animate-props #e81d1d33;
  }

  20% {
    box-shadow: $web-hover-animate-props #e8b71d33;
  }

  30% {
    box-shadow: $web-hover-animate-props #e3e81d33;
  }

  40% {
    box-shadow: $web-hover-animate-props #1de84033;
  }

  50% {
    box-shadow: $web-hover-animate-props #1ddde833;
  }

  60% {
    box-shadow: $web-hover-animate-props #2b1de833;
  }

  70% {
    box-shadow: $web-hover-animate-props #dd00f333;
  }

  80% {
    box-shadow: $web-hover-animate-props #dd00f333;
  }

  100% {
    box-shadow: $web-hover-animate-props #ff240033;
  }
}
</style>
