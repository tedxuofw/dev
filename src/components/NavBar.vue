<template>
    <div>
        <MobileNavBar :user="this.user" :dashboard="this.dashboard" :tickets="this.tickets" :feedback="this.feedback"/>
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
        user: Object
    },
}
</script>