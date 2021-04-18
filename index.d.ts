type TConfig = {
  twitterUsername: string
  backgroundColor: string
  iconColor: string
  selectableElements: (string | Element)[]
}
type TCustomShareButtons = { icon: string; url: string }[]
type TCustomButtons = { icon: string; onclick: () => void }[]
interface ISelectionPopup {
  appendCustomShareButtons(buttons: TCustomShareButtons): ISelectionPopup
  appendCustomButtons(buttons: TCustomButtons): ISelectionPopup
  init(): ISelectionPopup
}
const SelectionPopup = {
  config(t: TConfig): ISelectionPopup
}

export default SelectionPopup
