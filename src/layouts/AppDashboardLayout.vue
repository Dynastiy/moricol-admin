<template>
  <div>
    <div class="">
      <app-drawer :menu="menu" class="lg:tw-block md:tw-block tw-hidden" />
      <div class="lg:tw-pl-64 md:tw-pl-64 tw-pl-0 tw-w-full">
        <top-bar :menu="menu" class="" />
        <div class="tw-p-6">
          <span v-if="isSubPage"
            class="tw-flex tw-items-center tw-gap-1 tw-mb-4"
            role="button"
            @click="$router.go(-1)"
          >
            <i-icon icon="heroicons-outline:arrow-narrow-left" />
            <span class="tw-text-sm tw-font-medium">Back</span>
          </span>
          <div>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppDrawer from "@/components/Navigation/Drawers/PrimaryDrawer.vue";
import TopBar from "@/components/Layout/TopBar.vue";
export default {
  components: { AppDrawer, TopBar },

  name: "DashboardLayout",
  data() {
    return {
      menu: [
        {
          title: "Dashboard",
          icon: "ic:round-dashboard",
          parent: "overview",
          url: "/loan/home",
          hasChildren: false,
        },

        {
          title: "Transactions",
          icon: "icon-park-solid:transaction",
          parent: "transactions",
          url: "/loan/transactions",
          hasChildren: false,
        },

        {
          title: "Loan Category",
          icon: "bxs:category",
          parent: "loan-categories",
          url: "/loan/categories",
          hasChildren: false,
        },
      ],
    };
  },
  computed: {
    name() {
      return this.$options.filters.titleCase(this.$route.meta.name);
    },

    parent() {
      return this.$options.filters.titleCase(this.$route.meta.parent);
    },

    isSubPage(){
      return this.$route.meta.isSubPage 
    }
  },
  
  // Vue head to modify the head data
  head: {
    title: function () {
      return {
        inner: this.name,
        separator: "-",
        complement: this.parent,
      };
    },
    meta: [{ name: "description", content: "My description", id: "desc" }],
  },
};
</script>

<style></style>
