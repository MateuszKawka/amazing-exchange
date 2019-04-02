<template>
  <div class="container">
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'InputBox',
  computed: {
    value: function() {
      return this.$store.getters.getInputText
    }
  }
}
</script>
