<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const props = defineProps({
  project: Object,
});

function formatName(name) {
  if (!name) return "";
  const newName = name.replaceAll("_", " ");
  return newName;
}
</script>

<template>
  <h1 class="title" v-if="project && project.name">
    {{ formatName(project.name) }}
  </h1>
  <img :src="project.image" :alt="project.name" class="image" />
  <p class="subtitle">{{ project.description }}</p>
</template>

<style scoped lang="scss">
.image {
  max-width: 500px;
  margin-left: 20px;
}
</style>
