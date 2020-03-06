<template>
  <ConferencePage :selectedIndex="4">
    <div class="container section-about">
      <div style="justify-content: flex-start" class="row team-title">
        <div class="col-8 no-margin-horizontal">
          <h2>
            ABOUT
            <span class="highlightred">TEDx</span>
            <span class="highlight2">UofW</span>
            <img src="/static/wave.png" style="height: 48px" />
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="content col-7">
          <p>
            <span class="red">TED</span> is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia.
          </p>
        </div>
        <div class="content col-7">
          <p>
            <span class="red">TEDxUofW</span> is established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our organization has sought to give amazing speakers a receptive audience to share their passion. Our all student-run organization has put on a sold-out event for four years in a row, gathering a collection of great creative thinkers, scientific minds, community leaders, and much more.
          </p>
        </div>
      </div>
    </div>
    <div class="container section-team">
      <div class="row team-title">
        <div class="col-12 no-margin-horizontal">
          <h2>Meet the team
            <img src="/static/boop.png" style="height: 48px" />
          </h2>
          
        </div>
      </div>
      <div class="row">
        <div class="col-12 no-margin-horizontal team-selection">
          <button
            class="team-button"
            v-for="team in teamNames"
            :key="team"
            :class="{ selected: team == teamSelection }"
            @click="selectTeam(team)"
          >{{ team }}</button>
        </div>
      </div>
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
        makePerson("Miranda Reisman", "Curators", "Curator", { hasAlt: false }),
        makePerson("Rahul Prasad", "Curators", "Curator", { hasAlt: false }),

        makePerson("TJ Gascho", "Design", "Design Manager", { hasAlt: false }),
        makePerson("Mary Sciscente Bonilla", "Design", "Photographer", { hasAlt: false }),
        makePerson("Julia (I-Ting) Chao", "Design", "Branding Designer", { hasAlt: false }),
        makePerson("Sarah Schmitz", "Design", "Graphic Designer", { hasAlt: false }),
        makePerson("Emma Switzer", "Design", "Product Designer", { hasAlt: false }),

        makePerson(
          "Lily Hansen",
          "Speaker Selection",
          "Speaker Selection Manager", { hasAlt: false }
        ),
        makePerson("Claire Komori", "Speaker Selection", "Speaker Selection", { hasAlt: false }),
        makePerson("Jacqueline Hunter", "Speaker Selection", "Speaker Selection", { hasAlt: false }),
        makePerson("Karina Mendoza", "Speaker Selection", "Speaker Selection", { hasAlt: false }),
        makePerson("Kavya Ganesan", "Speaker Selection", "Speaker Selection", { hasAlt: false }),
        makePerson("Peyton Pedrozo", "Speaker Selection", "Speaker Selection", { hasAlt: false }),
        makePerson("Suhani Dalal", "Speaker Selection", "Speaker Selection", { hasAlt: false }),

        makePerson("Emma Ueda", "Finance", "Finance Manager", { hasAlt: false }),
        makePerson("Mini Kang", "Finance", "Sponsorship Coordinator", { hasAlt: false }),
        makePerson("Tamar Pekker", "Finance", "Sponsorship Coordinator", { hasAlt: false }),
        makePerson("Hyesu Lee", "Finance", "Financial Logistics", { hasAlt: false }),
        makePerson("Katherine Parks", "Finance", "Financial Analyst", { hasAlt: false }),

        makePerson("Yan Zhe Ong", "Tech", "Technical Team Manager", { hasAlt: false }),
        makePerson("Marcus King", "Tech", "Technical Coordinator", { hasAlt: false }),
        makePerson("Ryan Horn", "Tech", "Stage Designer", { hasAlt: false }),
        makePerson("Jacob Renn", "Tech", "Videographer", { hasAlt: false }),
        makePerson("Arthur Liu", "Tech", "Web Lead", { hasAlt: false }),
        makePerson("Shawn Lee", "Tech", "Web Developer", { hasAlt: false }),
        makePerson("Mina Kang", "Tech", "UI/UX Designer", { hasAlt: false }),

        makePerson("Sam Freeman", "Public Relations", "Public Relations Manager", { hasAlt: false }),
        makePerson("Pavithra Prabhu", "Public Relations", "Outreach Coordinator", { hasAlt: false }),
        makePerson("Angel Cheung", "Public Relations", "Communications Coordinator", { hasAlt: false }),
        makePerson("Audrey Tjokro", "Public Relations", "Social Media Content Creator", { hasAlt: false }),

        makePerson("Chloee Henley", "Guest Experience", "Guest Experience Manager", { hasAlt: false }),
        makePerson("Ieva Karvelyte", "Guest Experience", "Campus Coordinator", { hasAlt: false }),
        makePerson("Shania John", "Guest Experience", "Experience Parlor Developer", { hasAlt: false }),
        makePerson("Yoshimi Hata", "Guest Experience", "Experience Parlor Developer", { hasAlt: false }),
        makePerson("Hong Ge", "Guest Experience", "External Coordinator", { hasAlt: false }),
        makePerson("Liuis Jiang", "Guest Experience", "Guest Experience Facilitator", { hasAlt: false }),
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
        ? `/static/headshots/${fileName}.png`
        : "/static/headshots/blank_face.png";

      let imageUrlAlt = hasPhoto
        ? `/static/headshots/${fileName}_x.jpg`
        : "/static/headshots/happy_face.png";

      if (!hasAlt) {
        imageUrlAlt = imageUrl;
      }

      return {
        name,
        team,
        title,
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
