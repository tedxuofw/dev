<template>
  <ConferencePage :selectedIndex="3">
    <div class="standard-hero" style="position: relative">
      <h1>Sponsors</h1>
      <div class="accent"></div>
    </div>
    <div class="container section-sponsors">
      <div class="row" v-for="sponsor in sponsors" :key="sponsor.title">
        <div class="col-4 img-container">
          <img :src="getFileName(sponsor.logo)" :alt="`${sponsor.title} logo`" />
        </div>
        <div class="col-8 content">
          <div class="accent"></div>
          <h2>{{ sponsor.title }}</h2>
          <h3>{{ sponsor.subtitle }}</h3>
          <p>
            {{ sponsor.desc}}
          </p>
        </div>
      </div>
    </div>
  </ConferencePage>
</template>

<script>
import Arrows from "@/components/Arrows";
import ConferencePage from "@/components/ConferencePage";
export default {
  name: "SponsorPage",
  components: { Arrows, ConferencePage },
  data() {
    return {
      sponsors: [
        {
          title: 'ASUW',
          subtitle: 'Associated Students of the University of Washington',
          desc: 'The ASUW Special Appropriations Fund is a student levied, student distributed fund to support and enhance the out of class experience of students. The fund provides one-time funding grants to student initiated and developed event-centered programs which enrich the cultural, emotional, intellectual, and social well-being of the student.',
          logo: 'asuw.png'
        },
        {
          title: 'Buerk Center',
          subtitle: 'Buerk Center for Entrepreneurship',
          desc: 'The Buerk Center offers an exceptional curriculum, real-world experiences, and connections to teh Seattle entrepreneurial community to inspire students from all majors and disciplines across campus to pursue their entrepreneurial passions.',
          logo: 'buerk_center.png'
        },
        {
          title: 'CSF',
          subtitle: 'Campus Sustainabiity Fund',
          desc: 'We are creating a sustainable campus & fostering an intentional and involved university culture by funding student-led interdisciplinary projects that drive equity, resilience, and stewardship on campus.',
          logo: 'csf.png'
        },
        {
          title: 'UMAC',
          subtitle: 'UW University Marketing and Communications',
          desc: 'At UMAC we consider ourselves enthusiastic ambassadors of the University of Washington and its brand. We build awareness and increase support for the UW by collaborating with campus partners, valued supporters, and the community to further the mission of this great university!',
          logo: 'uwmac.png'
        },
        {
          title: 'Wells Fargo',
          subtitle: 'Wells Fargo Fund for Registered Student Organizations',
          desc: 'The Wells Fargo Fund for Registered Student Organizations has been created to allocate money to support the on-campus events, programs, and activities of Registered Student Organizations (RSOs). The Fund is intended to support the ability of RSOs to enrich campus culture, foster student empowerment, and enhance community impact. The funding is distributed through the Student Activities Office.',
          logo: 'wells_fargo.png'
        }
      ]
    }
  },
  methods: {
    getFileName(name) {
      return '/static/sponsor-logos/' + name;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.standard-hero {
  background-image: url('/static/sponsors-page-header.jpg');
  background-position: center;
}

.section-sponsors {
  margin-top: 64px;

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 80%;
      height: auto;
    }
  }

  .content {
    .accent {
      background-color: $color-primary;
      height: 1vh;
      width: 8.2vw;
      margin-bottom: 3vh;
    }

    h3 {
      font-weight: 400;
    }
  }
}
</style>
