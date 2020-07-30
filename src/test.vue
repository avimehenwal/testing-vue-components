<template>
  <div>
    <h1>Test Component</h1>
    <h2 id="ani1">
      Hello
      <span class="w3-yellow">
        {{ value }}
      </span>
    </h2>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      default: 'Test'
    }
  }
}
</script>
