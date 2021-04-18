import ShareButton, {
  createCustomButton
} from '../Button/ShareButton/ShareButton'

export default function getIcons({
  networks,
  customShareButtons,
  customButtons
}) {
  const icons = document.createElement('div')
  let length = 0
  for (let n in networks) {
    if (networks[n] && networks[n].isActive) {
      let { icon, url, username } = networks[n]
      icons.appendChild(ShareButton(icon, url, username))
      length++
    }
  }
  if (customShareButtons.length > 0) {
    customShareButtons.forEach((btn) => {
      icons.appendChild(ShareButton(btn.icon, btn.url))
      length++
    })
  }
  if (customButtons.length > 0) {
    customButtons.forEach((btn) => {
      icons.appendChild(createCustomButton(btn.icon, btn.onclick))
      length++
    })
  }
  return { icons, length }
}
