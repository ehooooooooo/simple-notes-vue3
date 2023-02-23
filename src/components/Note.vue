<script setup>
import useNote from "../hooks/useNote.js";

defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const { editNote, removeNote } = useNote();
</script>

<template>
  <li class="notes-list__item">
    <h3>{{ note.title }}</h3>
    <small>{{ note.time }}</small>
    <span @click="editNote(note.id)">✏️</span>
    <span @click="removeNote(note.id)">❌</span>
  </li>
</template>
