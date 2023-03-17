<template>
    <NuxtLink :to="linkTo" class="px-3 transition-all py-2 rounded-md text-gray-100 flex items-center space-x-1"
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