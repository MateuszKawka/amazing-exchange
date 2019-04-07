import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input: [],
    dataReady: false,
    data: Object,
    currency: 'PLN',
    outputCurrency: 'USD',
    baseValue: 0,
    calculateValue: 0,
    valueOfCurrency: 0
  },
  mutations: {
    ADD_DIGIT: (state, payload) => state.input.push(payload),
    REMOVE_DIGIT: state => state.input.pop(),
    SET_DATA: (state, payload) => state.data = payload,
    SET_DATA_READY: (state, payload) => state.dataReady = payload,
    SET_CURRENCY: (state, payload) => state.currency = payload,
    SET_OUTPUT_CURRENCY: (state, payload) => state.outputCurrency = payload,
    SWAP_CURRENCY: state => {
      const currency = state.currency
      const outputCurrency = state.outputCurrency

      state.currency = outputCurrency
      state.outputCurrency = currency

    },
    CALCULATE_OUTPUT: (state) => {
      let value = state.baseValue;
      let exchange = state.valueOfCurrency
      state.calculateValue = (value * exchange).toFixed(2);
    },
    SET_BASE_VALUE: state => {
      const value = state.input.join('')
      state.baseValue = value * 1;
    },
    SET_VALUE_OF_CURRENCY: state => {
      state.valueOfCurrency = state.data.rates[state.outputCurrency]
    }
  },
  getters: {
    getInputText: state => state.input.join(""),
  },
  actions: {
    fetchLastestCurrency(store) {
      fetch(`https://api.exchangeratesapi.io/latest?base=${store.state.currency}`)
        .then(v => v.json())
        .then(v => store.commit("SET_DATA", v))
        .then(v => store.commit("SET_DATA_READY", true))
        .then(v => {
          store.commit('SET_VALUE_OF_CURRENCY')
        })
    },
    swapAction(store) {
      store.commit('SWAP_CURRENCY')
      store.dispatch('fetchLastestCurrency')
      store.commit('CALCULATE_OUTPUT')
    }
  }
})