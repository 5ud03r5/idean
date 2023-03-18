<template>
    <footer>
        <div class="mb-auto bg-purple-900 ">
            <div class="container flex w-full mx-auto max-md:flex-col md:p-10 max-md:p-5 ">
                <div class="mr-auto">
                    <LogoIdeanLogo />
                    <p class="text-gray-200 md:text-[20px]">Open source idea sharing platform</p>
                </div>
                <div class="flex flex-col text-gray-200 md:text-[20px] text-end space-y-1 ml-auto">
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