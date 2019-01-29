function loadImages() {
  return new Promise((resolve) => {
    let imageLoadPromises = [];

    for (var image in images) {
      (function(image) {
        imageLoadPromises.push(new Promise((resolve) => {
          let img = new Image();
          img.src = image.url;
          img.onload = function() {
            image.img = img;
            resolve();
          }
        }));
      })(images[image]);
    }

    Promise.all(imageLoadPromises).then(() => {
      resolve();
    });
  });
}