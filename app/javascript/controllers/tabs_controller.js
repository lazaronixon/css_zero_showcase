import { Controller } from "@hotwired/stimulus"
import { onNextEventLoopTick } from "helpers/timing_helpers"

export default class extends Controller {
  static targets = [ "button", "tab" ]
  static values  = { index: Number }

  indexValueChanged(index, previousIndex) {
    this.#showCurrentTab()
    this.#focusCurrentButton(previousIndex !== undefined)
  }

  select({ target }) {
    this.indexValue = this.buttonTargets.indexOf(target)
  }

  prev() {
    this.indexValue > 0 && this.indexValue--
  }

  next() {
    this.indexValue < this.#lastIndex && this.indexValue++
  }

  #showCurrentTab() {
    this.buttonTargets.forEach((button, index) => {
      button.ariaSelected = index == this.indexValue
      button.tabIndex     = index == this.indexValue ? 0 : -1
    })

    this.tabTargets.forEach((tab, index) => {
      tab.hidden = index !== this.indexValue
    })
  }

  #focusCurrentButton(shouldFocus) {
    shouldFocus && this.#focusInvisible(this.buttonTargets[this.indexValue])
  }

  #focusInvisible(element) {
    onNextEventLoopTick(() => element.focus())
  }

  get #lastIndex() {
    return this.tabTargets.length -1
  }
}
