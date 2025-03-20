import { Controller } from "@hotwired/stimulus"
import debounce from "https://esm.sh/just-debounce-it@3.2.0?standalone"

export default class extends Controller {
  static targets = [ "cancel" ]

  initialize() {
    this.search = debounce(this.search.bind(this), 500)
  }

  submit({ params }) {
    params.submitter ? this.#requestSubmitWith(params.submitter) : this.element.requestSubmit()
  }

  search({ params }) {
    params.submitter ? this.#requestSubmitWith(params.submitter) : this.element.requestSubmit()
  }

  cancel() {
    this.cancelTarget?.click()
  }

  preventAttachment(event) {
    event.preventDefault()
  }

  #requestSubmitWith(submitter) {
    this.element.requestSubmit(this.element.querySelector(submitter))
  }
}
