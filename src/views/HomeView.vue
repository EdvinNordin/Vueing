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

<style>
.imageMe {
  max-width: 600px;
}

.projSection {
  padding-top: 100px;
}

.projImage {
  width: 250px;
  height: 180px;
}

.horizontal-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

a:hover {
  background: none;
}

.customSize {
  width: 280px;
  height: 450px;
  margin-left: 5px;
  margin-right: 5px;
}

.customTitle {
  white-space: pre;
  padding-bottom: 15px;
  padding-top: 5px;
}

.customDescription {
  white-space: normal; /* Allows text to wrap to the next line */
  padding-top: 15px;
}

.githubIcon {
  bottom: 0;
  right: 0;
}
</style>
