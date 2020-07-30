<!-- .vuepress/components/TagLinks.vue -->

<template lang="html">
  <div>
    <Badge type="warning" vertical="top" :text="this.text" />

    <router-link
      style="margin-right:3px;"
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tags.html#${tag}`}"
    >
      <Badge type="tip" :text="tag"/>
    </router-link>
    <!-- Already have last update on the bottom of page -->
    <!-- <span>
      <Badge type="warning" :text="$page.lastUpdated" />
    </span> -->
  </div>
</template>

<script>
  export default {
    computed: {
      words () {
        return this.$page.readingTime.words + ' words'
      },
      text () {
        return this.$page.readingTime.text + ', ' + this.words
      }
    }
  }
</script>

<style scoped>

</style>
