import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import { useNotesStore } from "@/store/notes.js";

export default () => {
  const notesStore = useNotesStore();
  const route = useRoute();
  const title = ref("");

  const disabledForm = computed(() => route.name !== "Notes");

  const formatTime = computed(() => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const index = time.lastIndexOf(":");

    return {
      date: date.toLocaleDateString().replaceAll(".", "-"),
      time: time.slice(0, index),
    };
  });

  const createNote = () => {
    if (!title.value.length) return;

    notesStore.addNote({
      title: title.value,
      id: Date.now(),
      ...formatTime.value,
    });

    title.value = "";
  };

  return { disabledForm, createNote, title };
};
