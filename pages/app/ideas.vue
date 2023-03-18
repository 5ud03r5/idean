<template>
    <div class="flex flex-col my-10 mr-10 ml-72">
        <h1 class="text-[40px] font-bold text-center mb-5">Discover ideas</h1>
        <div class="mx-auto">
            <input
                class="bg-gray-100 shadow-md py-1 px-2 w-[400px] outline outline-1 outline-gray-200 transition-all rounded-lg focus:outline-none "
                placeholder="Search..." />
        </div>

        <div class="">

            <div class="flex flex-wrap justify-center w-full p-2 overflow-y-auto rounded-md ">
                <IdeaItem class="w-[300px] m-2" />
                <IdeaItem class="w-[300px] m-2" />
                <IdeaItem class="w-[300px] m-2" />
                <IdeaItem class="w-[300px] m-2" />
                <IdeaItem class="w-[300px] m-2" />
                <IdeaItem class="w-[300px] m-2" />
                <IdeaItem class="w-[300px] m-2" />
                <IdeaItem class="w-[300px] m-2" />

            </div>

        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'app',
    middleware: 'auth'
})
</script>