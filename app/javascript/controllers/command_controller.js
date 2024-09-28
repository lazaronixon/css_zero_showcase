import { Controller } from "@hotwired/stimulus"
import { debounce } from "helpers/timing_helpers"

export default class extends Controller {
  static targets = [ "list", "group", "option", "empty" ]

  initialize() {
    this.filter = debounce(this.filter.bind(this), 300)
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

    this.optionTargets.forEach((element) => {
      element.hidden = !element.matches(selector)
    })

    this.groupTargets.forEach((element) => {
      element.hidden = !element.querySelector(selector)
    })

    this.emptyTarget.hidden = !!this.listTarget.querySelector(selector)
  }

  #reset() {
    this.optionTargets.forEach((element) => {
      element.hidden = false
    })

    this.groupTargets.forEach((element) => {
      element.hidden = false
    })

    this.emptyTarget.hidden = true
  }
}
