import {DOMListener} from '@core/DOMListener'

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name
    this.emitter = options.emitter
    this.unsubscribers = []
    this.prepare()
  }

  prepare() {
  }

  toHTML() {
    return ''
  }

  $emit(eventName, ...args) {
    this.emitter.emit(eventName, ...args)
  }

  $on(eventName, fn) {
    const unsub = this.emitter.subscribe(eventName, fn)
    this.unsubscribers.push(unsub)
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
