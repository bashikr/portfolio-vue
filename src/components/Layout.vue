<template>
    <div
        class="sm:py-0 md:py-4 h-screen content-start flex flex-col md:flex-row xl:max-w-[73.3333%] lg:max-w-[98.3333%] m-auto md:max-w-[93.3333%]"
    >
        <div
            class="flex items-center justify-center md:flex-none md:w-1/3 min-765:w-[28%] min-1030:w-[26%] lg:w-64 xl:w-1/4 lg:mr-3 md:mr-0"
        >
            <LeftSideBar />
        </div>
        <div
            class="md:mr-5 lg:mr-7 xl:mr-3 sm:mr-0 min-h-screen md:flex-none md:ml-3 lg:ml-3 md:w-1/2 min-765:w-[60%] min-1030:w-[62%] min-1250:w-[63%] lg:w-4/6 xl:w-9/12 xl:ml-0"
        >
            <Main />
        </div>
        <div >
            <RightSideBar />
        </div>
    </div>
</template>

<script>
import Main from "./MainSection/Wrapper.vue";
import LeftSideBar from "./LeftSection/Wrapper.vue";
import RightSideBar from "./RightSection/RightSideBar.vue";

export default {
    name: "Layout",
    components: {
        Main,
        LeftSideBar,
        RightSideBar,
    },
};
</script>
