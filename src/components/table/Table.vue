<template>
  <div class="baseDiv">
    <h3 class="text-center" data-i18n="tableTitle.datai18n">
      <strong>{{ tableTitle }}</strong>
    </h3>
    <div class="tableDiv col-xs-11">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col" v-for="column in columns" :key="column.name">
              <Column :column="column" v-on:sort="watchOnColumnSort" />
            </th>
          </tr>
        </thead>
        <tbody v-scroll:throttle="{ fn: tbodyScroll, throttle: 300 }">
          <Row
            v-for="record in records"
            :key="record.rowId"
            :record="record"
            :columns="columns"
            v-on="$listeners"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Row from "./Row";
import Column from "./Column";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "Table",
  props: ["rows", "columns", "tableTitle"],
  components: {
    Row,
    Column,
  },
  methods: {
    created() {
      // $("tbody").on("scroll", this.tbodyScroll);
    },
    tbodyScroll: () => {
      //TODO: if scroll to bottom
      //TODO: load next page data
      console.log("table scroll");
      // this.displayEnd += 20;
    },
    compareValues(key, order = 1) {
      return function innerSort(a, b) {
        if (!(key in a) || !(key in b)) {
          return 0;
        }

        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return order === 2 ? comparison * -1 : comparison;
      };
    },
    watchOnColumnSort(newColumn) {
      //do nothing if this column does not have sort direction
      if (newColumn.sortDirection <= 0) return;
      this.onsortDirectionChange(newColumn);
    },
    onsortDirectionChange(newColumn) {
      if (newColumn.sortDirection <= 0) return;

      this.$props.rows.sort(
        this.compareValues(newColumn.keyName, newColumn.sortDirection)
      );
      this.$props.columns.forEach((column) => {
        if (column.sortDirection <= 0) return;

        //reset other columns sort direction
        if (column.keyName !== newColumn.keyName) column.sortDirection = 0;
      });
    },
  },
  data() {
    return {
      displayStart: 0,
      displayEnd: 20,
    };
  },
  computed: {
    records() {
      if (!this.rows) return;

      //assign id for v-for
      let records = this.rows.map((row) => {
        var container = { ...row, rowId: uuidv4() };
        return container;
      });
      return records.slice(this.displayStart, this.displayEnd);
    },
    watchColumns() {
      //vue watch cannot compare object in array,
      // so use such tricky way to props in other type so vue watch can compare
      return JSON.parse(JSON.stringify(this.columns));
    },
  },
};
</script>

<style lang="scss" scoped>
.tableDiv {
  overflow: scroll;
  margin-left: 3vw;
  margin-right: 3vw;
  height: calc(100vh - 1.75rem - 0.5rem - 80px);
}

.baseDiv {
  padding-bottom: 20px;
  box-shadow: 0px 0px 3px rgb(207, 207, 207);
}
</style>
