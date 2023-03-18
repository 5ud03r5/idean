<template>
    <header>
        <nav class="fixed top-0 w-full bg-gray-800">
            <div class="container flex px-10 py-3 mx-auto">
                <div class="flex space-x-10">
                    <LogoIdeanLogo :linkTo="'/'"></LogoIdeanLogo>

                </div>
                <div class="flex ml-auto space-x-10">
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