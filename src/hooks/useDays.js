import { onMounted } from "vue";

import { useDaysStore } from "@/store/days.js";
import useSkipToPage from "./useSkipToPage.js";

export default () => {
  const daysStore = useDaysStore();
  const skipToPage = useSkipToPage();

  onMounted(() => {
    skipToPage.valid();
    daysStore.getDays();
  });

  return { daysStore };
};
