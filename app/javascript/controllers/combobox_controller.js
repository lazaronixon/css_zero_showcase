import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select";

export default class extends Controller {
  connect() {
    this.tomSelect = new TomSelect(this.element, { plugins: ["dropdown_input"] })
  }

  disconnect() {
    this.tomSelect.destroy()
  }
}
