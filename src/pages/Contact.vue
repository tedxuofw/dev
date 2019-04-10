<template>
  <ConferencePage :selectedIndex="2">
    <div class="standard-hero" style="position: relative">
      <h1>Contact Us</h1>
      <div class="accent"></div>
    </div>
    <div class="container section-contact">
      <div class="row">
        <div class="col-8 no-margin message">
          <h2>Message</h2>
          <div class="accent"></div>
          <input type="text" placeholder="Name" class="half-width" />
          <input type="email" placeholder="Email" class="half-width" />
          <input type="text" placeholder="Title" class="full-width" />
          <textarea placeholder="Message" class="full-width" />
          <button class="full-width">Send</button>
        </div>
        <div class="col-4 no-margin social">
          <h2>Social</h2>
          <div class="accent"></div>
          <p>
            Follow our news and find more Information on social media
          </p>
          <div class="social-bubbles">
            <a href="https://www.facebook.com/TEDxUofW/" target="_blank" class="social-bubble"><img src="/static/06-facebook.svg" alt="Facebook logo" /></a>
            <a href="https://www.instagram.com/tedxuofw/" target="_blank" class="social-bubble"><img src="/static/38-instagram.svg" alt="Instagram logo" /></a>
            <a href="https://www.youtube.com/channel/UCGmFbWHkkgWwA8iw9Ap11vw" target="_blank" class="social-bubble"><img src="/static/18-youtube.svg" alt="Youtube logo" /></a>
          </div>
          <p>
            Or follow our newsletter
          </p>
          <input type="email" placeholder="Email" class="full-width" />
          <button class="full-width secondary">Sign up</button>
        </div>
      </div>
    </div>
  </ConferencePage>
</template>

<script>
import Arrows from "@/components/Arrows";
import ConferencePage from "@/components/ConferencePage";
export default {
  name: "ContactPage",
  components: { Arrows, ConferencePage }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.standard-hero {
  background-image: url('/static/contact-page-header.jpg');
  background-position: center;
}

.section-contact {
  margin-top: 64px;

  .message,
  .social {
    padding: 16px 32px;
  }

  .accent {
    width: 48px;
    height: 14px;
    margin-bottom: 24px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 32px;
    margin-bottom: 8px;
  }

  .message {
    background-color: $color-secondary-2;

    .accent {
      background-color: $color-tertiary;
    }

    textarea {
      min-height: 8em;
    }
  }

  .social {
    background-color: $color-tertiary;
    color: white;

    h2 {
      color: $color-tertiary-2;
    }

    .accent {
      background-color: $color-tertiary-2;
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

    button {
      color: black;
    }
  }
}
</style>
