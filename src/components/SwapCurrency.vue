<template>
  <button class="button" @click='swap'><b-icon
                pack="fas"
                icon="exchange-alt"
                size="is-small">
            </b-icon></button>
</template>

<script>
export default {
  name: 'SwapCurrency',
  methods: {
    swap() {
      this.$store.dispatch('swapAction')
    }
  }
}
</script>
