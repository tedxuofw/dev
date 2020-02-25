<template>
  <div class="footer" :class="{ 'footer-margin': footerMargin }">
    <div class="tagline">
      <p>Step<br/>Forward<br/>Now</p>
    </div>
    <div class="social">
      <h3>Follow Us</h3>
      <div class="social-bubbles">
        <a href="https://www.facebook.com/TEDxUofW/" target="_blank" class="social-bubble"><img src="/static/06-facebook.svg" alt="Facebook logo" /></a>
        <a href="https://www.instagram.com/tedxuofw/" target="_blank" class="social-bubble"><img src="/static/38-instagram.svg" alt="Instagram logo" /></a>
        <a href="https://www.youtube.com/channel/UCGmFbWHkkgWwA8iw9Ap11vw" target="_blank" class="social-bubble"><img src="/static/18-youtube.svg" alt="Youtube logo" /></a>
      </div>
      <button @click="$router.push('/login')">Get your tickets now</button>
      <p class="small">This independent TEDx event is operated under license from TED ©2019 TEDxUofW</p>
    </div>
    <div class="pages">
      <h3>Pages</h3>
      <router-link to="about" class="link">About</router-link>
      <router-link to="contact" class="link">Contact</router-link>
      <!-- <a href="volunteer">Volunteer</a> -->
      <!-- <a href="sponsors">Sponsors</a> -->
    </div>
    <div class="account">
      <h3>Account</h3>
      <router-link to="login" class="link">Ticketing</router-link>
      <router-link to="login" class="link">Feedback</router-link>
      <router-link to="login" class="link">Dashboard</router-link>
      <!-- <a href="/dashboard">Speaker Interaction</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    footerMargin: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
$footer-break: 1000px;
$footer-tiny-break: 515px;

.footer {
  display: flex;
  width: 100%;
  background-color: $color-secondary-2;
  padding: 32px 120px;
  box-sizing: border-box;

  &.footer-margin {
    margin-top: 64px;
  }

  @media screen and (max-width: $footer-break) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 48px 16px;
  }

  h3 {
    color: $color-tertiary;
    text-transform: uppercase;
  }

  .tagline,
  .social,
  .pages,
  .account {
    padding: 0 16px;
  }

  .social button {
    margin: 16px 0;
  }

  .tagline,
  .social {
    flex: 3;

    @media screen and (max-width: $footer-break) { 
      flex: 1 1 calc(50% - 32px);
    }
  }

  .pages,
  .account {
    flex: 2;

    @media screen and (max-width: $footer-break) { 
      flex: 1 1 calc(50% - 32px);
    }

    a {
      display: block;
      text-decoration: none;
      line-height: 2em;
      color: black;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .tagline {
    p {
      margin: 0;
      margin-top: 24px;
      font-size: 48px;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 60px;

      @media screen and (max-width: $footer-break) { 
        font-size: 48px;
        line-height: 60px;
      }

      @media screen and (max-width: $footer-tiny-break) {
        font-size: 32px;
        line-height: 1.5em;
      }
    }
  }
}

.social-bubbles {
  .social-bubble {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    text-decoration: none;
    background-color: $color-primary-2;

    &:hover {
      filter: brightness(80%);
    }

    img {
      height: 60%;
    }
  }
}

.small {
  font-size: 0.75em;
  line-height: 21px;
}

.link {
  font-size: 0.9em;
}
</style>
