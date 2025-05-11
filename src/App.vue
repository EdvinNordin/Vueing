<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Project 1",
          description: "Water"
        },
        {
          name: "Project 2",
          description: "Game"
        },
        {
          name: "Project 3",
          description: "Tabs"
        }
      ],
    };
  },

  methods: {
    mouseEnter(project) {
      project.temp = project.description;
      project.description = "hovering";
      
    },
    mouseLeave(project) {
      project.description = project.temp;
    }
  },
};
</script>

<template>
  <div class="text-center pb-10">
    <h1 class="text-3xl font-bold underline">Edvin Nordin</h1>
  </div>
  <div class="flex flex-row justify-between">
    <div class="border w-1/3 text-center h-50"
    v-for="project in projects"
    @mouseover="mouseEnter(project)"
    @mouseleave="mouseLeave(project)">

      <h3>{{project.name}}</h3>
      <p>{{project.description}}</p>

    </div>
  </div>
</template>

<style></style>
