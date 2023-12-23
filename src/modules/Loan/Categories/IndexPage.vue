<template>
    <div>
      <div class="tw-flex tw-justify-between tw-items-center">
        <h4 class="tw-capitalize tw-font-semibold">Categories</h4>
        <div>
            <button class="moricol-btn moricol-primary" @click="$router.push('/loan/category/create')">add new category</button>
        </div>
      </div>
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
  