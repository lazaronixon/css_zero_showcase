import { Controller } from "@hotwired/stimulus"
import { debounce } from "helpers/timing_helpers"

export default class extends Controller {
  static targets = [ "group", "option", "empty" ]

  initialize() {
    this.filter = debounce(this.filter.bind(this), 300)
  }

  connect() {
    this.element.focus()
  }

  filter({ target }) {
    if (target.value != "") {
      this.#selectMatches(target.value)
    } else {
      this.#reset()
    }
  }

  #selectMatches(value) {
    const selector = `[data-value*=${value.toLowerCase()}]`

    this.groupTargets.forEach((element) => {
      element.hidden = !element.querySelector(selector)
    })

    this.optionTargets.forEach((element) => {
      element.hidden = !element.matches(selector)
    })

    this.emptyTarget.hidden = this.element.querySelector(selector)
  }

  #reset() {
    this.groupTargets.forEach(element => element.hidden = false)
    this.optionTargets.forEach(element => element.hidden = false)
    this.emptyTarget.hidden = true
  }
}
