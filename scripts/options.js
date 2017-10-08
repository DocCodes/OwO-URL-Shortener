function save() {
   owoToken = document.getElementById("owoToken");
   owoShort = document.getElementById("owoShort");

   chrome.storage.sync.set({
      "owoToken": owoToken.value,
      "owoShort": owoShort.value,
      "owoIndex": owoShort.selectedIndex
   });
}
function restore() {
   chrome.storage.sync.get({
      owoToken: "",
      owoShort: "awau.moe",
      owoIndex: 1
   }, function(d) {
      owoToken = document.getElementById("owoToken");
      owoShort = document.getElementById("owoShort");

      owoToken.value = d.owoToken;
      owoShort.selectedIndex = d.owoIndex;
   });
}

document.addEventListener("DOMContentLoaded", restore);
document.getElementById("owoSave").addEventListener("click", save);