<template>
  <div>
    <h1>Temperature</h1>
    <Temperature temp="50" />
  </div>
</template>

<script>
import Temperature from '@/../../../src/temprature.vue'

export default {
  name: 'Home',
  components: {
    Temperature
  }
}
</script>
