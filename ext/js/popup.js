
document.onload = function () {

    document.getElementById("start").onclick = startNevel;
}

    function startNevel() {
        chrome.runtime.sendMessage({ greeting: "start" }, function (response) { });
        alert("FFF");
    }