<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">
    <button v-link="'/play/surveys'">
      <i>keyboard_arrow_left</i>
    </button>
    <quasar-toolbar-title :padding="1" class="cursor-pointer" v-link="'/play/surveys'">
      Add Survey
    </quasar-toolbar-title>
    <button v-link="'/play/surveys'"><i>close</i></button>
  </div>
  <!--Header Toolbar when clicked goes back to News Page-->

    <div class="layout-padding" v-if= " roleSelect=='admin' || roleSelect=='manager' ">

<div class="card">

  <!--News Title Input Field-->
        <div class="item">
    <i class="item-primary">title</i>
          <div class="item-content">
<input placeholder="Add Survey Title" class="full-width">
          </div>
        </div>
  <!--News Title Input Field-->

  <!--Target Roles Select Field-->
  <div class="item multiple-lines">
    <i class="item-primary">people</i>
    <div class="item-content">
      <quasar-select class="full-width" type="checkbox" :model.sync="multipleSelect" :options="selectOptions" :placeholder="'Roles'"></quasar-select>
    </div>
  </div>
    <!--Target Roles Select Field-->

  <!--Target Classes Select Field-->
  <div class="item multiple-lines">
    <i class="item-primary">filter_none</i>
    <div class="item-content">
    <quasar-select class="full-width" type="checkbox" :model.sync="multipleSelect2" :options="selectOptions2" :placeholder="'Classes'"></quasar-select>
    </div>
    </div>
  <!--Target Classes Select Field-->

  <!--News Title Input Field-->
        <div class="item" v-for="n in 6">
    <i class="item-primary">check_circle</i>
          <div class="item-content">
<input placeholder="Add Survey Option" class="full-width">
          </div>
        </div>
  <!--News Title Input Field-->


  <!--Content Submission Button-->
    <div class="card-actions">
<button class="primary full-width" v-link="'/play/surveys'">
  Create Survey
</button>
  </div>
  <!--Content Submission Button-->

</div>

  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      multipleSelect: [],
      selectOptions: [
        {
          label: 'Parent',
          value: 'parent'
        },
        {
          label: 'Student',
          value: 'student'
        },
        {
          label: 'Teacher',
          value: 'teacher'
        }
      ],
      multipleSelect2: [],
      selectOptions2: [
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
      roleSelect: 'admin' // to be removed
    }
  }
}
</script>