<template>
  <div>
    <div class="layout-padding">

      <div class='col-md-12 text-center'>
        <canvas id="canvas" height="300" width="800"></canvas>
      </div>


          <br><br>
          <p>6- a div to have full width and contain 3 input fields beside each other and each fills its part:</p>
          <div class="row">
            <input class="auto">
            <input class="auto">
            <input class="auto">
          </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
module.exports = {
  ready: function () {
    var ctx = document.getElementById('canvas').getContext('2d')
    var data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
    new Chart(ctx).Line(data, {responsive: true})
  }
}
</script>
