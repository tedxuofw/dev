<template>
    <div>
        <MobileNavBar :user="this.user" :dashboard="this.dashboard" :tickets="this.tickets" :feedback="this.feedback" v-if="this.mobileView"/>
        <DesktopNavBar :user="this.user" :dashboard="this.dashboard" :tickets="this.tickets" :feedback="this.feedback" v-else/>
    </div>
</template>

<script>
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

export default {
    name: "NavBar",
    components: { DesktopNavBar, MobileNavBar },
    props: {
        dashboard: Boolean,
        tickets: Boolean,
        feedback: Boolean,
        user: Object,
    },
    data() {
        return {
            mobileView: false
        };
    },
    mounted: function() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.recalculateMobileView);
        });
        this.recalculateMobileView();
    },
    methods: {
        recalculateMobileView: function() {
            this.mobileView = window.innerWidth < 600;
        }
    }
}
</script>