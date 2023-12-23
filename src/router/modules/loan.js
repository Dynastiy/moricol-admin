import Home from "@/modules/Loan/Overview/IndexPage.vue";
import LoanRequests from "@/modules/Loan/Overview/LoanRequests.vue";
import Transactions from "@/modules/Loan/Transaction/IndexPage.vue"
import LoanCategories from "@/modules/Loan/Categories/IndexPage.vue"
import CreateLoanCategory from "@/modules/Loan/Categories/CreateLoanCategory.vue"


const router = [
  {
    path: "/loan/home",
    name: "loan-analytics",
    component: Home,
    meta: {
      layout: "AppDashboardLayout",
      parent: "overview",
      name: "loan admin home",
      isSubPage: false,
    //   requiresAuth: true,
      desc: "Overview page for loan admin"
    },
  },

  {
    path: "/loan-requests",
    name: "loan-requests",
    component: LoanRequests,
    meta: {
      layout: "AppDashboardLayout",
      parent: "Overview",
      name: "loan requests",
      isSubPage: false,
    //   requiresAuth: true,
      desc: "Loan requests"
    },
  },

  {
    path: "/loan/transactions",
    name: "transactions",
    component: Transactions,
    meta: {
      layout: "AppDashboardLayout",
      parent: "transactions",
      name: "transactions",
      isSubPage: false,
    //   requiresAuth: true,
      desc: "transactions"
    },
  },

  {
    path: "/loan/categories",
    name: "loan-categories",
    component: LoanCategories,
    meta: {
      layout: "AppDashboardLayout",
      parent: "loan-categories",
      name: "loan categories",
      isSubPage: false,
    //   requiresAuth: true,
      desc: "loan-categories"
    },
  },

  {
    path: "/loan/category/create",
    name: "create-loan-category",
    component: CreateLoanCategory,
    meta: {
      layout: "AppDashboardLayout",
      parent: "loan-categories",
      name: "create loan category",
      isSubPage: true,
    //   requiresAuth: true,
      desc: "loan categories"
    },
  },
];

export default router;
