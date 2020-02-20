<template>
  <carousel :paginationEnabled=false class="test" :perPageCustom="[[480, 2], [768, 3], [300, 1], [1100, 4]]">
    <!-- <slide><div style="width: 300px; max-width: 100vw; height: 400px; max-height: 30vh;"><img :src="this.getFileName(this.speakers[0].name)" :alt="speakers[0].name" style="object-fit: contain;"/> </div> -->
    <slide><img class="label" :src="this.getFileName(this.speakers[0].name)" :alt="speakers[0].name"/>
    <div class="overlay">Hey there</div>
    </slide>
    <slide><img :src="this.getFileName(this.speakers[1].name)" :alt="speakers[0].name" style="width: 100%;"/>
    <div class="overlay">Hey there</div>
    </slide>
    <slide><img :src="this.getFileName(this.speakers[2].name)" :alt="speakers[0].name" style="width: 100%;"/>
    <div class="overlay">Hey there</div>
    </slide>
    <slide><img :src="this.getFileName(this.speakers[3].name)" :alt="speakers[0].name" style="width: 100%;"/>
    <div class="overlay">Hey there</div>
    </slide>
    <slide><span class="label">asdflkadfjlkdfj</span><a href="" class="overlay">Hey there</a>
    </slide>
    <slide><span class="label">asdfdfdfa</span>
    </slide>
    <slide><span class="label">aasdfadfd</span>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

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
  name: "SpeakerCarousel",
  components: { Carousel, Slide },
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
      return name + " " + speakers.talk;
    },
    buildSlideMarkup: function(count) {
      let slideMarkup = '';
      for (var i = 1; i <= count; i++) {
        slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
      }
      return slideMarkup;
    },
  }
};

</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

// .VueCarousel-slide {
//   position: relative;
//   background-color: purple;
//   color: #fff;
//   font-family: Arial;
//   font-size: 24px;
//   text-align: center;
//   min-height: 100px;
//   border: red;
//   border-style: dashed;
// }

.VueCarousel-carousel {
  max-width: 100%;
}

.VueCarousel-slide {
  position: relative;
  // background-color: purple;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  // border: red;
  // width: 300px;
  // @media screen and (max-width: 650px) {
  //   width: 100vw;
  // }
  // max-width: 100vw;
  // height: 400px;
  // max-height: 50vh;
  // border-style: dashed;
}

.VueCarousel-slide:hover {
  position: relative;
  // background-color: purple;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
  // border: red;
  // width: 300px;
  // @media screen and (max-width: 650px) {
  //   width: 100vw;
  // }
  // max-width: 100vw;
  // height: 400px;
  // max-height: 50vh;
  // border-style: dashed;
}

.test {
  // background-color: orange;
  max-width: 100%;  // Don't use 100vw bc that includes the scroll bar
}

.label {
  // position: absolute; // Position absoulte makes it so parent cannot resize
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  width: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .1s ease;
  background-color: $color-primary;
  color: white;
}

.VueCarousel-slide:hover .overlay {
  opacity: 1;
}


</style>