chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  try {
    if (request.message === "set_cookie") {
      var cookieName = "test";
      var cookieValue = "12345";
      var url = window.location.hostname;
      console.log(url);
      var expires = new Date();
      expires.setTime(expires.getTime() + (48 * 60 * 60 * 1000));
      document.cookie = cookieName + "=" + cookieValue + ";expires=" + expires.toUTCString() + ";path=/;domain=" + url + ";SameSite=None;Secure";
      location.reload();
    }
  }
  catch (error) {
    console.log("Error in set cookie extension: " + error);
  }
});

