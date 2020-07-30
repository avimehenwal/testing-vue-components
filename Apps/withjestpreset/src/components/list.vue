<template>
  <div>
    <ul>
      <ListItem
        :key="index"
        v-for="(movie, index) in marvelMovies"
        :movie="movie"
      />
    </ul>
  </div>
</template>

<script>
  import ListItem from '@/components/ListItem/list-item.vue'

  export default {

    components: {
      ListItem
    },

    data() {
      return {
        marvelMovies: [
          'Iron Man',
          'Avengers',
          'Infitinity War',
        ]
      }
    }

  }
</script>

<style scoped>

</style>
