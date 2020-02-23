<template>
<h1>Hey there</h1>
</template>

<script>
import ConferencePage from "@/components/ConferencePage";
import * as emailjs from 'emailjs-com';
import axios from 'axios';
const STATES = {
  "NOT_SUBMITTED": 0,
  "LOADING": 1,
  "SUCCESS": 2,
  "ERROR": 3
}
export default {
  name: "ContactPage",
  components: { ConferencePage },
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
    },
    verify() {
      let url = "https://students.washington.edu/tedxuofw/index.php/api/verify?" + window.location.href.split('?')[1]
      console.log(url);
      axios.get(url, { params: this.form }).then((response) => {
        this.$emit("loading");
        var resp = response.data;
        if (resp.status === "success") {
          console.log(resp);
          console.log("Successfully verified account");
          user.login(resp.token);
          router.push('/dashboard');
        } else {
          var message = resp.message;
          console.log(response.data);
        }
      }, (error)  =>  {
        this.$emit("loading");
        // There was an error with the way the request was made!
        // This is really bad (either the API broke or more likely
        // the frontend isn't properly validating the input)
        var err = error.response;
        console.log(err);
        if(err.status == 422) {
            // Did not properly validate the input before sending (e.g. missing field)
        }
        
        alert("Error " + error.response.status + ": There was an error processing your request. Please contact tedxuofw@uw.edu.");
      });
    }
  },
  beforeMount(){
    console.log("beforeMount");
    this.verify()
    console.log("beforeMount ended");
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
