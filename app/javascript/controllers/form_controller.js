import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "cancel" ]

  #requestTimer = null

  submit({ params: { submitter, delay } }) {
    delay ? this.#requestLater(submitter, delay) : this.#request(submitter)
  }

  cancel() {
    this.cancelTarget?.click()
  }

  #request(submitter) {
    submitter ? this.element.requestSubmit(this.#get(submitter)) : this.element.requestSubmit()
  }

  #requestLater(submitter, delay) {
    clearTimeout(this.#requestTimer)
    this.#requestTimer = setTimeout(() => this.#request(submitter), delay)
  }

  #get(id) {
    return document.getElementById(id) || this.#elementNotFoundWith(id)
  }

  #elementNotFoundWith(id) {
    throw new Error(`Element with ID "${id}" not found in the DOM`)
  }
}
