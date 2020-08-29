<template>
  <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 subDiv">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SubDiv",
};
</script>

<style lang="scss" scoped>
.subDiv {
  padding-top: 10px;
  padding-bottom: 30px;
  box-shadow: 0px 1px 3px rgb(207, 207, 207);
  background-color: rgb(241, 241, 241);
}
</style>
