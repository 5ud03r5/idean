<template>
    <div class="fixed left-0 top-0 h-full md:w-[250px] bg-gray-800 px-3 shadow-xl">
        <div class="">
            <LogoIdeanLogo :linkTo="'/app/ideas'" class="p-2 text-gray-300 fill-gray-300" />
        </div>
        <div class="flex flex-col mt-5">
            <UISidebarItem :linkTo="'/app/ideas'">Ideas</UISidebarItem>
            <UISidebarItem :linkTo="'/app/new'">New Idea</UISidebarItem>
            <UISidebarItem :linkTo="'/app/developers'">Developers</UISidebarItem>
            <UISidebarItem :linkTo="'/app/profile'">My Profile</UISidebarItem>
            <div @click="logout"
                class="text-[20px] text-gray-300 py-1 px-2 hover:bg-gray-300 hover:text-gray-900 w-full transition-all hover:cursor-pointer">
                Logout</div>
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