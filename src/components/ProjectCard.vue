<script setup>
defineProps({
  project: Object,
});

function formatName(name) {
  return name.replaceAll("_", " ");
}
</script>

<template>
  <router-link class="card" :to="`/${project.name}`">
    <h2 class="projectName">
      {{ formatName(project.name) }}
    </h2>
    <img :src="project.image" :alt="project.name" class="projectImage" />
  </router-link>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
  overflow: hidden;
}
.card:hover {
  background: #d3d3d3;
}

a:hover {
  background: none;
  height: 300px;
}

.projectName {
}
.projectImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
</style>
