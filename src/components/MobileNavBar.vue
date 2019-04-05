<template>
    <div>
        <nav id="user-nav">
            <div class="mobile-icons">
                <i id ="hamburger" class="fas fa-bars responsive-nav-element" @click="showMainNav()"></i>
                <i id="icon" class="far fa-user responsive-nav-element" @click="showUserNav()"></i>
            </div>
        </nav>
    </div>
</template>

<script>
import { user } from '../user.js';
export default {
    name: "MobileNavBar",
    props: {
        dashboard: Boolean,
        tickets: Boolean,
        feedback: Boolean
    },
    data () {
        return {
            user: {
                first: user.first(),
                last: user.last(),
                email: user.email(),
                profile: user.profile(),
            }
        }
    },
    methods: {
        showMainNav: function() {
        
        }, 
        showUserNav: function() {
        
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";


div > i {
    margin-left: 16px;
    margin-right: 1em;
}

.mobile-icons {
    display:flex;
    justify-content: space-between;
    margin: 1em;
    width: 100%;
}

.responsive-nav-element {
    color: $color-primary-2;
}

#user-nav {
    align-items: center;
    display: flex;
    background-color: $color-primary;
    height: 100px;
    position: relative;
}

</style>