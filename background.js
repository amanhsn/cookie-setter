function handleClick() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: "set_cookie"}, function(response) {
      if (response && response.message === "cookie_set") {
        console.log("Cookie set successfully.");
      } else {
        console.log("Cookie not set.");
      }
    });
  });
}

chrome.action.onClicked.addListener(handleClick);
