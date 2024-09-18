import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { title: String, text: String, url: String, file: String }

  #applicationName = 'MyApplication'

  connect() {
    this.element.hidden = !navigator.canShare
  }

  async share() {
    await navigator.share(await this.#getShareData())
  }

  async #getShareData() {
    const data = { title: this.titleValue, text: this.textValue }

    if (this.urlValue) {
      data.url = this.urlValue
    }

    if (this.fileValue) {
      data.files = [ await this.#getFileObject()]
    }

    return data;
  }

  async #getFileObject() {
    const response = await fetch(this.fileValue)
    const blob = await response.blob()
    const randomPrefix = `${this.#applicationName}_${Math.random().toString(36).slice(2)}`
    const fileName = `${randomPrefix}.${blob.type.split('/').pop()}`

    return new File([ blob ], fileName, { type: blob.type })
  }
}