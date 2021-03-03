<script>
import { getCalculations } from './../../api/index.js';

//import { reactive } from 'vue';

import { mapState } from 'vuex';

export default {
  name: 'calculation-list',
  methods: {
    async getData() {
      const calculations = await getCalculations();

      this.$store.commit('SET_CALCULATIONS', calculations);
    },
    openCard(name) {
      this.$router.push(`/calculations/${name}`);
    },
  },
  computed: {
    ...mapState({
      calculations: (state) => state.calculations,
    }),
  },
  created() {
    this.getData();
  },
  setup() {},
};
</script>

<template>
  <section :class="$style.root">
    <div
      :class="$style.card"
      v-for="calculation in calculations"
      :key="calculation.name"
      @click="openCard(calculation.name)"
    >
      {{ calculation.name }}
    </div>
    <router-view />
  </section>
</template>

<style module>
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.card {
  cursor: pointer;
  padding: 20px;
  border-left: 1px solid silver;
}

.card:hover {
  border-left: 1px solid green;
}
</style>
