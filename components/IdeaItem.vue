<template>
    <div class=" flex flex-col p-2 text-gray-900 bg-gray-100 rounded-md shadow-lg h-[250px] relative z-[100px]">
        <div class="flex ">
            <h1 class="text-[20px] font-semibold truncate">{{ title }}</h1>

        </div>
        <div class="p-2 break-all max-h-[80px] overflow-clip">
            {{ description }}
        </div>
        <div v-if="idea_owner_name">
            <Icon name="iconoir:user-crown"></Icon><span class="text-[12px]"> {{ idea_owner_name }}</span>
        </div>
        <div>
            <Icon name="material-symbols:supervisor-account"></Icon><span class="text-[12px]">{{ workers }}</span>
        </div>

        <a v-if="github" :href="github" target="_blank" class="w-max">
            <Icon name="logos:github-icon"></Icon><span class="text-[12px] ">
                Github</span>
        </a>
        <PofileEditButton v-if="!githubEdit && user.id === idea_owner_id" class="w-max max-sm:text-[8px]"
            @click="githubEdit = true" :text="'edit github '">
        </PofileEditButton>




        <input v-if="githubEdit" v-model="githubInside"
            class="max-sm:w-full w-[150px] text-[12px] mt-2 px-2 py-1 outline outline-1 rounded-md "
            :class="!githubValid ? 'outline-red-600 bg-red-100' : ' focus:bg-gray-900 outline-black hover:outline-none focus:outline-none bg-gray-900 text-white'"
            @blur="editGithub" />

        <div class="">
            <div class="max-sm:text-[8px] w-max bottom-2 right-2 absolute flex ">
                <div v-if="lfDev"
                    class="max-sm:px-1 px-3 py-1 m-1 text-gray-100 bg-gray-800 rounded-md max-lg:m-[1px] hover:cursor-pointer hover:bg-gray-700">
                    LFDev</div>
                <div v-if="lfHelp"
                    class="max-sm:px-1 px-3 py-1 m-1 text-gray-100 bg-gray-800 rounded-md max-lg:m-[1px] hover:cursor-pointer hover:bg-gray-700">
                    LFHelp</div>
                <div v-if="devStarted"
                    class="max-sm:px-1 px-3 py-1 m-1 text-gray-100 bg-gray-800 rounded-md max-lg:m-[1px] hover:cursor-pointer hover:bg-gray-700">
                    Started</div>
            </div>

        </div>
    </div>
</template>

<script setup>
const props = defineProps(['github', 'workers', 'idea_owner_id', 'idea_owner_name', 'title', 'lfDev', 'lfHelp', 'devStarted', 'description'])
const emit = defineEmits(['update:github'])
const githubInside = ref(props.github)
const githubEdit = ref(false)
const githubValid = ref(true)
const canEdit = ref(false)
const user = useSupabaseUser()

const editGithub = () => {
    if (githubInside.value.match(/https\:\/\/.*github\.\w{1,3}/)) {
        githubValid.value = true
        emit('update:github', githubInside.value)
        githubEdit.value = false
    } else {
        githubValid.value = false
    }

}


</script>