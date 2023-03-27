<template>
    <div class="flex flex-col fixed w-[300px] mt-8 ">
        <div class=" shadow-xl p-4 w-[250px] rounded-md ">
            <div class="bg-gray-200 rounded-full w-max">
                <img height="220" width="220" :src="avatar" />
            </div>
            <div class="flex flex-col  w-[220px] mt-5 p-2 rounded-md items-center">
                <p v-if="!editingName" class="text-[24px] font-semibold">{{ name }}</p>
                <PofileProfileInput v-else :value="name" @blur="editName" :style="{ width: name.length + 1.8 + 'ch' }"
                    @input="$emit('newname:name', $event.target.value)" />
                <PofileEditButton @click="editingName = true" v-if="!editingName" :text="'edit name '" />
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
                <p v-if="!editingBio" class="mt-2 break-all text-center text-gray-800 text-[14px]">{{ bio }}</p>
                <PofileEditButton @click="editingBio = true" v-if="!editingBio" :text="'edit bio '" />

                <div class="flex flex-wrap justify-center mt-2">
                    <PofileSkillTag v-for="skill in skills" :key="skill">
                        {{ skill }}
                        <Icon size="20" @click="updateSkills(skill)" class="mb-[2px] hover:cursor-pointer"
                            name="ion:md-close-circle-outline" />
                    </PofileSkillTag>
                </div>
                <PofileEditButton @click="addingSkill = true" v-if="!addingSkill" :text="'add skill '" />
                <input v-else @blur="addSkill"
                    class="py-1 mt-3 px-2 text-[14px] outline-none w-[230px] resize-none rounded-md text-gray-800 bg-gray-200" />

                <PofileSocialLinks v-if="!editingSocial" :github="github" :linkedin="linkedin" :youtube="youtube"
                    :twitter="twitter" />
                <div v-else class="flex flex-col mt-3 ">
                    <PofileInputSocial placeholder="Github" :value="github" :valid="githubValid"
                        @input="$emit('update:github', $event.target.value)" />
                    <PofileInputSocial placeholder="Twitter" :value="twitter" :valid="twitterValid"
                        @input="$emit('update:twitter', $event.target.value)" />
                    <PofileInputSocial placeholder="Youtube" :value="youtube" :valid="youtubeValid"
                        @input="$emit('update:youtube', $event.target.value)" />
                    <PofileInputSocial placeholder="Linkedin" :value="linkedin" :valid="linkedinValid"
                        @input="$emit('update:linkedin', $event.target.value)" />
                    <div @click="validateLinks"
                        class="px-2 w-max  ml-auto py-1 mt-2 rounded-md outline-1 hover:cursor-pointer text-[12px] hover:bg-gray-200 transition-all outline-gray-900 outline">
                        done</div>
                </div>
                <PofileEditButton @click="editingSocial = true" v-if="!editingSocial" :text="'edit social '" />
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

const githubValid = ref(true)
const twitterValid = ref(true)
const linkedinValid = ref(true)
const youtubeValid = ref(true)

const addSkill = (event) => {
    if (event.target.value.trim().length > 1) {
        emit('update:skills', props.skills.concat([event.target.value]))

    }
    addingSkill.value = false

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

<style scoped>
.profile {
    opacity: 0;
    animation: enter 0.3s forwards
}

@keyframes enter {
    from {
        opacity: 0;
        filter: blur(1em)
    }

    to {
        opacity: 1
    }


}
</style>