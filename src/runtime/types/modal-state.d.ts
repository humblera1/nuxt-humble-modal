import type { Component } from '@vue/runtime-core'

declare interface IModalState {
  /**
   * Is any window open
   */
  isOpen: boolean

  /**
   * Your modal window component
   */
  component?: Component

  /**
   * Properties that will be passed to your component
   */
  properties?: object

  /**
   * Basic settings of the <HumbleModal /> component
   * <p>
   *   `withBackdrop` - default to true, determines whether the layer should be rendered.
   *    Without a backdrop, next param makes no sense
   * </p>
   * <p>
   *   `closeOnClickOutside` - default to true, determines whether the window should be closed when clicking on a backdrop
   * </p>
   * <p>
   *   `closeOnEsc` - default to true, determines whether the window should be closed when pressing esc
   * </p>
   */
  configs?: IModalConfig
}

declare interface IModalConfig {
  withBackdrop?: boolean
  closeOnClickOutside?: boolean
  closeOnEsc?: boolean
}
