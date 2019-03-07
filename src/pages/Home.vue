<template>
    <div>
        <SideNavBar/>
        <main>
            <h1> Welcome, Christina! </h1>
            <div class="col-12">
                <div class="row card-row">
                    <div class="col-4"> 
                        <div class="header"> Profile </div>
                        <center class="card-container">
                            <div class="card-body"> 
                                <img src="https://fcbk.su/_data/stickers/shiba_inu/shiba_inu_12.png"/>
                                <p class="name"> Christina Buckman </p>
                                <p> cbe2019@uw.edu </p>
                                <button class="secondary"> View Profile </button>
                            </div>
                        </center>
                    </div>
                    <div class="col-8"> 
                        <div class="header"> Your Tickets </div>
                        <center class="card-container">
                            <div class="card-body"> 
                                <p class="warning"> You don't have tickets for TEDx2019 yet. </p>
                                <button class="secondary"> Get Tickets </button>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import SideNavBar from "@/components/SideNavBar";

export default {
  name: "HomePage",
  components: { SideNavBar }
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
    font-weight: 100;
}

.card-body {
    background-color: $color-secondary-2;
    padding: 1em;
    height: 100%;
}

.card-body img {
    display: inline-block;
}

.card-body img {
    border-radius: 100%;
    width: 130px;
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
    height: 85%;
}

.warning {
    color: $color-primary;
}

.name {
    font-size: 1.25em;
}

</style>