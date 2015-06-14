function genericOnClick(info, tab) {
  chrome.tabs.sendMessage(tab.id, {message: "scrollTo"}, function (res) {
    console.log(res.result);
  });
  console.log("send message");
}

var id = chrome.contextMenus.create({
  "title": "Scroll to Pin", 
  "contexts": ["all"], 
  "onclick": genericOnClick,
}, function () {
  if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
  }
});
