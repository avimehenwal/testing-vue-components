<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TestComponent value="avi" />
  </div>
</template>

<script>
import TestComponent from '@/../../../src/test.vue'

export default {
  name: 'Home',
  components: {
    TestComponent
  }
}
</script>
