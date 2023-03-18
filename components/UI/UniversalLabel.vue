<template>
    <label :class="!valid && 'text-red-500'">{{ name }} <span v-if="!valid">{{ text }}</span></label>
</template>

<script setup>
const props = defineProps({
    valid: Boolean,
    name: String,
    text: String
})

</script>