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
        <button v-if= " roleSelect=='admin' "></button>
<!--Separator Button-->

<!--Manage Groups Button-->
<!--For Admin, he will redirected to Groups Management Page-->
      <button class="primary clear"  v-if= " roleSelect=='admin'" v-link="'/play/groups-edit'">
      <i>people</i>
      </button>
<!--Manage Groups Button-->

  </div>

    <div class="layout-padding" v-if= " roleSelect=='admin'">

<div class="card">

        <div class="item">
          <div class="item-content">
<input placeholder="Group Name" class="full-width">
          </div>
        </div>

  <div class="card-content card-force-top-padding">
<button class="primary">
  <i class="on-left">photo</i>Upload Group Image
</button>
</div>

    <div class="card-actions">

<!--Create New Group-->
<button class="primary full-width">
  Create Group
</button>
<!--Create New Group-->

  </div>
</div>

  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
          label: 'Students Affair',
          value: 'affair'
        }
      ],
      search: ''
    }
  }
}
</script>