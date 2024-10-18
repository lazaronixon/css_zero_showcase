import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "list", "option" ]
  static values  = { index: Number }

  connect() {
    this.#removeTabstops()
    this.#selectFirstOption()
  }

  navigate(event) {
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault()
        this.#prev()
        break
      case "ArrowDown":
        event.preventDefault()
        this.#next()
        break
      case "Enter":
        event.preventDefault()
        this.#clickSelected()
        break
    }
  }

  reset() {
    this.indexValue = 0
    this.#selectCurrentOption()
  }

  #prev() {
    if (this.indexValue > 0) {
      this.indexValue--
      this.#selectCurrentOption()
    }
  }

  #next() {
    if (this.indexValue < this.#lastIndex) {
      this.indexValue++
      this.#selectCurrentOption()
    }
  }

  #clickSelected() {
    this.#visibleOptions[this.indexValue]?.click()
  }

  #removeTabstops() {
    this.optionTargets.forEach(e => e.tabIndex = -1)
  }

  #selectFirstOption() {
    this.optionTargets.forEach((element, index) => {
      element.ariaSelected = index === 0
    })
  }

  #selectCurrentOption() {
    this.optionTargets.forEach((element, index) => {
      element.ariaSelected = false
    })

    this.#visibleOptions.forEach((element, index) => {
      element.ariaSelected = index === this.indexValue
    })
  }

  get #lastIndex() {
    return this.#visibleOptions.length -1
  }

  get #visibleOptions() {
    return this.optionTargets.filter(e => e.offsetParent != null)
  }
}
