import { Controller } from "@hotwired/stimulus"
import Sortable from "https://cdn.skypack.dev/sortablejs"

export default class extends Controller {
  static values  = {
    ghostClass: String,
    animation: { type: Number, default: 150 },
    group: String,
    clone: { type: Boolean, default: false },
    pull: { type: Boolean, default: true },
    put: { type: Boolean, default: true },
    sort: { type: Boolean, default: true },
    handle: String,
    filter: String
  }

  connect() {
    this.sortable = new Sortable(this.element, {
      animation: this.animationValue,
      ghostClass: this.ghostClassValue,
      group: this.#groupOptions,
      sort: this.sortValue,
      handle: this.handleValue,
      filter: this.filterValue
    })
  }

  disconnect() {
    this.sortable.destroy()
  }

  get #groupOptions() {
    return this.hasGroupValue && { name: this.groupValue, pull: this.#pullOption, put: this.putValue }
  }

  get #pullOption() {
    return this.cloneValue ? "clone" : this.pullValue
  }
}