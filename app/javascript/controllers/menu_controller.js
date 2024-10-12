import { Controller } from "@hotwired/stimulus"
import { nextFrame } from "helpers/timing_helpers"

export default class extends Controller {
  static targets = [ "item" ]
  static values  = { index: Number }

  indexValueChanged() {
    this.#focusSelectedItem()
  }

  prev() {
    if (this.indexValue > 0) this.indexValue--
  }

  next() {
    if (this.indexValue < this.#lastIndex) this.indexValue++
  }

  reset() {
    this.indexValue = 0
  }

  #focusSelectedItem() {
    this.itemTargets.forEach(item => item.tabIndex = -1)
    this.itemTargets[this.indexValue].tabIndex = 0
    this.itemTargets[this.indexValue].focus()
  }

  get #lastIndex() {
    return this.itemTargets.length -1
  }
}