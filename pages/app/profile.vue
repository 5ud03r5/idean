<template>
    <div class="my-10 mr-10 ml-72">
        <div class="flex justify-center space-x-10 h-[650px]">
            <ProfileItem></ProfileItem>
            <div class=" flex-col flex space-y-2 w-2/3 h-[670px]">
                <IdeasList></IdeasList>
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