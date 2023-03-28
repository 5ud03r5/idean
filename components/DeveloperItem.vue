<template>
    <div class="p-5 max-sm:ml-10 bg-gray-100 rounded-md shadow-xl w-[390px] max-sm:w-full h-max m-2">
        <div class="flex space-x-4">
            <div>
                <img height="50" width="50" :src="profile.avatar_url" class="" />
                <p class="font-bold text-[18px]">{{ profile.name }}</p>
            </div>
            <p
                class="w-[250px] text-center text-[14px] max-sm:h-[60px] max-lg:h-[69px] lg:h-[68px] xl:h-[68px]  overflow-clip break-words ">
                {{
                    profile.bio }}</p>
        </div>
        <div class="flex flex-wrap mt-2">
            <PofileSkillTag v-for="skill in profile.skills" :key="skill" class="pr-2">{{ skill }} </PofileSkillTag>
        </div>
        <div class="flex flex-wrap justify-end mt-3 space-x-2">
            <PofileSocialLinks :github="profile.github" :twitter="profile.twitter" :linkedin="profile.linkedin"
                :youtube="profile.youtube" />
        </div>
    </div>
</template>
<script setup>
defineProps(['profile'])


</script>