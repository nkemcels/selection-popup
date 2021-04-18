import getClosestElement from './getClosestElement'

export default function isSelectableElement(selectableElements) {
  const baseNode =
    window.getSelection().baseNode || window.getSelection().anchorNode
  let currentSelectedElement = baseNode.parentNode
  return selectableElements.some((ancestor) =>
    typeof ancestor === 'string'
      ? getClosestElement(currentSelectedElement, ancestor)
      : ancestor instanceof Element
      ? ancestor.contains(currentSelectedElement)
      : false
  )
}
