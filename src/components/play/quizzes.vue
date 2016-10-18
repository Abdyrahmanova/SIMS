<template>
  <div>
      <div slot="header" class="toolbar white">

    <quasar-toolbar-title :padding="1">

    </quasar-toolbar-title>

<!--Select Role-->
<!--a Dropdown to show different views for different roles - will be removed in final product-->
<quasar-select type="radio" :model.sync="roleSelect" :options="roleSelectOptions"></quasar-select>
<!--Select Role-->

<!--Add News Button-->
 <!--For Management, it redirects the user to Add new News Page-->
      <button class="primary clear"  v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary'  || roleSelect=='teacher' " v-link="'/play/user-add'">
      <i>add</i>
      </button>
<!--Add News Button-->

  </div>

    <div class="layout-padding">
<div class="card" v-if= "roleSelect=='admin' || roleSelect=='manager'">
  <!--Grade Select Field-->
  <div class="item multiple-lines">
    <i class="item-primary">dvr</i>
    <div class="item-content">
      <quasar-select class="full-width" type="radio" :model.sync="GradeSelect" :options="GradeSelectOptions"></quasar-select>
    </div>
  </div>
  <!--Grade Select Field-->
  <!--Subject Select Field-->
  <div class="item multiple-lines">
    <i class="item-primary">content_paste</i>
    <div class="item-content">
    <quasar-select class="full-width" type="radio" :model.sync="Subject" :options="SubjectOptions"></quasar-select>
    </div>
    </div>
  <!--Subject Select Field-->
<button class="primary full-width" >
  Show Quizzes
</button>
</div>

<table class="quasar-table full-width" v-if= "roleSelect=='parent' || roleSelect=='student'">
  <tbody>
    <tr>
      <td class="text-center">


<div class="card" v-if= "roleSelect=='parent' || roleSelect=='student'">
  <!--Kid Select Field-->
  <div class="item multiple-lines"  v-if= "roleSelect=='parent'">
    <i class="item-primary">face</i>
    <div class="item-content">
      <quasar-select class="full-width" type="radio" :model.sync="KidSelect" :options="KidSelectOptions"></quasar-select>
    </div>
  </div>
  <!--Grade Select Field-->
  <!--Subject Select Field-->
  <div class="item multiple-lines">
    <i class="item-primary">content_paste</i>
    <div class="item-content">
    <quasar-select class="full-width" type="radio" :model.sync="Subject" :options="SubjectOptions"></quasar-select>
    </div>
    </div>
<button class="primary full-width" @click="togglequizzes">
  Show Quizzes
</button>
</div>
</td>
      <td class="text-center">

<div class="card" v-if= "roleSelect=='parent' || roleSelect=='student'">
  <!--Kid Select Field-->
  <div class="item multiple-lines"  v-if= "roleSelect=='parent'">
    <i class="item-primary">face</i>
    <div class="item-content">
      <quasar-select class="full-width" type="radio" :model.sync="KidSelect" :options="KidSelectOptions"></quasar-select>
    </div>
  </div>
  <!--Grade Select Field-->
  <!--Subject Select Field-->
  <div class="item multiple-lines">
    <i class="item-primary">content_paste</i>
    <div class="item-content">
    <quasar-select class="full-width" type="radio" :model.sync="Subject" :options="SubjectOptions"></quasar-select>
    </div>
    </div>
<button class="primary full-width" @click="toggleperformance">
  Show Performance
</button>
</div>
</td>
   </tr>
  </tbody>
</table>


<div>
<p class="caption" v-if= "roleSelect=='admin' || roleSelect=='manager' || role=='teacher'">Subject</p>

<div class="list striped" v-if= "roleSelect=='admin' || roleSelect=='manager' || role=='teacher'">

  <div v-for="n in 6" class="item three-lines cursor-pointer" v-link="'/play/quiz-single'">
    <img class="item-primary" :src="'statics/man.jpg'">
    <div class="item-content inset">
      <div>Quiz Title</div>
      <div>
        <span>Teacher - Class<div class="text-primary">Class Average: 8 - Max Mark: 10</div></span>
      </div>
    </div>

</div>
<!--Load more Button-->
<!--When clicked loads another 20 results-->
<button class="primary full-width">
  Load More
</button>
<!--Load more Button-->
</div>
<!--Contacts Tab-->
</div>

<div v-if= "studentquizzes">

<p class="caption">Subject</p>

<div class="list striped" v-if= "roleSelect=='parent' || roleSelect=='student' ">

  <div v-for="n in 6" class="item three-lines cursor-pointer">
    <img class="item-primary" :src="'statics/man.jpg'">
    <div class="item-content inset has-secondary">
      <div>Quiz Title</div>
      <div>
        <span>Teacher - Subject<div class="text-primary">Average: 8 - Max: 10</div></span>
      </div>
    </div>
    <div class="item-secondary">
      8
    </div>
</div>

</div>
</div>
<!--Contacts Tab-->
</div>


      <div class='col-md-12 text-center'  v-if= "performance">
        <canvas id="canvas" height="300" width="800"></canvas>
        <div>




  </div>
  </div>
</template>
<script>
import Chart from 'chart.js'

export default {
  ready: function () {
    var ctx = document.getElementById('canvas').getContext('2d')
    var data = {
      labels: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 6', 'Quiz 7', 'Quiz 8'],
      datasets: [
        {
          label: 'Class Average',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [7, 5, 8, 8, 9, 7, 6]
        },
        {
          label: 'Student Mark',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [6, 4, 9, 9, 8, 6, 10]
        }
      ]
    }
    new Chart(ctx).Line(data, {responsive: true})
  },
  methods: {
      togglequizzes: function () {
        this.studentquizzes ^= true
      },
      toggleperformance: function () {
        this.performance ^= true
      }
  },
  data () {
    return {
      Classes: [
      { class: 'G1 A' },
      { class: 'G1 B' },
      { class: 'G2 A' },
      { class: 'G2 B' }
      ],
      Roles: [
      { role: 'Managers' },
      { role: 'Teachers' },
      { role: 'Parents' },
      { role: 'Students' }
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
          label: 'Student Affair',
          value: 'affair'
        }
      ],
      classSelect: '',
      classSelectOptions: [
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
        }
      ],
      statusSelect: '',
      statusSelectOptions: [
        {
          label: 'Active',
          value: 'Active'
        },
        {
          label: 'Disabled',
          value: 'Disabled'
        }
      ],
      roleSelect2: '',
      roleSelectOptions2: [
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
          label: 'Student Affair',
          value: 'affair'
        }
      ],
      Subject: [],
      SubjectOptions: [
        {
          label: 'English',
          value: 'English'
        },
        {
          label: 'Math',
          value: 'Math'
        },
        {
          label: 'Science',
          value: 'Science'
        }
      ],
      GradeSelect: [],
      GradeSelectOptions: [
        {
          label: 'G1',
          value: 'G1'
        },
        {
          label: 'G2',
          value: 'G2'
        },
        {
          label: 'G3',
          value: 'G3'
        },
        {
          label: 'G4',
          value: 'G4'
        }
      ],
      KidSelect: [],
      KidSelectOptions: [
        {
          label: 'Kid #1',
          value: 'Kid #1'
        },
        {
          label: 'Kid #2',
          value: 'Kid #2'
        }
      ],
      search: '',
      studentquizzes: false,
      quizzes: false,
      performance: false
    }
  }
}
</script>