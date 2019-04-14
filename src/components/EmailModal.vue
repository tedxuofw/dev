<template>
    <div class="email-modal">
        <div class="email-modal-content">
            <h2>Thank you!</h2>
            <p> Your feedback has been sent to TEDxUofW. We appreciate your input to help make our conference better. <br/> <br/> You should receive a response from TEDxUofW at <a> {{user.email}} </a> within 48 hours. </p>

            <div class="buttons">
                <button @click="this.closeModal" class="primary full-width"> Cancel </button>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../router";
export default {
    name: "EmailModal",
    props: {
        user: Object
    },
    methods: {
        closeModal: function() {
            document.querySelector('div.email-modal').classList.remove('show-modal');
            router.push('/dashboard');
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.buttons {
    display: flex;
    justify-content: flex-end;
}

.buttons button:first-child {
    margin-right: 1em;
}

h2 {
    border-bottom: 2px solid $color-primary;
    font-weight: 300;
    line-height: 2;
    margin: 0;
    margin-bottom: 1em;
}

.email-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 0;
    visibility: hidden;
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
    z-index: 1;
}

.email-modal-content {
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
    left: 57%;
    padding: 1rem;
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
}

p.col-12 {
    margin: 0 16px;
}

.show-modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
}

@media (max-width: 600px) {
    .buttons {
        margin-top: 1em;
    }

    .email-modal-content {
        width: 80%;
        left: 50%;
    }
}
</style>