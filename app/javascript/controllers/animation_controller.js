import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { startingOpacity: String, var: String }

  run() {
    if (this.element.style.animation != '') {
      this.element.style = null
    } else if (this.hasStartingOpacityValue) {
      this.#setOpacity(); setTimeout(()=> { this.#setAnimation() }, 300)
    } else {
      this.#setAnimation()
    }
  }

  cleanup() {
    setTimeout(() => { this.element.style = null; }, 500)
  }

  #setOpacity() {
    this.element.style.opacity = this.startingOpacityValue
  }

  #setAnimation() {
    this.element.style.animation = `var(${this.varValue}) forwards`
  }
}
