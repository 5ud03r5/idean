<template>
    <NuxtLink :to="linkTo" class="flex items-center px-3 py-2 space-x-1 text-gray-100 transition-all rounded-md"
        :class="primary ? 'bg-purple-600 hover:bg-purple-500' : 'bg-purple-800 hover:bg-purple-700'">
        <slot></slot>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    linkTo: String,
    primary: Boolean,
})


</script>+