  <title v-if="!$route.title">Default title</title>
  <template v-else>
      <title>{{ $route.title }}</title>
  <quasar-layout>


    <quasar-drawer>
      <div class="toolbar light">
        <div class="item two-lines">
          <img class="item-primary" :src="'statics/man.jpg'">
          <div class="item-content">
            <div>Ahmed</div>
            <div>Admin</div>
          </div>
        </div>
        </div>

      <div class="list platform-delimiter">
        <quasar-drawer-link primary icon="notifications" v-link="'/play/news'">
          News
        </quasar-drawer-link>
          <quasar-drawer-link icon="today" v-link="'/play/calendar'">
          Calendar
        </quasar-drawer-link>
        <quasar-drawer-link icon="mail" v-link="'/play/messages'">
          Messages
        </quasar-drawer-link>
        <quasar-drawer-link icon="assignment" v-link="'/play/homework'">
          Homework
        </quasar-drawer-link>
        <quasar-drawer-link icon="subject" v-link="'/play/curriculum'">
          Curriculum
        </quasar-drawer-link>
        <quasar-drawer-link icon="date_range" v-link="'/play/timetable'">
          Timetable
        </quasar-drawer-link>
        <quasar-drawer-link icon="description" v-link="'/play/quizzes'">
          Quizzes
        </quasar-drawer-link>
        <quasar-drawer-link icon="assessment" v-link="'/play/report'">
          Reports
        </quasar-drawer-link>
        <quasar-drawer-link icon="event_available" v-link="'/play/attendance'">
          Attendance
        </quasar-drawer-link>
        <quasar-drawer-link icon="person" v-link="'/play/profile'">
          Profile
        </quasar-drawer-link>
        <quasar-drawer-link icon="poll" v-link="'/play/surveys'">
          Surveys
        </quasar-drawer-link>
        <quasar-drawer-link icon="people" v-link="'/play/contacts'">
          Contacts
        </quasar-drawer-link>
        <quasar-drawer-link icon="help" v-link="'/play/news3'">
          Help
        </quasar-drawer-link>
        <quasar-drawer-link icon="help" v-link="'/play/test'">
          Test
        </quasar-drawer-link>
      </div>
    </quasar-drawer>


    <router-view class="layout-view"></router-view>
    <div slot="header" class="toolbar">
      <button class="left-drawer-opener">
        <i>menu</i>
      </button>
      <quasar-toolbar-title :padding="1">
        {{ $route.title }}
      </quasar-toolbar-title>
      <button class="right-drawer-opener">
        <i>assignment</i>
      </button>

    </div>

    <quasar-drawer right-side swipe-only>
      <div class="toolbar light">
        <quasar-toolbar-title :padding="1">
            Right-side Drawer
        </quasar-toolbar-title>
      </div>

      <p style="padding: 25px;" class="text-grey-7">
        This is yet another Drawer that does not gets displayed alongside content on
        bigger screens.
      </p>
    </quasar-drawer>
<!--
    <div slot="footer" class="toolbar">
      <div class="auto flex justify-center">
        <button class="cordova-only" v-link="{path: '/showcase', exact: true}">
          <i class="on-left blink">
            replay
          </i>
          Back to Showcase
        </button>
        <quasar-toolbar-title :padding="0" class="cordova-hide">
          Footer
        </quasar-toolbar-title>
      </div>
    </div>
-->
  </quasar-layout>
</template>

<script>
import { Platform, Toast } from 'quasar'

export default {
  methods: {
    showToast () {
      Toast.create((Platform.is.desktop ? 'Clicked' : 'Tapped') + ' on a Popover item')
    }
  },
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
