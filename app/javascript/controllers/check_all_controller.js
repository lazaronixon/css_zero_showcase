import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "dependee", "dependant" ]

  connect() {
    this.#checkDependee()
  }

  check({ target }) {
    if (target === this.dependeeTarget) {
      this.#checkDependants()
    } else {
      this.#checkDependee()
    }
  }

  #checkDependee() {
    this.dependeeTarget.checked = this.#allChecked
    this.dependeeTarget.indeterminate = this.#indeterminate
  }

  #checkDependants() {
    this.dependantTargets.forEach(e => e.checked = this.dependeeTarget.checked)
  }

  get #indeterminate() {
    return this.#atLeastOneChecked && !this.#allChecked;
  }

  get #allChecked() {
    return this.dependantTargets.every(e => e.checked)
  }

  get #atLeastOneChecked() {
    return this.dependantTargets.some(e => e.checked)
  }
}