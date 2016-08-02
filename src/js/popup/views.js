const optionsViewEl = document.querySelector('#optionsView')
const typingViewEl = document.querySelector('#typingView')
const typingEl = document.querySelector('#typing')
const lastKeys = require('./last_keys')

module.exports = {
  showFrequencyTypingView: () => {
    hide(optionsViewEl)
    show(typingViewEl)
    typingEl.textContent = lastKeys.getMatchingPart()
  },
  showFrequencyOptionsView: () => {
    hide(typingViewEl)
    show(optionsViewEl)
    typingEl.textContent = ''
  }
}

const show = (el) => el.style.display = 'block'
const hide = (el) => el.style.display = 'none'