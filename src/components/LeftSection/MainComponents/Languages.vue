<template>
    <div class="p-5 text-sm">
        <div class="pb-10 border-b-2 border-slate-300">
            <div
                class="flex items-center justify-between sm:mx-12 min-200:mx-8 min-765:mx-2 md:mx-0 lg:mx-5 xl:mx-6"
            >
                <div class="mr-7 md:mr-1">
                    <CircleProgress
                        :percent="80"
                        size="50"
                        class="circle-small"
                        border-width="5"
                        border-bg-width="5"
                        show-percent="true"
                    />
                    <p class="text-sm pt-4 pl-1 md:pl-0 float-left">Swedish</p>
                </div>
                <div class="pr-6 md:pr-1">
                    <CircleProgress
                        :percent="100"
                        size="50"
                        class="circle-small"
                        border-width="5"
                        border-bg-width="5"
                        show-percent="true"
                    />
                    <p class="text-sm pt-4 pl-3 md:pl-2 float-left">Arabic</p>
                </div>
                <div>
                    <CircleProgress
                        :percent="80"
                        size="50"
                        class="circle-small"
                        border-width="5"
                        border-bg-width="5"
                        show-percent="true"
                    />
                    <p class="text-sm pt-4 pl-3 md:pl-1 float-left">English</p>
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
<style scoped>
.circle-small {
    width: 40px;
}
</style>
