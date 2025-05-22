<script>
export default {
  data() {
    return {
      projects: [],
      scrollForward: true
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

    // Auto-scroll logic
    this.startAutoScroll();
  },
  beforeUnmount() {
    clearInterval(this.scrollInterval);
  },
  methods: {
    highlight(project) {
      project.isHovering = true;
    },
    stopHighlight(project) {
      project.isHovering = false;
    },
    startAutoScroll() {
      this.$nextTick(() => {
        const container = document.querySelector('.level');
        if (!container) return;
        this.scrollInterval = setInterval(() => {
          if(this.scrollForward ){
          container.scrollBy({ left: 10, behavior: 'smooth' });
          } else {
          container.scrollBy({ left: -10, behavior: 'smooth' });
          }
          // Optional: Loop back to start
          if (
            container.scrollLeft + container.clientWidth >=
            container.scrollWidth
          ) {
            this.scrollForward = false;
          }
          if (container.scrollLeft <= 0) {
            this.scrollForward = true;
          }
        
        }, 100); // Adjust speed by changing the interval
      });
    },
    hovering() {
      clearInterval(this.scrollInterval);
      
    },
    stopHovering() {
      this.scrollInterval = setTimeout(() => {
        this.startAutoScroll();
      }, 2000); // Adjust delay before resuming auto-scroll
    },
  }
};
</script>

<template>
  <section class="has-background-white-ter">
  <div class="is-flex is-align-items-center pl-4 is-flex-direction-row is-flex-direction-column-mobile">
    <img src="/edvin.png" class="image imageMe" alt="Edvin Nordin"/>
    <div class="is-flex is-flex-direction-column">
      <h1 class="title is-1 has-text-dark customTitle">Edvin Nordin</h1>
      <h1 class="subtitle is-1 customDescription">Your next developer?</h1>
    </div>
  </div>
</section>

  <section class="section projSection has-background-white-ter">
    <h2 class="title is-3 mb-0 has-text-dark">Projects</h2>
    <div class="level horizontal-scroll is-mobile"
    @mouseover="hovering" @mouseleave="stopHovering" >
      <div v-for="project in projects" :key="project.name">
        <a :href="project.link" target="_blank">
          <div class="box level-item is-flex-direction-column is-justify-content-space-between customSize has-background-white" 
           @mouseover="highlight(project)" @mouseleave="stopHighlight(project)"
          :class="project.isHovering ? 'has-background-light' : 'has-background-white'">
            <div class="is-justify-content-flex-start">
              <div class="is-justify-content-space-between">
                <p class="title is-5 customTitle has-text-dark">{{ project.name }}</p>
                <img :src="project.image" :alt="project.name" class="image projImage"/>
              </div>
              <p class="custom-max-width customDescription">{{ project.description }}</p>
            </div>
            <a :href="project.github" target="_blank" class="">
              <img src="/github.png" class="image is-24x24 githubIcon" alt="Github icon"/>
            </a>
          </div>
        </a>
      </div>
    </div>
  </section>
  <section class="section container flex justify-content  has-background-white-ter" >
      <h2 class="title is-3">About Me</h2>
      <p class="subtitle">
        Hello and welocome to my website! I am a 26 years old passionate software engineer located in Umeå that is always excited to learn new things! 
        I am intersted in game creation, computer graphics, web building and visulization and have created several projects in these areas. 
        I am currently looking for a job as a developer and am open to any opportunities that come my way. 
        Check out some of my projects above if you are interested!
      </p> 
    
    </section>
    <section class="section has-background-dark">
      <h3 class="title is-4 has-text-light">Contact Me</h3>
      <p class="subtitle has-text-grey-lighter">This is text on how to contact me or stuff lmao and skibidi <-- Adam</p>

    </section>
</template>

<style>
.imageMe{
  max-width: 600px;
}

.projSection{
  padding-top: 100px;
}

.projImage{
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
  width: 300px;
  height: 450px;
}

.customTitle {
  white-space: nowrap;
  padding-bottom: 15px;
  padding-top: 5px;
}

.customDescription{
  white-space: normal; /* Allows text to wrap to the next line */
  padding-top:15px;
}

.githubIcon{
    bottom:0;
    right:0;
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
