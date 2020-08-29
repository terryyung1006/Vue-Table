<template>
  <tr @click="rowOnClick">
    <Element
      v-for="column in columns"
      :key="column.keyName"
      :column="column"
      :element="element(column.keyName)"
      v-on="$listeners"
    />
  </tr>
</template>

<script>
import Element from "./Element";
export default {
  name: "Row",
  components: {
    Element
  },
  props: ["record", "columns"],
  methods: {
    element(keyName) {
      return this.$props.record[keyName];
    },
    rowOnClick() {
      this.$emit("row-on-click", this.$props.record);
    }
  }
};
</script>

<style lang="scss" scoped></style>
