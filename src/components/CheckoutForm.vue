<template>
    <div id="payment-container">
        <h2> Card Information </h2>
        <div class="row">
            <div id="card-number" class="full-width col-12"></div>
        </div>
        <div class="row">
            <input type="text" placeholder="Card Holder Name" class="full-width col-12">
        </div>
        <div class="row">
            <div id="card-expire" class="full width col-6"></div>
            <div id="card-cvc" class="full width col-6"></div>
        </div>
        <div class="row">
            <input type="text" placeholder="Zip Code" id="card-zip" class="full-width col-4">
        </div>
        <div class="row">
            <p class="error"> {{this.error}} </p>
        </div>
        <div class="row">
            <button class="full-width primary" @click="updateParent($event)">Continue</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckoutForm',
    props: ['tickets'],
    data() {
      return {
          stripe: null,
          element: null,
          error: "asdfasdf"
      }  
    },
    mounted() {
        // Create a Stripe client.
        var stripe = Stripe('pk_live_vVGA9MgSP2u4PA439eTEIiBg');
        
        // Create an instance of Elements.
        var elements = stripe.elements();
        var styles = {
            base: {
                fontSize: '19px',
                width: '100%',

                ':focus': {
                    color: 'black',
                },

                '::placeholder': {
                    // primary-color-22
                    color: '#e09b8b',
                },

                ':focus::placeholder': {
                    // primary-color-2
                    color: '#e09b8b',
                },
            },
            invalid: {
                color: '#FA755A',
                ':focus': {
                    color: '#FA755A',
                },
                '::placeholder': {
                    color: '#FA755A',
                },
            },
        };

        // Create an instance of the card Element.
        var number = elements.create('cardNumber', { style: styles });
        var expire = elements.create('cardExpiry', { style: styles });
        var cvc = elements.create('cardCvc', { style: styles });

        number.mount("#card-number");
        expire.mount("#card-expire");
        cvc.mount("#card-cvc");
        
        
        // Store elements for updating
        this.stripe = stripe;
        this.element = number; // Just need one element?
    },
    methods: {
        submit: function() {
            event.preventDefault();
        },

        updateParent: function(event) {
            if (this.formIsFilled()) {
                this.stripe.createToken(this.element).then((result) => {
                    if (result.error) {
                        // Inform the customer that there was an error.
                        this.error = "Your card information was not correct. Please try again."
                        document.querySelector('p.error').classList.add('show');
                        console.log(this.error);
                    } else {
                        // Send the token to your server.
                        this.$emit("changed", result.token.id);
                    }
                });
            } else {
                this.error = "Please fill in all parts of the form."
                document.querySelector('p.error').classList.add('show');
            }
        },
        formIsFilled() {
            var elements = document.querySelectorAll('#payment-container input.full-width');
            console.log(elements[0].value !== "" && elements[1].value !== "");
            return elements[0].value !== "" && elements[1].value !== "";
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
p.callout,
p.footnote {
    margin-bottom: 0px;
    opacity: 0;
    height: 0;
    transition: 250ms all;

    &.show-label {
        opacity: 1;
        height: 1.5em;
    }
}

/* Styling for Stripe element */
.StripeElement {
    box-sizing: border-box;

    height: 40px;
    width: 100%;

    padding: 10px 12px;

    border: 1px solid transparent;
    border-radius: 4px;
    background-color: white;

    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
}

.StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
    border-color: #fa755a;
}

.StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
}

div.row > div.StripeElement {
    border: 1px solid $color-primary;
    height: 48px;
}

div.ElementsApp input.InputElement {
    height: 100% !important;
    font-size: 19px !important;
}

button.full-width {
    margin: 2em 0;
    height: 60px;
}

.form-row {
    width: 100%;
}

#payment-container {
    width: 50%;
    border: 1px solid $color-primary;
    padding: 0.5em 2em;
}

h2 {
    border-bottom: 3px solid $color-primary;
    line-height: 1.5;
}


p.error {
    color: $color-primary;
    font-size: 0.9em;
    line-height: 1;
    margin: 0;
    padding: 0 1em;
    display: none;
}

.show {
    display: block !important;
}

@media (max-width: 1050px) {
    #payment-container {
        width: 80%;
        padding: 1.5em;
    }
}
</style>