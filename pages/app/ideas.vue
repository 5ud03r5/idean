<template>
    <div class="flex flex-col my-10 mr-10 lg:ml-72 max-lg:ml-16">




        <p class="lg:text-[40px] max-lg:text-[30px] max-sm:text-[25px] font-bold text-center mb-5">Discover ideas</p>
        <div class="mx-auto">
            <form @submit.prevent="searchRepository">
                <input v-model="search" autocomplete="off"
                    class="bg-gray-100 shadow-md py-1 px-2 md:w-[400px] outline outline-1 outline-gray-200 transition-all rounded-lg focus:outline-none "
                    placeholder="Search..." />
            </form>

        </div>

        <div class="">

            <div v-if="!pending"
                class="flex flex-wrap justify-center w-full p-2 overflow-x-hidden overflow-y-auto rounded-md ">
                <IdeaItem v-for="item, index in ideas" :key="item.id" class="md:w-[600px] max-md:w-full m-2 "
                    :github="item.github" @update:github="editIdea($event, item, index)" :idea_owner_id="item.idea_owner.id"
                    :idea_owner_name="item.idea_owner.name" :title="item.title" :description="item.description"
                    :workers="item.workers" :devStarted="item.dev_started" :lfHelp="item.lf_help" :lfDev="item.lf_dev" />
            </div>
        </div>



    </div>
</template>

<script setup>
definePageMeta({
    layout: 'app',
    middleware: 'auth'
})
const search = ref('')
const uri = useState('uri', () => '/api/ideas')
const scrollPosition = useState('scrollPosition', () => 0)

const { data: ideas, pending, refresh } = await useLazyAsyncData('ideas', async () => await $fetch(uri.value))


const searchRepository = async () => {
    uri.value = `/api/ideas?search=${search.value.toLowerCase()}`
    refresh('ideas')
}

const editIdea = async (value, item, index) => {
    await $fetch('/api/ideas', {
        method: 'PUT',
        body: { id: item.id, github: value }
    })
    ideas.value[index].github = value
}
</script>