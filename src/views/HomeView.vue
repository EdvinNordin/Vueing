<script setup>
import HeroSection from "../components/HeroSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ContactSection from "../components/ContactSection.vue";
</script>
<template>
  <HeroSection />
  <ProjectsSection />
  <AboutSection />
  <ContactSection />
</template>

<style lang="scss">
@use "../styles/variables.scss" as *;

.title {
  color: $titleColor;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.subtitle {
  color: $titleColor;
  font-size: 1.2rem;
  line-height: 1.5;
}
</style>
