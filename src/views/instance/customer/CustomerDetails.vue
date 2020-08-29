<template>
  <div>
    <p>{{ focusingCustomer.name }}</p>
    <p>{{ focusingCustomer.code }}</p>
    <p>{{ focusingCustomer.country }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CustomerDetails",
  props: ["customerInfo"],
  computed: {
    ...mapGetters(["focusingCustomer"]),
  },
};
</script>

<style lang="scss" scoped></style>
