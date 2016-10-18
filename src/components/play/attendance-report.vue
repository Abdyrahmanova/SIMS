<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">
    </quasar-toolbar-title>

        <button v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary' || roleSelect=='affair' "></button> 

      <button class="primary clear"  v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary' || roleSelect=='affair' " v-link="'/play/attendance'">
      <i>event_available</i>
      </button>

        <button v-if= " roleSelect=='affair' " ></button> 

      <button class="primary clear"  v-if= " roleSelect=='affair' " v-link="'/play/attendance-permissions'">
      <i>chat</i>
      </button>

  </div>

    <div class="layout-padding" v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary' || roleSelect=='affair' ">
<div class="card">

      <quasar-select multiple :model.sync="Select" :options="selectOptions" ok-label="Pick" cancel-label="Cancel" title="Choose Class"></quasar-select>

      <div class="item">
      <i>today</i>
      <div class="item-content">
        <div class="item-label"> Start Date
        </div>
      </div>
      <div class="item-content">
<input type="date" is="date" />
      </div>
    </div>
      <div class="item">
      <i>today</i>
      <div class="item-content">
        <div class="item-label"> End Date
        </div>
      </div>
      <div class="item-content">
<input type="date" is="date" />
      </div>
    </div>

        <button class="primary full-width">Show Attendance Report</button>

    </div>

        <table class="inner-delimiter">
          <thead>
            <tr>
              <th>Name</th>
              <th><h5><i class="text-primary">person</i></h5></th>
              <th><h5><i class="text-primary">directions_run</i></h5></th>
              <th><h5><i class="text-primary">person_outline</i></h5></th>
              <th><h5><i class="text-primary">chat</i></h5></th>
              <th><h5><i class="text-primary">directions_walk</i></h5></th>
              <th><h5><i class="text-primary">chat</i></h5></th>
              <th><h5><i class="text-primary">insert_chart</i></h5></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="n in 12">
              <td>Student Name</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>90%</td>
            </tr>
          </tbody>
        </table>

      </div>

</template>

<script>
export default {
  data () {
    return {
      checkboxModel: false,
      roleSelect: 'affair',
      Select: [],
      selectOptions: [
        {
          label: 'G1 A',
          value: 'G1 A'
        },
        {
          label: 'G1 B',
          value: 'G1 B'
        },
        {
          label: 'G2 A',
          value: 'G2 A'
        },
        {
          label: 'G2 B',
          value: 'G2 B'
        },
        {
          label: 'G3 A',
          value: 'G3 A'
        }
      ]
    }
  }
}
</script>