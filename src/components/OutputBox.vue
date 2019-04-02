<template>
  <div class="columns is-mobile is-vcentered">
    <div class="column is-6">
      <b-select v-model="outputCurrency" placeholder="EUR">
        <option v-for="(value, key) in data.rates" :value="key" :key="key">{{ key }}</option>
      </b-select>
    </div>
    <div class="column is-6">
      <p>{{calculateOutput}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OutputBox",
  data() {
    return {
      pick: ""
    };
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
    outputCurrency: {
      get: function() {
        return this.$store.state.outputCurrency;
      },
      set: function(value) {
        this.$store.commit("SET_OUTPUT_CURRENCY", value);
      }
    },

    calculateOutput() {
      let value = this.$store.getters.getInputText;
      let exchange = this.$store.getters.valueOfCurrency;
      return value * 1 * exchange;
    }
  }
};
</script>