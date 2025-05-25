<script setup>
defineProps({
  project: Object,
});

function highlight(project) {
  project.isHovering = true;
}

function stopHighlight(project) {
  project.isHovering = false;
}
</script>
<template>
  <router-link :to="`/project/${project.name}`">
    <div
      class="box p-4 level-item is-flex-direction-column is-justify-content-space-between customSize has-background-white"
      @mouseover="highlight(project)"
      @mouseleave="stopHighlight(project)"
      :class="
        project.isHovering ? 'has-background-light' : 'has-background-white'
      "
    >
      <div class="is-justify-content-flex-start">
        <div class="is-justify-content-space-between">
          <p class="title is-5 customTitle has-text-dark">
            {{ project.name }}
          </p>
          <img
            :src="project.image"
            :alt="project.name"
            class="image projImage"
          />
        </div>
        <p class="custom-max-width customDescription has-text-grey-dark">
          {{ project.description }}
        </p>
      </div>
      <a :href="project.github" target="_blank" class="">
        <img
          src="/github.png"
          class="image is-24x24 githubIcon"
          alt="Github icon"
        />
      </a>
    </div>
  </router-link>
</template>
<style></style>
