<template>
  <div>
    <button
      type="button"
      class="btn"
      :class="button.type"
      :data-i18n="button.datai18n"
      v-on:click="onClick"
    >
      {{ button.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["button", "data"],
  methods: {
    onClick() {
      console.log("button on click");
      this.$emit(this.$props.button.emitName, this.$props.data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
