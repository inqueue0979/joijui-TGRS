const url = window.location.href;
console.log("Current tab URL: " + url);

if (url.includes("https://www.google.com/search?q=hi")) {
    chrome.runtime.sendMessage({ action: "openPopup" });
}
