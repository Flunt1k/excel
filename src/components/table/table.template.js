const TABLE_NAMES = {
  A: 65,
  Z: 90
}

function getCell(_, index) {
  return `<div class="cell" contenteditable data-cell="${index}"></div>`
}

function getColumn(name, index) {
  return `
  <div class="column" data-type="resizable" data-col="${index}">
    ${name}
  <div class="col-resize" data-resize="col"></div>
  </div>
  `
}

function createRow(content, info = '') {
  const resize = info ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
  <div class="row" data-type="resizable">
    <div class="row-info">
        ${info}
        ${resize}
    </div> 
    <div class="row-data">
        ${content}
    </div> 
  </div>`
}

function getChar(_, index) {
  return String.fromCharCode(TABLE_NAMES.A + index)
}

export function createTable(rowsNum = 50) {
  const colsNum = TABLE_NAMES.Z - TABLE_NAMES.A
  const rows = []
  const cols = new Array(colsNum + 1)
      .fill('')
      .map(getChar)
      .map(getColumn)
      .join('')
  rows.push(createRow(cols))
  const contentCol = new Array(colsNum + 1)
      .fill('')
      .map(getCell)
      .join('')
  for (let i = 0; i < rowsNum; i++) {
    rows.push(createRow(contentCol, i + 1))
  }
  return rows.join('')
}
