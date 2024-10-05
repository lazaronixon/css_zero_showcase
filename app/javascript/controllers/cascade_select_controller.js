import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "dependant" ]

  select() {
    this.#updateDependants()
  }

  #updateDependants() {
    this.dependantTargets.forEach(dependant => this.#filter(dependant))
  }

  #filter(dependant) {
    const dependee = this.#getDependeeFor(dependant)
    const optionsTemplate = this.#getOptionsTemplateFor(dependant)

    if (dependee.value != "") {
      this.#reset(dependant)
      this.#copyMatches(optionsTemplate, dependant, dependee.value)
    } else {
      this.#reset(dependant)
    }
  }

  #reset(dependant) {
    dependant.value = ""; dependant.innerHTML = "";
  }

  #copyMatches(optionsTemplate, dependant, value) {
    optionsTemplate.content.querySelectorAll(`[data-value=${value}]`).forEach(e => this.#append(dependant, e))
  }

  #append(parent, node) {
    parent.insertAdjacentHTML("beforeend", node.outerHTML)
  }

  #getDependeeFor(dependant) {
    return this.element.querySelector(`#${dependant.dataset.dependee}`)
  }

  #getOptionsTemplateFor(dependant) {
    return this.element.querySelector(`#${dependant.dataset.options}`)
  }
}
