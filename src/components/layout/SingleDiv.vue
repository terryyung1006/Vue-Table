<template>
  <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 singleDiv">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SingleDiv",
  props: ["backgroundColor"],
  created() {
    $(".subDiv").css("background-color", this.$props.backgroundColor);
  },
};
</script>

<style lang="scss" scoped>
.singleDiv {
  padding-top: 10px;
  padding-bottom: 30px;
}
</style>
