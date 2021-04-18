export function appendIconStyle({ iconColor }) {
  const style = document.createElement('style')
  style.id = 'sharect-style'
  style.innerHTML = `.SelectionPopup__NoCollisions svg{fill:${iconColor};}`
  document.body.appendChild(style)
}
