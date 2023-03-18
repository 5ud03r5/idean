<template>
    <div class="mt-10 bg-purple-100">
        <div class="container py-20 mx-auto">
            <div class="text-center w-[500px] mx-auto ">
                <h1 class="text-[40px] font-bold">About a project</h1>
                <p class="text-[25px]">Share your thoughts, expose your ideas and start turning them
                    into a
                    product.</p>


            </div>
            <div class="flex justify-center mt-10">
                <UIUniversalButton :linkTo="'/login'" :primary="true">Join us</UIUniversalButton>
            </div>


        </div>
        <div class="bg-purple-800">
            <div class="container flex items-center justify-center py-4 mx-auto space-x-10 text-center">
                <UIUniversalLink href="https://github.com/5ud03r5/idean"><span>Github</span>
                    <IconsGithub height="22" width="22"></IconsGithub>
                </UIUniversalLink>

                <UIUniversalLink><span>Twitter</span>
                    <IconsTwitter height="22" width="22"></IconsTwitter>
                </UIUniversalLink>



            </div>
        </div>
        <div class="bg-purple-200">
            <div class="container mx-auto w-[1200px] flex py-20 px-10">
                <div class="w-1/3">
                    <h2 class="text-[45px]  font-bold">Main goal</h2>
                    <p class="text-[20px]">Our mission is to build a platform where idea provider and developer collaborate
                        to create a product
                        from
                        scratch.</p>
                </div>
                <div class="ml-auto">
                    <IconsCollaborate height="300" width="300"></IconsCollaborate>
                </div>

            </div>
        </div>
        <div class="bg-purple-100">
            <div class="container mx-auto flex w-[1200px] py-20 px-10">
                <div class="">
                    <IconsHandsShake height="300" width="300" />
                </div>

                <div class="w-1/3 ml-auto text-end">
                    <h2 class="text-[45px] font-bold">How it works?</h2>
                    <p class="text-[20px]">Become the idea provider or developer or both, share your idea, find developers
                        to work on it and
                        watch
                        how your
                        product builds!</p>
                </div>

            </div>
        </div>

    </div>
</template>


<script setup>
</script>
