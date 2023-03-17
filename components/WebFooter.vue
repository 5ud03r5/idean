<template>
    <footer>
        <div class="bg-purple-900 mb-auto">
            <div class="container mx-auto p-10 flex ">
                <div class="mr-auto">
                    <LogoIdeanLogo />
                    <p class="text-gray-200 text-[20px]">Open source idea sharing platform</p>
                </div>
                <div class="flex flex-col text-gray-200 text-[20px] space-y-1 ml-auto">
                    <a href="https://github.com/5ud03r5/idean" target="_blank">Github</a>
                    <a>Twitter</a>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                    <NuxtLink to="/faq">FAQ</NuxtLink>
                    <NuxtLink to="/documentation">Documentation</NuxtLink>

                </div>
            </div>

        </div>
    </footer>
</template>