<template>
  <div class="w-full">
    <About />
    <Education />
    <Projects />
  </div>
</template>

<script>
import Education from "./MainComponents/Education.vue";
import About from "./MainComponents/About.vue";
import Projects from "./MainComponents/Projects.vue";
export default {
  name: "Main",
  components: {
    Education,
    About,
    Projects,
  },
};
</script>
