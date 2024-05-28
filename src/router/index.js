import { createRouter, createWebHistory } from "@ionic/vue-router";
import ArtistDetailsPage from "@/pages/ArtistDetailsPage.vue";
import PlayerPage from "@/pages/PlayerPage.vue";
import QueuePage from "@/pages/QueuePage.vue";

const routes = [
  {
    path: "/",
    redirect: "/artists/1",
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
  }, 
  {
    path: "/queue",
    name: "Queue",
    component: QueuePage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
