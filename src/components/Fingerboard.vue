<template>
  <div>
    <div class="fingerboard">
      <button
        type="button"
        v-for="item in keys"
        :key="item"
        class="fingerboard__key button is-info is-inverted"
        @click="keyClick"
      >{{ item }}</button>
      <button type="button" class="fingerboard__key button is-info is-outlined" @click="remove"><</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fingerboard",
  data() {
    return {
      keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."],
      input: []
    };
  },
  computed: {
    inputText: function() {
      return this.$store.getters.getInputText;
    }
  },
  methods: {
    keyClick(el) {
      this.$store.commit("ADD_DIGIT", el.target.textContent);
    },
    remove() {
      this.$store.commit("REMOVE_DIGIT");
    }
  },
  mounted() {
    this.$store.dispatch("fetchLastestCurrency");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fingerboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  width: 90%;
  position: absolute;
  left: 5%;
  bottom: 10%;
}

.fingerboard__key {
  font-weight: 700;
}
</style>
