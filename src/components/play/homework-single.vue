<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">
    <button v-link="'/play/homework'">
      <i>keyboard_arrow_left</i>
    </button>
    <quasar-toolbar-title :padding="1" class="cursor-pointer" v-link="'/play/homework'">
      {{Homework.Subject}} - {{Homework.Title}}
    </quasar-toolbar-title>
  <!--Header Toolbar when clicked goes back to Homework Page-->

<!--Select Role-->
<!--a Dropdown to show different views for different roles - will be removed in final product-->
<quasar-select type="radio" :model.sync="roleSelect" :options="roleSelectOptions"></quasar-select>
<!--Select Role-->

<!--Delete Button-->
<!--a Delete button to delete this content, only authorized roles can delete content-->
            <button class="primary clear" v-if= " roleSelect=='author' " @click="basicToast()">
              <i>delete</i>
        </button>
<!--Delete Button-->

  </div>

    <div class="layout-padding" v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='student' || roleSelect=='parent' || roleSelect=='author'">
<div class="card">

<!--Target Classes item-->
  <div class="item two-lines" v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='author'">
      <i class="item-primary">filter_none</i>
    <div class="item-content">
      <div>Target Classes</div>
      <div>{{Homework.TargetClasses}}</div>
    </div>
  </div>
<!--Target Classes item-->

  <div class="card-content card-force-top-padding">
{{Homework.Content}}
</div>

  <div v-for="item in Homework.Files" class="card-content card-force-top-padding">
<button class="outline primary">
  <i class="on-left">attach_file</i> {{item.file}}
</button>
</div>
  <div class="card-content card-force-top-padding">
<button class="outline primary">
  <i class="on-left">file_download</i> Download All Files
</button>
</div>
    <div class="card-actions">
    <div class="text-primary">
      <i>person_pin</i> {{Homework.Author}}
    </div>
<!-- seen only by Management-->
    <div v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='author' " class="text-primary">
      <i>remove_red_eye</i> {{Homework.Views}} views
    </div>
<!-- seen only by Management-->
    <div class="text-primary">
      <i>attach_file</i> {{Homework.FilesCount}} files
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
import { Toast } from 'quasar'

export default {
    methods: {
    basicToast () {
      Toast.create('Delete ?!!')
    }
  },
  data () {
    return {
      Homework: {
                  Title: 'Homework Title',
                  Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  FilesCount: 2,
                  Views: 100,
                  Date: '20/09/2016',
                  TargetClasses: 'G1 A, G1 B',
                  TargetRoles: 'Students, Parents',
                  Author: 'Ahmed Kassem',
                  Subject: 'English',
                  Files: [
                  {file: 'File #1'},
                  {file: 'File #2'}
                  ]
      },
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