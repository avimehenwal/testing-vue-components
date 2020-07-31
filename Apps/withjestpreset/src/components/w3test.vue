<template>
<div>
  <div class="w3-container w3-red">
    Hello there {{ rest }} Total = {{ total }} Code = {{ Code }}
  </div>
  {{ chartData }}
  <div class="w3-panel" v-anime="animate">
    <GChart
      type="PieChart"
      :data="chartData"
      :options="chartOptions"
      :events="chartEvents"
    />
  </div>
  <GChart
    type="ColumnChart"
    :data="[['Year', 'Sales', 'Expenses', 'Profit'], ['2014', 1000, 400, 200], ['2015', 1170, 460, 250], ['2016', 660, 1120, 300], ['2017', 1030, 540, 350]]"
  />
</div>
</template>

<script>
// Files | Blank | Comment | Code
// SUM: 87  339  259   2399
export default {
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Label', 'values'],
      ],
      chartOptions: {
        title: 'Code Breakdown',
        // is3D: true,
        pieHole: 0.4,
        pieStartAngle: 100,
        colors: ['#6aaa96', '#f1f1f1', '#e67f83', '#f0b8b8', '#00876c', '#d43d51', '#aecdc2']
      },
      chartEvents: {
        'select': () => {
          // handle event here
        }
      },
      Files: 87,
      Blank: 339,
      Comment: 259,
      Code: 2399,
      animate: {
        translateX: 250,
        duration: 5000,
        // borderRadius: ['0%', '50%'],
        scale: 2,
        // translateY: 250,
        easing: 'easeInOutQuad',
        // rotate: '1turn',
        // backgroundColor: '#f0b8b8',
        // duration: 2000,
        loop: true
      }
    }
  },
  mounted () {
    this.update_data()
    // const targets = this.$el;
    // this
    //   .$anime
    //   .timeline()
    //   .add({
    //     targets,
    //     translateX: 250,
    //     easing: 'easeOutExpo',
    //   })
    //   .add({
    //     targets,
    //     translateX: 250,
    //     easing: 'easeOutExpo',
    //   });
  },
  methods: {
    update_data () {
      this.chartData.push(['Blank Lines', this.Blank])
      this.chartData.push(['Comments', this.Comment])
      this.chartData.push(['Real Code', this.rest])
    }
  },
  computed: {
    rest () {
      return this.Code - (this.Blank + this.Comment)
    },
    total () {
      return this.Blank + this.Comment + this.rest
    }
  }
}
</script>

<style>

</style>