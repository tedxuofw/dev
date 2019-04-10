<template>
  <ConferencePage :selectedIndex="1">
    <div class="standard-hero" style="position: relative">
      <h1>About</h1>
      <div class="accent"></div>
    </div>
    <div class="container section-about">
      <div class="row">
        <div class="col-4 image">
          <div class="placeholder-image"></div>
        </div>
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
            <div class="person" v-for="(person, idx) in filteredTeam" :key="idx">
              <img :src="person.imageUrl" :alt="`Photo of ${person.name}`" />
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
        makePerson('Jenny 1', 'Design', 'Design Manager'),
        makePerson('Jenny 2', 'Design', 'Graphic Designer'),
        makePerson('Jenny 3', 'Design', 'Graphic Designer'),
        makePerson('Jenny 4', 'Design', 'Graphic Designer'),
        makePerson('Jenny 5', 'Design', 'Graphic Designer'),
        makePerson('Jenny 1', 'Speaker Selection', 'Speaker Selection Manager'),
        makePerson('Jenny 2', 'Speaker Selection', 'Speaker Selection'),
        makePerson('Jenny 3', 'Speaker Selection', 'Speaker Selection'),
        makePerson('Jenny 4', 'Speaker Selection', 'Speaker Selection'),
        makePerson('Jenny 1', 'Finance', 'Finance Manager'),
        makePerson('Jenny 2', 'Finance', 'Financial Analyst'),
        makePerson('Jenny 3', 'Finance', 'Financial Analyst'),
        makePerson('Jenny 4', 'Finance', 'Sponsorship'),
        makePerson('Jenny 1', 'Production', 'Production Manager'),
        makePerson('Jenny 2', 'Production', 'Production Person'),
        makePerson('Jenny 3', 'Production', 'Production Person'),
        makePerson('Jenny 4', 'Production', 'Production Person'),
        makePerson('Jenny 1', 'Public Relations', 'PR Manager'),
        makePerson('Jenny 2', 'Public Relations', 'Public Relations'),
        makePerson('Jenny 3', 'Public Relations', 'Outreach'),
        makePerson('Jenny Liang', 'Web', 'Web Manager'),
        makePerson('Soham Pardeshi', 'Web', 'Web Developer'),
        makePerson('Nick Zhao', 'Web', 'UX/UI Designer'),
        makePerson('Andrey Butenko', 'Web', 'Web Developer'),
      ]
    };
  },
  methods: {
    makePerson(name, team, title) {
      return {
        name,
        team,
        title,
        imageUrl: `http://i.pravatar.cc/300?u=${name + team}`
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
      }

      .name {
        font-size: 24px;
      }

      .title {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
</style>
