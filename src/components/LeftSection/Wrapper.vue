<template>
    <div
        class="h-full border shadow-md shadow-slate-500 overflow-x-scroll scrollbar-hide w-full"
    >
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
    components: {
        Header,
        Main,
        Footer,
    },
};
</script>
