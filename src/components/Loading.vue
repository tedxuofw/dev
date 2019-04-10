<template>
    <div id='loading-container'>
        <img src='../assets/spinner.gif'/>
    </div>
</template>

<script>
export default {
    name: 'Loading',
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

#loading-container {
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: absolute;
    width: 100vw;
    z-index: 100;
}

#loading-container img {
    height: 150px;
    width: auto;
}

</style>