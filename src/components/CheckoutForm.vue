<template>
    <div id="payment-container">
        <h2> Card Information </h2>
        <form action="/charge" method="post" id="payment-form">
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
                <button class="full-width">Continue</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CheckoutForm',
    mounted() {
        // Create a Stripe client.
        var stripe = Stripe('pk_test_EsLnXbnCKw4JnlLnQKdTBNyh');

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
                    // primary-color-2
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

        document.querySelector("form").addEventListener('submit', function(event) {
            event.preventDefault();

            if (validInput()) {
                stripe.createToken(number, { zip: document.getElementById("card-zip").value })
                    .then(function(result) {
                        console.log(result);
                    }).catch(function(error) {
                        console.log(error);
                    });
            } else {
                alert("u didn't fill out all the boxes shit bag");
            }
        });
    },
    methods: {
        submit: function(event) {
            console.log(event);
            alert(event);
            event.preventDefault();
        }
    }
}

function validInput() {
    var inputs = document.querySelectorAll("input");
    var errors = 0;
    inputs.forEach(element => {
        console.log(element);
        console.log(element.value);
        if (!element.value) {
            errors++;
        } else if (element.checkValidity && !element.checkValidity()) {
            errors++;
        }
    });

    return errors == 0;
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
    width: 40%;
    border: 1px solid $color-primary;
    padding: 0.5em 2em;
}

h2 {
    border-bottom: 3px solid $color-primary;
    line-height: 1.5;
}
</style>