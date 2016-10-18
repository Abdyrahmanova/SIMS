<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">
Group Name
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
<!--For Management to choose a related class to show only this class`s related contacts within a page, works as a Filter-->
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
              <div class="item-content">
                <div>{{item.class}}</div>
              </div>
            </div>
          </div>
        </quasar-popover>
<!--Classes Button-->

<!--Separator Button-->
      <button>
      </button>
<!--Separator Button-->

<!--Roles Button-->
<!--For Management to choose a role to show only contacts of this role a page, works as a Filter-->
        <quasar-popover v-if= " roleSelect=='admin'" v-ref:roles>
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
        <button v-if= " roleSelect=='admin' "></button>
<!--Separator Button-->

<!--Create New Group Button-->
<!--For Admin, he will redirected to Groups Management Page-->
      <button class="primary clear"  v-if= " roleSelect=='admin'" v-link="'/play/groups-add'">
      <i>group_add</i>
      </button>
<!--Create New Group Button-->

  </div>

    <div class="layout-padding" v-if= " roleSelect=='admin'">


<!--Search Contacts Field-->
<!--where user enters name of contact to search for and clicks return button, search is done, user can filter results by choosing
from buttons in the Actions Bar (Classes, Roles, Kids)-->
<quasar-search :model.sync="searchModel" :debounce="600" placeholder="Search Contacts" icon="person"></quasar-search>
<!--Search Contacts Field-->

<div class="list striped">

  <div v-for="n in 6" class="item two-lines">
    <img class="item-primary" :src="'statics/man.jpg'">
    <div class="item-content inset">
      <div>John</div>
      <div>Teacher</div>
    </div>

<!--Add User to Group-->
    <div class="item-secondary" v-if= " roleSelect=='admin' ">
<button class="primary small">
    <i>add</i>
</button>
    </div>
<!--Add User to Group-->

    </div>
    </div>

<p class="caption">Group Members</p>

<div class="list striped">

  <div v-for="n in 6" class="item two-lines">
    <img class="item-primary" :src="'statics/woman.jpg'">
    <div class="item-content inset">
      <div>Mariam</div>
      <div>Teacher</div>
    </div>

<!--Delete User from Group-->
    <div class="item-secondary" v-if= " roleSelect=='admin' ">
<button class="primary small">
    <i>delete</i>
</button>
    </div>
<!--Delete User from Group-->

    </div>

</div>

<p>

<!--Save Group Information-->
<button class="primary full-width">
  Save Group
</button>
<!--Save Group Information-->

</p>

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
      search: '',
      checked: true,
      checked2: false
    }
  }
}
</script>