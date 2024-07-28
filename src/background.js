chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "openPopup // not using anymore") {
        chrome.windows.create({
            url: chrome.runtime.getURL("warning.html"),
            type: "popup",
            width: 400,
            height: 300
        });
    }
});

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
  });
  
  // 예: 브라우저 액션 클릭 시 팝업 표시
  chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, { action: 'showPopup' });
  });