<template>
    <div class="w-full h-screen min-765:overflow-x-scroll scrollbar-hide">
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import Main from "./Main.vue";
import Footer from "./Footer.vue";

export default {
    name: "Wrapper",
    components: {
        Header,
        Main,
        Footer,
    },
};
</script>
