<template>
    <form action="/charge" method="post" id="payment-form">
        <div class="row">
            <input type="text" placeholder="First Name" class="full-width">
        </div>
        <div class="row">
            <input type="text" placeholder="Last Name" class="full-width">
        </div>
        <div class="form-row">
            <div id="card-element" class="input">
            <!-- A Stripe Element will be inserted here. -->
            </div>

            <!-- Used to display form errors. -->
            <div id="card-errors" role="alert"></div>
        </div>
        <div class="row">
            <input type="text" placeholder="Address Line #1" class="full-width">
        </div>
        <div class="row">
            <input type="text" placeholder="Address Line #2 (Optional)" class="full-width">
        </div>
        <div class="row">
            <input type="text" placeholder="City" class="full-width">
        </div>
        <div class="row">
            <input type="text" placeholder="State" class="full-width">
            <input type="text" placeholder="Zip Code" class="full-width">
        </div>
        <button>Continue to Summary</button>
    </form>
</template>

<script>
export default {
    name: 'CheckoutForm',
    mounted() {
        // Create a Stripe client.
        var stripe = Stripe('pk_test_EsLnXbnCKw4JnlLnQKdTBNyh');

        // Create an instance of Elements.
        var elements = stripe.elements();

        // Custom styling can be passed to options when creating an Element.
        // (Note that this demo uses a wider set of styles than the guide below.)
        var style = {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                },
                border: '1px solid #e62b1e'
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };

        // Create an instance of the card Element.
        var card = elements.create('card', {style: style});

        // Add an instance of the card Element into the `card-element` <div>.
        card.mount('#card-element');
    },
}
</script>

<style lang="scss" scoped>
/* Styling for Stripe element */
.StripeElement {
    box-sizing: border-box;

    height: 40px;

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

#payment-form {
    width: 100%;
}
</style>