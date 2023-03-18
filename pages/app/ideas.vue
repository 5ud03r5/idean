<template>
    <div class="flex flex-col my-10 mr-10 md:ml-72 max-md:ml-16">
        <h1 class="md:text-[40px] max-md:text-[30px] font-bold text-center mb-5">Discover ideas</h1>
        <div class="mx-auto">
            <input
                class="bg-gray-100 shadow-md py-1 px-2 md:w-[400px] outline outline-1 outline-gray-200 transition-all rounded-lg focus:outline-none "
                placeholder="Search..." />
        </div>

        <div class="">

            <div class="flex flex-wrap justify-center w-full p-2 overflow-y-auto rounded-md ">
                <IdeaItem class="md:w-[300px] max-md:w-full m-2 " />
                <IdeaItem class="md:w-[300px] max-md:w-full m-2 " />
                <IdeaItem class="md:w-[300px] max-md:w-full m-2 " />
                <IdeaItem class="md:w-[300px] max-md:w-full m-2 " />
                <IdeaItem class="md:w-[300px] max-md:w-full m-2 " />
                <IdeaItem class="md:w-[300px] max-md:w-full m-2 " />
                <IdeaItem class="md:w-[300px] max-md:w-full m-2 " />
                <IdeaItem class="md:w-[300px] max-md:w-full m-2 " />
                <IdeaItem class="md:w-[300px] max-md:w-full m-2 " />
                <IdeaItem class="md:w-[300px] max-md:w-full m-2 " />
                <IdeaItem class="md:w-[300px] max-md:w-full m-2 " />

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