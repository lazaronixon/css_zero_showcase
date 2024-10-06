import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "dependant" ]

  select() {
    this.dependantTargets.forEach(dependant => this.#filter(dependant))
  }

  #filter(dependant) {
    const dependee = this.#getDependeeFor(dependant)
    const optsTemplate = this.#getOptionsTemplateFor(dependant)

    if (dependee.value != "") {
      this.#reset(dependant)
      this.#insertMatches(optsTemplate, dependant, dependee.value)
    } else {
      this.#reset(dependant)
    }
  }

  #reset(dependant) {
    dependant.querySelectorAll('option:not([value=""])').forEach(e => e.remove())
    dependant.value = ""
  }

  #insertMatches(optsTemplate, dependant, value) {
    optsTemplate.content.querySelectorAll(`[data-dependee-value=${value}]`).forEach(e => this.#append(dependant, e))
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
