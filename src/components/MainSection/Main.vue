<template>
  <div class="w-full">
    <Education />
    <WorkExperience />
    <Recommendations />
  </div>
</template>

<script>
import Education from "./MainComponents/Education.vue";
import WorkExperience from "./MainComponents/WorkExperience.vue";
import Recommendations from "./MainComponents/Recommendations.vue";
export default {
  name: "Main",
  components: {
    Education,
    WorkExperience,
    Recommendations,
  },
};
</script>
