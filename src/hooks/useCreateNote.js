import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import { useNotesStore } from "@/store/notes.js";

export default () => {
  const notesStore = useNotesStore();
  const route = useRoute();
  const title = ref("");

  const disabledForm = computed(() => route.name !== "Notes");

  const formatTime = computed(() => {
    const today = new Date();
    const timeStr = today.toLocaleTimeString();
    const index = timeStr.lastIndexOf(":");
    const time = timeStr.slice(0, index);
    const date = today.toLocaleDateString().replaceAll(".", "/");

    return { date, time };
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
