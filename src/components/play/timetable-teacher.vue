<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">
    <div v-if= " roleSelect=='admin' || roleSelect=='mager'  || roleSelect=='secretary' ">Teacher me</div>
    <div v-if= " roleSelect=='teacher' ">My Timetable</div>
    </quasar-toolbar-title>

<!--Select Role-->
<!--a Dropdown to show different views for different roles - will be removed in fil product-->
<quasar-select type="radio" :model.sync="roleSelect" :options="roleSelectOptions"></quasar-select>
<!--Select Role-->

<!--Separator Button-->
      <button v-if= " roleSelect=='admin' || roleSelect=='mager' || roleSelect=='teacher' || roleSelect=='secretary' || roleSelect=='affair'">
      </button>
<!--Separator Button-->

<!--Classes Button-->
<!--For Magement to choose a related class to show only this class`s related content within a page, works as a Filter-->
        <quasar-popover v-if= " roleSelect=='admin' || roleSelect=='mager' || roleSelect=='teacher' || roleSelect=='secretary' || roleSelect=='affair'" v-ref:classes>
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
      <button  v-if= " roleSelect=='admin' || roleSelect=='mager' || roleSelect=='secretary' ">
      </button>
<!--Separator Button-->

<!--Teachers Button-->
<!--For Magement to choose a role to show only this role`s related content within a page, works as a Filter-->
        <quasar-popover v-if= " roleSelect=='admin' || roleSelect=='mager' || roleSelect=='secretary' " v-ref:teachers>
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

  </div>

    <div class="layout-padding" v-if= " roleSelect=='admin' || roleSelect=='mager'  || roleSelect=='secretary'  || roleSelect=='teacher' ">

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
  <div>Lesson {{item.Order}} - {{item.Class}}</div>
  <div class="text-primary" ><i>content_paste</i> {{ item.Subject }}</div>
  </div>
  </div>
</div>
</div>
<div id="tab-2">
<div class="list striped no-border">
  <div class="item two-lines" v-for="item in Lessons">
  <div class="item-content">
  <div>Lesson {{item.Order}} - {{item.Class}}</div>
  <div class="text-primary" ><i>content_paste</i> {{ item.Subject }}</div>
  </div>
  </div>
</div>
</div>
<div id="tab-3">
<div class="list striped no-border">
  <div class="item two-lines" v-for="item in Lessons">
  <div class="item-content">
  <div>Lesson {{item.Order}} - {{item.Class}}</div>
  <div class="text-primary" ><i>content_paste</i> {{ item.Subject }}</div>
  </div>
  </div>
</div>
</div>
<div id="tab-4">
<div class="list striped no-border">
  <div class="item two-lines" v-for="item in Lessons">
  <div class="item-content">
  <div>Lesson {{item.Order}} - {{item.Class}}</div>
  <div class="text-primary" ><i>content_paste</i> {{ item.Subject }}</div>
  </div>
  </div>
</div>
</div>
<div id="tab-5">
<div class="list striped no-border">
  <div class="item two-lines" v-for="item in Lessons">
  <div class="item-content">
  <div>Lesson {{item.Order}} - {{item.Class}}</div>
  <div class="text-primary" ><i>content_paste</i> {{ item.Subject }}</div>
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
      { Order: 1, Subject: '', Class: '' },
      { Order: 2, Subject: 'Math', Class: 'G1 A' },
      { Order: 3, Subject: 'Math', Class: 'G1 A' },
      { Order: 4, Subject: '', Class: '' },
      { Order: 5, Subject: '', Class: '' },
      { Order: 6, Subject: 'Math', Class: 'G1 A' },
      { Order: 7, Subject: 'Math', Class: 'G1 A' },
      { Order: 8, Subject: '', Class: '' }
      ],
      Teachers: [
      { teacher: 'Teacher 1' },
      { teacher: 'Teacher 2' },
      { teacher: 'Teacher 3' },
      { teacher: 'Teacher 4' }
      ],
      roleSelect: 'admin',
      roleSelectOptions: [
        {
          label: 'Admin',
          value: 'admin'
        },
        {
          label: 'Mager',
          value: 'mager'
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