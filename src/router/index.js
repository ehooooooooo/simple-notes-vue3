import { createRouter, createWebHistory } from "vue-router";

import hasEmptyNotes from "../middleware/hasEmptyNotes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Notes",
      component: () => import("@/views/notes.vue"),
    },
    {
      path: "/days",
      name: "Days",
      component: () => import("@/views/days.vue"),
      beforeEnter: hasEmptyNotes,
    },
    {
      path: "/day-all-notes/:date",
      name: "DayAllNotes",
      component: () => import("@/views/notesDay.vue"),
      beforeEnter: hasEmptyNotes,
    },
  ],
});

export default router;
