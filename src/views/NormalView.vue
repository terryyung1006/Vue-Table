<template>
  <div>
    <MainContainer>
      <slot name="mainContainerContent"></slot>
    </MainContainer>
  </div>
</template>

<script>
import MainContainer from "@/components/layout/MainContainer";

export default {
  name: "NormalView",
  components: {
    MainContainer,
  },
};
</script>

<style lang="scss" scoped></style>
