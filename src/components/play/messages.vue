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
      <button v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary'  || roleSelect=='teacher' || roleSelect=='affair' ">
      </button> 
<!--Separator Button-->

<!--Classes Button-->
<!--For Management to choose a related class to show only this class`s related contacts within a page, works as a Filter-->
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
      <button>
      </button>
<!--Separator Button-->

<!--Roles Button-->
<!--For Management to choose a role to show only contacts of this role a page, works as a Filter-->
        <quasar-popover  v-ref:roles>
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

    <div class="layout-padding">

    <quasar-tabs class="inverted justify-around primary">
  <quasar-tab active="true" icon="forum" target="#tab-1">
    Chats
  </quasar-tab>
  <quasar-tab icon="person" target="#tab-2">
    Contacts
  </quasar-tab>
  <quasar-tab icon="people" target="#tab-3">
    Groups
  </quasar-tab>
</quasar-tabs>

<!--Chats Tab-->
<!--A list of current chats is listed here, and shows only the latest 20 chats-->
<div id="tab-1">
<div class="list striped">

  <div v-for="n in 6" class="item two-lines cursor-pointer" v-link="'/play/chat'">
    <img class="item-primary" :src="'statics/boy-avatar.png'">
    <div class="item-content inset has-secondary">
      <div>John</div>
      <div>
        <span>Last Message</span>
      </div>
    </div>
    <div class="item-secondary stamp">
      <span class="circular label bg-primary text-white">2</span>
    </div>

</div>
<!--Load more Button-->
<!--When clicked loads another 20 results-->
<button class="primary full-width">
  Load More
</button>
<!--Load more Button-->
</div>
</div>
<!--Chats Tab-->

<!--Contacts Tab-->
<!--Displays a list of 20 contacts related to the user (same class, subject) and the user can search for any related user-->
<div id="tab-2">
<!--Search Contacts Field-->
<!--where user enters name of contact to search for and clicks return button, search is done, user can filter results by choosing
from buttons in the Actions Bar (Classes, Roles, Kids)-->
<quasar-search :model.sync="searchModel" :debounce="600" placeholder="Search Contacts" icon="person"></quasar-search>
<!--Search Contacts Field-->

  <div class="item multiple-lines">
    <i class="item-primary text-primary">people</i>
    <div class="item-content">
          <div class="row">
            <quasar-select class="auto"  type="checkbox" :model.sync="multipleSelect2" :options="selectOptions2" :placeholder="'Class'"></quasar-select>
            <quasar-select class="auto"  type="checkbox" :model.sync="roleSelect2" :options="roleSelectOptions2" :placeholder="'Role'"></quasar-select>
            <quasar-select class="auto"  type="checkbox" :model.sync="statusSelect" :options="statusSelectOptions" :placeholder="'Status'" v-if= " roleSelect=='admin' "></quasar-select>
          </div>
              </div>
    </div>

<div class="list striped">

  <div v-for="n in 6" class="item two-lines cursor-pointer" v-link="'/play/chat'">
    <img class="item-primary" :src="'statics/man.jpg'">
    <div class="item-content inset">
      <div>John</div>
      <div>
        <span>Last Message</span>
      </div>
    </div>

</div>
<!--Load more Button-->
<!--When clicked loads another 20 results-->
<button class="primary full-width">
  Load More
</button>
<!--Load more Button-->
</div>
</div>
<!--Contacts Tab-->

<!--Groups Tab-->
<!--Displats a list of Groups that the user is member of, admin only can manage Groups-->
<div id="tab-3">
<div class="list striped">

  <div v-for="n in 6" class="item two-lines cursor-pointer">
    <img class="item-primary" :src="'statics/group-128.png'">
    <div class="item-content inset has-secondary" v-link="'/play/chat'">
      <div>Group Name</div>
      <div>
        <span>Last Message</span>
      </div>
    </div>

<!--Manage Group Menu-->
    <div class="item-secondary" v-if= " roleSelect=='admin' ">
      <quasar-popover v-ref:popover>
        <i slot="target">
          more_vert
        </i>
        <div class="list">
          <div class="item item-link" @click="$refs.popover.close()">
            <div class="item-content" v-link="'/play/groups-edit'">Edit</div>
          </div>
          <div class="item item-link" @click="$refs.popover.close()">
            <div class="item-content"@click="basicToast()">Delete</div>
          </div>
        </div>
      </quasar-popover>
    </div>
<!--Manage Group Menu-->

</div>
<!--Load more Button-->
<!--When clicked loads another 20 results-->
<button class="primary full-width">
  Load More
</button>
<!--Load more Button-->

</div>
</div>
<!--Groups Tab-->

  </div>
  </div>
</template>
<script>
import { Toast } from 'quasar'

export default {
    methods: {
    basicToast () {
      Toast.create('Delete ?!!')
    }
  },
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
          label: 'Students Affair',
          value: 'affair'
        }
      ],
      statusSelect: '',
      statusSelectOptions: [
        {
          label: 'Active',
          value: 'Active'
        },
        {
          label: 'Disabled',
          value: 'Disabled'
        }
      ],
      roleSelect2: '',
      roleSelectOptions2: [
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
          label: 'Student Affair',
          value: 'affair'
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
      search: ''
    }
  }
}
</script>