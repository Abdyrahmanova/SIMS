<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">
    </quasar-toolbar-title>

        <button v-if= " roleSelect=='teacher' "></button> 

      <button class="primary clear"  v-if= " roleSelect=='teacher' " v-link="'/play/attendance'">
      <i>event_available</i>
      </button>


        <button v-if= " roleSelect=='teacher' "></button> 

      <button class="primary clear"  v-if= " roleSelect=='teacher' " v-link="'/play/attendance-leave'">
      <i>directions_walk</i>
      </button>

  </div>

    <div v-if= " roleSelect=='teacher' " class="layout-padding">

      <quasar-select :model.sync="Select" :options="selectOptions" ok-label="Pick" cancel-label="Cancel" title="Choose Class"></quasar-select>

        <table class="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th><h5><i class="text-primary">person</i></h5></th>
              <th><h5><i class="text-primary">directions_run</i></h5></th>
              <th><h5><i class="text-primary">person_outline</i></h5></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="n in 12">
              <td>Student Name</td>
              <td><quasar-radio :model.sync="status" value="present"></quasar-radio></td>
              <td><quasar-radio :model.sync="status" value="late"></quasar-radio></td>
              <td><quasar-radio :model.sync="status" value="absent"></quasar-radio></td>
            </tr>
          </tbody>
        </table>

        <button class="primary full-width">Save Attendance</button>


      </div>

</template>

<script>
export default {
  data () {
    return {
      status: 'present',
      roleSelect: 'teacher',
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