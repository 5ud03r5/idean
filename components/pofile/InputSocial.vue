<template>
    <input
        :class="!valid ? 'outline-red-600 bg-red-100' : ' focus:bg-gray-50 outline-gray-200 hover:outline-none focus:outline-none bg-gray-100'"
        class="px-2 py-1 mt-1 rounded-md outline outline-1 " />
</template>

<script setup>
defineProps(['valid'])
</script>