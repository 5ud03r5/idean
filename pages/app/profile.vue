<template>
    <div class="my-10 mr-10 lg:ml-72 ">
        <div class="flex lg:space-x-10 max-lg:flex-col h-[650px]">
            <div>
                <ProfileItem class="max-lg:hidden" :name="user.name" @update:name="updateName"
                    @newname:name="newValue => user.name = newValue" :skills="user.skills" @update:skills="updateSkills"
                    :avatar="user && user.avatar_url" :bio="user.bio" @update:bio="updateBio" :youtube="user.youtube"
                    @update:youtube="newValue => user.youtube = newValue" :github="user.github"
                    @update:github="newValue => user.github = newValue" :twitter="user.twitter"
                    @update:twitter="newValue => user.twitter = newValue" :linkedin="user.linkedin"
                    @update:linkedin="newValue => user.linkedin = newValue" :developer="user.developer"
                    @updateSocial="updateSocial">
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

const updateBio = async (value) => {
    const data = await $fetch('/api/profile', {
        method: 'PUT',
        body: { bio: value }
    })
    user.value = data[0]
}

const updateSocial = async (value) => {
    const data = await $fetch('/api/profile', {
        method: 'PUT',
        body: value
    })
    user.value = data[0]
}

const updateName = async (value) => {
    const data = await $fetch('/api/profile', {
        method: 'PUT',
        body: { name: value }
    })
    user.value = data[0]
}

const updateSkills = async (value) => {
    const data = await $fetch('/api/profile', {
        method: 'PUT',
        body: { skills: value }
    })
    user.value = data[0]
}


</script>

