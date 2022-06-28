<template>
    <Layout />
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
    name: "App",
    components: {
        Layout,
    },
};
</script>
<style>
#app {
    font-family: "mono", "Roboto", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #e0e0e6;
    padding-bottom: 20px;
}

body {
    background-color: #e0e0e6;
}
</style>
