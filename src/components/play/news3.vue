<template>
<div>
  <div class="layout-padding">
    <button
      class="primary"
      @click="openModal"
    >Open Modal</button>
  </div>
</div>

</template>

<script>
import { Modal } from 'quasar'
import ModalPage from './modal-page.vue'

export default {
  methods: {
    openModal () {
      let modal = Modal.create(ModalPage)
      modal.set({
        maximized: true
      })
      modal.show()
    }
  }
}
</script>
