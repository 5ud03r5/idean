<template>
    <div class="fixed left-0 top-0 z-[1000] h-full md:w-[250px] bg-gray-800 px-1 shadow-xl">
        <div class="px-2">
            <UISidebarItem :linkTo="'/'">
                <IconsLogo class="w-8 h-8 fill-gray-100"></IconsLogo>
            </UISidebarItem>
        </div>
        <hr>
        <div class="flex flex-col mt-5">
            <UISidebarItem :linkTo="'/app/ideas'">
                <IconsIdeas class="w-8 h-8 fill-gray-100"></IconsIdeas>
            </UISidebarItem>
            <UISidebarItem :linkTo="'/app/new'">
                <IconsNewIdea class="w-8 h-8 fill-gray-100"></IconsNewIdea>
            </UISidebarItem>
            <UISidebarItem :linkTo="'/app/developers'">
                <IconsPeople class="w-8 h-8 fill-gray-100" />
            </UISidebarItem>
            <UISidebarItem :linkTo="'/app/profile'">
                <IconsProfile class="w-8 h-8 fill-gray-100" />
            </UISidebarItem>
            <div @click="logout"
                class="w-full px-2 py-1 text-gray-300 transition-all hover:bg-gray-300 hover:text-gray-900 hover:cursor-pointer">
                <IconsLogout class="w-8 h-10 fill-gray-100" />
            </div>
        </div>
    </div>
</template>

<script setup>

const client = useSupabaseAuthClient()
const logout = async () => {
    await client.auth.signOut()
    navigateTo('/')
}

</script>