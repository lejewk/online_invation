function showLoading(message) {
  document.getElementById("loadingLayer").style.display = "";
  if (message) {
    document.getElementById("loadMessage").innerText = message;
  }
}
function hideLoading() {
  document.getElementById("loadingLayer").style.display = "none";
}
function showRead() {
  document.getElementById("readLayer").style.display = "block";
}
function hideRead() {
  document.getElementById("readLayer").style.display = "none";
}
function showMap() {
  document.getElementById("mapLayer").style.display = "block";
}
function hideMap() {
  document.getElementById("mapLayer").style.display = "none";
}