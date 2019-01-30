function background() {
  ctx.drawImage(images.background.img, 0, 0, window.innerWidth, window.innerHeight);
  return true;
}

function invation(x, y) {
  let img = images.invation.img;
  let endX = window.innerWidth - img.width - 10;
  x = x > endX ? endX : x;
  ctx.drawImage(img, x, y);
  return x === endX;
}

function invationStatus(x, y) {
  let endX = 10;
  x = x > endX ? endX : x;
  ctx.drawImage(images.invationStatus.img, x, y);
  return x === endX;
}

function friendGround(x, y) {
  let endX = 0;
  x = x > endX ? endX : x;
  ctx.drawImage(images.friendGround.img, x, y);
  return x === endX;
}

function friend(x, y) {
  let endX = 40;
  x = x > endX ? endX : x;
  ctx.drawImage(images.friend.img, x, y);
  return x === endX;
}

function friendStatus(x, y) {
  let endX = window.innerWidth - 170;
  x = x < endX ? endX : x;
  ctx.drawImage(images.friendStatus.img, x, y);
  return x === endX;
}

function messageBox() {
  let startHeight = 269,
      sideWidth = 19,
      sideHeight = 13;

  ctx.drawImage(images.mb_1.img, 0, startHeight);

  for (i = sideWidth; i < window.innerWidth - sideWidth; i++) {
    ctx.drawImage(images.mb_2.img, i, startHeight);
  }

  ctx.drawImage(images.mb_3.img, canvas.width - images.mb_3.img.width, startHeight);

  for (i = startHeight + sideHeight; i < window.innerHeight - sideHeight; i++) {
    ctx.drawImage(images.mb_4.img, 0, i);
  }

  for (i = startHeight + sideHeight; i < window.innerHeight - sideHeight; i++) {
    ctx.drawImage(images.mb_6.img, canvas.width - sideWidth, i);
  }

  ctx.drawImage(images.mb_7.img, 0, window.innerHeight - sideHeight);

  for (i = sideWidth; i < window.innerWidth - sideWidth; i++) {
    ctx.drawImage(images.mb_8.img, i, window.innerHeight - sideHeight);
  }

  ctx.drawImage(images.mb_9.img, canvas.width - images.mb_9.img.width, window.innerHeight - sideHeight);

  ctx.fillStyle = '#285068';
  ctx.fillRect(
    sideWidth,
    startHeight + sideHeight,
    window.innerWidth - (sideWidth * 2),
    window.innerHeight - startHeight - (sideHeight * 2)
  );
  return true;
}

function choiceBox() {
  let startHeight = 320,
  sideWidth = 14,
  sideHeight = 14;

  ctx.drawImage(images.cb_1.img, 0, startHeight);

  for (i = sideWidth; i < window.innerWidth - sideWidth; i++) {
    ctx.drawImage(images.cb_2.img, i, startHeight);
  }

  ctx.drawImage(images.cb_3.img, canvas.width - images.cb_3.img.width, startHeight);

  for (i = startHeight + sideHeight; i < window.innerHeight - sideHeight; i++) {
    ctx.drawImage(images.cb_4.img, 0, i);
  }

  for (i = startHeight + sideHeight; i < window.innerHeight - sideHeight; i++) {
    ctx.drawImage(images.cb_6.img, canvas.width - sideWidth, i);
  }

  ctx.drawImage(images.cb_7.img, 0, window.innerHeight - sideHeight);

  for (i = sideWidth; i < window.innerWidth - sideWidth; i++) {
    ctx.drawImage(images.cb_8.img, i, window.innerHeight - sideHeight);
  }

  ctx.drawImage(images.cb_9.img, canvas.width - images.cb_9.img.width, window.innerHeight - sideHeight);

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = '#f8f8f8';
  ctx.fillRect(
    sideWidth,
    startHeight + sideHeight,
    window.innerWidth - (sideWidth * 2),
    window.innerHeight - startHeight - (sideHeight * 2)
  );
}

function choiceText() {
  let edgeWidth = 14;
  let edgeHeight = 14;
  let startHeight = 350 + edgeHeight;
  let endHeight = window.innerHeight - edgeHeight;

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowColor = "#d0c8d0";
  ctx.font = "bold 20px 맑은고딕";
  ctx.fillStyle = '#484848';

  let textWidth = 80;
  let textHeight = 20;
  
  let centerPosX = window.innerWidth / 2;
  let firstPosX = (centerPosX + edgeWidth) / 2 - textWidth / 2;
  let secondPosX = (centerPosX + window.innerWidth - edgeWidth) / 2 - textWidth / 2;

  let centerPosY = (endHeight + startHeight) / 2;
  let firstPosY = (centerPosY + startHeight) / 2 - textHeight / 2;
  let secondPosY = (centerPosY + endHeight) / 2;


  window.readRect = {
      x: firstPosX,
      y: firstPosY,
      w: textWidth,
      h: textHeight
  };

  window.mapRect = {
      x: secondPosX,
      y: firstPosY,
      w: textWidth,
      h: textHeight
  };

  window.attendRect = {
      x: firstPosX,
      y: secondPosY,
      w: textWidth,
      h: textHeight
  };

  window.runRect = {
      x: secondPosX,
      y: secondPosY,
      w: textWidth,
      h: textHeight
  };

  ctx.fillText("내용읽기", readRect.x, readRect.y);
  ctx.fillText("약도보기", mapRect.x, mapRect.y);
  ctx.fillText("참석한다", attendRect.x, attendRect.y);
  ctx.fillText("도망간다", runRect.x, runRect.y);
}
