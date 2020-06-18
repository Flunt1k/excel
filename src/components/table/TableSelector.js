export class TableSelector {
  static className = 'selected'
  constructor() {
    this.group = []
    this.current = null
  }

  select($el) {
    this.clear()
    this.group.push($el)
    this.current = $el
    $el.focus().setClass(TableSelector.className)
  }

  clear() {
    this.group.forEach($el => $el.removeClass(TableSelector.className))
    this.group = []
  }

  selectGroup($group = []) {
    this.clear()
    this.group = $group
    this.group.forEach($el => $el.setClass(TableSelector.className))
  }
}
