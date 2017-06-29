
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.greeting == "start")
            nevel();
    }
  );

function nevel() {
    if (!!localStorage.getItem('autoNevelization')) {

        alert("active");
        findAndReplaceDOMText(document.body, {
            find: /[ае]/g,
            replace: "э"
        });
        document.title.replace(/[ае]/g, "э");
    }
}

