const setIcon = function (substring) {
  chrome.browserAction.setIcon({
    path: {
      48: `/icons/browse-periodically-${substring}48.png`,
      92: `/icons/browse-periodically-${substring}92.png`
    }
  })
}

module.exports = {
  enable: function (frequency) {
    setIcon('')
    chrome.browserAction.setBadgeText({ text: frequency.replace('-', ' ') })
  },
  disable: function () {
    setIcon('disabled-')
    chrome.browserAction.setBadgeText({ text: '' })
  }
}