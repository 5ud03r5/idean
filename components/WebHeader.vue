<template>
    <header>
        <nav class="bg-gray-800 fixed top-0 w-full">
            <div class="flex  container  mx-auto px-10 py-3">
                <div class="flex space-x-10">
                    <LogoIdeanLogo :linkTo="'/'"></LogoIdeanLogo>

                </div>
                <div class="ml-auto flex space-x-10">
                    <UIUniversalButton :linkTo="'/login'">Login/Sign Up</UIUniversalButton>
                    <UIUniversalButton :linkTo="'/contact'">Contact us</UIUniversalButton>
                </div>
            </div>
        </nav>
    </header>
</template>