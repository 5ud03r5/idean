<template>
    <div class="flex flex-col my-10 mr-10 lg:ml-72 max-lg:ml-16">




        <p class="lg:text-[40px] max-lg:text-[30px] max-sm:text-[25px] font-bold text-center mb-5">Discover ideas</p>
        <div class="mx-auto">
            <input
                class="bg-gray-100 shadow-md py-1 px-2 md:w-[400px] outline outline-1 outline-gray-200 transition-all rounded-lg focus:outline-none "
                placeholder="Search..." />
        </div>

        <div class="">

            <div class="flex flex-wrap justify-center w-full p-2 overflow-y-auto rounded-md ">
                <IdeaItem v-for="item in ideas" :key="item.id" class="md:w-[600px] max-md:w-full m-2 " :github="item.github"
                    :idea_owner="item.idea_owner.name" :title="item.title" :description="item.description"
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
const uri = useState('uri', () => '/api/ideas')
const scrollPosition = useState('scrollPosition', () => 0)
const { data: ideas, pending, refresh } = await useLazyAsyncData('ideas', async () => await $fetch(uri.value))
const searchRepository = async (value) => {
    uri.value = `/api/ideas?search=${value}`
    refresh('ideas')
}
</script>