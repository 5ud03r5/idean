<template>
    <div class="my-10 mr-10 md:ml-72 ">
        <div class="flex md:space-x-10 max-md:flex-col h-[650px]">
            <ProfileItem class="max-md:hidden" :username="user && user.name" :avatar="user && user.avatar_url"
                :bio="user && user.bio">
            </ProfileItem>
            <ProfileMobile class="md:hidden" :username="user && user.name" :avatar="user && user.avatar_url"
                :bio="user && user.bio">
            </ProfileMobile>

            <div class=" space-y-2 md:w-2/3 max-md:pt-10 max-sm:pt-24 md:h-[670px] max-md:ml-16">

                <IdeasList :ideas="ideas"></IdeasList>
            </div>
        </div>
    </div>
</template>

<script setup>

const { data: user } = await useFetch('/api/profile')
const { data: ideas } = await useFetch('/api/myideas')
definePageMeta({
    layout: 'app',
    middleware: 'auth'
})
</script>