<template>
    <div
        class="px-2 py-1 mt-2 rounded-md outline-1 hover:cursor-pointer text-[12px] hover:bg-gray-200 transition-all outline-gray-900 outline">
        <span>{{ text }}</span>
        <Icon name="carbon:edit"></Icon>
    </div>
</template>

<script setup>
defineProps(['text'])

</script>