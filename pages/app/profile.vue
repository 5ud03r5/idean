<template>
    <div class="my-10 mr-10 ml-72">
        <div class="flex justify-center space-x-10 h-[650px]">
            <ProfileItem :username="user.user_metadata.user_name" :avatar="user.user_metadata.avatar_url"></ProfileItem>
            <div class=" flex-col flex space-y-2 w-2/3 h-[670px]">
                <IdeasList></IdeasList>
            </div>



        </div>

    </div>
</template>

<script setup>
const user = useSupabaseUser()
definePageMeta({
    layout: 'app',
    middleware: 'auth'
})
</script>