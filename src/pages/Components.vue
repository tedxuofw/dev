<template>
  <div class="container components-page">
    <div class="row">
      <div class="col-12">
        <h1 class="super-head">TEDxUofW</h1>
        <div>
          <router-link to="/">Components</router-link> &middot;
          <router-link to="/checkout">Checkout</router-link>
        </div>
        <h1>Grid</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <h2>About the grid</h2>
        <p>This grid is twelve columns wide and has a maximum width of 1260px. The margin between each element in the grid is 32px.</p>
      </div>
      <div class="col-4">
        <h2>Grid configuration</h2>
        <p>However, these are just configurable variables. We can choose any width or column count we'd like and the stylesheet will be configured magically!</p>
      </div>
      <div class="col-4">
        <h2>Implementation</h2>
        <p>See how it's done in /src/styles/_grid.scss</p>
      </div>
    </div>

    <div class="row">
      <div class="col-2">
        <p>Let's make some really narrow columns!</p>
      </div>
      <div class="col-2">
        <p>Let's make some really narrow columns!</p>
      </div>
      <div class="col-2">
        <p>Let's make some really narrow columns!</p>
      </div>
      <div class="col-6">
        <p>And let's make one final really wide column. TEDxUofW is established to bring inspirational and informative TED style talks to the University of Washington.</p>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h2>Type Elements</h2>
        <p>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia.</p>
        <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</p>
        <p>TEDxUofW is established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our organization has sought to give amazing speakers a receptive audience to share their passion. Our all student-run organization has put on a sold-out event for four years in a row, gathering a collection of great creative thinkers, scientific minds, community leaders, and much more.</p>
        <p class="callout">This is a callout</p>
        <p class="footnote">This is a footnote</p>

        <h2>Form Elements</h2>
        <div class="example-container">
          <p class="spacer">Join our mailing list to learn more about TEDxUofW!</p>
          <input type="email" v-model="emailAddress" placeholder="Email" class="full-width">
          <button @click="emailSignUp()" class="full-width">Sign up</button>
        </div>

        <div class="example-container button-set sign-in-set">
          <button>Sign in</button>
          <button class="secondary">Sign up</button>
        </div>

        <div class="example-container">
          <input type="text" placeholder="First Name" class="full-width">
          <input type="text" placeholder="Last Name" class="full-width">
          <input type="email" placeholder="Email" class="full-width">
          <input type="password" placeholder="Password" class="full-width">
          
          <label>
            <input type="checkbox">
            <span>I am a current UW student</span>
          </label>
          
          <a href="#" class="spacer">Forgot your password?</a>
          
          <button class="full-width">Sign up</button>
        </div>

        <h2>Tabs</h2>
        <tab-set :secondary="tabSecondary">
          <tab-option :selected="tabIndex == 0" :click="() => { tabIndex = 0 }" :secondary="tabSecondary">Conference</tab-option>
          <tab-option :selected="tabIndex == 1" :click="() => { tabIndex = 1 }" :secondary="tabSecondary">Speakers</tab-option>
          <tab-option :selected="tabIndex == 2" :click="() => { tabIndex = 2 }" :secondary="tabSecondary">Sponsors</tab-option>
          <tab-option :click="() => { tabIndex = 3 }" :secondary="tabSecondary" container>
            <button class="primary-2 no-margin full-width">Sign in</button>
          </tab-option>
        </tab-set>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <p>For the tab set, you've selected tab index
          <b>{{ tabIndex }}</b>!
        </p>
      </div>
      <div class="col-6">
        <p>
          <label>
            <input type="checkbox" v-model="tabSecondary">
            <span>Tab set secondary style.</span>
          </label>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TabSet from "@/components/TabSet";
import TabOption from "@/components/TabOption";
export default {
  name: "ComponentsPage",
  components: { TabSet, TabOption },
  data() {
    return {
      emailAddress: "",
      tabIndex: 0,
      tabSecondary: false
    };
  },
  methods: {
    emailSignUp() {
      if (!this.emailAddress) {
        alert("No email address entered!");
      } else {
        alert(`Thank you for registering: ${this.emailAddress}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.example-container {
  max-width: 500px;
  border: 1px dashed $color-secondary;
  padding: 16px 32px;
  margin: 16px;
}

.sign-in-set {
  width: 300px;
  max-width: 100%;
}

.spacer {
  display: block;
  margin: 8px 0;
}
</style>
