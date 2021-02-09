<template>
  <ConferencePage :selectedIndex="3">
    <div class="container section-about">
      <div style="justify-content: flex-start" class="row team-title">
        <div class="col-8 no-margin-horizontal">
          <!-- <h2>
            ABOUT
            <span class="highlightred">TEDx</span>
            <span class="highlight2">TEDxUofW</span>
            <img src="/static/wave.png" style="height: 48px" />
          </h2> -->
        </div>
      </div>
      <div class="row">
        <div style="justify-content: flex-start" class="img-container">
          <img src="../../static/Group 45.svg" style="width:100%;">

          <div class="centered">
            <h2>What is TEDxUofW?</h2>
              <p>
                <span class="red">TEDxUofW</span> is established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our organization has sought to give amazing speakers a receptive audience to share their passion. Our all student-run organization has put on a sold-out event for four years in a row, gathering a collection of great creative thinkers, scientific minds, community leaders, and much more.
              </p>
              <div class="container section-team row col-12 no-margin-horizontal ">
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
    <!-- <div style="justify-content: flex-start" class="img-container"> 
      <div class="content col-10">
        <img src="../../static/Group 45.svg" style="width:100%;">
          <div class="centered">
            <h2>What is TEDxUofW?</h2>
              <p>
                <span class="red">TEDxUofW</span> is established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our organization has sought to give amazing speakers a receptive audience to share their passion. Our all student-run organization has put on a sold-out event for four years in a row, gathering a collection of great creative thinkers, scientific minds, community leaders, and much more.
              </p>
          </div>
      </div>  
    </div> -->
    <div class="container section-team">
      <div class="row team-title">
        <div class="col-12 no-margin-horizontal">
          <h2>Meet the team
            <!-- <img src="/static/boop.png" style="height: 48px" /> -->
          </h2>
          
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-12 no-margin-horizontal team-selection">
          <button
            class="team-button"
            v-for="team in teamNames"
            :key="team"
            :class="{ selected: team == teamSelection }"
            @click="selectTeam(team)"
          >{{ team }}</button>
        </div>
      </div> -->
      <div class="row">
        <div class="col-12 no-margin-horizontal">
          <div class="team-container">
            <div class="person" v-for="person in filteredTeam" :key="person.name">
              <img
                :src="!person.showAlt ? person.imageUrl : person.imageUrlAlt"
                :class="{ 'web': person.team == 'Web' }"
                :alt="`Photo of ${person.name}`"
                @mouseover="person.showAlt = true"
                @mouseleave="person.showAlt = false"
              />
              <span class="name">{{ person.name }}</span>
              <span class="title">{{ person.title }}</span>
            </div>
            <div class="person" v-for="(person, idx) in teamSpacer" :key="idx"></div>
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
    const makePerson = this.makePerson.bind(this);
    return {
      selectedOrg: 2,
      orgs: ["TED", "TEDx", "TEDxUofW"],
      teamSelection: "All",
      team: [
        makePerson("Lily Hansen", "Curators", "Curator", { hasAlt: false }),
        makePerson("Arthur Liu", "Curators", "Curator", { hasAlt: false }),
        makePerson("Karina Mendoza", "Curators", "Curator", { hasAlt: false }),
        makePerson("Andrew Tang", "Design", "Design Manager", { hasAlt: false }),
        makePerson("Mary Bonilla", "Design", "Graphic Designer", { hasAlt: false }),
        makePerson("Youjean Cho", "Design", "Graphic Designer", { hasAlt: false }),
        makePerson("Emilia Hughes", "Design", "UX Designer", { hasAlt: false }),
        makePerson("Jessica Prasetyo", "Design", "UX Designer", { hasAlt: false }),
        makePerson("Sarah Schmitz", "Public Relations", "Public Relations Manager", { hasAlt: false }),
        makePerson("Cayla Surovsky", "Public Relations", "Social Media Content Producer", { hasAlt: false }),
        makePerson("Alejandro Gonzalez", "Public Relations", "Outreach Coordinator", { hasAlt: false }),
        makePerson("Gaurav Gowda", "Web", "Web Team Manager", { hasAlt: false }),
        makePerson("Jessica Burroughs", "Web", "Web Developer", { hasAlt: false }),
        makePerson("Jake Jung", "Web", "Web Developer", { hasAlt: false }),
      ]
    };
  },
  methods: {
    makePerson(name, team, title, opts) {
      opts = opts || {};
      const hasPhoto = opts.hasPhoto !== false;
      const hasAlt = opts.hasAlt !== false;
      const fileName = title.replace("/", "_") + " - " + name;

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
    },
    teamSpacer() {
      const num = this.filteredTeam.length % 3;
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
      flex: 1 1;
      background: none;
      border: none;
      color: $color-secondary;
      white-space: nowrap;
      border-bottom: 2px solid $color-secondary;
      border-radius: 0;
      margin: 8px;

      &.selected {
        color: $color-tertiary;
        border-bottom: 5px solid $color-secondary;
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
  background-image: url('/static/background-frame-white.png');
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
      font-weight: bold;
      color: rgb(94, 94, 94);
      white-space: nowrap;
      border-radius: 0;
      margin: 8px;

      &.selected {
        color: $color-primary;
      }
    }
  }

  .team-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-between;

    .person {
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
        max-width: 300px;
      }

      .name {
        font-size: 24px;
      }

      .title {
        font-size: 18px;
        font-weight: 700;
      }

      img.web:hover {
        animation-name: web-hover-animate;
        animation-duration: 2s;
        animation-iteration-count: infinite;
      }
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
