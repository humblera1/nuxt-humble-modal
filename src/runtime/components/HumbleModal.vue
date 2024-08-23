<template>
  {{ modalState }}
  <div
    :class="['humble-modal', { 'humble-modal_visible': modalState.isOpen }]"
  >
    <div
      :class="['humble-modal__backdrop', { 'humble-modal__backdrop_visible': modalState.isOpen && modalState.configs?.withBackdrop }]"
      @click="modalState.configs?.closeOnClickOutside ? closeModal() : ''"
    />
    <div class="humble-modal__content">
      <component
        :is="modalState.component"
        v-if="modalState.component"
        v-bind="modalState.properties"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
import { useState } from 'nuxt/app'
import { useHumbleModal } from '../composables/useHumbleModal'
import type { IModalState } from '../types/modal-state'

const { closeModal } = useHumbleModal()

const modalState: Ref<IModalState> = useState('humble-modal', () => {
  return {
    isOpen: false,
  }
})

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && modalState.value.configs?.closeOnEsc) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeyDown)
})
</script>

<style src="./humble-modal.styles.css"></style>
