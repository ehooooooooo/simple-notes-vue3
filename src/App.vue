<script setup>
import { RouterView, RouterLink } from "vue-router";

import CreateNote from "@/components/CreateNote.vue";
import useApp from "@/hooks/useApp.js";

useApp();
</script>

<template>
  <div class="container">
    <header class="header">
      <nav class="header-nav">
        <RouterLink :to="{ name: 'Notes' }" class="btn">Notes</RouterLink>
        <RouterLink :to="{ name: 'Days' }" class="btn">Days</RouterLink>
      </nav>

      <CreateNote />
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
