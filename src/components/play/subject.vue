<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">

    <button v-link="'/play/curriculum'">
      <i>keyboard_arrow_left</i>
    </button>

    <quasar-toolbar-title :padding="1">
      Subject Name - Grade #
    </quasar-toolbar-title>

      <quasar-select :model.sync="roleSelect" :options="roleSelectOptions" ok-label="Pick" cancel-label="Cancel" title="Choose Role"></quasar-select>

      <button class="primary clear"  v-if= " roleSelect=='teacher' " v-link="'/play/news-add'">
      <i>add</i>
      </button>

          </div>

    <div class="layout-padding">

      <div v-if= " roleSelect=='admin' || roleSelect=='manager'  || roleSelect=='secretary'  || roleSelect=='teacher' " class="item">
      <i>people</i>
      <div class="item-content">
        <div class="item-label">
          <p class="item-title primary">Teachers</p>
          <p>Maged George, Ahmed Hassan</p>
        </div>
      </div>
      <i>filter_none</i>
      <div class="item-content">
        <div class="item-label">
          <p class="item-title">Classes</p>
          <p>Class 1A, Class 1B</p>
        </div>
      </div>
    </div>

      <div v-if= " roleSelect=='parent' || roleSelect=='student' " class="item">
      <i>people</i>
      <div class="item-content">
        <div class="item-label">
          <p class="item-title primary">Teacher</p>
          <p>Ahmed Hassan</p>
        </div>
      </div>
    </div>

      <quasar-tree
        :model="treeModel"
        contract-html="<i>remove_circle</i>"
        expand-html="<i>add_circle</i>"
      ></quasar-tree>

<button class="primary" v-link="'/play/lesson'">
demo lesson page
</button>

<button class="primary">
A demo modal to open lesson page
</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
roleSelect: 'teacher',
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
      ],
      treeModel: [
        {
          title: 'Section 1 Title',
          expanded: false,
          children: [
            {
              title: 'Chapter 1 - Chapter Title',
              expanded: false,
              children: [
                {
                  title: 'Lesson 1 - Lesson Title',
                  expanded: false,
                      children: []
                },
                {
                  title: 'Lesson 2 - Lesson Title',
                  expanded: false,
                  children: []
                }
              ]
            },
            {
              title: 'Chapter 2 - Chapter Title',
              expanded: false,
              children: [
                {
                  title: 'Lesson 3 - Lesson Title',
                  expanded: false,
                      children: []
                },
                {
                  title: 'Lesson 4 - Lesson Title',
                  expanded: false,
                  children: []
                }
              ]
            },
            {
              title: 'Chapter 3 - Chapter Title',
              expanded: false,
              children: [
                {
                  title: 'Lesson 5 - Lesson Title',
                  expanded: false,
                      children: []
                },
                {
                  title: 'Lesson 6 - Lesson Title',
                  expanded: false,
                  children: []
                }
              ]
            }
          ]
        },
        {
          title: 'Section 2 Title',
          expanded: false,
          children: [
            {
              title: 'Chapter 1 - Chapter Title',
              expanded: false,
              children: [
                {
                  title: 'Lesson 1 - Lesson Title',
                  expanded: false,
                      children: []
                },
                {
                  title: 'Lesson 2 - Lesson Title',
                  expanded: false,
                  children: []
                }
              ]
            },
            {
              title: 'Chapter 2 - Chapter Title',
              expanded: false,
              children: [
                {
                  title: 'Lesson 3 - Lesson Title',
                  expanded: false,
                      children: []
                },
                {
                  title: 'Lesson 4 - Lesson Title',
                  expanded: false,
                  children: []
                }
              ]
            },
            {
              title: 'Chapter 3 - Chapter Title',
              expanded: false,
              children: [
                {
                  title: 'Lesson 5 - Lesson Title',
                  expanded: false,
                      children: []
                },
                {
                  title: 'Lesson 6 - Lesson Title',
                  expanded: false,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>