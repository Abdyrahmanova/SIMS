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
      <button class="primary clear"  v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary'  || roleSelect=='teacher' " v-link="'/play/news-add'">
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
        @click="showToast(), $refs.roles.close()">
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

<div class="layout-padding" id="news_index">
  <div  v-for="n in 4" class="card cursor-pointer" v-link="'/play/news-single'">
    <div class="card-title bg-primary text-white">
      {{ News.Title }}
    </div>
    <div class="card-content card-force-top-padding">
      {{ News.Content }}
    </div>
    <div class="card-actions">
      <div class="text-primary">
        <i>person_pin</i> {{News.Author}}
      </div>
      <!-- seen only by Management-->
      <div v-if= " roleSelect=='admin' || roleSelect=='manager' || roleSelect=='author' " class="text-primary">
        <i>remove_red_eye</i> {{ News.Views }} views
      </div>
      <!-- seen only by Management-->
      <div class="text-primary">
        <i>attach_file</i> {{ News.FilesCount }} files
      </div>
      <div class="auto"></div>
      <div class="text-grey-6">
        {{News.Date}}
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
</template>
