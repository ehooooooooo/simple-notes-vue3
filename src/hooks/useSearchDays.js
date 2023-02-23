import { ref } from "vue";

import { useDaysStore } from "@/store/days.js";

export default () => {
  const text = ref("");
  const daysStore = useDaysStore();

  const findDays = (txt) => {
    const arr = [];

    daysStore.getDays();

    daysStore.days.forEach((day) => {
      if (day.date.match(txt)) {
        arr.push(day);
      }
    });

    daysStore.setDays(arr);
  };

  return { findDays, text };
};
