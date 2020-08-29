<template>
  <div class="container-fluid mainContainer" :class="dynamicClass">
    <div class="row">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContainer",
  data() {
    return {
      dynamicClass: ""
    };
  },
  mounted() {
    //start animation
    // console.log($(".mainContainer").css("opacity"));
    this.dynamicClass = "create";
    $(".mainContainer").css("opacity");
  }
};
</script>

<style lang="scss" scoped>
.mainContainer {
  opacity: 0;
  transition-duration: 0.15s;
  transition-timing-function: ease-in;
  transition-property: opacity;
  margin-top: 45px;
}

.create {
  opacity: 1;
}
</style>
