<template>
    <div class="tmp">
        <h1>Test Page</h1>
        <p>This is a test page used for the development of the TEDxUofW website. If you arrived here, but didn't mean to, then head back to our home page!</p>
        
        <center>
            <p>{{test}}</p>
            <button class="primary" v-on:click="load"> Load </button>
        </center>
    </div>
</template>

<script>
import { globalStore } from '../main.js';
    
export default {
    name: "TestPage",
    components: { },
    data() {
        return {
            test: globalStore.all(),
        };
    },
    methods: {
        load: function() {
            this.test = globalStore.all();
            console.log(this.test);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";


</style>
