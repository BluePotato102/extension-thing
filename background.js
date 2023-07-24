function handleTab(tab) {
  if (tab.url.startsWith("https://www.youtube.com/shorts")) {
    chrome.tabs.remove(tab.id);
  }
}

chrome.tabs.onCreated.addListener(handleTab);
chrome.tabs.onUpdated.addListener(handleTab);
