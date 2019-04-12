<template>
    <div>
        <NavBar dashboard :user="user"/>
        <main>
            <h1> Welcome, {{ user.first }}! </h1>
            <div class="col-12">
                <div class="row card-row">
                    <div class="col-4"> 
                        <div class="header"> Profile </div>
                        <div class="card-container">
                            <div class="card-body"> 
                                <div class="card-child">
                                    <img :src="user.profile"/>
                                </div>
                                <p class="name card-child"> {{ user.first }} {{ user.last }} </p>
                                <p class="card-child email"> {{ user.email }} </p>
                                <div class="card-child">
                                    <button class="secondary" @click="triggerModal()"> View Profile </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-8"> 
                        <div class="header"> Your Tickets </div>
                        <div class="card-container" v-if="!hasTickets">
                            <div class="card-body tickets">
                                <p class="warning card-child"> You don't have any purchased tickets yet. </p>
                                <div class="card-child"  >
                                    <a href="/#/checkout"> <button class="secondary"> Get Tickets </button> </a>
                                </div>
                            </div>
                        </div>
                        <div v-else> 
                            <div v-for="ticket in tickets" :key="ticket.id" class="tickets-container">
                                <div class="ticket-stub">
                                    <div class="user-info">
                                        <p class="name"> {{ticket.firstName}} </p>
                                        <p class="email"> {{ticket.email}} </p>
                                    </div>
                                    <div class="ticket-info"> {{ticket.ticket}} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div> 
</template>

<script>
import { user } from '../user.js';
import axios from 'axios';
import NavBar from "@/components/NavBar";
import Loading from "@/components/Loading";

export default {
    name: "Dashboard",
    data () {
        return {
            user: {
                first: user.first(),
                last: user.last(),
                email: user.email(),
                profile: user.profile(),
            },
            hasTickets: false,
            tickets: [],
        }
    },
    components: { NavBar, Loading },
    methods: {
        triggerModal: function() {
            document.querySelector('div.user-modal').classList.toggle('show-modal');
        }
    },
    created() {    
        let ticketParams = {
            token: user.getJWT(),
            event_id: 1
        };

        let rURL = "https://students.washington.edu/tedxuofw/index.php/api/user/tickets";
        axios.get(rURL, { params: ticketParams }).then((response)  =>  {
            var resp = response.data;
            if(resp.status === "success") {
                // Store any information given
                console.log(resp);
                            
                // firstName, email, type
                let temp = [];
                for(var index in resp.tickets) {
                    var t = resp.tickets[index];
                    
                    var c = "Ticket";
                    if(t.costlevel_id == 1) {
                        c = "UW Student Ticket"
                    } else if(t.costlevel_id == 2) {
                        c = "General Ticket"
                    } else if(t.costlevel_id == 11) {
                        c = "UW Student Ticket (discount)"
                    } else if(t.costlevel_id == 12) {
                        c = "General Ticket (discount)"
                    }
                                        
                    temp.push({
                        id: t.id, 
                        firstName: t.name,
                        email: t.email,
                        ticket: c
                    });
                }
                
                this.tickets = temp;
                console.log(this.tickets);
                this.hasTickets = (this.tickets.length > 0);
                console.log(this.hasTickets);
            } else {          
                // Error Response
                var message = resp.message;
                console.log(response.request);
            }
        }, (error)  =>  {
            // Error with Request
            var err = error;
            console.log(err);

            alert("Error " + error.response.status + ": There was an error processing your request. Please contact tedxuofw@uw.edu.");
        });
    }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
main {
    margin-left: 200px;
    padding: 1em 3em;
    height: 100%;
}

h1 {
    font-weight: 300;
    margin-left: 48px;
}

div.col-4 {
    max-height: 500px;
}

div.white {
    background-color: white;
}

.card-body.tickets {
    max-height: 500px;
    overflow-y: scroll;
}

.ticket-stub {
    background-color: $color-secondary-2;
    border-left: 16px solid $color-primary;
    margin-bottom: 1em;
    padding: 0.5em 1em;
}

.ticket-stub p {
    margin: 10px;
}

.ticket-stub .name {
    font-weight: 700;
    font-size: 1.5em;
}

.ticket-stub .ticket-info {
    color: $color-accent;
    text-align: right;
    font-size: 0.75em;
    text-transform: uppercase;
    font-weight: 300;
}

.ticket-stub .user-info {
    border-bottom: 1px solid $color-primary-2;
}

.ticket-stub .email {
    color: $color-primary;
    font-style: italic;
}

.card-body {
    background-color: $color-secondary-2;
    padding: 1em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    flex-wrap: wrap;
    width: 100%;
}

.card-body > div {
    display: flex;
    justify-content: center;
}

.card-body img {
    display: inline-block;
}

.card-body img {
    border-radius: 100%;
    width: 130px;
    height: 130px;
}

.card-body p {
    margin: 0;
}

.card-child {
    width: 100%;
}

.col-4, .col-8 {
    margin-bottom: 2em;
}

div button {
    margin-top: 1.5em;
}

.email {
    font-size: 0.9em;
}

.header {
    border-bottom: 4px solid red;
    font-size: 1.25em;
    margin-bottom: 1em;
}

.card-row {
    height: 60%;
    margin-bottom: 1em;
}

.card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85%;
}

.warning {
    color: $color-primary;
}

.name {
    font-size: 1.25em;
}

@media (max-width: 600px) {
    main, div.row.card-row, div.col-12 {
        margin-left: 0;
    }

    h1 {
        margin-left: 16px;
    }
}

</style>