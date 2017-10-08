chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.storage.sync.get({
      owoToken: "",
      owoShort: "awau.moe",
      owoIndex: 1
   }, function(d) {
      if(d.owoToken == "") {
         chrome.tabs.sendMessage(tab.id, {owoResult: "No token, please configure."});
      } else {
         req = new XMLHttpRequest();
         req.onreadystatechange = function() {
            if(req.readyState == 4 && req.status == 200) {
               chrome.tabs.sendMessage(tab.id, {
                  owoResult: req.response.replace("awau.moe", d.owoShort)
               });
            }
         }
         req.open("GET", "https://api.awau.moe/shorten/polr?key="+d.owoToken+"&action=shorten&url="+tab.url, true);
         req.send();
      }
   });
});