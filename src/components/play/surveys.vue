<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">

    </quasar-toolbar-title>

<!--Select Role-->
<!--a Dropdown to show different views for different roles - will be removed in final product-->
<quasar-select type="radio" :model.sync="roleSelect" :options="roleSelectOptions"></quasar-select>
<!--Select Role-->

<!--Add News Button-->
 <!--For Management, it redirects the user to Add new News Page-->
      <button class="primary clear"  v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary'  || roleSelect=='teacher' " v-link="'/play/survey-add'">
      <i>add</i>
      </button>
<!--Add News Button-->

<!--Separator Button-->
      <button v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='secretary' || roleSelect=='affair'">
      </button>
<!--Separator Button-->

<!--Classes Button-->
<!--For Management to choose a related class to show only this class`s related content within a page, works as a Filter-->
        <quasar-popover v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='secretary' || roleSelect=='affair'" v-ref:classes>
          <button slot="target" class="primary clear">
            <i>filter_none</i>
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
<!--Classes Button-->

<!--Separator Button-->
      <button  v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='secretary' ">
      </button>
<!--Separator Button-->

<!--Roles Button-->
<!--For Management to choose a role to show only this role`s related content within a page, works as a Filter-->
        <quasar-popover v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='secretary' " v-ref:roles>
          <button slot="target" class="primary clear">
            <i>supervisor_account</i>
          </button>
          <div class="list highlight">
            <div
              class="item item-link item-delimiter"
              v-for="item in Roles"
              @click="showToast(), $refs.roles.close()"
            >
              <div class="item-content">
                <div>{{item.role}}</div>
              </div>
            </div>
          </div>
        </quasar-popover>
<!--Roles Button-->

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

    <div class="layout-padding">

<div class="card" v-if= " roleSelect=='teacher' || roleSelect=='parent'  || roleSelect=='student'">

  <div class="card-title">
    Survey Title
  </div>
  <div class="card-content">
      <div class="list">
        <label>
        <label class="item">
          <div class="item-primary">
            <quasar-radio :model.sync="option" value="opt1"></quasar-radio>
          </div>
          <div class="item-content">
            Option 1
          </div>
        </label>
        <label class="item">
          <div class="item-primary">
            <quasar-radio :model.sync="option" value="opt2"></quasar-radio>
          </div>
          <div class="item-content">
            Option 2
          </div>
        </label>
        <label class="item">
          <div class="item-primary">
            <quasar-radio :model.sync="option" value="opt3"></quasar-radio>
          </div>
          <div class="item-content">
            Option 3
          </div>
        </label>
        <label class="item">
          <div class="item-primary">
            <quasar-radio :model.sync="option" value="opt4"></quasar-radio>
          </div>
          <div class="item-content">
            Option 4
          </div>
        </label>
      </div>

<button class="primary full-width">
  Submit
</button>

  </div>
</div>



<div class="card" v-if= " roleSelect=='teacher' || roleSelect=='parent'  || roleSelect=='student'">

  <div class="card-title">
    Done Survey
  </div>
  <div class="card-content">
      <div class="list">
        <label>
        <label class="item">
          <div class="item-primary">
            <quasar-radio :model.sync="option2" value="opt1" disable></quasar-radio>
          </div>
          <div class="item-content">
            Option 1
          </div>
        </label>
        <label class="item">
          <div class="item-primary">
            <quasar-radio :model.sync="option2" value="opt2" disable></quasar-radio>
          </div>
          <div class="item-content">
            Option 2
          </div>
        </label>
        <label class="item">
          <div class="item-primary">
            <quasar-radio :model.sync="option2" value="opt3" disable></quasar-radio>
          </div>
          <div class="item-content">
            Option 3
          </div>
        </label>
        <label class="item">
          <div class="item-primary">
            <quasar-radio :model.sync="option2" value="opt4" disable></quasar-radio>
          </div>
          <div class="item-content">
            Option 4
          </div>
        </label>
      </div>

<button class="primary full-width disabled">
  Already Voted
</button>

  </div>
</div>



<div class="card" v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary' " v-for="n in 3">

  <div class="card-title">
    Survey Statistics
  </div>
  <div class="card-content">
      <div class="list">
        <label class="item two-lines">
          <div class="item-primary">
            <i class="text-primary">radio_button_checked</i>
          </div>
          <div class="item-content">
            <div>Option 1 - 25 votes</div>
        <quasar-progress :model="progress1" class="pink"></quasar-progress>
          </div>
        </label>
        <label class="item two-lines">
          <div class="item-primary">
            <i class="text-primary">radio_button_checked</i>
          </div>
          <div class="item-content">
            <div>Option 2 - 20 votes</div>
        <quasar-progress :model="progress2" class="pink"></quasar-progress>
          </div>
        </label>
        <label class="item two-lines">
          <div class="item-primary">
            <i class="text-primary">radio_button_checked</i>
          </div>
          <div class="item-content">
            <div>Option 3 - 40 votes</div>
        <quasar-progress :model="progress3" class="pink"></quasar-progress>
          </div>
        </label>
        <label class="item two-lines">
          <div class="item-primary">
            <i class="text-primary">radio_button_checked</i>
          </div>
          <div class="item-content">
            <div>Option 4 - 15 votes</div>
        <quasar-progress :model="progress4" class="pink"></quasar-progress>
          </div>
        </label>
      </div>

<button class="primary full-width">
  End Survey
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
      Classes: [
      { class: 'G1 A' },
      { class: 'G1 B' },
      { class: 'G2 A' },
      { class: 'G2 B' }
      ],
      Roles: [
      { role: 'Managers' },
      { role: 'Teachers' },
      { role: 'Parents' },
      { role: 'Students' }
      ],
      Kids: [
      { kid: 'Kid #1' },
      { kid: 'Kid #2' }
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
          label: 'Studnets Affair',
          value: 'affair'
        }
      ],
      option: 'opt',
      option2: 'opt4',
      progress1: 25,
      progress2: 20,
      progress3: 40,
      progress4: 15
}
}
}
</script>