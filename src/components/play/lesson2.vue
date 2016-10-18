<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <button v-link="'/play/curriculum'">
      <i>keyboard_arrow_left</i>
    </button>

    <quasar-toolbar-title :padding="1" class="cursor-pointer" v-link="'/play/curriculum'">
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

<!--Share Lesson Button-->
        <quasar-popover v-if= " roleSelect=='teacher' " v-ref:classes>
          <button slot="target" class="primary clear">
            <i>share</i>
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
<!--Share Lesson Button-->

<!--Separator Button-->
      <button  v-if= " roleSelect=='teacher' ">
      </button>
<!--Separator Button-->

<!--Edit Lesson Button-->
      <button class="primary clear"  v-if= " roleSelect=='teacher' " v-link="'/play/lesson-edit'">
      <i>mode_edit</i>
      </button>
<!--Edit Lesson Button-->

  </div>

    <div class="layout-padding" v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='student' || roleSelect=='parent'">

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
<p><h6>Standard:</h6> Example Standard</p>
<p><h6>Competency:</h6> Example Competency</p>
</div> 
</div>

<div class="card">
  <div class="card-title bg-red text-white">
    Lesson / Unit #
  </div>
  <div class="card-content card-force-top-padding">
<p><h6>Warm-up:</h6></p>
<p>Example Content</p>
</div>
</div>

<div class="card">
  <div class="card-title bg-warning text-white">
    Objective(s)
  </div>
  <div class="card-content card-force-top-padding">
<p><h6>Content:</h6></p>
<p>Example Content</p>
<p><h6>Language:</h6></p>
<p>Example Content</p>
</div>
</div>

<div class="card">
  <div class="card-title bg-teal text-white">
    SWBAT
  </div>
  <div class="card-content card-force-top-padding">
<p>Example Content</p>
</div>
</div>

<div class="card">
  <div class="card-title bg-pink text-white">
    Lesson Outline
  </div>
  <div class="card-content card-force-top-padding">
<p><h6>Activity:</h6></p>
<p>Example Content</p>
</div>
</div>

<div class="card">
  <div class="card-title bg-positive text-white">
    Student Work
  </div>
  <div class="card-content card-force-top-padding">
<p><h6>Student Comprehension:</h6></p>
<p>Example Content</p>
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