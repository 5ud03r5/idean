<template>
    <NuxtLink :to="linkTo" class="flex items-center space-x-1 text-[25px] font-bold text-white fill-white">
        <span>IDEAN</span>
        <IconsLogo></IconsLogo>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    linkTo: String
})
</script>