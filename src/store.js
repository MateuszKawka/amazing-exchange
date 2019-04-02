import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input: [],
    data: Object,
    currency: 'PLN',
    outputCurrency: 'EUR'
  },
  mutations: {
    ADD_DIGIT: (state, payload) => state.input.push(payload),
    REMOVE_DIGIT: state => state.input.pop(),
    SET_DATA: (state, payload) => state.data = payload,
    SET_CURRENCY: (state, payload) => state.currency = payload,
    SET_OUTPUT_CURRENCY: (state, payload) => state.outputCurrency = payload,
    SWAP_CURRENCY: state => {
      const currency = state.currency
      const outputCurrency = state.outputCurrency
      state.currency = outputCurrency
      state.outputCurrency = currency
    }
  },
  getters: {
    getInputText: state => state.input.join(""),
    valueOfCurrency: state => state.data.rates[state.outputCurrency]
  },
  actions: {
    fetchLastestCurrency(store) {
      fetch(`https://api.exchangeratesapi.io/latest?base=${store.state.currency}`).then(v => v.json()).then(v => store.commit("SET_DATA", v))
    }
  }
})