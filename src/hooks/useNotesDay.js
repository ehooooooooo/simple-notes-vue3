import { onMounted } from "vue";
import { useRoute } from "vue-router";

import { useDaysStore } from "@/store/days.js";

export default () => {
  const route = useRoute();
  const daysStore = useDaysStore();
  const date = route.params.date;

  onMounted(() => {
    daysStore.notesByDate(date);
  });

  return { daysStore };
};
