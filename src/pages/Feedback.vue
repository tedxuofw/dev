<template>
    <div>
        <Loading v-if="this.loading"/>
        <NavBar feedback :user="user"/>
        <main>
            <h1> Give Feedback </h1>
            <p> We'd love to hear your thoughts! You should hear back from TEDxUofW within 48 hours. </p>
            <div class="col-12 responsive">
                <div class="row card-row">
                    <div class="col-12 responsive"> 
                        <div class="header"> Tell us what you think: </div>
                        <div class="card-container">
                            <input v-model="subject" type="text" placeholder="Subject" class="full-width">
                            <textarea v-model="message" class="card-body" placeholder="Type your message here..."/>                        
                            <p v-if='this.error != ""' class="error"> {{this.error}}</p>
                        </div>
                        <button class="primary full-width" @click="sendEmail()">Continue</button>
                    </div>
                </div>
            </div>
        </main>
    </div> 
</template>

<script>
import { user } from '../user.js';
import NavBar from "@/components/NavBar";
import Loading from "@/components/Loading";
import axios from 'axios';

export default {
    name: "HomePage",
    data () {
        return {
            user: {
                first: user.first(),
                last: user.last(),
                email: user.email(),
                profile: user.profile(),
            },
            subject: '',
            message: '',
            loading: false,
            error: ''
        }
    },
    components: { NavBar, Loading }, 
    methods: {
        sendEmail() {
            if (this.message != '' && this.subject != '') {
                let params = {
                    subject: this.subject,
                    message: 'From ' + user.email() + ':\n' + this.message
                };
                this.loading = true;
                let url = "https://students.washington.edu/tedxuofw/index.php/api/email";
                axios.get(url, { params: params }).then((response)  =>  {
                    this.loading = false;
                    var resp = response.data;
                    if(resp.status === "success") {
                        alert('success');
                    } else {
                        // User Error
                        this.error = 'There was an error sending your feedback.'

                        // Error message
                        var message = resp.message;
                        console.log(message);
                    }
                }, (error)  =>  {
                    this.loading = false;
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
            } else {
                this.error = 'Please fill all parts of the form before submitting.'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.error {
    text-align: left;
    width: 100%;
    color: $color-primary;
    margin: 0;
}

main {
    margin-left: 200px;
    padding: 1em 3em;
    height: 100%;
}

h1 {
    font-weight: 300;
    margin-left: 48px;
}

main > p {
    margin-left: 48px;
}

.card-body {
    padding: 1em;
    height: 200px;
    width: 100%;
}

div button {
    margin-top: 0.5em;
}

.header {
    border-bottom: 4px solid red;
    font-size: 1.25em;
}

.card-row {
    height: 60%;
    margin-bottom: 1em;
}

.card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 85%;
}

textarea {
    border-radius: 4px;
    font-size: 1em;
    resize: none;
}

@media (max-width: 600px) {
    main {
        margin-left: 0;
    }
}


@media (max-width: 750px) {
    .card-container {
        padding: 0.9em 0;
    }

    h1, main > p {
        margin-left: 16px;
    }

    .responsive {
        margin-left: 0;
    }
}


</style>