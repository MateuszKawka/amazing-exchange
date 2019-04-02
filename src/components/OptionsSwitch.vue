<template>
  <div class="field">
            <b-switch :value="true" v-model="showSaved" true-value="show saved" false-value="show all"
            type="is-info">
                {{showSaved}}
            </b-switch>
        </div>
</template>

<script>
export default {
  name: 'OptionsSwitch',
  data() {
    return {
      showSaved: 'show all'
    }
  }
}
</script>
