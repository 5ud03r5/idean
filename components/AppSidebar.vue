<template>
    <div class="fixed left-0 top-0 h-full w-[250px] bg-gray-800 px-3 shadow-xl">
        <div class="">
            <LogoIdeanLogo :linkTo="'/app/ideas'" class="fill-gray-300 p-2 text-gray-300" />
        </div>
        <div class="mt-5 flex flex-col">
            <UISidebarItem :linkTo="'/app/ideas'">Ideas List</UISidebarItem>
            <UISidebarItem :linkTo="'/app/developers'">Developers</UISidebarItem>
            <UISidebarItem :linkTo="'/app/profile'">My Profile</UISidebarItem>
            <UISidebarItem :linkTo="'/'">Logout</UISidebarItem>
        </div>
    </div>
</template>