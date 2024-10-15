import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "item" ]
  static values  = { index: Number }

  #intersectionObserver

  initialize() {
    this.#intersectionObserver = new IntersectionObserver(this.#reset.bind(this))
  }

  connect() {
    this.#intersectionObserver.observe(this.element)
  }

  disconnect() {
    this.#intersectionObserver.disconnect()
  }

  prev() {
    if (this.indexValue > 0) {
      this.indexValue--
      this.#updateTabstops(true)
    }
  }

  next() {
    if (this.indexValue < this.#lastIndex) {
      this.indexValue++
      this.#updateTabstops(true)
    }
  }

  #reset() {
    this.indexValue = 0; this.#updateTabstops()
  }

  #updateTabstops(shouldFocus = false) {
    this.itemTargets.forEach((element, index) => {
      element.tabIndex = index == this.indexValue ? 0 : -1
    })

    if (shouldFocus) {
      this.itemTargets[this.indexValue].focus()
    }
  }

  get #lastIndex() {
    return this.itemTargets.length -1
  }
}
