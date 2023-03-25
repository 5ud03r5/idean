<template>
    <div class="flex flex-col w-[300px] mt-8">
        <div class=" shadow-xl p-4 w-[250px] rounded-md">
            <div class="bg-gray-200 rounded-full w-max">
                <img height="220" width="220" :src="avatar" />
            </div>
            <div class="flex flex-col  w-[220px] mt-5 p-2 rounded-md items-center">
                <p v-if="!editingName" class="text-[24px] font-semibold">{{ name }}</p>
                <input v-else :value="name" @blur="editName" @input="$emit('newname:name', $event.target.value)"
                    class="py-1 mt-3 px-2 text-[14px] outline-none w-[230px] resize-none rounded-md text-gray-800 bg-gray-200" />
                <div @click="editingName = true" v-if="!editingName"
                    class="px-2 py-1 mt-2 rounded-md outline-1 hover:cursor-pointer text-[12px] hover:bg-gray-200 transition-all outline-gray-900 outline">
                    <span>edit name </span>
                    <Icon name="carbon:edit"></Icon>
                </div>

                <div class="flex space-x-2">
                    <div :class="developer ? 'bg-gray-200' : ''"
                        class="px-2 py-1 mt-2 rounded-md outline-1 hover:cursor-pointer text-[14px] hover:bg-gray-200 transition-all outline-gray-900 outline">
                        Developer</div>
                    <div
                        class="px-2 py-1 mt-2 rounded-md outline-1 hover:cursor-pointer text-[14px] hover:bg-gray-200 transition-all outline-gray-900 outline">
                        Provider</div>

                </div>

                <form v-if="editingBio">
                    <textarea :value="bio" @blur="editBio"
                        class="py-1 mt-3 px-2 text-[14px] outline-none w-[230px] resize-none rounded-md text-gray-800 bg-gray-200"
                        rows="4"></textarea>
                </form>
                <p v-if="!editingBio" class="mt-2 text-center text-gray-800 text-[14px]">{{ bio }}</p>
                <div @click="editingBio = true" v-if="!editingBio"
                    class="px-2 py-1 mt-2 rounded-md outline-1 hover:cursor-pointer text-[12px] hover:bg-gray-200 transition-all outline-gray-900 outline">
                    <span>edit bio </span>
                    <Icon name="carbon:edit"></Icon>
                </div>

                <div class="flex flex-wrap justify-center mt-2">
                    <div v-for="skill in skills" :key="skill"
                        class="bg-gray-900 text-gray-100 w-max pl-2 pr-1 rounded-md justify-center m-[1px]">{{ skill
                        }}
                        <Icon size="20" @click="updateSkills(skill)" class="mb-[2px] hover:cursor-pointer"
                            name="ion:md-close-circle-outline" />
                    </div>
                </div>
                <div @click="addingSkill = true" v-if="!addingSkill"
                    class="px-2 py-1 mt-2 rounded-md outline-1 hover:cursor-pointer text-[12px] hover:bg-gray-200 transition-all outline-gray-900 outline">
                    <span>add skill </span>
                    <Icon name="carbon:edit"></Icon>
                </div>
                <input v-else @blur="addSkill"
                    class="py-1 mt-3 px-2 text-[14px] outline-none w-[230px] resize-none rounded-md text-gray-800 bg-gray-200" />

                <div v-if="!editingSocial" class="flex flex-wrap mt-3 space-x-2 ">
                    <a v-if="github" :href="github" target="_blank">
                        <Icon name="logos:github-icon" size="25"></Icon>
                    </a>
                    <a v-if="twitter" :href="twitter" target="_blank">
                        <Icon name="logos:twitter" size="25"></Icon>
                    </a>

                    <a v-if="youtube" :href="youtube" target="_blank">
                        <Icon name="logos:youtube-icon" size="25"></Icon>
                    </a>

                    <a v-if="linkedin" :href="linkedin" target="_blank">
                        <Icon name="logos:linkedin-icon" size="25"></Icon>
                    </a>

                </div>
                <div v-else class="flex flex-col mt-3 ">
                    <input placeholder="Github" :value="github"
                        :class="!githubValid ? 'outline-red-600 bg-red-100' : ' focus:bg-gray-50 outline-gray-200 hover:outline-none focus:outline-none bg-gray-100'"
                        class="px-2 py-1 mt-1 rounded-md outline outline-1 " />
                    <input placeholder="Twitter" :value="twitter" @input="$emit('update:twitter', $event.target.value)"
                        :class="!twitterValid ? 'outline-red-600 bg-red-100' : 'focus:bg-gray-50 outline-gray-200 hover:outline-none focus:outline-none bg-gray-100'"
                        class="px-2 py-1 mt-1 rounded-md outline outline-1 " />
                    <input placeholder="Youtube" :value="youtube" @input="$emit('update:youtube', $event.target.value)"
                        :class="!youtubeValid ? 'outline-red-600 bg-red-100' : 'focus:bg-gray-50 outline-gray-200 hover:outline-none focus:outline-none bg-gray-100'"
                        class="px-2 py-1 mt-1 rounded-md outline outline-1 " />
                    <input placeholder="Linkedin" :value="linkedin" @input="$emit('update:linkedin', $event.target.value)"
                        :class="!linkedinValid ? 'outline-red-600 bg-red-100' : 'focus:bg-gray-50 outline-gray-200 hover:outline-none focus:outline-none bg-gray-100'"
                        class="px-2 py-1 mt-1 rounded-md outline outline-1 " />
                    <div @click="validateLinks"
                        class="px-2 w-max  ml-auto py-1 mt-2 rounded-md outline-1 hover:cursor-pointer text-[12px] hover:bg-gray-200 transition-all outline-gray-900 outline">
                        done</div>
                </div>
                <div @click="editingSocial = true" v-if="!editingSocial"
                    class="px-2 py-1 mt-2 rounded-md outline-1 hover:cursor-pointer text-[12px] hover:bg-gray-200 transition-all outline-gray-900 outline">
                    <span>edit social </span>
                    <Icon name="carbon:edit"></Icon>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    name: String,
    avatar: String,
    bio: String,
    skills: Array,
    github: String,
    linkedin: String,
    youtube: String,
    twitter: String,
    developer: Boolean,
})
const emit = defineEmits(['update:skills', 'newname:name', 'update:name', 'update:bio', 'update:github', 'update:youtube', 'update:twitter', 'update:linkedin', 'updateSocial'])

