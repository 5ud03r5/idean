<template>
    <div class="flex flex-wrap mt-3 space-x-2 ">
        <a v-if="github" :href="github" target="_blank">
            <Icon name="logos:github-icon" size="25"></Icon>
        </a>
        <a v-if="twitter" :href="twitter" target="_blank">
            <Icon name="logos:twitter" size="25"></Icon>
        </a>

        <a v-if="youtube" :href="youtube" target="_blank">
            <Icon name="logos:youtube-icon" size="25"></Icon>
        </a>

        <a v-if="linkedin" :href="linkedin" target="_blank">
            <Icon name="logos:linkedin-icon" size="25"></Icon>
        </a>

    </div>
</template>

<script setup>
defineProps(['github', 'twitter', 'linkedin', 'youtube'])


</script>