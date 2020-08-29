<template>
  <Table
    :rows="customers"
    :columns="columns"
    tableTitle="Customers List"
    v-on:addNoteModalToggle="addNoteModalToggle"
    v-on:row-on-click="rowClick"
  ></Table>
</template>

<script>
import Table from "@/components/table/Table";
import { mapActions } from "vuex";
export default {
  name: "CustomerTable",
  props: ["customers"],
  components: {
    Table,
  },
  data() {
    return {
      //sortDirection=>
      // -1:unsortable ;
      // 0:not sorted ;
      // 1:ascending ;
      // 2:discending
      columns: [
        {
          keyName: "name",
          displayName: "Name",
          sortDirection: 0,
        },
        {
          keyName: "code",
          displayName: "Code",
          sortDirection: 0,
        },
        {
          keyName: "country",
          displayName: "Country",
          sortDirection: 0,
        },
        {
          sortDirection: -1,
          button: {
            type: "btn-primary",
            text: "+Note",
            datai18n: "",
            emitName: "addNoteModalToggle",
          },
        },
      ],
    };
  },
  methods: {
    ...mapActions(["setFocusingCustomer"]),
    rowClick(data) {
      this.setFocusingCustomer(data);
      this.$router.push("/CustomerDetails");
    },
    addNoteModalToggle(column) {
      console.log("call note");
      console.log(column);
      // this.$router.push({ name: "CustomerNote", params: { ...column } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
