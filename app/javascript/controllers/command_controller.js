import { Controller } from "@hotwired/stimulus"
import { debounce } from "helpers/timing_helpers"

export default class extends Controller {
  static targets = [ "list" ]

  #activeClass = "command__list--filtering"

  initialize() {
    this.filter = debounce(this.filter.bind(this), 300)
  }

  filter(event) {
    this.#reset()

    if (event.target.value != "") {
      this.#selectMatches(event.target.value)
      this.#activate()
    } else {
      this.#deactivate()
    }
  }

  #activate() {
    this.listTarget.classList.add(this.#activeClass)
  }

  #deactivate() {
    this.listTarget.classList.remove(this.#activeClass)
  }

  #selectMatches(value) {
    this.listTarget.querySelectorAll(`[data-value*=${value.toLowerCase()}]`).forEach((element) => {
      element.classList.add("selected")
    })
  }

  #reset() {
    this.listTarget.querySelectorAll(".selected").forEach((element) => {
      element.classList.remove("selected")
    })
  }
}
