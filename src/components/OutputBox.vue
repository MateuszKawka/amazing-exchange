<template>
  <div class="columns is-mobile is-vcentered">
    <div class="column is-6">
      <b-select v-model="outputCurrency" placeholder="EUR">
        <option v-for="(value, key) in data.rates" :value="key" :key="key">{{ key }}</option>
      </b-select>
    </div>
    <div class="column is-6">
      <p>{{output}}</p>
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
    output() {
      return this.$store.state.calculateValue
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
      this.$store.commit('CALCULATE_OUPUT')
    }
  }
};
</script>