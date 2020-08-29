<template>
  <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 mainDiv">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainDiv"
};
</script>

<style lang="scss" scoped>
.mainDiv {
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0px 1px 3px rgb(207, 207, 207);
}
</style>
