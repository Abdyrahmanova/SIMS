<template>
    <div class="layout-padding">

  <vue-chart height="120" type="pie" :data="data" :options="options"></vue-chart>

    </div>

</template>

<script>
import VueChart from 'vue-chart'

export default {
  components: {
    VueChart
  },

  data () {
    return {
      data: {
    labels: [
        'Present',
        'Late Comers',
        'Absent',
        'Absent with Excuse'
    ],
    datasets: [
        {
            data: [300, 50, 100, 50],
            backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED'
                        ],
            hoverBackgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED'
            ]
        }]
      },
      options: {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      }
    }
  }
}
</script>