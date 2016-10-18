<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">
    <div v-if= " roleSelect=='admin' ">Class Name</div>
    </quasar-toolbar-title>


<!--Select Role-->
<!--a Dropdown to show different views for different roles - will be removed in final product-->
<quasar-select type="radio" :model.sync="roleSelect" :options="roleSelectOptions"></quasar-select>
<!--Select Role-->

<!--Separator Button-->
      <button v-if= " roleSelect=='admin' ">
      </button> 
<!--Separator Button-->

<!--Classes Button-->
<!--For Management to choose a related class to show only this class`s related content within a page, works as a Filter-->
        <quasar-popover v-if= " roleSelect=='admin'" v-ref:classes>
          <button slot="target" class="primary clear">
            <i>filter_none</i>
          </button>
          <div class="list highlight">
            <div
              class="item item-link item-delimiter"
              v-for="item in Classes"
              @click="showToast(), $refs.classes.close()"
            >
              <div class="item-content" v-link="'/play/timetable'">
                <div>{{item.class}}</div>
              </div>
            </div>
          </div>
        </quasar-popover>
<!--Classes Button-->

<!--Separator Button-->
        <button v-if= " roleSelect=='admin' "></button>
<!--Separator Button-->

<!--Timetable Save Button-->
      <button class="primary clear"  v-if= " roleSelect=='admin'" v-link="'/play/timetable'">
      <i>save</i>
      </button>
<!--Timetable Save Button-->

  </div>

    <div class="layout-padding" v-if= " roleSelect=='admin'">

<quasar-tabs class="inverted primary justify-around">
  <quasar-tab active="true" target="#tab-1">
    Sunday
  </quasar-tab>
  <quasar-tab target="#tab-2">
    Monday
  </quasar-tab>
  <quasar-tab target="#tab-3">
    Tuesday
  </quasar-tab>
  <quasar-tab target="#tab-4">
    Wednesday
  </quasar-tab>
  <quasar-tab target="#tab-5">
    Thursday
  </quasar-tab>
</quasar-tabs>

<div id="tab-1">

<div class="list striped">
      <div class="list item-delimiter bordered">
  <div class="item multiple-lines">
          <div class="item-content" v-for="n in 8">
            <div class="item-label">Lesson {{ n + 1 }} - <em>{{select}}</em></div>
      <quasar-select class="full-width" type="checkbox" :model.sync="select" :options="selectOptions" ok-label="Pick" title="Subject"></quasar-select>
          </div>
        </div>
       </div>
        </div>

</div>

<div id="tab-2">

<div class="list striped">
      <div class="list item-delimiter bordered">
  <div class="item multiple-lines">
          <div class="item-content" v-for="n in 8">
            <div class="item-label">Lesson {{ n + 1 }} - <em>{{select}}</em></div>
      <quasar-select class="full-width" type="checkbox" :model.sync="select" :options="selectOptions" ok-label="Pick" title="Subject"></quasar-select>
          </div>
        </div>
       </div>
        </div>
        
</div>

<div id="tab-3">

<div class="list striped">
      <div class="list item-delimiter bordered">
  <div class="item multiple-lines">
          <div class="item-content" v-for="n in 8">
            <div class="item-label">Lesson {{ n + 1 }} - <em>{{select}}</em></div>
      <quasar-select class="full-width" type="checkbox" :model.sync="select" :options="selectOptions" ok-label="Pick" title="Subject"></quasar-select>
          </div>
        </div>
       </div>
        </div>
        
</div>

<div id="tab-4">

<div class="list striped">
      <div class="list item-delimiter bordered">
  <div class="item multiple-lines">
          <div class="item-content" v-for="n in 8">
            <div class="item-label">Lesson {{ n + 1 }} - <em>{{select}}</em></div>
      <quasar-select class="full-width" type="checkbox" :model.sync="select" :options="selectOptions" ok-label="Pick" title="Subject"></quasar-select>
          </div>
        </div>
       </div>
        </div>
        
</div>

<div id="tab-5">

<div class="list striped">
      <div class="list item-delimiter bordered">
  <div class="item multiple-lines">
          <div class="item-content" v-for="n in 8">
            <div class="item-label">Lesson {{ n + 1 }} - <em>{{select}}</em></div>
      <quasar-select class="full-width" type="checkbox" :model.sync="select" :options="selectOptions" ok-label="Pick" title="Subject"></quasar-select>
          </div>
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
      Classes: [
      { class: 'G1 A' },
      { class: 'G1 B' },
      { class: 'G2 A' },
      { class: 'G2 B' }
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
          label: 'Student Affair',
          value: 'affair'
        }
      ],
      select: 'English',
      selectOptions: [
        {
          label: 'English',
          value: 'English'
        },
        {
          label: 'Science',
          value: 'Science'
        },
        {
          label: 'Arabic',
          value: 'Arabic'
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