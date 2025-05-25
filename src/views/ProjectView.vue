<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import ProjectInfo from "../components/InfoProject.vue";
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
    <h1 class="back">Back to Home</h1>
  </RouterLink>
  <ProjectInfo :project="project" v-if="!loading" />

  <ContactSection />
</template>
<style scoped lang="scss">
.back {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 1.2rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
}
</style>
