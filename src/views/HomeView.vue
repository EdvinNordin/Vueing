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
  margin-left: 20px;
  margin-top: 20px;
  font-size: 2.5rem;
  padding-bottom: 10px;
}

.subtitle {
  color: $titleColor;
  margin-left: 20px;
  padding-bottom: 10px;
  font-size: 1.5rem;
}
</style>
