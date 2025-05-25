<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const props = defineProps({
  project: Object,
});
</script>

<template>
  <h1 class="title is-3">{{ project.name }}</h1>
  <img :src="project.image" :alt="project.name" />
  <p class="subtitle">{{ project.description }}</p>
</template>
