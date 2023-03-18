<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        :class="!valid ? 'outline-2 outline outline-red-500 focus:outline-red-500' : 'focus:outline-none'"
        @blur="validation" :placeholder="`Enter your ${name}...`"
        class="p-2 bg-purple-100 rounded-sm placeholder:italic " />
</template>

<script setup>
const props = defineProps(
    ['modelValue', 'valid', 'validation', 'name']
)
const emits = defineEmits(['update:modelValue'])

</script>