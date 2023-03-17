<template>
    <div class="ml-72 mr-10 my-10">
        <div class="flex justify-center space-x-10 h-[650px]">
            <ProfileItem></ProfileItem>
            <div class=" flex-col flex space-y-2 w-2/3 h-[702px]">
                <div class="text-[16px] space-x-2 ml-auto">
                    <span class="bg-purple-900 px-3 py-2 rounded-md text-gray-100">My ideas</span>
                    <span class="bg-purple-900 px-3 py-2 rounded-md text-gray-100">Involved into</span>
                </div>
                <IdeasList></IdeasList>
            </div>



        </div>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'app'
})
</script>