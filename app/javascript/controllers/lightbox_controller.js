import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "dialog", "zoomedImage" ]

  show(event) {
    this.dialogTarget.showModal()
    this.#set(event.target.parentNode)
  }

  close() {
    this.dialogTarget.close()
  }

  reset() {
    this.zoomedImageTarget.src = ""
  }

  #set(target) {
    this.zoomedImageTarget.src = target.href
  }
}
