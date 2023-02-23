<script setup>
import Note from "@/components/Note.vue";
import useNotesDay from "@/hooks/useNotesDay.js";

const { daysStore } = useNotesDay();
</script>

<template>
  <ul class="notes-list" v-if="daysStore.notesDay.length">
    <Note v-for="note in daysStore.notesDay" :key="note.id" :note="note" />
  </ul>
  <h1 class="empty" v-else>No Notes</h1>
</template>
