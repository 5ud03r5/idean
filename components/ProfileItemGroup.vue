<template>
    <div class="p-5 bg-gray-100 rounded-md shadow-xl w-[390px] h-[180px] m-2">
        <div class="flex space-x-4">
            <div>
                <img height="50" width="50" :src="profile.avatar_url" class="" />
                <p class="font-bold text-[18px]">{{ profile.name }}</p>
            </div>
            <p class="w-[250px] text-center text-[14px] max-lg:h-[69px] lg:h-[69px] xl:h-[68px] overflow-clip ">{{
                profile.bio }}</p>
        </div>
        <div class="flex flex-wrap mt-2">
            <div class="bg-gray-900 text-gray-100 w-max px-2 m-[1px]">VueJS</div>
            <div class="bg-gray-900 text-gray-100 w-max px-2 m-[1px]">NuxtJS</div>
            <div class="bg-gray-900 text-gray-100 w-max px-2 m-[1px]">ReactJS</div>
            <div class="bg-gray-900 text-gray-100 w-max px-2 m-[1px]">JS</div>
            <div class="bg-gray-900 text-gray-100 w-max px-2 m-[1px]">NodeJS</div>

        </div>
        <div class="flex flex-wrap justify-end mt-3 space-x-2">
            <Icon name="logos:github-icon" size="25"></Icon>
            <Icon name="logos:twitter" size="25"></Icon>
            <Icon name="logos:youtube-icon" size="25"></Icon>
            <Icon name="logos:linkedin-icon" size="25"></Icon>
        </div>
    </div>
</template>
<script setup>
defineProps(['profile'])


</script>