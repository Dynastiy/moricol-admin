import Home from "@/modules/ErrorPages/Error404View.vue";


const router = [
  {
    path: "*",
    name: "analytics",
    component: Home,
    meta: {
      layout: "AppDefaultLayout",
      parent: "Error 404",
      name: "Error 404",
    //   requiresAuth: true,
      desc: "Error Page"
    },
  },
];

export default router;
