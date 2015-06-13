document.ondblclick = function (e) {
	e.target.classList.add("crx-scroll-to");
}

chrome.runtime.onMessage.addListener(
	function (req, sender, sendRes) {
		console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
		if (req.message == "scrollTo") {
			document.getElementsByClassName('crx-scroll-to')[0].scrollIntoView();
		}
		sendRes({result: "success"});
	}
)