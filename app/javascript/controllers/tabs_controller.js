import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button", "tab" ]
  static values  = { index: Number }

  connect() {
    this.#showCurrentTab()
  }

  select({ target }) {
    this.indexValue = this.buttonTargets.indexOf(target)
    this.#showCurrentTab()
  }

  prev() {
    if (this.indexValue > 0) {
      this.indexValue--
      this.#showCurrentTab(true)
    }
  }

  next() {
    if (this.indexValue < this.#lastIndex) {
      this.indexValue++
      this.#showCurrentTab(true)
    }
  }

  #showCurrentTab(shouldFocus = false) {
    this.buttonTargets.forEach((element, index) => {
      element.ariaSelected = index == this.indexValue
      element.tabIndex     = index == this.indexValue ? 0 : -1
    })

    this.tabTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue
    })

    if (shouldFocus) {
      this.buttonTargets[this.indexValue].focus()
    }
  }

  get #lastIndex() {
    return this.tabTargets.length -1
  }
}
