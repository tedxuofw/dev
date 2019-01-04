<template>
    <div class="hello">
        <h1 class="super-head">Components</h1>
        <h1>TEDxUofW</h1>

        <h2>Type Elements</h2>
        <p>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia.</p>
        <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</p>
        <p>TEDxUofW is established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our organization has sought to give amazing speakers a receptive audience to share their passion. Our all student-run organization has put on a sold-out event for four years in a row, gathering a collection of great creative thinkers, scientific minds, community leaders, and much more.</p>
        <p class="callout">This is a callout</p>
        <p class="footnote">This is a footnote</p>

        <h2>Form Elements</h2>
        <div class="example-container">
            <p>Sign up to learn more about TEDxUofW!</p>
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
                <input type="checkbox" />
                <span>I am a current UW student</span>
            </label>

            <a href="#">Forgot your password?</a>

            <button class="full-width">Register</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            emailAddress: ''
        }
    },
    methods: {
        emailSignUp() {
            if(!this.emailAddress) {
                alert('No email address entered!');
            }
            else {
                alert(`Thank you for registering: ${this.emailAddress}`);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
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
</style>
