<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">

    </quasar-toolbar-title>

<!--Select Role-->
<!--a Dropdown to show different views for different roles - will be removed in final product-->
<quasar-select type="radio" :model.sync="roleSelect" :options="roleSelectOptions"></quasar-select>
<!--Select Role-->

<!--Add Homework Button-->
 <!--For Management, it redirects the user to Add new Homework Page-->
      <button class="primary clear"  v-if= "roleSelect=='teacher' " v-link="'/play/homework-add'">
      <i>add</i>
      </button>
<!--Add Homework Button-->

<!--Separator Button-->
      <button v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' ">
      </button>
<!--Separator Button-->

<!--Classes Button-->
<!--For Management to choose a related class to show only this class`s related content within a page, works as a Filter-->
        <quasar-popover v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher'" v-ref:classes>
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
<!--Classes Button-->

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

  </div>

    <div class="layout-padding" v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='student' || roleSelect=='parent' || roleSelect=='author'">
<div  v-for="n in 4" class="card cursor-pointer" v-link="'/play/homework-single'">
  <div class="card-title bg-primary text-white">
   {{ Homework.Title }}
   <br />
   <h6>Class: {{ Homework.Class }}, Subject: {{Homework.Subject}}</h6>
  </div>
  <div class="card-content card-force-top-padding">
{{ Homework.Content }}
  </div>
    <div class="card-actions">
    <div class="text-primary">
      <i>person_pin</i> {{Homework.Author}}
    </div>
<!-- seen only by Management-->
    <div v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='author' " class="text-primary">
      <i>remove_red_eye</i> {{ Homework.Views }} views
    </div>
<!-- seen only by Management-->
    <div class="text-primary">
      <i>attach_file</i> {{ Homework.FilesCount }} files
    </div>
    <div class="auto"></div>
    <div class="text-grey-6">
      {{Homework.Date}}
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
      Homework: {
                  Title: 'Homework Title',
                  Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                  FilesCount: 2,
                  Views: 100,
                  Author: 'Ahmed Kassem',
                  Class: 'G1 A',
                  Subject: 'English',
                  Date: '20/09/2016'
      },
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
      ]
}
}
}
</script>