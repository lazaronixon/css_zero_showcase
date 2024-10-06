import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  select({ target }) {
    this.#filterDependant(target)
  }

  #filterDependant(dependee) {
    const dependant = this.#getDependantFor(dependee)
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

  #getDependantFor(dependee) {
    return this.element.querySelector(`#${dependee.dataset.dependantId}`)
  }

  #getOptionsTemplateFor(dependant) {
    return this.element.querySelector(`#${dependant.dataset.optionsTemplateId}`)
  }
}
