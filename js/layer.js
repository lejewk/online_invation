function showLoading() {
  document.getElementById("loadingLayer").style.display = "";
}

function hideLoading() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("loadingLayer").style.display = "none";
      resolve();
    }, 2000);
  });
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