<template>
    <header>
        <nav class="fixed top-0 w-full bg-gray-800">
            <div class="container flex px-10 py-1 mx-auto max-md:justify-center">
                <div class="flex space-x-10 ">
                    <LogoIdeanLogo :linkTo="'/'"></LogoIdeanLogo>

                </div>
                <div class="flex items-center ml-auto space-x-10 max-md:hidden">
                    <UIUniversalButton v-if="user === null" :linkTo="'/login'">Login/Sign Up</UIUniversalButton>
                    <UIUniversalButton v-else :linkTo="'/app/profile'">Go to App</UIUniversalButton>
                    <UIUniversalButton :linkTo="'/contact'">Contact us</UIUniversalButton>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
const user = useSupabaseUser()

</script>