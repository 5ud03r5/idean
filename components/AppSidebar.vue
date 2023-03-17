<template>
    <div class="fixed left-0 top-0 h-full w-[250px] bg-gray-800 px-3 shadow-xl">
        <div class="">
            <LogoIdeanLogo :linkTo="'/app'" class="fill-gray-300 p-2 text-gray-300" />
        </div>
        <div class="mt-5 flex flex-col">

            <UISidebarItem :linkTo="'/app/ideas'">List
                ideas</UISidebarItem>

            <UISidebarItem :linkTo="'/app/new_idea'">New idea</UISidebarItem>
            <UISidebarItem :linkTo="'/app/developers'">Developers</UISidebarItem>

            <UISidebarItem :linkTo="'/app/projects'">Projects</UISidebarItem>
            <UISidebarItem :linkTo="'/'" class="mt-auto">Home</UISidebarItem>

        </div>

    </div>
</template>