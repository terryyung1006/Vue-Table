<template>
  <div @click="sort" class="column">
    <span v-if="'displayName' in column" :data-i18n="column.datai18n">{{ displayName }}</span>
    <span v-if="column.sortDirection >= 0">
      <i class="fa fas" :class="faSort" style="font-size:14px;" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: ["column"],
  methods: {
    sort() {
      if (this.$props.column.sortDirection == -1) return;
      this.$props.column.sortDirection =
        this.$props.column.sortDirection == 1 ? 2 : 1;
    }
  },
  computed: {
    faSort() {
      //sort icon name
      switch (this.$props.column.sortDirection) {
        case 2:
          return "fa-sort-up";
        case 1:
          return "fa-sort-down";
        default:
          return "fa-sort";
      }
    },
    displayName() {
      return this.$props.column.displayName + " ";
    }
  },
  watch: {
    "column.sortDirection": {
      handler: function() {
        this.$emit("sort", this.$props.column);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.column {
  white-space: nowrap;
}
</style>
