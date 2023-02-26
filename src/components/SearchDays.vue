<script setup>
import useSearchDays from "@/hooks/useSearchDays.js";

const { findDays, text } = useSearchDays();
</script>

<template>
  <form class="form form-search" @submit.prevent="" @input="findDays">
    <input
      class="form-input"
      placeholder="Find days, template: 01/01/2001"
      type="text"
      v-model="text"
    />
  </form>
</template>
