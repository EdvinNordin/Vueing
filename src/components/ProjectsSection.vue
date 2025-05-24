<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick} from 'vue';
import ProjectCard from './ProjectCard.vue';
const projects = ref([]);
const scrollForward = ref(true);
let scrollInterval = null;


function startAutoScroll() {
  nextTick(() => {
    // Only auto-scroll if not on mobile
    if (window.innerWidth < 769) return;
    const container = document.querySelector('.level');
    if (!container) return;
    scrollInterval = setInterval(() => {
      if (scrollForward.value) {
        container.scrollBy({ left: 10, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -10, behavior: 'smooth' });
      }
      if (
        container.scrollLeft + container.clientWidth >= container.scrollWidth
      ) {
        scrollForward.value = false;
      }
      if (container.scrollLeft <= 0) {
        scrollForward.value = true;
      }
    }, 50); // Adjust speed by changing the interval
  });
}
function hovering() {
  clearInterval(scrollInterval);
}
function stopHovering() {
  scrollInterval = setTimeout(() => {
    startAutoScroll();
  }, 2000); // Adjust delay before resuming auto-scroll
}
onMounted(() => {
fetch('/projects.json')
    .then(response => response.json())
    .then(data => {
      projects.value = data;
    })
    .catch(error => {
      console.error('Error loading the JSON file:', error);
    });
  startAutoScroll();
});


onBeforeUnmount(() => {
  clearInterval(scrollInterval);
});
</script>
<template>
    <section class="section projSection has-background-white-ter">
    <h2 class="title is-3 mb-0 has-text-dark">Projects</h2>
    <div class="level horizontal-scroll is-mobile"
    @mouseover="hovering" @mouseleave="stopHovering" >
      <div v-for="project in projects" :key="project.name">
        <ProjectCard :project="project"/>
        <!--<a :href="project.link" target="_blank">
          <div class="box level-item is-flex-direction-column is-justify-content-space-between customSize has-background-white" 
           @mouseover="highlight(project)" @mouseleave="stopHighlight(project)"
          :class="project.isHovering ? 'has-background-light' : 'has-background-white'">
            <div class="is-justify-content-flex-start">
              <div class="is-justify-content-space-between">
                <p class="title is-5 customTitle has-text-dark">{{ project.name }}</p>
                <img :src="project.image" :alt="project.name" class="image projImage"/>
              </div>
              <p class="custom-max-width customDescription has-text-grey-dark">{{ project.description }}</p>
            </div>
            <a :href="project.github" target="_blank" class="">
              <img src="/github.png" class="image is-24x24 githubIcon" alt="Github icon"/>
            </a>
          -->
      </div>
    </div>
  </section>
</template>