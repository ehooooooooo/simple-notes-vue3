<script setup>
import useCreateNote from "@/hooks/useCreateNote.js";

const { createNote, disabledForm, title } = useCreateNote();
</script>

<template>
  <form
    class="form"
    @submit.prevent="createNote"
    :class="{ 'form-disabled': disabledForm }"
  >
    <input
      class="form-input"
      type="text"
      required
      v-model="title"
      :disabled="disabledForm"
    />
    <button type="submit" class="btn" :disabled="disabledForm">Add</button>
  </form>
</template>
