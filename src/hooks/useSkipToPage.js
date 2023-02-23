import { useRouter } from "vue-router";

import { useNotesStore } from "@/store/notes.js";

export default () => {
  const router = useRouter();
  const notesStore = useNotesStore();

  const valid = () => {
    if (!notesStore.validNotes) {
      router.push({ name: "Notes" });
      alert("Please create note!");
    }
  };

  return { valid };
};
