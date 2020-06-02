const TABLE_NAMES = {
  A: 65,
  Z: 90
}

function getCell() {
  return `<div class="cell" contenteditable></div>`
}

function getColumn(name) {
  return `
  <div class="column">
  ${name}
  </div>
  `
}

function createRow(content, info = '') {
  return `
  <div class="row">
    <div class="row-info">${info}</div> 
    <div class="row-data">${content}</div> 
  </div>`
}

function getChar(_, index) {
  return String.fromCharCode(TABLE_NAMES.A + index)
}

export function createTable(rowsNum = 50) {
  const colsNum = TABLE_NAMES.Z - TABLE_NAMES.A
  const rows = []
  const cols = new Array(colsNum+1)
      .fill('')
      .map(getChar)
      .map(getColumn)
      .join('')
  rows.push(createRow(cols))
  const contentCol = new Array(colsNum+1)
      .fill('')
      .map(getCell)
      .join('')
  for (let i = 0; i < rowsNum; i++) {
    rows.push(createRow(contentCol, i+1))
  }
  return rows.join('')
}
