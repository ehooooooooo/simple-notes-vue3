import { onMounted } from "vue";

import { useDaysStore } from "@/store/days.js";

export default () => {
  const daysStore = useDaysStore();

  onMounted(() => {
    daysStore.getDays();
  });

  return { daysStore };
};
