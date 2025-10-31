import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "time", "date", "shortdate", "datetime", "ago" ]
  static values  = { lessThanAMinuteAgoText: { type: String, default: "Less than a minute ago" } }

  #timer

  initialize() {
    this.timeFormatter = new Intl.DateTimeFormat(undefined, { timeStyle: "short" })
    this.dateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: "long" })
    this.shortdateFormatter = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" })
    this.datetimeFormatter = new Intl.DateTimeFormat(undefined, { timeStyle: "short", dateStyle: "short" })
    this.agoFormatter = new TimeAgoFormat(undefined, { numeric: "always", lessThanAMinuteAgoText: this.lessThanAMinuteAgoTextValue })
  }

  connect() {
    this.#timer = setInterval(() => this.#refreshRelativeTimes(), 30_000)
  }

  timeTargetConnected(target) {
    this.#formatTime(this.timeFormatter, target)
  }

  dateTargetConnected(target) {
    this.#formatTime(this.dateFormatter, target)
  }

  datetimeTargetConnected(target) {
    this.#formatTime(this.datetimeFormatter, target)
  }

  shortdateTargetConnected(target) {
    this.#formatTime(this.shortdateFormatter, target)
  }

  agoTargetConnected(target) {
    this.#formatTime(this.agoFormatter, target)
  }

  #refreshRelativeTimes() {
    this.agoTargets.forEach(it => this.#formatTime(this.agoFormatter, it))
  }

  #formatTime(formatter, target) {
    const secondsToDate = seconds => new Date(seconds * 1000)
    const date = secondsToDate(parseInt(target.getAttribute("datetime")))
    target.innerHTML = formatter.format(date)
    target.title = this.datetimeFormatter.format(date)
  }
}

class TimeAgoFormat extends Intl.RelativeTimeFormat {
  constructor(locales, options) {
    super(locales, options); this.options = options
  }

  format(value) {
    const seconds = (new Date() - value) / 1000
    const minutes = seconds / 60
    const hours   = seconds / 3600
    const days    = seconds / 86400
    const weeks   = seconds / 604800
    const months  = seconds / 2629800
    const years   = seconds / 31557600

    if (years >= 1)   return super.format(-Math.floor(years), "year")
    if (months >= 1)  return super.format(-Math.floor(months), "month")
    if (weeks >= 1)   return super.format(-Math.floor(weeks), "week")
    if (days >= 1)    return super.format(-Math.floor(days), "day")
    if (hours >= 1)   return super.format(-Math.floor(hours), "hour")
    if (minutes >= 1) return super.format(-Math.floor(minutes), "minute")

    return this.options.lessThanAMinuteAgoText || "Less than a minute ago"
  }
}
