<template>
  <b-field>
    <b-select placeholder="EUR" v-model="value">
      <option v-for="(value, key) in data.rates" :value="key" :key="key">{{ key }}</option>>
    </b-select>
  </b-field>
</template>

<script>
export default {
  name: "CurrencySelect",
  data() {
    return {};
  },
  computed: {
    data: {
      get: function() {
        return this.$store.state.data;
      },
      set: function(newValue) {
        this.$store.commit("SET_CURRENCY", newValue);
      }
    },
    value: {
      get: function() {
        return this.$store.state.currency;
      },
      set: function(newValue) {
        this.$store.commit("SET_CURRENCY", newValue);
        this.$store.dispatch("fetchLastestCurrency");
      }
    }
  }
};
</script>

