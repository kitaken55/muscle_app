<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  name: "chart",
  data() {
    return {
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Line Dataset",
            data: [10, 50, 20, 30, 35, 30, 10, 40, 60, 20, 20, 10, 30, 90, 40],
            borderColor: "#CFD8DC",
            fill: false,
            type: "line",
            lineTension: 0.3
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Month"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 1
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.data, this.options);
  }
};
</script>