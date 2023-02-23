<script setup>
import { RouterLink } from "vue-router";

import SearchDays from "@/components/SearchDays.vue";
import useDays from "@/hooks/useDays.js";

const { daysStore } = useDays();
</script>

<template>
  <SearchDays />
  <div class="days-grid" v-if="daysStore.days.length">
    <RouterLink
      v-for="{ date } in daysStore.days"
      :to="{ name: 'DayAllNotes', params: { date } }"
      v-slot="{ href, navigate }"
    >
      <button class="btn" :href="href" @click="navigate">
        {{ date }}
      </button>
    </RouterLink>
  </div>
  <h1 class="empty" v-else>No find day</h1>
</template>
