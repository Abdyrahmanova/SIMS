<template>
  <div class="has-top-toolbar">
    <div class="top-toolbar toolbar white">
    <button v-link="'/play/curriculum'">
      <i>keyboard_arrow_left</i>
    </button>
    <quasar-toolbar-title :padding="1">
      Add in Subject
    </quasar-toolbar-title>
    <button v-link="'/play/curriculum'"><i>close</i></button>
  </div>
    <div class="layout-padding">
<div class="card">

      <div class="item">
      <i>import_contacts</i>
      <div class="item-content">
        <div class="item-label"> Subject
      <quasar-select :model.sync="subjectSelect2" :options="subjectSelectOptions2" ok-label="Pick" cancel-label="Cancel" title="Grade - Subject"></quasar-select>
        </div>
      </div>
    </div>

      <div class="item">
      <i>library_books</i>
      <div class="item-content">
        <div class="item-label"> Section / Chapter / Lesson
      <quasar-select :model.sync="subjectSelect3" :options="subjectSelectOptions3" ok-label="Pick" cancel-label="Cancel" title="Choose"></quasar-select>
        </div>
      </div>
    </div>

        <div class="item fixed-label">
              <i>format_color_text</i>
          <div class="item-content">
            <input v-model="username" placeholder="Title">
          </div>
        </div>

        <div class="item fixed-label">
              <i>format_list_numbered</i>
          <div class="item-content">
              <quasar-numeric :model.sync="number" :min="0" :max="99"></quasar-numeric>
          </div>
        </div>


  <div class="item floating-label">
    <div class="item-content">
      <input v-model="newsTitle" required>
      <label>Title</label>
    </div>
  </div>

  <div class="card-content card-force-top-padding">
<textarea v-model="message" placeholder="Add Event Content"></textarea>
</div>
  <div class="card-content card-force-top-padding">
<button class="primary">
  <i class="on-left">attach_file</i> Attach File(s)
</button>
</div>

    <div class="card-actions">
<button class="primary full-width">
  <i class="on-left">save</i> Submit Event
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
      multipleSelect: [],
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
      subjectSelect2: 'fb',
      subjectSelectOptions2: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Grade - Subject',
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
      subjectSelect3: 'choose',
      subjectSelectOptions3: [
        {
          label: 'Choose',
          value: 'choose'
        },
        {
          label: 'Section',
          value: 'section'
        },
        {
          label: 'Chapter',
          value: 'chapter'
        },
        {
          label: 'Lesson',
          value: 'lesson'
        }
      ],
      number: 3
    }
  }
}
</script>