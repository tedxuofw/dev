<template>
  <ConferencePage :selectedIndex="0">
    <div class="hero" style="position: relative">
      <h1>Two Steps Forward</h1>
      <div class="info">
        <span><b>TEDxUofW 2019</b></span>
        <span>Kane Hall 210. April 3rd, 2019.</span>
      </div>
      <Arrows style="color: red; font-size: 300px; position: absolute; bottom: 0; left: 10%;" />
    </div>
    <div class="container section-about">
      <div class="row">
        <div class="col-6 content">
          <h2>Ideas worth sharing at the<br/>University of Washington</h2>
          <p>
            For the past 7 years, TEDxUofW has been gathering a collection of great creative thinkers, scientific minds, and community leaders in our annual conference. Join us to celebrate the confidence and spread ideas that can make our future better!
          </p>
          <a class="button">Register</a>
        </div>
      </div>
    </div>
  </ConferencePage>
</template>

<script>
import Arrows from "@/components/Arrows";
import ConferencePage from "@/components/ConferencePage";
export default {
  name: "HomePage",
  components: { Arrows, ConferencePage }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.hero {
  width: 100%;
  height: calc(85vh - #{$height-tabset});
  background: rgb(17,214,255);
  background: linear-gradient(147deg, #{$color-secondary} -20%, #{$color-primary} 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;
  text-align: center;
    color: white;

  h1 {
    text-transform: uppercase;
    font-weight: 200;
    margin: 0;
    font-size: 20vh;
    line-height: 1em;
  }

  .info {
    margin-top: 32px;

    span {
      display: block;
    }
  }
}

.section-about {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-secondary-2;
  height: calc(85vh - #{$height-tabset});

  .content {
    text-align: center;
  }
}
</style>
