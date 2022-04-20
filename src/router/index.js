import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import MovieCreate from "../views/MovieCreate.vue";
import MovieShow from "../views/MovieShow.vue";
import MoviesUpdate from "../views/MoviesUpdate.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/movies",
    name: "MoviesIndex",
    component: MoviesIndex,
  },
  {
    path: "/moviecreate",
    name: "MovieCreate",
    component: MovieCreate,
  },
  {
    path: "/movieshow/:id",
    name: "MovieShow",
    component: MovieShow,
  },
  {
    path: "/moviesupdate/:id",
    name: "MoviesUpdate",
    component: MoviesUpdate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
