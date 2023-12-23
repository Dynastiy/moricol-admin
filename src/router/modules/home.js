import IndexViewVue from "@/modules/Home/IndexPage.vue";

import Transactions from "@/modules/Transactions/IndexPage.vue";
import TransactionDetails from "@/modules/Transactions/uuid/_uuid.vue";


const router = [
  {
    path: "/",
    name: "analytics",
    component: IndexViewVue,
    meta: {
      layout: "AppDashboardLayout",
      parent: "analytics",
      name: "home",
      requiresAuth: true,
      desc: "Analytics page"
    },
  },

  {
    path: "/transactions",
    name: "transaction",
    component: Transactions,
    meta: {
      layout: "AppDashboardLayout",
      parent: "transactions",
      name: "home",
      requiresAuth: true,
      desc: "Transactions page"
    },
  },

  {
    path: "/transaction/:id",
    name: "transaction-details",
    component: TransactionDetails,
    meta: {
      layout: "AppDashboardLayout",
      parent: "transactions",
      name: "Details",
      requiresAuth: true
    },
  },

 
];

export default router;
