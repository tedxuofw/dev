
<<template>
  <ConferencePage :selectedIndex="5">
    <div class="outer">
      <div class="position">
        <iframe class="video" src="https://www.youtube.com/embed/TDDeGxZBCDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
        <h3> SCHEDULE OF EVENTS: </h3>
        <div class="break">
          <h1> INTRODUCTION</h1>
        </div>
        <div class="speaker" >
          <div class="left">
            <h1> SPEAKER: SAMER FOUD</h1> 
            <h2> Comfort Kills Creativity </h2> 
          </div>

          <div class="right">
            <a target="_blank"  style="color: #FFFFFF" href="/static/pdf/SAMER.pdf">
          <h4> TRANSCRIPT </h4>
          </a>
          </div>
        </div>
        <div class="speaker" >
          <div class="left">
            <h1> SPEAKER: WHITNEE HAWTHORNE</h1>
            <h2> What Corporate America Needs to Know About Working Moms</h2>
          </div>
          <div class="right">
            <a target="_blank" style="color: #FFFFFF" href="/static/pdf/WHITNEE.pdf">
          <h4> TRANSCRIPT </h4>
          </a>
          </div>
        </div>
        <div class="speaker" >
          <div class="left">
            <h1> SPEAKER: ASHLEE MCGIRT</h1>
            <h2> Understanding and Healing from Racial Trauma</h2>
          </div>
          <div class="right">
            <a target="_blank" style="color: #FFFFFF" href="/static/pdf/SAMER.pdf">
          <h4> TRANSCRIPT </h4>
          </a>
          </div>
        </div>
        <div class="presenter">
          <h1> PERFORMER: LIV VICTORINO </h1>
          <h2> Original Song - "Sheer Force of Will"</h2>
        </div>
        <div class="break">
          <h1> 5 MINUTE BREAK</h1>
        </div>
        <div class="speaker" >
          <div class="left">
            <h1> SPEAKER: CRISTINA SCHEPPELMANN</h1>
            <h2> The Power of the Opera</h2>
          </div>
          <div class="right">
            <a target="_blank" style="color: #FFFFFF" href="/static/pdf/SAMER.pdf">
          <h4> TRANSCRIPT </h4>
          </a>
          </div>
        </div>
        <div class="speaker" >
          <div class="left">
            <h1> SPEAKER: DAGAN KEY</h1>
            <h2> Surplus Food: Why I'm an Optomist About Climate Change</h2>
          </div>
          <div class="right">
            <a target="_blank"  style="color: #FFFFFF" href="/static/pdf/SAMER.pdf">
          <h4> TRANSCRIPT </h4>
          </a>
          </div>
        </div>
        <div class="break">
          <h1> 10 MINUTE BREAK</h1>
        </div>
        <div class="speaker" >
          <div class="left">
            <h1> SPEAKER: CASEY DRIER</h1>
            <h2> The Space Race in Your Own Backyard </h2>
          </div>
          <div class="right">
            <a target="_blank" style="color: #FFFFFF" href="/static/pdf/SAMER.pdf">
          <h4> TRANSCRIPT </h4>
          </a>
          </div>
        </div>
        <div class="presenter">
          <h1> PERFORMER: UNPLUGGED </h1>
          <h2> Musical Performance</h2>
        </div>
        <div class="speaker" >
          <div class="left">
            <h1> SPEAKER: DEE DWYER</h1>
            <h2> Humanity at the Forefront of Photojournalism</h2>
          </div>
          <div class="right">
            <a target="_blank"  style="color: #FFFFFF"  href="/static/pdf/SAMER.pdf">
          <h4> TRANSCRIPT </h4>
          </a>
          </div>
        </div>
        <div class="speaker" >
          <div class="left">
            <h1> SPEAKER: AIDEN KEY</h1>
            <h2> The Heart of the Matter</h2>
          </div>
          <div class="right">
            <a target="_blank"  style="color: #FFFFFF"  href="/static/pdf/SAMER.pdf">
          <h4> TRANSCRIPT </h4>
          </a>
          </div>
        </div>
        <div class="presenter">
          <h1> PERFORMER: LIV VICTORINO </h1>
          <h2> Original Poem</h2>
        </div>
        <div class="break">
          <h1> 5 MINUTE BREAK</h1>
        </div>
        <div class="speaker" >
          <div class="left">
            <h1> SPEAKER: KATHLEEN BOGART</h1>
            <h2> The Psychology of Ableism</h2>
          </div>
          <div class="right">
            <a target="_blank" style="color: #FFFFFF"  href="/static/pdf/SAMER.pdf">
          <h4> TRANSCRIPT </h4>
          </a>
          </div>
        </div>
        <div class="speaker" >
          <div class="left">
            <h1> SPEAKER: LEXI WALLS</h1>
            <h2> The Future of Pandemic Preparedness</h2>
          </div>
          <div class="right">
            <a target="_blank" style="color: #FFFFFF"  href="/static/pdf/SAMER.pdf">
          <h4> TRANSCRIPT </h4>
          </a>
          </div>
        </div>
        <div class="break">
          <h1> CLOSING</h1>
        </div>
        </div>
      </div>
      <!--   
      <div class="column1">
        <img src="static/speakers_2021_background_lower_res.png" class="img" alt="background image" >
      </div>
      -->
      <!--
      <div class="column2">
        <img src="static/schedule.png" class="img2" alt="schedule of events">
      </div>
      -->

    
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

.outer {
  width:100%;
  height: 380vh;
  background-color: #F5C26A;

  /*.img{
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }*/
  
}

.position{
  padding-top: 5vw;
  padding-left: 4%;
}
.video{
    //width: 50vw;
    // padding-left: 22vw;
    // padding-top: 10vh;   
    // min-width: 100%; 
    // min-height: 100%;
    // background-size: cover;
    // overflow: hidden;
    width: 89vw;
    height: 89vh;
    
  }

.speaker{
  background-color: #e62b1e;
  width: 89vw;
  height: 17vh;
  color: white;
  font-size: 10vw;
  border-color: black;
  border-style: solid;
  border-width: 3px;
  border-radius: 1%;
  margin: 10px;
  display:flex;
  justify-content: space-between;
  .right{
    text-align: right;
    
    //position: relative;
    //float: right;

  }
  
  
}

.break{
  background-color: maroon;
  width: 89vw;
  height: 8vh;
  color: white;
  font-size: 10vw;
  border-color: black;
  border-style: solid;
  border-width: 3px;
  border-radius: 1%;
  margin: 10px;
}

h3{
  padding-left: 1vw;
  font-size: 5vh;
  color: white;
}
h1 {
    font-size: 2.5vh;
    //padding-top: 0.5vw;
    padding-left: 0.5vw;
    padding-bottom: -0.5vw;
}
a {
    font-size: 1.5vh;
    text-align: right;
    // padding-top: 0.5vw;
    // padding-right: 0.8vw;
    // padding-left: 0.5vw;
    // padding-bottom: -0.5vw;
    h4{
      //padding-left: 0.5vw;
      font-size: 2.5vh;
      padding-right: 3vw;
      color: white;
      // padding-right: 1.5vw;
      padding-top: -20vh;

  }
}

h2 {
  //padding-bottom: 0.5vw;
  padding-left: 0.5vw;
  font-size: 1.6vh;
}




.presenter {
  background-color: lightblue;
  width: 89vw;
  height: 12vh;
  color: white;
  font-size: 10vw;
  border-color: black;
  border-style: solid;
  border-width: 3px;
  border-radius: 1%;
  margin: 10px;
}




.iframe{
  width:50 vw;
}




</style>
