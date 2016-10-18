<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">

    </quasar-toolbar-title>

<!--Select Role-->
<!--a Dropdown to show different views for different roles - will be removed in final product-->
<quasar-select type="radio" :model.sync="roleSelect" :options="roleSelectOptions"></quasar-select>
<!--Select Role-->

<!--Separator Button-->
      <button  v-if= " roleSelect=='teacher' ">
      </button>
<!--Separator Button-->

<!--Manage Subject Button-->
 <!--For Teacher, it redirects the teacher to Manage Subject Page-->
      <button class="primary clear"  v-if= " roleSelect=='teacher' " v-link="'/play/subject-edit'">
      <i>settings</i>
      </button>
<!--Manage Subject Button-->

<!--Separator Button-->
      <button v-if= " roleSelect=='admin' || roleSelect=='manager'">
      </button>
<!--Separator Button-->

<!--Grades Button-->
<!--For Management to choose a related class to show only this class`s related content within a page, works as a Filter-->
        <quasar-popover v-if= " roleSelect=='admin' || roleSelect=='manager' " v-ref:grades>
          <button slot="target" class="primary clear">
            <i>filter_none</i>
          </button>
          <div class="list highlight">
            <div
              class="item item-link item-delimiter"
              v-for="item in Grades"
              @click="showToast(), $refs.grades.close()"
            >
              <div class="item-content">
                <div>{{item.grade}}</div>
              </div>
            </div>
          </div>
        </quasar-popover>
<!--Grades Button-->

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

    <div class="layout-padding" v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='student' || roleSelect=='parent'">

<!--Subject Select Dropdown-->
  <div v-if= " roleSelect=='admin' || roleSelect=='manager'" class="item">
    <div class="item-content teo-lines">
            <div class="item-label">
                      <quasar-select type="radio" :model.sync="Subject" :options="SubjectOptions"></quasar-select>
                    </div>
    </div>
  </div>
<!--Subject Select Dropdown-->

<!--Grade - Subject Select Dropdown-->
  <div v-if= " roleSelect=='teacher' || roleSelect=='student' || roleSelect=='parent'" class="item">
    <div class="item-content two-lines">
            <div class="item-label">
<quasar-select type="radio" :model.sync="GradeSubject" :options="GradeSubjectOptions"></quasar-select>
                    </div>
    </div>
  </div>
<!--Grade - Subject Select Dropdown-->

      <div class="list">
        <quasar-collapsible icon="list" label="Standard" v-for="n in 3">
          <div class="item cursor-pointer" v-for="n in 3"  v-link="'/play/lesson2'">
            <i class="item-primary">event</i>
            <div class="item-content">
              Week {{ n + 1 }}
            </div>
          </div>

<!--Add New Week Input Field-->
        <div class="item" v-if= " roleSelect=='teacher'"">
    <i class="item-primary">add</i>
          <div class="item-content">
<input placeholder="Add New Week" class="full-width">
          </div>
        </div>
<!--Add New Week Input Field-->

          </quasar-collapsible>

<!--Add New Standard Input Field-->
        <div class="item" v-if= " roleSelect=='teacher'"">
    <i class="item-primary">add</i>
          <div class="item-content">
<input placeholder="Add New Standard" class="full-width">
          </div>
        </div>
<!--Add New Standard Input Field-->

</div>
</template>
<script>
export default {
  data () {
    return {
      Kids: [
      { kid: 'Kid #1' },
      { kid: 'Kid #2' }
      ],
      Grades: [
      { grade: 'Grade 1' },
      { grade: 'Grade 2' },
      { grade: 'Grade 3' },
      { grade: 'Grade 4' }
      ],
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
      gradeSelect: 'fb',
      gradeSelectOptions: [
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
        },
        {
          label: 'G3 A',
          value: 'G3 A'
        }
      ],
      subjectSelect: 'fb',
      subjectSelectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Subject',
          value: 'fb'
        },
        {
          label: 'Twitter',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          value: 'appl'
        },
        {
          label: 'Oracle',
          value: 'ora'
        }
      ],
      GradeSubject: '',
      GradeSubjectOptions: [
        {
          label: 'G1 - English',
          value: 'G1 - English'
        },
        {
          label: 'G1 - Science',
          value: 'G1 - Science'
        },
        {
          label: 'G1 - Math',
          value: 'G1 - Math'
        }
      ],
      Subject: '',
      SubjectOptions: [
        {
          label: 'English',
          value: 'English'
        },
        {
          label: 'Science',
          value: 'Science'
        },
        {
          label: 'Math',
          value: 'Math'
        }
      ]
    }
  }
}
</script>