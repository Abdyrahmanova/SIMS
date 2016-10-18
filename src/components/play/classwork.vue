<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">

    </quasar-toolbar-title>

      <quasar-select :model.sync="roleSelect" :options="roleSelectOptions" ok-label="Pick" cancel-label="Cancel" title="Choose Role"></quasar-select>

      <button class="primary clear"  v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary'  || roleSelect=='teacher' " v-link="'/play/news-add'">
      <i>add</i>
      </button>

      <button v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='secretary' ">
      </button>

        <quasar-popover v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='secretary' " v-ref:classes>
          <button class="primary clear" slot="target">
            <i>filter_none</i>
          </button>

          <div class="list item-delimiter highlight">
            <div
              class="item item-link"
              @click="showToast(), $refs.classes.close()"
            >
              <div class="item-content">
                <div class="item-label">G1 A</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.classes.close()"
            >
              <div class="item-content">
                <div class="item-label">G1 B</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.classes.close()"
            >
              <div class="item-content">
                <div class="item-label">G2 A</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.classes.close()"
            >
              <div class="item-content">
                <div class="item-label">G2 B</div>
              </div>
            </div>

          </div>
        </quasar-popover>

      <button  v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='secretary' ">
      </button>

        <quasar-popover v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='teacher' || roleSelect=='secretary' " v-ref:roles>
          <button class="primary clear" slot="target">
            <i>people</i>
          </button>

          <div class="list item-delimiter highlight">
            <div
              class="item item-link"
              @click="showToast(), $refs.roles.close()"
            >
              <div class="item-content">
                <div class="item-label">Students</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.roles.close()"
            >
              <div class="item-content">
                <div class="item-label">Parents</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.roles.close()"
            >
              <div class="item-content">
                <div class="item-label">Teachers</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.roles.close()"
            >
              <div class="item-content">
                <div class="item-label">Managers</div>
              </div>
            </div>
          </div>
        </quasar-popover>

        <button v-if= " roleSelect=='parent' "></button>
        
        <quasar-popover  v-if= " roleSelect=='parent' " v-ref:kids>
          <button class="primary clear" slot="target">
            <i>face </i>
          </button>

          <div class="list item-delimiter highlight">
            <div
              class="item item-link"
              @click="showToast(), $refs.kids.close()"
            >
              <div class="item-content">
                <div class="item-label">Kid #1</div>
              </div>
            </div>
            <div
              class="item item-link"
              @click="showToast(), $refs.kids.close()"
            >
              <div class="item-content">
                <div class="item-label">Kid #2</div>
              </div>
            </div>
          </div>
        </quasar-popover>

  </div>

    <div class="layout-padding">
<div class="card cursor-pointer" v-link="'/play/news-single'">
  <div class="card-title bg-primary text-white">
   Managers, Secretary & Admins News
  </div>
  <div class="card-content card-force-top-padding">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
    <div class="card-actions">
    <div v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='author' " class="text-primary">
      <i>remove_red_eye</i> 200 views
    </div>
    <div class="text-primary">
      <i>attach_file</i> 2 files
    </div>
    <div class="auto"></div>
    <div class="text-grey-6">
      23 minutes ago.
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
        }
      ]
}
}
}
</script>