export function firstLetterToUpperCase(str) {
  if (typeof str !== 'string') {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function range(start, end) {
  [end, start] = start > end ? [start, end] : [end, start]
  return new Array(end - start + 1)
      .fill('')
      .map((_, index) => start + index)
}
