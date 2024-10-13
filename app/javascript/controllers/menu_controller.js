import { Controller } from "@hotwired/stimulus"
import { nextFrame } from "helpers/timing_helpers"

export default class extends Controller {
  static targets = [ "item" ]
  static values  = { index: Number }

  indexValueChanged() {
    this.#focusCurrentItem()
  }

  prev() {
    this.indexValue > 0 && this.indexValue--
  }

  next() {
    this.indexValue < this.#lastIndex && this.indexValue++
  }

  reset() {
    this.indexValue = 0
  }

  #focusCurrentItem() {
    this.#removeTabstops()
    this.itemTargets[this.indexValue].tabIndex = 0
    this.itemTargets[this.indexValue].focus()
  }

  #removeTabstops() {
    this.itemTargets.forEach(item => item.tabIndex = -1)
  }

  get #lastIndex() {
    return this.itemTargets.length -1
  }
}
