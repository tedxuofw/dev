<template>
  <div class="splash">
    <img id="arrow-right" src="/static/animation_arrow_right.png" />
    <img id="arrow-left" src="/static/animation_arrow_left.png" />
  </div>
</template>

<script>
export default {
  name: "Splash"
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
$logo-height: 548px;
$logo-position-top: calc(50% - #{$logo-height / 2});
$logo-starting-position-x: -120px;
$logo-ending-position-x: calc(50% - 275px);

$slide-in-animation-delay: 1;
$slide-in-animation-length: 1;
$slide-in-animation-timing: cubic-bezier(0.39, 0.575, 0.565, 1);
$fade-animation-delay: 0.5;

.splash {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background-color: $color-secondary-2;
}

#arrow-left {
  position: absolute;
  width: auto;
  height: $logo-height;
  top: $logo-position-top;
  left: $logo-starting-position-x;
  animation-name: arrow-left-slide-in;
  animation-duration: #{$slide-in-animation-length + $fade-animation-delay * 1s};
  animation-delay: #{$slide-in-animation-delay * 1s};
  animation-fill-mode: forwards;
  animation-timing-function: $slide-in-animation-timing;
}

#arrow-right {
  position: absolute;
  width: auto;
  height: $logo-height;
  top: $logo-position-top;
  right: $logo-starting-position-x;
  animation-name: arrow-right-slide-in;
  animation-duration: #{$slide-in-animation-length + $fade-animation-delay * 1s};
  animation-delay: #{$slide-in-animation-delay * 1s};
  animation-fill-mode: forwards;
  animation-timing-function: $slide-in-animation-timing;
}

@keyframes arrow-left-slide-in {
  0% {
    left: $logo-starting-position-x;
  }

  #{percentage($slide-in-animation-length / ($slide-in-animation-length + $fade-animation-delay))} {
    left: $logo-ending-position-x;
    opacity: 1;
  }

  100% {
    left: $logo-ending-position-x;
    opacity: 0;
  }
}

@keyframes arrow-right-slide-in {
  0% {
    right: $logo-starting-position-x;
  }

  #{percentage($slide-in-animation-length / ($slide-in-animation-length + $fade-animation-delay))} {
    right: $logo-ending-position-x;
    opacity: 1;
  }

  100% {
    right: $logo-ending-position-x;
    opacity: 0;
  }
}
</style>
