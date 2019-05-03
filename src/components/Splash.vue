<template>
  <div class="splash">
    <div id="arrow-container">
      <img id="arrow-right" src="static/animation-arrow-right.svg" />
      <img id="arrow-left" src="static/animation-arrow-left.svg" />
    </div>
    <div id="final-splash-container">
      <div id="final-splash-logo-container">
        <img id="final-logo" src="static/animation-logo.svg" />
        <h1>Two Steps<span class="forward">Forward</span></h1>
      </div>

      <div id="final-splash-info-container" v-if="false">
        <span class="title">TEDxUofW 2019</span>
        <span class="date">Walker Ames Room, May 4<br/>9:30am - 3:30pm</span>
        <div class="accent"></div>
      </div>

      <div id="final-splash-info-container">
        <router-link class="button tertiary filled" to="speakers">Ask Speakers Questions</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Splash"
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

// Constants: arrow slide-in animation
$logo-height: 80vh;
$logo-position-top: calc(50% - #{$height-tabset / 3} - #{$logo-height / 2});
$logo-starting-position-x: -120px;
$logo-starting-position-x-mobile: -500px;
$logo-ending-position-x: calc(50% - 275px);
$mobile-position-break: 600px;

// Config: arrow slide-in animation
$slide-in-animation-delay: 250ms;
$slide-in-animation-length: 1s;
$slide-in-animation-timing: cubic-bezier(0.39, 0.575, 0.565, 1);
$fade-animation-length: 50ms;
$logo-offset-break: 720px;

// Config: final splash animation
$final-animation-length: 1000ms;

.splash {
  position: relative;
  width: 100%;
  min-height: 420px;
  height: calc(100vh - #{$height-tabset});
  overflow-x: hidden;
  background-color: $color-secondary-2;
  overflow-y: hidden;
}

// ARROW SLIDE-IN ANIMATION =========

#arrow-container {
  animation-name: arrow-slide-in-container;
  animation-duration: $fade-animation-length;
  animation-delay: #{$slide-in-animation-delay + $slide-in-animation-length};
  animation-fill-mode: forwards;
  animation-timing-function: linear;

  #arrow-left {
    position: absolute;
    width: auto;
    height: $logo-height;
    top: $logo-position-top;
    left: $logo-starting-position-x;
    animation-name: arrow-left-slide-in;
    animation-duration: $slide-in-animation-length;
    animation-delay: $slide-in-animation-delay;
    animation-fill-mode: forwards;
    animation-timing-function: $slide-in-animation-timing;

    @media screen and (max-width: $mobile-position-break) {
      animation-name: arrow-left-slide-in-mobile;
      left: $logo-starting-position-x-mobile;
    }
  }

  #arrow-right {
    position: absolute;
    width: auto;
    height: $logo-height;
    top: $logo-position-top;
    right: $logo-starting-position-x;
    animation-name: arrow-right-slide-in;
    animation-duration: $slide-in-animation-length;
    animation-delay: $slide-in-animation-delay;
    animation-fill-mode: forwards;
    animation-timing-function: $slide-in-animation-timing;

    @media screen and (max-width: $mobile-position-break) {
      animation-name: arrow-right-slide-in-mobile;
      right: $logo-starting-position-x-mobile;
    }
  }
}

@keyframes arrow-slide-in-container {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes arrow-left-slide-in {
  from {
    left: $logo-starting-position-x;
  }

  to {
    left: $logo-ending-position-x;
  }
}

@keyframes arrow-right-slide-in {
  from {
    right: $logo-starting-position-x;
  }

  to {
    right: $logo-ending-position-x;
  }
}

@keyframes arrow-left-slide-in-mobile {
  from {
    left: $logo-starting-position-x-mobile;
  }

  to {
    left: $logo-ending-position-x;
  }
}

@keyframes arrow-right-slide-in-mobile {
  from {
    right: $logo-starting-position-x-mobile;
  }

  to {
    right: $logo-ending-position-x;
  }
}

// SPLASH TRANSITION ANIMATION =====

#final-splash-container {
  width: 100%;
  height: 100%;
  opacity: 0;
  animation-name: final-splash-fade-in;
  animation-delay: #{$slide-in-animation-delay + $slide-in-animation-length + $fade-animation-length};
  animation-duration: $final-animation-length;
  animation-fill-mode: forwards;

  #final-splash-logo-container {
    position: absolute;
    width: 100%;
    height: $logo-height;
    top: $logo-position-top;
    text-align: center;

    #final-logo {
      height: $logo-height;
      width: auto;
      @media screen and (max-height: $logo-offset-break) {
        margin-top: 10px;
      }
    }

    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 12vw;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      transform: translate(-50%, -50%);
      line-height: 1em;
      white-space: nowrap;
      margin: 0;
      color: $color-tertiary;

      animation-name: final-splash-slide-in;
      animation-delay: #{$slide-in-animation-delay + $slide-in-animation-length + $fade-animation-length};
      animation-duration: $final-animation-length;
      animation-fill-mode: forwards;
      
      .forward {
        display: block;
        letter-spacing: 0.28em;
        margin-right: -0.20em;
      }
    }
  }

  #final-splash-info-container {
    position: absolute;
    bottom: 32px;
    // bottom: 64px;
    // left: 11.5vw;
    left: 50%;
    transform: translateX(-50%);
    color: $color-tertiary;
    // width: calc(100% - 23vw);

    .title,
    .date {
      display: block;
    }

    .title {
      font-weight: 700;
      font-size: 36px;
      line-height: 1.5em;
    }

    .date {
      font-size: 24px;
      line-height: 1.1em;
    }

    .accent {
      background-color: $color-tertiary;
      height: 24px;
      width: 110px;
      margin-top: 24px;
    }

    .button {
      display: inline-block;
      line-height: 1.2em;
      text-decoration: none;
      padding: 16px 32px;
      font-size: 32px;
      box-sizing: border-box;
      max-width: 100%;
      text-align: center;

      @media screen and (max-width: 850px) {
        font-size: 24px;
        padding: 8px 16px;
      }
    }
  }
}

@keyframes final-splash-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes final-splash-slide-in {
  from {
    margin-left: -1em;
  }

  to {
    margin-left: 0;
  }
}
</style>
