const url = window.location.href;
console.log("Current tab URL: " + url);

if (url.includes("https://ko.aliexpress.com/item/1005006941756742")) {
    chrome.runtime.sendMessage({ action: "openPopup" });
}
