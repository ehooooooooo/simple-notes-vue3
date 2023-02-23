import { createRouter, createWebHistory } from "vue-router";

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
    },
    {
      path: "/day-all-notes/:date",
      name: "DayAllNotes",
      component: () => import("@/views/notesDay.vue"),
    },
  ],
});

export default router;
