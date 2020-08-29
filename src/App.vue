<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import TableView from "@/views/instance/TableView.vue";

export default {
  name: "App",
  components: {
    TableView,
  },
};
</script>

<style></style>
