<template>
  <NormalView>
    <SingleDiv slot="mainContainerContent">
      <CustomerTable :customers="allCustomers" />
    </SingleDiv>
  </NormalView>
</template>

<script>
import NormalView from "@/views/NormalView";
import SingleDiv from "@/components/layout/SingleDiv";
import CustomerTable from "@/components/table/instance/CustomerTable.vue";
import { mapGetters } from "vuex";

export default {
  name: "TableView",
  components: {
    NormalView,
    CustomerTable,
    SingleDiv,
  },
  computed: {
    ...mapGetters(["allCustomers"]),
  },
};
</script>

<style lang="scss" scoped></style>
