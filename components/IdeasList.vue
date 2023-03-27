<template>
    <div v-if="!pending" class="p-4 space-y-2 overflow-y-auto rounded-md ">
        <IdeaItem v-for="idea in ideas" :key="idea.id" :github="idea.github" :workers="idea.workers"
            :idea_owner_id="idea.idea_owner" :title="idea.title" :devStarted="idea.dev_started" :lfHelp="idea.lf_help"
            :lfDev="idea.lf_dev" class="lg:w-full" />
    </div>
</template>
<script setup>
const { data: ideas, pending, refresh } = await useLazyAsyncData('ideas', async () => await $fetch('/api/myideas', {
    headers: useRequestHeaders(['cookie'])
}))

</script>