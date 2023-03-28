<template>
    <div v-if="!pending" class="p-4 space-y-2 overflow-y-auto rounded-md ">
        <IdeaItem v-for="idea, index in ideas" :key="idea.id" :github="idea.github" :workers="idea.workers"
            :description="idea.description" @update:github="editIdea($event, idea, index)" :idea_owner_id="idea.idea_owner"
            :title="idea.title" :devStarted="idea.dev_started" :lfHelp="idea.lf_help" :lfDev="idea.lf_dev"
            class="lg:w-full" />
    </div>
</template>
<script setup>
const { data: ideas, pending, refresh } = await useLazyAsyncData('ideas', async () => await $fetch('/api/myideas', {
    headers: useRequestHeaders(['cookie'])
}))
const editIdea = async (value, item, index) => {
    await $fetch('/api/ideas', {
        method: 'PUT',
        body: { id: item.id, github: value }
    })
    ideas.value[index].github = value
}
</script>