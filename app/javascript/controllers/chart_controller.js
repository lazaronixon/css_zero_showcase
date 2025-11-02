import { Controller } from "@hotwired/stimulus"
import * as echarts from "https://esm.sh/echarts@6.0.0?standalone"

export default class extends Controller {
  static values = { data: Object, options: Object }

  connect() {
    this.chart = echarts.init(this.element, null, this.optionsValue)
    this.chart.setOption(this.dataValue)
  }

  disconnect() {
    this.chart.dispose()
  }

  resize() {
    this.chart.resize()
  }
}
