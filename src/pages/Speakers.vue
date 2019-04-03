<template>
  <ConferencePage :selectedIndex="1">
    <div class="standard-hero" style="">
      <h1>Speakers</h1>
      <div class="accent"></div>
    </div>
    <div class="container section-sponsors">
      <div class="row">
        <div class="speakers-container">
          <div class="speaker" v-for="speaker in speakers" :key="speaker.name">
            <div class="image" :style="{ backgroundImage: `url('${speaker.imageUrl}'` }"></div>
            <div class="content">
              <span class="name">{{ speaker.name }}</span>
              <span class="title">{{ speaker.description }}</span>
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
  name: "SpeakersPage",
  components: { Arrows, ConferencePage },
  data() {
    const makeSpeaker = this.makeSpeaker.bind(this);
    return {
      speakers: [
        makeSpeaker('Rebecca Jordan', 'Why small things matter the most in life'),
        makeSpeaker('Jenny Liang', 'Why small things matter the most in life'),
        makeSpeaker('Soham Pardeshi', 'Why small things matter the most in life'),
        makeSpeaker('Nick Zhao', 'Why small things matter the most in life')
      ]
    };
  },
  methods: {
    makeSpeaker(name, description) {
      return {
        name,
        description,
        imageUrl: `http://i.pravatar.cc/300?u=${name + description}`
      }
    }
  }
};

</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
$speakers-break: 750px;

.standard-hero {
  background-image: url('/static/speakers-page-header.jpg');
  background-position: bottom;
}

.speakers-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 64px;

  .speaker {
    flex: 1 1 calc(40% - 4px);
    border: 2px solid $color-tertiary;
    margin-bottom: 16px;

    @media screen and (max-width: $speakers-break) {
      flex: 1 0 100%;
    }

    @media screen and (min-width: $speakers-break) {
      &:nth-of-type(odd) {
        margin-right: 16px;
      }

      &:nth-of-type(even) {
        margin-left: 16px;
      }
    }

    .image {
      width: 100%;
      height: 300px;
      background-position: center;
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
    }
  }
}
</style>
