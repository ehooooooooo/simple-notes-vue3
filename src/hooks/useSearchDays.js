import { ref } from "vue";

import { useDaysStore } from "@/store/days.js";

export default () => {
  const text = ref("");
  const daysStore = useDaysStore();

  const findDays = (txt) => {
    daysStore.getDays();

    const days = daysStore.days.reduce((acc, day) => {
      if (day.date.match(txt)) acc.push(day);

      return acc;
    }, []);

    daysStore.setDays(days);
  };

  return { findDays, text };
};
