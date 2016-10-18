<template>
  <div class="has-top-toolbar has-bottom-toolbar">
    <div class="top-toolbar toolbar white cursor-pointer" v-link="'/play/messages'">
    <button>
      <i>keyboard_arrow_left</i>
    </button>
    <quasar-toolbar-title :padding="1">
      Contact Name
    </quasar-toolbar-title>
    <button>
              <i>close</i>
        </button>
  </div>


    <div>
      <div class="chat-other">
        <div class="chat-user">
          <img :src="'statics/man.jpg'">
        </div>
        <div class="chat-date">
          7 minutes ago
        </div>
        <div class="chat-message">
          <p>
            Welcome
          </p>
        </div>
      </div>

      <div class="chat-you">
        <div class="chat-user">
          <img :src="'statics/128.jpg'">
        </div>
        <div class="chat-date">
          4 minutes ago
        </div>
        <div class="chat-message">
          <p>
            Hello
          </p>
        </div>
      </div>

      <div class="chat-you">
        <div class="chat-user">
          <img :src="'statics/128.jpg'">
        </div>
        <div class="chat-date">
          4 minutes ago
        </div>
        <div class="chat-message">
          <p>
            How may I help you ?
          </p>
        </div>
      </div>

      <div class="chat-other" v-for="n in 10">
        <div class="chat-user">
          <img :src="'statics/man.jpg'">
        </div>
        <div class="chat-date">
          3 minutes ago
        </div>

        <div class="chat-message">
          <p>
            I need some help with the .... section
          </p>
        </div>
      </div>

  <div class="column bottom-toolbar bg-white">
    <input placeholder="Enter your message here" class="full-width">
    <button class="primary full-width">
      <i>send</i> Send Message
    </button>
  </div>


    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      roleSelect: 'author'
    }
  }
}
</script>
