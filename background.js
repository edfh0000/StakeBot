/*
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['inject.js'] 
  });
});*/

const targetSites = [
  "stake.bet", "stake.com", "stake.pet", "stake.kim", "stake.us",
  "stake.games", "stake.mba", "stake.ac", "stake.jp", "stake.bz",
  "stake.krd", "stake.ceo", "staketr.com", "primedice.com",
  "stake1022.com", "stake1021.com", "stake1067.com"
];

chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.scripting.executeScript({
    target: { tabId: details.tabId },
    files: ['inject.js']
  });
}, {
  url: targetSites.map(host => ({ hostEquals: host }))

});

