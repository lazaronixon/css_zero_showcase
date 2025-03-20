import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "cancel" ]

  #submitTimer = null

  submit({ params: { submitter, delay } }) {
    delay ? this.#requestSubmitLater(submitter, delay) : this.#requestSubmit(submitter)
  }

  cancel() {
    this.cancelTarget?.click()
  }

  #requestSubmit(submitter) {
    submitter ? this.element.requestSubmit(this.#get(submitter)) : this.element.requestSubmit()
  }

  #requestSubmitLater(submitter, delay) {
    clearTimeout(this.#submitTimer)
    this.#submitTimer = setTimeout(() => this.#requestSubmit(submitter), delay)
  }

  #get(id) {
    return document.getElementById(id) || this.#elementNotFoundWith(id)
  }

  #elementNotFoundWith(id) {
    throw new Error(`Element with ID "${id}" not found in the DOM`)
  }
}
