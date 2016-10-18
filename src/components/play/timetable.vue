<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">
    <div v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary'  || roleSelect=='teacher' || roleSelect=='affair' ">Class Name</div>
    <div v-if= " roleSelect=='parent' ">Student Name</div>
    </quasar-toolbar-title>

<!--Select Role-->
<!--a Dropdown to show different views for different roles - will be removed in final product-->
<quasar-select type="radio" :model.sync="roleSelect" :options="roleSelectOptions"></quasar-select>
<!--Select Role-->

<!--Separator Button-->
      <button v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='secretary' || roleSelect=='affair'">
      </button>
<!--Separator Button-->

<!--Classes Button-->
<!--For Management to choose a related class to show only this class`s related content within a page, works as a Filter-->
        <quasar-popover v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='secretary' || roleSelect=='affair'" v-ref:classes>
          <button slot="target" class="primary clear">
            <i>filter_none</i>
          </button>
          <div class="list highlight">
            <div
              class="item item-link item-delimiter"
              v-for="item in Classes"
              @click="showToast(), $refs.classes.close()"
            >
              <div class="item-content" v-link="'/play/timetable'">
                <div>{{item.class}}</div>
              </div>
            </div>
          </div>
        </quasar-popover>
<!--Classes Button-->

<!--Separator Button-->
      <button  v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='secretary' ">
      </button>
<!--Separator Button-->

<!--Teachers Button-->
<!--For Management to choose a role to show only this role`s related content within a page, works as a Filter-->
        <quasar-popover v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='secretary' " v-ref:teachers>
          <button slot="target" class="primary clear">
            <i>person</i>
          </button>
          <div class="list highlight">
            <div
              class="item item-link item-delimiter"
              v-for="item in Teachers"
              @click="showToast(), $refs.teachers.close()"
            >
              <div class="item-content" v-link="'/play/timetable-teacher'">
                <div>{{item.teacher}}</div>
              </div>
            </div>
          </div>
        </quasar-popover>
<!--Teachers Button-->


<!--Separator Button-->
      <button  v-if= " roleSelect=='parent' ">
      </button>
<!--Separator Button-->

<!--Kids Button-->
<!--For Parent to choose a kid to show only this kid`s related content within a page, works as a Filter-->
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
<!--Kids Button-->

<!--Separator Button-->
        <button v-if= " roleSelect=='teacher' "></button>
<!--Separator Button-->

<!--Teacher own Timetable Button-->
      <button class="primary clear"  v-if= " roleSelect=='teacher'" v-link="'/play/timetable-teacher'">
      <i>event</i>
      </button>
<!--Teacher own Timetable Button-->

<!--Separator Button-->
        <button v-if= " roleSelect=='admin' "></button>
<!--Separator Button-->

<!--Admin Edit Timetable Button-->
<!--According to the current chosen class-->
      <button class="primary clear"  v-if= " roleSelect=='admin'" v-link="'/play/timetable-edit'">
      <i>mode_edit</i>
      </button>
<!--Admin Edit Timetable Button-->

  </div>

    <div class="layout-padding">

<quasar-tabs class="inverted primary justify-around">
  <quasar-tab active="true" target="#tab-1">
    Sunday
  </quasar-tab>
  <quasar-tab target="#tab-2">
    Monday
  </quasar-tab>
  <quasar-tab target="#tab-3">
    Tuesday
  </quasar-tab>
  <quasar-tab target="#tab-4">
    Wednesday
  </quasar-tab>
  <quasar-tab target="#tab-5">
    Thursday
  </quasar-tab>
</quasar-tabs>
<!-- Targets -->
<div id="tab-1">
<div class="list striped no-border">
  <div class="item two-lines" v-for="item in Lessons">
  <div class="item-content">
  <div>Lesson {{item.Order}} - {{item.Subject}}</div>
  <div class="text-primary" ><i>person_pin</i> {{ item.Teacher }}</div>
  </div>
  </div>
</div>
</div>
<div id="tab-2">
<div class="list striped no-border">
  <div class="item two-lines" v-for="item in Lessons">
  <div class="item-content">
  <div>Lesson {{item.Order}} - {{item.Subject}}</div>
  <div class="text-primary" ><i>person_pin</i> {{ item.Teacher }}</div>
  </div>
  </div>
</div>
</div>
<div id="tab-3">
<div class="list striped no-border">
  <div class="item two-lines" v-for="item in Lessons">
  <div class="item-content">
  <div>Lesson {{item.Order}} - {{item.Subject}}</div>
  <div class="text-primary" ><i>person_pin</i> {{ item.Teacher }}</div>
  </div>
  </div>
</div>
</div>
<div id="tab-4">
<div class="list striped no-border">
  <div class="item two-lines" v-for="item in Lessons">
  <div class="item-content">
  <div>Lesson {{item.Order}} - {{item.Subject}}</div>
  <div class="text-primary" ><i>person_pin</i> {{ item.Teacher }}</div>
  </div>
  </div>
</div>
</div>
<div id="tab-5">
<div class="list striped no-border">
  <div class="item two-lines" v-for="item in Lessons">
  <div class="item-content">
  <div>Lesson {{item.Order}} - {{item.Subject}}</div>
  <div class="text-primary" ><i>person_pin</i> {{ item.Teacher }}</div>
  </div>
  </div>
</div>
</div>

  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Classes: [
      { class: 'G1 A' },
      { class: 'G1 B' },
      { class: 'G2 A' },
      { class: 'G2 B' }
      ],
      Lessons: [
      { Order: 1, Subject: 'English', Teacher: 'George' },
      { Order: 2, Subject: 'Math', Teacher: 'Ahmed' },
      { Order: 3, Subject: 'Math', Teacher: 'Ahmed' },
      { Order: 4, Subject: 'Science', Teacher: 'Mary' },
      { Order: 5, Subject: 'English', Teacher: 'George' },
      { Order: 6, Subject: 'Math', Teacher: 'Ahmed' },
      { Order: 7, Subject: 'Math', Teacher: 'Ahmed' },
      { Order: 8, Subject: 'Science', Teacher: 'Mary' }
      ],
      Teachers: [
      { teacher: 'Teacher 1' },
      { teacher: 'Teacher 2' },
      { teacher: 'Teacher 3' },
      { teacher: 'Teacher 4' }
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
          label: 'Student Affair',
          value: 'affair'
        }
      ],
      search: ''
    }
  }
}
</script>