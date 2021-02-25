<template>
  <ConferencePage :selectedIndex="3">
    <div class="container section-about" style="background-color:#F5C26A">
      <div class="row">
        <div style="justify-content: flex-start" class="img-container">
          <img src="../../static/Group 45.svg" style="width:100%;">

          <div class="centered col-8">
            <h2>What is TEDxUofW?</h2>
            <p>
              <span class="red">TEDxUofW</span> is established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our organization has sought to give amazing speakers a receptive audience to share their passion. Our all student-run organization has put on a sold-out event for four years in a row, gathering a collection of great creative thinkers, scientific minds, community leaders, and much more.
            </p>
     
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
              <img
                :src="!t.showAlt ? t.imageUrl : person.imageUrlAlt"
                :class="{ 'web': t.team == 'Web' }"
                :alt="`Photo of a Member of ${t.team}`"
                @mouseover="t.showAlt = true"
                @mouseleave="t.showAlt = false"
              />
           
            </div>
            
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
        ? `/static/locker-headshots/${fileName}_x.jpg`
        : "/static/locker-headshots/happy_face.png";

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
}
/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
      justify-content: center;
      font-weight: bold;
      color: rgb(102, 102, 102);
      white-space: nowrap;
      border-radius: 0;


      &.selected {
        color: $color-primary;
        font-weight: 900;
      }
    }


  }

  .placeholder-image {
    background-color: $color-tertiary;
    margin-top: -64px;
    width: 80%;
    height: 400px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
  }

  h2 {
    font-size: 48px;
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

  .team-selection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    button {
      background: none;
      border: none;
      text-transform: uppercase;
      justify-content: center;
      font-weight: bold;
      color: rgb(179, 89, 0);
      white-space: nowrap;
      border-radius: 0;
      margin: 8px;

      &.selected {
        color: $color-primary;
        font-weight: 900;
      }
    }
  }

  .team-container {
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-between;

    .team {
      flex: 0 0 33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 36px;
      max-width: 100%;
      text-align: center;

      img,
      span {
        display: block;
        margin: 0;
        line-height: 1.2em;
      }

      img {
        margin-bottom: 8px;
        max-width: 700px
      }

      // img.web:hover {
      //   animation-name: web-hover-animate;
      //   animation-duration: 2s;
      //   animation-iteration-count: infinite;
      // }
    }
  }
}

$web-hover-animate-props: 0px 0px 40px 30px;
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
