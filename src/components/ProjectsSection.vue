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
      </div>
    </div>
  </section>
</template>