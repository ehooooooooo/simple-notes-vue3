import { onMounted } from "vue";
import { useRoute } from "vue-router";

import { useDaysStore } from "@/store/days.js";
import useSkipToPage from "./useSkipToPage.js";

export default () => {
  const route = useRoute();
  const daysStore = useDaysStore();
  const skipToPage = useSkipToPage();
  const date = route.params.date;

  onMounted(() => {
    skipToPage.valid();
    daysStore.notesByDate(date);
  });

  return { daysStore };
};
