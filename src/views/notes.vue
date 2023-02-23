<script setup>
import { useNotesStore } from "@/store/notes.js";
import Note from "@/components/Note.vue";

const notesStore = useNotesStore();
</script>

<template>
  <ul class="notes-list" v-if="notesStore.notes.length">
    <Note v-for="note in notesStore.notes" :key="note.id" :note="note" />
  </ul>
  <h1 class="empty" v-else>No Notes</h1>
</template>
