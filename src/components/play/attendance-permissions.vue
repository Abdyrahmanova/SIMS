<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">
    </quasar-toolbar-title>

        <button v-if= " roleSelect=='affair' "></button> 

      <button class="primary clear"  v-if= " roleSelect=='affair' " v-link="'/play/attendance'">
      <i>event_available</i>
      </button>


        <button v-if= " roleSelect=='affair' "></button> 

      <button class="primary clear"  v-if= " roleSelect=='affair' " v-link="'/play/attendance-report'">
      <i>event_note</i>
      </button>

  </div>

    <div v-if= " roleSelect=='affair' " class="layout-padding">

      <input type="date" is="date" />
      <quasar-select multiple :model.sync="Select" :options="selectOptions" ok-label="Pick" cancel-label="Cancel" title="Choose Class"></quasar-select>
      <quasar-select multiple :model.sync="Select2" :options="selectOptions2" ok-label="Pick" cancel-label="Cancel" title="Absent or Leave"></quasar-select>

        <table class="inner-delimiter">
          <thead>
            <tr>
              <th>Name</th>
              <th><h5><i class="text-primary">person</i></h5></th>
              <th><h5><i class="text-primary">chat_bubble</i></h5></th>
              <th><h5><i class="text-primary">chat</i></h5></th>
              <th><h5><i class="text-primary">event_busy</i></h5></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="n in 12">
              <td>Student Name</td>
              <td><h5><i class="text-primary">person_outline</i></h5></td>
              <td><quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox></td>
              <td><input placeholder="Permission"></td>
              <td><input type="date" is="date" /></td>
            </tr>
          </tbody>
        </table>

        <button class="primary full-width">Save Permissions</button>


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
      ],
      Select2: [],
      selectOptions2: [
        {
          label: 'Absent',
          value: 'Absent'
        },
        {
          label: 'Early Leave',
          value: 'Early Leave'
        }
      ]
    }
  }
}
</script>