import getTooltipPosition from './getTooltipPosition'

export default function moveTooltip(props) {
  const { top, left } = getTooltipPosition(props)
  let tooltip = document.querySelector('.SelectionPopup__NoCollisions')
  tooltip.style.top = `${top}px`
  tooltip.style.left = `${left}px`
}
