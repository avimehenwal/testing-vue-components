<template>
  <v-container>
    <TestComponent value="avi" />
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import TestComponent from '@/../components/test.vue'
  import { GChart } from 'vue-google-charts'

  export default Vue.extend({
    name: 'HelloWorld',
    components: {
      TestComponent,
      GChart
    },
    data: () => ({
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    })
  })
</script>
