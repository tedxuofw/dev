<template>
  <ConferencePage :selectedIndex="4">
    <!-- <div class="standard-hero" style="position: relative">
      <h1>Contact Us</h1>
      <div class="accent"></div>
    </div> -->
    <div class="container section-contact">
      <div class="row">
        <div class="col-8 no-margin message">
          <h2 style="margin-bottom: 40px;">Message</h2>
          <!-- <div class="accent"></div> -->
          <p> Please email us directly at <a href="mailto:tedxuofw@uw.edu">tedxuofw@uw.edu</a>, and we will get back to you ASAP! <br><br><br><br><br><br><br><br><br><br></p>
          <!--
          <template v-if="formState == STATES.NOT_SUBMITTED">
            <input type="text" placeholder="Name" v-model="name" class="half-width" />
            <input type="email" placeholder="Email" v-model="email" class="half-width" />
            <input type="text" placeholder="Subject" v-model="subject" class="full-width" />
            <textarea placeholder="Message" v-model="body" class="full-width" />
            <p class="error" v-if="eligibleForErrorMessages && validationError">{{ validationError }}</p>
            <button style="background-color: none;" @click="submit" class="full-width">Send</button>
          </template>
          <template v-if="formState == STATES.LOADING">
            <p>Sending...</p>
          </template>
          <template v-if="formState == STATES.ERROR">
            0<p>There was an error in submitting this form. Instead, email us directly: <a href="mailto:tedxuofw@uw.edu">tedxuofw@uw.edu</a></p>
          </template>
          <template v-if="formState == STATES.SUCCESS">
            <p>Email sent! Thank you.</p>
          </template>
          -->
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
          <!-- <p>
            Or follow our newsletter
          </p>
          <input type="email" placeholder="Email" class="full-width" />
          <button class="full-width secondary">Sign up</button> -->
        </div>
      </div>
    </div>
  </ConferencePage>
</template>

<script>
import Arrows from "@/components/Arrows";
import ConferencePage from "@/components/ConferencePage";
import * as emailjs from 'emailjs-com';
const STATES = {
  "NOT_SUBMITTED": 0,
  "LOADING": 1,
  "SUCCESS": 2,
  "ERROR": 3
}
export default {
  name: "ContactPage",
  components: { Arrows, ConferencePage },
  data() {
    return {
      STATES,
      eligibleForErrorMessages: false,
      formState: STATES.NOT_SUBMITTED,
      name: '',
      email: '',
      subject: '',
      body: ''
    }
  },
  methods: {
    submit() {
      this.eligibleForErrorMessages = true;
      if(this.validationError === false) {
        this.formState = STATES.LOADING;
        emailjs.send('default_service', 'tedxuofw_default_template', this.formBody, 'user_zY7RrDDliqSGIWcjz5lC5')
          .then((response) => {
            this.formState = STATES.SUCCESS;
            console.log('SUCCESS!', response.status, response.text);
          }, (err) => {
            this.formState = STATES.ERROR;
            console.log('FAILED...', err);
          });
      }
    }
  },
  computed: {
    validationError() {
      if(this.name.length == 0 || this.email.length == 0 || this.subject.length == 0 || this.body.length == 0) {
        return 'Please fill all inputs.'
      }
      const emailRe = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA(-Z]{2,}))$/;
      if(!emailRe.test(this.email)) {
        return 'Please enter a valid email.'
      }
      return false;
    },
    formBody() {
      return {
        from_name: this.name,
        reply_to: this.email,
        subject: this.subject,
        message: this.body
      }
    }
  }
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
    margin-bottom: 50px;
    .accent {
      background-color: $color-tertiary;
    }
    textarea {
      min-height: 8em;
    }
  }
  button:hover {
    color: white;
    background-color: $color-primary;
    transition: ease 0.3s;
  }
  .social {
    // background-color: $color-tertiary;
    background-color: transparent;
    margin-bottom: 100px;
    h2 {
      color: black;
    }
    p {
      font-size: 1rem;
      line-height: 1rem;
    }
    .accent {
      background-color: $color-tertiary-2;
      display: none;
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
        background-color: black;
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