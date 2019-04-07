<template>
  <div class="container">{{value}}</div>
</template>

<script>
export default {
  name: "InputBox",
  computed: {
    value: {
      get() {
        return this.$store.getters.getInputText;
      },
      set() {
        this.$store.commit("CALCULATE_OUTPUT");
      }
    }
  }
};
</script>
