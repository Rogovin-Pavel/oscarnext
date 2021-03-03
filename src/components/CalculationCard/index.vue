<script>
import { reactive } from 'vue';

import { mapState } from 'vuex';

export default {
  name: 'calculation-card',
  computed: {
    ...mapState({
      calculations: (state) => state.calculations,
    }),
    results() {
      return [...Object.values(this.calculation.result_CO2_1), ...Object.values(this.calculation.result_CO2_2)];
    },
  },
  created() {
    this.calculation = this.calculations.find((calculation) => calculation.name == this.$route.params.id);
  },
  setup() {
    const calculation = reactive({});
    return { calculation };
  },
};
</script>

<template>
  <div :class="$style.root">
    <h3 :class="$style.title">{{ calculation.name }}</h3>
    <table :class="$style.table">
      <tr :class="$style.row">
        <td :class="$style.cell">Наименование</td>
        <td :class="$style.cell">ГОСТ</td>
        <td :class="$style.cell">Количество</td>
        <td :class="$style.cell">Ед. измерения</td>
      </tr>
      <tr :class="$style.row" v-for="(result, index) in results" :key="index">
        <td :class="$style.cell">{{ result.mat_name }}</td>
        <td :class="$style.cell">{{ result.mat_gost }}</td>
        <td :class="$style.cell">{{ result.mat_kol }}</td>
        <td :class="$style.cell">{{ result.mat_izm }}</td>
      </tr>
    </table>
  </div>
</template>

<style module>
.root {
  width: 100%;
}

.table {
  margin: 0 auto;
  border: 1px solid silver;
  border-radius: 6px;
}

.cell {
  padding: 10px;
  border: 1px solid silver;
}
</style>
