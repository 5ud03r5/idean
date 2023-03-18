<template>
    <div class="mr-10 md:my-10 max-md:my-48 md:ml-72 max-md:ml-16">
        <div class="flex justify-center md:space-x-10 max-md:flex-col h-[650px]">
            <ProfileItem class="max-md:hidden" :username="user && user.user_metadata.user_name"
                :avatar="user && user.user_metadata.avatar_url">
            </ProfileItem>
            <ProfileMobile class="md:hidden" :username="user && user.user_metadata.user_name"
                :avatar="user && user.user_metadata.avatar_url">
            </ProfileMobile>

            <div class=" flex-col flex space-y-2 md:w-2/3 max-md:pt-10  md:h-[670px]">
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