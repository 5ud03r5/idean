<template>
    <div class="ml-72 mr-10 my-10 flex flex-col">
        <h1 class="text-[40px] font-bold text-center mb-5">Discover ideas</h1>
        <div class="mx-auto">
            <input
                class="bg-gray-100 shadow-md py-1 px-2 w-[300px] outline outline-1 outline-gray-200 transition-all rounded-lg focus:outline-none "
                placeholder="Search..." />
        </div>

        <div class="">

            <div class=" w-full p-2 rounded-md overflow-y-auto flex justify-center flex-wrap ">
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
    layout: 'app'
})
</script>