chrome.runtime.onMessage.addListener(function(msg) {
   console.log("OwO Shortened Link: "+msg.owoResult);
   var copyArea = document.createElement("textarea");
   copyArea.value = msg.owoResult;
   document.body.appendChild(copyArea);
   copyArea.select();
   copyArea.focus();
   document.execCommand("copy");
   document.body.removeChild(copyArea);
});