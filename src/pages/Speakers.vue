<template>
  <ConferencePage :selectedIndex="1">
    <div class="modal-container" v-if="isSpeakerSelected" @click="selectSpeaker(-1)">
      <div class="modal" @click.stop="() => {}">
        <div class="image" :style="{ backgroundImage: `url('${selectedSpeaker.imageUrl}'` }"></div>
        <div class="content">
          <span class="name">{{ selectedSpeaker.name }}</span>
          <span class="title">{{ selectedSpeaker.description }}</span>
          <button @click="selectSpeaker(-1)" class="full-width">Back</button>
        </div>
      </div>
    </div>
    <div class="standard-hero">
      <h1>Speakers</h1>
      <div class="accent"></div>
    </div>
    <div class="container section-sponsors">
      <div class="row">
        <div class="speakers-container">
          <div class="speaker" v-for="(speaker, i) in speakers" :key="speaker.name" @click="selectSpeaker(i)">
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
      selectedSpeakerIndex: -1,
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

.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  .modal {
    width: 800px;
    max-width: 90%;
    height: 600px;
    background-color: #ffffff;
    display: flex;
    cursor: auto;

    .image,
    .content {
      height: 100%;
      flex: 1;
    }
  }
}

.speakers-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 64px;

  .speaker {
    flex: 1 1 calc(40% - 4px);
    border: 2px solid black;
    margin-bottom: 16px;
    cursor: pointer;

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
  }
}

.speaker,
.modal {
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
</style>
