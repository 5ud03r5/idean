<template>
    <div class="my-10 mr-10 lg:ml-72 ">
        <div class="flex lg:space-x-10 max-lg:flex-col h-[650px]">
            <div v-if="!pending">
                <ProfileItem class="max-lg:hidden" :username="user && user.name" :avatar="user && user.avatar_url"
                    :bio="user && user.bio">
                </ProfileItem>
                <ProfileMobile class="lg:hidden" :username="user && user.name" :avatar="user && user.avatar_url"
                    :bio="user && user.bio">
                </ProfileMobile>
            </div>


            <div class=" space-y-2 lg:w-2/3 max-lg:pt-10 max-sm:pt-24 lg:h-[670px] max-lg:ml-16">

                <IdeasList></IdeasList>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: user, pending } = await useLazyAsyncData('user', async () => await $fetch('/api/profile', {
    headers: useRequestHeaders(['cookie'])
}))
definePageMeta({
    layout: 'app',
    middleware: 'auth'
})
</script>