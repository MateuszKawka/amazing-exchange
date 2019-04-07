<template>
  <section class="section">
    <div class="container box">
      <div class="columns is-mobile is-vcentered">
        <div class="column is-6">
          <CurrencySelect/>
        </div>
        <div class="column is-6">
          <InputBox/>
        </div>
      </div>
      <SwapCurrency/>
      <OutputBox/>
    </div>
    <OptionsSwitch />
    <Fingerboard/>
  </section>
</template>

<script>
import Fingerboard from "@/components/Fingerboard.vue";
import InputBox from "@/components/InputBox.vue";
import OutputBox from "@/components/OutputBox.vue";
import CurrencySelect from "@/components/CurrencySelect.vue";
import OptionsSwitch from "@/components/OptionsSwitch.vue";
import SwapCurrency from "@/components/SwapCurrency.vue";
export default {
  components: {
    Fingerboard,
    InputBox,
    OutputBox,
    CurrencySelect,
    OptionsSwitch,
    SwapCurrency
  }
};
</script>



<style scoped>

</style>
