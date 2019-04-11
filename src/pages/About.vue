<template>
  <ConferencePage :selectedIndex="1" :footerMargin="false">
    <div class="standard-hero" style="position: relative">
      <h1>About</h1>
      <div class="accent"></div>
    </div>
    <div class="container section-about">
      <div class="row">
        <!-- <div class="col-4 image">
          <div class="placeholder-image"></div>
        </div> -->
        <div class="col-8 content">
          <div>
            <h2>About <span class="highlight">TEDxUofW</span></h2>
            <p>
              TEDxUofW is established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our organization has sought to give amazing speakers a receptive audience to share their passion. Our all student-run organization has put on a sold-out event for four years in a row, gathering a collection of great creative thinkers, scientific minds, community leaders, and much more.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container section-team">
      <span class="floating">2019</span>
      <div class="row team-title">
        <div class="col-12 no-margin-horizontal">
          <h2>Meet the team</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 no-margin-horizontal team-selection">
          <button class="team-button" v-for="team in teamNames" :key="team" :class="{ selected: team == teamSelection }" @click="selectTeam(team)">{{ team }}</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 no-margin-horizontal">
          <div class="team-container">
            <div class="person" v-for="person in filteredTeam" :key="person.name">
              <img :src="!person.showAlt ? person.imageUrl : person.imageUrlAlt"
                :class="{ 'web': person.team == 'Web' }"
                :alt="`Photo of ${person.name}`"
                @mouseover="person.showAlt = true"
                @mouseleave="person.showAlt = false" />
              <span class="name">{{ person.name }}</span>
              <span class="title">{{ person.title }}</span>
            </div>
            <div class="person" v-for="(person, idx) in teamSpacer" :key="idx">
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
    const makePerson = this.makePerson.bind(this);
    return {
      teamSelection: 'All',
      team: [
        makePerson('Julia Pettere', 'Curators', 'Curator'),
        makePerson('TJ Gascho', 'Curators', 'Curator'),
        makePerson('Maya Sullivan', 'Curators', 'Curator'),

        makePerson('Sara Behbakht', 'Design', 'Design Team Manager'),
        makePerson('Joey Pan', 'Design', 'Photographer'),
        makePerson('Tunny Parrish', 'Design', 'Branding Designer'),
        
        makePerson('Sneha Mohidekar', 'Speaker Selection', 'Speaker Selection Team Manager'),
        makePerson('Adi Gunawan', 'Speaker Selection', 'Speaker Selection'),
        makePerson('Dhara Shah', 'Speaker Selection', 'Speaker Selection'),
        makePerson('Kelly Phan', 'Speaker Selection', 'Speaker Selection'),
        makePerson('Natalie Salazar', 'Speaker Selection', 'Speaker Selection'),
        makePerson('Sara Gustafson', 'Speaker Selection', 'Speaker Selection'),

        makePerson('Maya Gopalan', 'Finance', 'Finance Team Manager'),
        makePerson('Connor Hart', 'Finance', 'Sponsorship', false),
        makePerson('Emma Ueda', 'Finance', 'Logistics'),
        makePerson('Jonathan Chang', 'Finance', 'Analyst', false),
        makePerson('Stephen Lee', 'Finance', 'Analyst'),

        makePerson('Miranda Reisman', 'Production', 'Production Team Manager'),
        makePerson('Chloee Henley', 'Production', 'Guest Experience'),
        makePerson('Karina Mendoza', 'Production', 'Videographer'),
        makePerson('Lily Hansen', 'Production', 'Communication Coordinator'),
        makePerson('Megan Mei', 'Production', 'Stage Designer'),
        makePerson('Yan Ong', 'Production', 'Tech Lead'),

        makePerson('Rahul Prasad', 'Public Relations', 'PR Team Manager'),
        makePerson('Emma Hurring', 'Public Relations', 'Outreach Coordinator'),
        makePerson('Marie Danilychev', 'Public Relations', 'External Outreach', false),
        makePerson('Samantha Freeman', 'Public Relations', 'Internal Manager'),

        makePerson('Jenny Liang', 'Web', 'Web Team Manager'),
        makePerson('Soham Pardeshi', 'Web', 'Web Developer'),
        makePerson('Nick Zhou', 'Web', 'UX/UI Designer'),
        makePerson('Andrey Butenko', 'Web', 'Web Developer'),
      ]
    };
  },
  methods: {
    makePerson(name, team, title, hasPhoto) {
      hasPhoto = hasPhoto !== false;
      const fileName = name.toLowerCase().replace(' ', '_');
      return {
        name,
        team,
        title,
        showAlt: false,
        imageUrl: hasPhoto ?
          `/static/headshots/${fileName}.jpg` :
          '/static/headshots/blank_face.png',
        imageUrlAlt: hasPhoto ?
          `/static/headshots/${fileName}_x.jpg` :
          '/static/headshots/happy_face.png',
      }
    },
    selectTeam(team) {
      this.teamSelection = team;
    }
  },
  computed: {
    filteredTeam() {
      if(this.teamSelection == 'All') {
        return this.team;
      }

      return this.team.filter(person => person.team == this.teamSelection);
    },
    teamNames() {
      const uniqueTeams = ['All'];
      this.team
        .forEach(person => {
          if(!uniqueTeams.includes(person.team)) {
            uniqueTeams.push(person.team);
          }
        });
      return uniqueTeams;
    },
    teamSpacer() {
      const num = this.filteredTeam.length % 2;
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

.standard-hero {
  background-image: url('/static/about-page-header.jpg');
  background-position: center;
}

.section-about {
  margin-top: 64px;
  background-color: $color-secondary-2;

  .placeholder-image {
    background-color: $color-tertiary;
    margin-top: -64px;
    width: 80%;
    height: 400px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-size: 48px;
    line-height: 1em;

    .highlight {
      color: $color-primary;
    }
  }
}

.section-team {
  background-color: $color-primary;
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
      color: white;
      text-transform: uppercase;
      text-align: center;
      font-size: 5vw;
      line-height: 1.5em;
      margin: 0;
    }
  }

  .team-selection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    button {
      flex: 1 1;
      background: none;
      border: none;
      color: white;
      white-space: nowrap;  
      border-bottom: 10px solid $color-tertiary;
      border-radius: 0;
      margin: 8px;

      &.selected {
        border-bottom-color: $color-secondary;
      }
    }
  }

  .team-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: white;
    padding: 64px;
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
