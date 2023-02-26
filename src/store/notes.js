import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useNotesStore = defineStore("notesStore", () => {
  const notes = ref(JSON.parse(localStorage.getItem("notes")) || []);

  const addNote = (note) => notes.value.push(note);

  const removeNote = (id) => {
    notes.value = notes.value.filter((item) => item.id !== id);
  };

  const editNote = (id, title) => {
    const index = notes.value.findIndex((item) => item.id === id);
    notes.value[index].title = title;
  };

  watch(
    () => notes,
    () => {
      localStorage.setItem("notes", JSON.stringify(notes.value));
    },
    { deep: true }
  );

  return { notes, addNote, removeNote, editNote };
});
