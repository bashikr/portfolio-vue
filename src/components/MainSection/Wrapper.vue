<template>
  <div class="w-full h-full md:overflow-x-scroll  md:scrollbar-hide">
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
