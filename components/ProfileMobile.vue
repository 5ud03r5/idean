<template>
    <div class="fixed top-0 flex w-full p-2 bg-gray-100 shadow-xl">
        <div class="flex items-center mx-auto text-center max-sm:justify-center sm:space-x-2 max-sm:flex-col w-max">
            <div class="flex items-center space-x-2">
                <img height="40" width="40" :src="avatar" />
                <div class="flex flex-col">
                    <label class="font-semibold ">{{ username }}</label>
                    <label class="text-[8px]">Developer</label>
                </div>
            </div>
            <div class="flex flex-col space-y-1 max-sm:items-center">
                <div class="flex flex-wrap items-center mt-2">
                    <div class="bg-gray-900 text-gray-100 w-max text-[8px] px-1 m-[1px]">VueJS</div>
                    <div class="bg-gray-900 text-gray-100 w-max text-[8px] px-1 m-[1px]">NuxtJS</div>
                    <div class="bg-gray-900 text-gray-100 w-max text-[8px] px-1 m-[1px]">ReactJS</div>
                    <div class="bg-gray-900 text-gray-100 w-max text-[8px] px-1 m-[1px]">JS</div>
                    <div class="bg-gray-900 text-gray-100 w-max text-[8px] px-1 m-[1px]">NodeJS</div>
                </div>

                <div class="flex flex-wrap space-x-1">
                    <Icon name="logos:github-icon" size="15"></Icon>
                    <Icon name="logos:twitter" size="15"></Icon>
                    <Icon name="logos:youtube-icon" size="15"></Icon>
                    <Icon name="logos:linkedin-icon" size="15"></Icon>
                </div>
            </div>


        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    username: String,
    avatar: String,
    bio: String,
})



</script>