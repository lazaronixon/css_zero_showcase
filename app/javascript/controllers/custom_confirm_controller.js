import { Controller } from "@hotwired/stimulus"
import Swal from "https://esm.sh/sweetalert2@11.16.0/dist/sweetalert2.js"

export default class extends Controller {
  connect() {
    Turbo.config.forms.confirm = this.#confirm
  }

  #confirm(message, element) {
    console.log(element)
    return Swal.fire({ title: message, text: element.dataset.turboCofirmMessage, icon: "warning", showCancelButton: true }).then(result => result.isConfirmed)
  }
}
