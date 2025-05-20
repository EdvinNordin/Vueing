<script>
export default {
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    // Fetch the JSON file
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        this.projects = data;
      })
      .catch(error => {
        console.error('Error loading the JSON file:', error);
      });
  },

  methods: {
    hovering(project) {
      project.isHovering = true;
    },
    stopHovering(project) {
      project.isHovering = false;
    }
  }
};
</script>

<template>
  <container class="container">
  <section class="hero">
    <div class="hero-body container">
      <h1 class="title is-1">Edvin Nordin</h1>
    </div>
  </section>

  <section class="section">
    <div class="level horizontal-scroll">
      <div v-for="project in projects" :key="project.name">

        <div class="level-item box is-flex-direction-column customSize" 
        @mouseover="hovering(project)" 
        @mouseleave="stopHovering(project)"
        :href="project.link"
        :class="project.isHovering ? 'has-background-dark' : 'has-background-light'">

          <p class="title customTitle">{{ project.name }}</p>

          <img src="./water.png" class="image"/>

          <p class="custom-max-width customDescription"> {{ project.description }}</p>
        
        </div>
      </div>
    </div>
  </section>
  <section class="section container flex justify-content" >
      <h2 class="title is-3">About Me</h2>
    
    </section>
    </container>
</template>

<style>
.horizontal-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

.customSize {
  width: 300px;
  height: 500px;
}

.customTitle{
  overflow-wrap: normal;
  padding:15px;
}

.customDescription{
  white-space: normal; /* Allows text to wrap to the next line */
  padding:15px;
}

/*
.small-size {
  width: 250px;    
  height: 250px;
}

.big-size {
  width: 300px;      
  height: 250px;     
}*/
</style>

<!--<div v-if="project.name === 'Master Thesis'" class="level-left card">
            <h3 class="title is-nowrap card-title">{{ project.name }}</h3>
            <p class="subtitle card-content">{{ project.description }}</p>
          </div>
          <div v-else-if="project.name === 'Image Reproduction'" class="level-right card" >
            <h3 class="title is-nowrap card-title">{{ project.name }}</h3>
            <p class="subtitle card-content">{{ project.description }}</p>
          </div>-->
