export class TableSelector {
  static className = 'selected'

  constructor() {
    this.group = []
    this.current = null
  }

  select($el) {
    this.clear()
    $el.focus().addClass(TableSelector.className)
    this.group.push($el)
    this.current = $el
  }

  clear() {
    this.group.forEach($el => $el.removeClass(TableSelector.className))
    this.group = []
  }

  get selectedIds() {
    return this.group.map($el => $el.id())
  }

  selectGroup($group = []) {
    this.clear()

    this.group = $group
    this.group.forEach($el => $el.addClass(TableSelector.className))
  }

  applyStyle(style) {
    this.group.forEach($el => $el.css(style))
  }
}
