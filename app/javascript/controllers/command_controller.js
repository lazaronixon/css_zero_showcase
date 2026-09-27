import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  visit({ target }) {
    Turbo.visit(target.dataset.href, { action: "advance" })
  }
}
