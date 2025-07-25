import { Controller } from "@hotwired/stimulus"
import { computePosition, flip, shift, offset, autoUpdate } from "https://esm.sh/@floating-ui/dom@1.7.2?standalone"

export default class extends Controller {
  static values  = { to: String, placement: { type: String, default: "bottom" } }

  initialize() {
    this.orient = this.orient.bind(this)
  }

  connect() {
    this.cleanup = autoUpdate(this.#anchor, this.element, this.orient)
  }

  disconnect() {
    this.cleanup()
  }

  orient() {
    computePosition(this.#anchor, this.element, this.#options).then(({x, y}) => {
      this.element.style.insetInlineStart = `${x}px`
      this.element.style.insetBlockStart  = `${y}px`
    })
  }

  get #anchor() {
    return document.getElementById(this.toValue)
  }

  get #options() {
    return { placement: this.placementValue, middleware: [offset(4), flip(), shift({padding: 4})] }
  }
}
