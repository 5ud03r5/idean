<template>
    <div class=" flex flex-col p-2 text-gray-900 bg-gray-100 rounded-md shadow-lg h-[250px] relative z-[100px]">
        <div class="flex ">
            <h1 class="text-[20px] font-semibold truncate">{{ title }}</h1>

        </div>
        <div class="p-2 break-all max-h-[80px] overflow-clip">
            {{ description }}
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


        <div class="">
            <div class="  max-md:text-[12px] w-max bottom-2 right-2 absolute flex max-sm:flex-col">
                <div v-if="lfDev"
                    class="px-3 py-1 m-1 text-gray-100 bg-gray-800 rounded-md max-lg:m-1 hover:cursor-pointer hover:bg-gray-700">
                    LFDev</div>
                <div v-if="lfHelp"
                    class="px-3 py-1 m-1 text-gray-100 bg-gray-800 rounded-md max-lg:m-1 hover:cursor-pointer hover:bg-gray-700">
                    LFHelp</div>
                <div v-if="devStarted"
                    class="px-3 py-1 m-1 text-gray-100 bg-gray-800 rounded-md max-lg:m-1 hover:cursor-pointer hover:bg-gray-700">
                    Started</div>
            </div>

        </div>
    </div>
</template>

<script setup>
defineProps(['github', 'workers', 'idea_owner', 'title', 'lfDev', 'lfHelp', 'devStarted', 'description'])

</script>