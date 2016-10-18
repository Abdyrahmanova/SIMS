<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <quasar-toolbar-title :padding="1">

    </quasar-toolbar-title>

<!--Select Role-->
<!--a Dropdown to show different views for different roles - will be removed in final product-->
<quasar-select type="radio" :model.sync="roleSelect" :options="roleSelectOptions"></quasar-select>
<!--Select Role-->
        </div>

    <div class="layout-padding">

        <div class="profile full-width">
          <figure class="profile-banner full-width">
            <img :src="'statics/ocean.jpg'">
          </figure>
          <figure class="profile-picture"
            style="background-image: url('statics/boy.jpg')">
          </figure>
          <div class="profile-description full-width">
            <div class="profile-name">Ahmed <small>Kassem</small></div>
            <div class="profile-role">Student</div>
          </div>
        </div>
        <div class="card-content">

      <quasar-tabs class="justify-around primary inverted">
        <quasar-tab icon="person_pin" target="#tab-1" active="true">Account</quasar-tab>
        <quasar-tab icon="note" target="#tab-2">Notes</quasar-tab>
        <quasar-tab icon="settings" target="#tab-3">Manage</quasar-tab>
      </quasar-tabs>

    <div class="layout-padding">

<div id="tab-1">

  <!--Username Input Field-->
        <div v-if= "roleSelect=='admin' " class="item">
    <i class="item-primary text-primary">person</i>
          <div v-else class="item-content">
<input placeholder="Username" v-model="user.username" class="full-width">
          </div>
        </div>

        <div v-if= "roleSelect=='author' " class="item">
    <i class="item-primary text-primary">person</i>
          <div v-else class="item-content">
<input placeholder="Username" v-model="user.username" class="full-width" disabled="true">
          </div>
        </div>
  <!--Username Input Field-->

  <!--Password Input Field-->
        <div class="item">
    <i class="item-primary text-primary">lock</i>
          <div class="item-content">
<input v-model="user.password" placeholder="Password" type="password" class="full-width">
          </div>
        </div>
  <!--Password Input Field-->

  <!--Full Name Input Field-->
        <div class="item">
    <i class="item-primary text-primary">person_pin</i>
          <div class="item-content">
<input v-model="user.fullname" placeholder="Password" class="full-width" disabled="true">
          </div>
        </div>
  <!--Full Name Input Field-->

  <!--Mobile Input Field-->
        <div class="item">
    <i class="item-primary text-primary">smartphone</i>
          <div class="item-content">
<input v-model="user.mobile" placeholder="Mobile Number" class="full-width">
          </div>
        </div>
  <!--Mobile Input Field-->

  <!--Phone Input Field-->
        <div class="item">
    <i class="item-primary text-primary">phone</i>
          <div class="item-content">
<input v-model="user.phone" placeholder="Phone Number" class="full-width">
          </div>
        </div>
  <!--Phone Input Field-->

  <!--Biography Input Field-->
  <div class="item multiple-lines">
    <i class="item-primary text-primary">format_align_left</i>
          <div class="item-content">
<textarea v-model="user.biography" placeholder="Biography" class="full-width"></textarea>
          </div>
        </div>
  <!--Biography Input Field-->


<!--Save Button-->
<br v-if= "roleSelect=='author' "/>
<button v-if= "roleSelect=='author' " class="pink full-width">
  Upload Profile Picture
</button>
<!--Save Button-->


<!--Save Button-->
<br v-if= "roleSelect=='author' "/>
<button v-if= "roleSelect=='author' "class="indigo full-width">
  Upload Cover Photo
</button>
<!--Save Button-->

<!--Save Button-->
<br v-if= "roleSelect=='admin' " />
<button v-if= "roleSelect=='admin' " class="negative full-width">
  Disable User
</button>
<!--Save Button-->

<br />

<!--Save Button-->
<button class="primary full-width">
  Save
</button>
<!--Save Button-->
</div>

<div id="tab-2">
<div v-for= "n in 3" class="card">
  <div class="card-title bg-primary text-white">
    Teacher Name
    <i class="pull-right cursor-pointer" @click="basicToast()">delete</i>
  </div>
  <div class="card-content card-force-top-padding">
    Note Content
  </div>
</div>
<textarea v-model="note" placeholder="Note Details" class="full-width"></textarea>
        <button class="primary full-width">Add Note</button>
</div>



<div id="tab-3">
      <div class="item">
      <i>filter_none</i>
      <div class="item-content">
        <div class="item-label"> Class
            <quasar-select :model.sync="multipleSelect" :options="selectOptions" ok-label="Pick" title="Classes"></quasar-select>
        </div>
      </div>
    </div>
<div class="list item-delimiter">
  <div class="list-header">
    Subjects
  </div>
        <label class="item">
          <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
          <div class="item-content">
            Subject
          </div>
        </label>
        <label class="item">
          <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
          <div class="item-content">
            Subject
          </div>
        </label>
        <label class="item">
          <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
          <div class="item-content">
            Subject
          </div>
        </label>
        <label class="item">
          <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
          <div class="item-content">
            Subject
          </div>
        </label>
          <label class="item">
          <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
          <div class="item-content">
            Subject
          </div>
        </label>
          <label class="item">
          <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
          <div class="item-content">
            Subject
          </div>
        </label>
          <label class="item">
          <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
          <div class="item-content">
            Subject
          </div>
        </label>
</div>
        <button class="primary full-width">Disable User</button>
        </div>


        </div>

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
      user: {
      username: 'ahmedkassem',
      password: 'password',
      fullname: 'Ahmed Kassem',
      mobile: '010000000',
      phone: '0111111111',
      biography: 'Example Biography Text'
    },
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
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
      ]
    }
  }
}
</script>
