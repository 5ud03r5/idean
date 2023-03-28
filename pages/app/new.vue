<template>
    <div class="flex flex-col my-20 mr-[2%] lg:ml-72 max-lg:ml-16">
        <label class="container flex items-center justify-center mx-auto mb-5 text-center text-[25px] font-semibold">Create
            Idea</label>
        <div class="container w-3/5 p-5 mx-auto bg-white rounded-md shadow-xl max-sm:w-full h-max">

            <form class="flex flex-col w-full mx-auto space-y-3" @submit.prevent="createIdea">
                <div class="flex">
                    <input v-model="title" placeholder="Name" type="text" autocomplete="off"
                        class="w-1/5 min-w-[100px] px-2 py-1 bg-gray-100 rounded-md outline outline-1 outline-gray-400 " />
                    <button type="submit"
                        class="px-2 py-1 ml-auto text-gray-100 bg-gray-900 rounded-md hover:bg-gray-800 w-max">Add</button>
                </div>

                <textarea v-model="description" placeholder="Description" rows="10"
                    class="px-2 py-1 bg-gray-100 rounded-md resize-none outline outline-1 outline-gray-400 "></textarea>
                <input v-model="github" placeholder="GitHub link" type="text" autocomplete="off"
                    class="px-2 py-1 bg-gray-100 rounded-md outline outline-1 outline-gray-400 w-1/5 mx-auto min-w-[100px]" />
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
    description.value = ''
    navigateTo('/app/ideas')

}

</script>