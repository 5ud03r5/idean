<template>
    <div class="items-center justify-center mx-auto my-10 mr-10 lg:ml-72 max-lg:ml-16">
        <div class="flex flex-col justify-center mb-10 ">
            <p class="lg:text-[40px] max-lg:text-[30px] max-sm:text-[25px] font-bold text-center mb-5">Find developers</p>
            <input
                class="bg-gray-100 shadow-md py-1 mx-auto px-2 md:w-[400px] outline outline-1 outline-gray-200 transition-all rounded-lg focus:outline-none "
                placeholder="Search..." />
        </div>
        <div class="flex flex-wrap justify-center">
            <ProfileItemGroup v-for="profile in profiles" :key="profile.id" :profile="profile">
            </ProfileItemGroup>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'app',
    middleware: 'auth'
})

const { data: profiles } = await useLazyAsyncData('profiles', async () => await $fetch('/api/profiles'))

</script>