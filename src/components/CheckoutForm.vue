<template>
    <form id="payment-container">
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
            <button class="full-width primary" @click="updateParent($event)">Continue</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'CheckoutForm',
    props: ['tickets'],
    data() {
      return {
          stripe: null,
          element: null
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
            /*var submit = document.createElement('input');
            submit.type = 'submit';
            submit.style.display = 'none';
            document.querySelector('form').appendChild(submit);
            submit.click();
            submit.remove();*/
            
            this.stripe.createToken(this.element).then((result) => {
                if (result.error) {
                    // Inform the customer that there was an error.
                    alert(result.error);
                } else {
                    // Send the token to your server.
                    this.$emit("changed", result.token.id);
                }
            });
            
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

@media (max-width: 1050px) {
    #payment-container {
        width: 80%;
        padding: 1.5em;
    }
}
</style>