import { useRoute } from "vue-router";

import { useNotesStore } from "@/store/notes.js";
import { useDaysStore } from "../store/days.js";

export default () => {
  const notesStore = useNotesStore();
  const daysStore = useDaysStore();
  const route = useRoute();

  const removeNote = (id) => {
    notesStore.removeNote(id);
    daysStore.notesByDate(route.params.date);
  };

  const editNote = (id) => {
    const current = notesStore.notes.find((item) => item.id === id);
    const title = prompt("Edit note:", current.title) || current.title;

    if (current.title === title) return;

    notesStore.editNote(id, title);
  };

  return { removeNote, editNote };
};
