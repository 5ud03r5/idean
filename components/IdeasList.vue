<template>
    <div class="w-full p-2 space-y-2 overflow-y-auto rounded-md">
        <IdeaItem v-for="idea in ideas" :key="idea.id" :github="idea.github" :workers="idea.workers"
            :owner="idea.idea_owner.name" :title="idea.title" :devStarted="idea.dev_started" :lfHelp="idea.lf_help"
            :lfDev="idea.lf_dev" class="w-full" />
    </div>
</template>
<script setup>
defineProps(['ideas'])
</script>