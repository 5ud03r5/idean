<template>
    <div class="flex flex-col my-20 mr-10 lg:ml-72 max-lg:ml-16">
        <div class="p-5 mx-auto bg-white rounded-md shadow-xl w-max h-max">
            <label
                class="container flex items-center justify-center mx-auto mb-5 text-center text-[25px] font-semibold">Create
                Idea</label>
            <form class="flex flex-col space-y-3 w-[300px] mx-auto" @submit.prevent="createIdea">
                <input v-model="title" placeholder="Name" class="px-2 py-1 bg-gray-100 rounded-md outline-none " />
                <textarea v-model="description" placeholder="Description" rows="10"
                    class="px-2 py-1 bg-gray-100 rounded-md outline-none resize-none "></textarea>
                <input v-model="github" placeholder="GitHub link" class="px-2 py-1 bg-gray-100 rounded-md outline-none " />
                <div class="flex flex-wrap justify-center space-x-1">
                    <div @click="lfDev = !lfDev"
                        :class="lfDev ? 'bg-purple-700 hover:bg-purple-700' : 'bg-gray-900 hover:bg-gray-800'"
                        class="px-2 py-1 text-white transition-all rounded-md w-max hover:cursor-pointer ">
                        LFDev
                    </div>
                    <div @click="devStarted = !devStarted"
                        :class="devStarted ? 'bg-purple-700 hover:bg-purple-700' : 'bg-gray-900 hover:bg-gray-800'"
                        class="px-2 py-1 text-white transition-all rounded-md w-max hover:cursor-pointer">
                        Started</div>
                    <div @click="lfHelp = !lfHelp"
                        :class="lfHelp ? 'bg-purple-700 hover:bg-purple-700' : 'bg-gray-900 hover:bg-gray-800'"
                        class="px-2 py-1 text-white transition-all rounded-md w-max hover:cursor-pointer">
                        LFHelp
                    </div>
                </div>
                <button type="submit" class="py-1 text-gray-100 bg-gray-900 rounded-md hover:bg-gray-800">Add</button>
            </form>
        </div>

    </div>
</template>

<script setup>
const title = ref('')
const github = ref('')
const description = ref('')
const user = useSupabaseUser()
const devStarted = ref(false)
const lfDev = ref(false)
const lfHelp = ref(false)
definePageMeta({
    layout: 'app',
    middleware: 'auth'
})

const createIdea = async () => {
    await $fetch('/api/ideas', {
        method: 'POST',
        body: { title: title.value, description: description.value, github: github.value, dev_started: devStarted.value, lf_dev: lfDev.value, lf_help: lfHelp.value, idea_owner: user.value.id }
    })
    title.value = ''
    github.value = ''
    lfDev.value = false
    lfHelp.value = false
    devStarted.value = false

}

</script>