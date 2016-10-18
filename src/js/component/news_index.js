import Vue from 'vue';
import news_index from './components/play/news.vue';
var newsitems = new Vue({
  el:'#news_index',
  components:{news_index},
  data:{
    News: {
        Title: 'News Title',
        Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        FilesCount: 2,
        Views: 100,
        Author: 'Ahmed Kassem',
        Date: '20/09/2016'
      },
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
          label: 'Studnets Affair',
          value: 'affair'
        }
      ]    
  }
});
export default newsitems;