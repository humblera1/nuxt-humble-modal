import type { Component, Ref } from '@vue/runtime-core'
import { shallowRef, computed } from 'vue'
import { useState } from 'nuxt/app'
import type { IModalConfig, IModalState } from '../types/modal-state'

const defaultConfigs: IModalConfig = {
  withBackdrop: true,
  closeOnClickOutside: true,
  closeOnEsc: true,
}

export const useHumbleModal = (configs: IModalConfig = {}) => {
  const modalState: Ref<IModalState> = useState('humble-modal')

  const openModal = (_component: Component, _properties: object = {}): void => {
    modalState.value.configs = { ...defaultConfigs, ...configs }

    modalState.value.component = shallowRef(_component)
    modalState.value.properties = _properties
    modalState.value.isOpen = true
  }

  const closeModal = (): void => {
    modalState.value.component = undefined
    modalState.value.isOpen = false
  }

  const toggleModal = (_component: Component, _properties: object = {}): void => {
    isSpecificWindowOpen(_component) ? closeModal() : openModal(_component, _properties)
  }

  const isSpecificWindowOpen = (_component: Component) => {
    return modalState.value.component === _component
  }

  const isOpen = computed((): boolean => {
    return modalState.value?.isOpen ?? false
  })

  return { openModal, closeModal, toggleModal, isSpecificWindowOpen, isOpen }
}
