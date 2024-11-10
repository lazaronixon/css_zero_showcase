import { Controller } from "@hotwired/stimulus"
import Sortable from "https://cdn.skypack.dev/sortablejs"

export default class extends Controller {
  static values  = {
    ghostClass: String,
    group: String,
    clone: { type: Boolean, default: false },
    pull: { type: Boolean, default: true },
    put: { type: Boolean, default: true },
    sort: { type: Boolean, default: true },
    handle: String
  }

  connect() {
    this.sortable = new Sortable(this.element, this.#options)
  }

  disconnect() {
    this.sortable.destroy()
  }

  get #options() {
    return { animation: 150, ghostClass: this.ghostClassValue, group: this.#groupOptions, sort: this.sortValue, handle: this.handleValue }
  }

  get #groupOptions() {
    return this.hasGroupValue && { name: this.groupValue, pull: this.#pullOption, put: this.putValue }
  }

  get #pullOption() {
    return this.cloneValue ? "clone" : this.pullValue
  }
}