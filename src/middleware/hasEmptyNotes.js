import { useNotesStore } from "@/store/notes.js";

export default () => {
  const notesStore = useNotesStore();

  if (!notesStore.notes.length) {
    return { name: "Notes", query: { error: "Please create note" } };
  }
};
