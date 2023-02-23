import { ref } from "vue";
import { defineStore } from "pinia";

import { useNotesStore } from "./notes.js";

export const useDaysStore = defineStore("daysStore", () => {
  const days = ref([]);
  const notesDay = ref([]);
  const notesStore = useNotesStore();

  const getDays = () => {
    const arr = notesStore.notes.reduce((acc, note) => {
      const condition = acc.find((item) => item.date === note.date);

      if (!condition) acc.push(note);

      return acc;
    }, []);

    setDays(arr);
  };

  const setDays = (arr) => (days.value = arr);

  const notesByDate = (date) => {
    notesDay.value = notesStore.notes.filter((note) => note.date === date);
  };

  return {
    days,
    getDays,
    notesByDate,
    notesDay,
    setDays,
  };
});
