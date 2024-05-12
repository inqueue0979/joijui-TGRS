chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "openPopup") {
        chrome.windows.create({
            url: "popup/warning.html",
            type: "popup",
            width: 400,
            height: 300
        });
    }
});