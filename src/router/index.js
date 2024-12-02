import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import store from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true, 
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
      meta: {
        requiresAuth: false, 
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        requiresAuth: false, 
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const isAuthChecked = store.getters["isAuthChecked"];
  const isAuth = store.getters["isAuthenticated"];

  if (!isAuthChecked) {
    await store.dispatch("listenToAuthChanges");
  }

  if (to.meta.requiresAuth && !isAuth) {

    next("/login");
  } else if (!to.meta.requiresAuth && isAuth) {
    next("/");
  } else {
    next();
  }
});

export default router;
