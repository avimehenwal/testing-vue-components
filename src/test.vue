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
// import anime from 'animejs/lib/anime.es.js'

export default {
  props: {
    value: {
      type: String,
      default: 'Test'
    }
  },
  mounted () {
    // anime({
    //   targets: '#ani1',
    //   translateX: 250,
    //   rotate: '1turn',
    //   backgroundColor: '#87ceeb',
    //   duration: 8000
    // })
  }
}
</script>
