<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">
    </quasar-toolbar-title>

<quasar-select type="radio" :model.sync="roleSelect" :options="roleSelectOptions"></quasar-select>

<!--
Select Date Field - For Management, the user can choose any date to view Attendance Statistics for that date
-->

        <button v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary' || roleSelect=='affair' ">
                <quasar-datetime type="date" format="DD/MM/YYYY" :model.sync="model"></quasar-datetime>
        </button> 

<!--
Attendance Report Button - For Management, it redirects the user to Attendance Report Page
-->

        <button v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary' || roleSelect=='affair' "></button> 

      <button class="primary clear"  v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary' || roleSelect=='affair' " v-link="'/play/attendance-report'">
      <i>event_note</i>
      </button>

<!--
Enter Leaves Button - For Students Affairs, it redirects the students affairs to Enter Permissions Page
-->

        <button v-if= " roleSelect=='affair' "></button> 

      <button class="primary clear"  v-if= " roleSelect=='affair' " v-link="'/play/attendance-permissions'">
      <i>chat</i>
      </button>

<!--
Enter Attendance Button - For Teacher, it redirects the teacher to Enter Attendance Page
-->

        <button v-if= " roleSelect=='teacher' "></button> 

      <button class="primary clear"  v-if= " roleSelect=='teacher' " v-link="'/play/attendance-entry'">
      <i>event_busy</i>
      </button>

<!--
Enter Leaves Button - For Teacher, it redirects the teacher to Enter Leaves Page
-->

        <button v-if= " roleSelect=='teacher' "></button> 

      <button class="primary clear"  v-if= " roleSelect=='teacher' " v-link="'/play/attendance-leave'">
      <i>directions_walk</i>
      </button>

<!--
Classes Button - For Management to choose a related class to show only this class`s related content within a page
works as a Filter
-->

      <button v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary'  || roleSelect=='teacher' || roleSelect=='affair' ">
      </button>

        <quasar-popover v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary'  || roleSelect=='teacher' || roleSelect=='affair' " v-ref:classes>
          <button slot="target" class="primary clear">
            <i>filter_none</i>
          </button>

          <div class="list highlight">
            <div
              class="item item-link item-delimiter"
              v-for="item in Classes"
              @click="showToast(), $refs.classes.close()"
            >
              <div class="item-content">
                <div>{{item.class}}</div>
              </div>
            </div>
          </div>
        </quasar-popover>

<!--
Kids Button - For Parent to choose a kid to show only this kid`s related content within a page
works as a Filter
-->

      <button  v-if= " roleSelect=='parent' ">
      </button>

        <quasar-popover v-ref:kids v-if= " roleSelect=='parent' ">
          <button slot="target" class="primary clear">
            <i>face</i>
          </button>

          <div class="list highlight">
            <div
              class="item item-link item-delimiter"
              v-for="item in Kids"
              @click="showToast(), $refs.kids.close()"
            >
              <div class="item-content">
                <div>{{item.kid}}</div>
              </div>
            </div>
          </div>
        </quasar-popover>


  </div>
    <div class="layout-padding">
