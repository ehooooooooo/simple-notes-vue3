import { ref } from "vue";

import { useDaysStore } from "@/store/days.js";

export default () => {
  const text = ref("");
  const daysStore = useDaysStore();

  const findDays = () => {
    daysStore.getDays();

    const days = daysStore.days.reduce((acc, day) => {
      if (day.date.match(text.value)) acc.push(day);

      return acc;
    }, []);

    daysStore.setDays(days);
  };

  return { findDays, text };
};
