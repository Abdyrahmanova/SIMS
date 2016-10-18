<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">

    </quasar-toolbar-title>

      <quasar-select :model.sync="roleSelect" :options="roleSelectOptions" ok-label="Pick" cancel-label="Cancel" title="Choose Role"></quasar-select>

        <button></button> 

      <button class="primary clear"  v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary'  || roleSelect=='teacher' || roleSelect=='affair' " v-link="'/play/attendance'">
      <i>event_available</i>
      </button>
</div>

    <div v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary'  || roleSelect=='teacher' || roleSelect=='affair' " class="layout-padding">
<div class="card">
 <div class="card-title bg-primary text-white">
   Attendance Report
  </div>

      <div class="item">
      <i>filter_none</i>
      <div class="item-content">
        <div class="item-label"> Class
            <quasar-select multiple :model.sync="multipleSelect" :options="selectOptions" ok-label="Pick" title="Classes"></quasar-select>
            <em>{{multipleSelect}}</em>
        </div>
      </div>
    </div>

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

      <div style="margin-bottom: 30px;">

        <table class="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Present</th>
              <th>Late</th>
              <th>Absent</th>
              <th>Absent with Permission</th>
              <th>Percentage</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Student Name</td>
              <td>G1 A</td>
              <td>20</td>
              <td>5</td>
              <td>2</td>
              <td>2</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>Student Name</td>
              <td>G1 A</td>
              <td>20</td>
              <td>5</td>
              <td>2</td>
              <td>2</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>Student Name</td>
              <td>G1 A</td>
              <td>20</td>
              <td>5</td>
              <td>2</td>
              <td>2</td>
              <td>80%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
roleSelect: 'admin',
      roleSelectOptions: [
        {
          label: 'Admin',
          value: 'admin'
        },
        {
          label: 'Manager',
          value: 'manager'
        },
        {
          label: 'Secretary',
          value: 'secretary'
        },
        {
          label: 'Teacher',
          value: 'teacher'
        },
        {
          label: 'Parent',
          value: 'parent'
        },
        {
          label: 'Student',
          value: 'student'
        },
        {
          label: 'Author',
          value: 'author'
        },
        {
          label: 'Student Affair',
          value: 'affair'
        }
      ],
      multipleSelect: [],
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