<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <button v-link="'/play/lesson2'">
      <i>keyboard_arrow_left</i>
    </button>

    <quasar-toolbar-title :padding="1">
    Week #
    </quasar-toolbar-title>

<!--Select Role-->
<!--a Dropdown to show different views for different roles - will be removed in final product-->
<quasar-select type="radio" :model.sync="roleSelect" :options="roleSelectOptions"></quasar-select>
<!--Select Role-->

<!--Separator Button-->
      <button v-if= " roleSelect=='teacher' ">
      </button>
<!--Separator Button-->

<!--Save Lesson Button-->
      <button class="primary clear"  v-if= " roleSelect=='teacher' " v-link="'/play/lesson2'">
      <i>save</i>
      </button>
<!--Save Lesson Button-->

  </div>

    <div class="layout-padding" v-if= " roleSelect=='teacher' ">

  <div class="item two-lines">
      <i class="item-primary">filter_none</i>
    <div class="item-content">
      <div>Shared with these Classes</div>
      <div>G1 A, G1 B</div>
    </div>
  </div>



<div class="card">
  <div class="card-title bg-cyan text-white">
    Standards & Competencies
  </div>

  <div class="card-content card-force-top-padding">
<p><h6>Standard:</h6> <input class="full-width" placeholder="Type something"></p>
<p><h6>Competency:</h6>  <input class="full-width" placeholder="Type something"></p>
</div> 
</div>

<div class="card">
  <div class="card-title bg-red text-white">
    Lesson / Unit #
  </div>
  <div class="card-content card-force-top-padding">
<p><h6>Warm-up:</h6></p>
<p><textarea class="full-width" placeholder="Type something"></textarea></p>
</div>
</div>

<div class="card">
  <div class="card-title bg-warning text-white">
    Objective(s)
  </div>
  <div class="card-content card-force-top-padding">
<p><h6>Content:</h6></p>
<p><input class="full-width" placeholder="Type something"></p>
<p><h6>Language:</h6></p>
<p><input class="full-width" placeholder="Type something"></p>
</div>
</div>

<div class="card">
  <div class="card-title bg-teal text-white">
    SWBAT
  </div>
  <div class="card-content card-force-top-padding">
<p><textarea class="full-width" placeholder="Type something"></textarea></p>
</div>
</div>

<div class="card">
  <div class="card-title bg-pink text-white">
    Lesson Outline
  </div>
  <div class="card-content card-force-top-padding">
<p><h6>Activity:</h6></p>
<p><textarea class="full-width" placeholder="Type something"></textarea></p>
</div>
</div>

<div class="card">
  <div class="card-title bg-positive text-white">
    Student Work
  </div>
  <div class="card-content card-force-top-padding">
<p><h6>Student Comprehension:</h6></p>
<p><textarea class="full-width" placeholder="Type something"></textarea></p>
</div>
</div>

<!--Save Week Content-->
<button class="primary full-width">
  Save Week Content
</button>
<!--Save Week Content-->

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
      ],
      Classes: [
      { class: 'G1 A' },
      { class: 'G1 B' },
      { class: 'G2 A' },
      { class: 'G2 B' }
      ]
}
}
}
</script>