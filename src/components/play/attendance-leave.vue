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

      <button class="primary clear"  v-if= " roleSelect=='teacher' " v-link="'/play/attendance-entry'">
      <i>event_busy</i>
      </button>

  </div>

    <div v-if= " roleSelect=='teacher' " class="layout-padding">

      <quasar-select :model.sync="Select" :options="selectOptions" ok-label="Pick" cancel-label="Cancel" title="Choose Class"></quasar-select>

        <table class="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th><h5><i class="text-primary">directions_walk</i></h5></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="n in 12">
              <td>Student Name</td>
              <td><quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox></td>
            </tr>
          </tbody>
        </table>

        <button class="primary full-width">Save Leaves</button>


      </div>

</template>

<script>
export default {
  data () {
    return {
      checkboxModel: false,
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