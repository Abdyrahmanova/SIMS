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
      <button class="primary clear"  v-if= " roleSelect=='admin' " v-link="'/play/user-add'">
      <i>add</i> 
      </button>
<!--Add News Button-->

  </div>

    <div class="layout-padding">

<!--Contacts -->
<!--Displays a list of 20 contacts related to the user (same class, subject) and the user can search for any related user-->
<div>
<!--Search Contacts Field-->
<!--where user enters name of contact to search for and clicks return button, search is done, user can filter results by choosing
from buttons in the Actions Bar (Classes, Roles, Kids)-->
<quasar-search :model.sync="searchModel" :debounce="600" placeholder="Search Contacts" icon="person"></quasar-search>
<!--Classes Button-->
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
    

<button class="primary full-width"  @click="togglecontacts">
  Search
</button>
<br />
<!--Search Contacts Field-->

<div class="list striped" v-if= "contacts">

  <div v-for="n in 6" class="item two-lines cursor-pointer" v-link="'/play/profile'">
    <img class="item-primary" :src="'statics/man.jpg'">
    <div class="item-content inset">
      <div>John</div>
      <div>
        <span>Role - Classes</span>
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


  </div>
  </div>
</template>
<script>
export default {
  methods: {
      togglecontacts: function () {
        this.contacts ^= true
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
      classSelect: '',
      classSelectOptions: [
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
      search: '',
      contacts: false
    }
  }
}
</script>