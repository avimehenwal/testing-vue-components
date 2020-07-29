<template>
  <p class="demo">
    {{ msg }}
  </p>
</template>

<script>
  console.log($page.readingTime)

  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>
