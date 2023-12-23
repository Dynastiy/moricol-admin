import Vue from "vue";
import VueRouter from "vue-router";

// import store from "@/store";

// Routes
import Auth from "./modules/auth";
import Loan from "./modules/loan";
import ErrorPages from "./modules/errors"

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(Auth, Loan, ErrorPages),
});

// router.beforeEach((to, from, next) => {
//   var isLoggedIn = localStorage.getItem("token");
//   Check if the route requires authentication
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     Check if the user is authenticated
//     if (!isLoggedIn) {
//       Redirect to the login page
//       next({ path: "/sign-in", query: { redirectFrom: to.fullPath } });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
