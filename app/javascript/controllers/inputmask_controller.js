import { Controller } from "@hotwired/stimulus"
import Inputmask from "inputmask"

export default class extends Controller {
  static values = {
    mask:           String,
    placeholder:    { type: String, default: "_" },
    alias:          String,
    groupSeparator: String,
    radixPoint:     { type: String,  default: "." },
    digits:         { type: String,  default: "*" },
    digitsOptional: { type: Boolean, default: true },
    inputFormat:    { type: String,  default: "mm/dd/yyyy HH:MM" },
    outputFormat:   { type: String,  default: "yyyy-mm-dd HH:MM" }
  }

  connect() {
    if (this.hasMaskValue) {
      Inputmask.default(this.#maskOptions).mask(this.element)
    } else if (this.aliasValue == "numeric") {
      Inputmask.default(this.#numericOptions).mask(this.element)
    } else if (this.aliasValue == "datetime") {
      Inputmask.default(this.#datetimeOptions).mask(this.element)
    }
  }

  get #maskOptions() {
    return { mask: this.maskValue, placeholder: this.placeholderValue }
  }

  get #numericOptions() {
    return {
      alias: "numeric",
      unmaskAsNumber: true,
      removeMaskOnSubmit: true,
      groupSeparator: this.groupSeparatorValue,
      radixPoint: this.radixPointValue,
      digits: this.digitsValue,
      digitsOptional: this.digitsOptionalValue
    }
  }

  get #datetimeOptions() {
    return {
      alias: "datetime",
      removeMaskOnSubmit: true,
      inputFormat: this.inputFormatValue,
      outputFormat: this.outputFormatValue
    }
  }
}
