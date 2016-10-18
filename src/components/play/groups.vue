<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">
Manage Groups
    </quasar-toolbar-title>

          <quasar-select :model.sync="roleSelect" :options="roleSelectOptions" ok-label="Pick" cancel-label="Cancel" title="Choose Role"></quasar-select>

        <button v-if= " roleSelect=='admin' "></button>

      <button class="primary clear"  v-if= " roleSelect=='admin'" v-link="'/play/groups-add'">
      <i>add</i>
      </button>

  </div>

    <div class="layout-padding" v-if= " roleSelect=='admin'">

<div class="list striped">
        <div v-for="n in 5" class="item cursor-pointer"  v-link="'/play/chat'">
          <img class="avatar" :src="'statics/group.png'">
          <div class="item-content">
            <div class="item-label">
              <p class="item-title">Group Name</p>
              <p>Group</p>
            </div>
            <div class="item-value"  v-link="'/play/groups-edit'" v-if= " roleSelect== 'admin'">
              <button class="primary clear"><i>border_color</i></button>
            </div>
            <div class="item-value" v-if= " roleSelect== 'admin'">
              <button class="primary clear"><i>delete</i></button>
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
      search: ''
    }
  }
}
</script>