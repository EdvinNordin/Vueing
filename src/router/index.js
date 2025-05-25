import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/:name", name: "Project", component: ProjectView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
