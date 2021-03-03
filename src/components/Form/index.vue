<script>
import BaseInput from './../BaseInput/index.vue';
import BaseSelect from './../BaseSelect/index.vue';

import data from './../../data/index.js';
import { sendCalculation } from './../../api/index.js';

import { reactive } from 'vue';

export default {
  name: 'form',
  components: {
    BaseInput,
    BaseSelect,
  },
  computed: {
    fields() {
      return data.fields;
    },
  },
  methods: {
    changeHandler($event, field) {
      this.form[field] = $event.target.value;
    },
    async sendForm() {
      await sendCalculation(this.form);
      this.initForm();
    },
    initForm() {
      data.fields.forEach((field) => {
        this.form[field.id] = '';
      });
    },
  },
  created() {
    this.initForm();
  },
  setup() {
    const form = reactive({});

    return {
      form,
    };
  },
};
</script>

<template>
  <form :class="$style.root">
    <div :class="$style.field" v-for="field in fields" :key="field.id">
      <BaseSelect
        v-if="field.type == 'select'"
        :value="form[field.id]"
        :options="field.options"
        @change="changeHandler($event, field.id)"
      />
      <BaseInput
        v-else
        :value="form[field.id]"
        :placeholder="field.placeholder"
        @input="changeHandler($event, field.id)"
      />
    </div>
    <button :class="$style.button" @click.prevent="sendForm">Расчет</button>
  </form>
</template>

<style module>
.root {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
}

.field {
  margin: 10px;
}

.button {
  position: fixed;
  right: 32px;
  top: 22px;
  height: 42px;
  width: 160px;
  border: 1px solid silver;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s;
  outline: none;
}

.button:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transform: translateY(-8px);
}

.button:active {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transform: translateY(-4px);
}
</style>