const editingBio = ref(false)
const editingSocial = ref(false)
const editingName = ref(false)
const addingSkill = ref(false)


const nameValid = ref(true)
const githubValid = ref(true)
const twitterValid = ref(true)
const linkedinValid = ref(true)
const youtubeValid = ref(true)

const addSkill = (event) => {
    if (event.target.value.trim().length > 1) {
        emit('update:skills', props.skills.concat([event.target.value]))
        addingSkill.value = false
    }

}

const updateSkills = (skill) => {
    emit('update:skills', props.skills.filter(item => item !== skill))
}

const editBio = (event) => {
    editingBio.value = false
    emit('update:bio', event.target.value)
}

const editName = (event) => {
    if (props.name.trim().length > 1) {
        emit('update:name', event.target.value)
        editingName.value = false
    } else {
    }

}

const validateLinks = () => {
    if (props.github.trim().length > 0) {
        if (!props.github.match(/https:\/\/.*github\.\w+.*/)) {
            githubValid.value = false
        } else {
            githubValid.value = true
        }
    } else {
        githubValid.value = true
    }
    if (props.twitter.trim().length > 0) {
        if (!props.twitter.match(/https:\/\/.*twitter\.\w+.*/)) {
            twitterValid.value = false
        } else {
            twitterValid.value = true
        }
    } else {
        twitterValid.value = true
    }
    if (props.youtube.trim().length > 0) {

        if (!props.youtube.match(/https:\/\/.*youtube\.\w+.*/)) {
            youtubeValid.value = false
        } else {
            youtubeValid.value = true
        }
    } else {
        youtubeValid.value = true
    }
    if (props.linkedin.trim().length > 0) {
        if (!props.linkedin.match(/https:\/\/.*linkedin\.\w+.*/)) {
            linkedinValid.value = false
        } else {
            linkedinValid.value = true
        }
    } else {
        linkedinValid.value = true
    }

    if (linkedinValid.value === true && youtubeValid.value === true && twitterValid.value === true && githubValid.value === true) {
        emit('updateSocial', { github: props.github, twitter: props.twitter, linkedin: props.linkedin, youtube: props.youtube })
        editingSocial.value = false
    }
}



</script>