<template>
    <NuxtLink :to="linkTo"
        class=" text-[20px] text-gray-300 py-1 px-2 hover:bg-gray-300 hover:text-gray-900 w-full transition-all">
        <slot></slot>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    linkTo: String
})
</script>

