<template>
  <article class="w3-container w3-card-2">
    <div class="w3-row">
      <div class="w3-half">
        <header class="w3-xxxlarge"> {{ ban }} </header>
        <div class="w3-medium">{{ desc }}</div>
      </div>

      <div class="w3-half center">
        <svg height="25" width="25" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
          <title id="circle">circle</title>
          <desc>Circle</desc>
          <circle r="0.5" cx="0.5" cy="0.5" :fill="color" stroke-width="1" />Sorry, your browser sucks :( Try switching to chrome, its the gold standard bitch!
        </svg>
      </div>
    </div>
  </article>
</template>

<script>
// Inspired from
// https://www.getrevue.co/app/insights
export default {
  props: {
    ban: {
      type: String,
      default: "0.12%"
    },
    desc: {
      type: String,
      default: "Average Open rate"
    },
    color: {
      type: String,
      default: "red"
    },

  }
}
</script>

<style scoped>
article {
  height: 100px;
  width: 50%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
</style>>