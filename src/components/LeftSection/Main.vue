<template>
  <main class="h-[32.5rem] bg-zinc-100 overflow-x-scroll scrollbar-hide">
    <Contact />
    <Languages />
    <ProgrammingLangs />
    <ProgrammingMerits />
  </main>
</template>

<script>
import Contact from "./MainComponents/Contact.vue";
import Languages from "./MainComponents/Languages.vue";
import ProgrammingLangs from "./MainComponents/ProgrammingLangs.vue";
import ProgrammingMerits from "./MainComponents/ProgrammingMerits.vue";
export default {
  name: "Main",
  components: {
    Contact,
    Languages,
    ProgrammingLangs,
    ProgrammingMerits,
  },
};
</script>
