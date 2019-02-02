// 전투 진입
function drawEntryBattle() {
  return new Promise((resolve) => {
    var invationPosX = 0;
    var invationStatusPosX = -200;
    var friendGroundPosX = -200;
    var friendPosX = -200;
    var friendStatusPosX = window.innerWidth + 100;
  
    var interval = setInterval(() => {  
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // 캔버스를 비운다

      let speed = 10;
      
      let d1 = background();
      let d2 = messageBox();
      let d3 = invation(invationPosX+=speed, 90);
      let d4 = invationStatus(invationStatusPosX+=speed, 50);
      let d5 = friendGround(friendGroundPosX+=speed, 250);
      let d6 = friend(friendPosX+=speed, 178);
      let d7 = friendStatus(friendStatusPosX-=speed, 186);

      if (d1 && d2 && d3 && d4 && d5 && d6 && d7) {
        clearInterval(interval);
        resolve();
      }
    }, 1000/500);
  });
}