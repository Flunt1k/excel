import {$} from '@core/dom'

export function resizeHandler($root, event) {
  const $target = $(event.target)
  const $parent = $target.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const type = $target.data.resize
  const prop = type === 'col' ? 'bottom' : 'right'
  let value
  $target.css({
    opacity: 1,
    [prop]: '-5000px',
  })
  document.onmousemove = ev => {
    if (type === 'col') {
      const delta = ev.pageX - coords.right
      value = coords.width + delta
      $target.css({right: -delta + 'px'})
    } else {
      const delta = ev.pageY - coords.bottom
      value = coords.height + delta
      $target.css({bottom: -delta + 'px'})
    }
  }

  document.onmouseup = ev => {
    document.onmousemove = null
    document.onmouseup = null

    if (type === 'col') {
      $parent.css({width: value + 'px'})
      $root.findAll(`[data-cell="${$parent.data.col}"]`).
          forEach(el => el.style.width = value + 'px')
    } else {
      $parent.css({height: value + 'px'})
    }

    $target.css({
      opacity: 0,
      bottom: 0,
      right: 0,
    })
  }
}
