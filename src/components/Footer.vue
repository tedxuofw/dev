<template>
  <div class="footer">
    <div class="tagline">
      <p>Step<br/>Forward<br/>Now</p>
    </div>
    <div class="social">
      <h3>Follow Us</h3>
      <div class="social-bubbles">
        <a href="https://facebook.com" target="_blank" class="social-bubble">FB</a>
        <a href="https://instagram.com" target="_blank" class="social-bubble">IG</a>
        <a href="https://youtube.com" target="_blank" class="social-bubble">YT</a>
      </div>
      <button>Get your tickets now</button>
      <p>This independent TEDx event is operated under license from TED ©2019 TEDxUofW</p>
    </div>
    <div class="pages">
      <h3>Pages</h3>
      <a href="/about">About</a>
      <a href="/volunteer">Volunteer</a>
      <a href="/sponsors">Sponsors</a>
    </div>
    <div class="account">
      <h3>Account</h3>
      <a href="/dashboard">Ticketing</a>
      <a href="/dashboard">Speaker Interaction</a>
      <a href="/dashboard">Feedback</a>
      <a href="/dashboard">Dashbard</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
$footer-break: 1000px;

.footer {
  display: flex;
  width: 100%;
  background-color: $color-secondary-2;
  margin-top: 64px;
  padding: 48px 120px;
  box-sizing: border-box;

  @media screen and (max-width: $footer-break) {
    //flex-direction: column;
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
      font-size: 3vw;
      line-height: 1em;
      font-weight: 700;
      text-transform: uppercase;

      @media screen and (max-width: $footer-break) { 
        font-size: 42px;
      }
    }
  }
}

.social-bubbles {
  .social-bubble {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    text-decoration: none;
    background-color: $color-primary-2;
  }
}
</style>
