<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <button v-link="'/play/curriculum'">
      <i>keyboard_arrow_left</i>
    </button>

    <quasar-toolbar-title :padding="1" class="cursor-pointer" v-link="'/play/curriculum'">
    Lesson #
    </quasar-toolbar-title>

      <quasar-select :model.sync="roleSelect" :options="roleSelectOptions" ok-label="Pick" cancel-label="Cancel" title="Choose Role"></quasar-select>

      <button class="primary clear"  v-if= " roleSelect=='teacher' " v-link="'/play/lesson-edit'">
      <i>share</i>
      </button>

      <button>
      </button>

      <button class="primary clear"  v-if= " roleSelect=='teacher' " v-link="'/play/lesson-edit'">
      <i>mode_edit</i>
      </button>

  </div>

    <div class="layout-padding">

  <div class="item two-lines">
      <i class="item-primary">filter_none</i>
    <div class="item-content">
      <div>Shared with these Classes</div>
      <div>G1 A, G1 B</div>
    </div>
  </div>



<div class="card">
  <div class="card-title bg-primary text-white">
    Lesson Title
  </div>

  <div class="card-content card-force-top-padding">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
</div> 
</div>

<div class="card">
  <div class="card-title bg-primary text-white">
    Classwork
  </div>

  <div class="card-content card-force-top-padding">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
</div>
  <div class="card-content card-force-top-padding">
<button class="outline primary">
  <i class="on-left">attach_file</i> File #1

</button>
<button class="outline primary">
  <i class="on-left">attach_file</i> File #2
</button>

<button class="outline primary">
  <i class="on-left">file_download</i> Download All Files
</button>
</div>
</div>

<div class="card">
  <div class="card-title bg-primary text-white">
    Homework
  </div>

  <div class="card-content card-force-top-padding">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
</div>
  <div class="card-content card-force-top-padding">
<button class="outline primary">
  <i class="on-left">attach_file</i> File #1

</button>
<button class="outline primary">
  <i class="on-left">attach_file</i> File #2
</button>

<button class="outline primary">
  <i class="on-left">file_download</i> Download All Files
</button>
</div>
</div>

<div class="card">
  <div class="card-title bg-primary text-white">
    Resources
  </div>

  <div class="card-content card-force-top-padding">
<button class="clear primary">
  <i class="on-left">link</i> Link #1
  </button>
<br />
<button class="clear primary">
  <i class="on-left">videocam</i> Video #1
</button>
<br />
<button class="clear primary">
  <i class="on-left">volume_up</i> Audio File #1
</button>
</div>

</div>


  </div>
</div>
</template>
<script>
export default {
    data () {
    return {
roleSelect: 'teacher',
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
        }
      ]
}
}
}
</script>