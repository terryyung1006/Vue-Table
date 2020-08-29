<template>
  <td>
    <Button
      v-if="'button' in column"
      :button="column.button"
      v-on="$listeners"
    />
    <div v-else>{{ element }}</div>
  </td>
</template>

<script>
import Button from "../smallComponents/Button";
export default {
  name: "Element",
  components: {
    Button,
  },
  props: ["element", "column"],
};
</script>

<style lang="scss" scoped></style>
