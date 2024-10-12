import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button", "tab" ]
  static values  = { index: Number }

  indexValueChanged() {
    this.#showSelectedTab()
  }

  select({ target }) {
    this.indexValue = this.buttonTargets.indexOf(target)
  }

  prev() {
    if (this.indexValue > 0) this.indexValue--
  }

  next() {
    if (this.indexValue < this.#lastIndex) this.indexValue++
  }

  #showSelectedTab() {
    this.buttonTargets.forEach((button, index) => {
      button.ariaSelected = index == this.indexValue
      button.tabIndex     = index == this.indexValue ? 0 : -1
    })

    this.tabTargets.forEach((tab, index) => {
      tab.hidden = index !== this.indexValue
    })
  }

  get #lastIndex() {
    return this.tabTargets.length -1
  }
}
