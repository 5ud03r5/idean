<template>
    <div class="p-2 text-gray-900 bg-gray-100 rounded-md shadow-lg h-max">
        <div class="flex ">
            <h1 class="text-[20px] font-semibold truncate">{{ title }}</h1>

        </div>
        <div>
            <Icon name="iconoir:user-crown"></Icon><span class="text-[12px]"> {{ idea_owner }}</span>
        </div>
        <div>
            <Icon name="material-symbols:supervisor-account"></Icon><span class="text-[12px]">{{ workers }}</span>
        </div>
        <a :href="github" target="_blank">
            <Icon name="logos:github-icon"></Icon><span :class="!github && 'line-through'" class="text-[12px]">
                Github</span>
        </a>


        <div class="flex justify-end flex-wrap px-1 pt-2 md:space-x-2 max-md:text-[12px]">
            <div v-if="lfDev"
                class="px-3 py-1 text-gray-100 bg-gray-800 rounded-md max-sm:m-1 hover:cursor-pointer hover:bg-gray-700">
                LFDev</div>
            <div v-if="lfHelp"
                class="px-3 py-1 text-gray-100 bg-gray-800 rounded-md max-sm:m-1 hover:cursor-pointer hover:bg-gray-700">
                LFHelp</div>
            <div v-if="devStarted"
                class="px-3 py-1 text-gray-100 bg-gray-800 rounded-md max-sm:m-1 hover:cursor-pointer hover:bg-gray-700">
                Started</div>
        </div>
    </div>
</template>

<script setup>
defineProps(['github', 'workers', 'idea_owner', 'title', 'lfDev', 'lfHelp', 'devStarted'])

</script>