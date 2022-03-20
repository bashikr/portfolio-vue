<template>
  <div class="content py-4 h-screen flex flex-row content-start">
    <div class="basis-1/6 mr-8">
      <LeftSideBar />
    </div>
    <div class="basis-3/4 mr-8">
      <Main />
    </div>
    <div class="basis-0.5">
      <RightSideBar />
    </div>
  </div>
</template>

<script>
import Main from "./Main/Wrapper.vue";
import LeftSideBar from "./LeftSidebar/Wrapper.vue";
import RightSideBar from "./RightSideBar.vue";

export default {
  name: "Layout",
  components: {
    Main,
    LeftSideBar,
    RightSideBar,
  },
};
</script>

<style>
.content {
  max-width: 63.3333%;
  margin: auto;
}
</style>
