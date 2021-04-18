import hasTooltipDrawn from './hasTooltipDrawn'
import hasSelection from './hasSelection'
import isSelectableElement from './isSelectableElement'
import moveTooltip from './moveTooltip'
import renderTooltip from './renderTooltip'

let props = null
function handleMouseUp() {
  setTimeout(function mouseTimeout() {
    if (hasTooltipDrawn()) {
      if (hasSelection() && isSelectableElement(props.selectableElements)) {
        moveTooltip({ ...props })
        return
      } else {
        document.body.removeChild(
          document.querySelector('.SelectionPopup__NoCollisions')
        )
      }
    }
    if (hasSelection() && isSelectableElement(props.selectableElements)) {
      renderTooltip({ ...props })
    }
  }, 10)
}

export default function attachEvents(_props) {
  props = _props
  window.removeEventListener('mouseup', handleMouseUp, false)
  window.addEventListener('mouseup', handleMouseUp, false)
}
