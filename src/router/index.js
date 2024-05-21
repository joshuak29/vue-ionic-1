import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import ArtistDetailsPage from "@/pages/ArtistDetailsPage.vue";
import PlayerPage from "@/pages/PlayerPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/artists/:id",
    name: "Artist",
    component: ArtistDetailsPage,
  },
  {
    path: "/player",
    name: "Player",
    component: PlayerPage,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
