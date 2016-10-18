<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">
    <button v-link="'/play/homework'">
      <i>keyboard_arrow_left</i>
    </button>
    <quasar-toolbar-title :padding="1" class="cursor-pointer" v-link="'/play/homework'">
      Add Homework
    </quasar-toolbar-title>
    <button v-link="'/play/homework'"><i>close</i></button>
  </div>
  <!--Header Toolbar when clicked goes back to Homework Page-->

    <div class="layout-padding" v-if= "roleSelect=='teacher' ">

<div class="card">

  <!--Homework Title Input Field-->
        <div class="item">
    <i class="item-primary">title</i>
          <div class="item-content">
<input placeholder="Add Homework Title" class="full-width">
          </div>
        </div>
  <!--Homework Title Input Field-->

  <!--Target Classes Select Field-->
  <div class="item multiple-lines">
    <i class="item-primary">filter_none</i>
    <div class="item-content">
    <quasar-select class="full-width" type="checkbox" :model.sync="multipleSelect2" :options="selectOptions2"></quasar-select>
    </div>
    </div>
  <!--Target Classes Select Field-->

  <!--Target Subject Select Field-->
  <div class="item multiple-lines">
    <i class="item-primary">content_paste</i>
    <div class="item-content">
    <quasar-select class="full-width" type="radio" :model.sync="Subject" :options="SubjectOptions"></quasar-select>
    </div>
    </div>
  <!--Target Subject Select Field-->

  <!--Homework Content Input Field-->
  <div class="item multiple-lines">
    <i class="item-primary">format_align_left</i>
    <div class="item-content"><textarea placeholder="Add Homework Content" class="full-width"></textarea>
</div>
</div>
  <!--Homework Content Input Field-->

  <!--Attach File(s) Button-->
  <div class="item">
          <div class="item-content">
<button class="primary">
  <i class="on-left">attach_file</i> Attach File(s)
</button>
</div>
</div>
  <!--Attach File(s) Button-->

  <!--Content Submission Button-->
    <div class="card-actions">
<button class="primary full-width">
  <i class="on-left">save</i> Submit Homework
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
      roleSelect: 'teacher' // to be removed
    }
  }
}
</script>