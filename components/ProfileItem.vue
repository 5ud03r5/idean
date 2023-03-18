<template>
    <div class="flex flex-col w-[300px] mt-8">
        <div class=" shadow-xl p-4 w-[250px] rounded-md">
            <div class="bg-gray-200 rounded-full w-max">
                <img height="220" width="220" :src="avatar" />
            </div>
            <div class="flex flex-col  w-[220px] mt-5 p-2 rounded-md items-center">
                <label class="text-[24px] font-semibold">{{ username }}</label>
                <label class="text-[14px]">Developer</label>

                <label class="mt-2 text-center text-gray-800">Working in IT industry since 2017, currenly
                    as a
                    Security
                    Engineer</label>
                <div class="flex flex-wrap justify-center mt-2">
                    <div class="bg-gray-900 text-gray-100 w-max px-2 m-[1px]">VueJS</div>
                    <div class="bg-gray-900 text-gray-100 w-max px-2 m-[1px]">NuxtJS</div>
                    <div class="bg-gray-900 text-gray-100 w-max px-2 m-[1px]">ReactJS</div>
                    <div class="bg-gray-900 text-gray-100 w-max px-2 m-[1px]">JS</div>
                    <div class="bg-gray-900 text-gray-100 w-max px-2 m-[1px]">NodeJS</div>
                </div>

                <div class="flex flex-wrap mt-3 space-x-2 ">
                    <Icon name="logos:github-icon" size="25"></Icon>
                    <Icon name="logos:twitter" size="25"></Icon>
                    <Icon name="logos:youtube-icon" size="25"></Icon>
                    <Icon name="logos:linkedin-icon" size="25"></Icon>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    username: String,
    avatar: String,
})

</script>