<!--
Chart for Management containg all their related classes`s students attendance statistics for Today or chosen date from Date Picker in Actions Bar
-->
  <vue-chart height="120" type="pie" :data="data" :options="options" v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='secretary' || roleSelect=='teacher' || roleSelect=='affair'"></vue-chart>
  
<!--
Chart for Parent or Student to display his overall Attendance Statistics
-->
  <vue-chart height="120" type="pie" :data="studentdata" :options="options" v-if= " roleSelect=='parent' || roleSelect=='student'"></vue-chart>

<!--
shown for Parent or Student to display Today`s Status
-->
      <p class="item-content text-primary" v-if= " roleSelect=='parent' || roleSelect=='student'">Today`s Status: Present</p>

<!--
Table for Management to view Attendance Statistics in details
-->

      <div class="list item-inset-delimiter" v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='secretary' || roleSelect=='teacher' || roleSelect=='affair'">

        <div v-for="item in Status" class="item text-{{item.color}}">
          <i class="item-primary text-{{item.color}}">{{item.icon}}</i>
          <div class="item-content has-secondary">{{item.type}}</div>
          <div class="item-secondary stamp">
            {{item.total}}
          </div>
        </div>

        </div>

<!--
Table for Parent or Student to view Attendance Statistics in details
-->

      <div class="list item-inset-delimiter" v-if= " roleSelect=='parent' || roleSelect=='student'">

        <div v-for="item in StudentStatus" class="item text-{{item.color}}">
          <i class="item-primary text-{{item.color}}">{{item.icon}}</i>
          <div class="item-content has-secondary">{{item.type}}</div>
          <div class="item-secondary stamp">
            {{item.total}}
          </div>
        </div>

        </div>



      <div class="list">
<quasar-collapsible v-for="item in StatusDetails"  :icon="item.icon" :label="item.type">
          <div class="item" v-for="n in 3">
            <i class="item-primary">event</i>
            <div class="item-content">
              Week {{ n + 1 }}
            </div>
          </div>





      <div class="list bordered inner-delimiter" >

  <div class="list-header inverted">
    Today 30/09/2016
    <div  v-if= " roleSelect=='parent' " class="pull-right">Status: Present</div>
    </div>

      </div>

      <ul class="popout collapsible">

        <li v-for="item in StatusDetails"  v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='secretary' || roleSelect=='teacher' || roleSelect=='affair'" v-collapsible>
          <div><i>{{item.icon}}</i>{{item.type}}</div>
          <div>
  <div class="item">Total: {{item.total}}</div>
  <div v-for="n in 10" class="item">Class - Student Name</div>
          </div>
        </li>

        <li v-for="item in StudentStatusDetails"  v-if= " roleSelect=='parent' || roleSelect=='student'" v-collapsible>
          <div><i>{{item.icon}}</i>{{item.type}}</div>
          <div>
  <div class="item">Total: {{item.total}}</div>
  <div v-for="n in 10" class="item">Date - Permission (in case of permissions)</div>
          </div>
        </li>

      </ul>

  </div>
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
      model: '2016-09-18T10:45:00.000Z',
      Status: [
      { type: 'Present', total: '300', color: 'primary', icon: 'person' },
      { type: 'Late', total: '50', color: 'pink', icon: 'directions_run' },
      { type: 'Late with Permission', total: '50', color: 'indigo', icon: 'chat' },
      { type: 'Absent', total: '100', color: 'secondary', icon: 'person_outline' },
      { type: 'Absent with Permission', total: '50', color: 'info', icon: 'chat' },
      { type: 'Early Leave', total: '1', color: 'negative', icon: 'directions_walk' },
      { type: 'Early Leave with Permission', total: '10', color: 'warning', icon: 'chat' }
      ],
      StudentStatus: [
      { type: 'Present', total: '100', color: 'primary', icon: 'person' },
      { type: 'Late', total: '50', color: 'pink', icon: 'directions_run' },
      { type: 'Late with Permission', total: '50', color: 'indigo', icon: 'chat' },
      { type: 'Absent', total: '10', color: 'secondary', icon: 'person_outline' },
      { type: 'Absent with Permission', total: '10', color: 'info', icon: 'chat' },
      { type: 'Early Leave', total: '1', color: 'negative', icon: 'directions_walk' },
      { type: 'Early Leave with Permission', total: '10', color: 'warning', icon: 'chat' }
      ],
      StatusDetails: [
      { type: 'Late', total: '50', n: 'pink', icon: 'directions_run' },
      { type: 'Late with Permission', total: '50', n: 'indigo', icon: 'chat' },
      { type: 'Absent', total: '10', n: 'secondary', icon: 'person_outline' },
      { type: 'Absent with Permission', n: '10', color: 'info', icon: 'chat' },
      { type: 'Early Leave', total: '1', n: 'negative', icon: 'directions_walk' },
      { type: 'Early Leave with Permission', n: '10', color: 'warning', icon: 'chat' }
      ],
      StudentStatusDetails: [
      { type: 'Late', total: '50', n: 'pink', icon: 'directions_run' },
      { type: 'Late with Permission', total: '50', n: 'indigo', icon: 'chat' },
      { type: 'Absent', total: '10', n: 'secondary', icon: 'person_outline' },
      { type: 'Absent with Permission', n: '10', color: 'info', icon: 'chat' },
      { type: 'Early Leave', total: '1', n: 'negative', icon: 'directions_walk' },
      { type: 'Early Leave with Permission', n: '10', color: 'warning', icon: 'chat' }
      ],
      Classes: [
      { class: 'G1 A' },
      { class: 'G1 B' },
      { class: 'G2 A' },
      { class: 'G2 B' }
      ],
      Kids: [
      { kid: 'Kid #1' },
      { kid: 'Kid #2' }
      ],
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
          label: 'Studnets Affair',
          value: 'affair'
        }
      ],

options: {
  legend: {
      display: false
  }
},
          data: {

    labels: [
        'Present',
        'Late',
        'Late with Permission',
        'Absent',
        'Absent with Permission',
        'Early Leave',
        'Early Leave with Permission'
    ],
    datasets: [
        {
            data: [300, 50, 50, 100, 50, 1, 10],
            backgroundColor: [
            '#027BE3',
            '#E91E63',
            '#3F51B5',
            '#26A69A',
            '#31CCEC',
            '#DB2828',
            '#F2C037'
                        ],
            hoverBackgroundColor: [
            '#027BE3',
            '#E91E63',
            '#3F51B5',
            '#26A69A',
            '#31CCEC',
            '#DB2828',
            '#F2C037'
            ]
        }]
},
          studentdata: {

    labels: [
        'Present',
        'Late',
        'Late with Permission',
        'Absent',
        'Absent with Permission',
        'Early Leave',
        'Early Leave with Permission'
    ],
    datasets: [
        {
            data: [100, 50, 50, 10, 10, 1, 10],
            backgroundColor: [
            '#027BE3',
            '#E91E63',
            '#3F51B5',
            '#26A69A',
            '#31CCEC',
            '#DB2828',
            '#F2C037'
                        ],
            hoverBackgroundColor: [
            '#027BE3',
            '#E91E63',
            '#3F51B5',
            '#26A69A',
            '#31CCEC',
            '#DB2828',
            '#F2C037'
            ]
        }]
}
    }
  }
}
</script>