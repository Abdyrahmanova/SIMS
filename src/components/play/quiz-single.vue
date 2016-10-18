<template>
  <div>
      <div slot="header" class="toolbar white">
    <button v-link="'/play/quizzes'">
      <i>keyboard_arrow_left</i>
    </button>
    <quasar-toolbar-title :padding="1">

    </quasar-toolbar-title>

      <button>
      <i>save</i>
      </button>

      <button>
      </button>

      <button v-link="'/play/news-add'">
      <i>add</i>
      </button>

      <button>
      </button>

        <quasar-popover v-ref:classes>
          <button slot="target">
            <i>filter_none</i>
          </button>

          <div class="list item-delimiter highlight">
            <div
              class="item item-link"
              @click="showToast(), $refs.classes.close()"
            >
              <div class="item-content">
                <div class="item-label">G1 A</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.classes.close()"
            >
              <div class="item-content">
                <div class="item-label">G1 B</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.classes.close()"
            >
              <div class="item-content">
                <div class="item-label">G2 A</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.classes.close()"
            >
              <div class="item-content">
                <div class="item-label">G2 B</div>
              </div>
            </div>

          </div>
        </quasar-popover>

      <button>
      </button>

        <quasar-popover v-ref:roles>
          <button slot="target">
            <i>people</i>
          </button>

          <div class="list item-delimiter highlight">
            <div
              class="item item-link"
              @click="showToast(), $refs.roles.close()"
            >
              <div class="item-content">
                <div class="item-label">Students</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.roles.close()"
            >
              <div class="item-content">
                <div class="item-label">Parents</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.roles.close()"
            >
              <div class="item-content">
                <div class="item-label">Teachers</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.roles.close()"
            >
              <div class="item-content">
                <div class="item-label">Managers</div>
              </div>
            </div>
          </div>
        </quasar-popover>
  </div>

    <div class="layout-padding">

        <table :class="style" class="quasar-table full-width">
          <thead>
            <tr>
              <th class="text-center"></th>
              <th class="text-left">Name</th>
              <th class="text-center">Mark</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for= "n in 10">
              <td class="text-center"><img class="avatar" :src="'statics/boy.jpg'"></td>
              <td class="text-left">Student Name</td>
              <td class="text-center">8</td>
            </tr>

          </tbody>
        </table>


  <vue-chart height="100" type="bar" :data="data" :options="options"></vue-chart>


  </div>
  <button
  class="primary circular absolute-bottom-right"
  style="right: 20px; bottom: 20px;" 
    v-link="'/play/timetable'"
  >
<i>save</i>
</button>
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
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
    ],
    datasets: [
        {
            data: [0, 1, 1, 1, 3, 3, 2, 4, 2, 2, 1],
                backgroundColor: 'fillPattern'

        }]
      },
      number: 3,
      select: '',
      selectOptions: [
        {
          label: 'G1 A',
          value: 'G1 A'
        },
        {
          label: 'G1 B',
          value: 'G1 B'
        }
      ]
    }
  }
}
</script>