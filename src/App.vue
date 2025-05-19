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
    clicking(){
      alert("You clicked on a project!");
    }
  }
};
</script>

<template>
  <div class="flex flex-col justify-center w-full h-screen max-w-full">
    <div class="text-center pb-10">
      <h1 class="text-3xl font-bold underline">Edvin Nordin</h1>
    </div>
    <div class="flex flex-row justify-between w-full px-2 md:px-10">
      <div
        class="border text-center h-50 w-50"
        @click="clicking"
        v-for="project in projects"
        :key="project.name"
      >
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
