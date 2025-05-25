<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import ProjectInfo from "../components/ProjectInfo.vue";
import ContactSection from "../components/ContactSection.vue";

const route = useRoute();
const projectName = route.params.name;
const project = ref(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await fetch("/projects.json");
    const data = await response.json();
    project.value = data.find((p) => p.name === projectName);
  } catch (e) {
    project.value = null;
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <RouterLink to="/">
    <h1 class="title is-3 mb-0 has-text-dark">Back to Home</h1>
  </RouterLink>
  <ProjectInfo :project="project" v-if="!loading" />

  <ContactSection />
</template>
