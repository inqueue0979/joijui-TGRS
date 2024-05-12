chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.active) {
        console.log("Updated tab URL: " + changeInfo.url);
        // URL에 대한 추가적인 처리
    }
});