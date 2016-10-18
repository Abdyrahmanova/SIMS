<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">
    <button v-link="'/play/contacts'">
      <i>keyboard_arrow_left</i>
    </button>
    <quasar-toolbar-title :padding="1" class="cursor-pointer" v-link="'/play/contacts'">
      Add User
    </quasar-toolbar-title>
    <button v-link="'/play/homework'"><i>close</i></button>
  </div>
  <!--Header Toolbar when clicked goes back to Homework Page-->

    <div class="layout-padding" v-if= "roleSelect=='admin' ">

<div class="card">

  <!--Full Name Input Field-->
        <div class="item">
    <i class="item-primary text-primary">person_pin</i>
          <div class="item-content">
<input placeholder="Full Name" class="full-width">
          </div>
        </div>
  <!--Full Name Input Field-->

  <!--Username Input Field-->
        <div class="item">
    <i class="item-primary text-primary">person</i>
          <div class="item-content">
<input placeholder="username" class="full-width">
          </div>
        </div>
  <!--Username Input Field-->

    <!--Password Input Field-->
        <div class="item">
    <i class="item-primary  text-primary">lock</i>
          <div class="item-content">
<input placeholder="Password" class="full-width">
          </div>
        </div>
    <!--Password Input Field-->

  <!--Role Select Field-->
  <div class="item multiple-lines">
    <i class="item-primary  text-primary">supervisor_account</i>
    <div class="item-content">
<quasar-select type="radio" :model.sync="roleSelect2" :options="roleSelectOptions2" class="full-width"></quasar-select>
    </div>
    </div>
  <!--Role Select Field-->

  <!--Target Classes Select Field-->
  <div class="item multiple-lines" v-if= "roleSelect2=='manager' || roleSelect2=='secretary' || roleSelect2=='affair' ">
    <i class="item-primary text-primary">filter_none</i>
    <div class="item-content">
    <quasar-select class="full-width" type="checkbox" :model.sync="multipleSelect2" :options="selectOptions2"></quasar-select>
    </div>
    </div>

  <!--Add Student to Parent Select Field-->
  <div  v-if= "roleSelect2=='parent'">
  <div class="item multiple-lines" v-for="row in rows">
    <i class="item-primary text-primary">face</i>
    <div class="item-content">
          <div class="row">
            <quasar-select class="auto" :class.sync="row.class" type="radio" :model.sync="multipleSelect2" :options="selectOptions2" ></quasar-select>
            <quasar-select class="auto"  type="radio" :student.sync="row.student" :model.sync="studentSelect" :options="studentSelectOptions"></quasar-select>
<button class="small pink" @click="removeRow(row)">X</button>

          </div>
              </div>
    </div>
    
<button class="clear primary " @click="addRow"><i class="item-primary text-primary on-left">person_add</i>Add Student</button>
    </div>

  <!--Add Student to Parent Select Field-->
  
  <!--Add Subjects and Classes to Teacher Select Field-->
  <div  v-if= "roleSelect2=='teacher'">
  <div class="item multiple-lines" v-for="row2 in rows2">
    <i class="item-primary text-primary">content_paste</i>
    <div class="item-content">
          <div class="row">
            <quasar-select class="auto" type="radio" :class.sync="row2.class" :model.sync="multipleSelect2" :options="selectOptions2" ></quasar-select>
            <quasar-select class="auto"  type="checkbox" :subject.sync="row2.subject" :model.sync="Subject" :options="SubjectOptions"></quasar-select>
<button class="small pink" @click="removeRow2(row2)">X</button>

          </div>
              </div>
    </div>
    
<button class="clear primary " @click="addRow2"><i class="item-primary text-primary on-left">add_box</i>Add Subject</button>
    </div>

  <!--Add Subjects and Classes to Teacher Select Field-->


  <!--Target Classes Select Field-->
  <div class="item multiple-lines" v-if= "roleSelect2=='student' ">
    <i class="item-primary">filter_none</i>
    <div class="item-content">
    <quasar-select class="full-width" type="radio" :model.sync="multipleSelect2" :options="selectOptions2"></quasar-select>
    </div>
    </div>
  <!--Target Classes Select Field-->

  <!--Target Subject Select Field-->
  <div class="item multiple-lines" v-if= "roleSelect2=='student' ">
    <i class="item-primary">content_paste</i>
    <div class="item-content">
    <quasar-select class="full-width" type="checkbox" :model.sync="Subject" :options="SubjectOptions"></quasar-select>
    </div>
    </div>
  <!--Target Subject Select Field-->

  <!--Content Submission Button-->
    <div class="card-actions">
<button class="primary full-width">
  <i class="on-left">save</i> Add User
</button>
  </div>
  <!--Content Submission Button-->

</div>

  </div>
</div>
</template>
<script>
export default {
  methods: {
    addRow: function () {
      this.rows.push({class: '', student: ''})
    },
    removeRow: function (row) {
      // console.log(row);
      this.rows.$remove(row)
    },
    addRow2: function () {
      this.rows2.push({class: '', subject: ''})
    },
    removeRow2: function (row2) {
      // console.log(row);
      this.rows2.$remove(row2)
    }
  },
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
      roleSelect2: '',
      roleSelectOptions2: [
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
          label: 'Student Affair',
          value: 'affair'
        }
      ],
      studentSelect: '',
      studentSelectOptions: [
        {
          label: 'Ahmed Hassan',
          value: 'objectId1'
        },
        {
          label: 'Ahmed Ibrahim',
          value: 'objectId2'
        },
        {
          label: 'Ahmed Kassem',
          value: 'objectId3'
        },
        {
          label: 'Youssef Hassan',
          value: 'objectId4'
        }
      ],
    rows: [
      {class: 'G1 A', student: 'ahmed'},
      {class: 'G2 A', student: 'mohamed'}
    ],
    rows2: [
      {class: 'G1 A', subject: 'Science'},
      {class: 'G2 A', subject: 'Science'}
    ],
      roleSelect: 'admin' // to be removed
    }
  }
}
</script>