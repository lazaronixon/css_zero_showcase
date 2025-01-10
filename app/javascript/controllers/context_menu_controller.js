import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "menu" ]

  show(event) {
    this.menuTarget.style.insetInlineStart = `${event.clientX}px`
    this.menuTarget.style.insetBlockStart  = `${event.clientY}px`
    setTimeout(() => this.menuTarget.showPopover(), 100)
  }
}
