<template>
  <v-container fluid>
    <!-- <doughnut-chart :options="chartOptions"/> -->
    <!-- <doughnut-chart :chart-data="chartData" :options="chartOptions"/> -->
    <line-chart :chart-data="chartData" :option="chartOptions"></line-chart>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        maintainAspectRatio: false, //アスペクト比を維持するもの
      }
    };
  },
  computed: {
    chartData() {
      return {
        datasets: [
          {
            data: [60, 70, 60, 60]
          }
        ]
      };
    }
  }
  //   data() {
  //     return {
  //       chartDataValues: [25,25,25,25],
  //       chartColors: [
  //         colors.red.lighten1,
  //         colors.blue.lighten1,
  //         colors.yellow.lighten1,
  //         colors.green.lighten1,
  //       ],
  //       chartLabels: ['red', 'blue', 'yellow', 'green'],
  //       chartOptions: {
  //         maintainAspectRatio: false, //アスペクト比を維持するもの
  //         animation: {
  //           duration: 1500,  //アニメーション
  //           easing: 'easeInOutCubic', //なんか速度上がっていく感じのアニメーション
  //         },
  //       },
  //     };
  //   },
  //   computed: {
  //     chartData() {
  //       return {
  //         datasets: [
  //           {
  //             data: this.chartDataValues,
  //             backgroundColor: this.chartColors,
  //           },
  //         ],
  //         labels: this.chartLabels,
  //       };
  //     },
  //   },
};
</script>