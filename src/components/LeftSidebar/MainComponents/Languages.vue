<template>
  <div class="p-5 text-sm">
    <div class="pb-10 border-b-2 border-slate-300">
      <div class="flex items-center">
        <div class="mr-7">
          <CircleProgress
            :percent="80"
            size="60"
            border-width="5"
            border-bg-width="5"
            show-percent="true"
          />
          <p class="text-sm pt-4 pl-1 float-left">Swedish</p>
        </div>
        <div class="pr-6">
          <CircleProgress
            :percent="100"
            size="60"
            border-width="5"
            border-bg-width="5"
            show-percent="true"
          />
          <p class="text-sm pt-4 pl-3 float-left">Arabic</p>
        </div>
        <div>
          <CircleProgress
            :percent="80"
            size="60"
            border-width="5"
            border-bg-width="5"
            show-percent="true"
          />
          <p class="text-sm pt-4 pl-3 float-left">English</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
  name: "Languages",
  components: { CircleProgress },
};
</script>
