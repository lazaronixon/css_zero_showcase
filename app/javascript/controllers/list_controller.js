import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "list", "option" ]
  static values  = { index: Number }

  indexValueChanged() {
    this.#updateSelected()
  }

  navigate(event) {
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault()
        this.indexValue > 0 && this.indexValue--
        break
      case "ArrowDown":
        event.preventDefault()
        this.indexValue < this.#lastIndex && this.indexValue++
        break
      case "Enter":
        event.preventDefault()
        this.#visibleOptions[this.indexValue].click()
        break
    }
  }

  #updateSelected() {
    this.optionTargets.forEach((element) => {
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
