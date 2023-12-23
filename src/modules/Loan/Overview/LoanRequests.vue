<template>
  <div>
    <h4 class="tw-capitalize tw-font-semibold">{{ status }} loan requests</h4>
    <table-component :items="items" />
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
export default {
  components: { TableComponent },
  data() {
    return {
      items: [],
    };
  },

  computed:{
    status(){
      return this.$route.query.status
    }
  }
};
</script>

<style></style>
