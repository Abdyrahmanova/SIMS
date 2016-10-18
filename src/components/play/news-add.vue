<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">
    <button v-link="'/play/news'">
      <i>keyboard_arrow_left</i>
    </button>
    <quasar-toolbar-title :padding="1" class="cursor-pointer" v-link="'/play/news'">
      Add News
    </quasar-toolbar-title>
    <button v-link="'/play/news'"><i>close</i></button>
  </div>
  <!--Header Toolbar when clicked goes back to News Page-->

    <div class="layout-padding" v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary'  || roleSelect=='teacher' ">

<div class="card">

  <!--News Title Input Field-->
        <div class="item">
    <i class="item-primary">title</i>
          <div class="item-content">
<input placeholder="Add News Title" class="full-width">
          </div>
        </div>
  <!--News Title Input Field-->

  <!--Target Roles Select Field-->
  <div class="item multiple-lines">
    <i class="item-primary">people</i>
    <div class="item-content">
      <quasar-select class="full-width" type="checkbox" :model.sync="multipleSelect" :options="selectOptions"></quasar-select>
    </div>
  </div>
    <!--Target Roles Select Field-->

  <!--Target Classes Select Field-->
  <div class="item multiple-lines">
    <i class="item-primary">filter_none</i>
    <div class="item-content">
    <quasar-select class="full-width" type="checkbox" :model.sync="multipleSelect2" :options="selectOptions2"></quasar-select>
    </div>
    </div>
  <!--Target Classes Select Field-->

  <!--News Content Input Field-->
  <div class="item multiple-lines">
    <i class="item-primary">format_align_left</i>
    <div class="item-content"><textarea placeholder="Add News Content" class="full-width"></textarea>
</div>
</div>
  <!--News Content Input Field-->

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
  <i class="on-left">save</i> Submit News
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