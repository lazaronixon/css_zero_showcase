import { Controller } from "@hotwired/stimulus"
import { put } from "https://cdn.skypack.dev/@rails/request.js@0.0.11"
import Sortable from "https://cdn.skypack.dev/sortablejs"

export default class extends Controller {
  static values  = {
    url: String,
    group: String,
    put:  { type: Boolean, default: true },
    sort: { type: Boolean, default: true },
    handle: String
  }

  connect() {
    this.sortable = new Sortable(this.element, this.#options)
  }

  disconnect() {
    this.sortable.destroy()
  }

  #submit({ item, newIndex, to }) {
    put(item.dataset.urlValue, { responseKind: "plain", query: { position: newIndex, parent_id: to.dataset.id } })
	}

  get #options() {
    return { animation: 150, onAdd: this.#submit, onUpdate: this.#submit, group: this.#groupOptions, sort: this.sortValue, handle: this.handleValue }
  }

  get #groupOptions() {
    return this.hasGroupValue && { name: this.groupValue, put: this.putValue }
  }
}