<template>
  <footer class="bg-white drop-shadow-md h-14">
    <div class="flex-auto space-x-4 p-3">
      <a href="https://github.com/bashikr" target="_blank"
        ><fa class="fa-lg" :icon="['fab', 'github']" />
      </a>
      <a href="https://www.linkedin.com/in/bashar-altaleb/" target="_blank"
        ><fa class="fa-lg" :icon="['fab', 'linkedin']"
      /></a>
      <a href="https://discordapp.com/users/623325439619891204/" target="_blank"
        ><fa class="fa-lg" :icon="['fab', 'discord']"
      /></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
